import { defineConfig, HeadConfig } from 'vitepress'
import implicitFigures from 'markdown-it-implicit-figures'
import headingShiftPlugin from './plugins/heading-shift'
import markdownItHighlight from './plugins/highlight'
import FullReload from 'vite-plugin-full-reload'

const publicExclude = ['**/includes/**']
const inProd = process.env.NODE_ENV === 'production'

const iconHeaders: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }]
]

const umamiHeader: HeadConfig = [
  'script',
  {
    async: 'true',
    defer: 'true',
    'data-website-id': 'b8623f54-cf19-4e90-94cb-3ca24c2ca32d',
    src: 'https://cloud.umami.is/script.js'
  }
]

const mathJaxHeaders: HeadConfig[] = [
  [
    'script',
    {},
    `
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
        processEscapes: true,
        processEnvironments: true,
        tags: 'ams',
        tagSide: 'right',
        tagIndent: '0em',
        useLabelIds: true,
      },
      chtml: {
        scale: 0.9
      },
      svg: {
        fontCache: 'global'
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
      }
    };
    `
  ],
  [
    'script',
    {
      type: 'text/javascript',
      id: 'MathJax-script',
      async: 'true',
      src: '/mathjax/tex-mml-chtml.js'
    }
  ]
]

const baseHeaders: HeadConfig[] = [...iconHeaders, ...mathJaxHeaders]

const headers = inProd ? [...baseHeaders, umamiHeader] : baseHeaders

export default defineConfig({
  title: "Flying Notes",
  description: "A compendium of my flying notes",
  rewrites: {
    'src/:slug*': ':slug*',
    'src/': ''
  },
  themeConfig: {
    nav: [
      { text: 'Private', link: '/par', activeMatch: '^/par/' },
      { text: 'Instrument', link: '/ira', activeMatch: '^/ira/' },
      { text: 'CFI', link: '/cfi', activeMatch: '^/cfi/' },
      { text: 'CFII', link: '/cfii', activeMatch: '^/cfii/' },
      { text: 'Aircraft', link: '/aircraft', activeMatch: '^/aircraft/' },
      { text: 'Study Guides', link: '/study-guides', activeMatch: '^/study-guides/' }
    ],
    sidebar: {
      '/par/': [
        {
          text: 'Preflight Preparation',
          collapsed: false,
          items: [
            { text: 'Pilot Qualifications', link: '/par/preflight-prep/pilot-qualifications' },
            { text: 'Airworthiness Requirements', link: '/par/preflight-prep/airworthiness' },
            { text: 'Meteorology', link: '/par/preflight-prep/meteorology' },
            { text: 'Weather Products', link: '/par/preflight-prep/weather-products' },
            { text: 'Cross-Country Planning', link: '/par/preflight-prep/xc-planning' },
            { text: 'National Airspace System', link: '/par/preflight-prep/airspace' },
            { text: 'Performance and Limitations', link: '/par/preflight-prep/performance-and-limitations' },
            { text: 'Operation of Systems', link: '/par/preflight-prep/systems' },
            { text: 'Human Factors', link: '/par/preflight-prep/human-factors' }
          ]
        },
        {
          text: 'Preflight Procedures',
          collapsed: false,
          items: [
            { text: 'Preflight Assessment', link: '/par/preflight-procedures/preflight-assessment' },
            { text: 'Flight Deck Management', link: '/par/preflight-procedures/flight-deck-management' },
            { text: 'Engine Starting', link: '/par/preflight-procedures/engine-starting' },
            { text: 'Taxiing', link: '/par/preflight-procedures/taxiing' },
            { text: 'Before Takeoff Check', link: '/par/preflight-procedures/before-takeoff-check' }
          ]
        },
        {
          text: 'Airport Operations',
          collapsed: false,
          items: [
            { text: 'Communication, Lights, Runways', link: '/par/airport-operations/communication-lights-runways' },
            { text: 'Traffic Patterns', link: '/par/airport-operations/traffic-patterns' }
          ]
        },
        {
          text: 'Takeoff and Landing',
          collapsed: false,
          items: [
            { text: 'Normal Takeoff', link: '/par/takeoff-landing/normal-takeoff' },
            { text: 'Normal Landing', link: '/par/takeoff-landing/normal-landing' },
            { text: 'Soft-Field Takeoff', link: '/par/takeoff-landing/soft-field-takeoff' },
            { text: 'Soft-Field Landing', link: '/par/takeoff-landing/soft-field-landing' },
            { text: 'Short-Field Takeoff', link: '/par/takeoff-landing/short-field-takeoff' },
            { text: 'Short-Field Landing', link: '/par/takeoff-landing/short-field-landing' },
            { text: 'Slip to Landing', link: '/par/takeoff-landing/slip' },
            { text: 'Go-Around', link: '/par/takeoff-landing/go-around' }
          ]
        },
        {
          text: 'Performance and Ground Reference',
          collapsed: false,
          items: [
            { text: 'Steep Turns', link: '/par/performance-ground-reference/steep-turns' }
          ]
        }
      ],
      '/ira/': [
        {
          text: 'Preflight Preparation',
          collapsed: false,
          items: [
            { text: 'Pilot Qualifications', link: '/ira/preflight-prep/pilot-qualifications' },
            { text: 'Meteorology', link: '/ira/preflight-prep/meteorology' },
            { text: 'Weather Products', link: '/ira/preflight-prep/weather-products' },
            { text: 'Cross-Country Planning', link: '/ira/preflight-prep/xc-planning' }
          ]
        },
        {
          text: 'Preflight Procedures',
          collapsed: false,
          items: [
            { text: 'Aircraft Systems', link: '/ira/preflight-procedures/systems' },
            { text: 'Aircraft Flight Instruments', link: '/ira/preflight-procedures/flight-instruments' },
            { text: 'Navigation Equipment', link: '/ira/preflight-procedures/nav' },
            { text: 'Flight Deck Check', link: '/ira/preflight-procedures/flight-deck-check' }
          ]
        },
        {
          text: 'ATC Clearances and Procedures',
          collapsed: false,
          items: [
            { text: 'Compliance with Clearances', link: '/ira/atc-procedures/compliance-with-clearances' },
            { text: 'Holding Procedures', link: '/ira/atc-procedures/holding-procedures' }
          ]
        },
        {
          text: 'Instrument Flight',
          collapsed: false,
          items: [
            { text: 'Instrument Flight', link: '/ira/instrument-flight/instrument-flight' },
            { text: 'Unusual Attitudes', link: '/ira/instrument-flight/unusual-attitudes' }
          ]
        },
        {
          text: 'Navigation Systems',
          collapsed: false,
          items: [
            { text: 'Intercepting, Tracking, and DME Arcs', link: '/ira/nav-systems/intercepting-and-dme-arcs' },
            { text: 'Departure, En Route, and Arrival', link: '/ira/nav-systems/departure-enroute-arrival' }
          ]
        },
        {
          text: 'Instrument Approaches',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/ira/approaches/overview' },
            { text: 'GPS Approach', link: '/ira/approaches/gps' },
            { text: 'Non-precision Approach', link: '/ira/approaches/nonprecision' },
            { text: 'Precision Approach', link: '/ira/approaches/precision' },
            { text: 'Missed Approach', link: '/ira/approaches/missed' },
            { text: 'Circling Approach', link: '/ira/approaches/circling' },
            { text: 'Landing from an Approach', link: '/ira/approaches/landing' }
          ]
        },
        {
          text: 'Emergency Operations',
          collapsed: false,
          items: [
            { text: 'Loss of Communications', link: '/ira/emergencies/lost-comms' },
            { text: 'Partial Panel Approach', link: '/ira/emergencies/partial-panel-approach' }
          ]
        }
      ],
      '/cfi/': [
        {
          text: 'Fundamentals of Instructing',
          collapsed: false,
          items: [
            { text: 'Human Behavior', link: '/cfi/foi/human-behavior' },
            { text: 'Learning Process', link: '/cfi/foi/learning-process' },
            { text: 'Course Development', link: '/cfi/foi/course-development' },
            { text: 'Student Evaluation', link: '/cfi/foi/student-evaluation' },
            { text: 'Effective Teaching', link: '/cfi/foi/effective-teaching' },
            { text: 'Risk Management', link: '/cfi/foi/risk-management' },
            { text: 'Appendix', link: '/cfi/foi/appendix' }
          ]
        },
        {
          text: 'Technical Subject Areas',
          collapsed: false,
          items: [
            { text: 'Human Factors', link: '/cfi/tsa/human-factors' },
            { text: 'Collision Avoidance', link: '/cfi/tsa/collision-avoidance' },
            { text: 'Runway Incursion Avoidance', link: '/cfi/tsa/runway-incursions' },
            { text: 'Principles of Flight', link: '/cfi/tsa/principles-of-flight' },
            { text: 'Flight Controls and Systems', link: '/cfi/tsa/flight-controls-and-systems' },
            { text: 'Performance and Limitations', link: '/cfi/tsa/performance-and-limitations' },
            { text: 'National Airspace System', link: '/cfi/tsa/airspace' },
            { text: 'Navigation Systems and Radar Services', link: '/cfi/tsa/nav-systems-radar-services' },
            { text: 'Navigation and XC Planning', link: '/cfi/tsa/navigation-and-xc-planning' },
            { text: '14 CFR and Publications', link: '/cfi/tsa/cfrs-and-publications' },
            { text: 'Endorsements and Logbook Entries', link: '/cfi/tsa/endorsements-and-logbooks' },
            { text: 'Night Operations', link: '/cfi/tsa/night-operations' },
            { text: 'High Altitude Operations', link: '/cfi/tsa/high-altitude-ops' },
            { text: 'OEI Performance', link: '/cfi/tsa/oei-performance' }
          ]
        },
        {
          text: 'Preflight Preparation',
          collapsed: false,
          items: [
            { text: 'Pilot Qualifications', link: '/cfi/preflight-prep/pilot-qualifications' },
            { text: 'Airworthiness Requirements', link: '/cfi/preflight-prep/airworthiness' },
            { text: 'Meteorology', link: '/cfi/preflight-prep/meteorology' },
            { text: 'Weather Products', link: '/cfi/preflight-prep/weather-products' }
          ]
        },
        {
          text: 'Preflight Procedures',
          collapsed: false,
          items: [
            { text: 'Preflight Assessment', link: '/cfi/preflight-procedures/preflight-assessment' },
            { text: 'Flight Deck Management', link: '/cfi/preflight-procedures/flight-deck-management' },
            { text: 'Engine Starting', link: '/cfi/preflight-procedures/engine-starting' },
            { text: 'Taxiing, Airport Signs, and Lighting', link: '/cfi/preflight-procedures/taxiing-signs-lighting' },
            { text: 'Before Takeoff Check', link: '/cfi/preflight-procedures/before-takeoff-check' }
          ]
        },
        {
          text: 'Airport Operations',
          collapsed: false,
          items: [
            { text: 'Communication, Lights, Runways', link: '/cfi/airport-operations/communication-lights-runways' },
            { text: 'Traffic Patterns', link: '/cfi/airport-operations/traffic-patterns' }
          ]
        },
        {
          text: 'Takeoff and Landing',
          collapsed: false,
          items: [
            { text: 'Normal Takeoff', link: '/cfi/takeoff-landing/normal-takeoff' },
            { text: 'Normal Landing', link: '/cfi/takeoff-landing/normal-landing' },
            { text: 'Soft-Field Takeoff', link: '/cfi/takeoff-landing/soft-field-takeoff' },
            { text: 'Soft-Field Landing', link: '/cfi/takeoff-landing/soft-field-landing' },
            { text: 'Short-Field Takeoff', link: '/cfi/takeoff-landing/short-field-takeoff' },
            { text: 'Short-Field Landing', link: '/cfi/takeoff-landing/short-field-landing' },
            { text: 'Slip to Landing', link: '/cfi/takeoff-landing/slip' },
            { text: 'Go-Around', link: '/cfi/takeoff-landing/go-around' },
            { text: 'Power-Off 180&#176;', link: '/cfi/takeoff-landing/power-off-180' }
          ]
        },
        {
          text: 'Fundamentals of Flight',
          collapsed: false,
          items: [
            { text: 'Straight-and-Level Flight', link: '/cfi/flight-fundamentals/straight-and-level' },
            { text: 'Level Turns', link: '/cfi/flight-fundamentals/level-turns' },
            { text: 'Climbs', link: '/cfi/flight-fundamentals/climbs' },
            { text: 'Descents', link: '/cfi/flight-fundamentals/descents' }
          ]
        },
        {
          text: 'Performance and Ground Reference',
          collapsed: false,
          items: [
            { text: 'Steep Turns', link: '/cfi/performance-ground-reference/steep-turns' },
            { text: 'Steep Spiral', link: '/cfi/performance-ground-reference/steep-spiral' },
            { text: 'Chandelles', link: '/cfi/performance-ground-reference/chandelles' },
            { text: 'Lazy Eights', link: '/cfi/performance-ground-reference/lazy-eights' },
            { text: 'Ground Reference Maneuvers', link: '/cfi/performance-ground-reference/ground-reference' },
            { text: 'Eights on Pylons', link: '/cfi/performance-ground-reference/eights-on-pylons' }
          ]
        },
        {
          text: 'Slow Flight, Stalls, and Spins',
          collapsed: false,
          items: [
            { text: 'Slow Flight', link: '/cfi/slow-flight-stalls-spins/slow-flight' }
          ]
        }
      ],
      '/cfii/': [
        {
          text: 'Technical Subject Areas',
          collapsed: false,
          items: [
            { text: 'Aircraft Flight Instruments', link: '/cfii/tsa/flight-instruments' },
            { text: 'Navigation Equipment', link: '/cfii/tsa/nav' },
            { text: 'Ground Based Navigation', link: '/cfii/tsa/ground-based-nav' },
            { text: 'Satellite Based Navigation', link: '/cfii/tsa/satellite-based-nav' },
            { text: 'Aeromedical Factors', link: '/cfii/tsa/aeromedical' },
            { text: 'Regulations and Publications', link: '/cfii/tsa/regulations-publications' },
            { text: 'Logbook Entries', link: '/cfii/tsa/logbook-entries' }
          ]
        },
        {
          text: 'Preflight Preparation',
          collapsed: false,
          items: [
            { text: 'Meteorology', link: '/cfii/preflight-prep/meteorology' },
            { text: 'Weather Products', link: '/cfii/preflight-prep/weather-products' },
            { text: 'Cross-Country Planning', link: '/cfii/preflight-prep/xc-planning' },
            { text: 'Instrument Cockpit Check', link: '/cfii/preflight-prep/instrument-cockpit-check' }
          ]
        },
        {
          text: 'ATC Clearances and Procedures',
          collapsed: false,
          items: [
            { text: 'ATC Clearances', link: '/cfii/atc-procedures/atc-clearances' },
            { text: 'Compliance with Clearances', link: '/cfii/atc-procedures/compliance-with-clearances' }
          ]
        },
        {
          text: 'Instrument Flight',
          collapsed: false,
          items: [
            { text: 'Straight-and-Level', link: '/cfii/instrument-flight/straight-and-level' },
            { text: 'Turns', link: '/cfii/instrument-flight/turns' },
            { text: 'Timed and Compass Turns', link: '/cfii/instrument-flight/timed-and-compass-turns' }
          ]
        },
        {
          text: 'Navigation Systems',
          collapsed: false,
          items: [
            { text: 'Intercepting, Tracking, and DME Arcs', link: '/cfii/nav-systems/intercepting-and-dme-arcs' },
            { text: 'Holding Procedures', link: '/cfii/nav-systems/holding-procedures' }
          ]
        },
        {
          text: 'Instrument Approaches',
          collapsed: false,
          items: [
            { text: 'Approaches Overview', link: '/cfii/approaches/overview' },
            { text: 'GPS Approach', link: '/cfii/approaches/gps' },
            { text: 'Nonprecision Approach', link: '/cfii/approaches/nonprecision' },
            { text: 'Precision Approach', link: '/cfii/approaches/precision' },
            { text: 'Missed Approach', link: '/cfii/approaches/missed' },
            { text: 'Circling Approach', link: '/cfii/approaches/circling' },
            { text: 'Landing from an Approach', link: '/cfii/approaches/landing' }
          ]
        },
        {
          text: 'Emergency Operations',
          collapsed: false,
          items: [
            { text: 'Loss of Communications', link: '/cfii/emergencies/lost-comms' },
            { text: 'Partial Panel Approach', link: '/cfii/emergencies/partial-panel-approach' }
          ]
        }
      ],
      '/aircraft/': [
        {
          text: 'Archer III NXi',
          collapsed: false,
          items: [
            { text: 'Systems', link: 'aircraft/archer-nxi/systems' }
          ]
        },
        {
          text: 'E55 Baron (Early)',
          collapsed: false,
          items: [
            { text: 'Systems', link: '/aircraft/baron/e55-early/systems' },
            { text: 'V-Speeds', link: '/aircraft/baron/e55-early/v-speeds' },
            { text: 'Weight and Balance', link: '/aircraft/baron/e55-early/weight-and-balance' },
            { text: 'Performance', link: '/aircraft/baron/e55-early/performance' },
            { text: 'Maneuvers', link: '/aircraft/baron/e55-early/maneuvers' },
            { text: 'Appendix', link: '/aircraft/baron/e55-early/appendix' }
          ]
        },
        {
          text: 'E55 Baron (Late)',
          collapsed: false,
          items: [
            { text: 'Systems', link: '/aircraft/baron/e55-late/systems' },
            { text: 'V-Speeds', link: '/aircraft/baron/e55-late/v-speeds' },
            { text: 'Weight and Balance', link: '/aircraft/baron/e55-late/weight-and-balance' },
            { text: 'Performance', link: '/aircraft/baron/e55-late/performance' },
            { text: 'Maneuvers', link: '/aircraft/baron/e55-late/maneuvers' },
            { text: 'Appendix', link: '/aircraft/baron/e55-late/appendix' }
          ]
        },
        {
          text: 'Twin Comanche',
          collapsed: false,
          items: [
            { text: 'Systems', link: '/aircraft/twin-comanche/systems' },
            { text: 'V-Speeds', link: '/aircraft/twin-comanche/v-speeds' },
            { text: 'Performance', link: '/aircraft/twin-comanche/performance' }
          ]
        },
        {
          text: 'Seminole',
          collapsed: false,
          items: [
            { text: 'Systems', link: '/aircraft/seminole/systems' }
          ]
        }
      ],
      '/study-guides/': [
        {
          text: 'Study Guides',
          collapsed: false,
          items: [
            { text: 'Private', link: '/study-guides/ppl' },
            { text: 'Commercial', link: '/study-guides/commercial' },
            { text: 'CFI', link: '/study-guides/cfi' },
            { text: 'CFII', link: '/study-guides/cfii' },
            { text: 'IPC', link: '/study-guides/ipc' },
            { text: 'High Altitude', link: '/study-guides/high-altitude' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dpwiese/flying-notes-vitepress' }
    ],
    outline: [2, 3],
    search: {
      provider: 'local'
    },
  },
  markdown: {
    math: true,
    html: true,
    config: (md) => {
      md.use(implicitFigures, {
        figcaption: true,
        copyAttrs: '^class$'
      });
      md.use(headingShiftPlugin());
      md.use(markdownItHighlight);
      const defaultFence = md.renderer.rules.fence;
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens [idx];
        if (token.info.trim() === 'math') {
          return `<div class="math display">\n${token.content}\n</div>`
        }
        return defaultFence(tokens, idx, options, env, self);
      }
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
    },
    plugins: [
      FullReload(['docs/**/*.md'])
    ],
    define: {
      __COMMIT_HASH__: JSON.stringify(process.env.COMMIT_HASH || '')
    }
  },
  head: headers
})
