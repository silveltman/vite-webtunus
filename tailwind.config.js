module.exports = {
  content: [
    './src/**/*.{html,liquid}',
    './component-library/components/**/*.{html,liquid}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    fontFamily: {
      primary: ["'Overpass'", 'sans serif'],
      secondary: ["'Koulen'", 'cursive'],
    },
    extend: {
      fontSize: {
        display: 'clamp(42px, 12vw, 140px)',
      },
      container: {
        center: true,
        screens: {
          // sm: '640px',
          // md: '768px',
          // lg: '1024px',
          // xl: '1280px',
          // '2xl': '1280px',
          sm: '95vw',
          // md: '95vw',
          // lg: '95vw',
          // xl: '95vw',
          '2xl': '1280px',
        },
        padding: {
          DEFAULT: '20px', // equal to px-5 by default
          sm: '28px', // equal to px-7 by default
          lg: '32px', // equal to px-8 by default
          xl: '40px', // equal to px-10
        },
      },
      colors: {
        yellow: {
          DEFAULT: '#FFC600',
          50: '#FFEFB8',
          100: '#FFEAA3',
          200: '#FFE17A',
          300: '#FFD852',
          400: '#FFCF29',
          500: '#FFC600',
          600: '#C79A00',
          700: '#8F6F00',
          800: '#574300',
          900: '#1F1800',
        },

        blue: {
          DEFAULT: '#3552EC',
          50: '#DDE2FC',
          100: '#CAD2FA',
          200: '#A5B2F7',
          300: '#8092F3',
          400: '#5A72F0',
          500: '#3552EC',
          600: '#1433D5',
          700: '#0F26A2',
          800: '#0A1A6E',
          900: '#060E3B',
        },

        black: {
          DEFAULT: '#0D1321',
          50: '#25365D',
          100: '#233358',
          200: '#1E2C4D',
          300: '#1A2642',
          400: '#162037',
          500: '#11192C',
          600: '#0D1321',
          700: '#090D16',
          800: '#04060B',
          900: '#000000',
        },

        white: {
          DEFAULT: '#EDF1F9',
          50: '#FEFEFF',
          100: '#F8FAFD',
          200: '#EDF1F9',
          300: '#E2E8F5',
          400: '#D6DFF1',
          500: '#CBD6EE',
          600: '#BFCDEA',
          700: '#B4C4E6',
          800: '#A8BBE2',
          900: '#9DB3DE',
        },
      },
      keyframes: {
        arrow: {
          '0%, 30%, 60%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(18%)' },
          '45%': { transform: 'translateX(18%)' },
        },
      },
      animation: {
        arrow: 'arrow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t':
          'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b':
          'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l':
          'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r':
          'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'gradient-radial-at-tl':
          'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'gradient-radial-at-tr':
          'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-bl':
          'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-br':
          'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
      },
    },
  },
}
