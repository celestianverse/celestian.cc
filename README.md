# Celestian

Personal site with portfolio of a Full-Stack Developer building products with Python, Go, SQL and TypeScript.

The site is both a portfolio and a living design system: every page is assembled from a custom UI kit with design tokens, light and dark themes, and interactive playgrounds.

**[celestian.cc](https://celestian.cc)**

## What’s inside

- **Home** — hero, technology stack, methodology, and selected work
- **Projects** — shipped products across fintech, edtech, and adtech
- **UI kit library** — 20+ components with live playgrounds and generated usage code
- **Contacts** — ways to reach out and work together

Preferences persist across visits: light/dark theme and font size are stored in cookies and applied on the server to avoid a flash of the wrong theme.

## Stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router), [React](https://react.dev/) 19 |
| Language | TypeScript |
| Styling | SCSS Modules, design tokens |
| State | Zustand |
| UI | Custom kit, [Floating UI](https://floating-ui.com/), SVGR icons |
| Tooling | ESLint, Sass CLI |

Content lives in typed modules under `src/data`, so copy, projects, and contacts can be updated without touching layout code.

## UI kit

A token-driven, polymorphic component library used to build the site itself. Each component has a dedicated playground with props you can tweak and copy as JSX.

| Group | Components |
| --- | --- |
| Data display | Title, Text, Tag, Badge, Icon |
| Controls | Anchor, Button, Segments, Select, Switch, Field |
| Layout | Page, Section, Grid, Box, Row, Column |
| Utilities | Hidden, Divider, Loader |
| Meta | Colors |

Tokens cover color, spacing, radius, typography, and breakpoints. Themes switch through `data-theme` on `<html>`; font scale through `data-font`.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build     # production build
npm start         # serve the production build
npm run lint      # ESLint
npm run tsc       # type check
npm run styles    # compile design tokens to CSS
```

## Structure

```text
src/
  app/            # routes: home, projects, uikit, contacts
  components/
    uikit/        # design-system primitives
    custom/       # site-specific pieces (playground, switchers)
  configs/        # app name, routes, navigation, SEO
  data/           # page content
  layouts/        # header, footer, shell
  styles/         # tokens, mixins, reset, fonts
  constants/      # theme, font, color, spacing
```
