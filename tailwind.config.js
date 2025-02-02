/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans]
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/1': '2 / 1',
        '16/9': '16 / 9'
        // Add any other custom ratios you need
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        accentOrange: {
          DEFAULT: 'hsl(var(--accent-orange))',
          foreground: 'hsl(var(--accent-orange-foreground))'
        },
        accentRed: {
          DEFAULT: 'hsl(var(--accent-red))',
          foreground: 'hsl(var(--accent-red-foreground))'
        },
        accentGreen: {
          DEFAULT: 'hsl(var(--accent-green))',
          foreground: 'hsl(var(--accent-green-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        button: {
          DEFAULT: 'hsl(var(--button-bg))',
          foreground: 'hsl(var(--button-text))'
        },
        link: {
          DEFAULT: 'hsl(var(--link))',
          foreground: 'hsl(var(--link-hover))'
        },
        customShades: {
          shade1: 'hsl(var(--shade-1))',
          shade2: 'hsl(var(--shade-2))',
          shade3: 'hsl(var(--shade-3))',
          shade4: 'hsl(var(--shade-4))',
          shade5: 'hsl(var(--shade-5))',
          shade6: 'hsl(var(--shade-6))',
          shade7: 'hsl(var(--shade-7))',
          shade8: 'hsl(var(--shade-8))',
          shade9: 'hsl(var(--shade-9))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundColor: {
        button: 'hsl(var(--button-bg))'
      },
      textColor: {
        button: 'hsl(var(--button-text))',
        link: 'hsl(var(--link))',
        'link-hover': 'hsl(var(--link-hover))'
      },
      typography: {
        DEFAULT: {
          css: {
            // Customize default prose styles
            color: 'hsl(var(--foreground))', // Use your design system color
            maxWidth: '100%', // Override max-width

            // Customize headings
            h1: {
              color: 'hsl(var(--primary))',
              fontWeight: '700',
              fontSize: '2.0em'
            },
            h2: {
              color: 'hsl(var(--primary))',
              fontWeight: '600',
              fontSize: '1.875em'
            },
            h3: {
              color: 'hsl(var(--primary))',
              fontWeight: '600',
              fontSize: '1.5em'
            },
            h4: {
              color: 'hsl(var(--primary))',
              fontWeight: '600',
              fontSize: '1.25em'
            },

            // Customize links
            a: {
              color: 'hsl(var(--link))',
              textDecoration: 'none',
              '&:hover': {
                color: 'hsl(var(--link-hover))',
                textDecoration: 'underline'
              }
            },

            // Customize paragraphs
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em'
            },

            // Customize lists
            'ul > li': {
              paddingLeft: '1.5em',
              '&::before': {
                backgroundColor: 'hsl(var(--primary))'
              }
            },

            // Customize blockquotes
            blockquote: {
              borderLeftColor: 'hsl(var(--primary))',
              fontStyle: 'italic',
              color: 'hsl(var(--muted-foreground))'
            },

            // Customize code blocks
            pre: {
              backgroundColor: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))'
            },
            code: {
              color: 'hsl(var(--primary))',
              '&::before': {
                content: '""'
              },
              '&::after': {
                content: '""'
              }
            },

            // Customize strong tags
            strong: {
              color: 'hsl(var(--primary))',
              fontWeight: '600'
            }
          }
        },
        // Add custom size variants
        lg: {
          css: {
            fontSize: '1.125rem',
            h1: {
              fontSize: '2.5em'
            },
            h2: {
              fontSize: '2em'
            }
          }
        },
        // Add dark mode variant
        invert: {
          css: {
            '--tw-prose-body': 'hsl(var(--foreground))',
            '--tw-prose-headings': 'hsl(var(--primary))',
            '--tw-prose-links': 'hsl(var(--link))',
            '--tw-prose-bold': 'hsl(var(--primary))',
            '--tw-prose-quotes': 'hsl(var(--muted-foreground))',
            '--tw-prose-code': 'hsl(var(--primary))',
            '--tw-prose-quote-borders': 'hsl(var(--primary))',
            '--tw-prose-pre-bg': 'hsl(var(--accent))'
          }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
};
