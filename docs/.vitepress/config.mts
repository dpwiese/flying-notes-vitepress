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
      { text: 'CFI', link: '/cfi', activeMatch: '^/cfi/' },
      { text: 'CFII', link: '/cfii', activeMatch: '^/cfii/' },
      { text: 'Baron', link: '/baron', activeMatch: '^/baron/' },
      { text: 'Twin Comanche', link: '/twin-comanche/twin-comanche', activeMatch: '^/twin-comanche/' },
      { text: 'Seminole', link: '/seminole/systems', activeMatch: '^/seminole/' },
      { text: 'Study Guides', link: '/study-guides', activeMatch: '^/study-guides/' }
    ],
    sidebar: {
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
            { text: 'High Altitude Operations - Supplemental Oxygen', link: '/cfi/tsa/high-altitude-ops-oxygen' },
            { text: 'High Altitude Operations - Pressurization', link: '/cfi/tsa/high-altitude-ops-pressurization' },
            { text: 'OEI Performance', link: '/cfi/tsa/oei-performance' }
          ]
        },
        {
          text: 'Preflight Preparation',
          collapsed: false,
          items: [
            { text: 'Pilot Qualifications', link: '/cfi/preflight-prep/pilot-qualifications' },
            { text: 'Airworthiness Requirements', link: '/cfi/preflight-prep/airworthiness' },
            { text: 'Weather Information', link: '/cfi/preflight-prep/weather-info' }
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
        }
      ],
      '/cfii/': [
        {
          text: 'Technical Subject Areas',
          collapsed: false,
          items: [
            { text: 'Flight Instruments and Navigation Equipment', link: '/cfii/tsa/flight-instruments' },
            { text: 'Aeromedical Factors', link: '/cfii/tsa/aeromedical' },
            { text: 'Regulations and Publications', link: '/cfii/tsa/regulations-publications' },
            { text: 'Logbook Entries', link: '/cfii/tsa/logbook-entries' }
          ]
        },
        {
          text: 'Preflight Preparation',
          collapsed: false,
          items: [
            { text: 'Weather Information', link: '/cfii/preflight-prep/weather-info' },
            { text: 'Cross Country Planning', link: '/cfii/preflight-prep/xc-planning' },
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
            { text: 'Turns', link: '/cfii/instrument-flight/turns' }
          ]
        },
        {
          text: 'Navigation Systems',
          collapsed: false,
          items: [
            { text: 'Intercepting, Tracking, and DME Arcs', link: '/cfii/nav-systems/intercepting-and-dme-arcs' },
            { text: 'Holding Procedures', link: '/cfii/nav-systems/holds' }
          ]
        },
        {
          text: 'Instrument Approaches',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/cfii/approaches/overview' },
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
      '/baron/': [
        {
          text: 'E55 Baron (Early)',
          collapsed: false,
          items: [
            { text: 'Systems', link: '/baron/e55-early/systems' },
            { text: 'V-Speeds', link: '/baron/e55-early/v-speeds' },
            { text: 'Weight and Balance', link: '/baron/e55-early/weight-and-balance' },
            { text: 'Performance', link: '/baron/e55-early/performance' },
            { text: 'Maneuvers', link: '/baron/e55-early/maneuvers' },
            { text: 'Appendix', link: '/baron/e55-early/appendix' }
          ]
        },
        {
          text: 'E55 Baron (Late)',
          collapsed: false,
          items: [
            { text: 'Systems', link: '/baron/e55-late/systems' },
            { text: 'V-Speeds', link: '/baron/e55-late/v-speeds' },
            { text: 'Weight and Balance', link: '/baron/e55-late/weight-and-balance' },
            { text: 'Performance', link: '/baron/e55-late/performance' },
            { text: 'Maneuvers', link: '/baron/e55-late/maneuvers' },
            { text: 'Appendix', link: '/baron/e55-late/appendix' }
          ]
        }
      ],
      '/twin-comanche/': [
        {
          text: 'Twin Comanche',
          collapsed: false,
          items: [
            { text: 'Twin Comanche', link: '/twin-comanche/twin-comanche' }
          ]
        }
      ],
      '/seminole/': [
        {
          text: 'Seminole',
          collapsed: false,
          items: [
            { text: 'Systems', link: '/seminole/systems' }
          ]
        }
      ],
      '/study-guides/': [
        {
          text: 'Study Guides',
          collapsed: false,
          items: [
            { text: 'Private', link: '/study-guides/ppl' },
            { text: 'CFI', link: '/study-guides/cfi' },
            { text: 'CFII', link: '/study-guides/cfii' },
            { text: 'IPC', link: '/study-guides/ipc' }
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
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }]
  ],
})
