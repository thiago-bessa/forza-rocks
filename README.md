# forza-rocks

Loud guitars, full throttle. The heavy radio stations of Forza Horizon, game by game, ready to play on YouTube.

**Live site:** https://thiago-bessa.github.io/forza-rocks/

## Stations

| Game | Year | Stations |
|---|---|---|
| Forza Horizon | 2012 | Horizon Rocks |
| Forza Horizon 2 | 2014 | Horizon XS |
| Forza Horizon 3 | 2016 | Epitaph Records, Vagrant Records |
| Forza Horizon 4 | 2018 | Horizon XS |
| Forza Horizon 5 | 2021 | Horizon XS, Epitaph Records |
| Forza Horizon 6 | 2026 | Horizon XS |

## How it works

A single static page — no build step, no dependencies.

```
index.html      page shell
css/styles.css  Material-inspired styling, themed per game
js/data.js      games, stations and tracks
js/app.js       sidebar, routing (#/fh5/epitaph-records) and track list
```

Each track has a link to its **official video** and a **live performance**. Clicking a button plays the video in a modal using YouTube's official embedded player (youtube.com, so signed-in YouTube Premium viewers keep their ad-free playback); the modal also links to the video on YouTube, since some owners disable playback on other sites. When no direct link has been found, the cell shows a dash instead of a button. To add or fix links, edit `js/data.js`:

```js
{ artist: "Royal Blood", title: "Out of the Black",
  official: "https://www.youtube.com/watch?v=...",
  live: "https://www.youtube.com/watch?v=..." }
```

Run locally by opening `index.html` in a browser.

See [`REVIEW.md`](REVIEW.md) for links and data that still need a manual check.

## Disclaimer

Fan-made project, not affiliated with Playground Games, Xbox or Microsoft. All songs and videos belong to their respective owners; this site only links to them.
