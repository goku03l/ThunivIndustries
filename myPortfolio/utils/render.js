/* render.js — reads RESUME config and builds the DOM */

(function () {
  const R = RESUME;

  /* ── Header ───────────────────────────────────────── */
  document.getElementById('h-name').textContent = R.name;
  document.getElementById('h-tagline').textContent = R.tagline;

  const contactEl = document.getElementById('h-contact');
  const contactItems = [
    { icon: '✉', value: R.contact.email },
    { icon: '↗', value: R.contact.github },
    { icon: '◎', value: R.contact.location },
    { icon: '✆', value: R.contact.phone }
  ];
  contactItems.forEach(({ icon, value }) => {
    const div = document.createElement('div');
    div.className = 'contact-item';
    div.innerHTML = `<span>${icon}</span>${value}`;
    contactEl.appendChild(div);
  });

  /* ── About ────────────────────────────────────────── */
  const aboutEl = document.getElementById('s-about');
  R.about.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    aboutEl.appendChild(p);
  });

  /* ── Timeline ─────────────────────────────────────── */
  const timelineEl = document.getElementById('s-timeline');
  R.timeline.forEach(item => {
    timelineEl.innerHTML += `
      <div class="timeline-item">
        <div class="timeline-bar"></div>
        <div class="timeline-content">
          <div class="timeline-period">${item.period}</div>
          <div class="timeline-role">${item.role}</div>
          <div class="timeline-org">${item.org}</div>
        </div>
      </div>`;
  });

  /* ── Builds ───────────────────────────────────────── */
  const buildsEl = document.getElementById('s-builds');
  R.builds.forEach(b => {
    buildsEl.innerHTML += `
      <div class="build-card">
        <div class="build-left">
          <div class="build-title">${b.title}</div>
          <div class="build-subtitle">${b.subtitle}</div>
          <p class="build-story">${b.story}</p>
          <div class="build-company">${b.company}</div>
        </div>
        <div class="build-right">
          <div>
            <div class="build-stat-label">Impact</div>
            <div class="build-stat-value">${b.impact}</div>
          </div>
          <div>
            <div class="build-stat-label">Stack</div>
            <div class="build-stack">${b.stack}</div>
          </div>
          <div>
            <div class="build-stat-label">Role</div>
            <div class="build-role">${b.role}</div>
          </div>
        </div>
      </div>`;
  });

  /* ── Principles ───────────────────────────────────── */
  const principlesEl = document.getElementById('s-principles');
  R.principles.forEach(p => {
    principlesEl.innerHTML += `
      <div class="principle-card">
        <div class="principle-headline">${p.headline}</div>
        <div class="principle-body">${p.body}</div>
      </div>`;
  });

  /* ── Looking for ──────────────────────────────────── */
  const lf = R.looking_for;
  document.getElementById('s-looking').innerHTML = `
    <div class="looking-headline">${lf.headline}</div>
    <div class="looking-body">${lf.body}</div>
    <div class="looking-cta">${lf.cta}</div>`;

  /* ── Footer ───────────────────────────────────────── */
  const c = R.contact;
  document.getElementById('f-contact').textContent =
    `${c.email}   ·   ${c.phone}   ·   ${c.github}   ·   ${c.location}`;
})();
