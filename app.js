const STORAGE_KEY = 'marlon_archive_v2';

const DEFAULT_DATA = {
  timeline: [
    { id: 1, date: '30 May 2026', title: 'First Night', note: 'The night we met in person. First kiss. First sleepover. I was not prepared.' },
    { id: 2, date: '8 June 2026', title: 'The Night We Said It', note: 'First and last time we got high — never again. The bigger thing: I love you, said at 2am like it had been waiting there all along. I think. *laughs nervously.' },
  ],
  poetry: [
    {
      id: 1,
      title: 'poem where I be & you just might',
      body: `               I am sitting next to you & you are not there
you're a frameless heat, mass of ruptured air.

               to be clear, you are the spit & liver it takes
to be human & I want it & I think you want me

               to have it all, but I know
what it's like to be one of the few blacks

               for miles. I know what our people think
about me, or maybe us. I know

               God's flaming eye, I stare into it always
dying to blink, irises cracking like commandment stones.

               I get it.
               I get it.

               &it might be how you say
my name like a testimony

               or how I graze your hand
&yours doesn't move, but my body

               made up a rumor about your body
&wants to prove it true. forgive him.`,
      date: '',
      note: 'Danez Smith'
    },
    {
      id: 2,
      title: 'Dear Time (excerpt)',
      body: `now married, i'm in you different, in love
deeper, legally, under god and in front of my mama,

i know love different, love is a measure of you,
to love is to say i put my time next to your time,

i tie your time round my breath, sync my life
to your chance. stupid love, stupider still to get married,

i tie my time to you, to you who knows most intimately
what is wrong with me, who has seen me at my most naked,

ass out, my toothless ashy soul naked and cold
and shameful in front of god, what a thing, love, i am so happy

to be stupid this way.`,
      date: '',
      note: 'Danez Smith'
    },
    {
      id: 3,
      title: 'from "bare"',
      body: `let me burn if it means you
& i have one night with no barrier
except skin.`,
      date: '',
      note: 'Danez Smith'
    },
    {
      id: 4,
      title: 'from "Principles"',
      body: `if love is a hole wide enough to be God's mouth,
let me plunge into that holy dark
& forget the color of light.`,
      date: '',
      note: 'Danez Smith — Don\'t Call Us Dead'
    },
    {
      id: 5,
      title: 'I am yet to read',
      body: `the poems on your office table.

I keep meaning to.
I keep finding other things to do with my eyes
when I am near you.`,
      date: '',
      note: ''
    },
  ],
   
  letters: [
    {
      id: 1,
      date: 'Some Tuesday',
      body: `Dear Poppi,

you still confuse me sometimes. i can't wait to learn about you and how weird we are together. all i am trying to do is make your inner child happy and safe.

— Theoh`
    },
    {
      id: 2,
      date: 'A quieter Tuesday',
      body: `Dear Poppi,

I have been thinking about the distinction between loving what a person gives you and loving the person themselves—the whole, unvarnished architecture of them. You must know, then, that my regard for you is not contingent on the happiness you provide me, nor on the particular way my body responds to your presence. Those things are beautiful side effects; they are not the cause.

I love you because I genuinely, and without effort, want your flourishing. I want to watch you grow into the parts of yourself that have been buried beneath years of other people's expectations, of your own careful self‑protection, of a world that has rarely asked you to simply unfold. I want to help you discover those buried fragments—the soft ones, the sharp ones, the ones you forgot were even yours.

It has occurred to me that I cannot love you well if I do not also insist you love yourself. Not in the hollow, self‑help‑pamphlet way, but in the way a scholar loves a rare manuscript: gently, with patience, respecting its fragility, yet utterly committed to its preservation. You are the rarest text I have ever encountered, and I intend to spend a very long time reading you correctly.

Please, then, love yourself. Not for my sake—for yours. But if you cannot do it for yourself yet, allow me to hold that task in trust until you can.

With love and mild terror,
Theoh`
    }
],
  glossary: [
    {
      id: 1,
      term: 'Onalethata',
      pos: 'n., proper',
  def: 'A Setswana name historically glossed as “strength”.Contemporary field observations, however, have located the primary source of that strength in the anatomy between his legs. The finding is considered definitive and, by all accounts, not metaphorical.'
    },
    {
      id: 2,
      term: 'Poppi',
      pos: 'n., term of address',
      def: 'The warmest word in the room. Not given lightly. Not given to anyone else. End of definition.'
    },
    {
      id: 3,
      term: 'The Look',
      pos: 'n.',
      def: 'The expression deployed when Marlon already knows you\'re wrong but has elected, generously, to let you arrive at that conclusion yourself. Accompanied by a patience that is frankly unsettling.'
    },
    {
      id: 4,
      term: 'moemedi',   // corrected spelling
      pos: 'n., vocative',
      def: 'Reserved for when diplomacy has failed. When "babe" and "baby" and "my love" have all been exhausted and what remains is the honest, unvarnished desire to be annoying. Very effective. Deeply unfair.'
    },
    {
      id: 5,
      term: 'papi',
      pos: 'n., last resort',
      def: 'Deployed only when the full roster of names has been cycled through and none of them felt right. He knows. He hates it. He answers anyway.'
    },
    {
      id: 6,
      term: 'kids',
      pos: 'n., pl.',
  def: 'The little swimmers we optimistically discuss while seated on the porcelain throne, then cheerfully sentence to a watery grave. AKA: the maybe-babies, the abstract expressionists, and the reason we keep buying toilet paper. RIP to the millions already flushed.'
    },
  ],
  field_notes: [
    { id: 1, text: 'Subject displays a remarkable capacity for patience. Further study required to determine whether this is genuine equanimity or a very long game.' },
    { id: 2, text: 'Subject has been observed laughing at his own nrdy jokes before reaching the punchline. Endearing. Statistically unusual. Somehow works every time.' },
    { id: 3, text: "Subject's presence makes ordinary me feel significantly more loved. Mechanism unknown. Effect reproducible with every interaction." },
    { id: 4, text: "Subject has poems on his office table that I have not read. I keep meaning to. I keep getting distracted by the subject himself." },
    { id: 5, text: 'Subject professes a deep appreciation for tea, yet the preparation of a single cup appears to be beyond his operational repertoire. The kettle remains untouched.' },
    { id: 6, text: 'Subject maintains a symbiotic relationship with his mobile device and the TikTok algorithm. Separation anxiety is mutual.' },
    { id: 7, text: 'During moments of physical intimacy, subject verbalises enthusiastic commentary on the observer’s internal architecture. Feedback consistently positive.' },
    { id: 8, text: 'Subject responds enthusiastically to meals prepared by the observer, but when left to his own devices, appears to subsist on air and whatever requires no assembly.' },
    { id: 9, text: 'Subject dedicates significant observational bandwidth to the observer’s body and offers unsolicited, detailed praise. The data suggests genuine admiration, not mere flattery.' },
    { id: 10, text: 'A curious ritual has been documented: subject seeks out and kisses areas of the observer’s body where bruises have formed. Possible comfort-seeking behaviour; further study warranted.' }
],
reading: [
    { id: 1, type: 'Book', title: "Giovanni's Room", author: 'James Baldwin', note: 'Because you would have loved this in your English seminar. Because Baldwin writes love like it costs something.' },
    { id: 2, type: 'Film', title: 'Call Me By Your Name', author: 'Luca Guadagnino', note: 'For the aesthetics. For the ache. For what it feels like to have a summer change you.' },
    { id: 3, type: 'Music', title: 'thinkin about you', author: 'Frank Ocean', note: 'Listen to it at night, alone, with your eyes closed. You will understand.' },
    { id: 4, type: 'Book', title: "Don't Call Us Dead", author: 'Danez Smith', note: 'You already live here, in these poems. You just don\'t know it yet.' },
    { id: 5, type: 'Music', title: 'True Romance', author: 'Tove Lo', note: 'For when love feels cinematic and a little reckless.' },
    { id: 6, type: 'Music', title: "I Don't Know You Yet", author: 'Absolutely', note: '"I just don\'t know you yet / But I know you\'ve been sent from God / To teach me to love again." A song for the space between hoping and knowing.' },
    { id: 7, type: 'Music', title: 'Mariners Apartment Complex', author: 'Lana Del Rey', note: 'For the ache. For the softness. For the way Lana makes melancholy feel like a warm room you never want to leave.' }
],
  album: {
    chapters: ['1 Month', '6 Months', '1 Year', '1.5 Years'],
    photos: { '1 Month': [], '6 Months': [], '1 Year': [], '1.5 Years': [] },
    activeChapter: '1 Month'
  }
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE)); } catch(e) {}
}

const STATE = loadState();
if (!STATE.album) STATE.album = JSON.parse(JSON.stringify(DEFAULT_DATA.album));
STATE.album.chapters.forEach(c => { if (!STATE.album.photos[c]) STATE.album.photos[c] = []; });

// ─── PASSWORD (SPACES, NO DASHES) ─────────────────────────────────────
// ─── PASSWORD (NO SPACES, NO DASHES) ────────────────────────────────
function checkPassword() {
  const val = document.getElementById('pw-input').value.trim();
  if (val === '30052026') {            // <-- exact match: day-month-year, no spaces
    const gate = document.getElementById('password-gate');
    gate.style.opacity = '0';
    gate.style.transition = 'opacity 1s ease';
    setTimeout(() => { gate.style.display = 'none'; startMusic(); }, 1000);
    sessionStorage.setItem('unlocked', '1');
  } else {
    const err = document.getElementById('pw-error');
    err.style.opacity = '1';
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').classList.add('shake');
    setTimeout(() => { document.getElementById('pw-input').classList.remove('shake'); }, 500);
    document.getElementById('pw-input').focus();
    setTimeout(() => err.style.opacity = '0', 2500);
  }
}
// ─── MUSIC ────────────────────────────────────────────────────────────────
const audio = document.getElementById('audio-player');
audio.volume = 0.4;
function startMusic() { audio.play().catch(()=>{}); updatePlayIcon(true); }
function togglePlay() {
  if (audio.paused) { audio.play(); updatePlayIcon(true); }
  else { audio.pause(); updatePlayIcon(false); }
}
function setVolume(v) { audio.volume = v; }
function updatePlayIcon(playing) {
  document.getElementById('play-icon').classList.toggle('hidden', playing);
  document.getElementById('pause-icon').classList.toggle('hidden', !playing);
}

// ─── MOBILE NAV ───────────────────────────────────────────────────────────
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  nav.classList.toggle('hidden');
  nav.classList.toggle('flex');
}

// ─── RENDER ───────────────────────────────────────────────────────────────
function renderTimeline() {
  const el = document.getElementById('timeline-list');
  el.innerHTML = STATE.timeline.map((e, i) => `
    <div class="timeline-entry reveal-item" style="--i:${i}">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs font-inter tracking-widest uppercase text-[#5a5245] mb-1">${e.date}</p>
          <h3 class="font-garamond text-xl text-[#e8e2d6]">${e.title}</h3>
          ${e.note ? `<p class="font-cormorant italic text-[#8a7f6e] text-base mt-1 leading-relaxed">${e.note}</p>` : ''}
        </div>
        <button class="delete-btn flex-shrink-0" onclick="delRow('timeline',${e.id})">✕</button>
      </div>
    </div>`).join('');
  bindReveal(el);
}

function renderPoetry() {
  const el = document.getElementById('poetry-list');
  el.innerHTML = STATE.poetry.map((p, i) => `
    <div class="poem-card reveal-item" style="--i:${i}">
      <button class="delete-btn absolute top-0 right-0" onclick="delRow('poetry',${p.id})">✕</button>
      ${p.date ? `<p class="text-xs font-inter tracking-widest uppercase text-[#5a5245] mb-3">${p.date}</p>` : ''}
      <h3 class="font-garamond text-2xl text-[#e8e2d6] mb-6">${p.title}</h3>
      <pre class="font-cormorant italic text-[#c8b89a] text-xl leading-relaxed whitespace-pre-wrap poem-text">${p.body}</pre>
      ${p.note ? `<p class="text-xs font-inter text-[#5a5245] mt-6 tracking-wider">— ${p.note}</p>` : ''}
    </div>`).join('');
  bindReveal(el);
}

function renderLetters() {
  const el = document.getElementById('letters-list');
  el.innerHTML = STATE.letters.map((l, i) => `
    <div class="letter-card reveal-item" style="--i:${i}">
      <button class="delete-btn absolute top-3 right-3" onclick="delRow('letters',${l.id})">✕</button>
      <p class="text-xs font-inter tracking-widest uppercase text-[#5a5245] mb-6">${l.date}</p>
      <pre class="font-cormorant text-lg text-[#c8b89a] leading-relaxed whitespace-pre-wrap">${l.body}</pre>
    </div>`).join('');
  bindReveal(el);
}

function renderGlossary() {
  const el = document.getElementById('glossary-list');
  el.innerHTML = STATE.glossary.map((g, i) => `
    <div class="gloss-entry reveal-item" style="--i:${i}">
      <button class="delete-btn absolute top-0 right-0" onclick="delRow('glossary',${g.id})">✕</button>
      <span class="gloss-term">${g.term}</span><span class="gloss-pos">${g.pos}</span>
      <p class="gloss-def">${g.def}</p>
    </div>`).join('');
  bindReveal(el);
}

function renderFieldNotes() {
  const el = document.getElementById('field-notes-list');
  el.innerHTML = STATE.field_notes.map((n, i) => `
    <div class="field-note reveal-item" style="--i:${i}">
      ${n.text}
      <button class="delete-btn absolute top-1 right-0" onclick="delRow('field_notes',${n.id})">✕</button>
    </div>`).join('');
  bindReveal(el);
}

function renderReading() {
  const el = document.getElementById('reading-list');
  el.innerHTML = STATE.reading.map((r, i) => `
    <div class="rec-item reveal-item" style="--i:${i}">
      <span class="rec-type-badge">${r.type}</span>
      <div class="flex-1 min-w-0">
        <p class="font-garamond text-lg text-[#e8e2d6]">${r.title}</p>
        <p class="font-inter text-xs text-[#5a5245] mt-0.5">${r.author||''}</p>
        ${r.note ? `<p class="font-cormorant italic text-[#8a7f6e] text-sm mt-1">${r.note}</p>` : ''}
      </div>
      <button class="delete-btn self-center" onclick="delRow('reading',${r.id})">✕</button>
    </div>`).join('');
  bindReveal(el);
}

function renderAlbumTabs() {
  document.getElementById('album-tabs').innerHTML = STATE.album.chapters.map(c => `
    <button class="album-tab ${c===STATE.album.activeChapter?'active':''}" onclick="setChapter('${c}')">${c}</button>`).join('');
  document.getElementById('photo-chapter').innerHTML = STATE.album.chapters.map(c =>
    `<option value="${c}">${c}</option>`).join('');
}

function renderAlbumGrid() {
  const photos = STATE.album.photos[STATE.album.activeChapter] || [];
  const grid = document.getElementById('album-grid');
  if (!photos.length) {
    grid.innerHTML = `<div class="col-span-2 md:col-span-3 py-16 text-center font-cormorant italic text-[#3a3530] text-lg">No photographs yet.<br>Add the first memory.</div>`;
    return;
  }
  grid.innerHTML = photos.map((p, i) => `
    <div class="photo-card reveal-item" style="--i:${i}">
      <img src="${p.url}" alt="${p.caption||''}">
      ${p.caption ? `<div class="photo-caption">${p.caption}</div>` : ''}
    </div>`).join('');
  bindReveal(grid);
}

function renderAll() {
  renderTimeline(); renderPoetry(); renderLetters(); renderGlossary();
  renderFieldNotes(); renderReading(); renderAlbumTabs(); renderAlbumGrid();
}

// ─── STAGGERED REVEAL ──────────────────────────────────────────────────────
function bindReveal(parent) {
  const items = parent.querySelectorAll('.reveal-item');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const i = parseInt(entry.target.style.getPropertyValue('--i')) || 0;
        entry.target.style.transitionDelay = (i * 80) + 'ms';
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  items.forEach(item => obs.observe(item));
}

// ─── ADD HANDLERS ──────────────────────────────────────────────────────────
function nextId(arr) { return arr.length ? Math.max(...arr.map(r => r.id||0)) + 1 : 1; }

function addTimelineEntry() {
  const date = v('tl-date'), title = v('tl-title'), note = v('tl-note');
  if (!date||!title) return flash('tl-title');
  STATE.timeline.push({ id: nextId(STATE.timeline), date, title, note });
  saveState(); renderTimeline(); clear(['tl-date','tl-title','tl-note']);
}

function addPoem() {
  const title = v('poem-title'), body = v('poem-body'), date = v('poem-date');
  if (!title||!body) return flash('poem-body');
  STATE.poetry.push({ id: nextId(STATE.poetry), title, body, date, note: '' });
  saveState(); renderPoetry(); clear(['poem-title','poem-body','poem-date']);
}

function addLetter() {
  const date = v('letter-date')||'Undated', body = v('letter-body');
  if (!body) return flash('letter-body');
  STATE.letters.push({ id: nextId(STATE.letters), date, body });
  saveState(); renderLetters(); clear(['letter-date','letter-body']);
}

function addGlossary() {
  const term = v('gloss-term'), pos = v('gloss-pos')||'n.', def = v('gloss-def');
  if (!term||!def) return flash('gloss-def');
  STATE.glossary.push({ id: nextId(STATE.glossary), term, pos, def });
  saveState(); renderGlossary(); clear(['gloss-term','gloss-pos','gloss-def']);
}

function addFieldNote() {
  const text = v('fn-text');
  if (!text) return flash('fn-text');
  STATE.field_notes.push({ id: nextId(STATE.field_notes), text });
  saveState(); renderFieldNotes(); clear(['fn-text']);
}

function addRecommendation() {
  const type = document.getElementById('rec-type').value;
  const title = v('rec-title'), author = v('rec-author'), note = v('rec-note');
  if (!title) return flash('rec-title');
  STATE.reading.push({ id: nextId(STATE.reading), type, title, author, note });
  saveState(); renderReading(); clear(['rec-title','rec-author','rec-note']);
}

function addPhoto(event) {
  const file = event.target.files[0]; if (!file) return;
  const chapter = document.getElementById('photo-chapter').value;
  const caption = v('photo-caption');
  const reader = new FileReader();
  reader.onload = e => {
    if (!STATE.album.photos[chapter]) STATE.album.photos[chapter] = [];
    STATE.album.photos[chapter].push({ id: Date.now(), chapter, caption, url: e.target.result });
    STATE.album.activeChapter = chapter;
    saveState(); renderAlbumTabs(); renderAlbumGrid();
    clear(['photo-caption']); event.target.value = '';
  };
  reader.readAsDataURL(file);
}

function addChapter() {
  const last = STATE.album.chapters[STATE.album.chapters.length-1];
  const months = parseMonths(last) + 6;
  const label = formatMonths(months);
  if (STATE.album.chapters.includes(label)) return;
  STATE.album.chapters.push(label);
  STATE.album.photos[label] = [];
  saveState(); renderAlbumTabs(); renderAlbumGrid();
}

function delRow(table, id) {
  const map = { timeline:'timeline', poetry:'poetry', letters:'letters', glossary:'glossary', field_notes:'field_notes', reading:'reading' };
  if (map[table]) STATE[table] = STATE[table].filter(r => r.id !== id);
  saveState(); renderAll();
}

function setChapter(c) { STATE.album.activeChapter = c; renderAlbumTabs(); renderAlbumGrid(); }

// ─── UTILS ─────────────────────────────────────────────────────────────────
function v(id) { return (document.getElementById(id)||{}).value?.trim()||''; }
function clear(ids) { ids.forEach(id => { const el=document.getElementById(id); if(el) el.value=''; }); }
function flash(id) {
  const el = document.getElementById(id); if (!el) return;
  el.style.borderColor = 'rgba(180,80,80,0.5)'; el.focus();
  setTimeout(()=>el.style.borderColor='', 1200);
}
function parseMonths(label) {
  if (label.includes('Year')) return parseFloat(label)*12;
  if (label.includes('Month')) return parseInt(label);
  return 0;
}
function formatMonths(m) {
  if (m%12===0) { const y=m/12; return `${y} Year${y!==1?'s':''}`; }
  return `${m} Months`;
}

// ─── EASTER EGG ────────────────────────────────────────────────────────────
let noAttempts = 0;

function showEasterEgg() {
  const el = document.getElementById('easter-egg-overlay');
  el.classList.remove('hidden'); el.classList.add('flex');
  noAttempts = 0;
  const btn = document.getElementById('no-btn');
  btn.style.cssText = 'position:absolute;right:0;top:50%;transform:translateY(-50%)';
  btn.textContent = 'No';
  btn.onmouseenter = runAway;
  btn.ontouchstart = runAway;
  btn.onclick = null;
}

function closeEasterEgg() {
  document.getElementById('easter-egg-overlay').classList.add('hidden');
  document.getElementById('easter-egg-overlay').classList.remove('flex');
}

function runAway(event) {
  const btn = event.currentTarget;
  const arena = document.getElementById('btn-arena');
  const aw = arena.offsetWidth, ah = arena.offsetHeight;
  const bw = btn.offsetWidth, bh = btn.offsetHeight;
  let x, y, tries = 0;
  do { x = Math.random()*(aw-bw); y = Math.random()*(ah-bh); tries++; }
  while(tries<20 && Math.hypot(x-(aw/2-bw/2),y-(ah/2-bh/2))<80);
  btn.style.cssText = `position:absolute;left:${x}px;top:${y}px;transition:all 0.2s cubic-bezier(.34,1.56,.64,1)`;
  if (navigator.vibrate) navigator.vibrate([15,15,15]);
  noAttempts++;
  if (noAttempts >= 5) {
    setTimeout(() => {
      btn.textContent = 'Fine. Yes. Obviously.';
      btn.onmouseenter = null; btn.ontouchstart = null;
      btn.onclick = sayYes;
    }, 300);
  }
}

function sayYes() {
  closeEasterEgg();
  const yes = document.getElementById('yes-overlay');
  yes.classList.remove('hidden'); yes.classList.add('flex');
  launchConfetti(document.getElementById('yes-confetti'), 150);
  if (navigator.vibrate) navigator.vibrate([80,40,80,40,160,40,220]);
}

function closeYes() {
  document.getElementById('yes-overlay').classList.add('hidden');
  document.getElementById('yes-overlay').classList.remove('flex');
}

function launchConfetti(container, count) {
  const colors = ['#c8b89a','#e8e2d6','#a09070','#d4c4a0','#ffffff','#8a7f6e','#b8d4c8'];
  for (let i=0;i<count;i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    Object.assign(p.style, {
      left: Math.random()*100+'%', top: '-12px',
      width: (Math.random()*9+4)+'px', height: (Math.random()*9+4)+'px',
      background: colors[Math.floor(Math.random()*colors.length)],
      borderRadius: Math.random()>.5?'50%':'2px',
      animationDuration: (Math.random()*3+2)+'s',
      animationDelay: (Math.random()*2)+'s'
    });
    container.appendChild(p);
    setTimeout(()=>p.remove(), 6000);
  }
}
// ─── SCROLL‑DIRECTION FADE (HEADER & PLAYER) ─────────────────────────────
let lastScroll = 0;
const nav = document.querySelector('.nav-glass');
const player = document.getElementById('music-player');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    // At the very top – always show
    nav.classList.remove('nav-hidden');
    player.classList.remove('player-hidden');
  } else if (currentScroll > lastScroll) {
    // Scrolling down → hide
    nav.classList.add('nav-hidden');
    player.classList.add('player-hidden');
  } else {
    // Scrolling up → show
    nav.classList.remove('nav-hidden');
    player.classList.remove('player-hidden');
  }

  lastScroll = currentScroll;
}, { passive: true });

// ─── SCROLL & SECTION REVEAL ──────────────────────────────────────────────
function initScrollFade() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('section-visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('section').forEach(s => {
    s.classList.add('section-hidden');
    obs.observe(s);
  });
}

// ─── HERO TEXT ANIMATION ──────────────────────────────────────────────────
function initHero() {
  const chars = document.querySelectorAll('.hero-char');
  chars.forEach((c, i) => {
    c.style.animationDelay = (i * 40) + 'ms';
    c.classList.add('char-animate');
  });
}

// ─── INIT ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('unlocked')) {
    document.getElementById('password-gate').style.display = 'none';
    startMusic();
  }
  initScrollFade();
  initHero();
  renderAll();
});
