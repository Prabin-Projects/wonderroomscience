// Episode page: video, description and sources for the episode named in <body data-slug="...">.
(function () {
  const e = window.EPISODES.find((x) => x.slug === document.body.dataset.slug);
  const $ = (id) => document.getElementById(id);
  if (!e || !window.isLive(e)) {
    document.title = 'Coming soon · The Wonder Room';
    $('num').textContent = '✦ COMING SOON';
    $('title').textContent = 'This episode isn\'t out yet.';
    $('blurb').textContent = 'Subscribe to The Wonder Room on YouTube so you see it first.';
    $('report').textContent = 'See the episodes that are out';
    $('report').href = '../index.html#episodes';
    const img = document.createElement('img'); img.src = '../img/coming-soon.jpg'; img.alt = 'The Wonder Room'; $('player').appendChild(img);
    $('sources').closest('section').remove();
    return;
  }
  document.title = e.title + ' · The Wonder Room';
  $('num').textContent = '✦ ' + new Date(e.released + 'T20:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/New_York' }).toUpperCase();
  $('title').textContent = e.title;
  $('blurb').textContent = e.blurb;
  $('report').href = '../index.html?ep=' + e.slug + '#corrections';
  const f = document.createElement('iframe');
  f.src = 'https://www.youtube-nocookie.com/embed/' + e.youtube;
  f.title = e.title; f.allowFullscreen = true;
  f.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
  $('player').appendChild(f);
  const ol = $('sources');
  for (const [text, url] of e.sources) {
    const li = document.createElement('li');
    li.append(text + ' ');
    if (url) { const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = url.replace(/^https?:\/\//, ''); li.append(a); }
    ol.appendChild(li);
  }
})();
