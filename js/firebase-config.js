/**
 * DYFI Karnataka - Firebase Integration & Cloud Database Synchronization
 * Project: dyfikarnataka-7942d
 */

const firebaseConfig = {
  apiKey: "AIzaSyDuQJM1tYi5Dcs1DdIGrhVMLesuSFfX_IM",
  authDomain: "dyfikarnataka-7942d.firebaseapp.com",
  projectId: "dyfikarnataka-7942d",
  storageBucket: "dyfikarnataka-7942d.firebasestorage.app",
  messagingSenderId: "739819293651",
  appId: "1:739819293651:web:9d922aa96fed04bc2abd26",
  measurementId: "G-WTVDQCF12H"
};

// Global Firebase Wrapper
window.DyfiFirebase = {
  initialized: false,
  db: null,
  analytics: null,

  init() {
    try {
      if (typeof firebase !== 'undefined' && !this.initialized) {
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        if (typeof firebase.firestore === 'function') {
          this.db = firebase.firestore();
        }
        if (typeof firebase.analytics === 'function') {
          try {
            this.analytics = firebase.analytics();
          } catch (e) {
            console.info('Firebase analytics initialized in browser.');
          }
        }
        this.initialized = true;

        if (this.db) {
          this.probeCloudHealth();
        }
      }
    } catch (err) {
      console.warn('Firebase init warning:', err);
      this.updateStatusBadge(false, 'Local Storage Mode');
    }
  },

  probeCloudHealth() {
    if (!this.db) return;
    this.db.collection('dyfi_data').doc('__health__').get()
      .then(() => {
        this.cloudReady = true;
        this.updateStatusBadge(true, 'Firebase Cloud Connected');
        console.log('✅ Firebase Cloud Firestore is active & synced');
      })
      .catch((err) => {
        this.cloudReady = false;
        console.warn('Firebase status:', err.message);
        if (err.code === 'permission-denied' || (err.message && err.message.includes('has not been used'))) {
          this.updateStatusBadge(false, 'Click to Activate Firestore in Firebase Console');
        } else {
          this.updateStatusBadge(false, 'Local Storage Mode');
        }
      });
  },

  isAvailable() {
    return this.initialized && this.db !== null;
  },

  updateStatusBadge(connected, customLabel) {
    const badge = document.getElementById('firebaseStatusBadge');
    if (!badge) return;
    if (connected) {
      badge.style.background = 'rgba(34,197,94,0.12)';
      badge.style.color = '#22c55e';
      badge.style.border = '1px solid rgba(34,197,94,0.3)';
      badge.innerHTML = `<i class="fa-solid fa-cloud" style="margin-right:6px;"></i> ${customLabel || 'Firebase Cloud Connected'}`;
    } else {
      const isNeedsEnable = customLabel && customLabel.includes('Firebase Console');
      badge.style.background = isNeedsEnable ? 'rgba(245,158,11,0.15)' : 'rgba(148,163,184,0.12)';
      badge.style.color = isNeedsEnable ? '#f59e0b' : '#94a3b8';
      badge.style.border = isNeedsEnable ? '1px solid rgba(245,158,11,0.4)' : '1px solid rgba(148,163,184,0.3)';
      badge.innerHTML = isNeedsEnable
        ? `<a href="https://console.firebase.google.com/project/dyfikarnataka-7942d/firestore" target="_blank" style="color:#f59e0b; text-decoration:none;"><i class="fa-solid fa-triangle-exclamation" style="margin-right:6px;"></i> Activate Firestore in Firebase Console <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.8em;"></i></a>`
        : `<i class="fa-solid fa-hard-drive" style="margin-right:6px;"></i> ${customLabel || 'Local Storage Mode'}`;
    }
  },

  // Save specific data collection to Firebase Firestore
  async saveCollection(key, data) {
    if (!this.isAvailable()) return false;
    try {
      await this.db.collection('dyfi_data').doc(key).set({
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        payload: data
      }, { merge: true });
      return true;
    } catch (err) {
      console.warn(`Firebase write error for ${key}:`, err);
      return false;
    }
  },

  // Fetch specific data collection from Firebase Firestore
  async getCollection(key) {
    if (!this.isAvailable()) return null;
    try {
      const doc = await this.db.collection('dyfi_data').doc(key).get();
      if (doc.exists && doc.data() && doc.data().payload) {
        return doc.data().payload;
      }
      return null;
    } catch (err) {
      console.warn(`Firebase read error for ${key}:`, err);
      return null;
    }
  },

  // Listen for real-time changes
  onCollectionChange(key, callback) {
    if (!this.isAvailable()) return () => {};
    try {
      return this.db.collection('dyfi_data').doc(key).onSnapshot(doc => {
        if (doc.exists && doc.data() && doc.data().payload) {
          callback(doc.data().payload);
        }
      }, err => {
        console.warn(`Firestore onSnapshot error for ${key}:`, err);
      });
    } catch (err) {
      console.warn(`Firestore listener setup error for ${key}:`, err);
      return () => {};
    }
  },

  // Push new Contact Message directly to cloud
  async saveMessage(msg) {
    if (!this.isAvailable()) return false;
    try {
      await this.db.collection('contact_submissions').add({
        ...msg,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      return true;
    } catch (err) {
      console.warn('Firebase saveMessage error:', err);
      return false;
    }
  },

  // Push new Volunteer Blood Donor directly to cloud
  async saveDonor(donor) {
    if (!this.isAvailable()) return false;
    try {
      await this.db.collection('registered_donors').add({
        ...donor,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      return true;
    } catch (err) {
      console.warn('Firebase saveDonor error:', err);
      return false;
    }
  }
};

// Initialize as soon as script loads
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    DyfiFirebase.init();
  });
}
