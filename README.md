# 1x Rupee

A payment platform website for **1x Rupee** — B2B payment solutions, UPI stack, and checkout experiences.

---

## Overview

1x Rupee is a modern web platform showcasing payment solutions for businesses: native checkouts, UPI integration, payouts, and developer-friendly APIs. The design follows 1x Rupee's clean, trustworthy aesthetic with a focus on enterprise payment infrastructure.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone or navigate to the project
cd "1x Rupee"

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build

```bash
npm run build
```

### Start (Production)

```bash
npm run start
```

---

## Deploy

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — no config needed
4. Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Netlify

1. Connect your repo at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `.next` (or use Netlify Next.js plugin)

---

## Project Structure

```
1x Rupee/
├── src/
│   ├── app/          # Pages & layouts
│   ├── components/   # Reusable components
│   └── lib/          # Utilities & constants
├── public/
├── ARCHITECTURE.md
└── README.md
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full project architecture.

---

## License

Private project.
