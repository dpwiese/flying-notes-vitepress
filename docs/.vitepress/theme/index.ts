import { Theme, useRoute, inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watch, nextTick, onMounted } from 'vue'
import './custom.css'

declare const __COMMIT_HASH__: string

declare global {
  interface Window {
    MathJax: any;
  }
}

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.$commitHash = __COMMIT_HASH__;
  },
  setup() {
    if (inBrowser) {
      const route = useRoute();

      // Helper: run MathJax only if and when it’s ready
      const retypeset = () => {
        const MJ: any = window.MathJax;
        if (!MJ) return;

        const run = () => {
          if (typeof MJ.typesetPromise === 'function') {
            MJ.typesetPromise().catch((err: any) =>
              console.error('MathJax typeset failed:', err)
            );
          } else if (typeof MJ.typeset === 'function') {
            MJ.typeset();
          }
        };

        MJ.startup?.promise ? MJ.startup.promise.then(run) : run();
      };

      // Helper: modify outline titles to omit anything within parentheses
      const modifyOutlineLinks = () => {
        nextTick(() => {
          const links = document.querySelectorAll('.outline-link');
          if (links.length === 0) {
            console.log('No outline links found yet.');
          } else {
            links.forEach((link) => {
              const title = link.getAttribute('title');
              if (title) {
                // Remove parentheses and update the title
                const newTitle = title.replace(/\s*\([^)]*\)/g, '');
                link.setAttribute('title', newTitle);
                link.textContent = newTitle;
              }
            });
            console.log('Outline links modified');
          }
        });
      };

      // Run on initial load
      onMounted(() => {
        modifyOutlineLinks();
      });

      // Run on every route change
      watch(
        () => route.path,
        () => {
          nextTick(retypeset);
          modifyOutlineLinks();
        }
      );

      nextTick(retypeset);
    }
  }
}

export default theme
