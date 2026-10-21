/**
 * DYFI KARNATAKA — STATE COMMITTEE OFFICIAL JAVASCRIPT
 * Democratic Youth Federation of India — Karnataka
 */

/* ========================================================
   1. DISTRICT UNITS DATABASE (Taluks, Counts & Leaders)
   ======================================================== */
const districtUnitsData = [
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
      { name_en: 'Comrade Shivakumar Ballari', name_kn: 'ಕಾಮ್ರೇಡ್ ಶಿವಕುಮಾರ್ ಬಳ್ಳಾರಿ', post_en: 'District President', post_kn: 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು', image: 'images/shivappa.jpg', phone: '+91 9880129876', area_en: 'Ballari City', area_kn: 'ಬಳ್ಳಾರಿ ನಗರ' },
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
];

/* ========================================================
   2. BILINGUAL TRANSLATION DICTIONARY
   ======================================================== */
const i18nData = {
  en: {
    langBtn: 'ಕನ್ನಡ',
    brandTitle: 'DYFI <span class="red-text">KARNATAKA</span>',
    brandSubtitle: 'Karnataka State Committee',
    navHome: 'Home',
    navAbout: 'About Us',
    navHistory: 'History & Background',
    navIdeology: 'Ideology & Objectives',
    navLeadership: 'State Leadership',
    navDistricts: 'District Units',
    navCommittees: 'Committees & Units',
    navDistrictCommittees: '🚩 District Committees',
    navTalukCommittees: '🏛️ Taluk Committees',
    navAreaCommittees: '👥 Village & Area Units',
    navCampaigns: 'Campaigns',
    navActivities: 'Activities',
    navGallery: 'Gallery',
    navNews: 'News',
    navBlood: 'Blood Donation',
    navContactBtn: 'Contact Us',
    
    tickerTitle: 'Official Circular',
    tickerText: 'Statewide Youth Convention against Unemployment — All District Committees advised to mobilize.',
    tickerHelp: 'Emergency Blood Helpline:',
    
    heroTag: '★ Democratic Youth Federation of India — Karnataka',
    heroTitle: 'United Youth, <span class="highlight-red">Secular Karnataka</span> — Building a Better Tomorrow',
    heroDesc: 'DYFI Karnataka State Committee stands at the forefront of progressive youth struggles, advocating for employment, quality free education, communal harmony, and social justice across Karnataka.',
    heroBtnJoin: 'Get Involved »',
    heroBtnMission: 'Our Ideology & Mission',
    
    aboutHeadline: 'Empowering Youth, Safeguarding Secularism — <span class="highlight-red">DYFI Karnataka State Committee</span> Leading Progressive Movements',
    aboutSubtext: 'Employment for all, quality free education, communal harmony, scientific temper, and an egalitarian society free from injustice and discrimination are our supreme guiding principles.',
    btnReadMore: 'Read More ↗',
    
    stat1: 'Active Youth Members',
    stat2: 'District Committees',
    stat3: 'Blood Requests Met',
    stat4: 'State Campaigns',
    
    campSectionTitle: 'Our <span class="highlight-red">Campaigns</span>',
    btnViewAll: 'View All ↗',
    
    camp1Title: 'Karnataka Youth Employment Rights Movement',
    camp1Desc: 'Demanding immediate recruitment for 2.5 lakh vacant government posts, fair employment, and local reservation in industries.',
    camp2Title: 'Secular Harmony & Unity Campaign',
    camp2Desc: 'Statewide mass awareness rallies across all 31 districts to defend secularism, composite culture, and fraternity.',
    camp3Title: 'Free & Equal Quality Education',
    camp3Desc: 'Continuous resistance against privatization of education, demanding prompt release of student scholarships and hostel facilities.',
    
    quoteMain: 'True <span class="highlight-red">transformation</span> begins when the youth unite to challenge injustice and build equality.',
    quoteMotto: '“Struggle is our path, equality is our goal — Che Guevara”',
    btnMovement: 'Join the Movement ✊',
    
    actSectionTitle: 'Recent <span class="highlight-red">Activities</span>',
    act1Title: 'Bengaluru State Youth Convention',
    act1Desc: 'Thousands of young delegates from all 31 Karnataka districts assembled to formulate proactive youth policies.',
    act2Title: 'Flood Relief & Volunteer Taskforce',
    act2Desc: 'DYFI volunteer squads deployed to distribute relief kits and rehabilitate flood-affected villages in North Karnataka.',
    act3Title: 'Free Public Health Diagnostics Camps',
    act3Desc: 'Preventive wellness camps organized in underprivileged areas in collaboration with progressive doctors and institutions.',
    
    annSectionTitle: 'Official <span class="highlight-red">Announcements</span>',
    ann1Title: 'Taluk Assembly Review Report Submission',
    ann1Text: 'All Local Unit committees must submit their youth survey reports to the respective taluk centers by September 15.',
    ann2Title: 'Monsoon Natural Disaster Task Force',
    ann2Text: 'Circular advising all coastal and river basin units to mobilize emergency volunteer groups for monsoon assistance.',
    
    districtsTag: '★ Organizational Network across Karnataka',
    districtsSectionTitle: 'District, Taluk & Area <span class="highlight-red">Committees</span>',
    districtsSectionSub: 'Democratically elected District & Taluk Presidents, Secretaries, and local units leading struggles across Karnataka.',
    filterAllDistricts: 'All Districts',
    filterCoastal: 'Coastal & Malnad',
    filterBengaluru: 'Bengaluru Region',
    filterMysuru: 'Mysuru Region',
    filterKalyana: 'Kalyana Karnataka',
    filterKittur: 'Kittur Karnataka',
    
    bloodTitle: 'A drop of blood, a lifetime for someone!',
    bloodSub: 'Connecting patients in critical emergencies across Karnataka with voluntary youth blood donors round the clock.',
    bloodHelplineLabel: '24/7 State Emergency Blood Helpline',
    btnBloodReg: 'Register as Volunteer Donor ❤️',
    
    galleryTitle: 'Photo <span class="highlight-red">Gallery</span>',
    filterAll: 'All',
    filterRally: 'Rallies',
    filterConf: 'Conferences',
    filterRelief: 'Relief Work',
    filterHealth: 'Health Camps',
    
    newsSectionTitle: 'Latest <span class="highlight-red">News</span>',
    news1Title: 'DYFI Launches Comprehensive Karnataka Youth Survey',
    news1Desc: 'A statewide initiative mapping employment needs and vocational skills among youth across all regions.',
    news2Title: 'Protest March Demanding Modernization of District Hospitals',
    news2Desc: 'Youth delegation submits memorandum to Deputy Commissioner demanding advanced ICUs and free medicines.',
    news3Title: 'Karnataka Youth Sports & Cultural Festival Concludes',
    news3Desc: 'Fostering camaraderie, athletic skills, and progressive cultural consciousness among thousands of youth.',
    
    
    navStatements: 'Statements',
    navMartyrs: 'Martyrs',
    navJoinRev: 'Join The Revolution',
    stSectionTitle: 'Official <span class="highlight-red">Statements &amp; Press Notes</span>',
    martyrsSectionTitle: 'Immortal <span class="highlight-red">Martyrs of Struggle</span>',
    martyrsIntro: 'Revolutionary homage to the immortal comrades who laid down their lives fighting for secularism, employment, social justice, and student rights across Karnataka.',
    videoSectionTitle: 'Youth <span class="highlight-red">Rallies &amp; Video Streams</span>',
    videoMainTitle: 'Moments of Struggle: Highlights from State Youth Conventions',
    videoMainSub: 'Live footage capturing thousands of energetic youth, college students, and progressive citizens demanding employment guarantee and public welfare.',
    bloodSearchHeading: 'Emergency Blood Donor Finder',
    joinModalTitle: 'Join The Revolution (ಸದಸ್ಯತ್ವ)',
    joinModalSub: 'Become part of India\'s vanguard progressive democratic youth movement fighting for equality, education, and social harmony.',
    btnDownloadStatement: 'Download Statement PDF ⬇',
    adminLink: 'Admin Portal',
    leadSectionTitle: 'State <span class="highlight-red">Leadership</span>',
    lead1Name: 'Comrade Lavitra Vastrad',
    lead1Role: 'State President',
    lead2Name: 'Comrade Santosh Bajal',
    lead2Role: 'State General Secretary',
    lead3Name: 'Comrade Dilip Bangalore',
    lead3Role: 'State Treasurer',
    
    contactTitle: 'Contact & <span class="highlight-red">District Network</span>',
    officeLabel: 'State Headquarters Address',
    officeVal: 'DYFI Karnataka State Committee, No. 45, City Railway Station Road, Gandhinagar, Bengaluru - 560009.',
    phoneLabel: 'Phone / Helpline',
    phoneVal: '+91 80 2287 4521 / +91 94481 23456',
    emailLabel: 'Email Address',
    emailVal: 'dyfikarnataka@gmail.com',
    formName: 'Your Full Name',
    formPhone: 'Mobile Number',
    formDistrict: 'Your District',
    formMsg: 'Your Message or Inquiry',
    formSubmit: 'Send Message 🚀',
    
    footerDesc: 'Democratic Youth Federation of India (DYFI) — Leading the progressive youth movement for employment, education, secularism, and democracy.',
    footerQuick: 'Quick Links',
    footerDistricts: 'Key Districts',
    footerLegal: 'State Secretariat',
    footerTerms: 'Gandhinagar, Bengaluru - 560009',
    footerPrivacy: 'Helpline: +91 9448123456',
    footerRights: '© 2026 — DYFI Karnataka State Committee. All Rights Reserved.'
  },
  
  kn: {
    langBtn: 'English',
    brandTitle: 'ಡಿವೈಎಫ್ಐ <span class="red-text">ಕರ್ನಾಟಕ</span>',
    brandSubtitle: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿ',
    navHome: 'ಮುಖಪುಟ',
    navAbout: 'ನಮ್ಮ ಬಗ್ಗೆ',
    navHistory: 'ಇತಿಹಾಸ ಮತ್ತು ಹಿನ್ನೆಲೆ',
    navIdeology: 'ಧ್ಯೇಯ ಮತ್ತು ಸಂವಿಧಾನ',
    navLeadership: 'ರಾಜ್ಯ ನಾಯಕತ್ವ',
    navDistricts: 'ಜಿಲ್ಲಾ ಘಟಕಗಳು',
    navCommittees: 'ಸಮಿತಿಗಳು & ಘಟಕಗಳು',
    navDistrictCommittees: '🚩 ಜಿಲ್ಲಾ ಸಮಿತಿಗಳು',
    navTalukCommittees: '🏛️ ತಾಲ್ಲೂಕು ಸಮಿತಿಗಳು',
    navAreaCommittees: '👥 ಗ್ರಾಮ & ಏರಿಯಾ ಸಮಿತಿಗಳು',
    navCampaigns: 'ಅಭಿಯಾನಗಳು',
    navActivities: 'ಚಟುವಟಿಕೆಗಳು',
    navGallery: 'ಚಿತ್ರ ಗ್ಯಾಲರಿ',
    navNews: 'ಸುದ್ದಿಗಳು',
    navBlood: 'ರಕ್ತದಾನ ಸೇವೆ',
    navContactBtn: 'ಸಂಪರ್ಕಿಸಿ',
    
    tickerTitle: 'ಅಧಿಕೃತ ಸುತ್ತೋಲೆ',
    tickerText: 'ರಾಜ್ಯವ್ಯಾಪಿ ನಿರುದ್ಯೋಗ ವಿರುದ್ಧ ಬೃಹತ್ ಯುವ ಜಾಗೃತಿ ಸಮಾವೇಶ — ಎಲ್ಲಾ ಜಿಲ್ಲಾ ಘಟಕಗಳು ಸಿದ್ಧತೆ ಕೈಗೊಳ್ಳಲು ಕರೆ.',
    tickerHelp: 'ತುರ್ತು ರಕ್ತದಾನ ಸಹಾಯವಾಣಿ:',
    
    heroTag: '★ ಭಾರತ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಯುವಜನ ಫೆಡರೇಶನ್ — ಕರ್ನಾಟಕ',
    heroTitle: 'ಒಗ್ಗಟ್ಟಾದ ಯುವಜನತೆ, <span class="highlight-red">ಜಾತ್ಯತೀತ ಕರ್ನಾಟಕ</span> — ಉಜ್ವಲ ಭವಿಷ್ಯದೆಡೆಗೆ',
    heroDesc: 'ಭಾರತ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಯುವಜನ ಫೆಡರೇಶನ್ (DYFI) ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿ — ನಿರುದ್ಯೋಗ, ಅಸಮಾನತೆ ಹಾಗೂ ಕೋಮುವಾದದ ವಿರುದ್ಧ ರಾಜ್ಯದ 31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಸಾಗುತ್ತಿರುವ ಯುವಜನರ ಹೋರಾಟದ ಧ್ವನಿ.',
    heroBtnJoin: 'ಹೋರಾಟದಲ್ಲಿ ಕೈಜೋಡಿಸಿ »',
    heroBtnMission: 'ನಮ್ಮ ಧ್ಯೇಯೋದ್ದೇಶಗಳು',
    
    aboutHeadline: 'ಯುವಜನರ ಸಬಲೀಕರಣ, ಜಾತ್ಯತೀತತೆಯ ರಕ್ಷಣೆ — <span class="highlight-red">ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿ</span> ಮುಂಚೂಣಿ ಹೋರಾಟ',
    aboutSubtext: 'ಸರ್ವರಿಗೂ ಉದ್ಯೋಗ, ಎಲ್ಲರಿಗೂ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ, ಕೋಮು ಸೌಹಾರ್ದ ಹಾಗೂ ಜಾತಿ-ಧರ್ಮ ಭೇದವಿಲ್ಲದ ಸಮಾನತೆಯ ಸಮಾಜ ನಿರ್ಮಾಣವೇ ನಮ್ಮ ಮೂಲ ಉದ್ದೇಶ.',
    btnReadMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ ↗',
    
    stat1: 'ಸಕ್ರಿಯ ಯುವ ಸದಸ್ಯರು',
    stat2: 'ಜಿಲ್ಲಾ ಸಮಿತಿಗಳು',
    stat3: 'ರಕ್ತದಾನ ನೆರವು ಪೂರೈಕೆ',
    stat4: 'ಸಾಮಾಜಿಕ ಚಳುವಳಿಗಳು',
    
    campSectionTitle: 'ನಮ್ಮ <span class="highlight-red">ಅಭಿಯಾನಗಳು</span>',
    btnViewAll: 'ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ ↗',
    
    camp1Title: 'ರಾಜ್ಯ ಯುವ ಉದ್ಯೋಗ ಹಕ್ಕು ಚಳುವಳಿ',
    camp1Desc: 'ಕರ್ನಾಟಕದ ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳಲ್ಲಿ ಖಾಲಿ ಇರುವ 2.5 ಲಕ್ಷ ಹುದ್ದೆಗಳ ಭರ್ತಿ ಹಾಗೂ ಸ್ಥಳೀಯ ಯುವಕರಿಗೆ ಉದ್ಯೋಗ ಮೀಸಲಾತಿಗೆ ಆಗ್ರಹ.',
    camp2Title: 'ಕೋಮು ಸೌಹಾರ್ದ ಹಾಗೂ ಏಕತೆ ಅಭಿಯಾನ',
    camp2Desc: 'ದ್ವೇಷ ರಾಜಕಾರಣದ ವಿರುದ್ಧ ಶಾಂತಿ, ಸೌಹಾರ್ದತೆ ಮತ್ತು ಭ್ರಾತೃತ್ವ ಕಾಪಾಡಲು ರಾಜ್ಯದ ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಜಾಗೃತಿ ಜಾತಾಗಳು.',
    camp3Title: 'ಉಚಿತ ಮತ್ತು ಸಮಾನ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ',
    camp3Desc: 'ಶಿಕ್ಷಣದ ಖಾಸಗೀಕರಣ ತಡೆ, ವಿದ್ಯಾರ್ಥಿ ವೇತನ ಹಾಗೂ ಹಾಸ್ಟೆಲ್ ಸೌಲಭ್ಯಗಳ ಸಕಾಲಿಕ ಬಿಡುಗಡೆಗಾಗಿ ನಿರಂತರ ಪ್ರತಿಭಟನೆ.',
    
    quoteMain: 'ಯುವಜನರು ಅನ್ಯಾಯದ ವಿರುದ್ಧ ಒಗ್ಗೂಡಿ <span class="highlight-red">ಸಮಾನತೆ ಮತ್ತು ಸಾಮಾಜಿಕ ನ್ಯಾಯ</span> ಕಟ್ಟಲು ನಿಂತಾಗ ಮಾತ್ರ ಬದಲಾವಣೆ ಸಾಧ್ಯ.',
    quoteMotto: '“ಹೋರಾಟವೇ ನಮ್ಮ ಹಾದಿ, ಸಮಾನತೆಯೇ ನಮ್ಮ ಗುರಿ — ಚೇ ಗುವಾರಾ”',
    btnMovement: 'ಹೋರಾಟದಲ್ಲಿ ಕೈಜೋಡಿಸಿ ✊',
    
    actSectionTitle: 'ಇತ್ತೀಚಿನ <span class="highlight-red">ಚಟುವಟಿಕೆಗಳು</span>',
    act1Title: 'ಬೆಂಗಳೂರು ರಾಜ್ಯ ಮಟ್ಟದ ಯುವ ಸಮಾವೇಶ',
    act1Desc: 'ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳಿಂದ ಸಹಸ್ರಾರು ಯುವ ಪ್ರತಿನಿಧಿಗಳು ಪಾಲ್ಗೊಂಡು ಯುವ ನೀತಿ ಕುರಿತು ಚರ್ಚಿಸಿದ ಐತಿಹಾಸಿಕ ಸಮಾವೇಶ.',
    act2Title: 'ಪ್ರವಾಹ ಸಂತ್ರಸ್ತರ ಪುನರ್ವಸತಿ ನೆರವು',
    act2Desc: 'ಉತ್ತರ ಕರ್ನಾಟಕ ಮತ್ತು ಮಲೆನಾಡು ಭಾಗದ ಪ್ರವಾಹ ಪೀಡಿತ ಗ್ರಾಮಗಳಲ್ಲಿ ಡಿವೈಎಫ್ಐ ಸ್ವಯಂಸೇವಕರಿಂದ ಪರಿಹಾರ ಸಾಮಗ್ರಿ ವಿತರಣೆ.',
    act3Title: 'ಉಚಿತ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಮತ್ತು ತಪಾಸಣೆ ಶಿಬಿರ',
    act3Desc: 'ಹಿಂದುಳಿದ ಪ್ರದೇಶಗಳ ಜನರಿಗಾಗಿ ನುರಿತ ವೈದ್ಯರ ಸಹಯೋಗದೊಂದಿಗೆ ಉಚಿತ ತಪಾಸಣೆ ಹಾಗೂ ಔಷಧ ವಿತರಣಾ ಶಿಬಿರಗಳು.',
    
    annSectionTitle: 'ಅಧಿಕೃತ <span class="highlight-red">ಸುತ್ತೋಲೆಗಳು</span>',
    ann1Title: 'ರಾಜ್ಯ ವ್ಯಾಪಿ ತಾಲ್ಲೂಕು ಸಮಾವೇಶಗಳ ವರದಿ ಸಲ್ಲಿಕೆ',
    ann1Text: 'ಎಲ್ಲಾ ಜಿಲ್ಲಾ ಮತ್ತು ತಾಲ್ಲೂಕು ಘಟಕಗಳು ತಮ್ಮ ವಾರ್ಷಿಕ ಸದಸ್ಯತ್ವ ಹಾಗೂ ಹೋರಾಟದ ವರದಿಯನ್ನು ರಾಜ್ಯ ಕೇಂದ್ರಕ್ಕೆ ಸೆಪ್ಟೆಂಬರ್ 15ರೊಳಗೆ ಸಲ್ಲಿಸುವುದು.',
    ann2Title: 'ಮುಂಗಾರು ನೈಸರ್ಗಿಕ ವಿಕೋಪ ಪರಿಹಾರ ಕಾರ್ಯಪಡೆ ರಚನೆ',
    ann2Text: 'ಮಳೆ ಹಾನಿ ಪೀಡಿತ ಪ್ರದೇಶಗಳಲ್ಲಿ ತುರ್ತು ನೆರವಿಗಾಗಿ ಡಿವೈಎಫ್ಐ ಯುವ ಕಾರ್ಯಪಡೆಗಳನ್ನು ಸನ್ನದ್ಧ ಸ್ಥಿತಿಯಲ್ಲಿಡಲು ಸುತ್ತೋಲೆ.',
    
    districtsTag: '★ ಕರ್ನಾಟಕ ರಾಜ್ಯಾದ್ಯಂತ ಸಾಂಘಿಕ ಜಾಲ',
    districtsSectionTitle: 'ಜಿಲ್ಲಾ, ತಾಲ್ಲೂಕು & ಏರಿಯಾ <span class="highlight-red">ಸಮಿತಿಗಳು</span>',
    districtsSectionSub: 'ಕರ್ನಾಟಕದ ಪ್ರತಿ ಜಿಲ್ಲೆ ಮತ್ತು ತಾಲ್ಲೂಕುಗಳಲ್ಲಿ ಯುವಜನ ಹೋರಾಟ ಮುನ್ನಡೆಸುತ್ತಿರುವ ಚುನಾಯಿತ ಅಧ್ಯಕ್ಷರು, ಕಾರ್ಯದರ್ಶಿಗಳು ಹಾಗೂ ಸಮಿತಿಗಳು.',
    filterAllDistricts: 'ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳು',
    filterCoastal: 'ಕರಾವಳಿ ಮತ್ತು ಮಲೆನಾಡು',
    filterBengaluru: 'ಬೆಂಗಳೂರು ವಿಭಾಗ',
    filterMysuru: 'ಮೈಸೂರು ವಿಭಾಗ',
    filterKalyana: 'ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ',
    filterKittur: 'ಕಿತ್ತೂರು ಕರ್ನಾಟಕ',
    
    bloodTitle: 'ರಕ್ತದ ಹನಿ — ಜೀವದ ಚಿಗುರು!',
    bloodSub: 'ಕರ್ನಾಟಕ ರಾಜ್ಯಾದ್ಯಂತ ತುರ್ತು ರಕ್ತದ ಅಗತ್ಯವಿರುವ ರೋಗಿಗಳಿಗೆ ಉಚಿತವಾಗಿ ರಕ್ತ ಒದಗಿಸುವ ಡಿವೈಎಫ್ಐ ಯುವಜನ ರಕ್ತದಾನ ಜಾಲ.',
    bloodHelplineLabel: '24/7 ತುರ್ತು ರಾಜ್ಯ ರಕ್ತದಾನ ಸಹಾಯವಾಣಿ',
    btnBloodReg: 'ಸ್ವಯಂಸೇವಕ ರಕ್ತದಾನಿ ನೋಂದಣಿ ❤️',
    
    galleryTitle: 'ಚಿತ್ರ <span class="highlight-red">ಗ್ಯಾಲರಿ</span>',
    filterAll: 'ಎಲ್ಲವೂ',
    filterRally: 'ರ್ಯಾಲಿಗಳು',
    filterConf: 'ಸಮಾವೇಶಗಳು',
    filterRelief: 'ಪರಿಹಾರ ಕಾರ್ಯ',
    filterHealth: 'ಆರೋಗ್ಯ ಶಿಬಿರ',
    
    newsSectionTitle: 'ತಾಜಾ <span class="highlight-red">ಸುದ್ದಿಗಳು</span>',
    news1Title: 'ಕರ್ನಾಟಕದಲ್ಲಿ ನಿರುದ್ಯೋಗ ಸಮೀಕ್ಷೆ ಬಿಡುಗಡೆ ಮಾಡಿದ ಡಿವೈಎಫ್ಐ',
    news1Desc: 'ಗ್ರಾಮೀಣ ಹಾಗೂ ನಗರ ಪ್ರದೇಶದ ಯುವಕರ ನೈಜ ಸ್ಥಿತಿಗತಿ ಬಿಂಬಿಸುವ ಸಮಗ್ರ ಉದ್ಯೋಗ ಸಮೀಕ್ಷಾ ವರದಿ ಬಿಡುಗಡೆ.',
    news2Title: 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗಳ ಉನ್ನತೀಕರಣಕ್ಕೆ ಆಗ್ರಹಿಸಿ ಜಿಲ್ಲಾಧಿಕಾರಿ ಕಚೇರಿ ಚಲೋ',
    news2Desc: 'ಬಡವರಿಗೆ ಗುಣಮಟ್ಟದ ಚಿಕಿತ್ಸೆ ದೊರೆಯುವಂತೆ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಸೌಲಭ್ಯ ಹೆಚ್ಚಿಸಲು ಆಗ್ರಹಿಸಿ ಹೋರಾಟ.',
    news3Title: 'ಯುವ ಜನೋತ್ಸವ ಮತ್ತು ಕ್ರೀಡಾ ಕೂಟ ಯಶಸ್ವಿ ಸಮಾರೋಪ',
    news3Desc: 'ಯುವಜನರಲ್ಲಿ ಕ್ರೀಡಾ ಮನೋಭಾವ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಒಗ್ಗಟ್ಟು ಬೆಳೆಸಲು ರಾಜ್ಯವ್ಯಾಪಿ ಯುವ ಉತ್ಸವ.',
    
    
    navStatements: 'ಹೇಳಿಕೆಗಳು',
    navMartyrs: 'ಹುತಾತ್ಮರು',
    navJoinRev: 'ಕ್ರಾಂತಿಯಲ್ಲಿ ಕೈಜೋಡಿಸಿ',
    stSectionTitle: 'ಅಧಿಕೃತ <span class="highlight-red">ಹೇಳಿಕೆಗಳು &amp; ಪ್ರಕಟಣೆಗಳು</span>',
    martyrsSectionTitle: 'ಹೋರಾಟದ <span class="highlight-red">ಅಮರ ಹುತಾತ್ಮರು</span>',
    martyrsIntro: 'ಯುವಜನರ ಹಕ್ಕುಗಳು, ಸಾಮಾಜಿಕ ನ್ಯಾಯ, ಸಮಾನತೆ ಮತ್ತು ಕೋಮು ಸೌಹಾರ್ದತೆಯ ಉದಾತ್ತ ಧ್ಯೇಯಕ್ಕಾಗಿ ತಮ್ಮ ಜೀವನವನ್ನೇ ಬಲಿದಾನ ಮಾಡಿದ ಕ್ರಾಂತಿಕಾರಿ ಹುತಾತ್ಮರಿಗೆ ನಮ್ಮ ಕ್ರಾಂತಿಕಾರಿ ನಮನಗಳು.',
    videoSectionTitle: 'ಯುವಜನ <span class="highlight-red">ರ‍್ಯಾಲಿಗಳು &amp; ವೀಡಿಯೋಗಳು</span>',
    videoMainTitle: 'ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಯುವ ಸಮಾವೇಶದ ಪ್ರಮುಖ ಕ್ಷಣಗಳು',
    videoMainSub: 'ಲಕ್ಷಾಂತರ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಯುವಜನರನ್ನು ಒಗ್ಗೂಡಿಸಿ ಉದ್ಯೋಗ ಮತ್ತು ಶಿಕ್ಷಣಕ್ಕಾಗಿ ನಡೆದ ಬೃಹತ್ ಸಮಾವೇಶದ ನೇರ ದೃಶ್ಯಾವಳಿಗಳು.',
    bloodSearchHeading: 'ತುರ್ತು ರಕ್ತದಾನಿ ಹುಡುಕಾಟ (Emergency Blood Finder)',
    joinModalTitle: 'ಕ್ರಾಂತಿಯಲ್ಲಿ ಕೈಜೋಡಿಸಿ (Join The Revolution)',
    joinModalSub: 'ಯುವಜನರ ಹಕ್ಕುಗಳು, ಶಿಕ್ಷಣ ಮತ್ತು ಸಮಾನ ಸಮಾಜ ನಿರ್ಮಾಣದ ಐತಿಹಾಸಿಕ ಚಳವಳಿಯ ಭಾಗವಾಗಿ. ಸದಸ್ಯತ್ವಕ್ಕಾಗಿ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.',
    btnDownloadStatement: 'ಹೇಳಿಕೆ PDF ಡೌನ್‌ಲೋಡ್ ⬇',
    adminLink: 'ಅಡ್ಮಿನ್ ಪೋರ್ಟಲ್',
    leadSectionTitle: 'ರಾಜ್ಯ <span class="highlight-red">ಮುಖಂಡರು</span>',
    lead1Name: 'ಕಾಮ್ರೇಡ್ ಲವಿತ್ರ ವಸ್ತ್ರದ',
    lead1Role: 'ರಾಜ್ಯ ಅಧ್ಯಕ್ಷರು',
    lead2Name: 'ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಬಜಾಲ್',
    lead2Role: 'ರಾಜ್ಯ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ',
    lead3Name: 'ಕಾಮ್ರೇಡ್ ದಿಲೀಪ್ (ಬೆಂಗಳೂರು)',
    lead3Role: 'ರಾಜ್ಯ ಖಜಾಂಚಿ',
    
    contactTitle: 'ಸಂಪರ್ಕಿಸಿ & <span class="highlight-red">ಜಿಲ್ಲಾ ಜಾಲ</span>',
    officeLabel: 'ರಾಜ್ಯ ಕೇಂದ್ರ ಕಚೇರಿ ವಿಳಾಸ',
    officeVal: 'ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿ, ನಂ. 45, ಸಿಟಿ ರೈಲ್ವೆ ಸ್ಟೇಷನ್ ರಸ್ತೆ, ಗಾಂಧಿನಗರ, ಬೆಂಗಳೂರು - 560009.',
    phoneLabel: 'ದೂರವಾಣಿ / ಮೊಬೈಲ್',
    phoneVal: '+91 80 2287 4521 / +91 94481 23456',
    emailLabel: 'ಇಮೇಲ್ ವಿಳಾಸ',
    emailVal: 'dyfikarnataka@gmail.com',
    formName: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು',
    formPhone: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    formDistrict: 'ನಿಮ್ಮ ಜಿಲ್ಲೆ',
    formMsg: 'ನಿಮ್ಮ ಸಂದೇಶ ಅಥವಾ ಪ್ರಶ್ನೆ',
    formSubmit: 'ಸಂದೇಶ ಕಳುಹಿಸಿ 🚀',
    
    footerDesc: 'ಭಾರತ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಯುವಜನ ಫೆಡರೇಶನ್ (DYFI) — ಯುವಜನರ ಹಕ್ಕುಗಳು, ಶಿಕ್ಷಣ, ಉದ್ಯೋಗ ಮತ್ತು ಸಾಮಾಜಿಕ ನ್ಯಾಯಕ್ಕಾಗಿ ಹೋರಾಡುವ ಪ್ರಮುಖ ಸಂಘಟನೆ.',
    footerQuick: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
    footerDistricts: 'ಪ್ರಮುಖ ಜಿಲ್ಲೆಗಳು',
    footerLegal: 'ರಾಜ್ಯ ಸಚಿವಾಲಯ',
    footerTerms: 'ಗಾಂಧಿನಗರ, ಬೆಂಗಳೂರು - 560009',
    footerPrivacy: 'ಸಹಾಯವಾಣಿ: +91 9448123456',
    footerRights: '© 2026 — ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿ. ಸರ್ವ ಹಕ್ಕುಗಳೂ ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.'
  }
};

// Current language and theme preferences
let currentLang = localStorage.getItem('dyfi_lang') || 'kn';
let currentTheme = localStorage.getItem('dyfi_theme') || 'dark';

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
  initLanguageSwitcher();
  initDistrictUnits();
  initHeroCarousel();
  initCounters();
  initModals();
  initGallery();
  initContactForm();
  initMobileDrawer();
  initScrollEffects();
});

/* ========================================================
   2.5 THEME SWITCHER (DARK / LIGHT MODE)
   ======================================================== */
function initThemeSwitcher() {
  applyTheme(currentTheme);

  const desktopBtn = document.getElementById('themeToggleBtn');
  const mobileBtn = document.getElementById('mobileThemeToggleBtn');

  const toggleHandler = () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('dyfi_theme', currentTheme);
    applyTheme(currentTheme);
    const msg = currentTheme === 'light'
      ? (currentLang === 'kn' ? 'ಬೆಳಕಿನ ಥೀಮ್ (Light Mode) ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ' : 'Switched to Light Mode')
      : (currentLang === 'kn' ? 'ಡಾರ್ಕ್ ಥೀಮ್ (Dark Mode) ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ' : 'Switched to Dark Mode');
    showToast(msg);
  };

  if (desktopBtn) {
    desktopBtn.addEventListener('click', toggleHandler);
  }
  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleHandler);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';

  // Desktop Toggle Button
  const desktopBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.textContent = isDark ? '☀️' : '🌙';
  }
  if (desktopBtn) {
    const label = isDark
      ? (currentLang === 'kn' ? 'ಬೆಳಕಿನ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ' : 'Switch to Light Mode')
      : (currentLang === 'kn' ? 'ಡಾರ್ಕ್ ಮೋಡ್‌ಗೆ ಬದಲಾಯಿಸಿ' : 'Switch to Dark Mode');
    desktopBtn.setAttribute('title', label);
    desktopBtn.setAttribute('aria-label', label);
  }

  // Mobile Drawer Toggle Button
  const mobileThemeIcon = document.getElementById('mobileThemeIcon');
  const mobileThemeText = document.getElementById('mobileThemeText');
  if (mobileThemeIcon) {
    mobileThemeIcon.textContent = isDark ? '☀️' : '🌙';
  }
  if (mobileThemeText) {
    if (isDark) {
      mobileThemeText.textContent = currentLang === 'kn' ? 'ಬೆಳಕಿನ ಥೀಮ್ (Light Mode)' : 'Light Mode';
    } else {
      mobileThemeText.textContent = currentLang === 'kn' ? 'ಡಾರ್ಕ್ ಥೀಮ್ (Dark Mode)' : 'Dark Mode';
    }
  }
}

/* ========================================================
   3. LANGUAGE SWITCHER LOGIC
   ======================================================== */
function initLanguageSwitcher() {
  const langBtn = document.getElementById('langToggleBtn');
  if (!langBtn) return;
  
  applyLanguage(currentLang);
  
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'kn' : 'en';
    localStorage.setItem('dyfi_lang', currentLang);
    applyLanguage(currentLang);
    renderDistrictCards();
    showToast(currentLang === 'kn' ? 'ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ' : 'Language switched to English');
  });
}

function applyLanguage(lang) {
  const data = i18nData[lang];
  if (!data) return;
  
  // Update lang attribute on html
  document.documentElement.lang = lang;
  
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.innerHTML = `<span class="lang-icon">🌐</span> <span class="lang-text">${data.langBtn}</span>`;
  }
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      el.innerHTML = data[key];
    }
  });

  // Keep theme switcher button text in sync with active language
  applyTheme(currentTheme);

  // Re-apply live customized admin content so admin changes always take priority
  if (typeof renderDynamicDataStoreContent === 'function') {
    renderDynamicDataStoreContent(lang);
  }
}

/* ========================================================
   4. DISTRICT UNITS EXPLORER & MODAL
   ======================================================== */
let currentDistrictFilter = 'all';

function initDistrictUnits() {
  renderDistrictCards();
  
  const filterBtns = document.querySelectorAll('.district-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDistrictFilter = btn.getAttribute('data-filter');
      renderDistrictCards();
    });
  });
  
  // Modal Close
  const closeBtn = document.getElementById('closeDistrictModal');
  const modal = document.getElementById('districtDetailsModal');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }
}

function renderDistrictCards() {
  const container = document.getElementById('districtsGridContainer');
  if (!container) return;
  
  const isKn = currentLang === 'kn';
  const filtered = currentDistrictFilter === 'all' 
    ? districtUnitsData 
    : districtUnitsData.filter(d => d.zone === currentDistrictFilter);
    
  container.innerHTML = filtered.map(d => {
    const dName = isKn ? d.name_kn : d.name_en;
    const dZone = isKn ? d.zone_kn : d.zone_en;
    const talukLabel = isKn ? `${d.taluks_count} ತಾಲ್ಲೂಕುಗಳು` : `${d.taluks_count} Taluks`;
    const unitsLabel = isKn ? `${d.units_count} ಗ್ರಾಮ/ನಗರ ಘಟಕಗಳು` : `${d.units_count} Local Units`;
    const btnText = isKn ? 'ಸಮಿತಿ & ತಾಲ್ಲೂಕು ಪದಾಧಿಕಾರಿಗಳು ವೀಕ್ಷಿಸಿ ➔' : 'View Committee & Taluk Posts ➔';
    const presPost = isKn ? (d.president_post_kn || 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು') : (d.president_post_en || 'District President');
    const secPost = isKn ? (d.secretary_post_kn || 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ') : (d.secretary_post_en || 'District Secretary');
    const presName = isKn ? d.president_kn : d.president_en;
    const secName = isKn ? d.secretary_kn : d.secretary_en;
    
    // Sample taluks pills
    const taluksList = isKn ? d.taluks_kn : d.taluks_en;
    const sampleTaluksHtml = taluksList.slice(0, 4).map(t => `<span class="taluk-mini-pill">${t}</span>`).join('');
    const moreTaluksCount = taluksList.length > 4 ? taluksList.length - 4 : 0;
    
    return `
      <div class="district-card" data-id="${d.id}">
        <div class="district-card-header">
          <div>
            <h3 class="district-name">${dName}</h3>
            <span class="district-zone-badge">${dZone}</span>
          </div>
          <div class="district-stats-vertical">
            <span class="taluk-count-pill">🏛️ ${talukLabel}</span>
            <span class="units-count-pill">🚩 ${unitsLabel}</span>
          </div>
        </div>
        
        <!-- District President & Secretary Spotlight -->
        <div class="district-leaders-preview">
          <div class="preview-leader-item district-pres-item" onclick="openLightboxImage('${d.president_photo}', '${presName} - ${presPost} (${dName})')" title="${isKn ? 'ದೊಡ್ಡದಾಗಿ ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to view photo'}">
            <img src="${d.president_photo}" alt="${presName}" class="preview-avatar" onerror="this.onerror=null; this.src='images/leader-1.jpg';">
            <div class="preview-info">
              <span class="preview-post-badge pres-badge">🚩 ${presPost}</span>
              <strong class="preview-name">${presName}</strong>
              <a href="tel:${d.president_phone}" class="preview-phone" onclick="event.stopPropagation();">📞 ${d.president_phone}</a>
            </div>
          </div>
          <div class="preview-leader-item district-sec-item" onclick="openLightboxImage('${d.secretary_photo}', '${secName} - ${secPost} (${dName})')" title="${isKn ? 'ದೊಡ್ಡದಾಗಿ ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to view photo'}">
            <img src="${d.secretary_photo}" alt="${secName}" class="preview-avatar" onerror="this.onerror=null; this.src='images/santosh_bajal.jpg';">
            <div class="preview-info">
              <span class="preview-post-badge sec-badge">🚩 ${secPost}</span>
              <strong class="preview-name">${secName}</strong>
              <a href="tel:${d.secretary_phone}" class="preview-phone" onclick="event.stopPropagation();">📞 ${d.secretary_phone}</a>
            </div>
          </div>
        </div>

        <!-- Sample Taluk Pills -->
        <div class="district-taluks-sample">
          <small class="taluks-sample-label">${isKn ? 'ಪ್ರಮುಖ ತಾಲ್ಲೂಕುಗಳು:' : 'Key Taluks:'}</small>
          <div class="taluks-mini-list">
            ${sampleTaluksHtml}
            ${moreTaluksCount > 0 ? `<span class="taluk-mini-pill more">+${moreTaluksCount}</span>` : ''}
          </div>
        </div>
        
        <button type="button" class="btn-open-district" onclick="openDistrictModal('${d.id}')">
          ${btnText}
        </button>
      </div>
    `;
  }).join('');
}

window.openDistrictModal = function(districtId) {
  const d = districtUnitsData.find(item => item.id === districtId);
  if (!d) return;
  
  const modal = document.getElementById('districtDetailsModal');
  if (!modal) return;
  
  const isKn = currentLang === 'kn';
  const dName = isKn ? d.name_kn : d.name_en;
  const dZone = isKn ? d.zone_kn : d.zone_en;
  const dOffice = isKn ? d.office_kn : d.office_en;
  const presPost = isKn ? (d.president_post_kn || 'ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು') : (d.president_post_en || 'District President');
  const secPost = isKn ? (d.secretary_post_kn || 'ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ') : (d.secretary_post_en || 'District Secretary');
  const presName = isKn ? d.president_kn : d.president_en;
  const secName = isKn ? d.secretary_kn : d.secretary_en;

  // Set Modal Title
  const modalTitle = document.getElementById('districtModalTitle');
  if (modalTitle) {
    modalTitle.innerHTML = `<span style="color: #dc2626;">🚩</span> ${dName} — ${dZone}`;
  }
  
  // 1. District Leadership Spotlight (District President & Secretary)
  const membersWrap = document.getElementById('districtModalMembers');
  if (membersWrap) {
    membersWrap.innerHTML = `
      <div class="modal-section-title">
        <span>👥</span> ${isKn ? 'ಜಿಲ್ಲಾ ಪದಾಧಿಕಾರಿಗಳು (District President & Secretary Posts):' : 'District Committee Executive Officers:'}
      </div>
      <div class="district-officers-spotlight">
        <div class="district-officer-card spotlight-pres">
          <div class="officer-avatar-box" onclick="openLightboxImage('${d.president_photo}', '${presName} - ${presPost} (${dName})')" title="${isKn ? 'ದೊಡ್ಡದಾಗಿ ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to enlarge'}">
            <img src="${d.president_photo}" alt="${presName}" onerror="this.onerror=null; this.src='images/leader-1.jpg';">
            <span class="officer-zoom-hint">🔍</span>
          </div>
          <div class="officer-info">
            <span class="officer-badge pres-badge">🚩 ${presPost}</span>
            <h4 class="officer-name">${presName}</h4>
            <div class="officer-sub">${isKn ? 'ಜಿಲ್ಲಾ ಸಮಿತಿ ಮುಖ್ಯಸ್ಥರು' : 'District Committee President'}</div>
            <a href="tel:${d.president_phone}" class="officer-phone-btn">📞 ${d.president_phone}</a>
          </div>
        </div>

        <div class="district-officer-card spotlight-sec">
          <div class="officer-avatar-box" onclick="openLightboxImage('${d.secretary_photo}', '${secName} - ${secPost} (${dName})')" title="${isKn ? 'ದೊಡ್ಡದಾಗಿ ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to enlarge'}">
            <img src="${d.secretary_photo}" alt="${secName}" onerror="this.onerror=null; this.src='images/santosh_bajal.jpg';">
            <span class="officer-zoom-hint">🔍</span>
          </div>
          <div class="officer-info">
            <span class="officer-badge sec-badge">🚩 ${secPost}</span>
            <h4 class="officer-name">${secName}</h4>
            <div class="officer-sub">${isKn ? 'ಜಿಲ್ಲಾ ಸಂಘಟನಾ ಕಾರ್ಯದರ್ಶಿ' : 'District Organizing Secretary'}</div>
            <a href="tel:${d.secretary_phone}" class="officer-phone-btn">📞 ${d.secretary_phone}</a>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Taluk Committees & Posts (Taluk President & Taluk Secretary for each Taluk)
  const taluksWrap = document.getElementById('districtModalTaluks');
  if (taluksWrap) {
    const taluksData = d.taluks_data || [];
    const talukCardsHtml = taluksData.map((t) => {
      const tName = isKn ? t.name_kn : t.name_en;
      const tPres = isKn ? t.president_kn : t.president_en;
      const tSec = isKn ? t.secretary_kn : t.secretary_en;
      return `
        <div class="taluk-committee-item">
          <div class="taluk-header-bar">
            <div class="taluk-item-name">🏛️ ${tName}</div>
            <span class="taluk-unit-tag">${t.units_kn}</span>
          </div>
          <div class="taluk-officers-grid">
            <div class="taluk-officer-col">
              <span class="taluk-officer-role">${isKn ? 'ತಾಲ್ಲೂಕು ಅಧ್ಯಕ್ಷರು:' : 'Taluk President:'}</span>
              <strong class="taluk-officer-name">${tPres}</strong>
            </div>
            <div class="taluk-officer-col">
              <span class="taluk-officer-role">${isKn ? 'ತಾಲ್ಲೂಕು ಕಾರ್ಯದರ್ಶಿ:' : 'Taluk Secretary:'}</span>
              <strong class="taluk-officer-name">${tSec}</strong>
            </div>
            <div class="taluk-officer-col taluk-contact-col">
              <a href="tel:${t.phone}" class="taluk-call-btn">📞 ${t.phone}</a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    taluksWrap.innerHTML = `
      <div class="modal-section-title" style="margin-top: 1.5rem;">
        <span>🏛️</span> ${isKn ? `ತಾಲ್ಲೂಕು ಸಮಿತಿಗಳು ಮತ್ತು ಪದಾಧಿಕಾರಿಗಳು (${d.taluks_count} ತಾಲ್ಲೂಕುಗಳು):` : `Taluk Committees & Leadership (${d.taluks_count} Taluks):`}
      </div>
      <div class="taluk-committees-container">
        ${talukCardsHtml}
      </div>
    `;
  }

  // 3. Village & Area Units Information
  const unitsWrap = document.getElementById('districtModalUnits');
  if (unitsWrap) {
    unitsWrap.innerHTML = `
      <div class="modal-section-title" style="margin-top: 1.2rem;">
        <span>👥</span> ${isKn ? 'ಗ್ರಾಮ ಮತ್ತು ನಗರ ಏರಿಯಾ ಘಟಕಗಳು:' : 'Village & Area Youth Units:'}
      </div>
      <div class="units-description-box">
        <p>${isKn ? d.area_units_kn : d.area_units_en}</p>
        <span class="units-badge-highlight">🚩 ${d.units_count} ${isKn ? 'ಸಕ್ರಿಯ ಘಟಕಗಳು' : 'Active Local Units'}</span>
      </div>
    `;
  }

  // 4. District Office & Helpline
  const officeWrap = document.getElementById('districtModalOffice');
  if (officeWrap) {
    officeWrap.innerHTML = `
      <div class="district-office-banner">
        <div>
          <strong>${isKn ? '🏢 ಜಿಲ್ಲಾ ಸಮಿತಿ ಕಾರ್ಯಾಲಯ:' : '🏢 District Office:'}</strong>
          <div>${dOffice}</div>
        </div>
        <div style="margin-top: 0.6rem;">
          <strong>${isKn ? '📞 24/7 ಜಿಲ್ಲಾ ಸಹಾಯವಾಣಿ:' : '📞 24/7 Helpline:'}</strong>
          <a href="tel:${d.phone}" class="office-tel-link">${d.phone}</a>
        </div>
      </div>
    `;
  }

  modal.classList.add('active');
};

/* ========================================================
   5. HERO CAROUSEL ENGINE
   ======================================================== */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  
  if (slides.length === 0) return;
  
  let currentIndex = 0;
  let timer = null;
  
  function goToSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex]?.classList.remove('active');
    
    currentIndex = (index + slides.length) % slides.length;
    
    slides[currentIndex].classList.add('active');
    dots[currentIndex]?.classList.add('active');
  }
  
  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 6000);
  }
  
  function stopAutoplay() {
    if (timer) clearInterval(timer);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
      startAutoplay();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
      startAutoplay();
    });
  }
  
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      goToSlide(idx);
      startAutoplay();
    });
  });
  
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
  }
  
  startAutoplay();
}

/* ========================================================
   6. ANIMATED STATISTICS COUNTER
   ======================================================== */
function initCounters() {
  const stats = document.querySelectorAll('.stat-number');
  if (stats.length === 0) return;
  
  let animated = false;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        stats.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
          const suffix = counter.getAttribute('data-suffix') || '';
          let current = 0;
          const step = Math.max(1, Math.floor(target / 60));
          
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            counter.innerText = current.toLocaleString('en-IN') + suffix;
          }, 25);
        });
      }
    });
  }, { threshold: 0.3 });
  
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) observer.observe(statsSection);
}

/* ========================================================
   7. MODALS & BLOOD DONOR REGISTRATION
   ======================================================== */
function initModals() {
  const bloodRegBtn = document.getElementById('openBloodModalBtn');
  const bloodModal = document.getElementById('bloodModal');
  const closeBloodModal = document.getElementById('closeBloodModal');
  const bloodForm = document.getElementById('bloodDonorForm');
  
  if (bloodRegBtn && bloodModal) {
    bloodRegBtn.addEventListener('click', () => {
      bloodModal.classList.add('active');
    });
  }
  
  if (closeBloodModal && bloodModal) {
    closeBloodModal.addEventListener('click', () => {
      bloodModal.classList.remove('active');
    });
  }
  
  if (bloodForm) {
    bloodForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('donorName').value;
      const phone = document.getElementById('donorPhone').value;
      const bloodGroup = document.getElementById('donorGroup').value;
      const district = document.getElementById('donorDistrict').value;
      
      const donor = { name, phone, bloodGroup, district, date: new Date().toISOString() };
      const donors = JSON.parse(localStorage.getItem('dyfi_donors') || '[]');
      donors.push(donor);
      localStorage.setItem('dyfi_donors', JSON.stringify(donors));
      
      const isKn = currentLang === 'kn';
      const modalBody = bloodModal.querySelector('.modal-body');
      modalBody.innerHTML = `
        <div class="success-checkmark-box">
          <div class="checkmark-circle">✓</div>
          <h3 style="font-size: 1.4rem; color: #15803d; margin-bottom: 0.6rem;">
            ${isKn ? 'ಧನ್ಯವಾದಗಳು! ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ' : 'Thank You! Registration Successful'}
          </h3>
          <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;">
            ${isKn 
              ? 'ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ ರಕ್ತದಾನಿ ಡೈರೆಕ್ಟರಿಗೆ ಸೇರಿಸಲಾಗಿದೆ. ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ ಸಂಪರ್ಕಿಸಲಾಗುವುದು.' 
              : 'Your details have been successfully registered to the DYFI Karnataka Volunteer Blood Directory.'}
          </p>
          <div style="background: #fef2f2; border: 1px dashed #ef4444; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <p style="color: #991b1b; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.2rem;">
              ${isKn ? 'ತುರ್ತು ರಕ್ತದ ನೆರವಿಗೆ ಸಂಪರ್ಕಿಸಿ:' : 'FOR IMMEDIATE BLOOD EMERGENCY:'}
            </p>
            <p style="color: #dc2626; font-size: 1.2rem; font-weight: 800;">+91 9448123456</p>
          </div>
          <button type="button" class="btn-primary" style="width: 100%; justify-content: center;" onclick="document.getElementById('bloodModal').classList.remove('active')">
            ${isKn ? 'ಮುಚ್ಚಿ' : 'Close'}
          </button>
        </div>
      `;
    });
  }
  
  // Close modals clicking outside
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
}

/* ========================================================
   8. PHOTO GALLERY FILTER & LIGHTBOX
   ======================================================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxClose = document.getElementById('lightboxClose');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      
      items.forEach(item => {
        if (cat === 'all' || item.getAttribute('data-cat') === cat) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });
  
  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }
  
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
}

/* ========================================================
   9. CONTACT FORM
   ======================================================== */
function initContactForm() {
  const form = document.getElementById('mainContactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit-form');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<span>⏳ ${currentLang === 'kn' ? 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...' : 'Sending...'}</span>`;
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      form.reset();
      showToast(currentLang === 'kn' ? 'ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ!' : 'Your message has been sent successfully!');
    }, 900);
  });
}

/* ========================================================
   10. MOBILE DRAWER NAVIGATION
   ======================================================== */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const closeBtn = document.getElementById('closeMobileDrawer');
  
  function openDrawer() {
    drawer?.classList.add('active');
    overlay?.classList.add('active');
  }
  
  function closeDrawer() {
    drawer?.classList.remove('active');
    overlay?.classList.remove('active');
  }
  
  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ========================================================
   11. SCROLL EFFECTS & NAVBAR
   ======================================================== */
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

/* ========================================================
   12. TOAST NOTIFICATIONS
   ======================================================== */
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `<span>✨ ${message}</span>`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

  
  // ========================================================
  // DYNAMIC DATASTORE SYNC & RENDERING (Full Admin Management)
  // ========================================================

  function renderDynamicDataStoreContent(optionalLang) {
    if (typeof DyfiDataStore === 'undefined') return;

    const currentLang = optionalLang || localStorage.getItem('dyfi_lang') || 'kn';
    const isKn = currentLang === 'kn';

    // 1. Ticker headlines
    try {
      const tickerData = DyfiDataStore.get(DYFI_DATA_KEYS.TICKER) || [];
      const tickerTextEl = document.querySelector('.ticker-text');
      if (tickerTextEl && tickerData.length > 0) {
        const activeItems = tickerData.filter(t => t.active !== false);
        const itemToUse = activeItems[0] || tickerData[0];
        if (itemToUse) {
          tickerTextEl.innerText = isKn ? itemToUse.text_kn : itemToUse.text_en;
        }
      }
    } catch (e) {
      console.warn('Ticker sync error:', e);
    }

    // 2. Site Content & Hero
    try {
      const sc = DyfiDataStore.get(DYFI_DATA_KEYS.SITE_CONTENT);
      if (sc) {
        const heroTitleEl = document.querySelector('.hero-title');
        if (heroTitleEl) {
          heroTitleEl.innerHTML = isKn ? sc.heroTitle_kn : sc.heroTitle_en;
        }

        const heroSubEl = document.querySelector('.hero-description');
        if (heroSubEl) {
          heroSubEl.innerText = isKn ? sc.heroSub_kn : sc.heroSub_en;
        }

        const quoteMainEl = document.querySelector('.quote-main-text');
        if (quoteMainEl) {
          quoteMainEl.innerText = isKn ? sc.quoteText_kn : sc.quoteText_en;
        }

        const quoteAuthorEl = document.querySelector('.quote-author-name');
        if (quoteAuthorEl && sc.quoteAuthor) {
          quoteAuthorEl.innerText = sc.quoteAuthor;
        }

        const officeValEl = document.querySelector('[data-i18n="officeVal"]');
        if (officeValEl) {
          officeValEl.innerText = isKn ? sc.officeAddress_kn : sc.officeAddress_en;
        }

        const phoneValEl = document.querySelector('[data-i18n="phoneVal"]');
        if (phoneValEl) {
          phoneValEl.innerText = `${sc.phone1} / ${sc.phone2}`;
        }

        const emailValEl = document.querySelector('[data-i18n="emailVal"]');
        if (emailValEl) {
          emailValEl.innerText = sc.email;
        }

        // Update footer contact values too
        const footerContactBox = document.querySelector('.footer-col:last-child');
        if (footerContactBox) {
          const items = footerContactBox.querySelectorAll('.footer-contact-item span:last-child');
          if (items.length >= 3) {
            items[0].innerText = isKn ? sc.officeAddress_kn : sc.officeAddress_en;
            items[1].innerText = `${sc.phone1} / ${sc.phone2}`;
            items[2].innerText = ` ${sc.email}`;
          }
        }
      }
    } catch (e) {
      console.warn('Site content sync error:', e);
    }

    // 3. Render Campaigns (Admin Dynamic)
    try {
      const campaignsGrid = document.querySelector('.campaigns-grid');
      if (campaignsGrid) {
        const campaigns = DyfiDataStore.get(DYFI_DATA_KEYS.CAMPAIGNS) || [];
        if (campaigns.length > 0) {
          campaignsGrid.innerHTML = campaigns.map((c, idx) => `
            <article class="campaign-card" onclick="openContentDetails('campaign', '${c.id || idx}')" style="cursor: pointer;">
              <div class="card-img-wrap" onclick="openContentDetails('campaign', '${c.id || idx}'); event.stopPropagation();" title="${isKn ? 'ಪೂರ್ಣ ವಿವರ ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to view full details'}">
                <img src="${c.image || (idx === 0 ? 'images/hero-banner-1.jpg' : idx === 1 ? 'images/hero-banner-2.jpg' : 'images/hero-banner-3.jpg')}" alt="${c.title_en}" loading="lazy" onerror="this.onerror=null; this.src='images/hero-banner-1.jpg';">
                <div class="card-badges">
                  <span class="badge-date">${c.date || '2026-10-15'}</span>
                  <span class="badge-status">${c.status || 'Active'}</span>
                </div>
                <span class="card-img-zoom-hint">🔍 ${isKn ? 'ಪೂರ್ಣ ವೀಕ್ಷಿಸಿ' : 'View Full'}</span>
              </div>
              <div class="card-body">
                <h3 class="card-title">${isKn ? c.title_kn : c.title_en}</h3>
                <p class="card-desc">${isKn ? c.desc_kn : c.desc_en}</p>
                <a href="javascript:void(0)" class="card-link" onclick="openContentDetails('campaign', '${c.id || idx}'); event.stopPropagation();">${isKn ? 'ಪೂರ್ಣ ವಿವರ ವೀಕ್ಷಿಸಿ →' : 'Read Full Details →'}</a>
              </div>
            </article>
          `).join('');
        }
      }
    } catch (e) {
      console.warn('Campaigns sync error:', e);
    }

    // 4. Render News & Updates (Admin Dynamic)
    try {
      const newsGrid = document.querySelector('.news-grid');
      if (newsGrid) {
        const newsList = DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [];
        if (newsList.length > 0) {
          newsGrid.innerHTML = newsList.map((n, idx) => `
            <article class="news-card" onclick="openContentDetails('news', '${n.id || idx}')" style="cursor: pointer;">
              <div class="news-img-wrap" onclick="openContentDetails('news', '${n.id || idx}'); event.stopPropagation();" title="${isKn ? 'ಪೂರ್ಣ ಸುದ್ದಿ ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to view full news'}">
                <img src="${n.image || (idx === 0 ? 'images/hero-banner-1.jpg' : idx === 1 ? 'images/hero-banner-2.jpg' : 'images/hero-banner-3.jpg')}" alt="${n.title_en}" loading="lazy" onerror="this.onerror=null; this.src='images/hero-banner-2.jpg';">
                <span class="card-img-zoom-hint">🔍 ${isKn ? 'ಪೂರ್ಣ ವೀಕ್ಷಿಸಿ' : 'View Full'}</span>
              </div>
              <div class="news-body">
                <div class="news-meta">
                  <span>📅 ${n.date || '2026-10-15'}</span>
                  <span>🏷️ ${n.category || 'News'}</span>
                </div>
                <h3 class="news-title">${isKn ? n.title_kn : n.title_en}</h3>
                <p class="news-excerpt">${isKn ? n.desc_kn : n.desc_en}</p>
                <a href="javascript:void(0)" class="btn-read-article" onclick="openContentDetails('news', '${n.id || idx}'); event.stopPropagation();">${isKn ? 'ಪೂರ್ಣ ವಿವರ ಓದಿ →' : 'Read Full Story →'}</a>
              </div>
            </article>
          `).join('');
        }
      }
    } catch (e) {
      console.warn('News sync error:', e);
    }

    // 5. Render Statements (Admin Dynamic)
    try {
      const stContainer = document.getElementById('statementsContainer');
      if (stContainer) {
        const statements = DyfiDataStore.get(DYFI_DATA_KEYS.STATEMENTS) || [];
        if (statements.length > 0) {
          stContainer.innerHTML = statements.map((st, idx) => `
            <article class="statement-card" onclick="openContentDetails('statement', '${st.id || idx}')" style="cursor: pointer;">
              <div class="statement-meta-row">
                <span class="statement-badge">${st.category}</span>
                <span class="statement-date">${st.date}</span>
              </div>
              <div class="statement-ref">${st.refNo || 'DYFI-KAR-ST'}</div>
              <h3 class="statement-title">${isKn ? st.title_kn : st.title_en}</h3>
              <div style="display: flex; gap: 0.8rem; align-items: center; margin-top: auto; flex-wrap: wrap;">
                <a href="javascript:void(0)" class="statement-view-link" onclick="openContentDetails('statement', '${st.id || idx}'); event.stopPropagation();" style="color: var(--primary); font-weight: 700; font-size: 0.85rem;">
                  🔍 ${isKn ? 'ಪೂರ್ಣ ಹೇಳಿಕೆ ಓದಿ' : 'Read Statement'}
                </a>
                <a href="${st.fileUrl || '#'}" class="statement-download-btn" onclick="alert('${isKn ? 'ಅಧಿಕೃತ ಹೇಳಿಕೆ PDF ಡೌನ್‌ಲೋಡ್ ಆಗುತ್ತಿದೆ...' : 'Downloading Official Statement PDF...'}'); event.stopPropagation();">
                  <span>${isKn ? 'PDF ಡೌನ್‌ಲೋಡ್' : 'Download PDF'}</span> ➔
                </a>
              </div>
            </article>
          `).join('');
        }
      }
    } catch (e) {
      console.warn('Statements sync error:', e);
    }

    // 6. Render Martyrs (Admin Dynamic)
    try {
      const martyrsContainer = document.getElementById('martyrsContainer');
      if (martyrsContainer) {
        const martyrs = DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [];
        if (martyrs.length > 0) {
          martyrsContainer.innerHTML = martyrs.map((m, idx) => `
            <div class="martyr-card" onclick="openContentDetails('martyr', '${m.id || idx}')" style="cursor: pointer;">
              <div class="martyr-avatar-wrap">
                <img src="${m.photo || 'images/shivappa.jpg'}" alt="${m.name_en}" loading="lazy" onerror="this.onerror=null; this.src='images/shivappa.jpg';">
                <span class="officer-zoom-hint">🔍</span>
              </div>
              <h3 class="martyr-name">${isKn ? m.name_kn : m.name_en}</h3>
              <span class="martyr-badge-date">${m.date}</span>
              <div class="martyr-district">🚩 ${m.district}</div>
              <p class="martyr-tribute">"${isKn ? m.tribute_kn : m.tribute_en}"</p>
            </div>
          `).join('');
        }
      }
    } catch (e) {
      console.warn('Martyrs sync error:', e);
    }

    // 7. Render Leaders (Admin Dynamic)
    try {
      const leaderGrid = document.querySelector('.leadership-grid');
      if (leaderGrid) {
        const leaders = DyfiDataStore.get(DYFI_DATA_KEYS.LEADERS) || [];
        if (leaders.length > 0) {
          leaderGrid.innerHTML = leaders.map((l, idx) => `
            <div class="leader-card" onclick="openContentDetails('leader', '${l.id || idx}')" style="cursor: pointer;">
              <div class="leader-avatar-wrap">
                <img src="${l.photo || 'images/santosh_bajal.jpg'}" alt="${l.name_en}" loading="lazy" onerror="this.onerror=null; this.src='images/santosh_bajal.jpg';">
                <span class="officer-zoom-hint">🔍</span>
              </div>
              <h3 class="leader-name">${isKn ? l.name_kn : l.name_en}</h3>
              <div class="leader-role">${isKn ? l.role_kn : l.role_en}</div>
              <div class="leader-region">${l.region || 'Karnataka State Committee'}</div>
            </div>
          `).join('');
        }
      }
    } catch (e) {
      console.warn('Leaders sync error:', e);
    }

    // 8. Render Gallery (Admin Dynamic)
    try {
      const galleryGrid = document.querySelector('.gallery-grid');
      if (galleryGrid) {
        const galleryItems = DyfiDataStore.get(DYFI_DATA_KEYS.GALLERY) || [];
        if (galleryItems.length > 0) {
          galleryGrid.innerHTML = galleryItems.map(g => `
            <div class="gallery-item" data-category="${g.category || 'protests'}" onclick="openLightboxImage('${g.src || 'images/hero-banner-1.jpg'}', '${isKn ? (g.caption_kn || g.caption_en || '') : (g.caption_en || g.caption_kn || '')}')" style="cursor: pointer;">
              <img src="${g.src || 'images/hero-banner-1.jpg'}" alt="${g.caption_en || 'DYFI Karnataka'}" loading="lazy" onerror="this.onerror=null; this.src='images/hero-banner-1.jpg';">
              <div class="gallery-overlay">
                <p class="gallery-caption">${isKn ? (g.caption_kn || g.caption_en) : (g.caption_en || g.caption_kn)}</p>
                <span class="gallery-zoom-badge">🔍 ${isKn ? 'ದೊಡ್ಡದಾಗಿ ನೋಡಿ' : 'View High Res'}</span>
              </div>
            </div>
          `).join('');
        }
      }
    } catch (e) {
      console.warn('Gallery sync error:', e);
    }
  }

  // Cross-tab real-time storage event listener
  window.addEventListener('storage', (e) => {
    if (e.key && e.key.startsWith('dyfi_kar_')) {
      renderDynamicDataStoreContent();
    }
  });

  // Local event listener when updated within same tab
  window.addEventListener('dyfi_data_updated', () => renderDynamicDataStoreContent());

  // Discrete administrator shortcut: Ctrl + Shift + A to open Admin Suite
  // Secret double click on footer copyright to open admin
  const footerRightsEl = document.querySelector('[data-i18n="footerRights"]');
  if (footerRightsEl) {
    footerRightsEl.style.cursor = 'default';
    footerRightsEl.addEventListener('dblclick', () => {
      window.open('admin.html', '_blank');
    });
  }

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      window.open('admin.html', '_blank');
    }
  });


  // 6. Emergency Blood Donor Search
  function initBloodDonorSearch() {
    const btnFind = document.getElementById('btnFindDonors');
    const resList = document.getElementById('bloodResultsList');
    if (!btnFind || !resList) return;

    function doSearch() {
      const grp = document.getElementById('quickSearchGroup').value;
      const dist = document.getElementById('quickSearchDistrict').value;
      const donors = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.BLOOD_DONORS) || [] : [];

      const filtered = donors.filter(d => {
        const mG = !grp || d.group === grp;
        const mD = !dist || d.district === dist;
        return mG && mD;
      });

      if (filtered.length === 0) {
        resList.innerHTML = '<div style="grid-column: 1/-1; padding:1rem; text-align:center; color:#94a3b8; font-weight:600;">ಯಾವುದೇ ದಾನಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ತುರ್ತು ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ: +91 9448123456</div>';
      } else {
        resList.innerHTML = filtered.map(d => `
          <div class="donor-result-card">
            <div>
              <strong style="color:#0f172a; font-size:0.95rem;">${d.name}</strong><br>
              <small style="color:#64748b;">${d.district} • ${d.date || 'Active'}</small>
            </div>
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span class="donor-badge-group">${d.group}</span>
              <a href="tel:${d.phone}" class="btn-primary" style="padding:0.4rem 0.8rem; font-size:0.8rem; text-decoration:none;">📞 ಕರೆ</a>
            </div>
          </div>
        `).join('');
      }
    }

    btnFind.addEventListener('click', (e) => {
      e.preventDefault();
      doSearch();
    });

    // Initial search show
    doSearch();
  }

  // 7. Join The Revolution Modal & Form
  function initJoinModal() {
    const modal = document.getElementById('joinModal');
    const closeBtn = document.getElementById('closeJoinModal');
    const openItem = document.getElementById('navJoinRevItem');
    const quoteBtn = document.querySelector('[data-i18n="btnMovement"]');
    const heroJoinBtn = document.querySelector('.hero-actions .btn-primary');

    function openJoin() {
      if (modal) modal.classList.add('active');
    }
    function closeJoin() {
      if (modal) modal.classList.remove('active');
    }

    if (openItem) openItem.addEventListener('click', (e) => { e.preventDefault(); openJoin(); });
    if (quoteBtn) quoteBtn.addEventListener('click', (e) => { e.preventDefault(); openJoin(); });
    if (heroJoinBtn) heroJoinBtn.addEventListener('click', (e) => { e.preventDefault(); openJoin(); });
    if (closeBtn) closeBtn.addEventListener('click', closeJoin);
    if (modal) {
      modal.addEventListener('click', (e) => { if (e.target === modal) closeJoin(); });
    }

    const form = document.getElementById('joinRevolutionForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('joinName').value.trim();
        const phone = document.getElementById('joinPhone').value.trim();
        const dist = document.getElementById('joinDistrict').value;
        const interest = document.getElementById('joinInterest').value;

        // Auto save to DyfiDataStore messages/volunteers
        if (typeof DyfiDataStore !== 'undefined') {
          const msgs = DyfiDataStore.get(DYFI_DATA_KEYS.MESSAGES) || [];
          msgs.unshift({
            id: 'vol_' + Date.now(),
            name,
            phone,
            district: dist,
            message: `[NEW MEMBERSHIP] Area of Interest: ${interest}`,
            date: new Date().toISOString().split('T')[0],
            status: 'Unread'
          });
          DyfiDataStore.set(DYFI_DATA_KEYS.MESSAGES, msgs);
        }

        alert('ಕ್ರಾಂತಿಕಾರಿ ಧನ್ಯವಾದಗಳು ಒಡನಾಡಿ! ನಿಮ್ಮ ಸದಸ್ಯತ್ವ ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ. ಸ್ಥಳೀಯ ಘಟಕದಿಂದ ಶೀಘ್ರದಲ್ಲೇ ಸಂಪರ್ಕಿಸಲಾಗುವುದು.');
        form.reset();
        closeJoin();
      });
    }
  }

  // 8. Video Player Modal
  function initVideoPlayer() {
    const playBtn = document.getElementById('btnPlayMainVideo');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        const lightbox = document.getElementById('lightboxModal');
        const imgWrap = lightbox ? lightbox.querySelector('.lightbox-img-wrap') : null;
        if (lightbox && imgWrap) {
          imgWrap.innerHTML = `<iframe width="100%" height="450" src="https://www.youtube.com/embed/fA71Q8b6528?autoplay=1" title="DYFI Convention" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:12px; border:none;"></iframe>`;
          lightbox.classList.add('active');
        }
      });
    }
  }

  // Hook into Blood Donor form submission to persist in DyfiDataStore
  const originalDonorForm = document.getElementById('bloodDonorForm');
  if (originalDonorForm) {
    originalDonorForm.addEventListener('submit', (e) => {
      const name = document.getElementById('donorName').value.trim();
      const phone = document.getElementById('donorPhone').value.trim();
      const group = document.getElementById('donorGroup').value;
      const district = document.getElementById('donorDistrict').value;

      if (typeof DyfiDataStore !== 'undefined') {
        const list = DyfiDataStore.get(DYFI_DATA_KEYS.BLOOD_DONORS) || [];
        list.unshift({
          id: 'bd_' + Date.now(),
          name,
          phone,
          group,
          district,
          date: new Date().toISOString().split('T')[0]
        });
        DyfiDataStore.set(DYFI_DATA_KEYS.BLOOD_DONORS, list);
      }
    });
  }

  // Hook into Contact Form submission to persist in DyfiDataStore
  const mainContactForm = document.getElementById('mainContactForm');
  if (mainContactForm) {
    mainContactForm.addEventListener('submit', (e) => {
      const name = mainContactForm.querySelector('input[type="text"]').value.trim();
      const phone = mainContactForm.querySelector('input[type="tel"]').value.trim();
      const district = mainContactForm.querySelector('select').value;
      const message = mainContactForm.querySelector('textarea').value.trim();

      if (typeof DyfiDataStore !== 'undefined') {
        const msgs = DyfiDataStore.get(DYFI_DATA_KEYS.MESSAGES) || [];
        msgs.unshift({
          id: 'msg_' + Date.now(),
          name,
          phone,
          district,
          message,
          date: new Date().toISOString().split('T')[0],
          status: 'Unread'
        });
        DyfiDataStore.set(DYFI_DATA_KEYS.MESSAGES, msgs);
      }
    });
  }

  // Initial call on load
  setTimeout(() => {
    renderDynamicDataStoreContent();
    initBloodDonorSearch();
    initJoinModal();
    initVideoPlayer();
    initUniversalImageClicks();
  }, 50);

  /* ========================================================
     10. UNIVERSAL FULL CONTENT DETAILS MODAL
     ======================================================== */
  window.openContentDetails = function(type, id) {
    const modal = document.getElementById('contentDetailsModal');
    if (!modal) return;
    const isKn = currentLang === 'kn';

    let item = null;
    let categoryBadge = isKn ? '🚩 ಡಿವೈಎಫ್ಐ ಕರ್ನಾಟಕ' : '🚩 DYFI Karnataka';
    let title = '';
    let date = '';
    let extra = '';
    let img = 'images/hero-banner-1.jpg';
    let fullText = '';
    let primaryActionText = isKn ? 'ಹೋರಾಟದಲ್ಲಿ ಕೈಜೋಡಿಸಿ ➔' : 'Join The Movement ➔';
    let primaryActionFn = () => {
      modal.classList.remove('active');
      const joinModal = document.getElementById('joinModal');
      if (joinModal) joinModal.classList.add('active');
    };

    if (type === 'campaign') {
      const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.CAMPAIGNS) || [] : [];
      item = list.find(c => c.id === id || String(c.id) === String(id)) || list[id] || list[0];
      if (item) {
        categoryBadge = isKn ? '🚩 ಪ್ರಮುಖ ಅಭಿಯಾನ (State Campaign)' : '🚩 Major State Campaign';
        title = isKn ? (item.title_kn || item.title_en) : (item.title_en || item.title_kn);
        date = item.date || '2026-10-15';
        extra = item.status ? `• Status: ${item.status}` : '';
        img = item.image || 'images/hero-banner-1.jpg';
        fullText = isKn 
          ? (item.full_kn || `${item.desc_kn}\n\nರಾಜ್ಯದ 31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ನಿರುದ್ಯೋಗ, ಶಿಕ್ಷಣದ ಖಾಸಗೀಕರಣ ಮತ್ತು ಕೋಮುವಾದದ ವಿರುದ್ಧ ಡಿವೈಎಫ್ಐ ಮುನ್ನಡೆಸುತ್ತಿರುವ ಬೃಹತ್ ಅಭಿಯಾನ. ಕಾಲೇಜು ಕ್ಯಾಂಪಸ್‌ಗಳು, ಕೈಗಾರಿಕಾ ವಲಯಗಳು ಹಾಗೂ ಹಳ್ಳಿ ಹಳ್ಳಿಗಳಲ್ಲಿ ಯುವ ಜಾಗೃತಿ ಸಭೆಗಳು, ಪಾದಯಾತ್ರೆಗಳು ಮತ್ತು ಬೀದಿ ನಾಟಕಗಳ ಮೂಲಕ ಲಕ್ಷಾಂತರ ಯುವಜನರನ್ನು ಒಗ್ಗೂಡಿಸಲಾಗುತ್ತಿದೆ.`)
          : (item.full_en || `${item.desc_en}\n\nMass campaign mobilized across 31 districts of Karnataka fighting for employment, secularism, and affordable public education.`);
        primaryActionText = isKn ? 'ಈ ಅಭಿಯಾನದಲ್ಲಿ ಭಾಗವಹಿಸಿ ➔' : 'Participate in Campaign ➔';
      }
    } else if (type === 'news') {
      const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [] : [];
      item = list.find(n => n.id === id || String(n.id) === String(id)) || list[id] || list[0];
      if (item) {
        categoryBadge = isKn ? '📰 ತಾಜಾ ಸುದ್ದಿ & ವರದಿ (Latest News)' : '📰 Latest News & Updates';
        title = isKn ? (item.title_kn || item.title_en) : (item.title_en || item.title_kn);
        date = item.date || '2026-10-14';
        extra = item.category ? `• ${item.category}` : '';
        img = item.image || 'images/hero-banner-2.jpg';
        fullText = isKn 
          ? (item.full_kn || `${item.desc_kn}\n\nರಾಜ್ಯ ಸರ್ಕಾರದ ಗಮನ ಸೆಳೆಯಲು ಡಿವೈಎಫ್ಐ ಜಿಲ್ಲಾ ಸಮಿತಿಗಳು ನಡೆಸಿದ ತೀವ್ರ ಹೋರಾಟದ ವರದಿ. ನಿರುದ್ಯೋಗಿ ಯುವಜನರಿಗೆ ಮಾಸಿಕ ಭತ್ಯೆ, ಖಾಲಿ ಇರುವ 2.5 ಲಕ್ಷ ಸರ್ಕಾರಿ ಹುದ್ದೆಗಳ ತಕ್ಷಣ ಭರ್ತಿ ಮತ್ತು ಪಾರದರ್ಶಕ ಪರೀಕ್ಷಾ ವ್ಯವಸ್ಥೆಗೆ ಒತ್ತಾಯಿಸಿ ರಾಜ್ಯಾದ್ಯಂತ ಮನವಿ ಸಲ್ಲಿಸಲಾಗಿದೆ.`)
          : (item.full_en || `${item.desc_en}\n\nComprehensive coverage of DYFI activities, protest rallies, and youth conventions across Karnataka.`);
        primaryActionText = isKn ? 'ಸ್ಥಳೀಯ ಘಟಕ ಸಂಪರ್ಕಿಸಿ ➔' : 'Contact Local Unit ➔';
        primaryActionFn = () => {
          modal.classList.remove('active');
          const contactSec = document.getElementById('contact');
          if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
        };
      }
    } else if (type === 'statement') {
      const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.STATEMENTS) || [] : [];
      item = list.find(s => s.id === id || String(s.id) === String(id)) || list[id] || list[0];
      if (item) {
        categoryBadge = isKn ? '📜 ಅಧಿಕೃತ ಪತ್ರಿಕಾ ಹೇಳಿಕೆ (Official Statement)' : '📜 Official Press Release';
        title = isKn ? (item.title_kn || item.title_en) : (item.title_en || item.title_kn);
        date = item.date || '2026-10-11';
        extra = item.refNo ? `• Ref: ${item.refNo}` : '';
        img = 'images/hero-banner-3.jpg';
        fullText = isKn
          ? (item.full_kn || `ಭಾರತ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಯುವಜನ ಫೆಡರೇಶನ್ (DYFI) ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿಯು ಅಧಿಕೃತವಾಗಿ ಹೊರಡಿಸಿರುವ ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ.\n\n${title}\n\nರಾಜ್ಯದ ಯುವಜನರ ಸಾಂವಿಧಾನಿಕ ಹಕ್ಕುಗಳ ರಕ್ಷಣೆ, ಪರೀಕ್ಷಾ ಅಕ್ರಮಗಳ ವಿರುದ್ಧ ಕಠಿಣ ಕಾನೂನು ಜಾರಿ ಮತ್ತು ಶಿಕ್ಷಣದ ವಾಣಿಜ್ಯೀಕರಣ ತಡೆಗಾಗಿ ಡಿವೈಎಫ್ಐ ನಿರಂತರವಾಗಿ ದನಿ ಎತ್ತುತ್ತಿದ್ದು, ಸಂಬಂಧಪಟ್ಟ ಇಲಾಖೆಗಳು ತಕ್ಷಣವೇ ಕ್ರಮ ವಹಿಸಬೇಕೆಂದು ಆಗ್ರಹಿಸಲಾಗಿದೆ.\n\nಈ ಅಧಿಕೃತ ಹೇಳಿಕೆಯ ಸಂಪೂರ್ಣ ಪ್ರತಿಯನ್ನು ಕೆಳಗಿನ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ PDF ರೂಪದಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.`)
          : (item.full_en || `Official press statement released by DYFI Karnataka State Committee regarding:\n\n${title}\n\nStanding firmly for democratic youth rights, transparency, and social justice across Karnataka.`);
        primaryActionText = isKn ? 'ಹೇಳಿಕೆ PDF ಡೌನ್‌ಲೋಡ್ ⬇' : 'Download Statement PDF ⬇';
        primaryActionFn = () => {
          alert(isKn ? 'ಅಧಿಕೃತ ಹೇಳಿಕೆ PDF ಡೌನ್‌ಲೋಡ್ ಆಗುತ್ತಿದೆ...' : 'Downloading Official Statement PDF...');
        };
      }
    } else if (type === 'martyr') {
      const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [] : [];
      item = list.find(m => m.id === id || String(m.id) === String(id)) || list[id] || list[0];
      if (item) {
        categoryBadge = isKn ? '⭐ ಅಮರ ಹುತಾತ್ಮರು (Immortal Martyrs)' : '⭐ Immortal Martyrs of Struggle';
        title = isKn ? (item.name_kn || item.name_en) : (item.name_en || item.name_kn);
        date = item.date || '1992';
        extra = item.district ? `• ಜಿಲ್ಲೆ: ${item.district}` : '';
        img = item.photo || 'images/shivappa.jpg';
        fullText = isKn
          ? `"${item.tribute_kn || item.tribute_en}"\n\nಯುವಜನರ ಶಿಕ್ಷಣ, ಉದ್ಯೋಗ, ಸಮಾನತೆ ಹಾಗೂ ಕೋಮು ಸೌಹಾರ್ದತೆಯ ರಕ್ಷಣೆಗಾಗಿ ಹೋರಾಡಿ ಹುತಾತ್ಮರಾದ ಧೀರ ಒಡನಾಡಿ. ಅವರ ತ್ಯಾಗ ಮತ್ತು ಬಲಿದಾನ ನಮ್ಮ ಪ್ರತಿಯೊಂದು ಹೋರಾಟಕ್ಕೂ ಸದಾ ದಾರಿದೀಪ.\n\nಅಮರ ಹುತಾತ್ಮರಿಗೆ ಕ್ರಾಂತಿಕಾರಿ ಕೆಂಪು ನಮನಗಳು! ✊`
          : `"${item.tribute_en || item.tribute_kn}"\n\nImmortal martyr who laid down his life fighting for communal harmony, employment rights, and student welfare in Karnataka. Revolutionary homage to his ultimate sacrifice.`;
        primaryActionText = isKn ? 'ಕ್ರಾಂತಿಕಾರಿ ನಮನಗಳು ✊' : 'Revolutionary Tribute ✊';
        primaryActionFn = () => {
          alert(isKn ? 'ಅಮರ ಹುತಾತ್ಮರ ತ್ಯಾಗಕ್ಕೆ ಕ್ರಾಂತಿಕಾರಿ ನಮನಗಳು!' : 'Revolutionary homage to our immortal martyrs!');
        };
      }
    } else if (type === 'leader') {
      const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.LEADERS) || [] : [];
      item = list.find(l => l.id === id || String(l.id) === String(id)) || list[id] || list[0];
      if (item) {
        categoryBadge = isKn ? '🚩 ರಾಜ್ಯ ನಾಯಕತ್ವ (State Leadership)' : '🚩 State Leadership';
        title = isKn ? (item.name_kn || item.name_en) : (item.name_en || item.name_kn);
        date = isKn ? (item.role_kn || item.role_en) : (item.role_en || item.role_kn);
        extra = item.region ? `• ${item.region}` : '';
        img = item.photo || 'images/santosh_bajal.jpg';
        fullText = isKn
          ? `${title} — ${date}\n\nಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿಯ ಮುಂಚೂಣಿಯಲ್ಲಿ ನಿಂತು ರಾಜ್ಯಾದ್ಯಂತ ಯುವಜನ ಚಳವಳಿ, ಉದ್ಯೋಗ ಹಕ್ಕು ಹೋರಾಟ, ಕೋಮು ಸೌಹಾರ್ದ ಜಾಗೃತಿ ಹಾಗೂ ರಕ್ತದಾನ ಜಾಲವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮುನ್ನಡೆಸುತ್ತಿರುವ ನಾಯಕರು.`
          : `${title} — ${date}\n\nLeading the vanguard of progressive youth struggles, employment rights, and secular campaigns across Karnataka State Committee.`;
        primaryActionText = isKn ? 'ಸಂಪರ್ಕಿಸಿ ➔' : 'Get in Touch ➔';
        primaryActionFn = () => {
          modal.classList.remove('active');
          const contactSec = document.getElementById('contact');
          if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
        };
      }
    }

    // Populate Content Modal Elements
    const headerBadge = document.getElementById('contentModalCategoryBadge');
    if (headerBadge) headerBadge.innerHTML = categoryBadge;

    const modalImg = document.getElementById('contentModalImg');
    if (modalImg) {
      modalImg.src = img;
      modalImg.onclick = () => openLightboxImage(img, title);
      modalImg.title = isKn ? 'ಚಿತ್ರವನ್ನು ದೊಡ್ಡದಾಗಿ ವೀಕ್ಷಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ' : 'Click to enlarge photo';
    }

    const modalDate = document.getElementById('contentModalDate');
    if (modalDate) modalDate.textContent = `📅 ${date}`;

    const modalExtra = document.getElementById('contentModalExtra');
    if (modalExtra) modalExtra.textContent = extra;

    const modalTitle = document.getElementById('contentModalTitle');
    if (modalTitle) modalTitle.textContent = title;

    const modalDesc = document.getElementById('contentModalDesc');
    if (modalDesc) modalDesc.innerHTML = `<p>${fullText.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>`;

    const primaryBtn = document.getElementById('contentModalPrimaryBtn');
    if (primaryBtn) {
      primaryBtn.textContent = primaryActionText;
      primaryBtn.onclick = primaryActionFn;
    }

    const closeBtn = document.getElementById('contentModalCloseBtn');
    if (closeBtn) {
      closeBtn.textContent = isKn ? 'ಮುಚ್ಚಿ / Close' : 'Close';
      closeBtn.onclick = () => modal.classList.remove('active');
    }

    modal.classList.add('active');
  };

  /* ========================================================
     11. LIGHTBOX IMAGE VIEWER
     ======================================================== */
  window.openLightboxImage = function(src, caption) {
    const lightbox = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = src;
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || 'DYFI Karnataka';
    }
    lightbox.classList.add('active');
  };

  /* ========================================================
     12. UNIVERSAL IMAGE & MODAL CLOSING LOGIC
     ======================================================== */
  function initUniversalImageClicks() {
    // 1. Modal close button listeners
    const closeContentBtn = document.getElementById('closeContentModal');
    const contentModal = document.getElementById('contentDetailsModal');
    if (closeContentBtn && contentModal) {
      closeContentBtn.onclick = () => contentModal.classList.remove('active');
    }

    const closeLightboxBtn = document.getElementById('lightboxClose');
    const lightboxModal = document.getElementById('lightboxModal');
    if (closeLightboxBtn && lightboxModal) {
      closeLightboxBtn.onclick = () => lightboxModal.classList.remove('active');
    }

    // 2. Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active, .lightbox-overlay.active').forEach(m => {
          m.classList.remove('active');
        });
      }
    });

    // 3. Delegate universal image clicks
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.tagName === 'IMG') {
        // Skip logo and current lightbox enlarged image
        if (target.classList.contains('brand-logo-img') || target.id === 'lightboxImage' || target.closest('.mobile-drawer-header')) {
          return;
        }

        // Inside contentDetailsModal: enlarge to lightbox
        if (target.id === 'contentModalImg') {
          openLightboxImage(target.src, document.getElementById('contentModalTitle')?.textContent || '');
          return;
        }

        // In gallery: open in lightbox
        if (target.closest('.gallery-item')) {
          const item = target.closest('.gallery-item');
          const cap = item.querySelector('.gallery-caption')?.textContent || 'DYFI Karnataka Gallery';
          openLightboxImage(target.src, cap);
          return;
        }

        // In Campaign card: open full campaign details
        const campCard = target.closest('.campaign-card');
        if (campCard) {
          const title = campCard.querySelector('.card-title')?.innerText || '';
          const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.CAMPAIGNS) || [] : [];
          const match = list.find(c => (c.title_kn && c.title_kn.includes(title)) || (c.title_en && c.title_en.includes(title)));
          openContentDetails('campaign', match ? match.id : 0);
          return;
        }

        // In News card: open full news details
        const newsCard = target.closest('.news-card');
        if (newsCard) {
          const title = newsCard.querySelector('.news-title')?.innerText || '';
          const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.NEWS) || [] : [];
          const match = list.find(n => (n.title_kn && n.title_kn.includes(title)) || (n.title_en && n.title_en.includes(title)));
          openContentDetails('news', match ? match.id : 0);
          return;
        }

        // In Leader card: open full leader details
        const leaderCard = target.closest('.leader-card');
        if (leaderCard) {
          const name = leaderCard.querySelector('.leader-name')?.innerText || '';
          const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.LEADERS) || [] : [];
          const match = list.find(l => (l.name_kn && l.name_kn.includes(name)) || (l.name_en && l.name_en.includes(name)));
          openContentDetails('leader', match ? match.id : 0);
          return;
        }

        // In Martyr card: open full martyr tribute
        const martyrCard = target.closest('.martyr-card');
        if (martyrCard) {
          const name = martyrCard.querySelector('.martyr-name')?.innerText || '';
          const list = (typeof DyfiDataStore !== 'undefined') ? DyfiDataStore.get(DYFI_DATA_KEYS.MARTYRS) || [] : [];
          const match = list.find(m => (m.name_kn && m.name_kn.includes(name)) || (m.name_en && m.name_en.includes(name)));
          openContentDetails('martyr', match ? match.id : 0);
          return;
        }

        // Default: open in lightbox with zoom
        openLightboxImage(target.src, target.alt || 'DYFI Karnataka');
      }
    });
  }
