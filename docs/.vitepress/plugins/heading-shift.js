import { existsSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';

function shiftHeadings(content, shiftBy = 1) {
  return content.replace(/^(#{1,6})\s+/gm, (match, hashes) => {
    // Limit the heading level to a maximum of 6 hashes
    const newLevel = Math.min(hashes.length + shiftBy, 6);
    return `${'#'.repeat(newLevel)} `;
  });
}

export default function headingShiftPlugin() {
  return (md) => {
    // Override the markdown parser's render function to apply heading shifts during rendering
    const originalRender = md.render.bind(md);
    md.render = (src, env) => {
      // Replace @include directives before rendering
      const transformedSrc = src.replace(/<!--@include:\s*(.*?)\s*\|\s*shift:\s*(-?\d+)\s*-->/g, (_, filePath, shiftValue) => {
        const absolutePath = resolve(dirname(env.filePath || ''), filePath.trim());
        if (existsSync(absolutePath)) {
          let includedContent = readFileSync(absolutePath, 'utf-8');
          const headingShift = parseInt(shiftValue, 10) || 0;
          includedContent = shiftHeadings(includedContent, headingShift);
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
