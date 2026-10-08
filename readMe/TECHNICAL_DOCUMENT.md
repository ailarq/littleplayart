# 👾 Game Showcase Website - Technical Document

## Project Overview

A modern, scalable website to showcase your daughter's HTML games and projects. The goal is to build a beautiful, easy-to-maintain portfolio that grows as she creates more games. Using Next.js with GitHub version control and Netlify deployment enables a streamlined workflow where new games can be added simply by pushing new files to the repository.

---

## Tech Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Framework** | Next.js 14+ | React-based, optimized for Netlify |
| **Styling** | Tailwind CSS | Responsive design + pink color palette |
| **Game Embedding** | iframes | Safe isolation of each game |
| **Deployment** | Netlify | Auto-deploy on git push |
| **Version Control** | GitHub | Collaboration and history |
| **Package Manager** | npm | Dependency management |

---

## Key Features

✨ **Game Gallery** - Browse all games with category/tag filtering  
🌙 **Dark Mode** - Toggle between light/dark themes with persistent storage  
📱 **Mobile Responsive** - Works beautifully on phones, tablets, and desktops  
🎮 **Safe Game Embedding** - Games run in iframes (isolated, no style conflicts)  
👧 **Daughter's Bio Section** - Photo, bio, and interests on homepage  
🚀 **One-Click Deployment** - Push to GitHub, Netlify auto-deploys  
🏷️ **Category/Tag System** - Organize games by type  

---

## Project Structure

```
daughter-games-showcase/
├── public/
│   ├── games/                          # Games folder (one subfolder per game)
│   │   ├── game-1/
│   │   │   ├── index.html              # Game HTML file
│   │   │   ├── style.css               # Game styles
│   │   │   └── script.js               # Game logic
│   │   ├── game-2/
│   │   │   ├── index.html
│   │   │   ├── style.css
│   │   │   └── script.js
│   │   └── ...
│   └── images/
│       ├── daughter-photo.jpg          # Daughter's profile picture
│       └── logo.png                    # Site logo (optional)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (dark mode provider, header, footer)
│   │   ├── page.tsx                    # Homepage (daughter intro + featured games)
│   │   ├── games/
│   │   │   ├── page.tsx                # Games gallery page (all games with filters)
│   │   │   └── [gameId]/
│   │   │       └── page.tsx            # Individual game detail page
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── Header.tsx                  # Navigation header with theme toggle
│   │   ├── Footer.tsx                  # Footer component
│   │   ├── GameCard.tsx                # Reusable game card component
│   │   ├── GameGrid.tsx                # Grid layout for games
│   │   ├── GamePlayer.tsx              # Game iframe wrapper + metadata display
│   │   ├── DaughterBio.tsx             # Hero section with daughter's intro
│   │   ├── CategoryFilter.tsx          # Tag/category filter component
│   │   └── ThemeToggle.tsx             # Dark mode toggle button
│   │
│   ├── lib/
│   │   ├── games.ts                    # Load games from games.json + filter logic
│   │   ├── types.ts                    # TypeScript interfaces (Game, Category, etc.)
│   │   └── constants.ts                # Color constants, site configuration
│   │
│   └── styles/
│       └── globals.css                 # Global styles + pink color variables
│
├── games.json                          # Master game metadata file (single source of truth)
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
├── tailwind.config.js                  # Tailwind CSS configuration with pink palette
├── next.config.js                      # Next.js configuration
│
└── .github/workflows/
    └── deploy.yml                      # GitHub Actions: Auto-deploy to Netlify
```

---

## Design System: Pink Color Palette

Using shades of pink as primary brand colors with neutral accents for light and dark modes.

### Color Variables

```css
:root {
  /* Primary Pink Palette */
  --color-pink-50: #fdf2f8;    /* Very light, backgrounds */
  --color-pink-100: #fbebf5;   /* Light pink, secondary backgrounds */
  --color-pink-200: #f6d5e8;   /* Medium light pink, hover states */
  --color-pink-500: #ec4899;   /* Main brand pink */
  --color-pink-600: #db2777;   /* Darker pink for buttons, hover */
  --color-pink-700: #be185d;   /* Darkest pink for text, borders */
  
  /* Neutrals for Dark Mode */
  --color-gray-900: #111827;   /* Very dark gray (almost black) */
  --color-gray-800: #1f2937;   /* Dark gray */
  --color-gray-50: #fafafa;    /* Almost white */
  --color-gray-100: #f3f4f6;   /* Light gray */
}

/* Light Mode (default) */
@media (prefers-color-scheme: light) {
  :root {
    --bg-primary: var(--color-gray-50);
    --bg-secondary: white;
    --text-primary: var(--color-gray-900);
    --text-secondary: #6b7280;
    --accent: var(--color-pink-600);
    --accent-light: var(--color-pink-50);
  }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--color-gray-900);
    --bg-secondary: var(--color-gray-800);
    --text-primary: var(--color-gray-50);
    --text-secondary: #d1d5db;
    --accent: var(--color-pink-500);
    --accent-light: #be185d;
  }
}
```

### Color Usage Guide

| Element | Color | Use Case |
|---------|-------|----------|
| Primary background | `--color-pink-50` (light) / `--color-gray-900` (dark) | Page backgrounds |
| Secondary background | `white` (light) / `--color-gray-800` (dark) | Cards, sections |
| Primary text | `--color-gray-900` (light) / `--color-gray-50` (dark) | Body text, headers |
| Accent | `--color-pink-600` (light) / `--color-pink-500` (dark) | Buttons, links, highlights |
| Borders | `--color-pink-200` (light) / `--color-pink-700` (dark) | Section dividers |

---

## Games Metadata Format

A single `games.json` file in the project root serves as the **single source of truth** for all game information.

### Structure

```json
{
  "daughter": {
    "name": "Your Daughter's Name",
    "bio": "Short bio about her and her passion for game development",
    "photo": "/images/daughter-photo.jpg",
    "interests": ["Game Design", "Coding", "Web Development", "Creative Thinking"]
  },
  "games": [
    {
      "id": "game-1",
      "title": "Flappy Bird Clone",
      "description": "A fun recreation of the classic flappy bird game with colorful obstacles",
      "category": "Action",
      "tags": ["arcade", "fun", "quick"],
      "image": "/games/game-1/thumbnail.png",
      "date": "2024-01-15",
      "difficulty": "Beginner",
      "playTime": "5-10 minutes"
    },
    {
      "id": "game-2",
      "title": "Number Memory Game",
      "description": "Test your memory with increasing number sequences",
      "category": "Puzzle",
      "tags": ["memory", "educational", "brain-teaser"],
      "date": "2024-02-20",
      "difficulty": "Intermediate",
      "playTime": "3-15 minutes"
    },
    {
      "id": "game-3",
      "title": "Snake Game",
      "description": "Classic snake game with increasing difficulty",
      "category": "Action",
      "tags": ["retro", "classic"],
      "date": "2024-03-10",
      "difficulty": "Intermediate",
      "playTime": "5-20 minutes"
    }
  ]
}
```

### Game Object Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier (matches folder name in `public/games/`) |
| `title` | string | ✅ | Game title displayed on cards |
| `description` | string | ✅ | Short description of the game |
| `category` | string | ✅ | Game type (Action, Puzzle, Educational, etc.) |
| `tags` | array | ✅ | Tags for filtering (lowercase, hyphenated) |
| `image` | string | ❌ | Path to game thumbnail image |
| `date` | string | ✅ | Creation date (YYYY-MM-DD format) |
| `difficulty` | string | ✅ | Beginner, Intermediate, Advanced |
| `playTime` | string | ✅ | Estimated play duration |

---

## Website Pages & Features

### 1. Homepage (`/`)

**Purpose:** First impression and entry point to the site

**Components:**
- Header with logo and navigation
- Daughter's bio hero section
  - Profile photo
  - Name and bio text
  - Interests list
- Featured games carousel or highlight
- "Browse All Games" call-to-action button
- Footer with social links (optional)

**Technology:** React component using Next.js App Router

---

### 2. Games Gallery (`/games`)

**Purpose:** Browse all games with filtering

**Features:**
- Responsive grid layout:
  - 1 column on mobile
  - 2 columns on tablets
  - 3+ columns on desktop
- **Category/Tag Filters:** Click to filter games
- **Game Cards** showing:
  - Game thumbnail image
  - Title
  - Short description (truncated)
  - Category badge
  - Difficulty level
  - Play time estimate
  - "Play" button/link
- Sort options (optional):
  - By date (newest first)
  - By difficulty
  - A-Z

**Technology:** React grid component with state management

---

### 3. Game Detail Page (`/games/[gameId]`)

**Purpose:** Play individual games and view full details

**Layout:**
- Full game displayed in iframe (takes up most of viewport)
- Sidebar or below with metadata:
  - Title
  - Full description
  - Category and tags
  - Creation date
  - Difficulty level
  - Play time estimate
  - Back to gallery button
- Related games section (same category)
- Responsive iframe that scales with viewport

**Technology:** Dynamic route using Next.js `[gameId]` parameter

---

### 4. Dark Mode Toggle

**Features:**
- Button in header (sun/moon icon)
- Toggles between light and dark themes
- Respects system preference initially
- Persists user choice in localStorage
- Smooth transition animations
- All components styled for both modes
- Pink color adjusts for optimal readability

**Technology:** React context + localStorage + CSS `prefers-color-scheme`

---

## Core Components

### Header Component

```typescript
// src/components/Header.tsx
- Logo/site name
- Navigation links (Home, Games)
- ThemeToggle button
- Mobile hamburger menu (optional)
- Sticky positioning
- Pink accent styling
```

### GameCard Component

```typescript
// src/components/GameCard.tsx
- Thumbnail image
- Title
- Short description
- Category badge
- Difficulty label
- Play time
- Hover effects (pink accent)
- Click to navigate to detail page
```

### GamePlayer Component

```typescript
// src/components/GamePlayer.tsx
- Iframe embedding game HTML
- Full metadata display
- Back button
- Related games carousel
- Responsive sizing
- Error handling for broken games
```

### DaughterBio Component

```typescript
// src/components/DaughterBio.tsx
- Profile photo
- Name heading
- Bio text
- Interests list
- Centered layout
- Pink color accents
```

### CategoryFilter Component

```typescript
// src/components/CategoryFilter.tsx
- Category/tag buttons
- Active state highlighting
- Click to filter game list
- "All" button to reset
- Responsive horizontal scroll on mobile
```

### ThemeToggle Component

```typescript
// src/components/ThemeToggle.tsx
- Sun/moon icon button
- Click to toggle light/dark mode
- Save preference to localStorage
- Smooth transitions
```

---

## Workflow: Adding New Games

### Simple 3-Step Process

When your daughter creates a new HTML game, follow these steps:

#### **Step 1: Create Game Folder**

```bash
# Navigate to project directory
cd daughter-games-showcase

# Create new game folder
mkdir public/games/my-awesome-game

# Copy game files into the folder
cp /path/to/game.html public/games/my-awesome-game/index.html
cp /path/to/styles.css public/games/my-awesome-game/
cp /path/to/script.js public/games/my-awesome-game/

# Optional: Copy game assets
cp /path/to/images/* public/games/my-awesome-game/assets/
cp /path/to/sounds/* public/games/my-awesome-game/assets/
```

**Important Notes:**
- Game must be in `public/games/[game-id]/`
- Main HTML file must be named `index.html`
- All assets (CSS, JS, images) must be relative paths within the folder
- Game ID should be lowercase with hyphens (e.g., `my-awesome-game`)

---

#### **Step 2: Update games.json**

Open `games.json` and add a new entry to the `games` array:

```json
{
  "id": "my-awesome-game",
  "title": "My Awesome Game",
  "description": "Brief one-line description of the game",
  "category": "Action",
  "tags": ["fun", "arcade"],
  "date": "2024-10-08",
  "difficulty": "Beginner",
  "playTime": "5-15 minutes"
}
```

**Naming Conventions:**
- `id`: lowercase, hyphens only (must match folder name)
- `title`: Title Case, descriptive
- `category`: One of: Action, Puzzle, Educational, Adventure, Other
- `tags`: lowercase, hyphenated, comma-separated
- `difficulty`: Beginner, Intermediate, Advanced
- `date`: ISO format (YYYY-MM-DD)

---

#### **Step 3: Deploy to Production**

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add: New game - My Awesome Game"

# Push to GitHub
git push origin main

# ✨ Netlify automatically deploys!
# Website updates within 30-60 seconds
```

**That's it!** Your new game is live on the website.

---

## Development & Deployment Workflow

### Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/daughter-games-showcase.git
cd daughter-games-showcase

# 2. Install dependencies
npm install

# 3. Create .env.local (if needed for future features)
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local

# 4. Start development server
npm run dev

# Visit http://localhost:3000 in your browser
```

### Available npm Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server (after build)
npm run lint     # Check code quality (optional)
npm run type-check # Verify TypeScript (optional)
```

---

### GitHub Setup

1. **Create Repository**
   - Go to github.com
   - Click "New repository"
   - Name: `daughter-games-showcase`
   - Description: "A showcase of my daughter's HTML games"
   - Make it public or private as you prefer
   - Initialize with README (optional)

2. **Clone Locally**
   ```bash
   git clone https://github.com/yourusername/daughter-games-showcase.git
   cd daughter-games-showcase
   ```

3. **Initial Commit**
   ```bash
   git add .
   git commit -m "Initial commit: Set up Next.js project structure"
   git push -u origin main
   ```

4. **Branching Strategy (Optional)**
   - `main` branch: production-ready code
   - `develop` branch: development work
   - Feature branches: `feature/game-name` for new games

---

### Netlify Deployment

#### Initial Setup (One Time)

1. **Sign Up / Log In**
   - Visit netlify.com
   - Sign in with GitHub account

2. **Connect Repository**
   - Click "New site from Git"
   - Select GitHub
   - Choose `daughter-games-showcase` repository

3. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Environment variables:**
     - Node version: 18+ (auto-detected)

4. **Deploy**
   - Click "Deploy site"
   - Netlify generates a domain (e.g., `random-name.netlify.app`)

5. **Custom Domain (Optional)**
   - In Netlify dashboard, go to Domain settings
   - Add your custom domain (e.g., `daughtersgames.com`)
   - Follow DNS configuration steps

#### Auto-Deployment

Once connected:
- ✅ Every push to `main` automatically deploys
- ✅ Netlify builds and publishes changes in 30-60 seconds
- ✅ Old deployments are kept as backups
- ✅ Easy rollback if needed

---

### GitHub Actions CI/CD (Optional)

Create `.github/workflows/deploy.yml` for automated checks before deployment:

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x]
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Type check
      run: npx tsc --noEmit
    
    - name: Build
      run: npm run build
```

---

## Implementation Checklist

### ✅ Phase 1: Project Setup

- [ ] Create Next.js project: `npx create-next-app@latest`
- [ ] Install dependencies: `npm install tailwindcss postcss autoprefixer`
- [ ] Initialize Tailwind CSS
- [ ] Set up GitHub repository
- [ ] Connect GitHub repo to Netlify
- [ ] Create folder structure in `public/games/`
- [ ] Prepare daughter's photo for bio section

### ✅ Phase 2: Core Components

- [ ] Create `src/lib/types.ts` (TypeScript interfaces)
- [ ] Create `src/lib/games.ts` (load/filter games logic)
- [ ] Create `src/lib/constants.ts` (color palette, site config)
- [ ] Create `src/components/Header.tsx`
- [ ] Create `src/components/Footer.tsx`
- [ ] Create `src/components/ThemeToggle.tsx`
- [ ] Create `src/components/DaughterBio.tsx`
- [ ] Create `src/components/GameCard.tsx`
- [ ] Create `src/components/GameGrid.tsx`
- [ ] Create `src/components/GamePlayer.tsx`
- [ ] Create `src/components/CategoryFilter.tsx`

### ✅ Phase 3: Pages & Styling

- [ ] Create `src/app/layout.tsx` (root layout with theme provider)
- [ ] Create `src/app/page.tsx` (homepage)
- [ ] Create `src/app/games/page.tsx` (gallery page)
- [ ] Create `src/app/games/[gameId]/page.tsx` (game detail page)
- [ ] Set up Tailwind config with pink color palette
- [ ] Create `src/styles/globals.css` (global styles)
- [ ] Test light and dark modes

### ✅ Phase 4: Game Metadata & Content

- [ ] Create `games.json` in project root
- [ ] Add daughter's bio information
- [ ] Prepare game descriptions
- [ ] Categorize games
- [ ] Assign difficulty levels
- [ ] Set play time estimates

### ✅ Phase 5: Testing

- [ ] Test all games load correctly in iframes
- [ ] Test dark mode toggle and persistence
- [ ] Test mobile responsive (phone/tablet/desktop)
- [ ] Test category filters work
- [ ] Test game detail pages load data
- [ ] Test images and thumbnails display
- [ ] Test navigation between pages
- [ ] Performance test (Lighthouse audit)
- [ ] Accessibility test (WCAG compliance)

### ✅ Phase 6: Deployment

- [ ] Final code review
- [ ] Push to GitHub
- [ ] Verify Netlify deployment succeeds
- [ ] Test live website
- [ ] Set up custom domain (if desired)
- [ ] Configure analytics (optional)

---

## Performance & Best Practices

### Code Splitting & Bundling
- Next.js automatically code-splits per route
- Each page only loads code it needs
- Reduce bundle size by lazy-loading components

### Image Optimization
- Next.js `Image` component auto-optimizes
- Serves WebP format on supported browsers
- Automatic responsive sizing

### Static Generation (ISR)
- Homepage and games gallery can be pre-generated
- Incremental Static Regeneration updates games list when `games.json` changes
- Near-instant load times

### Game Iframe Lazy Loading
- Use `loading="lazy"` attribute on iframes
- Only loads when in viewport
- Saves bandwidth and improves initial page load

### Mobile-First Design
- Start with mobile layout
- Use Tailwind's responsive classes (`sm:`, `md:`, `lg:`)
- Test on real devices

### Accessibility
- Semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- Alt text on all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios (WCAG AA standard)

### SEO Optimization
- Descriptive page titles and meta descriptions
- Semantic heading hierarchy (h1, h2, h3)
- Open Graph meta tags for social sharing
- Structured data (JSON-LD)

---

## Pre-Launch Verification Checklist

Before going live, verify:

| Item | Status | Notes |
|------|--------|-------|
| All games load correctly in iframes | ✅ | Test each game |
| Dark mode toggle works and persists | ✅ | Check localStorage |
| Mobile responsive on all screen sizes | ✅ | Phone/tablet/desktop |
| Category filters show correct games | ✅ | Test each category |
| Game detail pages load all metadata | ✅ | Title, date, description, etc. |
| Images and thumbnails display properly | ✅ | No broken images |
| Navigation links work correctly | ✅ | All routes accessible |
| Netlify deployment completed successfully | ✅ | Check deploy logs |
| Site accessible from custom domain | ✅ | If using custom domain |
| Performance is good (Lighthouse >90) | ✅ | Run audit |
| No console errors | ✅ | Check browser console |
| 404 page works | ✅ | Test with invalid route |

---

## Future Enhancements (Out of Scope for v1)

These features can be added later when the site is established:

- 🔍 **Search functionality** - Search games by title or tag
- ⭐ **Ratings/Favorites** - Visitors can like their favorite games
- 💬 **Comments system** - Allow feedback on games
- 📥 **Download games** - Let visitors download game files
- 📧 **Newsletter signup** - Collect emails from visitors
- 📤 **Social sharing** - Share games on Twitter, Facebook, etc.
- 📊 **Analytics dashboard** - Track popular games and visitor metrics
- 🎯 **Leaderboards** - For competitive games (if applicable)
- 🎨 **Custom theme selector** - Multiple color themes
- 🌐 **Internationalization** - Support multiple languages

---

## Troubleshooting & Common Issues

### Issue: Games don't display in iframe

**Solution:**
- Verify folder path: `public/games/[game-id]/index.html`
- Ensure game files use relative paths for assets
- Check browser console for errors
- Test game in standalone HTML

### Issue: Dark mode not persisting

**Solution:**
- Check browser localStorage is not blocked
- Verify theme context provider in layout.tsx
- Clear browser cache and try again

### Issue: Images not loading

**Solution:**
- Place images in `public/` folder
- Use `/images/filename.jpg` paths (not relative)
- Ensure image format is supported (JPG, PNG, WebP)
- Check file permissions

### Issue: Netlify deployment fails

**Solution:**
- Check build logs in Netlify dashboard
- Ensure Node version is 18+
- Verify all dependencies are in package.json
- Test local build: `npm run build`

### Issue: Games running out of viewport

**Solution:**
- Set iframe width and height to 100%
- Use CSS `max-width` constraints
- Test responsive scaling on mobile

---

## File Size & Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Initial page load | < 3 seconds | Lighthouse |
| Performance score | > 90 | Lighthouse |
| Accessibility score | > 95 | Lighthouse |
| Best Practices score | > 90 | Lighthouse |
| Bundle size | < 500 KB | Next.js analyzer |
| Image optimization | > 80% | WebPageTest |

---

## Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [React Docs](https://react.dev)

### Tools
- [Lighthouse Audit](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Community
- Next.js Discord: https://discord.gg/bUG7SVstMs
- Tailwind CSS Discord: https://discord.gg/7NF8agS
- Stack Overflow (tag: next.js, tailwind-css)

---

## Questions & Next Steps

### Questions to Answer Before Starting:

1. **Daughter's Information**
   - Full name for bio section?
   - Short bio text (2-3 sentences)?
   - List of interests?
   - Have a photo to use?

2. **Game Organization**
   - How many games to start with?
   - Which ones should be "featured"?
   - Any naming conventions for game IDs?

3. **Hosting**
   - Custom domain or Netlify's free subdomain?
   - Email for Netlify notifications?
   - Any specific deployment preferences?

4. **Styling**
   - Happy with the pink color palette?
   - Any other colors to include?
   - Any specific branding or logo?

### Ready to Start?

1. **Gather Materials**
   - All daughter's game HTML files
   - Daughter's photo for bio
   - Game descriptions and metadata

2. **Set Up Infrastructure**
   - Initialize Next.js project
   - Create GitHub repository
   - Connect to Netlify

3. **Build Core Features**
   - Create layout and components
   - Implement dark mode
   - Set up games metadata system

4. **Add Games**
   - Copy first batch of games
   - Update games.json
   - Test and deploy

5. **Launch**
   - Final review
   - Custom domain setup (optional)
   - Announce to friends and family

---

## Document Information

- **Version:** 1.0
- **Last Updated:** October 8, 2024
- **Target Audience:** Non-technical parents, developers
- **Project Name:** Daughter's Game Showcase Website
- **Status:** Ready for Implementation

---

**Created with ❤️ for your daughter's amazing coding journey!**
