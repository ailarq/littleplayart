# 📂 WHERE TO PUT FILES - Visual Guide

## 🎯 The Golden Rule

```
public/games/game-id/index.html
│         │      │      │
│         │      │      └─ Main HTML file (MUST BE NAMED index.html!)
│         │      └──────── Folder name (matches games.json id)
│         └─────────────── Games folder (NOT changeable!)
└───────────────────────── Public folder (NOT changeable!)
```

---

## 📁 Your Folder Structure

### **Current State**
```
/Users/lana/Claude/Projects/Saish_Page/
│
├── public/                          ← PUBLIC FOLDER (Don't rename!)
│   ├── games/                       ← GAMES FOLDER (Don't rename!)
│   │   ├── flappy-bird/
│   │   │   ├── index.html           ← Game file (MUST be index.html!)
│   │   │   ├── style.css            ← Optional
│   │   │   └── script.js            ← Optional
│   │   │
│   │   ├── memory-game/
│   │   │   └── index.html
│   │   │
│   │   └── snake-game/
│   │       └── index.html
│   │
│   └── images/
│       └── saish-photo.jpg
│
├── src/                             ← React code (ignore)
│
├── games.json                       ← Game metadata (EDIT THIS!)
│
└── ... (other files)
```

---

## 📋 Step-by-Step: Adding a New Game

### **Scenario: Saish gives you "Rock Paper Scissors" game**

#### **BEFORE: Your Current Structure**
```
public/games/
├── flappy-bird/
│   └── index.html
├── memory-game/
│   └── index.html
└── snake-game/
    └── index.html
```

#### **STEP 1: Create New Folder**
```
Create folder at:
/Users/lana/Claude/Projects/Saish_Page/public/games/rock-paper-scissors/
```

**After Step 1:**
```
public/games/
├── flappy-bird/
│   └── index.html
├── memory-game/
│   └── index.html
├── snake-game/
│   └── index.html
└── rock-paper-scissors/             ← NEW FOLDER (just created!)
    (empty - we'll add files next)
```

#### **STEP 2: Copy Game Files Into New Folder**

**Saish gives you:**
- `rock-paper-scissors.html`
- `rps-style.css`
- `rps-script.js`

**Copy them to:**
```
public/games/rock-paper-scissors/
├── index.html           ← Rename rock-paper-scissors.html to this!
├── style.css            ← Rename rps-style.css to this!
└── script.js            ← Rename rps-script.js to this!
```

**After Step 2:**
```
public/games/
├── flappy-bird/
│   └── index.html
├── memory-game/
│   └── index.html
├── snake-game/
│   └── index.html
└── rock-paper-scissors/             ← Now has files!
    ├── index.html
    ├── style.css
    └── script.js
```

#### **STEP 3: Edit games.json**

**Add this to games.json (in the `games` array):**
```json
{
  "id": "rock-paper-scissors",
  "title": "Rock Paper Scissors",
  "icon": "✂️",
  "description": "Play against the computer",
  "category": "Puzzle",
  "difficulty": "Beginner",
  "playTime": "5 minutes",
  "date": "2026-10-09"
}
```

**After Step 3:**
```
games.json now contains:
{
  "games": [
    { "id": "flappy-bird", ... },
    { "id": "memory-game", ... },
    { "id": "snake-game", ... },
    { "id": "rock-paper-scissors", ... }    ← NEW ENTRY!
  ]
}
```

#### **FINAL RESULT**
```
public/games/
├── flappy-bird/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── memory-game/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── snake-game/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── rock-paper-scissors/         ← Successfully added!
    ├── index.html
    ├── style.css
    └── script.js

games.json:
✓ Entry added for rock-paper-scissors
```

---

## 🚨 Common Mistakes

### ❌ MISTAKE 1: Wrong Folder Name

```
WRONG:
public/games/RockPaperScissors/     (capitals!)
public/games/rock_paper_scissors/   (underscores!)
public/games/rock-paper-scissors/   (folder name) but
games.json: "id": "rockpaperscissors"  (no match!)

Result: Game won't load! ❌
```

```
CORRECT:
public/games/rock-paper-scissors/   (folder name)
games.json: "id": "rock-paper-scissors"  (matches exactly!)

Result: Works! ✓
```

### ❌ MISTAKE 2: Wrong HTML File Name

```
WRONG:
public/games/rock-paper-scissors/
├── game.html           ← Wrong name!
├── style.css
└── script.js

Result: Netlify can't find the game! ❌
```

```
CORRECT:
public/games/rock-paper-scissors/
├── index.html          ← Correct name!
├── style.css
└── script.js

Result: Works! ✓
```

### ❌ MISTAKE 3: Wrong Path in HTML

```
WRONG HTML CODE:
<link rel="stylesheet" href="/style.css">
<script src="/script.js"></script>

Result: Styles and scripts won't load! ❌
```

```
CORRECT HTML CODE:
<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>

Result: Works! ✓
```

### ❌ MISTAKE 4: Missing games.json Entry

```
WRONG:
- Folder created: public/games/rock-paper-scissors/
- Files copied: ✓
- games.json: NO ENTRY ❌

Result: Game exists but won't show in gallery! ❌
```

```
CORRECT:
- Folder created: public/games/rock-paper-scissors/ ✓
- Files copied: ✓
- games.json: ENTRY ADDED ✓

Result: Works! ✓
```

---

## 📍 Summary: Where Files Go

| What | Where | Notes |
|------|-------|-------|
| **Game HTML** | `public/games/game-id/index.html` | MUST be named `index.html` |
| **Game CSS** | `public/games/game-id/style.css` | If separate from HTML |
| **Game JS** | `public/games/game-id/script.js` | If separate from HTML |
| **Game Images** | `public/games/game-id/assets/` | Keep in same folder |
| **Saish Photo** | `public/images/saish-photo.jpg` | For About Saish page |
| **Game Metadata** | `games.json` | One entry per game |
| **Website Code** | `src/` | Don't edit usually |
| **Config** | `.js` files in root | Don't edit usually |

---

## ✅ Quick Checklist

For each new game, verify:

```
FOLDER STRUCTURE:
☐ Folder exists: public/games/game-id/
☐ Main file: public/games/game-id/index.html
☐ Styles file: public/games/game-id/style.css (if separate)
☐ Script file: public/games/game-id/script.js (if separate)
☐ All files in same folder (not scattered)

HTML FILE:
☐ Named exactly: index.html
☐ Uses relative paths: ./style.css ./script.js
☐ Not absolute paths: /style.css /script.js

games.json ENTRY:
☐ Added to "games" array
☐ "id" matches folder name exactly
☐ "title" is descriptive
☐ "icon" chosen from emoji list
☐ "description" explains the game
☐ "category" is valid
☐ "difficulty" is valid
☐ "playTime" is estimated
☐ "date" is YYYY-MM-DD format
☐ No JSON syntax errors

FINAL VERIFICATION:
☐ npm run dev works
☐ Game shows in gallery at http://localhost:3000/games
☐ Can click game and play it
☐ Ready to deploy!
```

---

## 🎯 The Minimal Example

### **Simplest Possible Game Setup**

If Saish gives you just ONE HTML file:

```
Saish gives: flappy-bird.html

You do:
1. mkdir public/games/flappy-bird
2. cp flappy-bird.html public/games/flappy-bird/index.html
3. Edit games.json (add one entry)
4. Done!

Result:
public/games/flappy-bird/
└── index.html       ← That's it!
```

**games.json entry:**
```json
{
  "id": "flappy-bird",
  "title": "Flappy Bird",
  "icon": "🐦",
  "description": "Navigate through pipes",
  "category": "Action",
  "difficulty": "Beginner",
  "playTime": "5-10 minutes",
  "date": "2026-10-09"
}
```

**That's all!** No separate CSS or JS needed if it's all in HTML! ✓

---

## 🚀 Remember

### **The Path Formula**

```
/Users/lana/Claude/Projects/Saish_Page/public/games/[GAME_ID]/index.html
                                                     │         │
                                                     │         └── Always: index.html
                                                     └────────────── Matches games.json "id"
```

### **The Naming Rules**

```
Folder name:     rock-paper-scissors       (lowercase, hyphens)
games.json id:   "rock-paper-scissors"     (must match exactly!)
HTML file:       index.html                (always this name!)
```

### **The Process**

```
1. Create folder
2. Copy game files (rename HTML to index.html)
3. Edit games.json (add entry)
4. Test locally (npm run dev)
5. Deploy (git push)
```

---

## ✨ You're Ready!

Now you know exactly where to put files! 📂

Just follow these rules and every game will work! 🎮
