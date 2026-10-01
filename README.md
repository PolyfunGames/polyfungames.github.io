# polyfungames.com

Static site for Polyfun Games, served by GitHub Pages at https://www.polyfungames.com.
Plain HTML + CSS, no build step: edit a file, commit, push.

```
index.html                               Home page (all sections)
p/privacy-policy.html                    Privacy policy (mobile games) — URL must not change
p/privacy-policy-dynamicshootingvr.html  Privacy policy (Dynamic Shooting VR) — URL must not change
404.html                                 Not-found page
assets/css/style.css                     All styles (colors at the top)
assets/js/main.js                        Scroll fade-in + click-to-load YouTube (optional)
assets/img/games/                        Mobile game screenshots (9:16)
CNAME, app-ads.txt                       Domain + ad network verification — keep in the root
```

## Common edits

**Add a mobile game:** put a 9:16 screenshot (around 540×960, `.webp` or `.png`) in
`assets/img/games/`, then copy one `<li class="game">` block in the *Mobile Games* section
of `index.html` and change the image, name and store links (remove the Google Play or
App Store link if the game isn't on that store).

**Change the VR video:** in the *VR Games* section, replace the video ID (`2rqLua06fVM`)
in `href`, `data-yt` and the thumbnail URL (`maxresdefault.jpg`).

**Add a social/store link:** copy one `<li>` in the *Find us* section. Icons live in the
`<svg>` sprite at the top of `index.html`.

**Preview locally:** `python -m http.server` in this folder, then open http://localhost:8000.
