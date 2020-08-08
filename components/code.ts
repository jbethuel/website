export const netlify: string = `[build]
  command = "npm run build && npm run export"
  publish = "out"
`

export const scripts: string = `scripts: {
  "develop": "next",
  "build": "next build",
  "export": "next export",
  "start": "next start"
}`
