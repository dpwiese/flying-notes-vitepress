import { existsSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';

function shiftHeadings(content, shiftBy = 1) {
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

function processIncludes(content, currentDir) {
  // Replace @include directives before rendering
  return content.replace(includeRegex, (_, filePath, shiftValue) => {
    const trimmedPath = filePath.trim();
    // If the include path starts with '.' (or '/'), treat it as relative to the project root.
    const baseDir =
      trimmedPath.startsWith('.') || trimmedPath.startsWith('/')
        ? process.cwd()
        : currentDir;
    const absolutePath = resolve(baseDir, trimmedPath);

    if (existsSync(absolutePath)) {
      let includedContent = readFileSync(absolutePath, 'utf-8');
      const headingShift = shiftValue !== undefined ? parseInt(shiftValue, 10) : 0;
      includedContent = shiftHeadings(includedContent, headingShift);

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

      // For nested includes, we still want to process recursively.
      // Notice we pass the current file's directory here, but if a nested include starts with '.' it will be resolved against process.cwd().
      return processIncludes(includedContent, dirname(absolutePath));
    } else {
      console.error(`File not found: ${absolutePath}`);
      return '';
    }
  });
}

export default function headingShiftPlugin() {
  return (md) => {
    // Override the markdown parser's render function to apply heading shifts during rendering
    const originalRender = md.render.bind(md);
    md.render = (src, env) => {
      // Use the directory of the current file if available, otherwise default to process.cwd().
      const currentDir = env.filePath ? dirname(env.filePath) : process.cwd();
      const transformedSrc = processIncludes(src, currentDir);
      return originalRender(transformedSrc, env);
    };
  };
}
