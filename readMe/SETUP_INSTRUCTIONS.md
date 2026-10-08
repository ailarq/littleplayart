# ⚡ Quick Setup Instructions

## 🎯 Your Next Steps (Today)

### 1️⃣ Install Dependencies
```bash
cd /Users/lana/Claude/Projects/Saish_Page
npm install
```

This downloads all required packages. Takes 2-5 minutes.

---

### 2️⃣ Test Locally
```bash
npm run dev
```

Then open: **http://localhost:3000**

You should see:
- 🏠 Homepage with "Hi! I'm Saish"
- 🎮 PLAY GAMES page (with 5 sample games)
- 👧 ABOUT SAISH page
- 🌓 Dark mode toggle button

Press `CTRL+C` to stop the dev server.

---

### 3️⃣ Initialize Git & GitHub

If not already a git repo:
```bash
cd /Users/lana/Claude/Projects/Saish_Page
git init
git add .
git commit -m "Initial commit: Project setup"
```

Then create a **new repository on GitHub**:
1. Go to https://github.com/new
2. Name: `saish-games-showcase`
3. Description: "A showcase of my daughter's HTML games"
4. Make it Public or Private (your choice)
5. Click Create Repository

Connect to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/saish-games-showcase.git
git branch -M main
git push -u origin main
```

---

### 4️⃣ Set Up Netlify (One Time)

1. **Sign up/Log in** at https://netlify.com with GitHub
2. **Create new site:**
   - Click "New site from Git"
   - Select GitHub
   - Select `saish-games-showcase` repository
   - Click Deploy

Netlify will automatically:
- Build the project
- Deploy to production
- Give you a URL like: `https://your-site.netlify.app`

**That's it!** 🎉 Every time you push to GitHub, Netlify auto-deploys!

---

## 📝 After Setup: How to Add Games

### Example: Adding Flappy Bird

1. **Get game file from Saish:**
   - `flappy-bird.html` (the game)
   - `style.css` (styles)
   - `script.js` (code)

2. **Create folder:**
```bash
mkdir public/games/flappy-bird
```

3. **Copy game files:**
```bash
cp flappy-bird.html public/games/flappy-bird/index.html
cp style.css public/games/flappy-bird/
cp script.js public/games/flappy-bird/
```

4. **Edit games.json** - Add to the `games` array:
```json
{
  "id": "flappy-bird",
  "title": "Flappy Bird Clone",
  "icon": "🐦",
  "description": "Navigate your bird through pipes and avoid obstacles",
  "category": "Action",
  "difficulty": "Beginner",
  "playTime": "5-10 minutes",
  "date": "2024-10-08"
}
```

5. **Push to GitHub:**
```bash
git add .
git commit -m "Add: Flappy Bird game"
git push origin main
```

6. **Check website:**
   - Visit your Netlify URL
   - New game appears automatically! ✨

---

## ✏️ Edit "About Saish" Info

Open `games.json` and edit the `daughter` section:

```json
{
  "daughter": {
    "name": "Saish",
    "age": 12,
    "bio": "Update this with new bio text",
    "photo": "/images/saish-photo.jpg",
    "interests": ["Game Design", "Coding"],
    "skills": ["HTML5", "CSS3", "JavaScript"]
  }
}
```

Then push to GitHub to update the website!

---

## 📸 Add Saish's Photo

1. Place photo at: `public/images/saish-photo.jpg`
2. Should be square (300x300px or larger)
3. Push to GitHub
4. Photo updates automatically on the website

---

## 🎨 Change Colors (Optional)

Edit `tailwind.config.js` to use different pink shades:

```javascript
colors: {
  pink: {
    50: '#fdf2f8',
    500: '#ec4899',   // Change this main color
    600: '#db2777',   // Change this too
  }
}
```

Run `npm run dev` again to see changes.

---

## 📋 File Structure Summary

```
public/games/              ← Put game folders here
├── game-1/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── game-2/
    └── index.html

src/app/                   ← Website pages (don't modify usually)
├── page.tsx              ← Homepage
├── games/page.tsx        ← Gallery
├── games/[gameId]/       ← Game player
└── about/page.tsx        ← About Saish

games.json                 ← ⭐ EDIT THIS TO ADD/UPDATE GAMES
```

---

## ✅ Checklist

- [x] Project created
- [ ] `npm install` - run this first!
- [ ] `npm run dev` - test locally
- [ ] Create GitHub repo
- [ ] Connect to Netlify
- [ ] Add first game
- [ ] Push to GitHub
- [ ] Website updates! 🎉

---

## 🎮 Example Workflow

```
Saish creates game
    ↓
You get the HTML files
    ↓
Create folder: public/games/game-name/
    ↓
Copy files into folder
    ↓
Edit games.json
    ↓
git add . && git commit && git push
    ↓
Netlify deploys automatically
    ↓
Game is LIVE! ✨
```

---

## 🆘 Quick Help

**Website won't load?**
```bash
npm run dev
# Check http://localhost:3000
```

**Want to stop dev server?**
```
Press CTRL+C in terminal
```

**Want to rebuild?**
```bash
npm run build
npm run start
```

**Check what changed?**
```bash
git status
```

**Revert changes?**
```bash
git checkout .
```

---

## 🚀 You're Ready!

1. Run: `npm install`
2. Run: `npm run dev`
3. Open: http://localhost:3000
4. See the website! 🎉

Then follow the GitHub + Netlify setup to go live!

Need help? Check README.md or WORKFLOW_GUIDE.md!
