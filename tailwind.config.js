/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF6B9D',
        'neon-blue': '#00D4FF',
        'retro-purple': '#4834D4',
        'dark-bg': '#2E3440',
        'light-text': '#ECEFF4',
        'neon-yellow': '#FFD93D',
        'deep-pink': '#C44569',
        'dark-navy': '#40407A',
        'soft-pink': '#F8BBD9',
        'cyber-grid': '#7209B7',
      },
      fontFamily: {
        'retro': ['Orbitron', 'monospace'],
        'pixel': ['Press Start 2P', 'monospace'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 107, 157, 0.3)',
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(72, 52, 212, 0.3)',
        'neon-yellow': '0 0 20px rgba(255, 217, 61, 0.3)',
        'glow-strong': '0 0 30px rgba(255, 107, 157, 0.5)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #2E3440 0%, #1a1a2e 50%, #16213e 100%)',
        'retro-grid': `
          linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
        'grid-move': 'gridMove 20s linear infinite',
        'scanlines': 'scanlines 0.1s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}