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

export default function headingShiftPlugin() {
  return (md) => {
    // Override the markdown parser's render function to apply heading shifts during rendering
    const originalRender = md.render.bind(md);
    md.render = (src, env) => {
      // Replace @include directives before rendering
      const transformedSrc = src.replace(/<!--@include:\s*(.*?)\s*(?:\|\s*shift:\s*(-?\d+))?\s*-->/g, (_, filePath, shiftValue) => {
        const absolutePath = resolve(dirname(env.filePath || ''), filePath.trim());
        if (existsSync(absolutePath)) {
          let includedContent = readFileSync(absolutePath, 'utf-8');
          // Default shift value is 0 if not specified
          const headingShift = shiftValue !== undefined ? parseInt(shiftValue, 10) : 0;
          includedContent = shiftHeadings(includedContent, headingShift);

          // Adjust image paths in included content only if they are relative paths
          includedContent = includedContent.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, altText, imgPath) => {
            // Skip base adjustment for absolute paths or external URLs
            if (imgPath.startsWith('/') || imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
              return `![${altText}](${imgPath})`;
            } else {
              // Apply base to relative paths
              // TODO@dpwiese - figure out if there is a use for this
              return `![${altText}](${base}${imgPath})`;
            }
          });

          return includedContent;
        } else {
          console.error(`File not found: ${absolutePath}`);
          return '';
        }
      });

      // Render the transformed markdown
      return originalRender(transformedSrc, env);
    };
  };
}
