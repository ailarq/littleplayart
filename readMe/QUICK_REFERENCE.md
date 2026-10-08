# ⚡ Quick Reference: Commands & Workflows

## 🎯 The Key Point

**You only need 3 commands:**

```bash
npm install         # Do this once at the start
npm run dev         # Use this to test locally
git push            # This triggers everything else (Netlify auto-builds!)
```

---

## 💻 Your Commands (Local Development)

### **Setup (First Time)**
```bash
cd /Users/lana/Claude/Projects/Saish_Page
npm install
```
- Downloads dependencies
- Creates `node_modules/` folder
- Takes 2-5 minutes

### **Testing (While Developing)**
```bash
npm run dev
```
- Starts development server
- Opens: http://localhost:3000
- Auto-reloads on file changes
- Stop with: CTRL+C

### **Build (Before Deploying)**
```bash
npm run build
```
- Compiles for production
- Checks for errors
- Creates `.next/` folder
- Takes 1-2 minutes

### **Test Production**
```bash
npm run start
```
- Runs built version
- Tests production build locally
- Uses: http://localhost:3000

---

## 🚀 Git Commands (Deploy)

### **Save Changes**
```bash
git add .
git commit -m "Add: Game name"
```

### **Upload to GitHub**
```bash
git push origin main
```

### **That's It!** ✨
Netlify automatically:
- Pulls code
- `npm install`
- `npm run build`
- Deploys to CDN
- Website updates

---

## 🌐 Netlify Commands (Automatic)

### **What Netlify Does (You Don't Run These)**

```bash
# Netlify automatically runs:

npm install
# Reads package.json
# Downloads all dependencies
# ~1-2 minutes

npm run build
# Compiles TypeScript → JavaScript
# Compiles JSX → HTML
# Processes CSS with Tailwind
# Optimizes images
# Creates .next/ folder
# ~1-2 minutes

# Then deploys .next/ folder
# To global CDN servers
# Website goes live!
# ~30 seconds
```

---

## 📊 Data Flow (How It All Connects)

```
YOUR LOCAL COMPUTER
    ↓
    └─→ Edit files (src/, games.json, etc.)
        ├─ npm run dev (test locally)
        └─ npm run build (check for errors)
    
GITHUB
    ↓
    └─→ git push origin main
        └─ Uploads to GitHub
    
NETLIFY (Automatic!)
    ↓
    ├─→ npm install (downloads packages)
    ├─→ npm run build (builds website)
    └─→ Deploy to CDN (goes live!)
    
PRODUCTION WEBSITE
    ↓
    └─→ https://saish-games.netlify.app
        └─ Users see new content!
```

---

## 🎮 Adding a Game (Complete Workflow)

### **Step 1: Get Game Files**
```
Saish gives you:
- game.html
- style.css  
- script.js
```

### **Step 2: Create Folder (Local)**
```bash
mkdir public/games/game-name
cp game.html public/games/game-name/index.html
cp style.css public/games/game-name/
cp script.js public/games/game-name/
```

### **Step 3: Edit games.json**
```json
{
  "id": "game-name",
  "title": "Game Title",
  "icon": "🎮",
  "description": "What it does",
  "category": "Action",
  "difficulty": "Beginner",
  "playTime": "5-10 minutes",
  "date": "2024-10-08"
}
```

### **Step 4: Test Local**
```bash
npm run dev
# Visit http://localhost:3000
# Play game to verify it works
```

### **Step 5: Deploy**
```bash
git add .
git commit -m "Add: Game Name"
git push origin main
# Wait 5-10 minutes
# Website updates automatically!
```

### **Step 6: Verify**
```
Visit: https://saish-games.netlify.app
See: New game in gallery!
Click: Play the game!
```

---

## 📁 Folder Structure (What Goes Where)

```
├── src/                      ← Don't usually edit
│   ├── app/                  ← Website pages
│   │   ├── page.tsx          (Homepage)
│   │   ├── games/
│   │   │   ├── page.tsx      (Gallery)
│   │   │   └── [gameId]/
│   │   │       └── page.tsx  (Player)
│   │   └── about/
│   │       └── page.tsx      (About Saish)
│   └── components/           ← Don't edit
│
├── public/
│   ├── games/                ← ⭐ PUT GAMES HERE!
│   │   ├── game-1/
│   │   │   ├── index.html    (Copy here!)
│   │   │   ├── style.css
│   │   │   └── script.js
│   │   └── game-2/
│   │       └── index.html
│   └── images/
│       └── saish-photo.jpg   ← ⭐ PUT PHOTO HERE!
│
├── games.json                ← ⭐ EDIT THIS!
│   (Add game info here)
│
└── package.json              ← Don't edit (unless adding packages)
```

---

## ✏️ Files to Edit

### **Most Important**
- **games.json** - Add/update games and Saish's info
- **public/games/** - Add game folders here
- **public/images/** - Add Saish's photo here

### **Sometimes**
- **tailwind.config.js** - Change colors
- **src/app/about/page.tsx** - Edit About page text

### **Never**
- **package.json** - (unless you know what you're doing)
- **next.config.js** - (configuration, don't change)
- **src/app/layout.tsx** - (core layout)

---

## 🔍 Checking Status

### **Local Status**
```bash
# See what changed
git status

# See recent commits
git log --oneline -5

# See current branch
git branch
```

### **Netlify Status**
1. Visit: https://app.netlify.com
2. Click your site
3. Click "Deployments"
4. See deployment history and logs

### **Website Status**
```bash
# Test live website
curl https://saish-games.netlify.app

# Or just visit in browser
# Check if new games appear
```

---

## 🚨 Emergency: Revert Changes

### **Undo Local Changes**
```bash
git checkout .
# Reverts all changes to last commit
```

### **Undo Last Commit**
```bash
git revert HEAD
# Creates new commit that undoes previous
```

### **Undo Deployment**
```bash
1. Go to Netlify Dashboard
2. Deployments → Previous version
3. Click "Restore deploy"
4. Website reverted! ✅
```

---

## 🎯 Common Scenarios

### **Scenario 1: Add New Game**
```bash
1. mkdir public/games/game-name
2. Copy game files
3. Edit games.json (add entry)
4. git push (auto-deploys!)
```

### **Scenario 2: Update Saish's Bio**
```bash
1. Edit games.json (daughter section)
2. git push (auto-deploys!)
```

### **Scenario 3: Add Saish's Photo**
```bash
1. Copy photo to: public/images/saish-photo.jpg
2. Update games.json: "photo": "/images/saish-photo.jpg"
3. git push (auto-deploys!)
```

### **Scenario 4: Change Colors**
```bash
1. Edit tailwind.config.js
2. Change pink hex values
3. npm run dev (test locally)
4. git push (auto-deploys!)
```

### **Scenario 5: Fix Bug on Live Site**
```bash
1. Identify issue
2. Fix code locally
3. npm run dev (test)
4. git push (auto-deploys!)
5. Netlify builds (~5 min)
6. Website fixed!
```

---

## ✅ Pre-Deployment Checklist

Before `git push`:

```bash
☐ npm run build        (No errors?)
☐ npm run dev          (Works locally?)
☐ Games folder exists  (public/games/)
☐ games.json valid     (Check syntax)
☐ All files saved      (Ctrl+S in editor)
☐ Ready to push!       (git push origin main)
```

---

## 📊 Build Times

### **Local**
```
npm install: 2-5 minutes (first time only)
npm run dev: Instant (already installed)
npm run build: 1-2 minutes
```

### **Netlify**
```
Detect push: 1 minute
npm install: 1 minute (cached, faster)
npm run build: 1 minute
Deploy: 30 seconds
Total: ~4-5 minutes
```

---

## 🌍 What Gets Deployed

### **Deployed to Netlify CDN**
- ✅ All website code (React components)
- ✅ All CSS (Tailwind processed)
- ✅ All JavaScript
- ✅ All HTML pages (pre-built)
- ✅ All static files in public/
- ✅ All game files
- ✅ games.json (as data file)

### **NOT Deployed**
- ❌ node_modules/ (too big, rebuilt on Netlify)
- ❌ .next/ (rebuilt on Netlify)
- ❌ .env files (not needed)
- ❌ .git files (not needed)

---

## 🔗 Key URLs

```
Local Development:
http://localhost:3000 (only you can see)

Production:
https://saish-games.netlify.app (everyone can see)
https://yourdomain.com (if you add custom domain)

Management:
https://github.com/username/saish-games-showcase (GitHub)
https://app.netlify.com (Netlify dashboard)
```

---

## 🎓 Learning Path

### **If You Want to Learn More**

```
1. Read: HOW_IT_WORKS.md
   (Understand the architecture)

2. Read: NETLIFY_DEPLOYMENT.md
   (Understand auto-deployment)

3. Read: WORKFLOW_GUIDE.md
   (Game upload workflow)

4. Read: README.md
   (Complete documentation)

5. Explore: Code
   src/ folder - see how it works
```

---

## 🚀 TL;DR (Too Long; Didn't Read)

### **Your Workflow**

```
1. Edit files locally
2. npm run dev (test)
3. git push (deploy)
4. Wait 5 minutes
5. Website updates!

That's it! Everything else is automatic!
```

### **Netlify Workflow**

```
1. Detects git push
2. npm install
3. npm run build
4. Deploy .next/ folder
5. Website live

All automatic! No manual steps!
```

### **Result**

```
✨ Professional website
🚀 Auto-deployed
🌍 Global CDN
💰 Free hosting
🎮 Easy to update

Just push code!
```

---

## 📞 Help

**Stuck?** Check:
1. README.md
2. HOW_IT_WORKS.md
3. NETLIFY_DEPLOYMENT.md
4. WORKFLOW_GUIDE.md

**Error?** 
1. Run `npm run build` locally
2. Check error message
3. Fix code
4. Try again

**Still stuck?**
1. Read the error carefully
2. Search in documentation
3. Check Next.js docs: nextjs.org
4. Check Netlify status: status.netlify.com

---

## 🎉 You're Ready!

Everything is automated and ready to go! 🚀

Just:
1. `npm install`
2. `npm run dev` (to test)
3. `git push` (to deploy)

Done! ✨
