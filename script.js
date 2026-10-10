(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');

  if (!toggle || !nav) return;
  document.documentElement.classList.add('js-enabled');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Buka menu navigasi');
    nav.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Buka menu navigasi' : 'Tutup menu navigasi');
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });

  // Status operasional berdasarkan waktu lokal Yogyakarta (WIB).
  const statusRoot = document.querySelector('#business-status');
  if (statusRoot) {
    const title = document.querySelector('#status-title');
    const detail = document.querySelector('#status-detail');
    const updateBusinessStatus = () => {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
      }).formatToParts(new Date());
      const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
      const minutesNow = Number(values.hour) * 60 + Number(values.minute);
      const opening = 17 * 60;
      const closing = 24 * 60;
      const isOpen = minutesNow >= opening && minutesNow < closing;

      statusRoot.classList.toggle('is-open', isOpen);
      statusRoot.classList.toggle('is-closed', !isOpen);
      if (isOpen) {
        title.textContent = 'Sedang buka';
        detail.textContent = 'Buka sampai 00.00 WIB';
      } else {
        title.textContent = 'Sedang tutup';
        detail.textContent = 'Buka kembali pukul 17.00 WIB';
      }
    };
    updateBusinessStatus();
    window.setInterval(updateBusinessStatus, 60 * 1000);
  }

  // Filter kategori menu tanpa memuat ulang halaman, termasuk jumlah hasil.
  const menuFilters = document.querySelectorAll('.menu-filter');
  const menuCards = document.querySelectorAll('.menu-card[data-category]');
  const menuResultCount = document.querySelector('#menu-result-count');
  const updateMenuResultCount = (visibleCount, category) => {
    if (!menuResultCount) return;
    if (category === 'semua') {
      menuResultCount.textContent = `Menampilkan semua ${visibleCount} menu`;
    } else {
      const activeLabel = document.querySelector(`.menu-filter[data-filter="${category}"]`);
      const label = activeLabel ? activeLabel.textContent.trim() : 'menu';
      menuResultCount.textContent = `Menampilkan ${visibleCount} menu dalam kategori ${label}`;
    }
  };
  menuFilters.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      let visibleCount = 0;
      menuFilters.forEach((filter) => {
        const active = filter === button;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-pressed', String(active));
      });
      menuCards.forEach((card) => {
        const visible = category === 'semua' || card.dataset.category === category;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      updateMenuResultCount(visibleCount, category);
    });
  });
  updateMenuResultCount(menuCards.length, 'semua');
})();
