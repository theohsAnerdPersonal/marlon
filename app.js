// ─── LOCAL STORAGE KEY ──────────────────────────────────────────────────────
const STORAGE_KEY = 'marlon_archive';

// ─── DEFAULT SEED DATA ───────────────────────────────────────────────────────
const DEFAULT_DATA = {
  timeline: [
    { id: 1, date: 'The beginning', title: 'Day One', note: 'Before either of us knew what this would become.' }
  ],
  poetry: [
    {
      id: 1,
      title: 'Notes on Staying',
      body: 'I keep finding you\nin the pauses between things —\nthe quiet after laughter,\nthe moment before sleep.\n\nYou are the most comfortable\nsilence I have ever been in.',
      date: '2024'
    }
  ],
  letters: [
    {
      id: 1,
      date: 'Some Tuesday',
      body: 'Dear Poppi,\n\nI am writing this because I could not say it aloud without laughing nervously. You are a strange and wonderful person. I am very glad you exist.\n\nWith love and mild terror,\nTheo'
    }
  ],
  glossary: [
    {
      id: 1,
      term: 'Onalethata',
      pos: 'n., proper',
      def: 'The one who is truth. Also: the person who will steal your blanket at 3am and have no remorse about it.'
    },
    {
      id: 2,
      term: 'Poppi',
      pos: 'n., term of address',
      def: 'The warmest word in the room. Reserved for him exclusively.'
    },
    {
      id: 3,
      term: 'The Look',
      pos: 'n.',
      def: "The expression Marlon makes when he already knows you're wrong but is waiting for you to figure it out yourself."
    }
  ],
  field_notes: [
    { id: 1, text: 'Subject displays remarkable capacity for patience. Further study required to determine if this is genuine or strategic.' },
    { id: 2, text: "Subject has been observed laughing at his own jokes before delivering the punchline. Endearing. Statistically unusual." },
    { id: 3, text: "Subject's presence makes ordinary rooms feel significantly more livable." }
  ],
  reading: [
    { id: 1, type: 'Book', title: "Giovanni's Room", author: 'James Baldwin', note: 'Because you would have loved this in your English seminar.' },
    { id: 2, type: 'Film', title: 'Call Me By Your Name', author: 'Luca Guadagnino', note: 'For the aesthetics. For the ache.' },
    { id: 3, type: 'Music', title: 'Blonde', author: 'Frank Ocean', note: 'Listen to it at night.' }
  ],
  photos: []
};

// ─── LOAD / SAVE STATE ──────────────────────────────────────────────────────
function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return { ...DEFAULT_DATA };
    }
  }
  return { ...DEFAULT_DATA };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE));
}

// ─── GLOBAL STATE ────────────────────────────────────────────────────────────
const STATE = loadState();

// ─── PASSWORD ─────────────────────────────────────────────────────────────────
function checkPassword() {
  const val = document.getElementById('pw-input').value.trim().toLowerCase();
  if (val === 'chai latte') {
    const gate = document.getElementById('password-gate');
    gate.style.opacity = '0';
    gate.style.transition = 'opacity 0.8s ease';
    setTimeout(() => { gate.style.display = 'none'; startMusic(); }, 800);
    sessionStorage.setItem('unlocked', '1');
  } else {
    const err = document.getElementById('pw-error');
    err.style.opacity = '1';
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').focus();
    setTimeout(() => err.style.opacity = '0', 2500);
  }
}


function initScrollFade() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        e.target.classList.add('visible');   // <-- new line
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('section').forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(18px)';
    s.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
    obs.observe(s);
  });
}

// ─── MUSIC ────────────────────────────────────────────────────────────────────
const audio = document.getElementById('audio-player');
audio.volume = 0.4;

function startMusic() {
  audio.play().catch(() => {});
  updatePlayIcon(true);
}

function togglePlay() {
  if (audio.paused) { audio.play(); updatePlayIcon(true); }
  else { audio.pause(); updatePlayIcon(false); }
}
function setVolume(v) { audio.volume = v; }
function updatePlayIcon(playing) {
  document.getElementById('play-icon').classList.toggle('hidden', playing);
  document.getElementById('pause-icon').classList.toggle('hidden', !playing);
}

// ─── MOBILE NAV ───────────────────────────────────────────────────────────────
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  nav.classList.toggle('hidden');
  nav.classList.toggle('flex');
}

// ─── ID GENERATOR ────────────────────────────────────────────────────────────
function nextId(arr) {
  return arr.length ? Math.max(...arr.map(item => item.id)) + 1 : 1;
}

// ─── RENDER FUNCTIONS ────────────────────────────────────────────────────────
function renderTimeline() {
  document.getElementById('timeline-list').innerHTML = STATE.timeline.map(e => `
    <div class="timeline-entry">
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-xs font-inter tracking-widest uppercase text-[#5a5245] mb-1">${e.date}</p>
          <h3 class="font-garamond text-xl text-[#e8e2d6]">${e.title}</h3>
          ${e.note ? `<p class="font-cormorant italic text-[#8a7f6e] text-base mt-1 leading-relaxed">${e.note}</p>` : ''}
        </div>
        <button class="delete-btn flex-shrink-0" onclick="delRow('timeline',${e.id})">✕</button>
      </div>
    </div>`).join('');
}

function renderPoetry() {
  document.getElementById('poetry-list').innerHTML = STATE.poetry.map(p => `
    <div class="poem-card relative">
      <button class="delete-btn absolute top-0 right-0" onclick="delRow('poetry',${p.id})">✕</button>
      <p class="text-xs font-inter tracking-widest uppercase text-[#5a5245] mb-3">${p.date||''}</p>
      <h3 class="font-garamond text-2xl text-[#e8e2d6] mb-6">${p.title}</h3>
      <pre class="font-cormorant italic text-[#c8b89a] text-xl leading-relaxed whitespace-pre-wrap">${p.body}</pre>
    </div>`).join('');
}

function renderLetters() {
  document.getElementById('letters-list').innerHTML = STATE.letters.map(l => `
    <div class="letter-card relative">
      <button class="delete-btn absolute top-3 right-3" onclick="delRow('letters',${l.id})">✕</button>
      <p class="text-xs font-inter tracking-widest uppercase text-[#5a5245] mb-6">${l.date}</p>
      <pre class="font-cormorant text-lg text-[#c8b89a] leading-relaxed whitespace-pre-wrap">${l.body}</pre>
    </div>`).join('');
}

function renderGlossary() {
  document.getElementById('glossary-list').innerHTML = STATE.glossary.map(g => `
    <div class="gloss-entry relative">
      <button class="delete-btn absolute top-0 right-0" onclick="delRow('glossary',${g.id})">✕</button>
      <span class="gloss-term">${g.term}</span><span class="gloss-pos">${g.pos}</span>
      <p class="gloss-def">${g.def}</p>
    </div>`).join('');
}

function renderFieldNotes() {
  document.getElementById('field-notes-list').innerHTML = STATE.field_notes.map(n => `
    <div class="field-note relative pr-8">
      ${n.text}
      <button class="delete-btn absolute top-1 right-0" onclick="delRow('field_notes',${n.id})">✕</button>
    </div>`).join('');
}

function renderReading() {
  document.getElementById('reading-list').innerHTML = STATE.reading.map(r => `
    <div class="rec-item relative">
      <span class="rec-type-badge">${r.type}</span>
      <div class="flex-1 min-w-0">
        <p class="font-garamond text-lg text-[#e8e2d6]">${r.title}</p>
        <p class="font-inter text-xs text-[#5a5245] mt-0.5">${r.author||''}</p>
        ${r.note ? `<p class="font-cormorant italic text-[#8a7f6e] text-sm mt-1">${r.note}</p>` : ''}
      </div>
      <button class="delete-btn self-center" onclick="delRow('reading',${r.id})">✕</button>
    </div>`).join('');
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
    grid.innerHTML = `<div class="col-span-2 md:col-span-3 py-16 text-center font-cormorant italic text-[#3a3530] text-lg">No photographs yet. Add the first memory.</div>`;
    return;
  }
  grid.innerHTML = photos.map(p => `
    <div class="photo-card">
      <img src="${p.url}" alt="${p.caption||''}">
      ${p.caption ? `<div class="photo-caption">${p.caption}</div>` : ''}
    </div>`).join('');
}

function renderAll() {
  renderTimeline(); renderPoetry(); renderLetters(); renderGlossary();
  renderFieldNotes(); renderReading(); renderAlbumTabs(); renderAlbumGrid();
}

// ─── ALBUM STATE INIT ────────────────────────────────────────────────────────
if (!STATE.album) {
  STATE.album = {
    chapters: ['1 Month', '6 Months', '1 Year', '1.5 Years'],
    photos: {},
    activeChapter: '1 Month'
  };
  STATE.album.chapters.forEach(c => { STATE.album.photos[c] = []; });
} else {
  STATE.album.photos = STATE.album.photos || {};
  STATE.album.chapters.forEach(c => {
    if (!STATE.album.photos[c]) STATE.album.photos[c] = [];
  });
}

// ─── ADD HANDLERS ─────────────────────────────────────────────────────────────
function addTimelineEntry() {
  const date = v('tl-date'), title = v('tl-title'), note = v('tl-note');
  if (!date||!title) return flash('tl-title');
  const entry = { id: nextId(STATE.timeline), date, title, note };
  STATE.timeline.push(entry);
  saveState();
  renderTimeline();
  clear(['tl-date','tl-title','tl-note']);
}

function addPoem() {
  const title = v('poem-title'), body = v('poem-body'), date = v('poem-date')||new Date().getFullYear()+'';
  if (!title||!body) return flash('poem-body');
  const entry = { id: nextId(STATE.poetry), title, body, date };
  STATE.poetry.push(entry);
  saveState();
  renderPoetry();
  clear(['poem-title','poem-body','poem-date']);
}

function addLetter() {
  const date = v('letter-date')||'Undated', body = v('letter-body');
  if (!body) return flash('letter-body');
  const entry = { id: nextId(STATE.letters), date, body };
  STATE.letters.push(entry);
  saveState();
  renderLetters();
  clear(['letter-date','letter-body']);
}

function addGlossary() {
  const term = v('gloss-term'), pos = v('gloss-pos')||'n.', def = v('gloss-def');
  if (!term||!def) return flash('gloss-def');
  const entry = { id: nextId(STATE.glossary), term, pos, def };
  STATE.glossary.push(entry);
  saveState();
  renderGlossary();
  clear(['gloss-term','gloss-pos','gloss-def']);
}

function addFieldNote() {
  const text = v('fn-text');
  if (!text) return flash('fn-text');
  const entry = { id: nextId(STATE.field_notes), text };
  STATE.field_notes.push(entry);
  saveState();
  renderFieldNotes();
  clear(['fn-text']);
}

function addRecommendation() {
  const type = document.getElementById('rec-type').value;
  const title = v('rec-title'), author = v('rec-author'), note = v('rec-note');
  if (!title) return flash('rec-title');
  const entry = { id: nextId(STATE.reading), type, title, author, note };
  STATE.reading.push(entry);
  saveState();
  renderReading();
  clear(['rec-title','rec-author','rec-note']);
}

function addPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;
  const chapter = document.getElementById('photo-chapter').value;
  const caption = v('photo-caption');

  const reader = new FileReader();
  reader.onload = function(e) {
    const url = e.target.result;
    const entry = { id: nextId(STATE.album.photos[chapter] || []), chapter, caption, url };
    if (!STATE.album.photos[chapter]) STATE.album.photos[chapter] = [];
    STATE.album.photos[chapter].push(entry);
    STATE.album.activeChapter = chapter;
    saveState();
    renderAlbumTabs();
    renderAlbumGrid();
    clear(['photo-caption']);
    event.target.value = '';
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
  saveState();
  renderAlbumTabs();
  renderAlbumGrid();
}

function delRow(table, id) {
  if (table === 'timeline') {
    STATE.timeline = STATE.timeline.filter(r => r.id !== id);
  } else if (table === 'poetry') {
    STATE.poetry = STATE.poetry.filter(r => r.id !== id);
  } else if (table === 'letters') {
    STATE.letters = STATE.letters.filter(r => r.id !== id);
  } else if (table === 'glossary') {
    STATE.glossary = STATE.glossary.filter(r => r.id !== id);
  } else if (table === 'field_notes') {
    STATE.field_notes = STATE.field_notes.filter(r => r.id !== id);
  } else if (table === 'reading') {
    STATE.reading = STATE.reading.filter(r => r.id !== id);
  } else if (table === 'photos') {
    for (const chapter of STATE.album.chapters) {
      const arr = STATE.album.photos[chapter];
      if (arr) {
        const idx = arr.findIndex(p => p.id === id);
        if (idx !== -1) {
          arr.splice(idx, 1);
          break;
        }
      }
    }
  }
  saveState();
  renderAll();
}

function setChapter(c) {
  STATE.album.activeChapter = c;
  renderAlbumTabs();
  renderAlbumGrid();
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function v(id) { return (document.getElementById(id)||{}).value?.trim()||''; }
function clear(ids) { ids.forEach(id => { const el=document.getElementById(id); if(el) el.value=''; }); }
function flash(id) {
  const el = document.getElementById(id); if (!el) return;
  el.style.borderColor = 'rgba(180,80,80,0.5)'; el.focus();
  setTimeout(()=>el.style.borderColor='', 1200);
}
function parseMonths(label) {
  if (label.includes('Year')) { const n = parseFloat(label); return n*12; }
  if (label.includes('Month')) return parseInt(label);
  return 0;
}
function formatMonths(m) {
  if (m%12===0) { const y=m/12; return `${y} Year${y!==1?'s':''}`; }
  return `${m} Months`;
}

// ─── EASTER EGG ───────────────────────────────────────────────────────────────
let noClickAttempts = 0;                     // track how many times No ran away
const MAX_ATTEMPTS = 5;                     // after this, No gives up

function showEasterEgg() {
  const el = document.getElementById('easter-egg-overlay');
  el.classList.remove('hidden');
  el.classList.add('flex');

  // Reset the No button to its original look and behaviour
  const noBtn = document.getElementById('no-btn');
  noBtn.style.transition = '';               // remove any leftover transition
  noBtn.style.position = 'absolute';
  noBtn.style.right = '0';
  noBtn.style.top = '50%';
  noBtn.style.left = 'auto';
  noBtn.style.transform = 'translateY(-50%)';
  noBtn.textContent = 'No';
  noBtn.onclick = null;                     // will be overridden by onmouseenter/runAway

  // Reset attempts
  noClickAttempts = 0;

  // Re-attach the run-away listeners
  noBtn.onmouseenter = runAway;
  noBtn.ontouchstart = runAway;
}

function closeEasterEgg() {
  const el = document.getElementById('easter-egg-overlay');
  el.classList.add('hidden');
  el.classList.remove('flex');
}

function runAway(event) {
  const btn = event.currentTarget || event.target;
  const arena = document.getElementById('btn-arena');
  const ar = arena.getBoundingClientRect();
  const bw = btn.offsetWidth;
  const bh = btn.offsetHeight;
  const maxX = ar.width - bw - 8;
  const maxY = ar.height - bh;

  // Random new position (avoid the center area)
  let x, y, attempts = 0;
  do {
    x = Math.random() * maxX;
    y = Math.random() * maxY;
    attempts++;
  } while (attempts < 15 && Math.hypot(x - (ar.width/2 - bw/2), y - (ar.height/2 - bh/2)) < 60);

  // Smooth transition
  btn.style.transition = 'all 0.25s ease';
  btn.style.position = 'absolute';
  btn.style.left = x + 'px';
  btn.style.top = y + 'px';
  btn.style.right = 'auto';
  btn.style.transform = 'none';

  // Vibrate a little for the fun
  if (navigator.vibrate) navigator.vibrate([20, 20, 20]);

  // Increment and check if No should give up
  noClickAttempts++;
  if (noClickAttempts >= MAX_ATTEMPTS) {
    // Transform the button into a playful "Yes"
    setTimeout(() => {
      btn.textContent = 'Fine… Yes 😏';
      // Remove run-away listeners so it can be clicked
      btn.onmouseenter = null;
      btn.ontouchstart = null;
      // New click handler for the joke
      btn.onclick = sayYesJoke;
    }, 300); // small delay so the user sees the final movement
  }
}

function sayYesJoke() {
  closeEasterEgg();

  // Customise the Yes overlay for the joke
  const yesOverlay = document.getElementById('yes-overlay');
  yesOverlay.querySelector('p').textContent = 'sike!';
  yesOverlay.querySelector('h2').textContent = 'you already my boyfriend haha';
  yesOverlay.querySelector('p:last-of-type').textContent = '— Nice try.';

  yesOverlay.classList.remove('hidden');
  yesOverlay.classList.add('flex');

  // Confetti and vibration
  launchConfetti(document.getElementById('yes-confetti'), 140);
  if (navigator.vibrate) navigator.vibrate([80, 40, 80, 40, 160, 40, 200]);

  // Reset the overlay content back to the original for next time
  setTimeout(() => {
    yesOverlay.querySelector('p').textContent = 'Obviously.';
    yesOverlay.querySelector('h2').textContent = 'Obviously you are already MINE.';
    yesOverlay.querySelector('p:last-of-type').textContent = '— theoh, Masoko.';
  }, 4000);
}

function sayYes() {
  closeEasterEgg();
  const yes = document.getElementById('yes-overlay');
  // Keep the original "Obviously." message
  yes.querySelector('p').textContent = 'Obviously.';
  yes.querySelector('h2').textContent = 'Obviously you are already MINE.';
  yes.querySelector('p:last-of-type').textContent = '— theoh, Masoko.';

  yes.classList.remove('hidden');
  yes.classList.add('flex');
  launchConfetti(document.getElementById('yes-confetti'), 140);
  if (navigator.vibrate) navigator.vibrate([80, 40, 80, 40, 160, 40, 200]);
}

function closeYes() {
  const yes = document.getElementById('yes-overlay');
  yes.classList.add('hidden');
  yes.classList.remove('flex');
}

function launchConfetti(container, count) {
  const colors = ['#c8b89a','#e8e2d6','#a09070','#d4c4a0','#ffffff','#8a7f6e'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = '-10px';
    p.style.width = (Math.random() * 8 + 4) + 'px';
    p.style.height = (Math.random() * 8 + 4) + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    p.style.animationDuration = (Math.random() * 2.5 + 2) + 's';
    p.style.animationDelay = (Math.random() * 1.5) + 's';
    container.appendChild(p);
    setTimeout(() => p.remove(), 5500);
  }
}

// ─── SCROLL FADE ─────────────────────────────────────────────────────────────
function initScrollFade() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('section').forEach(s => {
    s.style.opacity = '0'; s.style.transform = 'translateY(18px)';
    s.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
    obs.observe(s);
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('unlocked')) {
    document.getElementById('password-gate').style.display = 'none';
    startMusic();
  }
  initScrollFade();
  renderAll();
});