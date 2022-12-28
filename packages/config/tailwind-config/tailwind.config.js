const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      // app content
      `src/**/*.{js,ts,jsx,tsx}`,
      // include packages if not transpiling
      // "../../packages/**/*.{js,ts,jsx,tsx}",
    ],
  },
  corePlugins: {
    preflight: false,
  },
  theme: {
    // Override base screen sizes
    screens: {
      ...defaultTheme.screens,
      betterhover: { raw: '(hover: hover)' },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)',
      'lg-dark':
        '0 0 0 1px rgba(255,255,255,.15), 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.05)',
      none: 'none',
      outer: '0 2px 6px 2px rgb(60 64 67 / 15%)',
    },
    extend: {
      maxWidth: {
        xs: '21rem',
      },
      outline: {
        blue: ['1px auto ' + colors.link, '3px'],
      },
      opacity: {
        8: '0.08',
      },
      fontFamily: {
        sans: ['Optimistic Display', '-apple-system', ...defaultTheme.fontFamily.sans],
        mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '6xl': '68px',
        '5xl': '40px',
        '4xl': '32px',
        '3xl': '28px',
        '2xl': '24px',
        xl: '20px',
        lg: '16px',
        base: '14px',
        sm: '12px',
        xs: '10px',
        xxs: '8px',
        code: 'calc(1em - 20%)',
      },
      colors,
    },
  },
  plugins: [],
}
