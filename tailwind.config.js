/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      blur: {
        xs: '120px',
      },
      animation: {
        randommovement: 'random 200s ease-in-out infinite',
      },
      keyframes: {
        random: {
          "0%": {
            transform: "translate(0%, 0%) scale(1)"
          },
          "30%" : {
            transform: "translate(20%, 100%) scale(1.3)"
          },
          "50%": {
            transform: "translate(40%, 80%) scale(1)"
          },
          "70%": {
            transform: "translate(100%, 0%) scale(3)"
          },
          "90%": {
            transform: "translate(20%-20%) scale(2)"
          },
          "100%": {
            transform: "translate(0%, 0%) scale(1)"
          }
        }
      }
    }
  },
  plugins: [],
}

