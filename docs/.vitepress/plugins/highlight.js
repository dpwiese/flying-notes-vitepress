export default function markdownItHighlight(md) {
  md.inline.ruler.after('emphasis', 'highlight', (state, silent) => {
    const start = state.pos;
    const marker = state.src.charCodeAt(start);

    // Ensure the marker is '=' and there are at least two of them (for '==')
    if (marker !== 0x3D || state.src.charCodeAt(start + 1) !== 0x3D) {
      return false;
    }

    const max = state.posMax;
    let pos = start + 2;

    // Look for the closing '=='
    while (pos < max) {
      if (state.src.charCodeAt(pos) === 0x3D && state.src.charCodeAt(pos + 1) === 0x3D) {
        // Closing '==' found

        if (!silent) {
          // Create an opening token for <mark>
          const tokenOpen = state.push('mark_open', 'mark', 1);
          tokenOpen.markup = '==';

          // Temporarily set posMax to the end of the inner content
          const originalPos = state.pos;
          state.pos = start + 2;
          state.posMax = pos;

          // Tokenize the inner content between '=='
          state.md.inline.tokenize(state);

          // Restore the original posMax
          state.pos = pos + 2;
          state.posMax = max;

          // Create a closing token for </mark>
          const tokenClose = state.push('mark_close', 'mark', -1);
          tokenClose.markup = '==';
        }

        // Move state.pos past the closing '=='
        state.pos = pos + 2;
        return true;
      }
      pos++;
    }

    // If no closing '==' found, return false to indicate failure to parse
    return false;
  });
}
