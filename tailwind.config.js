/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      cursor: {
        'custom': "url('/images/icons/cursor.png'), pointer",
      },
      fontFamily: {
        'google-sans-flex': ['"Google Sans Flex"', 'sans-serif'],
        'ubuntu': ['"Ubuntu"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'volkhov': ['"Volkhov"', 'serif'],
        'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
        'bellefair': ['"Bellefair"', 'serif'],
        'barlow': ['"Barlow"', 'sans-serif'],
      },
    },
  },
    plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.center': {
          display: 'flex',
          'align-items': 'center',
          'justify-content': 'center',
        },
        '.row-x-start': {
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'flex-start',
          'flex-shrink': '0',
        },
        '.row-x-center': {
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
          'flex-shrink': '0',
        },
        '.row-x-end': {
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'flex-end',
          'flex-shrink': '0',
        },
        '.row-x-between': {
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'space-between',
          'flex-shrink': '0',
        },
        '.row-y-start': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'flex-start',
          'flex-shrink': '0',
        },
        '.row-y-center': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'center',
          'flex-shrink': '0',
        },
        '.row-y-end': {
          display: 'flex',
          'flex-direction': 'row',
          'align-items': 'flex-end',
          'flex-shrink': '0',
        },
        '.col-y-start': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'flex-start',
          'flex-shrink': '0',
        },
        '.col-y-center': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          'flex-shrink': '0',
        },
        '.col-y-end': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'flex-end',
          'flex-shrink': '0',
        },
        '.col-y-between': {
          display: 'flex',
          'flex-direction': 'column',
          'justify-content': 'space-between',
          'flex-shrink': '0',
        },
        '.col-x-start': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'flex-start',
          'flex-shrink': '0',
        },
        '.col-x-center': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'flex-shrink': '0',
        },
        '.col-x-end': {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'flex-end',
          'flex-shrink': '0',
        },
        '.btn-fluid-primary': {
          
          'color': '#ffffff',
          'width': 'fit-content',
          'height': 'fit-content',
          'font-weight': '600',
          'transition': 'all 200ms',
        },
        '.btn-fluid-secondary': {
          'background-color': '#e5e7eb',
          'color': '#1f2937',
          'width': 'fit-content',
          'height': 'fit-content',
          'padding-left': '1rem',
          'padding-right': '2rem',
          'padding-top': '0.5rem',
          'padding-bottom': '1.125rem',
          'border-radius': '0.5rem',
          'font-weight': '500',
          'transition': 'all 200ms',
        },
        '.btn-fluid-outline': {
          'width': 'fit-content',
          'height': 'fit-content',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'font-weight': '700',
          'transition': 'all 200ms',
        },
        '.btn-fluid-ghost': {
          'color': '#fb923c',
          'width': 'fit-content',
          'height': 'fit-content',
          'padding-left': '1rem',
          'padding-right': '1.5rem',
          'padding-top': '0.5rem',
          'padding-bottom': '1rem',
          'border-radius': '0.5rem',
          'font-weight': '500',
          'transition': 'all 200ms',
        },
        
      }
      addUtilities(newUtilities)
    }
  ],
}