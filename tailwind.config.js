/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF5500',
          'orange-glow': '#FF6B00',
          'orange-light': '#FFAA00',
          dark: '#0A0A0C',
          card: '#121216',
          'card-hover': '#1A1A22',
          surface: '#18181F',
          muted: '#8E8E9F',
        }
      },
      fontFamily: {
        athletic: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at center, rgba(255, 85, 0, 0.15) 0%, rgba(10, 10, 12, 0.95) 75%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF5500 0%, #FF7700 100%)',
        'metallic-gradient': 'linear-gradient(180deg, #2A2A35 0%, #121216 100%)',
      },
      boxShadow: {
        'orange-glow': '0 0 35px rgba(255, 85, 0, 0.4)',
        'orange-glow-lg': '0 0 60px rgba(255, 85, 0, 0.6)',
        'glass-3d': '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(255, 85, 0, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 85, 0, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
