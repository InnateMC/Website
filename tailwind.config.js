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
        randommovementDifferent:"random2 120s ease-in-out infinite"
      },
      keyframes: {
        random: {
          "0%": {
            transform: "translate(300%, 0%) scale(1)"
          },
          "30%" : {
            transform: "translate(20%, 100%) scale(1.3)"
          },
          "50%": {
            transform: "translate(40%, 80%) scale(1)"
          },
          "70%": {
            transform: "translate(100%, 300%) scale(3)"
          },
          "90%": {
            transform: "translate(20% -200%) scale(2)"
          },
          "100%": {
            transform: "translate(0%, 0%) scale(1)"
          }
        },
        random2: {
          "0%": {
            transform: "translate(0%, 0%) scale(1)"
          },
          "30%" : {
            transform: "translate(150%, 15%) scale(1.3)"
          },
          "50%": {
            transform: "translate(44%, 10%) scale(1)"
          },
          "70%": {
            transform: "translate(140%, 0%) scale(3)"
          },
          "90%": {
            transform: "translate(-135%-20%) scale(2)"
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

