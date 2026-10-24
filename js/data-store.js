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
  AUTH: 'dyfi_kar_admin_auth',
  DISTRICTS: 'dyfi_kar_districts',
  ACTIVITIES: 'dyfi_kar_activities'
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
    officeAddress_en: 'SFI-DYFI OFFICE, C/o: Amma Nilaya, #25, 1st Main Road, 11th Cross, Sampangiramanagara, Bengaluru - 560027.',
    officeAddress_kn: 'ಎಸ್.ಎಫ್.ಐ - ಡಿವೈಎಫ್ಐ ಕಚೇರಿ, ಸಿ/ಒ: ಅಮ್ಮ ನಿಲಯ, #25, 1ನೇ ಮುಖ್ಯ ರಸ್ತೆ, 11ನೇ ಕ್ರಾಸ್, ಸಂಪಂಗಿರಾಮನಗರ, ಬೆಂಗಳೂರು - 560027.',
    phone1: '+91 9449225636',
    phone2: '+91 9481261229',
    landline: '+91 80 2287 4521',
    email: 'dyfikar1980@gmail.com',
    socialFb: 'https://www.facebook.com/share/14nAFsBHkYR/',
    socialInsta: 'https://instagram.com/dyfi_karnataka',
    socialYt: 'https://youtube.com/@dyfikarnataka',
    socialX: 'https://twitter.com/dyfikarnataka',
    videoTitle_en: 'Moments of Struggle: Highlights from State Youth Conventions',
    videoTitle_kn: 'ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಯುವ ಸಮಾವೇಶದ ಪ್ರಮುಖ ಕ್ಷಣಗಳು',
    videoSub_en: 'Live footage capturing thousands of energetic youth, college students, and progressive citizens demanding employment guarantee and public welfare.',
    videoSub_kn: 'ಲಕ್ಷಾಂತರ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಯುವಜನರನ್ನು ಒಗ್ಗೂಡಿಸಿ ಉದ್ಯೋಗ ಮತ್ತು ಶಿಕ್ಷಣಕ್ಕಾಗಿ ನಡೆದ ಬೃಹತ್ ಸಮಾವೇಶದ ನೇರ ದೃಶ್ಯಾವಳಿಗಳು.',
    videoThumb: 'images/hero-banner-1.jpg',
    videoUrl: 'https://youtube.com/@dyfikarnataka'
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
      desc_kn: 'ರಾಜ್ಯ ಸರ್ಕಾರದ 2.5 ಲಕ್ಷ ಖಾಲಿ ಹುದ್ದೆಗಳನ್ನು ತಕ್ಷಣ ಭರ್ತಿ ಮಾಡಲು ಮತ್ತು ಯುವಜನರಿಗೆ ಗೌರವಯುತ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಗೆ ಆಗ್ರಹಿಸಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಬೃಹತ್ ಸಮಾವೇಶ.',
      full_en: 'The Karnataka State Convention of the Democratic Youth Federation of India (DYFI) concluded with a fiery call for an uncompromising struggle against growing youth unemployment and the relentless commercialization of higher education. Delegates representing all 31 district committees participated in the two-day plenary session. The convention unanimously adopted a 10-point Youth Charter of Demands, including immediate recruitment for 2.5 lakh vacant posts in Karnataka government departments, strict criminal penalties for exam paper leak syndicates, affordable bus passes for students, and 80% reservation for local youth in Karnataka industrial corridors. State President Comrade Lavitra Vastrad and State Secretary Comrade Santosh Bajal addressed the massive rally, pledging to take the movement to every village and college campus across Karnataka.',
      full_kn: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ ಸಮಾರೋಪಗೊಂಡ ಭಾರತ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಯುವಜನ ಫೆಡರೇಶನ್ (DYFI) ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಾವೇಶವು, ರಾಜ್ಯದಲ್ಲಿ ಹೆಚ್ಚುತ್ತಿರುವ ನಿರುದ್ಯೋಗ ಮತ್ತು ಶಿಕ್ಷಣದ ವಾಣಿಜ್ಯೀಕರಣದ ವಿರುದ್ಧ ನಿರ್ಣಾಯಕ ಹೋರಾಟಕ್ಕೆ ಕರೆ ನೀಡಿದೆ. ರಾಜ್ಯದ ಎಲ್ಲಾ 31 ಜಿಲ್ಲಾ ಘಟಕಗಳಿಂದ ಆಗಮಿಸಿದ್ದ ನೂರಾರು ಯುವ ಪ್ರತಿನಿಧಿಗಳು ಈ ಐತಿಹಾಸಿಕ ಸಮಾವೇಶದಲ್ಲಿ ಪಾಲ್ಗೊಂಡರು. ರಾಜ್ಯ ಸರ್ಕಾರದ ವಿವಿಧ ಇಲಾಖೆಗಳಲ್ಲಿ ಖಾಲಿ ಇರುವ 2.5 ಲಕ್ಷ ಹುದ್ದೆಗಳನ್ನು ತ್ವರಿತವಾಗಿ ಭರ್ತಿ ಮಾಡುವುದು, ಪ್ರಶ್ನೆಪತ್ರಿಕೆ ಸೋರಿಕೆ ಜಾಲಗಳ ವಿರುದ್ಧ ಕಠಿಣ ಕಾನೂನು ಜಾರಿ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ ಬಸ್ ಪಾಸ್ ಮತ್ತು ಗ್ರಾಮೀಣ ಯುವಕರಿಗೆ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸ್ಥಳೀಯ ಉದ್ಯೋಗ ಮೀಸಲಾತಿಗೆ ಆಗ್ರಹಿಸಿ 10 ಅಂಶಗಳ ಯುವಜನ ಹಕ್ಕುಗಳ ಪ್ರಣಾಳಿಕೆಯನ್ನು ಅಂಗೀಕರಿಸಲಾಯಿತು. ರಾಜ್ಯ ಅಧ್ಯಕ್ಷರಾದ ಕಾಮ್ರೇಡ್ ಲವಿತ್ರ ವಸ್ತ್ರದ ಹಾಗೂ ರಾಜ್ಯ ಕಾರ್ಯದರ್ಶಿ ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಬಜಾಲ್ ಸಮಾವೇಶ ಉದ್ದೇಶಿಸಿ ಮಾತನಾಡಿದರು.'
    },
    {
      id: 'n2',
      title_en: 'Protest March Against Bus Fare Hike and Inadequate Government Hostels in Kalaburagi',
      title_kn: 'ಕಲಬುರಗಿಯಲ್ಲಿ ಬಸ್ ಪಾಸ್ ಸಮಸ್ಯೆ ಹಾಗೂ ಸರ್ಕಾರಿ ವಸತಿ ನಿಲಯಗಳ ಸೌಲಭ್ಯಕ್ಕೆ ಆಗ್ರಹಿಸಿ ಪ್ರತಿಭಟನಾ ಮೆರವಣಿಗೆ',
      category: 'Protest',
      date: '2026-10-08',
      image: 'images/hero-banner-2.jpg',
      desc_en: 'Students and youth united to submit an urgent memorandum to the authorities demanding immediate hostel allocation and bus frequency.',
      desc_kn: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಮರ್ಪಕ ಹಾಸ್ಟೆಲ್ ಸೌಲಭ್ಯ ಹಾಗೂ ಗ್ರಾಮೀಣ ಭಾಗಗಳಿಗೆ ಬಸ್ ಸೌಲಭ್ಯ ಒದಗಿಸಲು ಆಗ್ರಹಿಸಿ ಜಿಲ್ಲಾಧಿಕಾರಿಗಳ ಕಚೇರಿ ಎದುರು ಪ್ರತಿಭಟನೆ.',
      full_en: 'In response to acute accommodation crises faced by rural students, the DYFI Kalaburagi District Committee organized a massive youth rally marching to the District Commissioner office. Students raised slogans demanding an immediate increase in government BCM and Social Welfare hostel intake, timely disbursement of student scholarships, and restoration of rural KSRTC student bus routes that were curtailed. District Secretary Comrade Mallikarjun Halli and President Comrade Sharanu Heroor led the delegation and submitted a detailed memorandum to the Deputy Commissioner, warning of a statewide indefinite hunger strike if demands are ignored.',
      full_kn: 'ಕಲಬುರಗಿ ನಗರದಲ್ಲಿ ಗ್ರಾಮೀಣ ವಿದ್ಯಾರ್ಥಿಗಳು ಎದುರಿಸುತ್ತಿರುವ ಹಾಸ್ಟೆಲ್ ಕೊರತೆ ಮತ್ತು ಬಸ್ ಪಾಸ್ ಸಮಸ್ಯೆಗಳನ್ನು ಖಂಡಿಸಿ ಡಿವೈಎಫ್ಐ ಕಲಬುರಗಿ ಜಿಲ್ಲಾ ಸಮಿತಿಯು ಜಿಲ್ಲಾಧಿಕಾರಿಗಳ ಕಚೇರಿಯ ವರೆಗೆ ಬೃಹತ್ ಪ್ರತಿಭಟನಾ ಮೆರವಣಿಗೆ ನಡೆಸಿತು. ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಮತ್ತು ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆಯ ಹಾಸ್ಟೆಲ್‌ಗಳಲ್ಲಿ ಸೀಟುಗಳ ಸಂಖ್ಯೆ ಹೆಚ್ಚಿಸುವುದು, ವಿದ್ಯಾರ್ಥಿ ವೇತನ ತಕ್ಷಣ ಬಿಡುಗಡೆ ಮಾಡುವುದು ಹಾಗೂ ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಿಗೆ ನಿಯಮಿತ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಬಸ್ ಓಡಿಸಲು ಆಗ್ರಹಿಸಲಾಯಿತು. ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ ಕಾಮ್ರೇಡ್ ಮಲ್ಲಿಕಾರ್ಜುನ ಹಳ್ಳಿ ಹಾಗೂ ಜಿಲ್ಲಾಧ್ಯಕ್ಷ ಕಾಮ್ರೇಡ್ ಶರಣು ಹೀರೂರು ಪ್ರತಿಭಟನೆಯ ನೇತೃತ್ವ ವಹಿಸಿ ಜಿಲ್ಲಾಡಳಿತಕ್ಕೆ ಮನವಿ ಸಲ್ಲಿಸಿದರು.'
    },
    {
      id: 'n3',
      title_en: 'Statewide Blood Donation & Plasma Volunteer Registry Launched by DYFI Health Cell',
      title_kn: 'ಡಿವೈಎಫ್ಐ ಆರೋಗ್ಯ ಘಟಕದಿಂದ ರಾಜ್ಯಮಟ್ಟದ ತುರ್ತು ರಕ್ತದಾನ ಜಾಲ ವಿಸ್ತರಣೆ',
      category: 'Health',
      date: '2026-09-28',
      image: 'images/blood-donation-bg.jpg',
      desc_en: 'Empowering local hospitals with over 5,000 ready voluntary donors during seasonal emergency periods.',
      desc_kn: 'ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ರೋಗಿಗಳಿಗೆ ಉಚಿತ ಹಾಗೂ ತ್ವರಿತ ರಕ್ತ ಒದಗಿಸಲು 5,000ಕ್ಕೂ ಹೆಚ್ಚು ನೋಂದಾಯಿತ ಸ್ವಯಂಸೇವಕರ ನೆಟ್‌ವರ್ಕ್ ಕಾರ್ಯಾಚರಣೆ.',
      full_en: 'To eliminate commercial exploitation and shortages in blood banks during critical medical emergencies, the DYFI Karnataka Health Cell announced the nationwide expansion of its verified Blood Volunteer Registry. Over 5,000 trained youth volunteers from government and private colleges have registered across 31 districts. Through a dedicated 24/7 central telephone hotline (+91 9449225636), patients and their families can obtain voluntary donors within 30 minutes without paying any mediator fees. The helpline has successfully coordinated over 450 emergency transfusions in coastal and northern Karnataka over the last quarter alone.',
      full_kn: 'ತುರ್ತು ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಅಪಘಾತಗಳ ಸಂದರ್ಭದಲ್ಲಿ ರೋಗಿಗಳಿಗೆ ಸಕಾಲದಲ್ಲಿ ರಕ್ತ ಒದಗಿಸುವ ಸದುದ್ದೇಶದಿಂದ ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ಆರೋಗ್ಯ ಘಟಕವು ತನ್ನ ಡಿಜಿಟಲ್ ಸ್ವಯಂಪ್ರೇರಿತ ರಕ್ತದಾನ ಜಾಲವನ್ನು ರಾಜ್ಯಾದ್ಯಂತ ವಿಸ್ತರಿಸಿದೆ. ರಾಜ್ಯದ 31 ಜಿಲ್ಲೆಗಳಿಂದ 5,000ಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಯುವಜನರು ನೋಂದಣಿ ಮಾಡಿಕೊಂಡಿದ್ದಾರೆ. ದಿನದ 24 ಗಂಟೆಯೂ ಕಾರ್ಯಾಚರಿಸುವ ತುರ್ತು ಸಹಾಯವಾಣಿ (+91 9449225636) ಮೂಲಕ ಯಾವುದೇ ರೋಗಿಗೂ ಅರ್ಧ ಗಂಟೆಯೊಳಗೆ ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿ ರಕ್ತದಾನಿಗಳನ್ನು ಒದಗಿಸಲಾಗುತ್ತಿದೆ. ಕಳೆದ ಮೂರು ತಿಂಗಳಲ್ಲಿ ಕರಾವಳಿ ಮತ್ತು ಉತ್ತರ ಕರ್ನಾಟಕ ಭಾಗದಲ್ಲಿ 450ಕ್ಕೂ ಹೆಚ್ಚು ತುರ್ತು ರಕ್ತದಾನ ಪ್ರಕರಣಗಳನ್ನು ಈ ನೆಟ್‌ವರ್ಕ್ ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ವಹಿಸಿದೆ.'
    }
  ],

  activities: [
    {
      id: 'act1',
      title_en: 'Bengaluru State Youth Convention',
      title_kn: 'ಬೆಂಗಳೂರು ರಾಜ್ಯ ಮಟ್ಟದ ಯುವ ಸಮಾವೇಶ',
      date: '2026-08-01',
      badge: 'Activity',
      image: 'images/hero-banner-2.jpg',
      desc_en: 'Thousands of young delegates from all 31 Karnataka districts assembled to formulate proactive youth policies.',
      desc_kn: 'ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳಿಂದ ಸಹಸ್ರಾರು ಯುವ ಪ್ರತಿನಿಧಿಗಳು ಪಾಲ್ಗೊಂಡು ಯುವ ನೀತಿ ಕುರಿತು ಚರ್ಚಿಸಿದ ಐತಿಹಾಸಿಕ ಸಮಾವೇಶ.',
      full_en: 'Thousands of young delegates from all 31 Karnataka districts assembled in Bengaluru to formulate proactive youth policies, discuss unemployment solutions, and strengthen grassroots youth organizing.',
      full_kn: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಡೆದ ರಾಜ್ಯ ಮಟ್ಟದ ಯುವ ಸಮಾವೇಶದಲ್ಲಿ ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳಿಂದ ಸಾವಿರಾರು ಯುವ ಪ್ರತಿನಿಧಿಗಳು ಭಾಗವಹಿಸಿ ಉದ್ಯೋಗ ನೀತಿ, ಶಿಕ್ಷಣ ಮತ್ತು ಯುವಜನರ ಭವಿಷ್ಯದ ಕುರಿತು ಮಹತ್ವದ ನಿರ್ಣಯಗಳನ್ನು ಕೈಗೊಂಡರು.'
    },
    {
      id: 'act2',
      title_en: 'Flood Relief & Rehabilitation Assistance',
      title_kn: 'ಪ್ರವಾಹ ಸಂತ್ರಸ್ತರ ಪುನರ್ವಸತಿ ನೆರವು',
      date: '2026-07-15',
      badge: 'Activity',
      image: 'images/hero-banner-3.jpg',
      desc_en: 'DYFI volunteer squads deployed to distribute relief kits and rehabilitate flood-affected villages in North Karnataka.',
      desc_kn: 'ಉತ್ತರ ಕರ್ನಾಟಕ ಮತ್ತು ಮಲೆನಾಡು ಭಾಗದ ಪ್ರವಾಹ ಪೀಡಿತ ಗ್ರಾಮಗಳಲ್ಲಿ ಡಿವೈಎಫ್ಐ ಸ್ವಯಂಸೇವಕರಿಂದ ಪರಿಹಾರ ಸಾಮಗ್ರಿ ವಿತರಣೆ.',
      full_en: 'DYFI volunteer squads deployed across North Karnataka and Malenadu regions to distribute food, dry rations, medicines, and rebuild shelters for flood-affected families.',
      full_kn: 'ಉತ್ತರ ಕರ್ನಾಟಕ ಹಾಗೂ ಮಲೆನಾಡು ಭಾಗದಲ್ಲಿ ನೆರೆ ಸಂತ್ರಸ್ತರಿಗೆ ನೆರವಾಗಲು ಡಿವೈಎಫ್ಐ ತಂಡಗಳು ಹಗಲಿರುಳು ಶ್ರಮಿಸಿ ಆಹಾರ, ಔಷಧ ಹಾಗೂ ಅಗತ್ಯ ಪರಿಹಾರ ಸಾಮಗ್ರಿಗಳನ್ನು ವಿತರಿಸಿ ಮನೆಗಳ ದುರಸ್ತಿ ಕಾರ್ಯ ಕೈಗೊಂಡವು.'
    },
    {
      id: 'act3',
      title_en: 'Free Public Health Diagnostics Camps',
      title_kn: 'ಉಚಿತ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಮತ್ತು ತಪಾಸಣೆ ಶಿಬಿರ',
      date: '2026-06-28',
      badge: 'Activity',
      image: 'images/gallery-1.jpg',
      desc_en: 'Preventive wellness camps organized in underprivileged areas in collaboration with progressive doctors and institutions.',
      desc_kn: 'ಹಿಂದುಳಿದ ಪ್ರದೇಶಗಳ ಜನರಿಗಾಗಿ ನುರಿತ ವೈದ್ಯರ ಸಹಯೋಗದೊಂದಿಗೆ ಉಚಿತ ತಪಾಸಣೆ ಹಾಗೂ ಔಷಧ ವಿತರಣಾ ಶಿಬಿರಗಳು.',
      full_en: 'Preventive wellness camps organized across rural and working-class settlements providing free diagnostics, general checkups, and free essential medicines.',
      full_kn: 'ಹಿಂದುಳಿದ ಬಡಾವಣೆಗಳು ಹಾಗೂ ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ನುರಿತ ವೈದ್ಯರ ಸಹಕಾರದೊಂದಿಗೆ ಉಚಿತ ಆರೋಗ್ಯ ತಪಾಸಣೆ, ರಕ್ತದೊತ್ತಡ, ಮಧುಮೇಹ ಪರೀಕ್ಷೆ ಹಾಗೂ ಉಚಿತ ಔಷಧ ವಿತರಣಾ ಶಿಬಿರಗಳನ್ನು ಆಯೋಜಿಸಲಾಯಿತು.'
    }
  ],

  campaigns: [
    {
      id: 'c1',
      title_en: 'Youth Against Hate & Communalism',
      title_kn: 'ಕೋಮುವಾದದ ವಿರುದ್ಧ ಯುವಜನರ ಐಕ್ಯತಾ ಅಭಿಯಾನ',
      category: 'Social Justice',
      progress: 85,
      image: 'images/hero-banner-1.jpg',
      desc_en: 'Organizing street theater, peace rallies, and youth brotherhood camps across sensitive zones.',
      desc_kn: 'ಕೋಮು ಸೌಹಾರ್ದತೆ ಮತ್ತು ಭ್ರಾತೃತ್ವವನ್ನು ಎತ್ತಿಹಿಡಿಯಲು ರಾಜ್ಯದಾದ್ಯಂತ ಬೀದಿನಾಟಕ, ಸೌಹಾರ್ದ ಕೂಟ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಜಥಾಗಳು.',
      full_en: 'DYFI Karnataka is conducting an extensive grassroots awareness campaign against divisive politics and hate-mongering. The campaign organizes street plays, secular cultural festivals, and community friendship dialogues in sensitive taluks of coastal and malnad regions. Youth from all communities pledge solidarity to defend the Constitution, uphold interfaith harmony, and safeguard democratic freedoms.',
      full_kn: 'ದ್ವೇಷ ರಾಜಕಾರಣ ಮತ್ತು ಕೋಮುವಾದಿ ಶಕ್ತಿಗಳ ವಿರುದ್ಧ ಯುವಜನತೆಯನ್ನು ಸಂಘಟಿಸಲು ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿಯು ನಿರಂತರ ಜಾಗೃತಿ ಅಭಿಯಾನ ನಡೆಸುತ್ತಿದೆ. ಕರಾವಳಿ ಹಾಗೂ ಮಲೆನಾಡಿನ ಸೂಕ್ಷ್ಮ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬೀದಿನಾಟಕಗಳು, ಸೌಹಾರ್ದ ಯುವ ಸಮ್ಮೇಳನಗಳು ಹಾಗೂ ಭ್ರಾತೃತ್ವ ಜಾತಾಗಳನ್ನು ಆಯೋಜಿಸುವ ಮೂಲಕ ಸಂವಿಧಾನದ ಮೌಲ್ಯಗಳು, ಜಾತ್ಯತೀತತೆ ಮತ್ತು ಸಹಬಾಳ್ವೆಯನ್ನು ರಕ್ಷಿಸಲು ಯುವಪಡೆಯನ್ನು ಒಗ್ಗೂಡಿಸಲಾಗುತ್ತಿದೆ.',
      status: 'Active'
    },
    {
      id: 'c2',
      title_en: 'Jobs for All — Right to Work Movement',
      title_kn: 'ಉದ್ಯೋಗ ನಮ್ಮ ಹಕ್ಕು — ಖಾಲಿ ಹುದ್ದೆಗಳ ಭರ್ತಿಗೆ ಹೋರಾಟ',
      category: 'Employment',
      progress: 90,
      image: 'images/hero-banner-2.jpg',
      desc_en: 'Demanding legal guarantee for employment and unconditional unemployment allowance for job seekers.',
      desc_kn: 'ಸರ್ಕಾರಿ ಖಾಲಿ ಹುದ್ದೆಗಳ ತ್ವರಿತ ನೇಮಕಾತಿ ಹಾಗೂ ನಿರುದ್ಯೋಗಿ ಯುವಕರಿಗೆ ಮಾಸಿಕ ನಿರುದ್ಯೋಗ ಭತ್ಯೆಗೆ ಆಗ್ರಹ.',
      full_en: 'With over 2.5 lakh government posts remaining vacant in Karnataka schools, hospitals, and administrative departments, DYFI has launched a historic statewide movement for employment rights. Demands include timely recruitment calendars, local reservation in industries, abolishment of contract labor for perennial jobs, and monthly unemployment allowance for educated youth seeking jobs.',
      full_kn: 'ಕರ್ನಾಟಕದ ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ ಮತ್ತು ಕಂದಾಯ ಇಲಾಖೆಗಳಲ್ಲಿ ಖಾಲಿ ಇರುವ 2.5 ಲಕ್ಷ ಹುದ್ದೆಗಳನ್ನು ವಿಳಂಬವಿಲ್ಲದೆ ಭರ್ತಿ ಮಾಡಲು ಮತ್ತು ಯುವಜನರಿಗೆ ಉದ್ಯೋಗದ ಹಕ್ಕನ್ನು ಶಾಸನಬದ್ಧವಾಗಿ ಖಾತರಿಪಡಿಸಲು ಡಿವೈಎಫ್ಐ ನಡೆಸುತ್ತಿರುವ ಬೃಹತ್ ಚಳವಳಿ. ಗುತ್ತಿಗೆ ಪದ್ಧತಿ ರದ್ದತಿ, ಸ್ಥಳೀಯ ಯುವಕರಿಗೆ ಕೈಗಾರಿಕೆಗಳಲ್ಲಿ ಮೀಸಲಾತಿ ಹಾಗೂ ಉದ್ಯೋಗ ಸಿಗುವವರೆಗೆ ಗೌರವಯುತ ನಿರುದ್ಯೋಗ ಭತ್ಯೆ ನೀಡಲು ಈ ಅಭಿಯಾನದ ಮೂಲಕ ಸರ್ಕಾರಕ್ಕೆ ಆಗ್ರಹಿಸಲಾಗುತ್ತಿದೆ.',
      status: 'Active'
    },
    {
      id: 'c3',
      title_en: 'Anti-Drug & De-addiction Youth Network',
      title_kn: 'ಮಾದಕ ದ್ರವ್ಯ ಮುಕ್ತ ಸಮಾಜಕ್ಕಾಗಿ ಯುವ ಕಾವಲು',
      category: 'Health & Youth',
      progress: 75,
      image: 'images/hero-banner-3.jpg',
      desc_en: 'Partnering with educational institutions to raise awareness, counsel victims, and shut illegal outlets.',
      desc_kn: 'ಕಾಲೇಜು ಆವರಣಗಳಲ್ಲಿ ಡ್ರಗ್ಸ್ ಮಾಫಿಯಾ ವಿರುದ್ಧ ಜಾಗೃತಿ ಹಾಗೂ ವ್ಯಸನಮುಕ್ತ ಕೌನ್ಸೆಲಿಂಗ್ ಶಿಬಿರಗಳು.',
      full_en: 'Protecting students from the menace of narcotics and organized drug rackets. DYFI youth vigilance committees operate near colleges and hostels, conducting interactive de-addiction awareness sessions, sports tournaments, and providing psychological counseling for recovering victims with full confidentiality.',
      full_kn: 'ಶಾಲಾ-ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಮಾದಕ ದ್ರವ್ಯ ವ್ಯಸನದಿಂದ ರಕ್ಷಿಸಲು ಮತ್ತು ಡ್ರಗ್ಸ್ ಮಾಫಿಯಾವನ್ನು ಬುಡಸಮೇತ ಕಿತ್ತೊಗೆಯಲು ಡಿವೈಎಫ್ಐ ಯುವ ಕಾವಲು ಪಡೆಗಳು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿವೆ. ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಜಾಗೃತಿ ಮೂಡಿಸಲು ಕ್ರೀಡಾಕೂಟಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಹಾಗೂ ಉಚಿತ ಕೌನ್ಸೆಲಿಂಗ್ ಶಿಬಿರಗಳನ್ನು ಕಾಲೇಜುಗಳ ಸಹಯೋಗದೊಂದಿಗೆ ನಿರಂತರವಾಗಿ ನಡೆಸಲಾಗುತ್ತಿದೆ.',
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
      name_en: 'Comrade Shivappa Kotian',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಶಿವಪ್ಪ ಕೋಟ್ಯಾನ್',
      date: '1987',
      district: 'Dakshina Kannada',
      photo: 'images/shivappa.jpg',
      tribute_en: 'Martyred defending agricultural workers rights and opposing communal aggression in coastal Karnataka.',
      tribute_kn: 'ಕರಾವಳಿಯಲ್ಲಿ ಕೂಲಿ ಕಾರ್ಮಿಕರ ಹಕ್ಕುಗಳಿಗಾಗಿ ಹಾಗೂ ಕೋಮುವಾದಿ ಶಕ್ತಿಗಳ ವಿರುದ್ಧ ಹೋರಾಡಿ ಹುತಾತ್ಮರಾದ ಧೀರ ಒಡನಾಡಿ.'
    },
    {
      id: 'm2',
      name_en: 'Comrade Muneer & Comrades',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಮುನೀರ್ ಮತ್ತು ಒಡನಾಡಿಗಳು',
      date: '1992',
      district: 'Karnataka State',
      photo: '',
      tribute_en: 'Sacrificed their lives fighting for secularism, social dignity, and the unity of the working youth.',
      tribute_kn: 'ಸಾಮಾಜಿಕ ಸಮಾನತೆ, ಸೌಹಾರ್ದತೆ ಮತ್ತು ಯುವಜನರ ಘನತೆಗಾಗಿ ಹೋರಾಟದ ಹಾದಿಯಲ್ಲಿ ಪ್ರಾಣಾರ್ಪಣೆ ಮಾಡಿದ ಚೇತನಗಳು.'
    }
  ],

  leaders: [
    {
      id: 'nl1',
      name_en: 'Comrade A. A. Rahim',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಎ. ಎ. ರಹೀಮ್',
      role_en: 'All India President (National President)',
      role_kn: 'ಅಖಿಲ ಭಾರತ ಅಧ್ಯಕ್ಷರು (ರಾಷ್ಟ್ರೀಯ ಅಧ್ಯಕ್ಷರು)',
      tier: 'national',
      region: 'DYFI All India Centre',
      photo: ''
    },
    {
      id: 'nl2',
      name_en: 'Comrade Himagnoraj Bhattacharya',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಹಿಮಾಘ್ನರಾಜ್ ಭಟ್ಟಾಚಾರ್ಯ',
      role_en: 'All India General Secretary (National General Secretary)',
      role_kn: 'ಅಖಿಲ ಭಾರತ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ',
      tier: 'national',
      region: 'DYFI All India Centre',
      photo: ''
    },
    {
      id: 'l1',
      name_en: 'Comrade Lavitra Vastrad',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಲವಿತ್ರ ವಸ್ತ್ರದ',
      role_en: 'State President',
      role_kn: 'ರಾಜ್ಯ ಅಧ್ಯಕ್ಷರು',
      tier: 'state',
      region: 'Karnataka State Committee',
      photo: 'images/lavitra_president.jpg'
    },
    {
      id: 'l2',
      name_en: 'Comrade Santosh Bajal',
      name_kn: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಬಜಾಲ್',
      role_en: 'State General Secretary',
      role_kn: 'ರಾಜ್ಯ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ',
      tier: 'state',
      region: 'Karnataka State Committee',
      photo: 'images/santosh_bajal.jpg'
    },
    {
      id: 'l3',
      name_en: 'Comrade Dilip Bangalore',
      name_kn: 'ಕಾಮ್ರೇಡ್ ದಿಲೀಪ್ (ಬೆಂಗಳೂರು)',
      role_en: 'State Treasurer',
      role_kn: 'ರಾಜ್ಯ ಖಜಾಂಚಿ',
      tier: 'state',
      region: 'Karnataka State Committee',
      photo: 'images/dilep.jpg'
    }
  ],

  gallery: [
    { id: 'g1', type: 'image', category: 'rally', src: 'images/gallery-1.jpg', caption_en: 'State Youth Conference Rally', caption_kn: 'ರಾಜ್ಯ ಯುವಜನ ಸಮಾವೇಶದ ಬೃಹತ್ ರ‍್ಯಾಲಿ' },
    { id: 'g2', type: 'image', category: 'health', src: 'images/blood-donation-bg.jpg', caption_en: 'Voluntary Blood Donation Camp', caption_kn: 'ಸ್ವಯಂಪ್ರೇರಿತ ರಕ್ತದಾನ ಶಿಬಿರ' },
    { id: 'g3', type: 'image', category: 'rally', src: 'images/hero-banner-1.jpg', caption_en: 'Jobs for All Youth March', caption_kn: 'ಉದ್ಯೋಗಕ್ಕಾಗಿ ರಾಜ್ಯಮಟ್ಟದ ಯುವಜನ ಜಾಥಾ' },
    { id: 'g4', type: 'image', category: 'conf', src: 'images/hero-banner-2.jpg', caption_en: 'State Committee Session', caption_kn: 'ರಾಜ್ಯ ಸಮಿತಿ ಪ್ರತಿನಿಧಿಗಳ ಸಭೆ' },
    { id: 'g5', type: 'image', category: 'relief', src: 'images/hero-banner-3.jpg', caption_en: 'Volunteer Relief Operations', caption_kn: 'ಸ್ವಯಂಸೇವಕ ಪ್ರವಾಹ ಪರಿಹಾರ ಕಾರ್ಯ' },
    { id: 'g6', type: 'image', category: 'conf', src: 'images/leader-1.jpg', caption_en: 'Youth Assembly Address', caption_kn: 'ಯುವಜನ ಸಮಾವೇಶದ ಸಾರ್ವಜನಿಕ ಭಾಷಣ' },
    { id: 'g7', type: 'image', category: 'rally', src: 'images/lavitra_president.jpg', caption_en: 'Constitutional Rights Rally', caption_kn: 'ಸಂವಿಧಾನ ರಕ್ಷಣಾ ಜಾಗೃತಿ ಜಾಥಾ' },
    { id: 'g8', type: 'image', category: 'conf', src: 'images/santosh_bajal.jpg', caption_en: 'District Office Bearers Conference', caption_kn: 'ಜಿಲ್ಲಾ ಪದಾಧಿಕಾರಿಗಳ ಸಮ್ಮೇಳನ' }
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
  ],

  districts: [
    // 1. COASTAL ZONE (ಕರಾವಳಿ ವಿಭಾಗ)
    {
      id: 'dk',
      zone: 'coastal',
      zone_en: 'Coastal Zone',
      zone_kn: 'ಕರಾವಳಿ ವಿಭಾಗ',
      name_en: 'Dakshina Kannada',
      name_kn: 'ದಕ್ಷಿಣ ಕನ್ನಡ',
      taluks_count: 8,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಮಂಗಳೂರು ನಗರ', name_en: 'Mangaluru City', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಉಳ್ಳಾಲ', name_en: 'Ullal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬಂಟ್ವಾಳ', name_en: 'Bantwal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬೆಳ್ತಂಗಡಿ', name_en: 'Belthangady', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಪುತ್ತೂರು', name_en: 'Puttur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸುಳ್ಯ', name_en: 'Sullia', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಡಬ', name_en: 'Kadaba', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮೂಡುಬಿದಿರೆ', name_en: 'Moodbidri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Mangaluru City', 'Ullal', 'Bantwal', 'Belthangady', 'Puttur', 'Sullia', 'Kadaba', 'Moodbidri'],
      taluks_kn: ['ಮಂಗಳೂರು ನಗರ', 'ಉಳ್ಳಾಲ', 'ಬಂಟ್ವಾಳ', 'ಬೆಳ್ತಂಗಡಿ', 'ಪುತ್ತೂರು', 'ಸುಳ್ಯ', 'ಕಡಬ', 'ಮೂಡುಬಿದಿರೆ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'udupi',
      zone: 'coastal',
      zone_en: 'Coastal Zone',
      zone_kn: 'ಕರಾವಳಿ ವಿಭಾಗ',
      name_en: 'Udupi District',
      name_kn: 'ಉಡುಪಿ ಜಿಲ್ಲೆ',
      taluks_count: 7,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಉಡುಪಿ', name_en: 'Udupi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕುಂದಾಪುರ', name_en: 'Kundapura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಾರ್ಕಳ', name_en: 'Karkala', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬ್ರಹ್ಮಾವರ', name_en: 'Brahmavara', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬೈಂದೂರು', name_en: 'Byndoor', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಾಪು', name_en: 'Kaup', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೆಬ್ರಿ', name_en: 'Hebri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Udupi', 'Kundapura', 'Karkala', 'Brahmavara', 'Byndoor', 'Kaup', 'Hebri'],
      taluks_kn: ['ಉಡುಪಿ', 'ಕುಂದಾಪುರ', 'ಕಾರ್ಕಳ', 'ಬ್ರಹ್ಮಾವರ', 'ಬೈಂದೂರು', 'ಕಾಪು', 'ಹೆಬ್ರಿ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'uttara-kannada',
      zone: 'coastal',
      zone_en: 'Coastal Zone',
      zone_kn: 'ಕರಾವಳಿ ವಿಭಾಗ',
      name_en: 'Uttara Kannada',
      name_kn: 'ಉತ್ತರ ಕನ್ನಡ',
      taluks_count: 11,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಕಾರವಾರ', name_en: 'Karwar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಅಂಕೋಲಾ', name_en: 'Ankola', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕುಮಟಾ', name_en: 'Kumta', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೊನ್ನಾವರ', name_en: 'Honnavar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಭಟ್ಕಳ', name_en: 'Bhatkal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶಿರಸಿ', name_en: 'Sirsi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಿದ್ಧಾಪುರ', name_en: 'Siddapur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಯಲ್ಲಾಪುರ', name_en: 'Yellapur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹಳಿಯಾಳ', name_en: 'Haliyal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಜೋಯಿಡಾ', name_en: 'Joida', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ದಾಂಡೇಲಿ', name_en: 'Dandeli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Karwar', 'Ankola', 'Kumta', 'Honnavar', 'Bhatkal', 'Sirsi', 'Siddapur', 'Yellapur', 'Haliyal', 'Joida', 'Dandeli'],
      taluks_kn: ['ಕಾರವಾರ', 'ಅಂಕೋಲಾ', 'ಕುಮಟಾ', 'ಹೊನ್ನಾವರ', 'ಭಟ್ಕಳ', 'ಶಿರಸಿ', 'ಸಿದ್ಧಾಪುರ', 'ಯಲ್ಲಾಪುರ', 'ಹಳಿಯಾಳ', 'ಜೋಯಿಡಾ', 'ದಾಂಡೇಲಿ'],
      area_units_kn: '',
      area_units_en: ''
    },

    // 2. BENGALURU REGION (ಬೆಂಗಳೂರು ವಿಭಾಗ)
    {
      id: 'bengaluru-urban',
      zone: 'bengaluru',
      zone_en: 'Bengaluru Region',
      zone_kn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ',
      name_en: 'Bengaluru Urban',
      name_kn: 'ಬೆಂಗಳೂರು ನಗರ',
      taluks_count: 5,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಬೆಂಗಳೂರು ಉತ್ತರ', name_en: 'Bengaluru North', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬೆಂಗಳೂರು ದಕ್ಷಿಣ', name_en: 'Bengaluru South', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬೆಂಗಳೂರು ಪೂರ್ವ', name_en: 'Bengaluru East', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಆನೇಕಲ್', name_en: 'Anekal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಯಲಹಂಕ', name_en: 'Yelahanka', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Bengaluru North', 'Bengaluru South', 'Bengaluru East', 'Anekal', 'Yelahanka'],
      taluks_kn: ['ಬೆಂಗಳೂರು ಉತ್ತರ', 'ಬೆಂಗಳೂರು ದಕ್ಷಿಣ', 'ಬೆಂಗಳೂರು ಪೂರ್ವ', 'ಆನೇಕಲ್', 'ಯಲಹಂಕ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'bengaluru-rural',
      zone: 'bengaluru',
      zone_en: 'Bengaluru Region',
      zone_kn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ',
      name_en: 'Bengaluru Rural',
      name_kn: 'ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ',
      taluks_count: 4,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ದೇವನಹಳ್ಳಿ', name_en: 'Devanahalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ದೊಡ್ಡಬಳ್ಳಾಪುರ', name_en: 'Doddaballapura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೊಸಕೋಟೆ', name_en: 'Hoskote', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನೆಲಮಂಗಲ', name_en: 'Nelamangala', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Devanahalli', 'Doddaballapura', 'Hoskote', 'Nelamangala'],
      taluks_kn: ['ದೇವನಹಳ್ಳಿ', 'ದೊಡ್ಡಬಳ್ಳಾಪುರ', 'ಹೊಸಕೋಟೆ', 'ನೆಲಮಂಗಲ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'ramanagara',
      zone: 'bengaluru',
      zone_en: 'Bengaluru Region',
      zone_kn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ',
      name_en: 'Ramanagara',
      name_kn: 'ರಾಮನಗರ',
      taluks_count: 5,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ರಾಮನಗರ', name_en: 'Ramanagara', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚನ್ನಪಟ್ಟಣ', name_en: 'Channapatna', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮಾಗಡಿ', name_en: 'Magadi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕನಕಪುರ', name_en: 'Kanakapura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹಾರೋಹಳ್ಳಿ', name_en: 'Harohalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Ramanagara', 'Channapatna', 'Magadi', 'Kanakapura', 'Harohalli'],
      taluks_kn: ['ರಾಮನಗರ', 'ಚನ್ನಪಟ್ಟಣ', 'ಮಾಗಡಿ', 'ಕನಕಪುರ', 'ಹಾರೋಹಳ್ಳಿ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'kolar',
      zone: 'bengaluru',
      zone_en: 'Bengaluru Region',
      zone_kn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ',
      name_en: 'Kolar',
      name_kn: 'ಕೋಲಾರ',
      taluks_count: 6,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಕೋಲಾರ', name_en: 'Kolar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬಂಗಾರಪೇಟೆ', name_en: 'Bangarapet', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮಾಲೂರು', name_en: 'Malur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮುಳಬಾಗಿಲು', name_en: 'Mulbagal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶ್ರೀನಿವಾಸಪುರ', name_en: 'Srinivaspur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೆ.ಜಿ.ಎಫ್', name_en: 'KGF', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Kolar', 'Bangarapet', 'Malur', 'Mulbagal', 'Srinivaspur', 'KGF'],
      taluks_kn: ['ಕೋಲಾರ', 'ಬಂಗಾರಪೇಟೆ', 'ಮಾಲೂರು', 'ಮುಳಬಾಗಿಲು', 'ಶ್ರೀನಿವಾಸಪುರ', 'ಕೆ.ಜಿ.ಎಫ್'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'chikkaballapura',
      zone: 'bengaluru',
      zone_en: 'Bengaluru Region',
      zone_kn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ',
      name_en: 'Chikkaballapura',
      name_kn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ',
      taluks_count: 6,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಚಿಕ್ಕಬಳ್ಳಾಪುರ', name_en: 'Chikkaballapura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬಾಗೇಪಲ್ಲಿ', name_en: 'Bagepalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚಿಂತಾಮಣಿ', name_en: 'Chintamani', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗೌರಿಬಿದನೂರು', name_en: 'Gauribidanur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗುಡಿಬಂಡೆ', name_en: 'Gudibande', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶಿಡ್ಲಘಟ್ಟ', name_en: 'Sidlaghatta', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Chikkaballapura', 'Bagepalli', 'Chintamani', 'Gauribidanur', 'Gudibande', 'Sidlaghatta'],
      taluks_kn: ['ಚಿಕ್ಕಬಳ್ಳಾಪುರ', 'ಬಾಗೇಪಲ್ಲಿ', 'ಚಿಂತಾಮಣಿ', 'ಗೌರಿಬಿದನೂರು', 'ಗುಡಿಬಂಡೆ', 'ಶಿಡ್ಲಘಟ್ಟ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'tumakuru',
      zone: 'bengaluru',
      zone_en: 'Bengaluru Region',
      zone_kn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ',
      name_en: 'Tumakuru',
      name_kn: 'ತುಮಕೂರು',
      taluks_count: 10,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ತುಮಕೂರು', name_en: 'Tumakuru', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚಿಕ್ಕನಾಯಕನಹಳ್ಳಿ', name_en: 'Chiknayakanhalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗುಬ್ಬಿ', name_en: 'Gubbi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೊರಟಗೆರೆ', name_en: 'Koratagere', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕುಣಿಗಲ್', name_en: 'Kunigal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮಧುಗಿರಿ', name_en: 'Madhugiri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಪಾವಗಡ', name_en: 'Pavagada', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶಿರಾ', name_en: 'Sira', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ತಿಪಟೂರು', name_en: 'Tiptur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ತುರುವೇಕೆರೆ', name_en: 'Turuvekere', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Tumakuru', 'Chiknayakanhalli', 'Gubbi', 'Koratagere', 'Kunigal', 'Madhugiri', 'Pavagada', 'Sira', 'Tiptur', 'Turuvekere'],
      taluks_kn: ['ತುಮಕೂರು', 'ಚಿಕ್ಕನಾಯಕನಹಳ್ಳಿ', 'ಗುಬ್ಬಿ', 'ಕೊರಟಗೆರೆ', 'ಕುಣಿಗಲ್', 'ಮಧುಗಿರಿ', 'ಪಾವಗಡ', 'ಶಿರಾ', 'ತಿಪಟೂರು', 'ತುರುವೇಕೆರೆ'],
      area_units_kn: '',
      area_units_en: ''
    },

    // 3. MYSURU REGION (ಮೈಸೂರು ವಿಭಾಗ)
    {
      id: 'mysuru',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Mysuru District',
      name_kn: 'ಮೈಸೂರು ಜಿಲ್ಲೆ',
      taluks_count: 8,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಮೈಸೂರು ನಗರ/ತಾಲ್ಲೂಕು', name_en: 'Mysuru Taluk', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನಂಜನಗೂಡು', name_en: 'Nanjangud', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹುಣಸೂರು', name_en: 'Hunsur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಪಿರಿಯಾಪಟ್ಟಣ', name_en: 'Piriyapatna', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೆ.ಆರ್. ನಗರ', name_en: 'K.R. Nagar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಟಿ. ನರಸೀಪುರ', name_en: 'T. Narasipura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸರಗೂರು', name_en: 'Saragur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಾಲಿಗ್ರಾಮ', name_en: 'Saligrama', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Mysuru Taluk', 'Nanjangud', 'Hunsur', 'Piriyapatna', 'K.R. Nagar', 'T. Narasipura', 'Saragur', 'Saligrama'],
      taluks_kn: ['ಮೈಸೂರು ತಾಲ್ಲೂಕು', 'ನಂಜನಗೂಡು', 'ಹುಣಸೂರು', 'ಪಿರಿಯಾಪಟ್ಟಣ', 'ಕೆ.ಆರ್. ನಗರ', 'ಟಿ. ನರಸೀಪುರ', 'ಸರಗೂರು', 'ಸಾಲಿಗ್ರಾಮ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'mandya',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Mandya',
      name_kn: 'ಮಂಡ್ಯ',
      taluks_count: 7,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಮಂಡ್ಯ', name_en: 'Mandya', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮದ್ದೂರು', name_en: 'Maddur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮಳವಳ್ಳಿ', name_en: 'Malavalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಪಾಂಡವಪುರ', name_en: 'Pandavapura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶ್ರೀರಂಗಪಟ್ಟಣ', name_en: 'Srirangapatna', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನಾಗಮಂಗಲ', name_en: 'Nagamangala', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೆ.ಆರ್. ಪೇಟೆ', name_en: 'K.R. Pete', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Mandya', 'Maddur', 'Malavalli', 'Pandavapura', 'Srirangapatna', 'Nagamangala', 'K.R. Pete'],
      taluks_kn: ['ಮಂಡ್ಯ', 'ಮದ್ದೂರು', 'ಮಳವಳ್ಳಿ', 'ಪಾಂಡವಪುರ', 'ಶ್ರೀರಂಗಪಟ್ಟಣ', 'ನಾಗಮಂಗಲ', 'ಕೆ.ಆರ್. ಪೇಟೆ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'hassan',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Hassan',
      name_kn: 'ಹಾಸನ',
      taluks_count: 8,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಹಾಸನ', name_en: 'Hassan', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಆಲೂರು', name_en: 'Alur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಅರಕಲಗೂಡು', name_en: 'Arkalgud', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಅರಸೀಕೆರೆ', name_en: 'Arsikere', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬೇಲೂರು', name_en: 'Belur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚನ್ನರಾಯಪಟ್ಟಣ', name_en: 'Channarayapatna', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೊಳೆನರಸೀಪುರ', name_en: 'Holenarasipura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಕಲೇಶಪುರ', name_en: 'Sakleshpur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Hassan', 'Alur', 'Arkalgud', 'Arsikere', 'Belur', 'Channarayapatna', 'Holenarasipura', 'Sakleshpur'],
      taluks_kn: ['ಹಾಸನ', 'ಆಲೂರು', 'ಅರಕಲಗೂಡು', 'ಅರಸೀಕೆರೆ', 'ಬೇಲೂರು', 'ಚನ್ನರಾಯಪಟ್ಟಣ', 'ಹೊಳೆನರಸೀಪುರ', 'ಸಕಲೇಶಪುರ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'chamarajanagar',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Chamarajanagar',
      name_kn: 'ಚಾಮರಾಜನಗರ',
      taluks_count: 5,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಚಾಮರಾಜನಗರ', name_en: 'Chamarajanagar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗುಂಡ್ಲುಪೇಟೆ', name_en: 'Gundlupet', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೊಳ್ಳೇಗಾಲ', name_en: 'Kollegal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಯಳಂದೂರು', name_en: 'Yelandur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹನೂರು', name_en: 'Hanur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Chamarajanagar', 'Gundlupet', 'Kollegal', 'Yelandur', 'Hanur'],
      taluks_kn: ['ಚಾಮರಾಜನಗರ', 'ಗುಂಡ್ಲುಪೇಟೆ', 'ಕೊಳ್ಳೇಗಾಲ', 'ಯಳಂದೂರು', 'ಹನೂರು'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'kodagu',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Kodagu',
      name_kn: 'ಕೊಡಗು',
      taluks_count: 5,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಮಡಿಕೇರಿ', name_en: 'Madikeri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸೋಮವಾರಪೇಟೆ', name_en: 'Somwarpet', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ವಿರಾಜಪೇಟೆ', name_en: 'Virajpet', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕುಶಾಲನಗರ', name_en: 'Kushalnagar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಪೊನ್ನಂಪೇಟೆ', name_en: 'Ponnampet', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Madikeri', 'Somwarpet', 'Virajpet', 'Kushalnagar', 'Ponnampet'],
      taluks_kn: ['ಮಡಿಕೇರಿ', 'ಸೋಮವಾರಪೇಟೆ', 'ವಿರಾಜಪೇಟೆ', 'ಕುಶಾಲನಗರ', 'ಪೊನ್ನಂಪೇಟೆ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'chikkamagaluru',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Chikkamagaluru',
      name_kn: 'ಚಿಕ್ಕಮಗಳೂರು',
      taluks_count: 8,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಚಿಕ್ಕಮಗಳೂರು', name_en: 'Chikkamagaluru', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಡೂರು', name_en: 'Kadur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ತರೀಕೆರೆ', name_en: 'Tarikere', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮೂಡಿಗೆರೆ', name_en: 'Mudigere', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶೃಂಗೇರಿ', name_en: 'Sringeri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೊಪ್ಪ', name_en: 'Koppa', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನರಸಿಂಹರಾಜಪುರ', name_en: 'Narasimharajapura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಅಜ್ಜಂಪುರ', name_en: 'Ajjampura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Chikkamagaluru', 'Kadur', 'Tarikere', 'Mudigere', 'Sringeri', 'Koppa', 'Narasimharajapura', 'Ajjampura'],
      taluks_kn: ['ಚಿಕ್ಕಮಗಳೂರು', 'ಕಡೂರು', 'ತರೀಕೆರೆ', 'ಮೂಡಿಗೆರೆ', 'ಶೃಂಗೇರಿ', 'ಕೊಪ್ಪ', 'ನರಸಿಂಹರಾಜಪುರ', 'ಅಜ್ಜಂಪುರ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'shivamogga',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Shivamogga District',
      name_kn: 'ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ',
      taluks_count: 7,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಶಿವಮೊಗ್ಗ ನಗರ', name_en: 'Shivamogga', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಭದ್ರಾವತಿ', name_en: 'Bhadravathi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಾಗರ', name_en: 'Sagara', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶಿಕಾರಿಪುರ', name_en: 'Shikaripura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸೊರಬ', name_en: 'Soraba', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ತೀರ್ಥಹಳ್ಳಿ', name_en: 'Thirthahalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೊಸನಗರ', name_en: 'Hosanagara', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Shivamogga', 'Bhadravathi', 'Sagara', 'Shikaripura', 'Soraba', 'Thirthahalli', 'Hosanagara'],
      taluks_kn: ['ಶಿವಮೊಗ್ಗ', 'ಭದ್ರಾವತಿ', 'ಸಾಗರ', 'ಶಿಕಾರಿಪುರ', 'ಸೊರಬ', 'ತೀರ್ಥಹಳ್ಳಿ', 'ಹೊಸನಗರ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'davanagere',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Davanagere',
      name_kn: 'ದಾವಣಗೆರೆ',
      taluks_count: 6,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ದಾವಣಗೆರೆ', name_en: 'Davanagere', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹರಿಹರ', name_en: 'Harihara', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೊನ್ನಾಳಿ', name_en: 'Honnali', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚನ್ನಗಿರಿ', name_en: 'Channagiri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನ್ಯಾಮತಿ', name_en: 'Nyamathi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಜಗಳೂರು', name_en: 'Jagalur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Davanagere', 'Harihara', 'Honnali', 'Channagiri', 'Nyamathi', 'Jagalur'],
      taluks_kn: ['ದಾವಣಗೆರೆ', 'ಹರಿಹರ', 'ಹೊನ್ನಾಳಿ', 'ಚನ್ನಗಿರಿ', 'ನ್ಯಾಮತಿ', 'ಜಗಳೂರು'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'chitradurga',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Chitradurga',
      name_kn: 'ಚಿತ್ರದುರ್ಗ',
      taluks_count: 6,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಚಿತ್ರದುರ್ಗ', name_en: 'Chitradurga', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚಳ್ಳಕೆರೆ', name_en: 'Challakere', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹಿರಿಯೂರು', name_en: 'Hiriyur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೊಳಲ್ಕೆರೆ', name_en: 'Holalkere', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೊಸದುರ್ಗ', name_en: 'Hosadurga', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮೊಳಕಾಲ್ಮುರು', name_en: 'Molakalmuru', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Chitradurga', 'Challakere', 'Hiriyur', 'Holalkere', 'Hosadurga', 'Molakalmuru'],
      taluks_kn: ['ಚಿತ್ರದುರ್ಗ', 'ಚಳ್ಳಕೆರೆ', 'ಹಿರಿಯೂರು', 'ಹೊಳಲ್ಕೆರೆ', 'ಹೊಸದುರ್ಗ', 'ಮೊಳಕಾಲ್ಮುರು'],
      area_units_kn: '',
      area_units_en: ''
    },

    // 4. KALYANA KARNATAKA (ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ)
    {
      id: 'kalaburagi',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Kalaburagi District',
      name_kn: 'ಕಲಬುರಗಿ ಜಿಲ್ಲೆ',
      taluks_count: 10,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಕಲಬುರಗಿ ನಗರ/ತಾಲ್ಲೂಕು', name_en: 'Kalaburagi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಆಳಂದ', name_en: 'Aland', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಅಫಜಲಪುರ', name_en: 'Afzalpur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಜೇವರ್ಗಿ', name_en: 'Jevargi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸೇಡಂ', name_en: 'Sedam', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚಿತ್ತಾಪುರ', name_en: 'Chittapur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚಿಂಚೋಳಿ', name_en: 'Chincholi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಮಲಾಪುರ', name_en: 'Kamalapur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶಹಾಬಾದ್', name_en: 'Shahabad', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಾಳಗಿ', name_en: 'Kalgi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Kalaburagi', 'Aland', 'Afzalpur', 'Jevargi', 'Sedam', 'Chittapur', 'Chincholi', 'Kamalapur', 'Shahabad', 'Kalgi'],
      taluks_kn: ['ಕಲಬುರಗಿ', 'ಆಳಂದ', 'ಅಫಜಲಪುರ', 'ಜೇವರ್ಗಿ', 'ಸೇಡಂ', 'ಚಿತ್ತಾಪುರ', 'ಚಿಂಚೋಳಿ', 'ಕಮಲಾಪುರ', 'ಶಹಾಬಾದ್', 'ಕಾಳಗಿ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'ballari',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Ballari District',
      name_kn: 'ಬಳ್ಳಾರಿ ಜಿಲ್ಲೆ',
      taluks_count: 5,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಬಳ್ಳಾರಿ ನಗರ', name_en: 'Ballari', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಂಡೂರು', name_en: 'Sandur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಿರುಗುಪ್ಪ', name_en: 'Siruguppa', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕುರುಗೋಡು', name_en: 'Kurugodu', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಂಪ್ಲಿ', name_en: 'Kampli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Ballari', 'Sandur', 'Siruguppa', 'Kurugodu', 'Kampli'],
      taluks_kn: ['ಬಳ್ಳಾರಿ', 'ಸಂಡೂರು', 'ಸಿರುಗುಪ್ಪ', 'ಕುರುಗೋಡು', 'ಕಂಪ್ಲಿ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'vijayanagara',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Vijayanagara',
      name_kn: 'ವಿಜಯನಗರ',
      taluks_count: 6,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಹೊಸಪೇಟೆ', name_en: 'Hosapete', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೂಡ್ಲಿಗಿ', name_en: 'Kudligi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹಗರಿಬೊಮ್ಮನಹಳ್ಳಿ', name_en: 'Hagaribommanahalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೊಟ್ಟೂರು', name_en: 'Kotturu', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹೂವಿನ ಹಡಗಲಿ', name_en: 'Hoovina Hadagali', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹರಪನಹಳ್ಳಿ', name_en: 'Harapanahalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Hosapete', 'Kudligi', 'Hagaribommanahalli', 'Kotturu', 'Hoovina Hadagali', 'Harapanahalli'],
      taluks_kn: ['ಹೊಸಪೇಟೆ', 'ಕೂಡ್ಲಿಗಿ', 'ಹಗರಿಬೊಮ್ಮನಹಳ್ಳಿ', 'ಕೊಟ್ಟೂರು', 'ಹೂವಿನ ಹಡಗಲಿ', 'ಹರಪನಹಳ್ಳಿ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'bidar',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Bidar',
      name_kn: 'ಬೀದರ್',
      taluks_count: 7,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಬೀದರ್', name_en: 'Bidar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬಸವಕಲ್ಯಾಣ', name_en: 'Basavakalyan', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಭಾಲ್ಕಿ', name_en: 'Bhalki', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹುಮ್ನಾಬಾದ್', name_en: 'Humnabad', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಔರಾದ್', name_en: 'Aurad', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹುಲಸೂರು', name_en: 'Hulsoor', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಮಲನಗರ', name_en: 'Kamalnagar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Bidar', 'Basavakalyan', 'Bhalki', 'Humnabad', 'Aurad', 'Hulsoor', 'Kamalnagar'],
      taluks_kn: ['ಬೀದರ್', 'ಬಸವಕಲ್ಯಾಣ', 'ಭಾಲ್ಕಿ', 'ಹುಮ್ನಾಬಾದ್', 'ಔರಾದ್', 'ಹುಲಸೂರು', 'ಕಮಲನಗರ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'raichur',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Raichur',
      name_kn: 'ರಾಯಚೂರು',
      taluks_count: 7,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ರಾಯಚೂರು', name_en: 'Raichur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮಾನ್ವಿ', name_en: 'Manvi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಿಂಧನೂರು', name_en: 'Sindhanur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ದೇವದುರ್ಗ', name_en: 'Devadurga', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಲಿಂಗಸೂಗೂರು', name_en: 'Lingsugur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮಸ್ಕಿ', name_en: 'Maski', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಿರವಾರ', name_en: 'Sirwar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Raichur', 'Manvi', 'Sindhanur', 'Devadurga', 'Lingsugur', 'Maski', 'Sirwar'],
      taluks_kn: ['ರಾಯಚೂರು', 'ಮಾನ್ವಿ', 'ಸಿಂಧನೂರು', 'ದೇವದುರ್ಗ', 'ಲಿಂಗಸೂಗೂರು', 'ಮಸ್ಕಿ', 'ಸಿರವಾರ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'koppal',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Koppal',
      name_kn: 'ಕೊಪ್ಪಳ',
      taluks_count: 7,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಕೊಪ್ಪಳ', name_en: 'Koppal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗಂಗಾವತಿ', name_en: 'Gangavathi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕುಷ್ಟಗಿ', name_en: 'Kushtagi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಯಲಬುರ್ಗಾ', name_en: 'Yelburga', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕನಕಗಿರಿ', name_en: 'Kanakagiri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಾರಟಗಿ', name_en: 'Karatagi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕುಕನೂರು', name_en: 'Kukanur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Koppal', 'Gangavathi', 'Kushtagi', 'Yelburga', 'Kanakagiri', 'Karatagi', 'Kukanur'],
      taluks_kn: ['ಕೊಪ್ಪಳ', 'ಗಂಗಾವತಿ', 'ಕುಷ್ಟಗಿ', 'ಯಲಬುರ್ಗಾ', 'ಕನಕಗಿರಿ', 'ಕಾರಟಗಿ', 'ಕುಕನೂರು'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'yadgir',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Yadgir',
      name_kn: 'ಯಾದಗಿರಿ',
      taluks_count: 6,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಯಾದಗಿರಿ', name_en: 'Yadgir', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶಹಾಪುರ', name_en: 'Shahapur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸುರಪುರ', name_en: 'Surpur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗುರಮಿಟಕಲ್', name_en: 'Gurmitkal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ವಡಗೇರಾ', name_en: 'Vadagera', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹುಣಸಗಿ', name_en: 'Hunsagi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Yadgir', 'Shahapur', 'Surpur', 'Gurmitkal', 'Vadagera', 'Hunsagi'],
      taluks_kn: ['ಯಾದಗಿರಿ', 'ಶಹಾಪುರ', 'ಸುರಪುರ', 'ಗುರಮಿಟಕಲ್', 'ವಡಗೇರಾ', 'ಹುಣಸಗಿ'],
      area_units_kn: '',
      area_units_en: ''
    },

    // 5. KITTUR KARNATAKA (ಕಿತ್ತೂರು ಕರ್ನಾಟಕ)
    {
      id: 'belagavi',
      zone: 'kittur',
      zone_en: 'Kittur Karnataka',
      zone_kn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
      name_en: 'Belagavi District',
      name_kn: 'ಬೆಳಗಾವಿ ಜಿಲ್ಲೆ',
      taluks_count: 14,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಬೆಳಗಾವಿ ನಗರ/ತಾಲ್ಲೂಕು', name_en: 'Belagavi City', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚಿಕ್ಕೋಡಿ', name_en: 'Chikkodi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗೋಕಾಕ್', name_en: 'Gokak', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಅಥಣಿ', name_en: 'Athani', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬೈಲಹೊಂಗಲ', name_en: 'Bailhongal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸವದತ್ತಿ', name_en: 'Saundatti', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ರಾಮದುರ್ಗ', name_en: 'Ramdurg', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹುಕ್ಕೇರಿ', name_en: 'Hukkeri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಖಾನಾಪುರ', name_en: 'Khanapur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ರಾಯಭಾಗ', name_en: 'Raybag', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಾಗವಾಡ', name_en: 'Kagwad', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನಿಪ್ಪಾಣಿ', name_en: 'Nippani', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಿತ್ತೂರು', name_en: 'Kittur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮೂಡಲಗಿ', name_en: 'Mudalgi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Belagavi', 'Chikkodi', 'Gokak', 'Athani', 'Bailhongal', 'Saundatti', 'Ramdurg', 'Hukkeri', 'Khanapur', 'Raybag', 'Kagwad', 'Nippani', 'Kittur', 'Mudalgi'],
      taluks_kn: ['ಬೆಳಗಾವಿ', 'ಚಿಕ್ಕೋಡಿ', 'ಗೋಕಾಕ್', 'ಅಥಣಿ', 'ಬೈಲಹೊಂಗಲ', 'ಸವದತ್ತಿ', 'ರಾಮದುರ್ಗ', 'ಹುಕ್ಕೇರಿ', 'ಖಾನಾಪುರ', 'ರಾಯಭಾಗ', 'ಕಾಗವಾಡ', 'ನಿಪ್ಪಾಣಿ', 'ಕಿತ್ತೂರು', 'ಮೂಡಲಗಿ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'dharwad',
      zone: 'kittur',
      zone_en: 'Kittur Karnataka',
      zone_kn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
      name_en: 'Dharwad - Hubballi',
      name_kn: 'ಧಾರವಾಡ - ಹುಬ್ಬಳ್ಳಿ',
      taluks_count: 7,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಹುಬ್ಬಳ್ಳಿ ನಗರ', name_en: 'Hubballi Urban', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಧಾರವಾಡ ನಗರ/ಗ್ರಾಮೀಣ', name_en: 'Dharwad Rural', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕಲಘಟಗಿ', name_en: 'Kalghatgi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನವಲಗುಂದ', name_en: 'Navalgund', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕುಂದಗೋಳ', name_en: 'Kundgol', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಅಳ್ನಾವರ', name_en: 'Alnavar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಅಣ್ಣಿಗೇರಿ', name_en: 'Annigeri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Hubballi Urban', 'Dharwad Rural', 'Kalghatgi', 'Navalgund', 'Kundgol', 'Alnavar', 'Annigeri'],
      taluks_kn: ['ಹುಬ್ಬಳ್ಳಿ ನಗರ', 'ಧಾರವಾಡ ಗ್ರಾಮೀಣ', 'ಕಲಘಟಗಿ', 'ನವಲಗುಂದ', 'ಕುಂದಗೋಳ', 'ಅಳ್ನಾವರ', 'ಅಣ್ಣಿಗೇರಿ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'gadag',
      zone: 'kittur',
      zone_en: 'Kittur Karnataka',
      zone_kn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
      name_en: 'Gadag',
      name_kn: 'ಗದಗ',
      taluks_count: 7,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಗದಗ', name_en: 'Gadag', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ರೋಣ', name_en: 'Ron', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶಿರಹಟ್ಟಿ', name_en: 'Shirahatti', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮುಂಡರಗಿ', name_en: 'Mundargi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನರಗುಂದ', name_en: 'Nargund', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗಜೇಂದ್ರಗಡ', name_en: 'Gajendragad', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಲಕ್ಷ್ಮೇಶ್ವರ', name_en: 'Lakshmeshwar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Gadag', 'Ron', 'Shirahatti', 'Mundargi', 'Nargund', 'Gajendragad', 'Lakshmeshwar'],
      taluks_kn: ['ಗದಗ', 'ರೋಣ', 'ಶಿರಹಟ್ಟಿ', 'ಮುಂಡರಗಿ', 'ನರಗುಂದ', 'ಗಜೇಂದ್ರಗಡ', 'ಲಕ್ಷ್ಮೇಶ್ವರ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'haveri',
      zone: 'kittur',
      zone_en: 'Kittur Karnataka',
      zone_kn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
      name_en: 'Haveri',
      name_kn: 'ಹಾವೇರಿ',
      taluks_count: 8,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಹಾವೇರಿ', name_en: 'Haveri', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ರಾಣೇಬೆನ್ನೂರು', name_en: 'Ranebennur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬ್ಯಾಡಗಿ', name_en: 'Byadgi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹಿರೇಕೆರೂರು', name_en: 'Hirekerur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಶಿಗ್ಗಾಂವ', name_en: 'Shiggaon', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸವಣೂರು', name_en: 'Savanur', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹಾನಗಲ್', name_en: 'Hangal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ರಟ್ಟಿಹಳ್ಳಿ', name_en: 'Rattihalli', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Haveri', 'Ranebennur', 'Byadgi', 'Hirekerur', 'Shiggaon', 'Savanur', 'Hangal', 'Rattihalli'],
      taluks_kn: ['ಹಾವೇರಿ', 'ರಾಣೇಬೆನ್ನೂರು', 'ಬ್ಯಾಡಗಿ', 'ಹಿರೇಕೆರೂರು', 'ಶಿಗ್ಗಾಂವ', 'ಸವಣೂರು', 'ಹಾನಗಲ್', 'ರಟ್ಟಿಹಳ್ಳಿ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'vijayapura',
      zone: 'kittur',
      zone_en: 'Kittur Karnataka',
      zone_kn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
      name_en: 'Vijayapura',
      name_kn: 'ವಿಜಯಪುರ',
      taluks_count: 12,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ವಿಜಯಪುರ', name_en: 'Vijayapura', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಇಂಡಿ', name_en: 'Indi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬಸವನ ಬಾಗೇವಾಡಿ', name_en: 'Basavana Bagewadi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಸಿಂದಗಿ', name_en: 'Sindagi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮುದ್ದೇಬಿಹಾಳ', name_en: 'Muddebihal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ತಾಳಿಕೋಟೆ', name_en: 'Talikoti', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಚಡಚಣ', name_en: 'Chadchan', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ದೇವರ ಹಿಪ್ಪರಗಿ', name_en: 'Devar Hippargi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಕೊಳ್ಳಾರ', name_en: 'Kolhar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ನಿಡಗುಂದಿ', name_en: 'Nidagundi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬಬಲೇಶ್ವರ', name_en: 'Babaleshwar', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ತಿಕೋಟಾ', name_en: 'Tikota', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Vijayapura', 'Indi', 'Basavana Bagewadi', 'Sindagi', 'Muddebihal', 'Talikoti', 'Chadchan', 'Devar Hippargi', 'Kolhar', 'Nidagundi', 'Babaleshwar', 'Tikota'],
      taluks_kn: ['ವಿಜಯಪುರ', 'ಇಂಡಿ', 'ಬಸವನ ಬಾಗೇವಾಡಿ', 'ಸಿಂದಗಿ', 'ಮುದ್ದೇಬಿಹಾಳ', 'ತಾಳಿಕೋಟೆ', 'ಚಡಚಣ', 'ದೇವರ ಹಿಪ್ಪರಗಿ', 'ಕೊಳ್ಳಾರ', 'ನಿಡಗುಂದಿ', 'ಬಬಲೇಶ್ವರ', 'ತಿಕೋಟಾ'],
      area_units_kn: '',
      area_units_en: ''
    },
    {
      id: 'bagalkote',
      zone: 'kittur',
      zone_en: 'Kittur Karnataka',
      zone_kn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
      name_en: 'Bagalkote',
      name_kn: 'ಬಾಗಲಕೋಟೆ',
      taluks_count: 9,
      units_count: '',
      president_kn: '',
      president_en: '',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: '',
      president_phone: '',
      secretary_kn: '',
      secretary_en: '',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: '',
      secretary_phone: '',
      office_en: '',
      office_kn: '',
      phone: '',
      leaders: [],
      taluks_data: [
        { name_kn: 'ಬಾಗಲಕೋಟೆ', name_en: 'Bagalkote', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬಾದಾಮಿ', name_en: 'Badami', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಜಮಖಂಡಿ', name_en: 'Jamkhandi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಮುಧೋಳ', name_en: 'Mudhol', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಹುನಗುಂದ', name_en: 'Hungund', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಬೀಳಗಿ', name_en: 'Bilagi', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಗುಳೇದಗುಡ್ಡ', name_en: 'Guledagudda', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ರಬಕವಿ ಬನಹಟ್ಟಿ', name_en: 'Rabkavi Banhatti', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' },
        { name_kn: 'ಇಳಕಲ್', name_en: 'Ilkal', president_kn: '', president_en: '', secretary_kn: '', secretary_en: '', phone: '', units_kn: '' }
      ],
      taluks_en: ['Bagalkote', 'Badami', 'Jamkhandi', 'Mudhol', 'Hungund', 'Bilagi', 'Guledagudda', 'Rabkavi Banhatti', 'Ilkal'],
      taluks_kn: ['ಬಾಗಲಕೋಟೆ', 'ಬಾದಾಮಿ', 'ಜಮಖಂಡಿ', 'ಮುಧೋಳ', 'ಹುನಗುಂದ', 'ಬೀಳಗಿ', 'ಗುಳೇದಗುಡ್ಡ', 'ರಬಕವಿ ಬನಹಟ್ಟಿ', 'ಇಳಕಲ್'],
      area_units_kn: '',
      area_units_en: ''
    }
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
      case DYFI_DATA_KEYS.DISTRICTS: return DEFAULT_DYFI_DATA.districts;
      default: return null;
    }
  }

  static set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      if (typeof window !== 'undefined') {
        if (typeof window.dispatchEvent === 'function' && typeof CustomEvent === 'function') {
          window.dispatchEvent(new CustomEvent('dyfi_data_updated', { detail: { key, value } }));
        }
        try {
          if (typeof BroadcastChannel !== 'undefined') {
            if (!window._dyfiLiveBus) {
              window._dyfiLiveBus = new BroadcastChannel('dyfi_live_sync_bus');
            }
            window._dyfiLiveBus.postMessage({ key, value });
          }
        } catch (bErr) {}
      }
      // Real-time Cloud Database synchronization (Firebase)
      if (typeof window !== 'undefined' && window.DyfiFirebase && window.DyfiFirebase.isAvailable()) {
        window.DyfiFirebase.saveCollection(key, value).catch(err => console.warn('Cloud sync error:', err));
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
          case DYFI_DATA_KEYS.DISTRICTS: this.set(storageKey, DEFAULT_DYFI_DATA.districts); break;
          case DYFI_DATA_KEYS.ACTIVITIES: this.set(storageKey, DEFAULT_DYFI_DATA.activities); break;
        }
      }
    });

    // Setup BroadcastChannel receiver in all tabs
    if (typeof window !== 'undefined' && typeof BroadcastChannel !== 'undefined') {
      try {
        if (!window._dyfiLiveBus) {
          window._dyfiLiveBus = new BroadcastChannel('dyfi_live_sync_bus');
        }
        window._dyfiLiveBus.onmessage = (event) => {
          if (event && event.data && event.data.key) {
            localStorage.setItem(event.data.key, JSON.stringify(event.data.value));
            window.dispatchEvent(new CustomEvent('dyfi_data_updated', { detail: event.data }));
          }
        };
      } catch (bErr) {}
    }

    // Auto-sync from Firebase cloud & subscribe to real-time changes
    if (typeof window !== 'undefined' && window.DyfiFirebase) {
      setTimeout(() => {
        if (window.DyfiFirebase.isAvailable()) {
          Object.keys(DYFI_DATA_KEYS).forEach(async (k) => {
            const sk = DYFI_DATA_KEYS[k];
            // 1. Initial cloud fetch
            const cloudPayload = await window.DyfiFirebase.getCollection(sk);
            if (cloudPayload) {
              localStorage.setItem(sk, JSON.stringify(cloudPayload));
              window.dispatchEvent(new CustomEvent('dyfi_data_updated', { detail: { key: sk, value: cloudPayload } }));
            }
            // 2. Real-time live listener from Firebase
            window.DyfiFirebase.onCollectionChange(sk, (liveData) => {
              if (liveData) {
                localStorage.setItem(sk, JSON.stringify(liveData));
                window.dispatchEvent(new CustomEvent('dyfi_data_updated', { detail: { key: sk, value: liveData } }));
              }
            });
          });
        }
      }, 500);
    }

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

    // Auto-fix any broken youtube gallery image in existing localStorage
    const gal = this.get(DYFI_DATA_KEYS.GALLERY);
    if (Array.isArray(gal) && (gal.length < 8 || gal.some(g => !g.src || g.src.includes('youtube')))) {
      this.set(DYFI_DATA_KEYS.GALLERY, DEFAULT_DYFI_DATA.gallery);
    }

    // Auto-clean fake images, fake names, and dummy mock details from districts in localStorage
    const CLEAN_DISTRICTS_VERSION = 'dyfi_districts_clean_v31_districts_blank';
    if (!localStorage.getItem(CLEAN_DISTRICTS_VERSION)) {
      this.set(DYFI_DATA_KEYS.DISTRICTS, DEFAULT_DYFI_DATA.districts);
      localStorage.setItem(CLEAN_DISTRICTS_VERSION, 'true');
    }

    // Auto-migrate leaders to include 2 National Leaders and clean avatars
    const NATIONAL_LEADERS_VERSION = 'dyfi_leaders_v2_national_allocated';
    if (!localStorage.getItem(NATIONAL_LEADERS_VERSION)) {
      this.set(DYFI_DATA_KEYS.LEADERS, DEFAULT_DYFI_DATA.leaders);
      this.set(DYFI_DATA_KEYS.MARTYRS, DEFAULT_DYFI_DATA.martyrs);
      localStorage.setItem(NATIONAL_LEADERS_VERSION, 'true');
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
    this.set(DYFI_DATA_KEYS.DISTRICTS, DEFAULT_DYFI_DATA.districts);
    this.set(DYFI_DATA_KEYS.ACTIVITIES, DEFAULT_DYFI_DATA.activities);
    return true;
  }
}

if (typeof window !== 'undefined') {
  window.DyfiDataStore = DyfiDataStore;
  window.DYFI_DATA_KEYS = DYFI_DATA_KEYS;
  DyfiDataStore.init();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DyfiDataStore, DYFI_DATA_KEYS, DEFAULT_DYFI_DATA };
}
