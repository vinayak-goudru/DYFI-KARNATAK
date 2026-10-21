/**
 * DYFI Karnataka - Central Admin Management Suite Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const loginOverlay = document.getElementById('loginOverlay');
  const adminLoginForm = document.getElementById('adminLoginForm');
  const adminUser = document.getElementById('adminUser');
  const adminPass = document.getElementById('adminPass');
  const btnQuickDemo = document.getElementById('btnQuickDemo');
  const btnLogout = document.getElementById('btnLogout');
  const sidebarNav = document.querySelectorAll('.nav-item');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const topbarTitle = document.getElementById('topbarTitle');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const adminSidebar = document.getElementById('adminSidebar');
  const modalOverlay = document.getElementById('adminModalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const toastContainer = document.getElementById('adminToastContainer');

  // Check Auth
  const isAuth = sessionStorage.getItem('dyfi_admin_authenticated') === 'true';
  if (isAuth) {
    loginOverlay.classList.remove('active');
  } else {
    loginOverlay.classList.add('active');
  }

  // Quick Demo Login
  btnQuickDemo.addEventListener('click', () => {
    adminUser.value = 'admin';
    adminPass.value = 'dyfi@karnataka2026';
    adminLoginForm.dispatchEvent(new Event('submit'));
  });

  // Login Form Submission
  adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = adminUser.value.trim();
    const pass = adminPass.value.trim();

    if (user === 'admin' && (pass === 'dyfi@karnataka2026' || pass === 'admin123' || pass === 'admin')) {
      sessionStorage.setItem('dyfi_admin_authenticated', 'true');
      loginOverlay.classList.remove('active');
      showToast('Welcome to DYFI Karnataka Central Admin Suite!');
      renderAll();
    } else {
      alert('Invalid admin credentials! Please use username: admin and password: dyfi@karnataka2026');
    }
  });

  // Logout
  btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('dyfi_admin_authenticated');
    loginOverlay.classList.add('active');
  });

  // Mobile nav toggle
  mobileNavToggle.addEventListener('click', () => {
    adminSidebar.classList.toggle('open');
  });

  // Tab switching
  function switchTab(tabId, triggerAdd = false) {
    sidebarNav.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === 'pane-' + tabId);
    });

    const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    if (activeNav) {
      topbarTitle.innerText = activeNav.querySelector('span:last-child').innerText;
    }
    adminSidebar.classList.remove('open');

    if (triggerAdd) {
      setTimeout(() => {
        if (tabId === 'news') document.getElementById('btnOpenAddNews').click();
        if (tabId === 'statements') document.getElementById('btnOpenAddStatement').click();
        if (tabId === 'campaigns') document.getElementById('btnOpenAddCampaign').click();
        if (tabId === 'martyrs') document.getElementById('btnOpenAddMartyr').click();
      }, 100);
    }
  }

  sidebarNav.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  window.adminApp = { switchTab };

  // Toast Helper
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.innerText = msg;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Modal helpers
  function openModal(title, htmlContent) {
    modalTitle.innerText = title;
    modalBody.innerHTML = htmlContent;
    modalOverlay.classList.add('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalBody.innerHTML = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // ================= RENDER ENGINES =================

  function renderDashboard() {
    const news = DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [];
    const campaigns = DyfiDataStore.get(DYFI_DATA_KEYS.CAMPAIGNS) || [];
    const statements = DyfiDataStore.get(DYFI_DATA_KEYS.STATEMENTS) || [];
    const martyrs = DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [];
    const donors = DyfiDataStore.get(DYFI_DATA_KEYS.BLOOD_DONORS) || [];
    const messages = DyfiDataStore.get(DYFI_DATA_KEYS.MESSAGES) || [];
    const ticker = DyfiDataStore.get(DYFI_DATA_KEYS.TICKER) || [];

    document.getElementById('statNews').innerText = news.length;
    document.getElementById('statCampaigns').innerText = campaigns.length;
    document.getElementById('statStatements').innerText = statements.length;
    document.getElementById('statMartyrs').innerText = martyrs.length;
    document.getElementById('statDonors').innerText = donors.length;
    document.getElementById('statMessages').innerText = messages.length;
    document.getElementById('badgeMsgCount').innerText = messages.filter(m => m.status === 'Unread').length;

    const dashTickerList = document.getElementById('dashTickerList');
    dashTickerList.innerHTML = ticker.map(t => `
      <li class="ticker-preview-item">
        <strong>[EN]</strong> ${t.text_en}<br>
        <span style="color:#ef4444;"><strong>[KN]</strong> ${t.text_kn}</span>
      </li>
    `).join('');
  }

  function renderTicker() {
    const ticker = DyfiDataStore.get(DYFI_DATA_KEYS.TICKER) || [];
    const tbody = document.getElementById('tickerTableBody');
    tbody.innerHTML = ticker.map((t, idx) => `
      <tr>
        <td>${t.text_en}</td>
        <td>${t.text_kn}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteTicker(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteTicker = function(index) {
    if (confirm('Delete this ticker headline?')) {
      const ticker = DyfiDataStore.get(DYFI_DATA_KEYS.TICKER) || [];
      ticker.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.TICKER, ticker);
      renderTicker();
      renderDashboard();
      showToast('Ticker headline removed');
    }
  };

  document.getElementById('btnOpenAddTicker').addEventListener('click', () => {
    openModal('Add Running Ticker Headline', `
      <form id="modalFormTicker">
        <div class="form-group">
          <label class="form-label">Headline Text (English)</label>
          <textarea id="inpTickerEn" class="form-control" rows="2" required placeholder="Statewide youth rally..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Headline Text (ಕನ್ನಡ)</label>
          <textarea id="inpTickerKn" class="form-control" rows="2" required placeholder="ರಾಜ್ಯಮಟ್ಟದ ಯುವಜನ ಜಾಥಾ..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Add to Live Ticker</button>
      </form>
    `);

    document.getElementById('modalFormTicker').onsubmit = (e) => {
      e.preventDefault();
      const ticker = DyfiDataStore.get(DYFI_DATA_KEYS.TICKER) || [];
      ticker.push({
        id: 't_' + Date.now(),
        text_en: document.getElementById('inpTickerEn').value.trim(),
        text_kn: document.getElementById('inpTickerKn').value.trim(),
        active: true
      });
      DyfiDataStore.set(DYFI_DATA_KEYS.TICKER, ticker);
      closeModal();
      renderTicker();
      renderDashboard();
      showToast('Ticker updated successfully');
    };
  });

  // Site Content
  function renderSiteContent() {
    const sc = DyfiDataStore.get(DYFI_DATA_KEYS.SITE_CONTENT) || {};
    document.getElementById('scHeroTitleEn').value = sc.heroTitle_en || '';
    document.getElementById('scHeroTitleKn').value = sc.heroTitle_kn || '';
    document.getElementById('scHeroSubEn').value = sc.heroSub_en || '';
    document.getElementById('scHeroSubKn').value = sc.heroSub_kn || '';
    document.getElementById('scQuoteEn').value = sc.quoteText_en || '';
    document.getElementById('scQuoteKn').value = sc.quoteText_kn || '';
    document.getElementById('scAddressEn').value = sc.officeAddress_en || '';
    document.getElementById('scAddressKn').value = sc.officeAddress_kn || '';
    document.getElementById('scPhone1').value = sc.phone1 || '';
    document.getElementById('scPhone2').value = sc.phone2 || '';
    document.getElementById('scEmail').value = sc.email || '';
    document.getElementById('scSocialFb').value = sc.socialFb || '';
    document.getElementById('scSocialInsta').value = sc.socialInsta || '';
    document.getElementById('scSocialYt').value = sc.socialYt || '';
    document.getElementById('scSocialX').value = sc.socialX || '';
  }

  document.getElementById('formSiteContent').addEventListener('submit', (e) => {
    e.preventDefault();
    const sc = {
      heroTitle_en: document.getElementById('scHeroTitleEn').value.trim(),
      heroTitle_kn: document.getElementById('scHeroTitleKn').value.trim(),
      heroSub_en: document.getElementById('scHeroSubEn').value.trim(),
      heroSub_kn: document.getElementById('scHeroSubKn').value.trim(),
      quoteText_en: document.getElementById('scQuoteEn').value.trim(),
      quoteText_kn: document.getElementById('scQuoteKn').value.trim(),
      quoteAuthor: 'Comrade Che Guevara',
      officeAddress_en: document.getElementById('scAddressEn').value.trim(),
      officeAddress_kn: document.getElementById('scAddressKn').value.trim(),
      phone1: document.getElementById('scPhone1').value.trim(),
      phone2: document.getElementById('scPhone2').value.trim(),
      landline: '+91 80 2287 4521',
      email: document.getElementById('scEmail').value.trim(),
      socialFb: document.getElementById('scSocialFb').value.trim(),
      socialInsta: document.getElementById('scSocialInsta').value.trim(),
      socialYt: document.getElementById('scSocialYt').value.trim(),
      socialX: document.getElementById('scSocialX').value.trim()
    };
    DyfiDataStore.set(DYFI_DATA_KEYS.SITE_CONTENT, sc);
    const status = document.getElementById('scSaveStatus');
    status.innerText = '✅ Saved! Changes are live on the website.';
    setTimeout(() => { status.innerText = ''; }, 3500);
    showToast('Global Site Content Updated Successfully!');
  });

  // News Manager
  function renderNews() {
    const news = DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [];
    const tbody = document.getElementById('newsTableBody');
    tbody.innerHTML = news.map((n, idx) => `
      <tr>
        <td><img src="${n.image || 'images/hero-banner-1.jpg'}" class="table-thumb" alt="News"></td>
        <td>
          <strong>${n.title_en}</strong><br>
          <span style="color:#f87171; font-size:0.85rem;">${n.title_kn}</span>
        </td>
        <td><span class="badge-tag">${n.category}</span></td>
        <td>${n.date}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteNews(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteNews = function(index) {
    if (confirm('Delete this news item?')) {
      const news = DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [];
      news.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.NEWS, news);
      renderNews();
      renderDashboard();
      showToast('News article deleted');
    }
  };

  document.getElementById('btnOpenAddNews').addEventListener('click', () => {
    openModal('Publish News Article', `
      <form id="modalFormNews">
        <div class="form-group">
          <label class="form-label">Headline (English)</label>
          <input type="text" id="inpNewsTitleEn" class="form-control" required placeholder="Enter headline in English">
        </div>
        <div class="form-group">
          <label class="form-label">Headline (ಕನ್ನಡ)</label>
          <input type="text" id="inpNewsTitleKn" class="form-control" required placeholder="ಕನ್ನಡ ಶೀರ್ಷಿಕೆ ನಮೂದಿಸಿ">
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Category</label>
            <input type="text" id="inpNewsCat" class="form-control" placeholder="Convention / Protest / Youth" required>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Date</label>
            <input type="date" id="inpNewsDate" class="form-control" required value="${new Date().toISOString().split('T')[0]}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Image Path / URL</label>
          <input type="text" id="inpNewsImg" class="form-control" value="images/hero-banner-1.jpg" required>
        </div>
        <div class="form-group">
          <label class="form-label">Description (English)</label>
          <textarea id="inpNewsDescEn" class="form-control" rows="2" required></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Description (ಕನ್ನಡ)</label>
          <textarea id="inpNewsDescKn" class="form-control" rows="2" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Publish to Website</button>
      </form>
    `);

    document.getElementById('modalFormNews').onsubmit = (e) => {
      e.preventDefault();
      const news = DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [];
      news.unshift({
        id: 'n_' + Date.now(),
        title_en: document.getElementById('inpNewsTitleEn').value.trim(),
        title_kn: document.getElementById('inpNewsTitleKn').value.trim(),
        category: document.getElementById('inpNewsCat').value.trim(),
        date: document.getElementById('inpNewsDate').value,
        image: document.getElementById('inpNewsImg').value.trim(),
        desc_en: document.getElementById('inpNewsDescEn').value.trim(),
        desc_kn: document.getElementById('inpNewsDescKn').value.trim()
      });
      DyfiDataStore.set(DYFI_DATA_KEYS.NEWS, news);
      closeModal();
      renderNews();
      renderDashboard();
      showToast('News published successfully');
    };
  });

  // Campaigns
  function renderCampaigns() {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.CAMPAIGNS) || [];
    const tbody = document.getElementById('campaignsTableBody');
    tbody.innerHTML = list.map((c, idx) => `
      <tr>
        <td>
          <strong>${c.title_en}</strong><br>
          <span style="color:#f87171; font-size:0.85rem;">${c.title_kn}</span>
        </td>
        <td><span class="badge-tag">${c.category}</span></td>
        <td>
          <div style="background:#1e293b; border-radius:4px; height:8px; width:100%; overflow:hidden; margin-bottom:4px;">
            <div style="background:#dc2626; height:100%; width:${c.progress || 50}%;"></div>
          </div>
          <small>${c.progress || 50}% Mobilized</small>
        </td>
        <td><span class="badge-status-active">${c.status || 'Active'}</span></td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteCampaign(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteCampaign = function(index) {
    if (confirm('Delete this campaign?')) {
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.CAMPAIGNS) || [];
      list.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.CAMPAIGNS, list);
      renderCampaigns();
      renderDashboard();
      showToast('Campaign deleted');
    }
  };

  document.getElementById('btnOpenAddCampaign').addEventListener('click', () => {
    openModal('Launch Statewide Campaign', `
      <form id="modalFormCampaign">
        <div class="form-group">
          <label class="form-label">Campaign Title (English)</label>
          <input type="text" id="inpCampTitleEn" class="form-control" required placeholder="Youth Rights Campaign">
        </div>
        <div class="form-group">
          <label class="form-label">Campaign Title (ಕನ್ನಡ)</label>
          <input type="text" id="inpCampTitleKn" class="form-control" required placeholder="ಯುವ ಹಕ್ಕುಗಳ ಅಭಿಯಾನ">
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Category</label>
            <input type="text" id="inpCampCat" class="form-control" required placeholder="Employment / Education">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Mobilization Progress (%)</label>
            <input type="number" id="inpCampProg" class="form-control" min="1" max="100" value="75" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Description (English)</label>
          <textarea id="inpCampDescEn" class="form-control" rows="2" required></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Description (ಕನ್ನಡ)</label>
          <textarea id="inpCampDescKn" class="form-control" rows="2" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Launch Campaign</button>
      </form>
    `);

    document.getElementById('modalFormCampaign').onsubmit = (e) => {
      e.preventDefault();
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.CAMPAIGNS) || [];
      list.push({
        id: 'c_' + Date.now(),
        title_en: document.getElementById('inpCampTitleEn').value.trim(),
        title_kn: document.getElementById('inpCampTitleKn').value.trim(),
        category: document.getElementById('inpCampCat').value.trim(),
        progress: parseInt(document.getElementById('inpCampProg').value),
        desc_en: document.getElementById('inpCampDescEn').value.trim(),
        desc_kn: document.getElementById('inpCampDescKn').value.trim(),
        status: 'Active'
      });
      DyfiDataStore.set(DYFI_DATA_KEYS.CAMPAIGNS, list);
      closeModal();
      renderCampaigns();
      renderDashboard();
      showToast('Campaign added');
    };
  });

  // Statements
  function renderStatements() {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.STATEMENTS) || [];
    const tbody = document.getElementById('statementsTableBody');
    tbody.innerHTML = list.map((s, idx) => `
      <tr>
        <td><code>${s.refNo || 'DYFI-KAR'}</code></td>
        <td>
          <strong>${s.title_en}</strong><br>
          <span style="color:#f87171; font-size:0.85rem;">${s.title_kn}</span>
        </td>
        <td><span class="badge-tag">${s.category}</span></td>
        <td>${s.date}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteStatement(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteStatement = function(index) {
    if (confirm('Delete this statement?')) {
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.STATEMENTS) || [];
      list.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.STATEMENTS, list);
      renderStatements();
      renderDashboard();
      showToast('Statement removed');
    }
  };

  document.getElementById('btnOpenAddStatement').addEventListener('click', () => {
    openModal('Publish Press Statement', `
      <form id="modalFormStatement">
        <div class="form-group">
          <label class="form-label">Reference Number</label>
          <input type="text" id="inpStRef" class="form-control" value="DYFI-KAR-ST-2026/${Math.floor(Math.random()*90)+10}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Statement Title (English)</label>
          <input type="text" id="inpStTitleEn" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label">Statement Title (ಕನ್ನಡ)</label>
          <input type="text" id="inpStTitleKn" class="form-control" required>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Category</label>
            <input type="text" id="inpStCat" class="form-control" value="Press Release" required>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Release Date</label>
            <input type="date" id="inpStDate" class="form-control" value="${new Date().toISOString().split('T')[0]}" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Publish Statement</button>
      </form>
    `);

    document.getElementById('modalFormStatement').onsubmit = (e) => {
      e.preventDefault();
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.STATEMENTS) || [];
      list.unshift({
        id: 'st_' + Date.now(),
        refNo: document.getElementById('inpStRef').value.trim(),
        title_en: document.getElementById('inpStTitleEn').value.trim(),
        title_kn: document.getElementById('inpStTitleKn').value.trim(),
        category: document.getElementById('inpStCat').value.trim(),
        date: document.getElementById('inpStDate').value,
        fileUrl: '#'
      });
      DyfiDataStore.set(DYFI_DATA_KEYS.STATEMENTS, list);
      closeModal();
      renderStatements();
      renderDashboard();
      showToast('Statement published');
    };
  });

  // Martyrs
  function renderMartyrs() {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [];
    const tbody = document.getElementById('martyrsTableBody');
    tbody.innerHTML = list.map((m, idx) => `
      <tr>
        <td><img src="${m.photo || 'images/shivappa.jpg'}" class="table-avatar" alt="Martyr"></td>
        <td>
          <strong>${m.name_en}</strong><br>
          <span style="color:#ef4444;">${m.name_kn}</span>
        </td>
        <td>${m.date}</td>
        <td>${m.district}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteMartyr(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteMartyr = function(index) {
    if (confirm('Delete this martyr homage record?')) {
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [];
      list.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.MARTYRS, list);
      renderMartyrs();
      renderDashboard();
      showToast('Martyr record removed');
    }
  };

  document.getElementById('btnOpenAddMartyr').addEventListener('click', () => {
    openModal('Add Martyr Memorial Record', `
      <form id="modalFormMartyr">
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Comrade Name (English)</label>
            <input type="text" id="inpMNameEn" class="form-control" required placeholder="Comrade Name">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Comrade Name (ಕನ್ನಡ)</label>
            <input type="text" id="inpMNameKn" class="form-control" required placeholder="ಕಾಮ್ರೇಡ್ ಹೆಸರು">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Martyrdom Year / Date</label>
            <input type="text" id="inpMDate" class="form-control" placeholder="1992" required>
          </div>
          <div class="form-group col-6">
            <label class="form-label">District / Region</label>
            <input type="text" id="inpMDistrict" class="form-control" placeholder="Dakshina Kannada" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Photo Image Path / URL</label>
          <input type="text" id="inpMPhoto" class="form-control" value="images/shivappa.jpg" required>
        </div>
        <div class="form-group">
          <label class="form-label">Tribute Bio (English)</label>
          <textarea id="inpMTribEn" class="form-control" rows="2" required></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Tribute Bio (ಕನ್ನಡ)</label>
          <textarea id="inpMTribKn" class="form-control" rows="2" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Add to Martyrs Memorial</button>
      </form>
    `);

    document.getElementById('modalFormMartyr').onsubmit = (e) => {
      e.preventDefault();
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [];
      list.push({
        id: 'm_' + Date.now(),
        name_en: document.getElementById('inpMNameEn').value.trim(),
        name_kn: document.getElementById('inpMNameKn').value.trim(),
        date: document.getElementById('inpMDate').value.trim(),
        district: document.getElementById('inpMDistrict').value.trim(),
        photo: document.getElementById('inpMPhoto').value.trim(),
        tribute_en: document.getElementById('inpMTribEn').value.trim(),
        tribute_kn: document.getElementById('inpMTribKn').value.trim()
      });
      DyfiDataStore.set(DYFI_DATA_KEYS.MARTYRS, list);
      closeModal();
      renderMartyrs();
      renderDashboard();
      showToast('Martyr record added');
    };
  });

  // Leaders
  function renderLeaders() {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.LEADERS) || [];
    const tbody = document.getElementById('leadersTableBody');
    tbody.innerHTML = list.map((l, idx) => `
      <tr>
        <td><img src="${l.photo || 'images/leader-1.jpg'}" class="table-avatar" alt="Leader"></td>
        <td>
          <strong>${l.name_en}</strong><br>
          <span style="color:#ef4444;">${l.name_kn}</span>
        </td>
        <td>
          ${l.role_en}<br>
          <small style="color:#94a3b8;">${l.role_kn}</small>
        </td>
        <td>${l.region}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteLeader(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteLeader = function(index) {
    if (confirm('Delete this leader?')) {
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.LEADERS) || [];
      list.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.LEADERS, list);
      renderLeaders();
      renderDashboard();
      showToast('Leader removed');
    }
  };

  document.getElementById('btnOpenAddLeader').addEventListener('click', () => {
    openModal('Add State Committee Leader', `
      <form id="modalFormLeader">
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Leader Name (English)</label>
            <input type="text" id="inpLNameEn" class="form-control" required placeholder="Comrade Name">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Leader Name (ಕನ್ನಡ)</label>
            <input type="text" id="inpLNameKn" class="form-control" required placeholder="ಕಾಮ್ರೇಡ್ ಹೆಸರು">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Designation / Role (English)</label>
            <input type="text" id="inpLRoleEn" class="form-control" required placeholder="State President / Secretary">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Designation / Role (ಕನ್ನಡ)</label>
            <input type="text" id="inpLRoleKn" class="form-control" required placeholder="ರಾಜ್ಯ ಅಧ್ಯಕ್ಷರು / ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Avatar Photo Path / URL</label>
          <input type="text" id="inpLPhoto" class="form-control" value="images/santosh_bajal.jpg" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Add Leader</button>
      </form>
    `);

    document.getElementById('modalFormLeader').onsubmit = (e) => {
      e.preventDefault();
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.LEADERS) || [];
      list.push({
        id: 'l_' + Date.now(),
        name_en: document.getElementById('inpLNameEn').value.trim(),
        name_kn: document.getElementById('inpLNameKn').value.trim(),
        role_en: document.getElementById('inpLRoleEn').value.trim(),
        role_kn: document.getElementById('inpLRoleKn').value.trim(),
        region: 'Karnataka State Committee',
        photo: document.getElementById('inpLPhoto').value.trim()
      });
      DyfiDataStore.set(DYFI_DATA_KEYS.LEADERS, list);
      closeModal();
      renderLeaders();
      renderDashboard();
      showToast('Leader added to State Committee');
    };
  });

  // Gallery
  function renderGallery() {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.GALLERY) || [];
    const tbody = document.getElementById('galleryTableBody');
    tbody.innerHTML = list.map((g, idx) => `
      <tr>
        <td>
          ${g.type === 'video' ? '🎬 Video Embed' : `<img src="${g.src}" class="table-thumb" alt="Gallery">`}
        </td>
        <td><span class="badge-tag">${g.type.toUpperCase()}</span></td>
        <td>${g.category}</td>
        <td>${g.caption_en || g.caption_kn || 'Media'}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteGallery(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteGallery = function(index) {
    if (confirm('Delete this gallery item?')) {
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.GALLERY) || [];
      list.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.GALLERY, list);
      renderGallery();
      showToast('Gallery item removed');
    }
  };

  document.getElementById('btnOpenAddGallery').addEventListener('click', () => {
    openModal('Add Gallery Media', `
      <form id="modalFormGallery">
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Media Type</label>
            <select id="inpGType" class="form-control">
              <option value="image">Photo / Image</option>
              <option value="video">YouTube Video Embed</option>
            </select>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Category</label>
            <select id="inpGCat" class="form-control">
              <option value="rally">Rallies</option>
              <option value="conf">Conferences</option>
              <option value="health">Health & Blood</option>
              <option value="relief">Relief Work</option>
              <option value="video">Video Stream</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Media Source (Image path / YouTube Embed URL)</label>
          <input type="text" id="inpGSrc" class="form-control" value="images/gallery-1.jpg" required>
        </div>
        <div class="form-group">
          <label class="form-label">Caption (English)</label>
          <input type="text" id="inpGCaptionEn" class="form-control" required placeholder="Convention rally photo">
        </div>
        <div class="form-group">
          <label class="form-label">Caption (ಕನ್ನಡ)</label>
          <input type="text" id="inpGCaptionKn" class="form-control" required placeholder="ಸಮಾವೇಶದ ರ‍್ಯಾಲಿ ಚಿತ್ರ">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Add Media</button>
      </form>
    `);

    document.getElementById('modalFormGallery').onsubmit = (e) => {
      e.preventDefault();
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.GALLERY) || [];
      list.push({
        id: 'g_' + Date.now(),
        type: document.getElementById('inpGType').value,
        category: document.getElementById('inpGCat').value,
        src: document.getElementById('inpGSrc').value.trim(),
        caption_en: document.getElementById('inpGCaptionEn').value.trim(),
        caption_kn: document.getElementById('inpGCaptionKn').value.trim()
      });
      DyfiDataStore.set(DYFI_DATA_KEYS.GALLERY, list);
      closeModal();
      renderGallery();
      showToast('Gallery media added');
    };
  });

  // Blood Donors
  function renderBloodDonors() {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.BLOOD_DONORS) || [];
    const q = document.getElementById('filterDonorQuery').value.toLowerCase();
    const grp = document.getElementById('filterDonorGroup').value;
    const dist = document.getElementById('filterDonorDistrict').value;

    const filtered = list.filter(d => {
      const matchQ = !q || d.name.toLowerCase().includes(q) || d.phone.includes(q);
      const matchG = !grp || d.group === grp;
      const matchD = !dist || d.district === dist;
      return matchQ && matchG && matchD;
    });

    const tbody = document.getElementById('donorsTableBody');
    tbody.innerHTML = filtered.map((d, idx) => `
      <tr>
        <td><strong>${d.name}</strong></td>
        <td><a href="tel:${d.phone}" style="color:#60a5fa; text-decoration:none;">📞 ${d.phone}</a></td>
        <td><span class="badge-tag" style="background:rgba(220,38,38,0.2); color:#f87171;">${d.group}</span></td>
        <td>${d.district}</td>
        <td>${d.date || 'Active'}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteDonor(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteDonor = function(index) {
    if (confirm('Remove donor record?')) {
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.BLOOD_DONORS) || [];
      list.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.BLOOD_DONORS, list);
      renderBloodDonors();
      renderDashboard();
      showToast('Donor record removed');
    }
  };

  document.getElementById('filterDonorQuery').addEventListener('input', renderBloodDonors);
  document.getElementById('filterDonorGroup').addEventListener('change', renderBloodDonors);
  document.getElementById('filterDonorDistrict').addEventListener('change', renderBloodDonors);

  document.getElementById('btnOpenAddDonor').addEventListener('click', () => {
    openModal('Register Volunteer Blood Donor', `
      <form id="modalFormDonor">
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input type="text" id="inpDName" class="form-control" required placeholder="Donor name">
        </div>
        <div class="form-group">
          <label class="form-label">Contact Phone</label>
          <input type="tel" id="inpDPhone" class="form-control" required placeholder="+91 9448123456">
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Blood Group</label>
            <select id="inpDGroup" class="form-control" required>
              <option value="A+">A +ve</option>
              <option value="A-">A -ve</option>
              <option value="B+">B +ve</option>
              <option value="B-">B -ve</option>
              <option value="O+">O +ve</option>
              <option value="O-">O -ve</option>
              <option value="AB+">AB +ve</option>
              <option value="AB-">AB -ve</option>
            </select>
          </div>
          <div class="form-group col-6">
            <label class="form-label">District</label>
            <select id="inpDDist" class="form-control" required>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Dakshina Kannada">Dakshina Kannada</option>
              <option value="Udupi">Udupi</option>
              <option value="Mysuru">Mysuru</option>
              <option value="Dharwad">Dharwad</option>
              <option value="Belagavi">Belagavi</option>
              <option value="Kalaburagi">Kalaburagi</option>
              <option value="Shivamogga">Shivamogga</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Save Donor</button>
      </form>
    `);

    document.getElementById('modalFormDonor').onsubmit = (e) => {
      e.preventDefault();
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.BLOOD_DONORS) || [];
      list.unshift({
        id: 'bd_' + Date.now(),
        name: document.getElementById('inpDName').value.trim(),
        phone: document.getElementById('inpDPhone').value.trim(),
        group: document.getElementById('inpDGroup').value,
        district: document.getElementById('inpDDist').value,
        date: new Date().toISOString().split('T')[0]
      });
      DyfiDataStore.set(DYFI_DATA_KEYS.BLOOD_DONORS, list);
      closeModal();
      renderBloodDonors();
      renderDashboard();
      showToast('Blood donor registered');
    };
  });

  // Export CSV Donors
  document.getElementById('btnExportDonors').addEventListener('click', () => {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.BLOOD_DONORS) || [];
    let csv = 'Name,Phone,BloodGroup,District,RegistrationDate\n';
    list.forEach(d => {
      csv += `"${d.name}","${d.phone}","${d.group}","${d.district}","${d.date}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DYFI_Karnataka_Blood_Donors_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast('Blood Donors list exported to CSV');
  });

  // Messages
  function renderMessages() {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.MESSAGES) || [];
    const tbody = document.getElementById('messagesTableBody');
    tbody.innerHTML = list.map((m, idx) => `
      <tr>
        <td><strong>${m.name}</strong></td>
        <td><a href="tel:${m.phone}" style="color:#60a5fa; text-decoration:none;">📞 ${m.phone}</a></td>
        <td>${m.district}</td>
        <td><div style="max-height:80px; overflow-y:auto; font-size:0.85rem;">${m.message}</div></td>
        <td>
          <span class="badge-tag" style="background:${m.status === 'Unread' ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)'}; color:${m.status === 'Unread' ? '#f87171' : '#34d399'};">
            ${m.status || 'Unread'}
          </span>
        </td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteMessage(${idx})">Delete</button>
        </td>
      </tr>
    `).join('');
  }

  window.deleteMessage = function(index) {
    if (confirm('Delete this message?')) {
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.MESSAGES) || [];
      list.splice(index, 1);
      DyfiDataStore.set(DYFI_DATA_KEYS.MESSAGES, list);
      renderMessages();
      renderDashboard();
      showToast('Message deleted');
    }
  };

  document.getElementById('btnClearMessages').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all inquiries?')) {
      DyfiDataStore.set(DYFI_DATA_KEYS.MESSAGES, []);
      renderMessages();
      renderDashboard();
      showToast('All contact enquiries cleared');
    }
  });

  // Settings / Backup
  document.getElementById('btnExportBackup').addEventListener('click', () => {
    const backup = {};
    Object.keys(DYFI_DATA_KEYS).forEach(k => {
      backup[DYFI_DATA_KEYS[k]] = DyfiDataStore.get(DYFI_DATA_KEYS[k]);
    });
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DYFI_Karnataka_Complete_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast('Complete backup exported successfully!');
  });

  document.getElementById('fileImportBackup').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = JSON.parse(evt.target.result);
        Object.keys(data).forEach(k => {
          localStorage.setItem(k, JSON.stringify(data[k]));
        });
        showToast('Backup restored successfully!');
        renderAll();
      } catch (err) {
        alert('Invalid JSON backup file!');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('btnResetDefaults').addEventListener('click', () => {
    if (confirm('RESET ALL DATA to official factory defaults? Any custom news or statements will be reset.')) {
      DyfiDataStore.resetToDefaults();
      renderAll();
      showToast('Website reset to default official data');
    }
  });

  // Master Render
  function renderAll() {
    renderDashboard();
    renderTicker();
    renderSiteContent();
    renderNews();
    renderCampaigns();
    renderStatements();
    renderMartyrs();
    renderLeaders();
    renderGallery();
    renderBloodDonors();
    renderMessages();
  }

  // Initial call
  renderAll();
});
