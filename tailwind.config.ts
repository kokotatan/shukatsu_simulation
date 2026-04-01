import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080a0c',
          soft: '#0f1214',
          card: '#141820',
          border: '#1e2428',
        },
        cream: {
          DEFAULT: '#ddd8c8',
          dim: '#9a9488',
          muted: '#606870',
        },
        gold: {
          DEFAULT: '#c8a848',
          light: '#d4b85a',
          dark: '#9a7830',
        },
        char: {
          misaki: '#4a90d9',
          shota: '#e8873a',
          aoi: '#9b6bb5',
          takumi: '#d4433a',
          kenta: '#5aaa6e',
          ren: '#3a7fb5',
          sakura: '#d4836e',
          yuto: '#6bbfbf',
          daiki: '#c8a848',
          hikari: '#d4a0c8',
        },
        emotion: {
          stress: '#e05050',
          joy: '#f0c040',
          anxiety: '#7080d0',
          absurdity: '#e08030',
          void: '#607080',
        },
      },
      fontFamily: {
        dot: ['DotGothic16', 'monospace'],
        serif: ['Noto Serif JP', 'serif'],
        sans: ['DotGothic16', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'float-up': 'float-up 0.5s ease-out forwards',
        shake: 'shake 0.3s ease-in-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'bar-fill': 'bar-fill 0.3s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'float-up': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '75%': { transform: 'translateX(4px)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bar-fill': {
          '0%': { transform: 'scaleX(0.8)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
