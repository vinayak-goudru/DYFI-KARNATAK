/**
 * DYFI Karnataka - Central Data Store & Synchronization Layer
 * Provides default data and localStorage persistence shared between public portal and admin portal.
 */

const DYFI_DATA_KEYS = {
  SITE_CONTENT: 'dyfi_kar_site_content',
  TICKER: 'dyfi_kar_ticker',
  NEWS: 'dyfi_kar_news',
  CAMPAIGNS: 'dyfi_kar_campaigns',
  STATEMENTS: 'dyfi_kar_statements',
  MARTYRS: 'dyfi_kar_martyrs',
  LEADERS: 'dyfi_kar_leaders',
  GALLERY: 'dyfi_kar_gallery',
  BLOOD_DONORS: 'dyfi_kar_blood_donors',
  MESSAGES: 'dyfi_kar_messages',
  AUTH: 'dyfi_kar_admin_auth'
};

const DEFAULT_DYFI_DATA = {
  siteContent: {
    heroTitle_en: 'United Youth, <span class="highlight-red">Secular Karnataka</span> — Building a Better Tomorrow',
    heroTitle_kn: 'ಒಗ್ಗಟ್ಟಾದ ಯುವಜನತೆ, <span class="highlight-red">ಜಾತ್ಯತೀತ ಕರ್ನಾಟಕ</span> — ಉಜ್ವಲ ಭವಿಷ್ಯದೆಡೆಗೆ',
    heroSub_en: 'Democratic Youth Federation of India (DYFI) Karnataka State Committee — Mobilizing progressive youth across all 31 districts of Karnataka against unemployment, inequality, and hatred.',
    heroSub_kn: 'ಭಾರತ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಯುವಜನ ಫೆಡರೇಶನ್ (DYFI) ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿ — ನಿರುದ್ಯೋಗ, ಅಸಮಾನತೆ ಹಾಗೂ ಕೋಮುವಾದದ ವಿರುದ್ಧ ರಾಜ್ಯದ 31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಸಾಗುತ್ತಿರುವ ಯುವಜನರ ಹೋರಾಟದ ಧ್ವನಿ.',
    quoteText_en: 'The revolution is not an apple that falls when it is ripe. You have to make it fall.',
    quoteText_kn: 'ಕ್ರಾಂತಿಯು ಮಾಗಿದಾಗ ಉದುರುವ ಸೇಬಲ್ಲ, ಅದನ್ನು ನೀವೇ ಉದುರಿಸಬೇಕು.',
    quoteAuthor: 'Comrade Che Guevara',
    officeAddress_en: 'SFI-DYFI OFFICE, C/o: Amma Nilaya, #25, 1st Main Road, 11th Cross, Sanmangiramanagara, Bengaluru - 560027.',
    officeAddress_kn: 'ಎಸ್.ಎಫ್.ಐ - ಡಿವೈಎಫ್ಐ ಕಚೇರಿ, ಸಿ/ಒ: ಅಮ್ಮ ನಿಲಯ, #25, 1ನೇ ಮುಖ್ಯ ರಸ್ತೆ, 11ನೇ ಕ್ರಾಸ್, ಸಂಪಂಗಿರಾಮನಗರ, ಬೆಂಗಳೂರು - 560027.',
    phone1: '+91 9449225636',
    phone2: '+91 9481261229',
    landline: '+91 80 2287 4521',
    email: 'dyfikar1980@gmail.com',
    socialFb: 'https://www.facebook.com/share/14nAFsBHkYR/',
    socialInsta: 'https://instagram.com/dyfi_karnataka',
    socialYt: 'https://youtube.com/@dyfikarnataka',
    socialX: 'https://twitter.com/dyfikarnataka'
  },

  ticker: [
    {
      id: 't1',
      text_en: 'Statewide Youth March on November 15 demanding guaranteed employment and industrial revival across Karnataka!',
      text_kn: 'ನವೆಂಬರ್ 15 ರಂದು ಉದ್ಯೋಗ ಖಾತರಿ ಮತ್ತು ಕೈಗಾರಿಕಾ ಪುನಶ್ಚೇತನಕ್ಕೆ ಆಗ್ರಹಿಸಿ ಬೃಹತ್ ರಾಜ್ಯಮಟ್ಟದ ಯುವಜನ ಜಾಗೃತಿ ಜಾಥಾ!',
      active: true
    },
    {
      id: 't2',
      text_en: 'Monsoon Volunteer Brigades deployed for flood relief & emergency assistance in coastal and malnad districts.',
      text_kn: 'ಕರಾವಳಿ ಮತ್ತು ಮಲೆನಾಡು ಭಾಗಗಳಲ್ಲಿ ನೆರೆ ಪರಿಹಾರಕ್ಕಾಗಿ ಡಿವೈಎಫ್ಐ ಯುವ ಕಾರ್ಯಪಡೆ ಸನ್ನದ್ಧ.',
      active: true
    }
  ],

  news: [
    {
      id: 'n1',
      title_en: 'DYFI State Convention Resolves to Fight for Free Higher Education and Youth Employment',
      title_kn: 'ಉಚಿತ ಉನ್ನತ ಶಿಕ್ಷಣ ಹಾಗೂ ಉದ್ಯೋಗಕ್ಕಾಗಿ ಸಮರಶೀಲ ಹೋರಾಟಕ್ಕೆ ಡಿವೈಎಫ್ಐ ರಾಜ್ಯ ಸಮಾವೇಶ ಕರೆ',
      category: 'Convention',
      date: '2026-10-14',
      image: 'images/hero-banner-1.jpg',
      desc_en: 'Hundreds of delegates from 31 districts gathered at Bengaluru to pass crucial resolutions demanding fill-up of 2.5 lakh vacant government posts.',
      desc_kn: 'ರಾಜ್ಯ ಸರ್ಕಾರದ 2.5 ಲಕ್ಷ ಖಾಲಿ ಹುದ್ದೆಗಳನ್ನು ತಕ್ಷಣ ಭರ್ತಿ ಮಾಡಲು ಮತ್ತು ಯುವಜನರಿಗೆ ಗೌರವಯುತ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಗೆ ಆಗ್ರಹಿಸಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಬೃಹತ್ ಸಮಾವೇಶ.'
    },
    {
      id: 'n2',
      title_en: 'Protest March Against Bus Fare Hike and Inadequate Government Hostels in Kalaburagi',
      title_kn: 'ಕಲಬುರಗಿಯಲ್ಲಿ ಬಸ್ ಪಾಸ್ ಸಮಸ್ಯೆ ಹಾಗೂ ಸರ್ಕಾರಿ ವಸತಿ ನಿಲಯಗಳ ಸೌಲಭ್ಯಕ್ಕೆ ಆಗ್ರಹಿಸಿ ಪ್ರತಿಭಟನಾ ಮೆರವಣಿಗೆ',
      category: 'Protest',
      date: '2026-10-08',
      image: 'images/hero-banner-2.jpg',
      desc_en: 'Students and youth united to submit an urgent memorandum to the authorities demanding immediate hostel allocation and bus frequency.',
      desc_kn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಮರ್ಪಕ ಹಾಸ್ಟೆಲ್ ಸೌಲಭ್ಯ ಹಾಗೂ ಗ್ರಾಮೀಣ ಭಾಗಗಳಿಗೆ ಬಸ್ ಸೌಲಭ್ಯ ಒದಗಿಸಲು ಆಗ್ರಹಿಸಿ ಜಿಲ್ಲಾಧಿಕಾರಿಗಳ ಕಚೇರಿ ಎದುರು ಪ್ರತಿಭಟನೆ.'
    },
    {
      id: 'n3',
      title_en: 'Statewide Blood Donation & Plasma Volunteer Registry Launched by DYFI Health Cell',
      title_kn: 'ಡಿವೈಎಫ್ಐ ಆರೋಗ್ಯ ಘಟಕದಿಂದ ರಾಜ್ಯಮಟ್ಟದ ತುರ್ತು ರಕ್ತದಾನ ಜಾಲ ವಿಸ್ತರಣೆ',
      category: 'Health',
      date: '2026-09-28',
      image: 'images/blood-donation-bg.jpg',
      desc_en: 'Empowering local hospitals with over 5,000 ready voluntary donors during seasonal emergency periods.',
      desc_kn: 'ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ರೋಗಿಗಳಿಗೆ ಉಚಿತ ಹಾಗೂ ತ್ವರಿತ ರಕ್ತ ಒದಗಿಸಲು 5,000ಕ್ಕೂ ಹೆಚ್ಚು ನೋಂದಾಯಿತ ಸ್ವಯಂಸೇವಕರ ನೆಟ್‌ವರ್ಕ್ ಕಾರ್ಯಾಚರಣೆ.'
    }
  ],

  campaigns: [
    {
      id: 'c1',
      title_en: 'Youth Against Hate & Communalism',
      title_kn: 'ಕೋಮುವಾದದ ವಿರುದ್ಧ ಯುವಜನರ ಐಕ್ಯತಾ ಅಭಿಯಾನ',
      category: 'Social Justice',
      progress: 85,
      desc_en: 'Organizing street theater, peace rallies, and youth brotherhood camps across sensitive zones.',
      desc_kn: 'ಕೋಮು ಸೌಹಾರ್ದತೆ ಮತ್ತು ಭ್ರಾತೃತ್ವವನ್ನು ಎತ್ತಿಹಿಡಿಯಲು ರಾಜ್ಯದಾದ್ಯಂತ ಬೀದಿನಾಟಕ, ಸೌಹಾರ್ದ ಕೂಟ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಜಥಾಗಳು.',
      status: 'Active'
    },
    {
      id: 'c2',
      title_en: 'Jobs for All — Right to Work',
      title_kn: 'ಉದ್ಯೋಗ ನಮ್ಮ ಹಕ್ಕು — ಖಾಲಿ ಹುದ್ದೆಗಳ ಭರ್ತಿಗೆ ಹೋರಾಟ',
      category: 'Employment',
      progress: 90,
      desc_en: 'Demanding legal guarantee for employment and unconditional unemployment allowance for job seekers.',
      desc_kn: 'ಸರ್ಕಾರಿ ಖಾಲಿ ಹುದ್ದೆಗಳ ತ್ವರಿತ ನೇಮಕಾತಿ ಹಾಗೂ ನಿರುದ್ಯೋಗಿ ಯುವಕರಿಗೆ ಮಾಸಿಕ ನಿರುದ್ಯೋಗ ಭತ್ಯೆಗೆ ಆಗ್ರಹ.',
      status: 'Active'
    },
    {
      id: 'c3',
      title_en: 'Anti-Drug & De-addiction Youth Network',
      title_kn: 'ಮಾದಕ ದ್ರವ್ಯ ಮುಕ್ತ ಸಮಾಜಕ್ಕಾಗಿ ಯುವ ಕಾವಲು',
      category: 'Health & Youth',
      progress: 75,
      desc_en: 'Partnering with educational institutions to raise awareness, counsel victims, and shut illegal outlets.',
      desc_kn: 'ಕಾಲೇಜು ಆವರಣಗಳಲ್ಲಿ ಡ್ರಗ್ಸ್ ಮಾಫಿಯಾ ವಿರುದ್ಧ ಜಾಗೃತಿ ಹಾಗೂ ವ್ಯಸನಮುಕ್ತ ಕೌನ್ಸೆಲಿಂಗ್ ಶಿಬಿರಗಳು.',
      status: 'Active'
    }
  ],

  statements: [
    {
      id: 'st1',
      title_en: 'DYFI Condemns Commercialization of Professional Education & Fee Hikes in Private Universities',
      title_kn: 'ಖಾಸಗಿ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳ ಅತಿಯಾದ ಶುಲ್ಕ ಏರಿಕೆ ಹಾಗೂ ಶಿಕ್ಷಣದ ವಾಣಿಜ್ಯೀಕರಣವನ್ನು ಖಂಡಿಸಿ ಡಿವೈಎಫ್ಐ ಹೇಳಿಕೆ',
      refNo: 'DYFI-KAR-ST-2026/08',
      date: '2026-10-11',
      category: 'Education Policy',
      fileUrl: '#'
    },
    {
      id: 'st2',
      title_en: 'Press Release: State Committee Demands Fair Relief Package for Flood-Affected Farmers & Rural Youth',
      title_kn: 'ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ: ನೆರೆ ಸಂತ್ರಸ್ತ ರೈತರು ಮತ್ತು ಗ್ರಾಮೀಣ ಯುವಕರಿಗೆ ಸೂಕ್ತ ಪರಿಹಾರ ಪ್ಯಾಕೇಜ್ ಘೋಷಿಸಲು ಆಗ್ರಹ',
      refNo: 'DYFI-KAR-PR-2026/19',
      date: '2026-10-02',
      category: 'Public Welfare',
      fileUrl: '#'
    },
    {
      id: 'st3',
      title_en: 'Resolution: Strict Implementation of Reservation & Transparent Recruitment Without Paper Leaks',
      title_kn: 'ನಿರ್ಣಯ: ಪರೀಕ್ಷಾ ಪ್ರಶ್ನೆಪತ್ರಿಕೆ ಸೋರಿಕೆ ತಡೆಗಟ್ಟಲು ಕಠಿಣ ಕಾನೂನು ಹಾಗೂ ಪಾರದರ್ಶಕ ಪರೀಕ್ಷಾ ವ್ಯವಸ್ಥೆ',
      refNo: 'DYFI-KAR-RES-2026/04',
      date: '2026-09-19',
      category: 'Recruitment Transparency',
      fileUrl: '#'
    }
  ],

  martyrs: [
    {
      id: 'm1',
      name_en: 'Comrade Shivappa',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಶಿವಪ್ಪ',
      date: '1987',
      district: 'Dakshina Kannada',
      photo: 'images/shivappa.jpg',
      tribute_en: 'Martyred defending agricultural workers rights and opposing communal aggression in coastal Karnataka.',
      tribute_kn: 'ಕರಾವಳಿಯಲ್ಲಿ ಕೂಲಿ ಕಾರ್ಮಿಕರ ಹಕ್ಕುಗಳಿಗಾಗಿ ಹಾಗೂ ಕೋಮುವಾದಿ ಶಕ್ತಿಗಳ ವಿರುದ್ಧ ಹೋರಾಡಿ ಹುತಾತ್ಮರಾದ ಧೀರ ಒಡನಾಡಿ.'
    },
    {
      id: 'm2',
      name_en: 'Comrade Muneer & Comrades',
      name_kn: 'ಹೋರಾಟದ ಹುತಾತ್ಮರು',
      date: '1992',
      district: 'Karnataka State',
      photo: 'images/leader-1.jpg',
      tribute_en: 'Sacrificed their lives fighting for secularism, social dignity, and the unity of the working youth.',
      tribute_kn: 'ಸಾಮಾಜಿಕ ಸಮಾನತೆ, ಸೌಹಾರ್ದತೆ ಮತ್ತು ಯುವಜನರ ಘನತೆಗಾಗಿ ಹೋರಾಟದ ಹಾದಿಯಲ್ಲಿ ಪ್ರಾಣಾರ್ಪಣೆ ಮಾಡಿದ ಚೇತನಗಳು.'
    }
  ],

  leaders: [
    {
      id: 'l1',
      name_en: 'Comrade Lavitra Vastrad',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಲವಿತ್ರ ವಸ್ತ್ರದ',
      role_en: 'State President',
      role_kn: 'ರಾಜ್ಯ ಅಧ್ಯಕ್ಷರು',
      region: 'Karnataka State Committee',
      photo: 'images/lavitra_president.jpg'
    },
    {
      id: 'l2',
      name_en: 'Comrade Santosh Bajal',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಬಜಾಲ್',
      role_en: 'State General Secretary',
      role_kn: 'ರಾಜ್ಯ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ',
      region: 'Karnataka State Committee',
      photo: 'images/santosh_bajal.jpg'
    },
    {
      id: 'l3',
      name_en: 'Comrade Dilip Bangalore',
      name_kn: 'ಕಾಮ್ರೇಡ್ ದಿಲೀಪ್ (ಬೆಂಗಳೂರು)',
      role_en: 'State Treasurer',
      role_kn: 'ರಾಜ್ಯ ಖಜಾಂಚಿ',
      region: 'Karnataka State Committee',
      photo: 'images/dilep.jpg'
    }
  ],

  gallery: [
    { id: 'g1', type: 'image', category: 'rally', src: 'images/gallery-1.jpg', caption_en: 'State Youth Conference Rally', caption_kn: 'ರಾಜ್ಯ ಯುವಜನ ಸಮಾವೇಶದ ಬೃಹತ್ ರ‍್ಯಾಲಿ' },
    { id: 'g2', type: 'image', category: 'health', src: 'images/blood-donation-bg.jpg', caption_en: 'Blood Donation Camp', caption_kn: 'ಸ್ವಯಂಪ್ರೇರಿತ ರಕ್ತದಾನ ಶಿಬಿರ' },
    { id: 'g3', type: 'image', category: 'rally', src: 'images/hero-banner-1.jpg', caption_en: 'Jobs for All March', caption_kn: 'ಉದ್ಯೋಗಕ್ಕಾಗಿ ರಾಜ್ಯಮಟ್ಟದ ಯುವಜನ ಜಾಥಾ' },
    { id: 'g4', type: 'image', category: 'conf', src: 'images/hero-banner-2.jpg', caption_en: 'State Committee Session', caption_kn: 'ರಾಜ್ಯ ಸಮಿತಿ ಪ್ರತಿನಿಧಿಗಳ ಸಭೆ' },
    { id: 'g5', type: 'video', category: 'video', src: 'https://www.youtube.com/embed/fA71Q8b6528', caption_en: 'DYFI State Convention Highlights', caption_kn: 'ಡಿವೈಎಫ್ಐ ರಾಜ್ಯ ಸಮ್ಮೇಳನದ ಪ್ರಮುಖ ದೃಶ್ಯಗಳು' }
  ],

  bloodDonors: [
    { id: 'bd1', name: 'Ramesh Kumar', phone: '9845012345', group: 'O+', district: 'Bengaluru', date: '2026-10-15' },
    { id: 'bd2', name: 'Vinayak Goudar', phone: '8951565792', group: 'B+', district: 'Dakshina Kannada', date: '2026-10-12' },
    { id: 'bd3', name: 'Praveen Shettigar', phone: '9741234567', group: 'A+', district: 'Udupi', date: '2026-10-09' },
    { id: 'bd4', name: 'Manjunath Belagavi', phone: '9448123456', group: 'AB+', district: 'Belagavi', date: '2026-10-05' }
  ],

  messages: [
    { id: 'm1', name: 'Karthik Gowda', phone: '9988776655', district: 'Mysuru', message: 'Want to start a DYFI local village unit in Hunsur taluk. Please connect with district secretary.', date: '2026-10-17', status: 'Unread' },
    { id: 'm2', name: 'Shreya Patil', phone: '9123456780', district: 'Dharwad', message: 'Inquiring about volunteer participation in the upcoming youth cultural rally.', date: '2026-10-16', status: 'Reviewed' }
  ]
};

class DyfiDataStore {
  static get(key) {
    try {
      const data = localStorage.getItem(key);
      if (data) return JSON.parse(data);
    } catch (e) {
      console.warn('Storage read failed for', key, e);
    }

    switch (key) {
      case DYFI_DATA_KEYS.SITE_CONTENT: return DEFAULT_DYFI_DATA.siteContent;
      case DYFI_DATA_KEYS.TICKER: return DEFAULT_DYFI_DATA.ticker;
      case DYFI_DATA_KEYS.NEWS: return DEFAULT_DYFI_DATA.news;
      case DYFI_DATA_KEYS.CAMPAIGNS: return DEFAULT_DYFI_DATA.campaigns;
      case DYFI_DATA_KEYS.STATEMENTS: return DEFAULT_DYFI_DATA.statements;
      case DYFI_DATA_KEYS.MARTYRS: return DEFAULT_DYFI_DATA.martyrs;
      case DYFI_DATA_KEYS.LEADERS: return DEFAULT_DYFI_DATA.leaders;
      case DYFI_DATA_KEYS.GALLERY: return DEFAULT_DYFI_DATA.gallery;
      case DYFI_DATA_KEYS.BLOOD_DONORS: return DEFAULT_DYFI_DATA.bloodDonors;
      case DYFI_DATA_KEYS.MESSAGES: return DEFAULT_DYFI_DATA.messages;
      default: return null;
    }
  }

  static set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('dyfi_data_updated', { detail: { key, value } }));
      }
      return true;
    } catch (e) {
      console.error('Storage write failed for', key, e);
      return false;
    }
  }

  static init() {
    if (typeof localStorage === 'undefined') return;
    Object.keys(DYFI_DATA_KEYS).forEach(k => {
      const storageKey = DYFI_DATA_KEYS[k];
      if (!localStorage.getItem(storageKey)) {
        switch (storageKey) {
          case DYFI_DATA_KEYS.SITE_CONTENT: this.set(storageKey, DEFAULT_DYFI_DATA.siteContent); break;
          case DYFI_DATA_KEYS.TICKER: this.set(storageKey, DEFAULT_DYFI_DATA.ticker); break;
          case DYFI_DATA_KEYS.NEWS: this.set(storageKey, DEFAULT_DYFI_DATA.news); break;
          case DYFI_DATA_KEYS.CAMPAIGNS: this.set(storageKey, DEFAULT_DYFI_DATA.campaigns); break;
          case DYFI_DATA_KEYS.STATEMENTS: this.set(storageKey, DEFAULT_DYFI_DATA.statements); break;
          case DYFI_DATA_KEYS.MARTYRS: this.set(storageKey, DEFAULT_DYFI_DATA.martyrs); break;
          case DYFI_DATA_KEYS.LEADERS: this.set(storageKey, DEFAULT_DYFI_DATA.leaders); break;
          case DYFI_DATA_KEYS.GALLERY: this.set(storageKey, DEFAULT_DYFI_DATA.gallery); break;
          case DYFI_DATA_KEYS.BLOOD_DONORS: this.set(storageKey, DEFAULT_DYFI_DATA.bloodDonors); break;
          case DYFI_DATA_KEYS.MESSAGES: this.set(storageKey, DEFAULT_DYFI_DATA.messages); break;
        }
      }
    });

    // Auto-normalize site content to ensure Kannada corrections take effect immediately
    const sc = this.get(DYFI_DATA_KEYS.SITE_CONTENT);
    if (sc && sc.heroSub_kn) {
      let updated = false;
      if (sc.heroSub_kn.includes('ದನಿ')) {
        sc.heroSub_kn = sc.heroSub_kn.replace(/ದನಿ/g, 'ಧ್ವನಿ');
        updated = true;
      }
      if (sc.heroSub_kn.includes('ಒಕ್ಕೂಟ')) {
        sc.heroSub_kn = sc.heroSub_kn.replace(/ಒಕ್ಕೂಟ/g, 'ಫೆಡರೇಶನ್');
        updated = true;
      }
      if (updated) {
        this.set(DYFI_DATA_KEYS.SITE_CONTENT, sc);
      }
    }
  }

  static resetToDefaults() {
    this.set(DYFI_DATA_KEYS.SITE_CONTENT, DEFAULT_DYFI_DATA.siteContent);
    this.set(DYFI_DATA_KEYS.TICKER, DEFAULT_DYFI_DATA.ticker);
    this.set(DYFI_DATA_KEYS.NEWS, DEFAULT_DYFI_DATA.news);
    this.set(DYFI_DATA_KEYS.CAMPAIGNS, DEFAULT_DYFI_DATA.campaigns);
    this.set(DYFI_DATA_KEYS.STATEMENTS, DEFAULT_DYFI_DATA.statements);
    this.set(DYFI_DATA_KEYS.MARTYRS, DEFAULT_DYFI_DATA.martyrs);
    this.set(DYFI_DATA_KEYS.LEADERS, DEFAULT_DYFI_DATA.leaders);
    this.set(DYFI_DATA_KEYS.GALLERY, DEFAULT_DYFI_DATA.gallery);
    this.set(DYFI_DATA_KEYS.BLOOD_DONORS, DEFAULT_DYFI_DATA.bloodDonors);
    this.set(DYFI_DATA_KEYS.MESSAGES, DEFAULT_DYFI_DATA.messages);
    return true;
  }
}

if (typeof window !== 'undefined') {
  window.DyfiDataStore = DyfiDataStore;
  window.DYFI_DATA_KEYS = DYFI_DATA_KEYS;
  DyfiDataStore.init();
}
