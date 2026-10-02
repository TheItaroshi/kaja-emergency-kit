const kit = window.KIT;
const escapeText = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const e = escapeText;
const noteMarkup = () => `<article class="handwritten-note"><p class="note-greeting">${e(kit.note.greeting)}</p>${kit.note.paragraphs.map(text => `<p>${e(text)}</p>`).join('')}<p class="note-signature">${e(kit.note.signature)}</p></article>`;
const root = document.querySelector('#experience');
root.innerHTML = `<section class="panel intro active" id="intro" aria-labelledby="intro-title">
  <div class="section-inner"><div class="eyebrow"><span class="cross">✳</span>${e(kit.intro.eyebrow)}</div>
  <div class="intro-heading"><h1 id="intro-title">${kit.intro.titleLines.map((line, i) => i === kit.intro.titleLines.length - 1 ? `<span>${e(line)}</span>` : e(line)).join('<br>')}</h1><div class="seal"><span>${e(kit.intro.seal)}</span><b aria-hidden="true">✳</b><span>${e(kit.ui.seal)}</span></div></div>
  <p class="intro-copy">${e(kit.intro.subtitle)}</p><div class="activation"><span class="cut-line">${e(kit.ui.activate)}</span><button class="primary" id="activate">${e(kit.intro.button)}<span aria-hidden="true">↗</span></button><p>${e(kit.intro.scroll)}</p></div>
  <div class="section-footer"><span>${e(kit.intro.footnote)}</span><span>${e(kit.ui.madeFor)}</span></div></div></section>
${kit.levels.map((level, i) => `<section class="panel ${e(level.theme)}" id="level-${i + 1}" aria-labelledby="title-${i + 1}"><div class="section-inner">
  <div class="protocol-top"><span>${e(kit.ui.protocol)} / ${e(level.number)}</span><span class="severity">${e(level.severity)}</span></div>
  <div class="level-heading"><span class="level-number" aria-hidden="true">${e(level.number)}</span><div><p class="eyebrow">${e(kit.ui.openIf)}</p><h2 id="title-${i + 1}">${e(level.title)}</h2></div></div>
  <p class="level-label">${e(level.label)}</p>
  <article class="prescription"><p class="micro">${e(level.treatmentLabel)}</p><h3>${e(level.treatment)}</h3><div class="dosage"><p class="micro">${e(level.dosageLabel)}</p><p>${e(level.dosage)}</p></div><p class="instruction">${e(level.instruction)}</p></article>
  <p class="step"><span aria-hidden="true">↳</span>${e(level.step)}</p><a class="next" href="#${i === 3 ? 'support' : `level-${i + 2}`}">${e(level.next)}<span aria-hidden="true">↓</span></a>
  </div></section>`).join('')}
<section class="panel support" id="support" aria-labelledby="support-title"><div class="section-inner"><p class="eyebrow">${e(kit.final.eyebrow)}</p><h2 id="support-title">${e(kit.final.title)}<br><span>${e(kit.final.emphasis)}</span></h2><p class="support-note">${e(kit.final.note).replace('\n', '<br>')}</p><div class="contact-card"><span class="micro">${e(kit.final.button)}</span><a id="contact"></a><span id="contact-note" class="micro"></span></div><p class="badge">${e(kit.final.badge)}</p><a class="note-next" href="#notes">${e(kit.final.next)}</a><a class="restart" href="#intro">↶ ${e(kit.final.restart)}</a><div class="section-footer">${e(kit.final.signoff)}</div></div></section>
<section class="panel notes" id="notes" aria-labelledby="notes-title"><div class="section-inner"><p class="eyebrow">${e(kit.note.eyebrow)}</p><h2 id="notes-title">${e(kit.note.title)}</h2><button class="primary open-note" aria-haspopup="dialog" aria-controls="note-dialog">Otwórz liścik <span aria-hidden="true">↗</span></button><p class="note-footer">${e(kit.note.footer)}</p><a class="restart" href="#intro">↶ ${e(kit.final.restart)}</a></div></section>`;
const noteButton = document.createElement('button');
noteButton.className = 'note-toggle';
noteButton.innerHTML = `<span aria-hidden="true">✎</span> ${e(kit.note.button)}`;
noteButton.setAttribute('aria-haspopup', 'dialog');
noteButton.setAttribute('aria-controls', 'note-dialog');
document.querySelector('.masthead').append(noteButton);
const noteDialog = document.createElement('dialog');
noteDialog.id = 'note-dialog';
noteDialog.setAttribute('aria-labelledby', 'dialog-title');
noteDialog.innerHTML = `<div class="dialog-top"><h2 id="dialog-title">${e(kit.note.title)}</h2><button class="note-close" aria-label="${e(kit.note.close)}" autofocus>×</button></div>${noteMarkup()}`;
document.body.append(noteDialog);
let noteOpener = noteButton;
for (const button of [noteButton, ...document.querySelectorAll('.open-note')]) {
  button.addEventListener('click', () => { noteOpener = button; noteDialog.showModal(); });
}
noteDialog.querySelector('.note-close').addEventListener('click', () => noteDialog.close());
noteDialog.addEventListener('click', event => { if (event.target !== noteDialog) return; const box = noteDialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) noteDialog.close(); });
noteDialog.addEventListener('close', () => noteOpener.focus({ preventScroll: true }));
document.title = kit.intro.title;
const contact = document.querySelector('#contact');
const phone = kit.contact.phone.trim();
if (/^\+?[\d ()-]{7,}$/.test(phone)) {
  contact.href = `${kit.contact.method === 'sms' ? 'sms' : 'tel'}:${phone.replace(/[^+\d]/g, '')}`;
  contact.textContent = kit.contact.display || phone;
} else {
  contact.textContent = kit.final.placeholder;
  contact.removeAttribute('href');
  document.querySelector('#contact-note').textContent = kit.final.placeholderNote;
}
let noticeTimer;
function notify(message) { const notice = document.querySelector('#notice'); notice.textContent = message; notice.classList.add('show'); clearTimeout(noticeTimer); noticeTimer = setTimeout(() => notice.classList.remove('show'), 5500); }
let musicOn = false;
const musicButton = document.querySelector('#music');
const music = createMusic(kit.music, notify, on => { musicOn = on; musicButton.setAttribute('aria-pressed', String(on)); musicButton.setAttribute('aria-label', on ? kit.ui.musicOn : kit.ui.musicOff); document.querySelector('#music-label').textContent = on ? kit.music.onLabel : kit.music.offLabel; });
if (kit.music.mode === 'external') { document.querySelector('#music-label').textContent = kit.music.externalLabel; musicButton.setAttribute('aria-label', kit.ui.musicExternal); }
musicButton.addEventListener('click', () => musicOn ? music.stop() : music.start());
// Cards are discrete screens. No nested card scrolling competes with a swipe.
const sections = [...document.querySelectorAll('.panel')];
let currentIndex = 0;
function goTo(id, focus = false) {
  const index = sections.findIndex(section => section.id === id);
  if (index < 0) return;
  const changed = currentIndex !== index;
  currentIndex = index;
  sections.forEach((section, i) => {
    section.hidden = i !== index;
    section.classList.toggle('active', i === index);
  });
  document.body.dataset.section = id;
  if (changed) sections[index].scrollTop = 0;
  requestAnimationFrame(checkCardFit);
  const heading = sections[index].querySelector('h1,h2');
  if (focus) {
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}
function moveCard(direction) {
  const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction));
  if (nextIndex !== currentIndex) goTo(sections[nextIndex].id, true);
}
function checkCardFit() {
  const section = sections[currentIndex];
  const style = getComputedStyle(section);
  const room = section.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
  const needsScroll = section.querySelector('.section-inner').offsetHeight > room + 2;
  section.classList.toggle('needs-scroll', needsScroll);
  root.classList.toggle('allow-scroll', needsScroll);
}
const fitObserver = new ResizeObserver(checkCardFit);
fitObserver.observe(root);
sections.forEach(section => fitObserver.observe(section.querySelector('.section-inner')));
document.fonts.ready.then(checkCardFit);
goTo(sections.some(section => section.id === location.hash.slice(1)) ? location.hash.slice(1) : 'intro');
document.querySelector('#activate').addEventListener('click', () => { music.start(); goTo('level-1', true); });
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  event.preventDefault();
  goTo(link.getAttribute('href').slice(1), true);
});
window.addEventListener('hashchange', () => goTo(location.hash.slice(1) || 'intro', true));
let gesture = null;
root.addEventListener('touchstart', event => {
  gesture = !root.classList.contains('allow-scroll') && event.touches.length === 1 ? {
    x: event.touches[0].clientX, y: event.touches[0].clientY,
    index: currentIndex
  } : null;
}, { passive: true });
root.addEventListener('touchmove', event => {
  if (event.touches.length !== 1) { gesture = null; return; }
  if (!gesture) return;
  const dx = event.touches[0].clientX - gesture.x;
  const dy = event.touches[0].clientY - gesture.y;
  if (Math.abs(dy) > Math.abs(dx) && event.cancelable) event.preventDefault();
}, { passive: false });
root.addEventListener('touchend', event => {
  const start = gesture;
  gesture = null;
  if (!start || event.touches.length || !event.changedTouches.length || start.index !== currentIndex) return;
  const dx = event.changedTouches[0].clientX - start.x;
  const dy = event.changedTouches[0].clientY - start.y;
  if (Math.abs(dy) >= 45 && Math.abs(dy) > Math.abs(dx) * 1.2) {
    if (event.cancelable) event.preventDefault();
    moveCard(dy < 0 ? 1 : -1);
  }
}, { passive: false });
root.addEventListener('touchcancel', () => { gesture = null; }, { passive: true });
// Consume trackpad inertia until the wheel gesture has ended.
let wheelTotal = 0;
let wheelUsed = false;
let wheelTimer;
root.addEventListener('wheel', event => {
  if (root.classList.contains('allow-scroll') || event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
  event.preventDefault();
  clearTimeout(wheelTimer);
  wheelTimer = setTimeout(() => { wheelTotal = 0; wheelUsed = false; }, 200);
  if (wheelUsed) return;
  wheelTotal += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? root.clientHeight : 1);
  if (Math.abs(wheelTotal) >= 45) { wheelUsed = true; moveCard(wheelTotal > 0 ? 1 : -1); }
}, { passive: false });
document.addEventListener('keydown', event => {
  if (noteDialog.open || event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input,textarea,select,[contenteditable]')) return;
  if (['ArrowDown', 'PageDown', 'ArrowUp', 'PageUp', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    if (event.repeat) return;
    if (event.key === 'Home') goTo(sections[0].id, true);
    else if (event.key === 'End') goTo(sections[sections.length - 1].id, true);
    else moveCard(['ArrowDown', 'PageDown'].includes(event.key) ? 1 : -1);
  }
});
