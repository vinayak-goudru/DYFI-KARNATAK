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

  // ================= IMAGE UPLOAD & OPTIMIZATION UTILITY =================
  function compressImage(file, maxWidth = 1200, maxHeight = 900, quality = 0.84) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith('image/')) {
        return reject(new Error('Selected file is not an image'));
      }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('Failed to read image file'));
      reader.onload = (e) => {
        const img = new Image();
        img.onerror = () => reject(new Error('Failed to parse image data'));
        img.onload = () => {
          let width = img.width;
          let height = img.height;

          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          // Get compressed JPEG data URL
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve({
            dataUrl,
            name: file.name,
            width,
            height,
            sizeKb: Math.round((dataUrl.length * 3) / 4 / 1024)
          });
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  function renderImagePickerHTML(inputId, labelText, initialValue = '', placeholderImg = 'images/hero-banner-1.jpg') {
    const val = initialValue || '';
    const hasImg = Boolean(val);
    const displayImg = val || placeholderImg;

    return `
      <div class="form-group">
        <label class="form-label">${labelText}</label>
        <div class="image-uploader-control" id="${inputId}_wrapper">
          <!-- Hidden storage input holding the actual image data/path -->
          <input type="hidden" id="${inputId}" value="${val.replace(/"/g, '&quot;')}">

          <!-- Hidden native file input -->
          <input type="file" id="${inputId}_file" class="upload-hidden-input" accept="image/png, image/jpeg, image/webp, image/gif, image/svg+xml">

          <!-- Dropzone area (shown when no image is selected) -->
          <div class="upload-dropzone" id="${inputId}_dropzone" style="${hasImg ? 'display:none;' : ''}">
            <span class="upload-dropzone-icon">📷</span>
            <span class="upload-dropzone-title">Click to Choose Photo from Device</span>
            <span class="upload-dropzone-subtitle">or drag and drop an image here (JPG, PNG, WEBP)</span>
          </div>

          <!-- Preview Card (shown when an image is present) -->
          <div class="image-preview-card ${hasImg ? 'has-image' : ''}" id="${inputId}_previewCard" style="${hasImg ? '' : 'display:none;'}">
            <img src="${displayImg}" class="preview-thumb-img" id="${inputId}_previewImg" alt="Preview" onerror="this.src='${placeholderImg}'">
            <div class="preview-info">
              <div class="preview-status" id="${inputId}_status">
                <span>✓</span> <span id="${inputId}_statusText">${hasImg ? 'Image Ready' : 'Selected'}</span>
              </div>
              <div class="preview-name" id="${inputId}_fileName">${val ? (val.startsWith('data:') ? 'Uploaded Device Image' : val.split('/').pop()) : 'No file selected'}</div>
              <div class="preview-meta" id="${inputId}_meta">Optimized for website display</div>
            </div>
            <div class="preview-actions">
              <button type="button" class="btn btn-sm btn-outline-primary" id="${inputId}_btnChange">Change</button>
              <button type="button" class="btn btn-sm btn-outline-danger" id="${inputId}_btnRemove">Remove</button>
            </div>
          </div>

          <!-- Optional URL fallback toggle -->
          <div>
            <button type="button" class="url-fallback-toggle" id="${inputId}_toggleUrl">
              🔗 Or enter image URL / existing path manually
            </button>
            <div class="url-fallback-wrap" id="${inputId}_urlWrap">
              <input type="text" id="${inputId}_urlInput" class="form-control" placeholder="https://... or images/photo.jpg" value="${val.startsWith('data:') ? '' : val.replace(/"/g, '&quot;')}">
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function initImagePicker(inputId) {
    const hiddenInput = document.getElementById(inputId);
    const fileInput = document.getElementById(inputId + '_file');
    const dropzone = document.getElementById(inputId + '_dropzone');
    const previewCard = document.getElementById(inputId + '_previewCard');
    const previewImg = document.getElementById(inputId + '_previewImg');
    const fileName = document.getElementById(inputId + '_fileName');
    const statusText = document.getElementById(inputId + '_statusText');
    const meta = document.getElementById(inputId + '_meta');
    const btnChange = document.getElementById(inputId + '_btnChange');
    const btnRemove = document.getElementById(inputId + '_btnRemove');
    const toggleUrl = document.getElementById(inputId + '_toggleUrl');
    const urlWrap = document.getElementById(inputId + '_urlWrap');
    const urlInput = document.getElementById(inputId + '_urlInput');

    if (!hiddenInput || !fileInput) return;

    function applyImage(dataUrl, name, details = '') {
      hiddenInput.value = dataUrl;
      previewImg.src = dataUrl;
      fileName.innerText = name || 'Uploaded Photo';
      statusText.innerText = 'Photo Attached';
      meta.innerText = details || 'Ready for website';
      dropzone.style.display = 'none';
      previewCard.style.display = 'flex';
      previewCard.classList.add('has-image');
      if (urlInput) urlInput.value = dataUrl.startsWith('data:') ? '' : dataUrl;
    }

    function clearImage() {
      hiddenInput.value = '';
      previewImg.src = '';
      dropzone.style.display = 'block';
      previewCard.style.display = 'none';
      previewCard.classList.remove('has-image');
      fileInput.value = '';
      if (urlInput) urlInput.value = '';
    }

    async function handleFile(file) {
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file (JPG, PNG, WebP).');
        return;
      }
      try {
        statusText.innerText = 'Optimizing photo...';
        const result = await compressImage(file, 1200, 900, 0.84);
        applyImage(result.dataUrl, result.name, `${result.width}x${result.height} px • ~${result.sizeKb} KB`);
        showToast('Photo uploaded and optimized successfully!');
      } catch (err) {
        alert('Could not load image: ' + err.message);
      }
    }

    if (dropzone) {
      dropzone.addEventListener('click', () => fileInput.click());
      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
      dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFile(e.dataTransfer.files[0]);
        }
      });
    }

    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files[0]) {
        handleFile(fileInput.files[0]);
      }
    });

    if (btnChange) {
      btnChange.addEventListener('click', () => fileInput.click());
    }

    if (btnRemove) {
      btnRemove.addEventListener('click', clearImage);
    }

    if (toggleUrl && urlWrap) {
      toggleUrl.addEventListener('click', () => {
        urlWrap.classList.toggle('open');
      });
    }

    if (urlInput) {
      urlInput.addEventListener('input', () => {
        const u = urlInput.value.trim();
        if (u) {
          applyImage(u, u.split('/').pop() || 'Remote Image', 'URL source');
        }
      });
    }
  }

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
          <div class="table-actions-cell">
            <button class="btn btn-table-action btn-outline-warning" onclick="editTicker(${idx})">✏️ Edit</button>
            <button class="btn btn-table-action btn-outline-danger" onclick="deleteTicker(${idx})">🗑️ Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.editTicker = function(index) {
    const ticker = DyfiDataStore.get(DYFI_DATA_KEYS.TICKER) || [];
    const item = ticker[index];
    if (!item) return;

    openModal('Edit Running Ticker Headline', `
      <form id="modalFormTickerEdit">
        <div class="form-group">
          <label class="form-label">Headline Text (English)</label>
          <textarea id="inpTickerEn" class="form-control" rows="2" required>${item.text_en || ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Headline Text (ಕನ್ನಡ)</label>
          <textarea id="inpTickerKn" class="form-control" rows="2" required>${item.text_kn || ''}</textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Update Ticker Headline</button>
      </form>
    `);

    document.getElementById('modalFormTickerEdit').onsubmit = (e) => {
      e.preventDefault();
      item.text_en = document.getElementById('inpTickerEn').value.trim();
      item.text_kn = document.getElementById('inpTickerKn').value.trim();
      DyfiDataStore.set(DYFI_DATA_KEYS.TICKER, ticker);
      closeModal();
      renderTicker();
      renderDashboard();
      showToast('Ticker updated successfully');
    };
  };

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
      showToast('Ticker added successfully');
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
        <td><img src="${n.image || 'images/hero-banner-1.jpg'}" class="table-thumb" alt="News" onerror="this.src='images/hero-banner-1.jpg'"></td>
        <td>
          <strong>${n.title_en}</strong><br>
          <span style="color:#f87171; font-size:0.85rem;">${n.title_kn}</span>
        </td>
        <td><span class="badge-tag">${n.category}</span></td>
        <td>${n.date}</td>
        <td>
          <div class="table-actions-cell">
            <button class="btn btn-table-action btn-outline-warning" onclick="editNews(${idx})">✏️ Edit</button>
            <button class="btn btn-table-action btn-outline-danger" onclick="deleteNews(${idx})">🗑️ Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.editNews = function(index) {
    const news = DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [];
    const item = news[index];
    if (!item) return;

    openModal('Edit News Article', `
      <form id="modalFormNewsEdit">
        <div class="form-group">
          <label class="form-label">Headline (English)</label>
          <input type="text" id="inpNewsTitleEn" class="form-control" required value="${(item.title_en || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">Headline (ಕನ್ನಡ)</label>
          <input type="text" id="inpNewsTitleKn" class="form-control" required value="${(item.title_kn || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Category</label>
            <input type="text" id="inpNewsCat" class="form-control" required value="${(item.category || '').replace(/"/g, '&quot;')}">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Date</label>
            <input type="date" id="inpNewsDate" class="form-control" required value="${item.date || ''}">
          </div>
        </div>
        ${renderImagePickerHTML('inpNewsImg', 'News Article Image (ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ)', item.image || '', 'images/hero-banner-1.jpg')}
        <div class="form-group">
          <label class="form-label">Description (English)</label>
          <textarea id="inpNewsDescEn" class="form-control" rows="3" required>${item.desc_en || ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Description (ಕನ್ನಡ)</label>
          <textarea id="inpNewsDescKn" class="form-control" rows="3" required>${item.desc_kn || ''}</textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Update News Article</button>
      </form>
    `);

    initImagePicker('inpNewsImg');

    document.getElementById('modalFormNewsEdit').onsubmit = (e) => {
      e.preventDefault();
      item.title_en = document.getElementById('inpNewsTitleEn').value.trim();
      item.title_kn = document.getElementById('inpNewsTitleKn').value.trim();
      item.category = document.getElementById('inpNewsCat').value.trim();
      item.date = document.getElementById('inpNewsDate').value;
      item.image = document.getElementById('inpNewsImg').value.trim() || 'images/hero-banner-1.jpg';
      item.desc_en = document.getElementById('inpNewsDescEn').value.trim();
      item.desc_kn = document.getElementById('inpNewsDescKn').value.trim();

      DyfiDataStore.set(DYFI_DATA_KEYS.NEWS, news);
      closeModal();
      renderNews();
      renderDashboard();
      showToast('News article updated successfully');
    };
  };

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
        ${renderImagePickerHTML('inpNewsImg', 'News Article Image (ಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ)', '', 'images/hero-banner-1.jpg')}
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

    initImagePicker('inpNewsImg');

    document.getElementById('modalFormNews').onsubmit = (e) => {
      e.preventDefault();
      const news = DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [];
      news.unshift({
        id: 'n_' + Date.now(),
        title_en: document.getElementById('inpNewsTitleEn').value.trim(),
        title_kn: document.getElementById('inpNewsTitleKn').value.trim(),
        category: document.getElementById('inpNewsCat').value.trim(),
        date: document.getElementById('inpNewsDate').value,
        image: document.getElementById('inpNewsImg').value.trim() || 'images/hero-banner-1.jpg',
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
          <div class="table-actions-cell">
            <button class="btn btn-table-action btn-outline-warning" onclick="editCampaign(${idx})">✏️ Edit</button>
            <button class="btn btn-table-action btn-outline-danger" onclick="deleteCampaign(${idx})">🗑️ Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.editCampaign = function(index) {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.CAMPAIGNS) || [];
    const item = list[index];
    if (!item) return;

    openModal('Edit Statewide Campaign', `
      <form id="modalFormCampaignEdit">
        <div class="form-group">
          <label class="form-label">Campaign Title (English)</label>
          <input type="text" id="inpCampTitleEn" class="form-control" required value="${(item.title_en || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">Campaign Title (ಕನ್ನಡ)</label>
          <input type="text" id="inpCampTitleKn" class="form-control" required value="${(item.title_kn || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Category</label>
            <input type="text" id="inpCampCat" class="form-control" required value="${(item.category || '').replace(/"/g, '&quot;')}">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Mobilization Progress (%)</label>
            <input type="number" id="inpCampProg" class="form-control" min="1" max="100" value="${item.progress || 75}" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Description (English)</label>
          <textarea id="inpCampDescEn" class="form-control" rows="3" required>${item.desc_en || ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Description (ಕನ್ನಡ)</label>
          <textarea id="inpCampDescKn" class="form-control" rows="3" required>${item.desc_kn || ''}</textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Update Campaign</button>
      </form>
    `);

    document.getElementById('modalFormCampaignEdit').onsubmit = (e) => {
      e.preventDefault();
      item.title_en = document.getElementById('inpCampTitleEn').value.trim();
      item.title_kn = document.getElementById('inpCampTitleKn').value.trim();
      item.category = document.getElementById('inpCampCat').value.trim();
      item.progress = parseInt(document.getElementById('inpCampProg').value);
      item.desc_en = document.getElementById('inpCampDescEn').value.trim();
      item.desc_kn = document.getElementById('inpCampDescKn').value.trim();

      DyfiDataStore.set(DYFI_DATA_KEYS.CAMPAIGNS, list);
      closeModal();
      renderCampaigns();
      renderDashboard();
      showToast('Campaign updated successfully');
    };
  };

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
          <div class="table-actions-cell">
            <button class="btn btn-table-action btn-outline-warning" onclick="editStatement(${idx})">✏️ Edit</button>
            <button class="btn btn-table-action btn-outline-danger" onclick="deleteStatement(${idx})">🗑️ Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.editStatement = function(index) {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.STATEMENTS) || [];
    const item = list[index];
    if (!item) return;

    openModal('Edit Press Statement', `
      <form id="modalFormStatementEdit">
        <div class="form-group">
          <label class="form-label">Reference Number</label>
          <input type="text" id="inpStRef" class="form-control" required value="${(item.refNo || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">Statement Title (English)</label>
          <input type="text" id="inpStTitleEn" class="form-control" required value="${(item.title_en || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">Statement Title (ಕನ್ನಡ)</label>
          <input type="text" id="inpStTitleKn" class="form-control" required value="${(item.title_kn || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Category</label>
            <input type="text" id="inpStCat" class="form-control" required value="${(item.category || '').replace(/"/g, '&quot;')}">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Release Date</label>
            <input type="date" id="inpStDate" class="form-control" required value="${item.date || ''}">
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Update Statement</button>
      </form>
    `);

    document.getElementById('modalFormStatementEdit').onsubmit = (e) => {
      e.preventDefault();
      item.refNo = document.getElementById('inpStRef').value.trim();
      item.title_en = document.getElementById('inpStTitleEn').value.trim();
      item.title_kn = document.getElementById('inpStTitleKn').value.trim();
      item.category = document.getElementById('inpStCat').value.trim();
      item.date = document.getElementById('inpStDate').value;

      DyfiDataStore.set(DYFI_DATA_KEYS.STATEMENTS, list);
      closeModal();
      renderStatements();
      renderDashboard();
      showToast('Statement updated successfully');
    };
  };

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
        <td><img src="${m.photo || 'images/shivappa.jpg'}" class="table-avatar" alt="Martyr" onerror="this.src='images/shivappa.jpg'"></td>
        <td>
          <strong>${m.name_en}</strong><br>
          <span style="color:#ef4444;">${m.name_kn}</span>
        </td>
        <td>${m.date}</td>
        <td>${m.district}</td>
        <td>
          <div class="table-actions-cell">
            <button class="btn btn-table-action btn-outline-warning" onclick="editMartyr(${idx})">✏️ Edit</button>
            <button class="btn btn-table-action btn-outline-danger" onclick="deleteMartyr(${idx})">🗑️ Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.editMartyr = function(index) {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [];
    const item = list[index];
    if (!item) return;

    openModal('Edit Martyr Memorial Record', `
      <form id="modalFormMartyrEdit">
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Comrade Name (English)</label>
            <input type="text" id="inpMNameEn" class="form-control" required value="${(item.name_en || '').replace(/"/g, '&quot;')}">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Comrade Name (ಕನ್ನಡ)</label>
            <input type="text" id="inpMNameKn" class="form-control" required value="${(item.name_kn || '').replace(/"/g, '&quot;')}">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Martyrdom Year / Date</label>
            <input type="text" id="inpMDate" class="form-control" required value="${(item.date || '').replace(/"/g, '&quot;')}">
          </div>
          <div class="form-group col-6">
            <label class="form-label">District / Region</label>
            <input type="text" id="inpMDistrict" class="form-control" required value="${(item.district || '').replace(/"/g, '&quot;')}">
          </div>
        </div>
        ${renderImagePickerHTML('inpMPhoto', 'Comrade Memorial Photo (ಭಾವಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ)', item.photo || '', 'images/shivappa.jpg')}
        <div class="form-group">
          <label class="form-label">Tribute Bio (English)</label>
          <textarea id="inpMTribEn" class="form-control" rows="2" required>${item.tribute_en || ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Tribute Bio (ಕನ್ನಡ)</label>
          <textarea id="inpMTribKn" class="form-control" rows="2" required>${item.tribute_kn || ''}</textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Update Martyr Memorial Record</button>
      </form>
    `);

    initImagePicker('inpMPhoto');

    document.getElementById('modalFormMartyrEdit').onsubmit = (e) => {
      e.preventDefault();
      item.name_en = document.getElementById('inpMNameEn').value.trim();
      item.name_kn = document.getElementById('inpMNameKn').value.trim();
      item.date = document.getElementById('inpMDate').value.trim();
      item.district = document.getElementById('inpMDistrict').value.trim();
      item.photo = document.getElementById('inpMPhoto').value.trim() || 'images/shivappa.jpg';
      item.tribute_en = document.getElementById('inpMTribEn').value.trim();
      item.tribute_kn = document.getElementById('inpMTribKn').value.trim();

      DyfiDataStore.set(DYFI_DATA_KEYS.MARTYRS, list);
      closeModal();
      renderMartyrs();
      renderDashboard();
      showToast('Martyr record updated successfully');
    };
  };

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
        ${renderImagePickerHTML('inpMPhoto', 'Comrade Memorial Photo (ಭಾವಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ)', '', 'images/shivappa.jpg')}
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

    initImagePicker('inpMPhoto');

    document.getElementById('modalFormMartyr').onsubmit = (e) => {
      e.preventDefault();
      const list = DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [];
      list.push({
        id: 'm_' + Date.now(),
        name_en: document.getElementById('inpMNameEn').value.trim(),
        name_kn: document.getElementById('inpMNameKn').value.trim(),
        date: document.getElementById('inpMDate').value.trim(),
        district: document.getElementById('inpMDistrict').value.trim(),
        photo: document.getElementById('inpMPhoto').value.trim() || 'images/shivappa.jpg',
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
        <td><img src="${l.photo || 'images/leader-1.jpg'}" class="table-avatar" alt="Leader" onerror="this.src='images/leader-1.jpg'"></td>
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
          <div class="table-actions-cell">
            <button class="btn btn-table-action btn-outline-warning" onclick="editLeader(${idx})">✏️ Edit</button>
            <button class="btn btn-table-action btn-outline-danger" onclick="deleteLeader(${idx})">🗑️ Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.editLeader = function(index) {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.LEADERS) || [];
    const item = list[index];
    if (!item) return;

    openModal('Edit State Committee Leader', `
      <form id="modalFormLeaderEdit">
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Leader Name (English)</label>
            <input type="text" id="inpLNameEn" class="form-control" required value="${(item.name_en || '').replace(/"/g, '&quot;')}">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Leader Name (ಕನ್ನಡ)</label>
            <input type="text" id="inpLNameKn" class="form-control" required value="${(item.name_kn || '').replace(/"/g, '&quot;')}">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Designation / Role (English)</label>
            <input type="text" id="inpLRoleEn" class="form-control" required value="${(item.role_en || '').replace(/"/g, '&quot;')}">
          </div>
          <div class="form-group col-6">
            <label class="form-label">Designation / Role (ಕನ್ನಡ)</label>
            <input type="text" id="inpLRoleKn" class="form-control" required value="${(item.role_kn || '').replace(/"/g, '&quot;')}">
          </div>
        </div>
        ${renderImagePickerHTML('inpLPhoto', 'Leader Avatar Photo (ಭಾವಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ)', item.photo || '', 'images/santosh_bajal.jpg')}
        <button type="submit" class="btn btn-primary btn-block">Update Leader Information</button>
      </form>
    `);

    initImagePicker('inpLPhoto');

    document.getElementById('modalFormLeaderEdit').onsubmit = (e) => {
      e.preventDefault();
      item.name_en = document.getElementById('inpLNameEn').value.trim();
      item.name_kn = document.getElementById('inpLNameKn').value.trim();
      item.role_en = document.getElementById('inpLRoleEn').value.trim();
      item.role_kn = document.getElementById('inpLRoleKn').value.trim();
      item.photo = document.getElementById('inpLPhoto').value.trim() || 'images/santosh_bajal.jpg';

      DyfiDataStore.set(DYFI_DATA_KEYS.LEADERS, list);
      closeModal();
      renderLeaders();
      renderDashboard();
      showToast('Leader information updated successfully');
    };
  };

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
        ${renderImagePickerHTML('inpLPhoto', 'Leader Avatar Photo (ಭಾವಚಿತ್ರ ಆಯ್ಕೆಮಾಡಿ)', '', 'images/santosh_bajal.jpg')}
        <button type="submit" class="btn btn-primary btn-block">Add Leader</button>
      </form>
    `);

    initImagePicker('inpLPhoto');

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
        photo: document.getElementById('inpLPhoto').value.trim() || 'images/santosh_bajal.jpg'
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
          ${g.type === 'video' ? '🎬 Video Embed' : `<img src="${g.src}" class="table-thumb" alt="Gallery" onerror="this.src='images/gallery-1.jpg'">`}
        </td>
        <td><span class="badge-tag">${g.type.toUpperCase()}</span></td>
        <td>${g.category}</td>
        <td>${g.caption_en || g.caption_kn || 'Media'}</td>
        <td>
          <div class="table-actions-cell">
            <button class="btn btn-table-action btn-outline-warning" onclick="editGallery(${idx})">✏️ Edit</button>
            <button class="btn btn-table-action btn-outline-danger" onclick="deleteGallery(${idx})">🗑️ Delete</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  window.editGallery = function(index) {
    const list = DyfiDataStore.get(DYFI_DATA_KEYS.GALLERY) || [];
    const item = list[index];
    if (!item) return;

    openModal('Edit Gallery Media', `
      <form id="modalFormGalleryEdit">
        <div class="form-row">
          <div class="form-group col-6">
            <label class="form-label">Media Type</label>
            <select id="inpGType" class="form-control">
              <option value="image" ${item.type === 'image' ? 'selected' : ''}>Photo / Image</option>
              <option value="video" ${item.type === 'video' ? 'selected' : ''}>YouTube Video Embed</option>
            </select>
          </div>
          <div class="form-group col-6">
            <label class="form-label">Category</label>
            <select id="inpGCat" class="form-control">
              <option value="rally" ${item.category === 'rally' ? 'selected' : ''}>Rallies</option>
              <option value="conf" ${item.category === 'conf' ? 'selected' : ''}>Conferences</option>
              <option value="health" ${item.category === 'health' ? 'selected' : ''}>Health & Blood</option>
              <option value="relief" ${item.category === 'relief' ? 'selected' : ''}>Relief Work</option>
              <option value="video" ${item.category === 'video' ? 'selected' : ''}>Video Stream</option>
            </select>
          </div>
        </div>
        <div id="galleryImagePickerWrap" style="${item.type === 'video' ? 'display:none;' : ''}">
          ${renderImagePickerHTML('inpGSrc', 'Gallery Image (ಫೋಟೋ ಆಯ್ಕೆಮಾಡಿ)', item.type === 'image' ? item.src : '', 'images/gallery-1.jpg')}
        </div>
        <div id="galleryVideoInputWrap" class="form-group" style="${item.type === 'video' ? '' : 'display:none;'}">
          <label class="form-label">YouTube Video Embed URL</label>
          <input type="text" id="inpGVideoSrc" class="form-control" value="${item.type === 'video' ? (item.src || '').replace(/"/g, '&quot;') : ''}" placeholder="https://www.youtube.com/embed/...">
        </div>
        <div class="form-group">
          <label class="form-label">Caption (English)</label>
          <input type="text" id="inpGCaptionEn" class="form-control" required value="${(item.caption_en || '').replace(/"/g, '&quot;')}">
        </div>
        <div class="form-group">
          <label class="form-label">Caption (ಕನ್ನಡ)</label>
          <input type="text" id="inpGCaptionKn" class="form-control" required value="${(item.caption_kn || '').replace(/"/g, '&quot;')}">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Update Gallery Media</button>
      </form>
    `);

    initImagePicker('inpGSrc');

    const typeSelect = document.getElementById('inpGType');
    const imgWrap = document.getElementById('galleryImagePickerWrap');
    const vidWrap = document.getElementById('galleryVideoInputWrap');

    typeSelect.addEventListener('change', () => {
      if (typeSelect.value === 'video') {
        imgWrap.style.display = 'none';
        vidWrap.style.display = 'block';
      } else {
        imgWrap.style.display = 'block';
        vidWrap.style.display = 'none';
      }
    });

    document.getElementById('modalFormGalleryEdit').onsubmit = (e) => {
      e.preventDefault();
      const type = typeSelect.value;
      const src = type === 'video' 
        ? document.getElementById('inpGVideoSrc').value.trim() 
        : (document.getElementById('inpGSrc').value.trim() || 'images/gallery-1.jpg');

      item.type = type;
      item.category = document.getElementById('inpGCat').value;
      item.src = src;
      item.caption_en = document.getElementById('inpGCaptionEn').value.trim();
      item.caption_kn = document.getElementById('inpGCaptionKn').value.trim();

      DyfiDataStore.set(DYFI_DATA_KEYS.GALLERY, list);
      closeModal();
      renderGallery();
      showToast('Gallery media updated successfully');
    };
  };

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
        <div id="galleryImagePickerWrap">
          ${renderImagePickerHTML('inpGSrc', 'Gallery Image (ಫೋಟೋ ಆಯ್ಕೆಮಾಡಿ)', '', 'images/gallery-1.jpg')}
        </div>
        <div id="galleryVideoInputWrap" class="form-group" style="display:none;">
          <label class="form-label">YouTube Video Embed URL</label>
          <input type="text" id="inpGVideoSrc" class="form-control" placeholder="https://www.youtube.com/embed/...">
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

    initImagePicker('inpGSrc');

    const typeSelect = document.getElementById('inpGType');
    const imgWrap = document.getElementById('galleryImagePickerWrap');
    const vidWrap = document.getElementById('galleryVideoInputWrap');

    typeSelect.addEventListener('change', () => {
      if (typeSelect.value === 'video') {
        imgWrap.style.display = 'none';
        vidWrap.style.display = 'block';
      } else {
        imgWrap.style.display = 'block';
        vidWrap.style.display = 'none';
      }
    });

    document.getElementById('modalFormGallery').onsubmit = (e) => {
      e.preventDefault();
      const type = typeSelect.value;
      const src = type === 'video'
        ? document.getElementById('inpGVideoSrc').value.trim()
        : (document.getElementById('inpGSrc').value.trim() || 'images/gallery-1.jpg');

      const list = DyfiDataStore.get(DYFI_DATA_KEYS.GALLERY) || [];
      list.push({
        id: 'g_' + Date.now(),
        type: type,
        category: document.getElementById('inpGCat').value,
        src: src,
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
