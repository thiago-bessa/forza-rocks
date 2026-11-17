(function () {
  "use strict";

  const data = window.FORZA_DATA;
  const els = {
    nav: document.getElementById("stationNav"),
    hero: document.getElementById("hero"),
    list: document.getElementById("trackList"),
    count: document.getElementById("trackCount"),
    filter: document.getElementById("filter"),
    empty: document.getElementById("emptyState"),
    drawer: document.getElementById("drawer"),
    scrim: document.getElementById("scrim"),
    menuBtn: document.getElementById("menuBtn"),
    content: document.getElementById("content")
  };

  const ICONS = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M10 8.5v7l6-3.5-6-3.5zM21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8z"/></svg>',
    live: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-3.1A7 7 0 0 0 19 11h-2z"/></svg>',
    radio: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.2 6.3A2 2 0 0 0 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8.3l8.3-3.4L15.9 1 3.2 6.3zM7 20a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm13-8h-2v-2h-2v2H4V8h16v4z"/></svg>'
  };

  // Flat index of every station so we can route by hash: #/fh5/epitaph-records
  const stations = [];
  data.games.forEach(function (game) {
    game.stations.forEach(function (station) {
      stations.push({ game: game, station: station, key: game.id + "/" + station.id });
    });
  });

  function escapeHtml(text) {
    return String(text).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function ytSearch(query) {
    return "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
  }

  const TYPE_LABELS = {
    audio: "Audio", lyric: "Lyric", visualizer: "Visualizer", video: "",
    pro: "", tv: "TV", session: "Session", fan: "Fan cam"
  };

  function linkFor(track, kind) {
    const direct = track[kind];
    if (direct) {
      const type = track[kind + "Type"];
      return { url: direct, direct: true, tag: (type && TYPE_LABELS[type]) || "" };
    }
    const suffix = kind === "official" ? "official video" : "live";
    return { url: ytSearch(track.artist + " " + track.title + " " + suffix), direct: false, tag: "Search" };
  }

  function renderNav(activeKey) {
    els.nav.innerHTML = data.games.map(function (game) {
      const items = game.stations.map(function (station) {
        const key = game.id + "/" + station.id;
        const active = key === activeKey;
        return (
          '<li><a class="station-link' + (active ? " is-active" : "") + '" href="#/' + key + '"' +
          (active ? ' aria-current="page"' : "") + ">" +
          ICONS.radio + "<span>" + escapeHtml(station.name) + "</span>" +
          '<span class="station-link-count">' + station.tracks.length + "</span></a></li>"
        );
      }).join("");

      return (
        '<section class="game-group" style="--game:' + game.color + '">' +
        '<h2 class="game-label"><span class="game-dot" aria-hidden="true"></span>' +
        escapeHtml(game.title) + '<span class="game-year">' + game.year + "</span></h2>" +
        '<ul class="station-list">' + items + "</ul></section>"
      );
    }).join("");
  }

  function renderHero(entry) {
    const game = entry.game;
    const station = entry.station;
    const host = station.host
      ? '<span class="meta-item"><strong>Host</strong> ' + escapeHtml(station.host) + "</span>"
      : "";
    const genres = (station.genres || []).map(function (g) {
      return '<span class="chip">' + escapeHtml(g) + "</span>";
    }).join("");

    els.hero.innerHTML =
      '<div class="hero-stripes" aria-hidden="true"></div>' +
      '<p class="hero-overline">' + escapeHtml(game.title) + " · " + game.year + " · " + escapeHtml(game.setting) + "</p>" +
      '<h1 class="hero-title">' + escapeHtml(station.name) + "</h1>" +
      '<p class="hero-tagline">' + escapeHtml(station.tagline || "") + "</p>" +
      '<div class="hero-meta">' + genres + host + "</div>";
  }

  function renderTracks(entry) {
    const query = els.filter.value.trim().toLowerCase();
    const tracks = entry.station.tracks
      .map(function (t, i) { return Object.assign({ n: i + 1 }, t); })
      .filter(function (t) {
        return !query || (t.artist + " " + t.title).toLowerCase().indexOf(query) !== -1;
      });

    els.list.innerHTML = tracks.map(function (t) {
      const official = linkFor(t, "official");
      const live = linkFor(t, "live");
      const label = escapeHtml(t.artist + " – " + t.title);
      return (
        '<div class="track-row" role="row">' +
        '<span role="cell" class="col-num">' + t.n + "</span>" +
        '<span role="cell" class="col-artist">' + escapeHtml(t.artist) + "</span>" +
        '<span role="cell" class="col-title">' + escapeHtml(t.title) + "</span>" +
        '<span role="cell" class="col-link">' + button(official, ICONS.play, "Official", "Official video: " + label) + "</span>" +
        '<span role="cell" class="col-link">' + button(live, ICONS.live, "Live", "Live performance: " + label) + "</span>" +
        "</div>"
      );
    }).join("");

    const total = entry.station.tracks.length;
    els.count.textContent = query ? tracks.length + " of " + total + " songs" : total + " songs";
    els.empty.hidden = tracks.length > 0;
  }

  function button(link, icon, text, aria) {
    return (
      '<a class="link-btn' + (link.direct ? " is-direct" : "") + '" href="' + escapeHtml(link.url) +
      '" target="_blank" rel="noopener" aria-label="' + aria + (link.tag ? " (" + link.tag + ")" : "") + '"' +
      (link.tag ? ' title="' + link.tag + '"' : "") + ">" +
      icon + "<span>" + text + "</span>" + (link.tag ? '<span class="search-tag">' + link.tag + "</span>" : "") + "</a>"
    );
  }

  function currentEntry() {
    const key = location.hash.replace(/^#\/?/, "");
    return stations.find(function (s) { return s.key === key; }) || stations[0];
  }

  let active = null;

  function route() {
    const entry = currentEntry();
    const changed = !active || active.key !== entry.key;
    active = entry;

    document.documentElement.style.setProperty("--accent", entry.game.color);
    document.title = entry.station.name + " · " + entry.game.title + " — Forza Rocks";

    if (changed) els.filter.value = "";
    renderNav(entry.key);
    renderHero(entry);
    renderTracks(entry);
    closeDrawer();
    if (changed) els.content.scrollTop = 0;
  }

  // Mobile drawer
  function openDrawer() {
    document.body.classList.add("drawer-open");
    els.scrim.hidden = false;
    els.menuBtn.setAttribute("aria-expanded", "true");
  }
  function closeDrawer() {
    document.body.classList.remove("drawer-open");
    els.scrim.hidden = true;
    els.menuBtn.setAttribute("aria-expanded", "false");
  }

  els.menuBtn.addEventListener("click", function () {
    document.body.classList.contains("drawer-open") ? closeDrawer() : openDrawer();
  });
  els.scrim.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });
  els.filter.addEventListener("input", function () { renderTracks(active); });
  window.addEventListener("hashchange", route);

  route();
})();
