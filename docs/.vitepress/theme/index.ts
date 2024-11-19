import { Theme, useRoute, inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import {watch, nextTick } from 'vue'
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

      watch(
        () => route.path,
        () => {
          nextTick(() => {
            if (window.MathJax) {
              window.MathJax.typesetPromise()
                .catch((err) => console.error('MathJax typeset failed:', err))
            }
          });
        }
      );

      nextTick(() => {
        if (window.MathJax) {
          window.MathJax.typesetPromise()
            .catch((err) => console.error('MathJax initial typeset failed:', err))
        }
      })
    }
  }
}

export default theme
