# Campus Arcade

A game shelf with 5 browser games. Click a game on the shelf and it opens on its own page. Pure HTML, CSS and JavaScript: no build step, no dependencies.

## Games
| Game | How to play |
|---|---|
| Gravity Flip | Space or tap flips gravity. Dodge the blocks. |
| Code Breaker | Guess the secret 4-digit code in 8 tries. ● right spot, ○ wrong spot. |
| Typing Rush | Type the falling tech words. 3 lives. |
| Memory Matrix | Memorize the lit tiles, then tap them. Gets harder each level. |
| Reflex Duel | 2 players, one keyboard. P1 = A, P2 = L. First to 5 wins. False starts lose the round. |

Best scores are saved in the browser (localStorage) and show on the shelf.

## Run locally
Open `index.html` in a browser, or run `python -m http.server` in this folder and visit http://localhost:8000.

## Deploy free on GitHub Pages
1. Create a new GitHub repository (for example `campus-arcade`).
2. Unzip the project and upload everything to the repo root (keep `.nojekyll`), or use:
   ```
   git init
   git add .
   git commit -m "Campus Arcade"
   git branch -M main
   git remote add origin https://github.com/<your-username>/campus-arcade.git
   git push -u origin main
   ```
3. In the repo open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. After a minute the site is live at `https://<your-username>.github.io/campus-arcade/`.

All links are relative, so it works under the repo sub-path.

## Add a new game
1. Copy a file in `games/` to `games/my-game.html` and change the game code.
2. Add an entry in `js/games.js` (`id` must match the file name).
3. Call `best.set('my-game', score)` to save a best score. Add `low:1` to the entry if a lower score is better.

## Structure
```
index.html        the shelf
css/style.css     shared styles
js/games.js       game list and best-score helper
games/*.html      one page per game
.nojekyll         tells GitHub Pages to serve files as-is
```
