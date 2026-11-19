// Episodes shown on the site (newest first). Each one appears from its release time.
window.EPISODES = [];
window.isLive = (e) => !!(e.youtube && e.released) && Date.now() >= Date.parse(e.released + 'T20:00:00Z');
