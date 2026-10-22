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
  DISTRICTS: 'dyfi_kar_districts'
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
      full_en: 'To eliminate commercial exploitation and shortages in blood banks during critical medical emergencies, the DYFI Karnataka Health Cell announced the nationwide expansion of its verified Blood Volunteer Registry. Over 5,000 trained youth volunteers from government and private colleges have registered across 31 districts. Through a dedicated 24/7 central telephone hotline (+91 9448123456), patients and their families can obtain voluntary donors within 30 minutes without paying any mediator fees. The helpline has successfully coordinated over 450 emergency transfusions in coastal and northern Karnataka over the last quarter alone.',
      full_kn: 'ತುರ್ತು ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಅಪಘಾತಗಳ ಸಂದರ್ಭದಲ್ಲಿ ರೋಗಿಗಳಿಗೆ ಸಕಾಲದಲ್ಲಿ ರಕ್ತ ಒದಗಿಸುವ ಸದುದ್ದೇಶದಿಂದ ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ಆರೋಗ್ಯ ಘಟಕವು ತನ್ನ ಡಿಜಿಟಲ್ ಸ್ವಯಂಪ್ರೇರಿತ ರಕ್ತದಾನ ಜಾಲವನ್ನು ರಾಜ್ಯಾದ್ಯಂತ ವಿಸ್ತರಿಸಿದೆ. ರಾಜ್ಯದ 31 ಜಿಲ್ಲೆಗಳಿಂದ 5,000ಕ್ಕೂ ಹೆಚ್ಚು ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಯುವಜನರು ನೋಂದಣಿ ಮಾಡಿಕೊಂಡಿದ್ದಾರೆ. ದಿನದ 24 ಗಂಟೆಯೂ ಕಾರ್ಯಾಚರಿಸುವ ತುರ್ತು ಸಹಾಯವಾಣಿ (+91 9448123456) ಮೂಲಕ ಯಾವುದೇ ರೋಗಿಗೂ ಅರ್ಧ ಗಂಟೆಯೊಳಗೆ ಸಂಪೂರ್ಣ ಉಚಿತವಾಗಿ ರಕ್ತದಾನಿಗಳನ್ನು ಒದಗಿಸಲಾಗುತ್ತಿದೆ. ಕಳೆದ ಮೂರು ತಿಂಗಳಲ್ಲಿ ಕರಾವಳಿ ಮತ್ತು ಉತ್ತರ ಕರ್ನಾಟಕ ಭಾಗದಲ್ಲಿ 450ಕ್ಕೂ ಹೆಚ್ಚು ತುರ್ತು ರಕ್ತದಾನ ಪ್ರಕರಣಗಳನ್ನು ಈ ನೆಟ್‌ವರ್ಕ್ ಯಶಸ್ವಿಯಾಗಿ ನಿರ್ವಹಿಸಿದೆ.'
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
    {
      id: 'dk',
      zone: 'coastal',
      zone_en: 'Coastal Zone',
      zone_kn: 'ಕರಾವಳಿ ವಿಭಾಗ',
      name_en: 'Dakshina Kannada',
      name_kn: 'ದಕ್ಷಿಣ ಕನ್ನಡ',
      taluks_count: 8,
      units_count: '140+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ಬಿ.ಕೆ. ಇಮ್ತಿಯಾಝ್',
      president_en: 'Comrade B.K. Imthiyaz',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: 'images/leader-1.jpg',
      president_phone: '+91 9448123456',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಬಜಾಲ್',
      secretary_en: 'Comrade Santhosh Bajal',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/santosh_bajal.jpg',
      secretary_phone: '+91 9880123456',
      office_en: 'DYFI District Office, B.V. Kakkillaya Bhavana, Near Rao & Rao Circle, Mangaluru - 575001',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಕಚೇರಿ, ಬಿ.ವಿ. ಕಕ್ಕಿಲ್ಲಾಯ ಭವನ, ರಾವ್ & ರಾವ್ ವೃತ್ತದ ಬಳಿ, ಮಂಗಳೂರು - 575001',
      phone: '+91 824 2440123 / +91 9448123456',
      leaders: [
        { name_en: 'Comrade B.K. Imthiyaz', name_kn: 'ಕಾಮ್ರೇಡ್ ಬಿ.ಕೆ ಇಮ್ತಿಯಾಝ್', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/leader-1.jpg', phone: '+91 9448123456', area_en: 'Mangaluru', area_kn: 'ಮಂಗಳೂರು' },
        { name_en: 'Comrade Santhosh Bajal', name_kn: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಬಜಾಲ್', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/santosh_bajal.jpg', phone: '+91 9880123456', area_en: 'Bajal / Ullal', area_kn: 'ಬಜಾಲ್ / ಉಳ್ಳಾಲ' },
        { name_en: 'Comrade Manoj Vamanjoor', name_kn: 'ಕಾಮ್ರೇಡ್ ಮನೋಜ್ ವಾಮಂಜೂರು', post_en: 'District Vice President', post_kn: 'ಜಿಲ್ಲಾ ಉಪಾಧ್ಯಕ್ಷರು', image: 'images/shivappa.jpg', phone: '+91 9741234567', area_en: 'Mangaluru Rural', area_kn: 'ಮಂಗಳೂರು ಗ್ರಾಮಾಂತರ' },
        { name_en: 'Comrade Razak Ullal', name_kn: 'ಕಾಮ್ರೇಡ್ ರಜಾಕ್ ಉಳ್ಳಾಲ', post_en: 'District Joint Secretary', post_kn: 'ಜಿಲ್ಲಾ ಜಂಟಿ ಕಾರ್ಯದರ್ಶಿ', image: 'images/rejvana.jpg', phone: '+91 9632123456', area_en: 'Ullal', area_kn: 'ಉಳ್ಳಾಲ' }
      ],
      taluks_data: [
        { name_kn: 'ಮಂಗಳೂರು ನಗರ', name_en: 'Mangaluru City', president_kn: 'ಕಾಮ್ರೇಡ್ ನಿತಿನ್ ಕುತ್ತಾರ್', president_en: 'Comrade Nitin Kuttar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ರಿಜ್ವಾನ್', secretary_en: 'Comrade Rizwan', phone: '+91 9845112233', units_kn: '28 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' },
        { name_kn: 'ಉಳ್ಳಾಲ', name_en: 'Ullal', president_kn: 'ಕಾಮ್ರೇಡ್ ರಜಾಕ್ ಉಳ್ಳಾಲ', president_en: 'Comrade Razak Ullal', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಸುನಿಲ್ ಕುಮಾರ್ ಬಜಾಲ್', secretary_en: 'Comrade Sunil Kumar Bajal', phone: '+91 9741223344', units_kn: '32 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' },
        { name_kn: 'ಬಂಟ್ವಾಳ', name_en: 'Bantwal', president_kn: 'ಕಾಮ್ರೇಡ್ ಸುರೇಶ್ ಕಲ್ಲಡ್ಕ', president_en: 'Comrade Suresh Kalladka', secretary_kn: 'ಕಾಮ್ರೇಡ್ ನರೇಶ್ ಬಂಟ್ವಾಳ', secretary_en: 'Comrade Naresh Bantwal', phone: '+91 9632334455', units_kn: '24 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' },
        { name_kn: 'ಬೆಳ್ತಂಗಡಿ', name_en: 'Belthangady', president_kn: 'ಕಾಮ್ರೇಡ್ ಶೇಖರ್ ಲಾಯಿಲ', president_en: 'Comrade Shekhar Laila', secretary_kn: 'ಕಾಮ್ರೇಡ್ ವಸಂತ ನೆರಿಯ', secretary_en: 'Comrade Vasantha Neriya', phone: '+91 9448445566', units_kn: '22 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' },
        { name_kn: 'ಪುತ್ತೂರು', name_en: 'Puttur', president_kn: 'ಕಾಮ್ರೇಡ್ ಆನಂದ ಪುತ್ತೂರು', president_en: 'Comrade Ananda Puttur', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಅಶ್ರಫ್ ಬಪ್ಪಳಿಗೆ', secretary_en: 'Comrade Ashraf Bappalige', phone: '+91 9900556677', units_kn: '18 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' },
        { name_kn: 'ಸುಳ್ಯ', name_en: 'Sullia', president_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಶಾಂತ್ ಸುಳ್ಯ', president_en: 'Comrade Prashanth Sullia', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಕಿರಣ್ ಕುಮಾರ್', secretary_en: 'Comrade Kiran Kumar', phone: '+91 9880667788', units_kn: '14 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' },
        { name_kn: 'ಕಡಬ', name_en: 'Kadaba', president_kn: 'ಕಾಮ್ರೇಡ್ ದಿನೇಶ್ ಕಡಬ', president_en: 'Comrade Dinesh Kadaba', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರವೀಣ್ ಕೊಯಿಲ', secretary_en: 'Comrade Praveen Koila', phone: '+91 9740778899', units_kn: '12 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' },
        { name_kn: 'ಮೂಡುಬಿದಿರೆ', name_en: 'Moodbidri', president_kn: 'ಕಾಮ್ರೇಡ್ ರೋಹನ್ ಮಾರ್ನಾಡು', president_en: 'Comrade Rohan Marnad', secretary_kn: 'ಕಾಮ್ರೇಡ್ ರಮೇಶ್ ಆಲಂಗಾರು', secretary_en: 'Comrade Ramesh Alangar', phone: '+91 9632889900', units_kn: '16 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Mangaluru City', 'Ullal', 'Bantwal', 'Belthangady', 'Puttur', 'Sullia', 'Kadaba', 'Moodbidri'],
      taluks_kn: ['ಮಂಗಳೂರು ನಗರ', 'ಉಳ್ಳಾಲ', 'ಬಂಟ್ವಾಳ', 'ಬೆಳ್ತಂಗಡಿ', 'ಪುತ್ತೂರು', 'ಸುಳ್ಯ', 'ಕಡಬ', 'ಮೂಡುಬಿದಿರೆ'],
      area_units_kn: 'ಮಂಗಳೂರು, ಉಳ್ಳಾಲ, ಸುರತ್ಕಲ್, ಕಾವೂರು, ಬಜ್ಪೆ, ಬಿ.ಸಿ.ರೋಡ್, ಬೆಳ್ತಂಗಡಿ ನಗರ ಸೇರಿ 140ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಗ್ರಾಮ, ವಾರ್ಡ್ ಮತ್ತು ಏರಿಯಾ ಯುವ ಸಮಿತಿಗಳು.',
      area_units_en: 'Over 140 active village, ward, and student area committees across coastal zones including Mangaluru, Ullal, Surathkal, and Belthangady.'
    },
    {
      id: 'bengaluru-urban',
      zone: 'bengaluru',
      zone_en: 'Bengaluru Region',
      zone_kn: 'ಬೆಂಗಳೂರು ವಿಭಾಗ',
      name_en: 'Bengaluru Urban',
      name_kn: 'ಬೆಂಗಳೂರು ನಗರ',
      taluks_count: 5,
      units_count: '160+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ಎಂ. ಮುನಿಕೃಷ್ಣ',
      president_en: 'Comrade M. Munikrishna',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: 'images/lavitra_president.jpg',
      president_phone: '+91 9845012345',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ಚೇತನ್ ಕುಮಾರ್',
      secretary_en: 'Comrade Chethan Kumar',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/santosh_bajal.jpg',
      secretary_phone: '+91 9845123456',
      office_en: 'DYFI Bengaluru District Committee, No. 45, Gandhinagar, Bengaluru - 560009',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಬೆಂಗಳೂರು ಜಿಲ್ಲಾ ಸಮಿತಿ, ನಂ. 45, ಗಾಂಧಿನಗರ, ಬೆಂಗಳೂರು - 560009',
      phone: '+91 80 22874521 / +91 9448123456',
      leaders: [
        { name_en: 'Comrade M. Munikrishna', name_kn: 'ಕಾಮ್ರೇಡ್ ಎಂ. ಮುನಿಕೃಷ್ಣ', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/lavitra_president.jpg', phone: '+91 9845012345', area_en: 'Yelahanka / City', area_kn: 'ಯಲಹಂಕ / ನಗರ' },
        { name_en: 'Comrade Chethan Kumar', name_kn: 'ಕಾಮ್ರೇಡ್ ಚೇತನ್ ಕುಮಾರ್', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/santosh_bajal.jpg', phone: '+91 9845123456', area_en: 'Bengaluru South', area_kn: 'ಬೆಂಗಳೂರು ದಕ್ಷಿಣ' },
        { name_en: 'Comrade Sowmya K.', name_kn: 'ಕಾಮ್ರೇಡ್ ಸೌಮ್ಯಾ ಕೆ.', post_en: 'District Vice President', post_kn: 'ಜಿಲ್ಲಾ ಉಪಾಧ್ಯಕ್ಷರು', image: 'images/rejvana.jpg', phone: '+91 9980123456', area_en: 'Malleshwaram', area_kn: 'ಮಲ್ಲೇಶ್ವರಂ' },
        { name_en: 'Comrade Venkatesh B.', name_kn: 'ಕಾಮ್ರೇಡ್ ವೆಂಕಟೇಶ್ ಬಿ.', post_en: 'District Treasurer', post_kn: 'ಜಿಲ್ಲಾ ಖಜಾಂಚಿ', image: 'images/shivappa.jpg', phone: '+91 9740123456', area_en: 'K.R. Puram', area_kn: 'ಕೆ.ಆರ್. ಪುರಂ' }
      ],
      taluks_data: [
        { name_kn: 'ಬೆಂಗಳೂರು ಉತ್ತರ', name_en: 'Bengaluru North', president_kn: 'ಕಾಮ್ರೇಡ್ ಶ್ರೀನಿವಾಸ್', president_en: 'Comrade Srinivas', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಮಂಜುನಾಥ್', secretary_en: 'Comrade Manjunath', phone: '+91 9845001122', units_kn: '42 ವಾರ್ಡ್/ಏರಿಯಾ ಸಮಿತಿಗಳು' },
        { name_kn: 'ಬೆಂಗಳೂರು ದಕ್ಷಿಣ', name_en: 'Bengaluru South', president_kn: 'ಕಾಮ್ರೇಡ್ ಸೌಮ್ಯಾ ಕೆ.', president_en: 'Comrade Sowmya K.', secretary_kn: 'ಕಾಮ್ರೇಡ್ ರಾಘವೇಂದ್ರ', secretary_en: 'Comrade Raghavendra', phone: '+91 9980112233', units_kn: '48 ವಾರ್ಡ್/ಏರಿಯಾ ಸಮಿತಿಗಳು' },
        { name_kn: 'ಬೆಂಗಳೂರು ಪೂರ್ವ', name_en: 'Bengaluru East', president_kn: 'ಕಾಮ್ರೇಡ್ ವೆಂಕಟೇಶ್ ಬಿ.', president_en: 'Comrade Venkatesh B.', secretary_kn: 'ಕಾಮ್ರೇಡ್ ನಾಗರಾಜ್', secretary_en: 'Comrade Nagaraj', phone: '+91 9740223344', units_kn: '36 ವಾರ್ಡ್/ಏರಿಯಾ ಸಮಿತಿಗಳು' },
        { name_kn: 'ಆನೇಕಲ್', name_en: 'Anekal', president_kn: 'ಕಾಮ್ರೇಡ್ ಆನಂದ್ ಕುಮಾರ್', president_en: 'Comrade Anand Kumar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಶಿವರಾಜ್', secretary_en: 'Comrade Shivaraj', phone: '+91 9632445566', units_kn: '25 ಗ್ರಾಮ/ಏರಿಯಾ ಘಟಕಗಳು' },
        { name_kn: 'ಯಲಹಂಕ', name_en: 'Yelahanka', president_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಕಾಶ್ ರಾವ್', president_en: 'Comrade Prakash Rao', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಕಿರಣ್ ಗೌಡ', secretary_en: 'Comrade Kiran Gowda', phone: '+91 9880556677', units_kn: '22 ಗ್ರಾಮ/ಏರಿಯಾ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Bengaluru North', 'Bengaluru South', 'Bengaluru East', 'Anekal', 'Yelahanka'],
      taluks_kn: ['ಬೆಂಗಳೂರು ಉತ್ತರ', 'ಬೆಂಗಳೂರು ದಕ್ಷಿಣ', 'ಬೆಂಗಳೂರು ಪೂರ್ವ', 'ಆನೇಕಲ್', 'ಯಲಹಂಕ'],
      area_units_kn: 'ಗಾಂಧಿನಗರ, ಮಲ್ಲೇಶ್ವರಂ, ಶಿವಾಜಿನಗರ, ಯಲಹಂಕ, ಪೀಣ್ಯ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ, ಕೆಂಗೇರಿ, ಕೆ.ಆರ್. ಪುರಂ ಸೇರಿ 160ಕ್ಕೂ ಹೆಚ್ಚು ವಾರ್ಡ್ ಹಾಗೂ ಯುವ ಸಮಿತಿಗಳು.',
      area_units_en: 'Over 160 active ward, factory, and student units across Bengaluru urban constituencies including Malleshwaram, Peenya, and K.R. Puram.'
    },
    {
      id: 'mysuru',
      zone: 'mysuru',
      zone_en: 'Mysuru Region',
      zone_kn: 'ಮೈಸೂರು ವಿಭಾಗ',
      name_en: 'Mysuru District',
      name_kn: 'ಮೈಸೂರು ಜಿಲ್ಲೆ',
      taluks_count: 7,
      units_count: '110+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ಜಗದೀಶ್ ಸೂರ್ಯ',
      president_en: 'Comrade Jagadish Surya',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: 'images/leader-1.jpg',
      president_phone: '+91 9844123456',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ವಿಜಯ್ ಕುಮಾರ್',
      secretary_en: 'Comrade Vijay Kumar',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/santosh_bajal.jpg',
      secretary_phone: '+91 9900123456',
      office_en: 'DYFI District Office, JLB Road, Chamarajapuram, Mysuru - 570005',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಕಚೇರಿ, ಜೆಎಲ್‌ಬಿ ರಸ್ತೆ, ಚಾಮರಾಜಪುರಂ, ಮೈಸೂರು - 570005',
      phone: '+91 821 2420123 / +91 9844123456',
      leaders: [
        { name_en: 'Comrade Jagadish Surya', name_kn: 'ಕಾಮ್ರೇಡ್ ಜಗದೀಶ್ ಸೂರ್ಯ', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/leader-1.jpg', phone: '+91 9844123456', area_en: 'Mysuru City', area_kn: 'ಮೈಸೂರು ನಗರ' },
        { name_en: 'Comrade Vijay Kumar', name_kn: 'ಕಾಮ್ರೇಡ್ ವಿಜಯ್ ಕುಮಾರ್', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/santosh_bajal.jpg', phone: '+91 9900123456', area_en: 'Nanjangud', area_kn: 'ನಂಜನಗೂಡು' }
      ],
      taluks_data: [
        { name_kn: 'ಮೈಸೂರು ನಗರ/ತಾಲ್ಲೂಕು', name_en: 'Mysuru Taluk', president_kn: 'ಕಾಮ್ರೇಡ್ ಜಗದೀಶ್ ಸೂರ್ಯ', president_en: 'Comrade Jagadish Surya', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಅಜಯ್ ಕುಮಾರ್', secretary_en: 'Comrade Ajay Kumar', phone: '+91 9844110022', units_kn: '30 ವಾರ್ಡ್ ಸಮಿತಿಗಳು' },
        { name_kn: 'ನಂಜನಗೂಡು', name_en: 'Nanjangud', president_kn: 'ಕಾಮ್ರೇಡ್ ವಿಜಯ್ ಕುಮಾರ್', president_en: 'Comrade Vijay Kumar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಮಹದೇವಸ್ವಾಮಿ', secretary_en: 'Comrade Mahadevaswamy', phone: '+91 9900223344', units_kn: '20 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಹುಣಸೂರು', name_en: 'Hunsur', president_kn: 'ಕಾಮ್ರೇಡ್ ರವಿಕುಮಾರ್', president_en: 'Comrade Ravikumar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಬಸವರಾಜು', secretary_en: 'Comrade Basavaraju', phone: '+91 9845334455', units_kn: '18 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಪಿರಿಯಾಪಟ್ಟಣ', name_en: 'Piriyapatna', president_kn: 'ಕಾಮ್ರೇಡ್ ಮಂಜುನಾಥ್', president_en: 'Comrade Manjunath', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಭಾಕರ್', secretary_en: 'Comrade Prabhakar', phone: '+91 9741445566', units_kn: '15 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಕೆ.ಆರ್. ನಗರ', name_en: 'K.R. Nagar', president_kn: 'ಕಾಮ್ರೇಡ್ ಸ್ವಾಮಿ ಗೌಡ', president_en: 'Comrade Swamy Gowda', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಕುಮಾರ್', secretary_en: 'Comrade Kumar', phone: '+91 9632556677', units_kn: '16 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಟಿ. ನರಸೀಪುರ', name_en: 'T. Narasipura', president_kn: 'ಕಾಮ್ರೇಡ್ ಸಿದ್ದರಾಜು', president_en: 'Comrade Siddaraju', secretary_kn: 'ಕಾಮ್ರೇಡ್ ರಾಜೇಶ್', secretary_en: 'Comrade Rajesh', phone: '+91 9880667788', units_kn: '14 ಗ್ರಾಮ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Mysuru Taluk', 'Nanjangud', 'Hunsur', 'Piriyapatna', 'K.R. Nagar', 'T. Narasipura', 'Saragur'],
      taluks_kn: ['ಮೈಸೂರು ತಾಲ್ಲೂಕು', 'ನಂಜನಗೂಡು', 'ಹುಣಸೂರು', 'ಪಿರಿಯಾಪಟ್ಟಣ', 'ಕೆ.ಆರ್. ನಗರ', 'ಟಿ. ನರಸೀಪುರ', 'ಸರಗೂರು'],
      area_units_kn: 'ಮೈಸೂರು ನಗರ, ನಂಜನಗೂಡು ಕೈಗಾರಿಕಾ ವಲಯ, ಹುಣಸೂರು ಗ್ರಾಮೀಣ ಭಾಗ ಸೇರಿ 110ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಸಮಿತಿಗಳು.',
      area_units_en: 'Over 110 active rural and city youth units spanning Mysuru, Nanjangud, and Hunsur regions.'
    },
    {
      id: 'udupi',
      zone: 'coastal',
      zone_en: 'Coastal Zone',
      zone_kn: 'ಕರಾವಳಿ ವಿಭಾಗ',
      name_en: 'Udupi District',
      name_kn: 'ಉಡುಪಿ ಜಿಲ್ಲೆ',
      taluks_count: 7,
      units_count: '95+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ವೆಂಕಟೇಶ್ ಕೋಣಿ',
      president_en: 'Comrade Venkatesh Koni',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: 'images/shivappa.jpg',
      president_phone: '+91 9845987654',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಹೆಮ್ಮಾಡಿ',
      secretary_en: 'Comrade Santhosh Hemmady',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/leader-1.jpg',
      secretary_phone: '+91 9741543210',
      office_en: 'DYFI District Committee Office, Kavi Mudhdhana Marg, Udupi - 576101',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಸಮಿತಿ ಕಚೇರಿ, ಕವಿ ಮುದ್ದಣ ಮಾರ್ಗ, ಉಡುಪಿ - 576101',
      phone: '+91 820 2520123 / +91 9845987654',
      leaders: [
        { name_en: 'Comrade Venkatesh Koni', name_kn: 'ಕಾಮ್ರೇಡ್ ವೆಂಕಟೇಶ್ ಕೋಣಿ', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/shivappa.jpg', phone: '+91 9845987654', area_en: 'Kundapura', area_kn: 'ಕುಂದಾಪುರ' },
        { name_en: 'Comrade Santhosh Hemmady', name_kn: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಹೆಮ್ಮಾಡಿ', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/leader-1.jpg', phone: '+91 9741543210', area_en: 'Byndoor', area_kn: 'ಬೈಂದೂರು' }
      ],
      taluks_data: [
        { name_kn: 'ಉಡುಪಿ ನಗರ', name_en: 'Udupi', president_kn: 'ಕಾಮ್ರೇಡ್ ಶಶಿಧರ್ ಹೆಬ್ರಿ', president_en: 'Comrade Shashidhar Hebri', secretary_kn: 'ಕಾಮ್ರೇಡ್ ದೀಪಕ್ ಕಡೆಕಾರ್', secretary_en: 'Comrade Deepak Kadekar', phone: '+91 9845123123', units_kn: '25 ವಾರ್ಡ್ ಘಟಕಗಳು' },
        { name_kn: 'ಕುಂದಾಪುರ', name_en: 'Kundapura', president_kn: 'ಕಾಮ್ರೇಡ್ ವೆಂಕಟೇಶ್ ಕೋಣಿ', president_en: 'Comrade Venkatesh Koni', secretary_kn: 'ಕಾಮ್ರೇಡ್ ರಾಜೇಶ್ ವಡೇರಹೋಬಳಿ', secretary_en: 'Comrade Rajesh Vadera', phone: '+91 9741234234', units_kn: '24 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಕಾರ್ಕಳ', name_en: 'Karkala', president_kn: 'ಕಾಮ್ರೇಡ್ ಸುಕುಮಾರ್', president_en: 'Comrade Sukumar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಭಾಕರ್ ಕಾರ್ಕಳ', secretary_en: 'Comrade Prabhakar Karkala', phone: '+91 9632345345', units_kn: '18 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಬ್ರಹ್ಮಾವರ', name_en: 'Brahmavara', president_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಶಾಂತ್ ಬ್ರಹ್ಮಾವರ', president_en: 'Comrade Prashanth', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಸುಧಾಕರ್', secretary_en: 'Comrade Sudhakar', phone: '+91 9448456456', units_kn: '16 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಬೈಂದೂರು', name_en: 'Byndoor', president_kn: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಹೆಮ್ಮಾಡಿ', president_en: 'Comrade Santhosh Hemmady', secretary_kn: 'ಕಾಮ್ರೇಡ್ ನಾಗರಾಜ್ ಗಂಗೊಳ್ಳಿ', secretary_en: 'Comrade Nagaraj Gangolli', phone: '+91 9900567567', units_kn: '18 ಗ್ರಾಮ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Udupi', 'Kundapura', 'Karkala', 'Brahmavara', 'Byndoor', 'Kaup', 'Hebri'],
      taluks_kn: ['ಉಡುಪಿ', 'ಕುಂದಾಪುರ', 'ಕಾರ್ಕಳ', 'ಬ್ರಹ್ಮಾವರ', 'ಬೈಂದೂರು', 'ಕಾಪು', 'ಹೆಬ್ರಿ'],
      area_units_kn: 'ಉಡುಪಿ, ಕುಂದಾಪುರ, ಬೈಂದೂರು ಕರಾವಳಿ ತೀರ ಹಾಗೂ ಕಾರ್ಕಳ ಬೆಟ್ಟದ ತಪ್ಪಲಿನ 95ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಸಮಿತಿಗಳು.',
      area_units_en: 'Over 95 active units across coastal fishing belts, educational campuses, and inland rural units in Udupi.'
    },
    {
      id: 'kalaburagi',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Kalaburagi District',
      name_kn: 'ಕಲಬುರಗಿ ಜಿಲ್ಲೆ',
      taluks_count: 7,
      units_count: '130+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ಶರಣು ಹೀರೂರು',
      president_en: 'Comrade Sharanu Heroor',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: 'images/lavitra_president.jpg',
      president_phone: '+91 9449876543',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ಮಲ್ಲಿಕಾರ್ಜುನ ಹಳ್ಳಿ',
      secretary_en: 'Comrade Mallikarjun Halli',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/shivappa.jpg',
      secretary_phone: '+91 9880987654',
      office_en: 'DYFI District Office, Sardar Vallabhbhai Patel Chowk, Kalaburagi - 585102',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಕಚೇರಿ, ಸರ್ದಾರ್ ವಲ್ಲಭಭಾಯಿ ಪಟೇಲ್ ಚೌಕ್, ಕಲಬುರಗಿ - 585102',
      phone: '+91 8472 265432 / +91 9449876543',
      leaders: [
        { name_en: 'Comrade Sharanu Heroor', name_kn: 'ಕಾಮ್ರೇಡ್ ಶರಣು ಹೀರೂರು', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/lavitra_president.jpg', phone: '+91 9449876543', area_en: 'Aland', area_kn: 'ಆಳಂದ' },
        { name_en: 'Comrade Mallikarjun Halli', name_kn: 'ಕಾಮ್ರೇಡ್ ಮಲ್ಲಿಕಾರ್ಜುನ ಹಳ್ಳಿ', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/shivappa.jpg', phone: '+91 9880987654', area_en: 'Kalaburagi City', area_kn: 'ಕಲಬುರಗಿ ನಗರ' }
      ],
      taluks_data: [
        { name_kn: 'ಕಲಬುರಗಿ ನಗರ/ತಾಲ್ಲೂಕು', name_en: 'Kalaburagi', president_kn: 'ಕಾಮ್ರೇಡ್ ಮಲ್ಲಿಕಾರ್ಜುನ ಹಳ್ಳಿ', president_en: 'Comrade Mallikarjun Halli', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಸಿದ್ದರಾಮಯ್ಯ', secretary_en: 'Comrade Siddaramaiah', phone: '+91 9449112233', units_kn: '35 ವಾರ್ಡ್/ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಆಳಂದ', name_en: 'Aland', president_kn: 'ಕಾಮ್ರೇಡ್ ಶರಣು ಹೀರೂರು', president_en: 'Comrade Sharanu Heroor', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಭುಲಿಂಗ', secretary_en: 'Comrade Prabhulinga', phone: '+91 9880223344', units_kn: '25 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಅಫಜಲಪುರ', name_en: 'Afzalpur', president_kn: 'ಕಾಮ್ರೇಡ್ ಬಸವರಾಜ ಮಾಶಾಳ', president_en: 'Comrade Basavaraj Mashal', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಮಹೇಶ ಗೌಡ', secretary_en: 'Comrade Mahesh Gowda', phone: '+91 9741334455', units_kn: '20 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಜೇವರ್ಗಿ', name_en: 'Jevargi', president_kn: 'ಕಾಮ್ರೇಡ್ ಸುಭಾಷ್ ಜೇವರ್ಗಿ', president_en: 'Comrade Subhash', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಆನಂದ ಕುಮಾರ್', secretary_en: 'Comrade Anand Kumar', phone: '+91 9632445566', units_kn: '18 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಸೇಡಂ', name_en: 'Sedam', president_kn: 'ಕಾಮ್ರೇಡ್ ಚಂದ್ರಶೇಖರ್', president_en: 'Comrade Chandrashekhar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ವೀರೇಶ್', secretary_en: 'Comrade Veeresh', phone: '+91 9448556677', units_kn: '16 ಗ್ರಾಮ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Kalaburagi', 'Aland', 'Afzalpur', 'Jevargi', 'Sedam', 'Chittapur', 'Chincholi'],
      taluks_kn: ['ಕಲಬುರಗಿ', 'ಆಳಂದ', 'ಅಫಜಲಪುರ', 'ಜೇವರ್ಗಿ', 'ಸೇಡಂ', 'ಚಿತ್ತಾಪುರ', 'ಚಿಂಚೋಳಿ'],
      area_units_kn: 'ಕಲಬುರಗಿ ನಗರದ 55 ವಾರ್ಡ್‌ಗಳು ಹಾಗೂ ಆಳಂದ, ಅಫಜಲಪುರ, ಜೇವರ್ಗಿ ತಾಲ್ಲೂಕಿನ 130ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಸಮಿತಿಗಳು.',
      area_units_en: 'Over 130 active student and agricultural youth committees fighting for Kalyana Karnataka 371J reservations.'
    },
    {
      id: 'belagavi',
      zone: 'kittur',
      zone_en: 'Kittur Karnataka',
      zone_kn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
      name_en: 'Belagavi District',
      name_kn: 'ಬೆಳಗಾವಿ ಜಿಲ್ಲೆ',
      taluks_count: 14,
      units_count: '180+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ಜಿ.ಎಂ. ಜೈನ್',
      president_en: 'Comrade G.M. Jain',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: 'images/leader-1.jpg',
      president_phone: '+91 9448345678',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ಬಸವರಾಜ ಪತ್ತಾರ',
      secretary_en: 'Comrade Basavaraj Pattar',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/santosh_bajal.jpg',
      secretary_phone: '+91 9886543210',
      office_en: 'DYFI District Committee Office, College Road, Belagavi - 590001',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಸಮಿತಿ ಕಚೇರಿ, ಕಾಲೇಜ್ ರಸ್ತೆ, ಬೆಳಗಾವಿ - 590001',
      phone: '+91 831 2401234 / +91 9448345678',
      leaders: [
        { name_en: 'Comrade G.M. Jain', name_kn: 'ಕಾಮ್ರೇಡ್ ಜಿ.ಎಂ. ಜೈನ್', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/leader-1.jpg', phone: '+91 9448345678', area_en: 'Belagavi City', area_kn: 'ಬೆಳಗಾವಿ ನಗರ' },
        { name_en: 'Comrade Basavaraj Pattar', name_kn: 'ಕಾಮ್ರೇಡ್ ಬಸವರಾಜ ಪತ್ತಾರ', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/santosh_bajal.jpg', phone: '+91 9886543210', area_en: 'Chikkodi', area_kn: 'ಚಿಕ್ಕೋಡಿ' }
      ],
      taluks_data: [
        { name_kn: 'ಬೆಳಗಾವಿ ನಗರ', name_en: 'Belagavi City', president_kn: 'ಕಾಮ್ರೇಡ್ ಜಿ.ಎಂ. ಜೈನ್', president_en: 'Comrade G.M. Jain', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಆನಂದ ಪಾಟೀಲ', secretary_en: 'Comrade Anand Patil', phone: '+91 9448119900', units_kn: '40 ನಗರ/ವಾರ್ಡ್ ಘಟಕಗಳು' },
        { name_kn: 'ಚಿಕ್ಕೋಡಿ', name_en: 'Chikkodi', president_kn: 'ಕಾಮ್ರೇಡ್ ಬಸವರಾಜ ಪತ್ತಾರ', president_en: 'Comrade Basavaraj Pattar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಮಹಾವೀರ', secretary_en: 'Comrade Mahaveer', phone: '+91 9886229900', units_kn: '30 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಗೋಕಾಕ್', name_en: 'Gokak', president_kn: 'ಕಾಮ್ರೇಡ್ ಸುರೇಶ್ ಗೋಕಾಕ್', president_en: 'Comrade Suresh Gokak', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಲಕ್ಷ್ಮಣ್', secretary_en: 'Comrade Lakshman', phone: '+91 9741339900', units_kn: '25 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಅಥಣಿ', name_en: 'Athani', president_kn: 'ಕಾಮ್ರೇಡ್ ಸಂಜೀವ್ ಕುಮಾರ್', president_en: 'Comrade Sanjeev Kumar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಸತೀಶ್', secretary_en: 'Comrade Satish', phone: '+91 9632449900', units_kn: '22 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಬೈಲಹೊಂಗಲ', name_en: 'Bailhongal', president_kn: 'ಕಾಮ್ರೇಡ್ ಮಲ್ಲಿಕಾರ್ಜುನ', president_en: 'Comrade Mallikarjun', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಶಿವಾನಂದ', secretary_en: 'Comrade Shivanand', phone: '+91 9845559900', units_kn: '20 ಗ್ರಾಮ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Belagavi', 'Chikkodi', 'Gokak', 'Athani', 'Bailhongal', 'Saundatti', 'Ramdurg', 'Hukkeri', 'Khanapur', 'Raybag'],
      taluks_kn: ['ಬೆಳಗಾವಿ', 'ಚಿಕ್ಕೋಡಿ', 'ಗೋಕಾಕ್', 'ಅಥಣಿ', 'ಬೈಲಹೊಂಗಲ', 'ಸವದತ್ತಿ', 'ರಾಮದುರ್ಗ', 'ಹುಕ್ಕೇರಿ', 'ಖಾನಾಪುರ', 'ರಾಯಭಾಗ'],
      area_units_kn: 'ಗಡಿಭಾಗದ ಬೆಳಗಾವಿ, ಚಿಕ್ಕೋಡಿ, ಗೋಕಾಕ್, ಅಥಣಿ ವ್ಯಾಪ್ತಿಯ 180ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಯುವಜನ ಘಟಕಗಳು.',
      area_units_en: 'Over 180 units mobilizing border region youth and sugar-belt workers rights.'
    },
    {
      id: 'dharwad',
      zone: 'kittur',
      zone_en: 'Kittur Karnataka',
      zone_kn: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
      name_en: 'Dharwad - Hubballi',
      name_kn: 'ಧಾರವಾಡ - ಹುಬ್ಬಳ್ಳಿ',
      taluks_count: 5,
      units_count: '105+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ಲವಿತ್ರ ವಸ್ತ್ರದ',
      president_en: 'Comrade Lavitra Vastrad',
      president_post_kn: 'ಜಿಲ್ಲಾ ಉಸ್ತುವಾರಿ / ರಾಜ್ಯಾಧ್ಯಕ್ಷರು',
      president_post_en: 'District In-charge / State President',
      president_photo: 'images/lavitra_president.jpg',
      president_phone: '+91 9448123456',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ರಮೇಶ್ ಗದಗ',
      secretary_en: 'Comrade Ramesh Gadag',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/shivappa.jpg',
      secretary_phone: '+91 9900876543',
      office_en: 'DYFI District Office, Station Road, Hubballi - 580020',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಕಚೇರಿ, ಸ್ಟೇಷನ್ ರಸ್ತೆ, ಹುಬ್ಬಳ್ಳಿ - 580020',
      phone: '+91 836 2365432 / +91 9448123456',
      leaders: [
        { name_en: 'Comrade Lavitra Vastrad', name_kn: 'ಕಾಮ್ರೇಡ್ ಲವಿತ್ರ ವಸ್ತ್ರದ', post_en: 'District In-charge / State President', post_kn: 'ಜಿಲ್ಲಾ ಉಸ್ತುವಾರಿ / ರಾಜ್ಯಾಧ್ಯಕ್ಷರು', image: 'images/lavitra_president.jpg', phone: '+91 9448123456', area_en: 'Hubballi', area_kn: 'ಹುಬ್ಬಳ್ಳಿ' },
        { name_en: 'Comrade Ramesh Gadag', name_kn: 'ಕಾಮ್ರೇಡ್ ರಮೇಶ್ ಗದಗ', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/shivappa.jpg', phone: '+91 9900876543', area_en: 'Dharwad', area_kn: 'ಧಾರವಾಡ' }
      ],
      taluks_data: [
        { name_kn: 'ಹುಬ್ಬಳ್ಳಿ ನಗರ', name_en: 'Hubballi Urban', president_kn: 'ಕಾಮ್ರೇಡ್ ಲವಿತ್ರ ವಸ್ತ್ರದ', president_en: 'Comrade Lavitra Vastrad', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಮಂಜುನಾಥ್ ಕಟ್ಟಿಮನಿ', secretary_en: 'Comrade Manjunath Kattimani', phone: '+91 9448123456', units_kn: '35 ವಾರ್ಡ್ ಘಟಕಗಳು' },
        { name_kn: 'ಧಾರವಾಡ ನಗರ/ಗ್ರಾಮೀಣ', name_en: 'Dharwad', president_kn: 'ಕಾಮ್ರೇಡ್ ರಮೇಶ್ ಗದಗ', president_en: 'Comrade Ramesh Gadag', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಆನಂದ ಕುಲಕರ್ಣಿ', secretary_en: 'Comrade Anand Kulkarni', phone: '+91 9900876543', units_kn: '30 ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು' },
        { name_kn: 'ಕಲಘಟಗಿ', name_en: 'Kalghatgi', president_kn: 'ಕಾಮ್ರೇಡ್ ಬಸವರಾಜ ಪಾಟೀಲ', president_en: 'Comrade Basavaraj Patil', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಈಶ್ವರಪ್ಪ', secretary_en: 'Comrade Ishwarappa', phone: '+91 9741228899', units_kn: '15 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ನವಲಗುಂದ', name_en: 'Navalgund', president_kn: 'ಕಾಮ್ರೇಡ್ ಫಕೀರಪ್ಪ', president_en: 'Comrade Fakeerappa', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಶಂಕರಪ್ಪ', secretary_en: 'Comrade Shankarappa', phone: '+91 9632338899', units_kn: '14 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಕುಂದಗೋಳ', name_en: 'Kundgol', president_kn: 'ಕಾಮ್ರೇಡ್ ಗಂಗಾಧರ', president_en: 'Comrade Gangadhar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಹನಮಂತಪ್ಪ', secretary_en: 'Comrade Hanamantappa', phone: '+91 9880448899', units_kn: '12 ಗ್ರಾಮ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Hubballi Urban', 'Dharwad Rural', 'Kalghatgi', 'Navalgund', 'Kundgol'],
      taluks_kn: ['ಹುಬ್ಬಳ್ಳಿ ನಗರ', 'ಧಾರವಾಡ ಗ್ರಾಮೀಣ', 'ಕಲಘಟಗಿ', 'ನವಲಗುಂದ', 'ಕುಂದಗೋಳ'],
      area_units_kn: 'ಹುಬ್ಬಳ್ಳಿ-ಧಾರವಾಡ ಅವಳಿ ನಗರ ಹಾಗೂ ತಾಲ್ಲೂಕು ಕೇಂದ್ರಗಳ 105ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಸಮಿತಿಗಳು.',
      area_units_en: 'Over 105 active student, railway worker, and village youth units across twin cities.'
    },
    {
      id: 'shivamogga',
      zone: 'coastal',
      zone_en: 'Malnad Region',
      zone_kn: 'ಮಲೆನಾಡು ವಿಭಾಗ',
      name_en: 'Shivamogga District',
      name_kn: 'ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ',
      taluks_count: 7,
      units_count: '115+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಶಾಂತ್ ಸಾಗರ',
      president_en: 'Comrade Prashanth Sagara',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: 'images/leader-1.jpg',
      president_phone: '+91 9845765432',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ಸುರೇಶ್ ಭದ್ರಾವತಿ',
      secretary_en: 'Comrade Suresh Bhadravathi',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/santosh_bajal.jpg',
      secretary_phone: '+91 9448654321',
      office_en: 'DYFI District Office, B.H. Road, Shivamogga - 577201',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಕಚೇರಿ, ಬಿ.ಎಚ್. ರಸ್ತೆ, ಶಿವಮೊಗ್ಗ - 577201',
      phone: '+91 8182 223344 / +91 9845765432',
      leaders: [
        { name_en: 'Comrade Prashanth Sagara', name_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಶಾಂತ್ ಸಾಗರ', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/leader-1.jpg', phone: '+91 9845765432', area_en: 'Sagara', area_kn: 'ಸಾಗರ' },
        { name_en: 'Comrade Suresh Bhadravathi', name_kn: 'ಕಾಮ್ರೇಡ್ ಸುರೇಶ್ ಭದ್ರಾವತಿ', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/santosh_bajal.jpg', phone: '+91 9448654321', area_en: 'Bhadravathi', area_kn: 'ಭದ್ರಾವತಿ' }
      ],
      taluks_data: [
        { name_kn: 'ಶಿವಮೊಗ್ಗ ನಗರ', name_en: 'Shivamogga', president_kn: 'ಕಾಮ್ರೇಡ್ ಮಂಜುನಾಥ್ ಶಿವಮೊಗ್ಗ', president_en: 'Comrade Manjunath', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಗೌಡ', secretary_en: 'Comrade Santosh Gowda', phone: '+91 9845115566', units_kn: '30 ವಾರ್ಡ್ ಘಟಕಗಳು' },
        { name_kn: 'ಭದ್ರಾವತಿ', name_en: 'Bhadravathi', president_kn: 'ಕಾಮ್ರೇಡ್ ಸುರೇಶ್ ಭದ್ರಾವತಿ', president_en: 'Comrade Suresh', secretary_kn: 'ಕಾಮ್ರೇಡ್ ವೆಂಕಟೇಶ್', secretary_en: 'Comrade Venkatesh', phone: '+91 9448654321', units_kn: '25 ಕೈಗಾರಿಕಾ/ವಾರ್ಡ್ ಘಟಕಗಳು' },
        { name_kn: 'ಸಾಗರ', name_en: 'Sagara', president_kn: 'ಕಾಮ್ರೇಡ್ ಪ್ರಶಾಂತ್ ಸಾಗರ', president_en: 'Comrade Prashanth', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಚಂದ್ರಶೇಖರ್', secretary_en: 'Comrade Chandrashekhar', phone: '+91 9845765432', units_kn: '20 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಶಿಕಾರಿಪುರ', name_en: 'Shikaripura', president_kn: 'ಕಾಮ್ರೇಡ್ ಸಿದ್ದಲಿಂಗಪ್ಪ', president_en: 'Comrade Siddalingappa', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಬಸವರಾಜ್', secretary_en: 'Comrade Basavaraj', phone: '+91 9741225566', units_kn: '15 ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ತೀರ್ಥಹಳ್ಳಿ', name_en: 'Thirthahalli', president_kn: 'ಕಾಮ್ರೇಡ್ ಸುಬ್ರಹ್ಮಣ್ಯ', president_en: 'Comrade Subrahmanya', secretary_kn: 'ಕಾಮ್ರೇಡ್ ದಿನೇಶ್', secretary_en: 'Comrade Dinesh', phone: '+91 9632335566', units_kn: '14 ಗ್ರಾಮ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Shivamogga', 'Bhadravathi', 'Sagara', 'Shikaripura', 'Soraba', 'Thirthahalli', 'Hosanagara'],
      taluks_kn: ['ಶಿವಮೊಗ್ಗ', 'ಭದ್ರಾವತಿ', 'ಸಾಗರ', 'ಶಿಕಾರಿಪುರ', 'ಸೊರಬ', 'ತೀರ್ಥಹಳ್ಳಿ', 'ಹೊಸನಗರ'],
      area_units_kn: 'ಭದ್ರಾವತಿ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ, ಶಿವಮೊಗ್ಗ ನಗರ ಹಾಗೂ ಮಲೆನಾಡು ಭಾಗದ 115ಕ್ಕೂ ಹೆಚ್ಚು ಘಟಕಗಳು.',
      area_units_en: 'Over 115 active units across VISL, MPM industrial zones, and rural Western Ghats forest fringe villages.'
    },
    {
      id: 'ballari',
      zone: 'kalyana',
      zone_en: 'Kalyana Karnataka',
      zone_kn: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
      name_en: 'Ballari - Vijayanagara',
      name_kn: 'ಬಳ್ಳಾರಿ - ವಿಜಯನಗರ',
      taluks_count: 6,
      units_count: '100+',
      president_kn: 'ಕಾಮ್ರೇಡ್ ಶಿವಕುಮಾರ್ ಬಳ್ಳಾರಿ',
      president_en: 'Comrade Shivakumar Ballari',
      president_post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು',
      president_post_en: 'District President',
      president_photo: 'images/shivappa.jpg',
      president_phone: '+91 9880129876',
      secretary_kn: 'ಕಾಮ್ರೇಡ್ ಮಂಜುನಾಥ್ ಸಂಡೂರು',
      secretary_en: 'Comrade Manjunath Sandur',
      secretary_post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ',
      secretary_post_en: 'District Secretary',
      secretary_photo: 'images/leader-1.jpg',
      secretary_phone: '+91 9741098765',
      office_en: 'DYFI District Office, Royal Circle, Ballari - 583101',
      office_kn: 'ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಕಚೇರಿ, ರಾಯಲ್ ಸರ್ಕಲ್, ಬಳ್ಳಾರಿ - 583101',
      phone: '+91 8392 270123 / +91 9880129876',
      leaders: [
        { name_en: 'Comrade Shivakumar Ballari', name_kn: 'ಕಾಮ್ರೇಡ್ ಶಿವಕುಮಾರ್ ಬಳ್ಳಾರಿ', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/leader-1.jpg', phone: '+91 9880129876', area_en: 'Ballari City', area_kn: 'ಬಳ್ಳಾರಿ ನಗರ' },
        { name_en: 'Comrade Manjunath Sandur', name_kn: 'ಕಾಮ್ರೇಡ್ ಮಂಜುನಾಥ್ ಸಂಡೂರು', post_en: 'District Secretary', post_kn: 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ', image: 'images/leader-1.jpg', phone: '+91 9741098765', area_en: 'Sandur', area_kn: 'ಸಂಡೂರು' }
      ],
      taluks_data: [
        { name_kn: 'ಬಳ್ಳಾರಿ ನಗರ', name_en: 'Ballari', president_kn: 'ಕಾಮ್ರೇಡ್ ಶಿವಕುಮಾರ್ ಬಳ್ಳಾರಿ', president_en: 'Comrade Shivakumar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ವೀರೇಶ್ ಬಳ್ಳಾರಿ', secretary_en: 'Comrade Veeresh', phone: '+91 9880129876', units_kn: '30 ವಾರ್ಡ್ ಘಟಕಗಳು' },
        { name_kn: 'ಸಂಡೂರು', name_en: 'Sandur', president_kn: 'ಕಾಮ್ರೇಡ್ ಮಂಜುನಾಥ್ ಸಂಡೂರು', president_en: 'Comrade Manjunath', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಚಂದ್ರಶೇಖರ್', secretary_en: 'Comrade Chandrashekhar', phone: '+91 9741098765', units_kn: '22 ಗಣಿ ಗ್ರಾಮ ಘಟಕಗಳು' },
        { name_kn: 'ಹೊಸಪೇಟೆ', name_en: 'Hosapete', president_kn: 'ಕಾಮ್ರೇಡ್ ರವಿಕುಮಾರ್', president_en: 'Comrade Ravikumar', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಆನಂದ್', secretary_en: 'Comrade Anand', phone: '+91 9632554433', units_kn: '20 ವಾರ್ಡ್ ಘಟಕಗಳು' },
        { name_kn: 'ಸಿರುಗುಪ್ಪ', name_en: 'Siruguppa', president_kn: 'ಕಾಮ್ರೇಡ್ ತಿಮ್ಮಪ್ಪ', president_en: 'Comrade Thimmappa', secretary_kn: 'ಕಾಮ್ರೇಡ್ ಈರಣ್ಣ', secretary_en: 'Comrade Eeranna', phone: '+91 9448665544', units_kn: '15 ಗ್ರಾಮ ಘಟಕಗಳು' }
      ],
      taluks_en: ['Ballari', 'Sandur', 'Siruguppa', 'Hosapete', 'Kudligi', 'Hagaribommanahalli'],
      taluks_kn: ['ಬಳ್ಳಾರಿ', 'ಸಂಡೂರು', 'ಸಿರುಗುಪ್ಪ', 'ಹೊಸಪೇಟೆ', 'ಕೂಡ್ಲಿಗಿ', 'ಹಗರಿಬೊಮ್ಮನಹಳ್ಳಿ'],
      area_units_kn: 'ಬಳ್ಳಾರಿ ನಗರ, ಹೊಸಪೇಟೆ ಹಾಗೂ ಸಂಡೂರು ಗಣಿ ಪ್ರದೇಶದ 100ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಯುವಜನ ಸಮಿತಿಗಳು.',
      area_units_en: 'Over 100 active units representing steel workers, mining youth, and agrarian committees.'
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
          case DYFI_DATA_KEYS.DISTRICTS: this.set(storageKey, DEFAULT_DYFI_DATA.districts); break;
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

    // Auto-fix any broken youtube gallery image in existing localStorage
    const gal = this.get(DYFI_DATA_KEYS.GALLERY);
    if (Array.isArray(gal) && (gal.length < 8 || gal.some(g => !g.src || g.src.includes('youtube')))) {
      this.set(DYFI_DATA_KEYS.GALLERY, DEFAULT_DYFI_DATA.gallery);
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
    return true;
  }
}

if (typeof window !== 'undefined') {
  window.DyfiDataStore = DyfiDataStore;
  window.DYFI_DATA_KEYS = DYFI_DATA_KEYS;
  DyfiDataStore.init();
}
