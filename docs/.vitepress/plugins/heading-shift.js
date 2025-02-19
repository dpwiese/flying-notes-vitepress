import { existsSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';

function shiftHeadings(content, shiftBy = 0) {
  if (shiftBy === 0) {
    // No shifting if shiftBy is 0
    return content;
  }
  
  return content.replace(/^(#{1,6})\s+/gm, (match, hashes) => {
    // Limit the heading level to a maximum of 6 hashes
    const newLevel = Math.min(hashes.length + shiftBy, 6);
    return `${'#'.repeat(newLevel)} `;
  });
}

const base = '/';

// Regex to match include directives with an optional shift value.
const includeRegex = /<!--@include:\s*(.*?)\s*(?:\|\s*shift:\s*(-?\d+))?\s*-->/g;

function processIncludes(content, currentDir, cumulativeShift = 0) {
  // Replace @include directives before rendering
  return content.replace(includeRegex, (_, filePath, shiftValue) => {
    const trimmedPath = filePath.trim();
    // If the path starts with '.' or '/', use process.cwd() so that the relative path remains relative to the project root.
    const baseDir =
      trimmedPath.startsWith('.') || trimmedPath.startsWith('/')
        ? process.cwd()
        : currentDir;
    const absolutePath = resolve(baseDir, trimmedPath);

    if (existsSync(absolutePath)) {
      let includedContent = readFileSync(absolutePath, 'utf-8');
      // Parse the shift value for this include (default is 0)
      const thisShift = shiftValue !== undefined ? parseInt(shiftValue, 10) : 0;
      // Calculate the effective shift for this included file
      const effectiveShift = cumulativeShift + thisShift;
      
      // Shift headings using the effective shift
      includedContent = shiftHeadings(includedContent, effectiveShift);

      // Adjust image paths for relative images.
      includedContent = includedContent.replace(
        /!\[([^\]]*)\]\(([^)]+)\)/g,
        (match, altText, imgPath) => {
          if (
            imgPath.startsWith('/') ||
            imgPath.startsWith('http://') ||
            imgPath.startsWith('https://')
          ) {
            return `![${altText}](${imgPath})`;
          } else {
            return `![${altText}](${base}${imgPath})`;
          }
        }
      );

      // Recursively process nested includes, passing the new effective shift.
      return processIncludes(includedContent, dirname(absolutePath), effectiveShift);
    } else {
      console.error(`File not found: ${absolutePath}`);
      return '';
    }
  });
}

export default function headingShiftPlugin() {
  return (md) => {
    const originalRender = md.render.bind(md);
    md.render = (src, env) => {
      // Determine the starting directory: if env.filePath is available, use its directory; otherwise, use process.cwd().
      const currentDir = env.filePath ? dirname(env.filePath) : process.cwd();
      const transformedSrc = processIncludes(src, currentDir);
      return originalRender(transformedSrc, env);
    };
  };
}
