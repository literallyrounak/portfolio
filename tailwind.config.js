export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Text – soft cool whites (Tokyo Night foreground family)
        text:      '#c0caf5',   // primary text
        subtext1:  '#a9b1d6',   // secondary text
        subtext0:  '#787c99',   // muted / tertiary

        // Overlays – refined mid-tones for borders, dividers, secondary surfaces
        overlay2:  '#565f89',
        overlay1:  '#414868',
        overlay0:  '#3b4261',

        // Surfaces – elevated cards / panels
        surface2:  '#2a2e42',
        surface1:  '#222436',
        surface0:  '#1e2030',

        // Base layers – deep Tokyo Night night
        base:      '#1a1b26',
        mantle:    '#16161e',
        crust:     '#13131a',

        // Accents – clean Tokyo Night palette, tuned for modern UI
        accent:    '#7aa2f7',   // primary (links, buttons, focus)
        green:     '#9ece6a',   // success / positive
        yellow:    '#e0af68',   // warning / highlight
        red:       '#f7768e',   // error / destructive
        blue:      '#7dcfff',   // secondary / info / cyan accent
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

