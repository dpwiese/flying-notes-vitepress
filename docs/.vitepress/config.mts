import { defineConfig } from 'vitepress'
import implicitFigures from 'markdown-it-implicit-figures'
import headingShiftPlugin from './plugins/heading-shift'
import markdownItHighlight from './plugins/highlight'

const publicExclude = ['**/includes/**']

export default defineConfig({
  title: "Flying Notes",
  description: "A compendium of my flying notes",
  themeConfig: {
    nav: [
      { text: 'CFI Notes', link: '/cfi-notes/foi/human-behavior' },
      { text: 'CFII Notes', link: '/cfii-notes/tsa/flight-instruments' }
    ],
    sidebar: {
      '/cfi-notes/': {
        base: '/cfi-notes/',
        items: [
          {
            text: 'Fundamentals of Instructing',
            collapsed: false,
            items: [
              { text: 'Human Behavior', link: '/foi/human-behavior' },
              { text: 'Learning Process', link: '/foi/learning-process' },
              { text: 'Course Development', link: '/foi/course-development' },
              { text: 'Student Evaluation', link: '/foi/student-evaluation' },
              { text: 'Effective Teaching', link: '/foi/effective-teaching' },
              { text: 'Risk Management', link: '/foi/risk-management' },
              { text: 'Appendix', link: '/foi/appendix' }
            ]
          },
          {
            text: 'Technical Subject Areas',
            collapsed: false,
            items: [
              { text: 'Human Factors', link: '/tsa/human-factors' },
              { text: 'Collision Avoidance', link: '/tsa/collision-avoidance' },
              { text: 'Runway Incursion Avoidance', link: '/tsa/runway-incursions' },
              { text: 'Principles of Flight', link: '/tsa/principles-of-flight' },
              { text: 'Flight Controls and Systems', link: '/tsa/flight-controls-and-systems' }
            ]
          }
        ]
      },
      '/cfii-notes/': {
        base: '/cfii-notes/',
        items: [
          {
            text: 'Technical Subject Areas',
            collapsed: false,
            items: [
              { text: 'Flight Instruments and Navigation Equipment', link: '/tsa/flight-instruments' }
            ]
          },
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dpwiese' }
    ],
    outline: [2, 3],
    search: {
      provider: 'local'
    },
  },
  markdown: {
    math: true,
    config: (md) => {
      md.use(implicitFigures, {
        figcaption: true,
        copyAttrs: '^class$'
      });
      md.use(headingShiftPlugin());
      md.use(markdownItHighlight);
    }
  },
  cleanUrls: true,
  srcExclude: publicExclude,
  vite: {
    server: {
      fs: {
        deny: publicExclude,
      },
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: '@import "./custom.css";'
        }
      }
    }
  }
})
