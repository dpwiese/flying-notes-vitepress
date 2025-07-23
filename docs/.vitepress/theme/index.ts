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

      // This nasty helper function is a quick hack to solve what seems to be a
      // bug best described in https://github.com/vuejs/vitepress/issues/3428.
      // When navigating to a part of a page by clicking items in the sideline
      // bar, it works as expected, including writing the hash to the URL.
      // However, when attempting to navigate to a section of the page via a URL
      // with hash, it scrolls somewhere weird. Other attempts to "manually"
      // scroll to the desired portion of the page were ugly, fragile, and did
      // not really work. This hack is designed to just automatically "click"
      // on the link associated with the hash in the URL to properly take us to
      // the right place on the page.
      const scrollToHash = () => {
        if (!location.hash) return;

        nextTick(() => {
          const id = decodeURIComponent(location.hash.slice(1));

          // Find the sidebar links that look like <a href="#my-heading">...</a>
          const link = document.querySelector(
            `.VPDocAsideOutline a[href="#${CSS.escape(id)}"]`
          ) as HTMLAnchorElement | null;

          if (link) {
            link.click();
            return;
          }
        });
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
        // Shameful hack
        setTimeout(scrollToHash, 10);
      });

      // Run on every route or hash change
      watch(
        () => [route.path, route.hash],
        () => {
          nextTick(retypeset);
          modifyOutlineLinks();
          // Shameful hack
          setTimeout(scrollToHash, 10);
        }
      );

      nextTick(retypeset);
    }
  }
}

export default theme
