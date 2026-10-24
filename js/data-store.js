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
  "siteContent": {
    "heroTitle_en": "Organize for Education, Struggle for Employment, Unite for Secularism!",
    "heroTitle_kn": "ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಸಂಘಟಿತರಾಗಿ, ಉದ್ಯೋಗಕ್ಕಾಗಿ ಹೋರಾಡಿ, ಸೌಹಾರ್ದತೆಗಾಗಿ ಒಂದಾಗಿ!",
    "heroSub_en": "Democratic Youth Federation of India (DYFI) Karnataka State Committee — Mobilizing progressive youth across all 31 districts of Karnataka against unemployment, inequality, and hatred.",
    "heroSub_kn": "ಭಾರತ ಪ್ರಜಾಸತ್ತಾತ್ಮಕ ಯುವಜನ ಫೆಡರೇಶನ್ (ಡಿವೈಎಫ್ಐ) ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸಮಿತಿ — ನಿರುದ್ಯೋಗ, ಅಸಮಾನತೆ ಹಾಗೂ ಕೋಮುವಾದದ ವಿರುದ್ಧ ರಾಜ್ಯದ 31 ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಸಾಗುತ್ತಿರುವ ಯುವಜನರ ಹೋರಾಟದ ಧ್ವನಿ.",
    "quoteText_en": "The revolution is not an apple that falls when it is ripe. You have to make it fall.",
    "quoteText_kn": "ಕ್ರಾಂತಿಯು ಮಾಗಿದಾಗ ಉದುರುವ ಸೇಬಲ್ಲ, ಅದನ್ನು ನೀವೇ ಉದುರಿಸಬೇಕು.",
    "quoteAuthor": "Comrade Che Guevara",
    "officeAddress_en": "SFI-DYFI OFFICE, C/o: Amma Nilaya, #25, 1st Main Road, 11th Cross, Sanmangiramanagara, Bengaluru - 560027.",
    "officeAddress_kn": "ಎಸ್.ಎಫ್.ಐ - ಡಿವೈಎಫ್ಐ ಕಚೇರಿ, ಸಿ/ಒ: ಅಮ್ಮ ನಿಲಯ, #25, 1ನೇ ಮುಖ್ಯ ರಸ್ತೆ, 11ನೇ ಕ್ರಾಸ್, ಸಂಪಂಗಿರಾಮನಗರ, ಬೆಂಗಳೂರು - 560027.",
    "phone1": "+91 9449225636",
    "phone2": "+91 9481261229",
    "landline": "+91 80 2287 4521",
    "email": "dyfikar1980@gmail.com",
    "socialFb": "https://www.facebook.com/share/14nAFsBHkYR/",
    "socialInsta": "https://instagram.com/dyfi_karnataka",
    "socialYt": "https://youtube.com/@dyfikarnataka",
    "socialX": "https://twitter.com/dyfikarnataka"
  },
  "ticker": [
    {
      "id": "t1",
      "text_en": "LIVE TEST: Statewide Youth Rally Announced for Nov 2026!",
      "text_kn": "Live Test: November 2026 ralli bruhat rajyamattada yuva jagriti jatha!",
      "active": true
    },
    {
      "id": "t2",
      "text_en": "Monsoon Volunteer Brigades deployed for flood relief & emergency assistance in coastal and malnad districts.",
      "text_kn": "ಕರಾವಳಿ ಮತ್ತು ಮಲೆನಾಡು ಭಾಗಗಳಲ್ಲಿ ನೆರೆ ಪರಿಹಾರಕ್ಕಾಗಿ ಡಿವೈಎಫ್ಐ ಯುವ ಕಾರ್ಯಪಡೆ ಸನ್ನದ್ಧ.",
      "active": true
    }
  ],
  "news": [
    {
      "id": "n1",
      "title_en": "TEST UPDATED NEWS ARTICLE 2026",
      "title_kn": "ಉಚಿತ ಉನ್ನತ ಶಿಕ್ಷಣ ಹಾಗೂ ಉದ್ಯೋಗಕ್ಕಾಗಿ ಸಮರಶೀಲ ಹೋರಾಟಕ್ಕೆ ಡಿವೈಎಫ್ಐ ರಾಜ್ಯ ಸಮಾವೇಶ ಕರೆ",
      "category": "Convention",
      "date": "2026-10-14",
      "image": "images/hero-banner-1.jpg",
      "desc_en": "Hundreds of delegates from 31 districts gathered at Bengaluru to pass crucial resolutions demanding fill-up of 2.5 lakh vacant government posts.",
      "desc_kn": "ರಾಜ್ಯ ಸರ್ಕಾರದ 2.5 ಲಕ್ಷ ಖಾಲಿ ಹುದ್ದೆಗಳನ್ನು ತಕ್ಷಣ ಭರ್ತಿ ಮಾಡಲು ಮತ್ತು ಯುವಜನರಿಗೆ ಗೌರವಯುತ ಉದ್ಯೋಗ ಸೃಷ್ಟಿಗೆ ಆಗ್ರಹಿಸಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಬೃಹತ್ ಸಮಾವೇಶ."
    },
    {
      "id": "n2",
      "title_en": "Protest March Against Bus Fare Hike and Inadequate Government Hostels in Kalaburagi",
      "title_kn": "ಕಲಬುರಗಿಯಲ್ಲಿ ಬಸ್ ಪಾಸ್ ಸಮಸ್ಯೆ ಹಾಗೂ ಸರ್ಕಾರಿ ವಸತಿ ನಿಲಯಗಳ ಸೌಲಭ್ಯಕ್ಕೆ ಆಗ್ರಹಿಸಿ ಪ್ರತಿಭಟನಾ ಮೆರವಣಿಗೆ",
      "category": "Protest",
      "date": "2026-10-08",
      "image": "images/hero-banner-2.jpg",
      "desc_en": "Students and youth united to submit an urgent memorandum to the authorities demanding immediate hostel allocation and bus frequency.",
      "desc_kn": "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಮರ್ಪಕ ಹಾಸ್ಟೆಲ್ ಸೌಲಭ್ಯ ಹಾಗೂ ಗ್ರಾಮೀಣ ಭಾಗಗಳಿಗೆ ಬಸ್ ಸೌಲಭ್ಯ ಒದಗಿಸಲು ಆಗ್ರಹಿಸಿ ಜಿಲ್ಲಾಧಿಕಾರಿಗಳ ಕಚೇರಿ ಎದುರು ಪ್ರತಿಭಟನೆ."
    },
    {
      "id": "n3",
      "title_en": "Statewide Blood Donation & Plasma Volunteer Registry Launched by DYFI Health Cell",
      "title_kn": "ಡಿವೈಎಫ್ಐ ಆರೋಗ್ಯ ಘಟಕದಿಂದ ರಾಜ್ಯಮಟ್ಟದ ತುರ್ತು ರಕ್ತದಾನ ಜಾಲ ವಿಸ್ತರಣೆ",
      "category": "Health",
      "date": "2026-09-28",
      "image": "images/blood-donation-bg.jpg",
      "desc_en": "Empowering local hospitals with over 5,000 ready voluntary donors during seasonal emergency periods.",
      "desc_kn": "ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿ ರೋಗಿಗಳಿಗೆ ಉಚಿತ ಹಾಗೂ ತ್ವರಿತ ರಕ್ತ ಒದಗಿಸಲು 5,000ಕ್ಕೂ ಹೆಚ್ಚು ನೋಂದಾಯಿತ ಸ್ವಯಂಸೇವಕರ ನೆಟ್‌ವರ್ಕ್ ಕಾರ್ಯಾಚರಣೆ."
    }
  ],
  "campaigns": [
    {
      "id": "c1",
      "title_en": "Youth Against Hate & Communalism",
      "title_kn": "ಕೋಮುವಾದದ ವಿರುದ್ಧ ಯುವಜನರ ಐಕ್ಯತಾ ಅಭಿಯಾನ",
      "category": "Social Justice",
      "progress": 85,
      "desc_en": "Organizing street theater, peace rallies, and youth brotherhood camps across sensitive zones.",
      "desc_kn": "ಕೋಮು ಸೌಹಾರ್ದತೆ ಮತ್ತು ಭ್ರಾತೃತ್ವವನ್ನು ಎತ್ತಿಹಿಡಿಯಲು ರಾಜ್ಯದಾದ್ಯಂತ ಬೀದಿನಾಟಕ, ಸೌಹಾರ್ದ ಕೂಟ ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಜಥಾಗಳು.",
      "status": "Active"
    },
    {
      "id": "c2",
      "title_en": "Jobs for All — Right to Work",
      "title_kn": "ಉದ್ಯೋಗ ನಮ್ಮ ಹಕ್ಕು — ಖಾಲಿ ಹುದ್ದೆಗಳ ಭರ್ತಿಗೆ ಹೋರಾಟ",
      "category": "Employment",
      "progress": 90,
      "desc_en": "Demanding legal guarantee for employment and unconditional unemployment allowance for job seekers.",
      "desc_kn": "ಸರ್ಕಾರಿ ಖಾಲಿ ಹುದ್ದೆಗಳ ತ್ವರಿತ ನೇಮಕಾತಿ ಹಾಗೂ ನಿರುದ್ಯೋಗಿ ಯುವಕರಿಗೆ ಮಾಸಿಕ ನಿರುದ್ಯೋಗ ಭತ್ಯೆಗೆ ಆಗ್ರಹ.",
      "status": "Active"
    },
    {
      "id": "c3",
      "title_en": "Anti-Drug & De-addiction Youth Network",
      "title_kn": "ಮಾದಕ ದ್ರವ್ಯ ಮುಕ್ತ ಸಮಾಜಕ್ಕಾಗಿ ಯುವ ಕಾವಲು",
      "category": "Health & Youth",
      "progress": 75,
      "desc_en": "Partnering with educational institutions to raise awareness, counsel victims, and shut illegal outlets.",
      "desc_kn": "ಕಾಲೇಜು ಆವರಣಗಳಲ್ಲಿ ಡ್ರಗ್ಸ್ ಮಾಫಿಯಾ ವಿರುದ್ಧ ಜಾಗೃತಿ ಹಾಗೂ ವ್ಯಸನಮುಕ್ತ ಕೌನ್ಸೆಲಿಂಗ್ ಶಿಬಿರಗಳು.",
      "status": "Active"
    }
  ],
  "statements": [
    {
      "id": "st1",
      "title_en": "DYFI Condemns Commercialization of Professional Education & Fee Hikes in Private Universities",
      "title_kn": "ಖಾಸಗಿ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳ ಅತಿಯಾದ ಶುಲ್ಕ ಏರಿಕೆ ಹಾಗೂ ಶಿಕ್ಷಣದ ವಾಣಿಜ್ಯೀಕರಣವನ್ನು ಖಂಡಿಸಿ ಡಿವೈಎಫ್ಐ ಹೇಳಿಕೆ",
      "refNo": "DYFI-KAR-ST-2026/08",
      "date": "2026-10-11",
      "category": "Education Policy",
      "fileUrl": "#"
    },
    {
      "id": "st2",
      "title_en": "Press Release: State Committee Demands Fair Relief Package for Flood-Affected Farmers & Rural Youth",
      "title_kn": "ಪತ್ರಿಕಾ ಪ್ರಕಟಣೆ: ನೆರೆ ಸಂತ್ರಸ್ತ ರೈತರು ಮತ್ತು ಗ್ರಾಮೀಣ ಯುವಕರಿಗೆ ಸೂಕ್ತ ಪರಿಹಾರ ಪ್ಯಾಕೇಜ್ ಘೋಷಿಸಲು ಆಗ್ರಹ",
      "refNo": "DYFI-KAR-PR-2026/19",
      "date": "2026-10-02",
      "category": "Public Welfare",
      "fileUrl": "#"
    },
    {
      "id": "st3",
      "title_en": "Resolution: Strict Implementation of Reservation & Transparent Recruitment Without Paper Leaks",
      "title_kn": "ನಿರ್ಣಯ: ಪರೀಕ್ಷಾ ಪ್ರಶ್ನೆಪತ್ರಿಕೆ ಸೋರಿಕೆ ತಡೆಗಟ್ಟಲು ಕಠಿಣ ಕಾನೂನು ಹಾಗೂ ಪಾರದರ್ಶಕ ಪರೀಕ್ಷಾ ವ್ಯವಸ್ಥೆ",
      "refNo": "DYFI-KAR-RES-2026/04",
      "date": "2026-09-19",
      "category": "Recruitment Transparency",
      "fileUrl": "#"
    }
  ],
  "martyrs": [
    {
      "id": "m1",
      "name_en": "Comrade .Srinivas Bajal",
      "name_kn": "ಕಾ.ಶ್ರೀನಿವಾಸ್ ಬಜಾಲ್",
      "date": "24-06-20022",
      "district": "Dakshina Kannada",
      "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUEBAQEAwUEBAQGBQUGCA0ICAcHCBALDAkNExAUExIQEhIUFx0ZFBYcFhISGiMaHB4fISEhFBkkJyQgJh0gISD/2wBDAQUGBggHCA8ICA8gFRIVICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAGSASUDASIAAhEBAxEB/8QAHQAAAAcBAQEAAAAAAAAAAAAAAAECAwQFBgcICf/EAD4QAAEEAQMDAgQEBAUEAgEFAAEAAgMRBAUhMQYSQRNRByJhcRQygZEVI0KhCFKxwdEWM1NiJEPhF4KSsvD/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIEBQMG/8QAKxEAAgIBBAEEAgIBBQAAAAAAAAECEQMEEiExQRMiMlEFFGFxIxUzQoGR/9oADAMBAAIRAxEAPwDvHSvSGhdH6NHpeiYEWPG0DvkDR3zOr8z3ck//AOGy0Xp2eD9wlMBG3906xziTZFriSGfT7XG+SdqS2R9zgOPZOBpDm2dhsnWtZfcdiCgZEc1wcQ1qdEZDfm34Tpb8w3sJQZ81ECkwGuwF3FHwU4B6Zom06GjhKdHs00ihDf5jVUnWR7b/AN0Yo70nm7i1IdgAFJIBtOA+EALG4QIT2HfZKBo7ikYA9qQDO517/ZABinoFu59kA1wJ8JdHygBo0dqSA0h1/wBk66m791fdIbNG5waJGE/Qp0xWgyKCMtvcFLDRyd0XjYbJAILfJCbeAATSdd7VskuFtquUDIpBdvWyb7y3b6p+RpYAkNZbw6tgkAkB3KMtca23T4HzUUo7VQ2TAYa0+efZOBtBKoDwjP2QA12g3fKbcxraoWpPnigm+0bkblAEcAWAUUos14T/AKdO7jv9E1K35SdyfqlQIYaWh9HevZKA+Y0KvhNtDwCANj+6W0O7bO/6pAGQL7XGz5SHtb3cUnGkOcCLbXNpTt3HbhAxgxE18oQT/aa5QQIiuIa2x5S2EO5CYJPdRKUwnuJDrSAkgACr5RHYUPv90YII7dtigG7VVIAXGL2LiU727ptrT22NwVJHygNI54Uh2E0NJFhP0CABummg80nGAA3xe+6YgEdvDQbR0BwlAWbJFJDj81boAOqspxg7gbPCbi+ZpsH7+6eDdk0ILtCO2tBcTQHkrPdVdZaB0hpxy9ZzGxuIuOFm8kh9gP8AfheY+ufjbr/UplwsA/wzTnbCKN3zvH/s7/hWMWCWTnwV8ueMOPJ33qv4t9I9L98H4r+I5wv/AOPiuDqP/s7gLhXU/wAc+r9VldHp+QzScY8Mxxbq+rjv+1LkL8iWSUOduEHPDzR3WlDT48fi2UZZpz7dF5m9Y9VZjy7J1/Okv3mcoMOv6vHL3x6pltf7iZ3/ACoDmtI5THZUlgld+Po4msw/iH1tpcofi9R5rK/pdKXD9itQPj/8QY4mh2pY79qs4zL/ANFy2R97JotoGwubhF9omnJdM6pL8fPiC5tt1KIH29Bn/Cb/AP19+I7Bf8RxyPrjs/4XK3NJbukNNiiVH04fQ98vs7Pg/wCIjrRjrzYsHKAFUYe3/QharSP8SzfWZHrnTo9PgyYsu4//AGu5/debo77zsfolvAJpJ4cb8HRTyLye4+nvin0P1I9keDrDIch//wBGSPSfftvsf0JW4aQ4AtcCDwV852SvhpzHFpH1XSujvjN1P0qI8aTI/H4QIuDIJdQ9geQqmTSr/gWIZ31I9nVX1QA23WO6J+JnTPW+K38BP+GzgLfhzGnj6t8OH2W1DaVFxcXTLcZKStCe0HlJLSPqE5RtGQkSGHD25SQ0cG7T7m72UhradVbpAMel2njlJcxptoFWpDuK/ZMlpc4GvukAw0NB+x5St/H904WCiCE24Gzvxwgdie02QaP2QS+2+DVIJCIZjsEk1XNIdhP5QniADwknYcfqgBlwPg+LTzJHN5/dJ7G8ACyliOyLG6KHRLjAI7/B2TjWcAXX+ibhabtp2rcFSqO3upCEVvQNgBLaGkfMOPCXRIAIQIJIQAjbkFL7QRZ3QI+Whz7om2BRB/VMBTRTflGywXxE+JGD0Tpjoo+3I1eVp9GC9mf+zvYf6qd8Q+uMTofpmTOk7ZM2UFmNCT+Z3ufoF4y13qPN1vUp83PyHT5Ezi573Hn7fRXtNp9/vl0UNRqNr2Q7C1/XdV13VptR1bMkysiQ2XOOwHsB4H0VGT81uBs8UpF94tu9eVHbVu7yA47WFqJfRR/sZe63DdOA7D/Ypp8bmu2Irx9Ukd97ghAEltjylgWN91H7yPKW2ft2KVDTEyNcXW0GgmC93cApfrDwmXFt3SVDGjVcH90GN5I/sluI7SRSbab2CKAf7x6PzJkvoWE4G/KRYTdNqgkCYY/mfdIe3fm0oHt4CI/MRsk0STJOBqWZpuSzIw5nwysPc1zDRB9wV6W+Gvx4jyG4+jdYENkNMZnjj6d4/wB15dIrYhKErmUBvS5TgpqpE4yceYn0ka+OWJssTg9jhbXNNgj3RkbLyV8LvjdP0zEzR+ovVy9KApjh8z4foPcfRepdC17S+o9Hi1XSMtmViyiw5p3B9iPB+izMmGWN/wAF/HmjNfyWFgJJBHzUl1fIQXE7jZB9v/wkloA4o8p2tuUZG2/CAIxb8n1TBaXEqVLTdtifZIDfcbpANNYRdhBS2ggIIArQ2zV7JL4yR2p75aFc+yO/LhaQDLI7vavon42Br6/ZJIBFUE9GD3bn6UmA5GPl4q/Cd5RcuS2gpgAeEfJ5pAc0ldvsgAgB58bKPn5mNpunZGoZsrYcbHYZJHuOzQApVe683/4guv2nt6P0+e4mEPzOw/mPLWfpyf0XbDjeSW1HDNlWOO45J8TOuMrrPqmbPle5mKw9mNF/kZ4/U8rBuefv909I/wBUmQhNcnyttJJUujHXPL7HmTubHVJn1HPfZKdbCXb70fdONiDWGqCY6GLc0bHlEO5pu086I9g+YE/RMuBGxQKwzJZ9k26T5qrlNfN3Ego6Lh82x90BYsOJbQ5RNdtym2l43HIR871ugdjl20plrgDadaSQRSaod/CQx+OanbjZKcQeFFdVn+yda/wd1EBRO9IwSHA80mnuHdyi7juTwgY55JKbItyPuIG4Rd3y2igthhxDxS2/QPxE1rofWG5WDOXYznD18Vx+SVv28H6rDDcnwhR96SaTVMV07R9CejutdF630Nmp6PkBwHyywuPzxO9iFowN7PC8D/DrrvU+gupv4jhD18eZvp5GMTTZW+P1Hgr2F0P8T+met4RFhz/htQDbdiTGn/p7hZmbTuHuXRo4dTGXtfZt629kYPg7ojXhGAVULYTmsIut0gNBNJy9vqi4KBgaBW6CCCAKxjhRPNeyU4ggkVf1TbRRIFgD2S9nCiR+qQ6B3HawpULSLNbpjsLuK5Ull1RHCBCz5RtIJqkXn/dKA35ITAP+1JQvm0TRRStgD4CBGS+IXWGN0V0dlatM4fiCPTxoz/XIeP25P2XhHVdRyNT1KfPyZTJNO8ve8+STuuofHvrf/qPrMaZhzd2BptxNDTYc/wDqd/t+i5A263FrZ0+P04fyzHzzeSX8IcaXkFoFpYhfsT8v6ooz2u+ydc7ufdqwc1/IRL2s3IpILzVj+6DndxGybNh24tBFuxxzZfSbIG233TMlk354QJ+Y71sgAHHdqSb8jdeBsW0WeEbnAtI7t/CdERO17Jv0O5xBHClaI0xDTTaKMEjhBzHsNFppF+iAXA62wLJTMg/mbOr3To7qFcJDge4pA2JABPFgIEAWRsnWgNbdhERtdJMExoj7lGA43yAl+Be1ou43TTY+qRKxDnECv0SfBBSn77EAJt2xUkRtjoLRXhE4knYpsEngo3OrcH7oBtjjZAw93BG6s8HVsrC1DHz8DIfBkwOEjJGGi0hULj3Ou1IgcWSN+imn4OUo+UfQn4fdSnq3oXTtalDW5EjO2YN/zjY/8rVfZeYv8P3X8OFlO6R1CRrYsp/fjPJ4f5b+q9OA2bCxNRjePI14NvTZfUxp+Qq3Q2LkqrSeDuqxZC7fqgl0ggZTNpwBdyeEu7aLFJLARYPIT35m/wC6QWBjbPcDz7KU0U0BNMYGjkFOjkApgLR/VFQpK2qkABtk2sV8U+q29IfD7P1BjgMqUfh8cE7l7tr/AEFn9Ftg7wvK3+IzqR+p9SY/T+PJePprO94HmV3/AAKH6lWNPj3zSKupyenjb+zz7kTumyXyPcXOcSST5Rtd2pBaA4Xyj7Dd3+i175MyqRJFVZ4QDg0kBR+4s2JKJzyT8o3TsB4k1/wjYC8XRKcw8WXKlDGM7j7LUYfTswDWlgs+65Tyxj2WsGknlfC4MxHiySvDY2kn6K+wunJpS31ab3cWtlgdNCEtPpfrS1MGjtYGAxg+eFnZdal8Tbw/jox5mcxl6blhk7Wx2Ao83T84N+nX1AXaI9Ha4WWXY9kb9Di9Ht9IWq0de75LEtFifg4RNpMjR8zf3UE4FGiDwu0ZvTILq7QN74VW7pUNeHmO/wBFbjr01yVJfjYvpnI348jXFosFRu1zXFp54XUs3pxjy/tj3Wcy+mJ2O72MPvuFbx6mMjPy/jskXwZBw7WiwgNwaV3JpE7rAj49lElwJIhXplv1pd/Vj9lN6XIvBVkkPpETRuirMaXM8Bwbf1pNS6dkRglzUt6D9ef0V7nAkHdEeN1IOLI3dwpIfHXgggKSkmcZY5R8DPdRFCk0d30nXspu4SG13cbKRzsJ3b45CHe7axSDrB7gB9Ulztu5MRYafqWRhZMU+PKY5onh7Ht2LSDYK9p/CX4tYnXeIdN1FkeJrcDbdG0/LM3/ADNv+4XhoGnWeFqOk9fz+neo8HqDAf2zYUgdXh7fLT9CFzy4lmjXkljyvDLcumfRVF5tQdG1TG1vRMLVsN4fBlwtlYR7EWp/nZYTVcG8naCt3hBKQSGVYHJopYYABvQ+gRNJNDklPMAr3+iQxbR8tXulN/8AbdJbXCUEwFbJQI8JP2KMUASUCKzX9b0/p3Q8rWNSlEePjs7nH3PgD6krwp1br8mv9RZ+qujEZy5nSdt32gnYLrfx8+JDdSzz0lpjmuw8R4dPIDfqSjwPo2/3+y8+ulc4kuNla+mx7I2+2ZOon6k68IblGxIG6JpIAsod25TcmxAA5Xc5Bk0SrPB0ybKexrIye4jhNYGH+ImZ3g9vsul9OaU2BrJXgG+AfCq582xGnpNJ6r3PoRovSs0JBLAHnk+wW30/R4wAxzLA8uU7T8YCPuI391eY0AHIXns2olJno4QjBVEYx8CIfKWbD6KaMJve0saD43U1kNDaj9lLbj0wfVUZSZ0TI0WGywA2qSJsRoP5Tas2sDBXskPYC7lLcIppMQV8zbTDsJjmkBtBXJbe3KSWBoKakwozj9GjcT8o9+FCyNDgkaWPZz7LWhtgUL+ijviBPC6rI10Lk59N03HjOLmNsX7Kum0CGYFxYKvhdMlgY5lFoVdJpzbJaKtd46iQUn2c4Oi4sZLSztrlQ8rScaVh7BsOFvsnSmAvdySoX8NY1u7Qu6zsajE5nPorWgktBrgKlm0u3E9lG+B7LpebhsY403dUWXi0SVdxZ2ccumhNco5xnafLHZDTSq3AsJBFLoOVjBzXd3tssbqeKYZqG97rUxZd3DPN6zSen7okC9qsIqtpG1IvulCjQsrujLYh7D7bKxwnsGNI2t6UXaqJtJjkMUu35TyukXtZynHcqPdPwKyXZPwZ0UvNmL1Ix9g80ul0SvMv+Hj4i4+O89C6i4MEjnS4bz/mO7mf7hem9u2wsPUQccjs3NPNSxqgE0ghSCrlgq43ewsqSwEOBIqlHgiIII2pS6NbhIkGOUsfYWkNHzfROCvKYBj6rifxz+JMnTmn/wDTWkSuZqWVH3yzNNejGdtvqaK7HqOZBpumZOoZLu2HGidK8/QC14E616ozuq+qM7V8qQuM0hLGn+hn9LR9grmmx7pbn0ipqcjitq7ZnZ5JJZfUe4uc42SdymnWN0l7nOcK5Tfebs+FpWZ9UKe7fg/ZORM9V7duPdNgh5FK3wManAEC3f2UZSpHTHBzdFtoUBdktc/8oK6jpuOxwY1g9ljdJwGMLK3PNLoOjRVRqt6WFqp27PWabHshRpMGAgVWwV7FGCAFEw4yWiwPureBg9gsWciyIjxyTt/ZTAz04t9yn42NB4S3R2KpV3IEV8LwS9p2NpLz2glPemBOWgfdG+G/shMbRCE0Y42KXYdsjdj/ADEgUia0NC6J2RYktoeyZLGhxUh4Jaa3TTm9x32KkBGkbW9piRo7fqpzo9qKZcyyQQnYyqcwuG4UHIh7WHt3KupYyBsNlV5DJHO22FLpFkkjHagKmNilS5X5SB4Wo1bH5ePPCzckTj+ZaGJk2Us7QW7hZnWsVrgHAbUthkxUFQ6tEBjFwC0cUqZn6mClBpmBmb6b68fVEwgtPG6Xktt57t6TLaBC14njZ8Oh1rdyU26wRzdp9zx27cpsAndNkEanoWY4/XGg5hcW+nmxbg+O4L6FB3cwV5Xzx6K0jL17qvT9Jw+8SzTtHdG2ywXu79OV9C4YzDBHG5xcWNA7vfblUNbVxL2iv3IebwgiQWaaRDib27BPH6pAJASgbFgfukSFCr2SvZJAF3+iXtwmBmuv2ud8ONfAO/4OSv2Xz/ndTnE7br2n8e9W/hvwqyYmSOjfmSshHb5F2R+wXil7LkNG1qaVVjb+zM1DvIl9DJIL+Rsku7dgeQlkg2BtukkGubVpFd9ioAPUF7rT6SGl/dsa8FZhgoA/VaDS5O6QMF2fC55fiW9L8zd6VRe0N87UuhaTBcQLt91gdGiaJGVQIG66RpDe3G5vdec1J6yHxNFiimgUrfHaPKp4HksFK0xnFzgsiZNE4Cng+FMoFv6KOKNFOCy6wVyAYEXzmQiz4CDthfbR9lIe7aqTTh8t0gBl7LaSKCiOabIqwpp3am3NABUrERO0Nbum3N2v3UlwsFMbVXspbh0MeaKItokp0x/NdpDmXv7IsklRHkb3MKrJ2t3rlW9AtOyrclva4kCl1ix0Z7OYHAtq1ncmENeQOFqsjckkbLP5wa2TfyruKQUZzKYBdBUGpNBhNBabLLd9lns5txPoLTxO2V8y9rOeZrGiUlpF3woF/wAyirHUmkZDi0bqubZdZNlbUOjxOVe5jzQCQj3uq2SQ7tKDSSTuuhxOl/BNsjPi7oJiDiXSO7q9u02vdVrw/wDBHqDTdB+JGDNqTG+nLcAlcf8Atl2wP+36r3AKoEbgrM1vyRoaL4v+w6QR8oKgaBXulJdunIxtt7qOCHW4cVRtPxg3fdY8UkSHxt4TjRsm2nzsUsEJgcl/xCaV+P8Ahc/Js3hZDJaAux+X/deMZAY3kbr6K9SaLj9R9M5+jZLA+PKiczfwa2P7rwJ1d05qvS+vz6RquM+CaM7WNnt8OB8haelmnDaZ2ojUtxnxYsnf2RdthG2w7cWlkgg0raKzGx+bt8LR6KwnKYRQ22pZog94rb6BbjpPGLpmyvjJAHNLhndRsu6KO7Ikb/SMYMja7to1uttp5DIW77KiwsYnHYAA015VvGCyINvdeZyy3HqlwaGCUFvaOVbYlBg91mMeWmj591eYcwAou3+6oyiOy7i3HCk9u3j9FXwzt4sbKUJhQpV6Y7sWQRumy49p2tKMlt28oqpl3ykNCezYJt7N+U9YHKQ4t90wGHAtaa3+iaa2224UpTu3ttR3c0LUkLsZkcWHZNNc0uO6ccw7k/2TfYGmxtSkTCcKHOyqsoAndWMkgo2VWZL23t7KcQKrJHkD9Fnc9v5ir/JlbRJ5VBmSscHt8ncK5jTHZnZ7JJVBntc5jt62WjyXMNi7KqsmJr2EcWFpYnT5OORWmjmue0mV13araq7Wi1vDZEXP/ZZt5NnfdbcHatHjM8HDI0x3tBYiaQPCJndfOxSnMNXa6HBpErBlkiyo5Iz2lpsEL6G9Hajkat0Po2pZbe2fIxI5Hjjct3K8W/Cf4f5XXXVccXb26fikSZMh47b/AC/cr3ZDBHj48cELA2ONoY1oFAACgFR1clxHyW9LF25eBwII28ILONAoDLR2JpSosiyGtGyrrFqZitAPd+yiiRaN3HBSq5pIaTQ3SrPupAKbY+y5j8XvhpidcaIc6Brxq+DE78OWu2eOS0j9F08cJV7KcZOLtHOcVJUz5r5+PLhZUmPPGY5I3FrmuFEEcgqGHEt58rvXx36IbH8S487BdFHBqMQmlH/jcDRNfXY/uud53w9zMbCOZjzetE0dxoLT9eHFvsprS5ZRbS4RiwBttuuldDn1schzb7eAubStMcpadiF0f4dvZLM+MHcAKGqX+Js7aB7c1M6fG14h7x4HKiZGsR4zA10zW0d7KVnvkZikxvAXK9Vbm5Ga5rJy/c7LEwYFkbbPQZcvpx4XJu83rfEgLYseQPd5d7Ksx/iJLFlHvkHZdWTysKNLzOwl0R7/AGcmG6Dqs8p7ImgngeFfWmwrhmfLNnfKR0tvxafG8BkILeOVd4fxexBE314nDeibXEc3Q9TwDZjaT9Cq98OoPfcrCz7FN6PTy4Ry/Z1EOZI9b6J1npmrxg48vdfIJWkdkdze5p+X3XjjTcrVsCRr8OSRhB3IK790h1W/N0yPHzXfzu3cnysjV6JYuYM0tPneRcqjpjZQ5qIutVunzerQNkDhWoA7CsqqLljDpN6Tb5Q27pNzOcH0BsqzOyCzHc9vIXSEbEPZWqwQN+d4b9yqbL600fFH8zLjvyAVyrqnVdQdmyt9R3b4onZcyzcrMfI71C878rYwfj1kVyZS1Gq9HirPQeZ8Q9G76ZMHD6KjyviBp5sxvJHsVw2J2S400O58FPOhzBuI3kH6LQX4/EvJQ/1HI+onWH9bY+S6tm1tyknWI55QRICHLlsEeSPmdE8D7KyjEvptexjg66HzUn+tBcIsQ1k+5I3k07XOPao7ndzTazcOqSMeyOY1tVlXmO8Sx912Fylj2F3Hnjl6M/1HGPwpP9VrE8mnLe9QxF2E8hYM7PPhaWndxPPfkY1lseaG9pHATdjcUiN9uydiYZHhjWkX9OVaRlOz05/hZeTB1C0g1cRv916WXH/gL0RndI9Hz5WqxCLK1JzZQy92sr5b9juV1++Fj6hp5G0auni440mHwggAUFXLBnWsIY53bwFOxzTRtumu0AADgcpXf2im1+qiSJ8ZvaxaXfzUoUcmw2/VSmm90wHLvwlA/Kkb+6Pm72ITEecfiHJ/G+s8t/a7sjIhZ9m//m1aaPp2K7RvRmbbS2iCmc6AP6lzHO3HquP91eaPD6kDmjcONLOz5H/4beOFQSR5e650n+FdUT47GdrCe5n2K0Hw2j9LJmlMd7VZWk+NGiR40+HqDiPUJMZF8+xUf4b4ZOnPlcPzu5K2Xl36RSZjwxbdW0jWZ2NkTxOZjtb3O9+FUQdKMheZ8l/zVfGxXQ4MOIMb3NBVXq8DnNdG3Zg8cLFjna9qNramY5rY35PpYeOyZx2Lq2atVonT2BG10+rOa8Ef1EANWKy9bGi90eLimWUnYNCYzNE6w6g6QzdWyMyWJkTC9mNHy4K1slJK5UmQyZFFUkbXVm9AsnLPxGIJANx3dyqn9O9Ma1iuOB6T3N/8ZXDp8rEGlYeP+CkjzY3O9eYyEmWztt4pafobEkz9a07B0jUMrFypnO/EFwtjWjilZejljhuUzOjrVKW1xNN/0vFpuZ+Hc3uDjbbWt0DTWsyGBsTQGrKdV6hqml6kzSspolkjd/34z+b6rf8ASImyMBmRMztdX9lUzb1BOTs0ouL6RsMCItpoCtG2AQVDxH/L4U535O4CysqRJESRoAJVJntBjfe4+iuZn14G6pNQP8h1ckKUBnLdfZjjIdTQa91kDpk2r5gxtPxe+Tu4A2Wn6tZJjU7tJDlO6KzIYJG4ujYpzdTm3c0/lYPutqEpQx7onPIot0yLh/DGXCaJc+QB35qaOFYN6WwxcYcCT5IVb1vr3U8Gbqemapq0GmS4sTZIY4mE+vf9IK57pes9Q5IycjH1hjHYcfqkTSUX/QDyV2jizZI7nIpPVYsb20dLzOnI8GBziwSM9wqFug4+QC6EkgeAdwmcHrjVpdMY7U8UyRS8ShtKx07LgyZfWxH9pdyPBUVHLD5MuRnjyor5el3TwF0bCOw+Bum8fHfiN9NwJr3XS9Ng9aO3gGxus/rGmejOXsbTTvsuf7O/2sI4IwdxMRrTT+CdsQAFzyYATOobLpusQ9+nyG92jcLncWM/M1GPEi3fI8NC1NM/byYf5NNzSXkuemunsrWMpoMf8oHcrquP0tp+hS4+TLpbZzG5slu3Fg3uFoum9Ax9E0aCMRB85FuNK2yQc/EkjLQCNlm59ZKU/b0jQ0+khCCTXLO66JqePrGiYuoY4AjlYDQ/pPkKwXKvhRqEkLcvRJZA4N/mRi+PddVHCd3yVZx2yaFIIrPgIJkLKSyBdWnA2wfsibZ3Gycux7FQGJZYO4Kmxkduw/dR2Ve6fZwmA9v5S/f3TYIrZLBvZMRwbPjP/UOZt+WR1/urfSpRDiA8blOdQ4Zx+ps/Yjud3j6gqrdOIsPY0ReyysyblRu4nugjk3xqy5Z+osKPvuL0bDb82tF0Lh/h9ExyeSLIWA+Ic02d1bFG87sa1ra+66n09CYMDHjrdrACtPL7NNGJnYVeomzVt+YNA8J4aeckOD2g2m8dhNEBXmIARRCwpOjVRhNb6TjE0U8TAC3mlfaDOMbFOPO3bewRsQtTLjslbuAVWZGmgX6exPsn6raphSao5f1X8PNA1XUZM3FZJiSPNlsVFp+tKswtLx+j4ZH6ae7Jk2Msjd/09l1HJ0zILSWW4+FjtY6a1TUP5bbaLVzHqZSjtk+DisGNStI55nTZWp5rZvxQdJGSadR3XSOi3ZMOlkZU7XnwGjhVundBx4Uvdl/OSePdayDEixIgyGMMaPAXTNljJbYk2kui5wHlxIJ+quK7Y6PlVemNDW91blWp3A2sLOmwKrMtuwVTkO/lOB3IFq8ymCySqLIc1oLQVKAHKetpMrJezHxg1pB37kfw71CbR9aMpELS5va4na1vMrp/F1B3qyR273WNzejM6PJc7EJFGwVq480Xj9N8Edlytlz8R9Ei6r9LPgiEWVG3tLwba8fVczwPhtmS5jPxMjIonH5i02aXTtHOq4zPw+TivlaNlo44mOaD+HLHfZJarJijsTIT0mKctzRnNZ0nTcXpjH0vGxg1kTaa4jcqj0fpN/c1zD2NO66FJpP4zt7mE0VcY+msx4mgNCq/tSUWrLChGKpIosXT3Y7WM8AUT7qLrOLEYCNrpa6bHb2bLM6zH/LP2XCEm5WJnLdSgts0O24KxXS7Io+vcJsoHaJgN/ddHzmt9W3uAv8AuuW5Tzh9TiaM/NHMHAhek0z3QaMbXJKcJP7PUuNEJIC5zWg+PsqjGDW5srXX5SemNW/iOmxOkcO7tHCU89msOazh/wDZYdNSaZqx5RffDbfrOem9tRuXadgVyb4a4TndQ52X2kNYzts+bXWq+qv4/iZeofv4BwgggplYq42uognb7J8RtItLFOFikKocJEgg0DblKumjhJJ2BG9pNchMB0G9k607cKM2w5Pt4CBGD65xuzU8PLH5ZWGJ33G4/wBVgM1jwe3xyurdbQer0+2QD5o5mkH28Lm+ZA78KZG8tG6z9QqnZraWdwo491rp3Z1PpucGj05Xta77grpOnhveA3ilzjrXVg/V8KOj2MIJBHBtb3p+VssTXg8hWcrbwxsccajOTRscMfNRGyt4AGtCr8BoIGytWNHCxZFolMeKCPt7t73TTGU1G09p5G65iFGgKrhRZY2k7N3UomzaQ4WdkCKibGDzdfdQJ2Bvy0r2VlMJOyoZgXTm12gxE7A2arMWAqzEtvlWILtt1CfY6IOe+mWstlSB0n1Wn1DZjgSSa2WTnBbJZXbH0BaYLyYQy7KmPhaNy21U6dNcwA5V33d453TkSQUcUY+btFqRHFG6TcD9k2wEA2lB5BoLk2ySJrY4xvSJ/bwEiJ5aPmN2jeQeFAGRMg01xbt4WZ1Z38oj6LRzgkGlm9Wa50Tm7DZWMa5IMwGeWlsl0aulyPO31uVw2p97rrWdt3gjbdco1Om6nK5o4cvTaPpmN+RfEf7OydMZhxsbGLdg5oWz7GyZbZD7WVzfpVzp4cUA70Nl06K/UayrLvlCzNQqyUaUJVBM6X8PcQxaHLldob68h7fqAtibur4UTSsNuDpONiM29OMAj6+f7qWSfIXeKpUZE5bpNhhBI52A4QTIENr+0bkFqfa4OG/ChwgFg23PupDB2gpIkOkAnbZJpKF3sjojZMBLW0QnANkAD+qWAgCJqWKMzSsjHcAe5hq/dcxZAJwe4Hb5XbbWutc7Hhc4mgEOqZmMGEdkpI+x3VLVr2pl7SSqTR50+KeB/D+pYSGkMc3uHsd1oujtQbNBFv4FqT8atMI0vFz+/wD7RLePdYXoXPc5zWB/BrdWor1NMn9HRSazOL8nofTzbARzStAdxSz+jyh0LCHeFfgtO/hYM1TLqY//AE7cJKSXfLQ8oDur9NlzGOCyKBRn5QmwSOU4fnCQMi5cgEJI2sKkYx0ji4++yuMgAmidh7qOPSa0iwuif0JCYGPaBtas44j2AnlR4HsI23U4PAjFqLY/4K/OhLoj9li89j43OIJFLeTv7mm/2WczY4ZHOaasrpjlQ6Mzj5RZI0g0tTA4Pia8u53VI7TWBwcw3urTFIiZ22SAu82nyhE8OPca3CcDQBfJUKGR8khDfygqcNueFwqx9CmOBPCdcA1tkphtMeSfKRNL9bUVyJiJngArP6kQ6Jx+hVtO/wAqlz3H0XEexVqC5InONXlMb3j7rk+S8y6nKbvufsF1PXzTZX+wKw3SWlHV+q4oXNLmteXuA9gvR6VqEHJmL+QTnOMEdW6B0SRuHHNkMIcW/KD4XVemtMOf1PDG9v8ALxx6j/rXAVRj47ceEOhZ2hoAW66Aw3dmXqUjd5Xemw/QcrKUnlyuRdyP08VG5OwHhJPPOyXfukncbK0ZqCO3CCFg8hBAEOCOh7j6p7t90iNvaKKeNHnlJDCAHNpbSLopI5ooEG7TEKvekutkwA4Hc2nW+yBgB8LP9QaVJIf4jhtuZgp7B/W3/kLRIxXlRlFSVMlGTi7RwXr/AAv4x0rlwtHdIGdzWkeQvP8A0s6TE1GSKQdhBqvqvbOrdJaZqznSO9SB7tnGM0D9wvNfxM6Qh6L6xxBj5Lpos5heC9ob2kGiNlLTQcIyh4LLyqU4y8m26cyu6CMjcVuFs45Q5o28LmnTcxGPH2nnlbqCUem0H7rFzxqRpIuWkFqWPy2ocEocaUxvH5gVUJhEWlD5W7coOFbom08Ae6Qin1vJkxsGWaKMveGkgLhmqdT9b+vJkRYrxjtdsGtXoiWBrmkOaC36qpdi48LSx0LO0nghXdPmjj7jZznByXDoxXRvWcmo4bWahivxZxQJI2ct2dThbFbnivqqbUWadHC97I2NfXIFLC6hNqkp7cab5QeQnKEckriqJR65ZutZ6gkgwJJMKAzyAbAe64rn9X9bt1J8hwXNbfHaapdR6fyy3CDMsD1DuSrGRuLmH1GBu2x+ULrhnHFacbIZIOXUqMX0n1hk6ifwupYzopx54W5x5GuLiK3VbJpmP+ME0cbWvrwFLhZ6bwoZXFu4qjtCNLktoYxdtUsMNe6Yxd3BynOPzjZVGToZc2m8KFLzurN/aASqvJPymkR7BqyHM4UbKpM+QCJ4B8KfPI4E2VndVkcSBwreNWzm+DBdT5Hp4kjwbsEK6+DnTpfLNrEpFP8Aka2vHlZLqhzi9rS7axt7r0H0b0rqceg4P4XB/DtdE090mwoha+RyWDbHyZs1H1t0/BNy8eRwZiYrO6WU9rWgcrqOl4UenaVjYcY2iYAT7nyf3UDR9Cg0xvryO9fKIoyEcfQK52I2XDDj2Lns4Z8m98dBk1uUV3xshXghAfZdjgEB7boI7CCAsjDu/RPtobFRo3t2INgp9vzUSUDF1YR78HhGN9giJ2rygAu0eEO32Rt+yNAAsAcoXuKSaBG6UEAALhf+IbAEmH09qP8A4sh8RNeCLH+i7pYBpc1+NunnM+FuXkMbb8OaKcGuAHUf7OXTH8hebOUdOSgYzb8Dyt3jSd8THBcz6eyv/jMLwX7AGl0TAc0wAA1XusbUx9zNyLtWXMLq5KnNlFhU7JO0CypIm7RZ4VCjtRYulFXeyZOZDE753CvCoMzWo43OaHbjws/kau/IyOyLuIG5d4C6RxtkLNzl6vjRR2ZQAVj9e6n/AAzWuZThfIVfPi5uVEblJB4HClQ9MGdrRkjYDzvuuyjCPY0jM6lrORl4nc0uYPYeVXaPl5MwkFn5TvYoUuoxdK4HoCN9E+3socvSscTZG4rmAOHFKxDPBKiLhyc+l1LOZI8Y4723QFJema7mY8jhK4BgsmwtnpvTkGP3Oyvmcb2PhNah0zgyd/puaCRsFJZYPhoHB0NadrsOXGQ/5HA1avI5oHt7y4E8LHO6az4zHJCT6TT3EA8qBHn5uNmuhkBDWHklQljjJ+0cbXB1PGewtHY7dTe/jfjlYTD6g9Fod220miVo8bUGzAyd93xRVSeNo6p2Wz5B2ncKpyZxZAIThntpNqum3f3HekRiDIuS4ht15Wd1SXawd1d5stAD/RZnV3F0LiCQ7hXMS5OckYPVIZNR6hwsOIWZ52R172QF7gw4m42BDjAGomNYP0FLyJ0BiDVPjBoML2B7WTGVwI/ytLv9l7CLTzwtefEUjEzO8jCHgI2n90kXaWKtcjmDu3Q3Q7aPKPlAggEEdEDZBAiDEC1tbWpTN9qRBoATjQALQSFVXCHOyK72CM34QIFUEANkKNo0AFVbe6FeyUgUAIP5uFTdXad/FuitY03/AM+JI0fftNf3pXhHCJzQ5haeCmnXIHj/AKVnY7T4mn/uEUR9l0TSnkxhr6sLC6ngu0D4g61p/Z6cUc5fEBx2uNj/AFWj0/NDmseH0qWsh7rNfDLdFGwNFgpVerZj8eFoa7wnIZnntHdf1UTV4vViBG9DdZsY0+S0nZnWslzXvnkcQ136KLLrWmaZIYXyhsgG9lXWPhvyGOjjBBpYbX+g8yXKdlukcb8K7BQbqToi0/BoIOutNDQA8OI2vwrPG6zjmeO6YAXwFj9O6AifHG6nEn8y2OF0NhxwgdhLq3NpzjhXk6wvyaFnUeH6LX+sLPuoc/U0NlsbwXHymndGwOiprpG/YqO3oyNpsyyX43VZLGdqQibqKOOg9xs+VWzdR473OcHmgK3Kth0lB6lSOe4ge6hy9GYbe4lrnD7rtF4kLsyOZ1llY8hGPkks4om9lRZPU0bnmWR9OdzutFqHRrbc6KItaPPusvqnS8bQGwsLzXj3Whi9FlTL6qX+OhzC19moTMw45yPoCumaLIMXFjY6VzzvdrF9I/D0xzjOnBa7kNtdAn0ss9L07FHelw1E4N7YkMSnt9/ZaY8pe3YWAmslzgDXKdiZ6LDW2yizTEPqgqFcljwV8pc4Ovws7q8zRBJ7rSPlB7xSyPUA7InvYdgN1bwr3I5Nl98B9LOZ8RNQ1YttmDjFrSfDnmv9AV6dJ23XF/8AD9pgx+kdR1Y/mzskgGv6W7f62uzA8k8LSyfKjDbuTYo1X1SRY4RE7IA7UdiuYhwGxuN0Z24SBYSib8IAO74QRA0ggiIAHdfKURYobhEARxsjHH3QMDdilA7lFRvhKAoosQaA5R0hSAB52RFHuggLBdlF9kZrwh4QB50+PGnSaT1Fp/UMTf5GY30ZaH9Q4/t/osdpGS5rGW75T81r0V8SukG9adDZemMpuZH/ADsZx8SDgfY8fqvJOn6nkwh2JI0slY4se13LSDS6TgskP6LenyV7WdUx9Sa4gNdZCuDc+O3e7C5nj6i1jo5L+UcrZaTq8U0JIeCA2wsrJha5NFSNJp0cccex38qZNDHOyngb+VSYWcyQO7DXurRmSztAu1ScXus77uBuOEY5obtVniSt24pVGTltbYItVOTrBivssHzSbi5Am0dCa6Ms2oqPPJE0jiwuX53WOq4WM448JkDfflZ4/E3UXECTBIfdLtHSZJLgHNR7O098ff3GuFDnmjiYS5wAXG3/ABG1dziG44CfHVudmQ3K1wcR7Lp+lNdgsq8G+1GeKaJwYQFn8TBjOR3khwJ3JVZp+bk5D2tlBc1314WmwomQucHkE8hDThwPkvYGMhhBHskmZriNqCrHZnYHm+TtZVM7WWx6g5jXdzPIJUI43Lkg2a2dzZGgjyOVUTdweG1YG9pUWfHJiWd1Wz6mx1htindtoUXYKQuV/bfi1i+pch34X0ILkkmd2gfUmqV3qeqNZjd7BsDSoui8WTqb4saJiFx9CKf15AfIZ81f2Wjp8fO5lXNOouj1D0JoB6c6G0vS3/8AdjiDpNv6juVp/CHABSTt9l2bt2ZKFX7pOx8ItyfolAJDD5pGPsjbXCMg2gQn7II0ECDFBGBW5SWn3SwbSAPZAblDwgOUAKQQQTEBJ8pSBQASCCHNFA0E78pC8TdW6NLonXuuiNrmwOy5HNLvqb/3Xts1XC879dadHn9WavjvHb3v7mkDzQ3TWTYd8MbkzjMOTEYHMfIA7xam4WpBsnohz2ta3chUeoablYOc+LIa4U47+4TDJvIkLRdbLu4KceCypuLpnUtK1eOOHtBp3AtWcmtiFw73AH2K5zp2WJAWsBd2blzld4j5c5r5LBrklUJ4UmWoyvk2+NmnLqZ8ZaPYq6h0rHyX+sWbELMdPPZK1kWQNxsQSujYccLYwGu29lm5rg+DsnZQSdNwSdzTDYIoqizujMRzgWY4BH0XTWtBG1BRJoyX7UuUc0o9Ejm//ReP2AuhBv6JyHpiKEn+WDQ9lvfT2Nit0To2CrFkrp+xNjMR/Dfw/wD24a+oCcb2siuRtk7ALU5EcLmlo5WdzSyF5424tSU3LsT6M7qeRPG1wc35Q0uF+FlxLAT6jZC1797J2/RW3UOr5ILmxMBB2CyGRPjjDb3d3e1xfQPutPFD28nCUqNRj69K3EdHFKA4O+YHlMM1Jz+4SPptklZaLNjY/wBQcPZZKS/JP4d3Y8dxP7hd/RTOXqJE/UdSkyScWEdxBoWeV0L4P6U/C+IWnSPj+dzJC4+3yFYnp/SHPmGXkD5QAQuq/DZ4b8RsRp3HpSAf/wAUpTSeyJCSuDbO/E+6Ry6wlEDnlJryNlFGaAbIxzwi+6Fm+ExixRS7obpHnbYJZ4CCIlBGBdoIAS12yWDaZAKdaEgFJQCIe6O0wDQQQQICCJBAAKHhDfwgarc8IGMZUwjiLQac4LiXW2P+C6piyXEu9dt7+4XYZXF8znnceAVz34j6f62mwZzW26F9foVUySsu6fiRynq/RG6tg/iIGgTMHjyuLujc2aSORjhXK9G4B7mEPIIqqItcv656dkgy36jgRUx272tC76TNT9OR3z47VoyGJnPgibCC5sbuQPK02iNdI2R8k4DQO4X5XPRkhuQTKXGtqtaLT9TibAyFjnNB5V7LjtFbDlXTNtg5ssE5kefTaX0HE8rZaNrpfqPol9wjl/uVzaKSDIyBE6QuDPN8q7xMqLu7QBUe4q91n5sakXos7LDqMYiv1AU3JqrDJ3B9ALlWna/OJJoi/vb48Uky6892SIw/0wfAWf8AquzqpHUnaqH21u6W7Ld6HqnYrmuN1CyGUepL3hx3rwFdf9RQPxi69ilLA4huLXM1eOBodMfO1DlY/U9WdmzN7ZQxhBNeShquqCSB0rmAtDbbsssM2HLx3GSfskOwocK5iw8WQc6Y3k5MDMokzWB+UErMZuQ9+TQPyOcSE5qUv/zomNfY8uIVRkThuU9sbrDXbErVxY6KGfMTBlfKAW9oHj3VxoulS5+WC0EsBsk8KjwsPJzZ2tjaTZ3I8Lq+kYQxMePHjYW7CyR5Uc+RQVLsMEXLlk8xtxcZkQr5R48q8+HDg74j4AB3LZP/AOhVHm329o/p5TfTE+TF1lgPwm3MJL/TyqGLuy7krYz1RSIi1FwMz8ZD3OFSN2cFLI22XdOzIE/qgNihwj88IEKQ2tBBAgE2UEAB5QTADB5S6CJoIagNuSogGjRDlH5TAMIWgEKQIJGgggYExkyU30xy5PHYWVAkka+cu9tgoTdIlFWxJACoOq8U5XTeW0DcMLgr0v5ATGSGyYkjHiw5pBVSRahaaZwfBk7baSpWXjR5cL2PZYcKtIzIxBqk7GCi15FKXA4v5XBunaNLs4F1j0tNp2py5MDSYS66CyPrzwOBaT3L0prWkRZsEocy79wuOa70dK3Lc/G8eFtabUqS2yMvUaaTe/GU2nau1rvnd8wFcrQQ6t6WOXxyAOPyrGT6Xk4jwJWHb24UeSaQEguNfdW3jjLorR1E8aqSOhx6yWQ8Br65HlQP4oY3ve9473c0VjTmydgBvYUFHdkSdpI5vyorAOWtXg3MOrQ+r2EkACy4K0/ir/w7A2UMa8ndcyjnl77BUt2dNI1rCSK4pJ6dMcdcjd5utTDF7PWJbXH1Wbj1R/e8yURwKVUMieT5LJ8KdhaLm5L7EUgs80prHGC5IPNPK/Yhh80z5w7uNK007RMjUMlh7CA47mlp9N6QbEWSPJkcRZ24W5wdJZiwt+UBw8Vwq+XUxiqiW8elfeRlPpegw4DGNZGSf6j7rWMiDYR6YohBkYuqUhraZsKrblZUpuTtl9JJUiqyw4RvNX7LU/CzRHZGo5GrTx/JGOxhI8+VQ5EXeO2rc7YLs3SWlM0jpzGxgPmLe533KalSOeWXFE+YvwMtmXCCWXT2jyFfskZLG17D3NcLBVc+NsrCx3BTWFL+Bk/CSu/lPPyH2XeDM6SLYgnhGbbRKVY2Q2cDYXUgFzwi2GyG4HGyBQRBsggBsggBZFo63R2heyQrCR8IIiUDDBQVflavg4RqfIaHf5RuT+izuodXva708PHq+HO3P7Iboai30bB0jI29z3BoHklU+Z1PpGJbfxHryD+iIdx/4WJnnz9ReZMmZ5B4Djt+yZOI0C6I9gPdcvVidViZqsLqTM1bUDjw4Ygxmi3vc7udXttwrZx22Cp9Fw24ODdfzJN3KxMlrjKe5k4wocB90KttHhM9/sEtrzS4uR1o4x1g1uB1k5gPaMlvcPuEnFNNvkFL+M8L8N2ma0wU2GYNefoVF0uduRjRyNILXC7ROPsUkXccrVMsZD/LNC75Wd1DAZI9z6A7vFWtM6P5KaFDmgt24C5RlR0owuZoeLkNIOODfO3Kx2o9FxyOcYGFt8Lsn4Rt7gKM7To3EkMoq3j1UonKeKE1Ukees3pvUcaQgR9wHsq9+k5kZ+eBwXoyTQoZSXOiFuVdP0tA935BXsr0df8AZSl+Pxt8M4RHpGS4Dtj5VzgdLZE7y6T5W14XWf8ApnHjDe2AXanwaNCw7N/sieu44HDQY1y+TD6R0pDA6P1YQ/e7I5C2EenRBjBGwNaPFcK4jwQyj2ixwnvR+U22gqE87m7bLsYRhxFUV8WI2MfK2yFMhx3OaL5KVDE976A2BVhHF27Lk5k6InYGmuUdfLVKQY6eQEHMoWN/0UNwqD0PTDqXUOPAWksYfVffsF2eKPtia0DhY/onTWw48me8XJLs0/RbUAUukXZTyu2GDSanx2ZEVO/dOA7pV0K2XZMrtFM/O1XTDRAyYW/5uf3VhjdQ4Mzg2Tvgf/7jb9wnJYhJGWkblV0eFGWOjcwWDzW9LupnNxNKySOVndG8Ob7g2iKzjcKeA92LM6P6XspkOflRCsqP1B/mbypqSZBotrQTEeZjSN7hIB9HbFBMiS0RcBuSqHO6mw8Zzo8e8mQeW/lH6rN5mt5uaS0ucWn+iPYLnKaj2NRbNbma/g4vc0SCaQf0MN7/AFPhZfM6kzMhxiLxC12wbFuf3VX+Gne23OEYJ3a1TcfCijALW7+5Veef6LEcP2QTizTyd7rY0/uf1U2LEjhZdAn3KkuaQLJ/RN91t7Sq0sjl2WIwSQhwbVo8SMZOWIyPlbuVHncWtLgOFbaXCYcQPePnk+YoXCsbLUODaaPARXeyYJt1od29WixUPH6FJY8ueQOAmDL3HsHJ9lMgiaxtk0kBiviZox1roTUMcC5Gxl7fuN1yP4eah+M0Jkbz/MhPY4FejM6Bs2JJG8W17SD+q8zaDp0vTXxB1fRJHHsMhlj9i0m1Zx+7FKH/AGdIOmjp7WFzeE3JHY4o+6lY4/lg8p10V+N1nXyXkuCnkx32E7FCQRbbU90dDYbo2MJFgJ7iNDBhJAFbe9IOw20DXKsI2bb+UoxEnejuobiaRSvxRdFoKZkjcw/I0UrySK1GdjtJtSUrE0ipEZAJKJzQTR49laPh8BoSDiA78FdNxAhxwVVNFKQI+07hSooCBulSQvcbDv0Sch0V7orfYT0eI7JkZCwbucAn3RfIByrvprD9bPdM4fLGP7ppkJOlZq9PxW4eJHAwU1opTgT4TZFGvolt2CsRKEgy29/ZKBCKzdI/NUuiObHKsqJIPTyb/pcFLAI2CZyoy+Em927rojmwA2UsMB5CKIAsa4eQnVKwoZOO29mhBPigNwgpbmKjnsEMQr1D317nZSu6IH5aAVG3N8E0nG5ZHlUXb7LSpdF4Cywb2T7ZowKWfGZe3cgc2jyue0lZeyzMI2KYdIw+VTnOt3P90w/M5op7Qst2OZkZscQNi7P2V+6aNoDQaWK0zJP4qWZx/KO0Ke/UCT+ZToVmidksG1pv8S0uIB3WcGeXO5U2DIA+dx2RtE3RoYnwY0D8meRrGMHcXONABee/iL8XtTydXfgdMZhxsGI7zN/NIf8AhSPif8RHTNd0/pktR/8A3yNPI/yrieRJ3yHwDwtPS6dfKSK88jXR7C6A6mf1H0Vh5mW7uyOztkPuRsVhviJp7cPrTStdib8kv8iUj+yznwd1vJxoZNMeSILLm2uk9Twt1PRJYyLcynt+4VWcfTytIsQlatjOC9j4W7qeSytlltNzP5DN96Vic0kgArKnFqTNFS4LNxa60TXNaeVW/iT5O33SfxQAu90UPcXLXsBuwUszR34CoxmivzJH42jZKNoby/8AXjuympJoj7bqidnezqTP40jkqSjQt1l65wsFrgR5BQD28+6pm5t+aTjc35uVKiDkXDXs4cje+MCwVUPzAByoeTqYjiLiaAF8oUWxuVIt586CCJznPAI438rZ9OdmPpcb3bSSfM5cAbrUuv8AV2NpWM7uia4Pkr2BXc4MgRY7WNPAAVr0XFIq5Ml8GoE7C6yUZnYDzss0M8A7u3+6Uc8k8qaRWbNKJ47u0560ZHO6zDc+gKcnRqAH9SkkQbNH6rfdK9VrmkHdZ0ahtygM/b8y6pELLuGdscjozx4T4njvlZmTNIId3eU6M/aw5NILNJ68aCzn47/2QXRIhZz1+0jgNhaIOdX5j+6CCpMtB9zvcou51/mP7oIKLGNdzu4/Mf3TbnOo/Mf3QQSGx7TXO/DvNm+5PPc6z8x/dBBSECEkv3JUHq7Ing6WzJIJ5InhmzmOLSP2QQUo9kJHnHIe98ne9xc48kmyU3QMjLHlBBb+PpFeR1f4fANdbQAfcLq1kxUSSK8oILG1H+4yxDoxsZLcyZrTQDzQCmNc7/Mf3QQWdP5GhH4iy53byU09zqO5QQUUA21zrPzH90hznXdlBBSQxHc6/wAx/dCztuUEEwCc51fmP7oy51j5j+6CCaIsN73b/Mf3Wf1+WVmDL2SOb8vg0gguuPsiyt+EID9X1SZ4DpG0A87kfquyZMkjcKZzXuBDDRBQQV3L8yg+jneDqepP1mGN+oZLmE7tMriP9V0fHe8sFuJ48oIKEu0Iea51/mP7pZc7/Mf3QQQhMcDnf5j+6Ac7/Mf3QQXREAi5xafmP7ow53aPmP7oIKSExXc7/Mf3QQQUiJ//2Q==",
      "tribute_en": "Martyred defending agricultural workers rights and opposing communal aggression in coastal Karnataka.",
      "tribute_kn": "ಕರಾವಳಿಯಲ್ಲಿ ಕೂಲಿ ಕಾರ್ಮಿಕರ ಹಕ್ಕುಗಳಿಗಾಗಿ ಹಾಗೂ ಕೋಮುವಾದಿ ಶಕ್ತಿಗಳ ವಿರುದ್ಧ ಹೋರಾಡಿ ಹುತಾತ್ಮರಾದ ಧೀರ ಒಡನಾಡಿ."
    },
    {
      "id": "m2",
      "name_en": "Comrade.Bhaskara Kumble",
      "name_kn": "ಕಾಂ. ಭಾಸ್ಕರ ಕುಂಬಳೆ",
      "date": "1997",
      "district": "Karnataka State",
      "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAUEBAQEAwUEBAQGBQUGCA0ICAcHCBALDAkNExAUExIQEhIUFx0ZFBYcFhISGiMaHB4fISEhFBkkJyQgJh0gISD/2wBDAQUGBggHCA8ICA8gFRIVICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAOEArIDASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAAAwIEBQYAAQcICf/EAE0QAAIBAwMCBQMCBAQCBwYBDQECAwAEEQUSITFBBhMiUWEHMnEUgQgjQpEVUqHTM7EWJGKDk8HSJUNyc7PRFxjD4TVTY5KjVYKy8PH/xAAbAQACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EACkRAAICAgMAAgICAwEBAQEAAAABAhEDIQQSMRNBBSIyURQjYXFCM1L/2gAMAwEAAhEDEQA/AOay/RXwkqkpqWqnHvLH/wCim9j9GvDNzeeTLqGpqueqyR5//wAK67HoN3LkkHFCTR7y2vFIQ4z1qOkjBGeSTIbTv4ZfAN5AHfWteDEZ4mhx/wDSqSi/hS8AyHA1vxB/40P+1XTtAjlSJA/Bq72UY8vnqKrUZe2dBNVRwKT+Ez6fIM/474h/8eD/AGqaP/Ct4AU4/wAb8Qf+ND/tV6NusbOuKhbtiqkg00bcqJKkrOI2/wDCl9PZThtc8Qj/AL6D/aqRT+EP6dOmf8f8Rf8Ajwf7NdYtbgqwycVYbOcuAM1u+JJeGT5XZwJ/4Rfp6pwNd8Rf+PB/s1tP4Rfp23XXvEf/AI8H+zXo0x5GTTRm8psVXKCrRbGe9nApP4QvpwiZHiDxGT/8+D/Zpp/+SX9Pcn/274hx/wDPg/2q9CSTFhimNzN5MRYmuVkySi6TOjDHFq2jgc38Kn04iGTr3iH/AMeD/aqHvf4a/p3bISmua8TjvND/ALVdX17xA0BYBjVPuNbluIyNx5pFkyP7Kskscfo5RefRLwdBKyxanqzAdN0sX+3TZfov4WYf/rHVP/Ej/wDRXRZiWkywzWl7GtCk/wCznvI70c/T6J+FWPOo6rj4kj/9FO4/oR4SkIH+J6tz/wDvY/8Abq+REg8VKWjHzOadSbB3f9lCi/h38HyLuOraz/4sX+3SJv4efB8fTVdZP/exf7ddltW9A/FaueatQ7lKvTj9n/Dr4PuWw2q6yPxLF/t1Lj+GLwSVDf4zrgH/AM2H/brq+lrg8ip0viPjgU6SApS9OFL/AAx+Bi2G1rXP2mh/2qk7P+FPwDckbtb8QD8TQ/7VdUaVvNxnvVs0UcAmo6SGjJtnGE/g8+nTDnX/ABH/AOPB/s1kn8H305Tpr3iQ/wDfwf7NelIlxFWnGR0rPJv6NkUro81r/B99OSuW1/xJ/wCPB/s0F/4RvpypONe8R/8Ajwf7Vej5m2jbUfKTWeWWS+zRHFF+nnC4/hT8AREBNb8QH8zw/wC1Qj/Cv4AUDdruv5PYTQ/7VegLgHzs+3OKiNR1iy021drmVUbqSarjmn/Y8scF9HFW/hZ+nygltc18fmeH/aqNuv4a/p7ApKeItZOOxmh/26lPGH1isbLzbfTpHknHQ4yK5FqP1c8U6ghjEqRxA4IQYyKvi8kil/GvosV79EfAVqf/ANe6mMdmuIT/AMo6CfpP9J7eJWvPEmsAkc+XdQcft5dcwu9f1S6uGdpH55OD0ps+oh48srbz3JrQoTr0qcofSOwWX0i+jl+SLbxdq5YdY2nhDf8A06k4fof9Hprn9M3ijXYpfZ54P9quDR3xikyJWDdQQafprt5JIDHeOsmOMtU+Of8AYynj+0d1j/h++k7ztCPFesk4yCJ4SP8A6VY38PH012b4fEGuXAU+sRzw5X9vKriEHiXVYHJW4ff+afReOtet5jcQ3jh9u04OM/ml6ZP7D3xf0dLvfoh9MICUg8S6w0wH/DeaEN/9Oi6T/D54QvnzcX+txRnowmi/265XF411ORprmfE8jDGX5I/FPbP6jeKrVfNi1J0A6J2qucMtfqwxnhvaOzy/wzfT63iEk+t66Fx2nhP/AOapnP8Aw3+AktzMms62i4zmSeH/AGq5an1Z8ZmQTi+Z2U8BulNtS+qfi3VFKXN6yKRghOKoxw5PZdnosnPA4/qi5XH0V8DwXJh/xjVHx0Imi5//AJdND9HPCRm2R3+qH/vI/wD0VSE8a6wkBjSb1Hu3WmyeM/ECDZ/ibqDzxXoYzwKKTicCePkOT6y0dDj+j/gZ5vJbVtUR/maP/wBFSSfRD6fsh/8Abuqsw6hZoj/+brkf/SHUri6JN45Y/wBRaix+J9VtJiLe9deefVSuWJ+RIsedezOlT/RzwFDJ5TazqqyD+gzRZ/8Ap0m0+jngS7uDEusaopHUGaLP/wBOuaXfiDUpJ1nN+8kvUnPSjW2vatLOZY7qQS/BqqfRrSHjDN9yOtt9BfBEYDSaprQj/wA3mxf7dKH0H+n7ybIda1mTjOfOi/265gfG3iQwGJ9WddnGxj1pdp461mHBFxkryeetZ0q9Gccv0zoU/wBDPBMU6xDVNYy32gyxc/8A8uj230G8Dyvtk1fWAfiaL/brnd19RtcnmEyziJh0I7Ue3+pmsW/l+ZK0ijOeetaYfHW0VuOf6kdGP8Pvgc58vV9Zb/vov9ulr/Dx4IK5bWNZX/vov9uufQfVDWlnbfIxVvtGelTdv9XtRiQK0IYr3J61b/p/oWuR/ZbI/wCHLwTKAV1bWyD/APvYv9upWx/hf8BXXD63ry464mhH/wCaqN8P/V+3upNuoH9Ow6Y6Gul6L41sL25jDXnkhudjYBNZc3X/AOUacPf/AOypS/wqeAUTcuua+f8Av4P9qoiT+GfwSkm0avrhH/zof9uu+S6xbTW+63nEijrjmol7pWl3/wBJ6GrOLBT/AJInIyOPhy6x/hY+nl1gSa54gU/9meD/AGqmo/4QPpvIMjxB4j/8eD/ZrplpdbSrpyBVtsLoOnWreTx1FXEXj5nJ1I88X38JXgC2Vmj1zxC2PeaD/aqEH8MXgcybTrGuAf8Azof9qvVF4okhbHORVQkj8u4x81wMmScZVZ2ccISW0catv4Ufp/MBv1zxAM+00P8AtUef+Ez6ewxbxrviIn5ng/2q7xYjG0miajKPIP4p45JPVlcoJHly/wD4bvA9qx8vV9bbH+aaH/bqPj/h78Hu3Op6xj4li/267lqrbi2Ouai4mwa9DgwwcLkrOFmzTUqizlTfw5+DAONV1r/xYv8AboP/AOTx4PBwdU1n/wAWL/brtsbBlpnOSmTmtmPi429xMk+VkX/0cab+HzweDganrGf/AJsX+3WL/D34PLYOqauP+9j/ANuuqvId2c1pJTv61r/wsH/8mX/Ozf8A9HOoP4cvAzkCTWNbH4li/wBupmz/AIXfp5cnDa54gH/wzwf7VXaOZl6mpnSb6RLgKW61kz8HGo3FG3BzZuSUikp/CH9OpFyuv+I//Hg/2a1J/CJ9PIxn/HvER/7+D/Zr0Dp1whhUk9qy/mwh2d687N9HR3oLttHnF/4Ufp4oP/t3xD+88H+1TZv4Wfp+M7db1/8A8aH/AGq71Jvbk00fzEJFZJzk/wCLNcMcVpo4Y38LXgXHo1rXT+Zof9qtxfwseBmHr1rXh+Jof9qu826sxGRRbgeVETjAqY/lfrFzPHBaR54vf4ZPANqpK63rx/M0P+1VTvvoZ4Mt5SsWqau2PeWL/brv2v34WJlRjkVQJpTJKxJzk10FDWzzuXlS7VF0cuk+jHhlftv9TI/+ZH/6KA30d8OAj/r2pY/+ZH/6K65DAZQRjtQbi1KqTjpQuPgjzZquzlcf0d8MO4U3+pD/ALyP/wBFGk+i/hhVJGpan/4kf/oq7+Ztmw3HNGaYNxupuqFXJyV6cyb6R+HlbH67UP8A+NP/AE06i+jvhl49zahqQPxJH/6KvbrkgA1v1ohqOKCuRlf2Uf8A/Brwt/8A1LU//Ej/APRWVdP1Evsayq+pZ/kZP7PSFpocPkcoOaBc6DFnIjH9qsNpKrQKAaXMpKcdaojbZ1mlFFctrMRSAAVOwARIWNNY48zkk8ZpxdN5cJxXR6rSM1/ZHX1+FJFRc9x5owDmoPWtReO7EeepoljP5rDJyK1w49LsY5cht9SSjDs4I4qz6Wu0KWqHt0QEZPFTFo6jAHNSXmgx9LAu0oKj7qLmn1uCyjPSsuI8pmsU3RsgraIJhtPJqF1m6CQtg9KnJwd2BVT15JDC4UVxMm5HWjKoHNdcuvPnZSelQYJ6dqe6hDKt028Hk01IIYCtUYrqcicrkKHrOMUZbWVui0eziDuBirZY6cjoAVqqU+vo+PE5vRU4rObONtP4LeVHG5at8eloP6RRxpQLZCjNLDOrLnxZIhrVWWMEiiPHuYdzVlt9GLrjFPYPD+HyV5rYpL0r+N+EFZQsoHGKkJEYRjNSz6b5WQFxio+4Qj01chWqVDCJGknC4q66TbsiLxVd062ZpwTV1sodsYJ7Us3Q2KP2SUfCAZpMjACklmBwozTe4ebgCP8Aeskp6N0Y7ECJnlMjHjsKjNXvrWwj3SMA2M4ph4g8V2Og2Ust3MkRjXPqavIv1K+rureINTdNNvZLe0QFfQcb6zpPI6iXuXRWde8ZfWXRtFDxwSGe5HG1e1cQ8U/V6+1xP01pH5UZ5fd1Ncvmunud0k87M7ckuetMPNTcSsh9PtWvHgUfTLPM5EjLema6aQDcG65oJnjZzsK47imMZhkctJK6Z/yjrQGiXeRG+VB69K1JUUEu99Ziy8kWuJd2fMB6j2pjJdEv/LiC47HvQdhC7lwcUgtIX3Oob8UbYouSZif5ihD+K0EllGUIYj2PNObeKOVCZHDJ7E8g01eERTnZlGHT5pqZBzEW8siYOrDocda04ZlxEd57ih/qrhcYw+Oea3PI1625U8h8f09DUshsqyqFZ9nuCaCblozhXJxQmWaMYk9R96Ce+5eaFsI8F1KTuJwPilLOznB796Z8Y46UPJ96F0RolFiDBiZQoHeh+SvUSZPyKZKxPc0fexADbj2pk0wUGFs2C7yBc96KocDKsHHcilxSwKgEqH4GaJvtyxCxlcjnBpmAZuiuPRIH+O9bie4t5AybkPan0TW1sm+OINnu1BkvG3lmiV170Ul/ZLG0ly0jlHO4nkk1kc0eSgBDj2pf62zeAx/pArFs7s0OSa0VB5IdZO+eaV0yB4nty4MzkL3GKV5sBLCJC47cU0ST0j1Bj+KXhpsRxEZNG9aIPEmjjjJeIk9uKF56Pg7wvwe1JKXEAwQxPt1FFhn3o63NopJ6OvGP2pkgWw6RwB1d7jK9eKlE1ieORdskhVRtBzzUII4pEJQFm9gOlB8+SFii7vwRQdfYToWj+Odd0yVltbudt3OHYkV1Pwn9VtKXyoNbuHS4Y4LdQK82LJLuDuSPwaKsuecjPzVmOThtFWSCn6e8NP17S9Qg83T9Qhnj+GGRVj0a+eSUICNo+eteA9J17VdKl8y1vJYQ3XBODXWvC/1ZvbJIUvQxJ484MSP7Vs+aM41IzLC4yuJ7QaRPJAYYJGaq95gXOQBzVI0f6l6NqUEca6uIZdvKyc5qWTxBBcTIhlikJ6NG+c15zlqnZ2+PK1st9o3A54ol7HviwO9NdMHmAHdnPtUy8QMeDWfDtosy+FDvNNLFiRxUK9mY2Jx0q+XaIMjuKgbm3ViSBXreLtUzzPK07RAR7wcEUK4U45qTeHac4zTG6IC4zzXXgkjkTdkW69BSfLApwFycmtmPirigAASKe2zFXVh6SKEkR3cCj+UwHTFJNWi6Dpls0/ViUVc9Kmv1LTL1qh2jFW2k1a9Nk3kA81478licXaPX8DKpRpkrHFkeqsazDtnFPYoCyg4p7HABjpXIxRk3bOlkmkiLitNpztxUXrEhjiPOKtE4CxtVA8RXARWBaupCkjjciTaKBrd0WnYbsjNVwN/MznjNSOoSGWVyPfFRgQ5zWjRxGrdk5YHcBuFOLyEfpyVxmo+xYqcHNSn/ABIzmudNNTN0FcClXsBEhIGKy2gdsZyamL213MQOtOLGyOFBFb4NONmGap0R4sGOCBTe4gZcjFXVNNJjztqF1W08pScYql5E3RpjhddmVjafasoxQ561lNsFHoTS79WjA3c1ZUxJH17Vz2wRo5wAeKu+nzAIA7dqy8eSaPUcnF08NSp5cmaZ31wPIbntTvUpkVCykcVVrq/U7l4xXbx4+2zhZcijoqesO0t0SOoNOtMfaBk00vJFadnHTNaimCAEGui1UUjmJ/tZbVucgAMKsGlneFzzVFtZGmlVVNX3RoiEUn2rLkSjE04pdpFotkxGKRctkEDtSkbbHzUdf3scKEk4rj5mdjGlQ1mMaAljVU1q7hww3Cs1fWQkLkNXNNW1iaV22sRzVOLjue2DNyY411F6gqyXJIwcmmr2W7DKtM7a5aaZVd85NXKytUkiUYzUy43jRmxv5dohbK0IkHFW3T1KgVkOmkPwmBUzbWQXtiubll2Olx49RsCQ3SntsQZBSZbbDZA4rcK7GBrGn1Z0n+xarCCJlHFTCwRqM4H9qgtMnJwKnmkxAD7108U7RjyRpkVfhFBwBVYnQlyRUzqdydxGajYsSuB7mt0DDLbod6VbnIZjVpGIrfIBPHSmNjbBI1bAwKc3uqWOn2jz3UwjjUck1XkkXY4mJclRuZNp+TXMPqj9Uk8Jaayxj+e/APtVZ8efXLw9aQz2um3DvOoIUp0z815I8SeI9X8RX0t1qmovLuYkKW4H7VQoObovc1EfeJfH+u67qlxcXd/JLHISApbjFVCS6klbjvSoYUlm2mUD5JrcqGNjEu0Y/qrZGCiqRmlJydsbmUKwR8S/BFIeSJ/siWP4HSl/o5n5DKD706s4DGf5lu0p/HFMKNoFQ8sm4ewp68enmHaYJI3PcHinDwnGFtjvPIOeBTCYXTseBxxxToViGto1t2eOdeD9rHk0iNrbaDLy/wAHitCyZ2y7AfmlIjrkLErJ3wOalEsPFJaq2JcbCeo7UqQ6a135fmkqej9qjpIyrelmC/IoTDDEqc0zdEoczWw8xvJkDY9jSEim3cDp2oaFsAhPLz/V2pzJIlu4CzeY47jpQ0wGtl1u2rG+T260toAkH80EO3bFDfUL53EySYPbFJF5cs5Mqbye5qaJsIbe28vJLBqEI4QpYRs+P7UpbpgxLLkDtToODDvI8sfI61GkSxgsse8kQhaJHPNghFGCe9bEynIMaEHuKUixbSGcID8UAiGfL/zEUmnBsS0S3MUq9cbQeaAVWNQUj8znqe9KeeVsZjVAOwFNr7BsdwWbNw7JGBzgnrSJ7e6VwNyBT0A5pm8rtjnpRIxcE+iT0/PaoqIF/Trj1oqnuwoMlpDktHOCPY8VtpFBwXZyKG7K55OB8UdC2zQt0C/8cZPTmiLAVw+9SAexoLLARkKxIpADDATPNLpDbHbGZ2/lS8f5a1/NZNjoQQeuetKilIHqiBx1pxDJYZYzeYcjgKehpvSDdJWjUKq7G/zUdsStsnjKbh6ZBzzWp59zKFUBB0BpUFyyyCSRFAbjnoKJBq0hhYhxuPuRwaTJMhG+A7SOqt3qRvVijXLASI3R1HSo2W0dSrowdGGRig7XgNC4L2beBJJj2+Ke2+oXNsWIcsh68VDkAEgsQfY04ikO3aX49velTYaLDDqM8JSSzvWZPuCn+k+1WjSPHWo21xA00hUI2fMTqB7VzmG4e2m3xjIPUGnbyCQmSPIz1X2pZwU1saMnHaPdn048YW2v6eihx5yAFsHqPeunyOrQkr2FfPjwF4r1TQ9etryyuCiwt6kJ4K9wa9i+HPHdnrlipZhDcADeu7IP4rnxxuE6NE59o2S+pXO1yAeaj1m3dTmtahMjSEq2TTSKYDIJ5r13HS6nmM8m5m7hxz2qLm2sOxNGv7kKDioVLgvLtya6EUYJMfKme1GWLPOKy3QuelSkVsGBNM3QiVjSGDB6UuWNVQ09ZRHUTqFwFQ89qpnKjRGIzmvFgfjqDU/ouqJIyAEZzXPb+8BJAPNb0PUpYb5MscE4rBnwLNGy/DyXilR6G0+RZIh81IbRj2queHp/MgjJOc1Z2Ho6V5+WNQdHolNzVjC45jf8VzHxOjHzD0xXTp1/lNXOvE6/ypKRSKsyuLOW3DHcQeppuMJyeprd0+J3x703BYmtS8OI3sk7aRQwJNTMLRkYz2qroXU5qUs5mLAfNZZws0Y50tkobQO+QKltP0xndTtyPai6XZm4ZSRVys9OEaD0gVXLL0VGnFx/klbIxdOUW+CuKp/iG3VUYYrqMkQWFhgdKomv227zOM1kxZG5HSzYusNHNDCcngVlShgwSM1ldGzj9TqOVgi3+1M5PEi24Pr/ANaBrFwYYWUGueag9zJKdmcZqj8Zic5b8PU/kcqhjZ0aTxF+og4fOaiprxmJ+aq9q88cS78gVMxSq6884r20cUYrR4GeWUnsRNKFPI60hpBtBU0q4AYjAoLRjbjNRpWRNlh0M75lrqGlKBGtco0SQRzAdK6fo1wXUewrn8pUjdxXsnLqQRQEj81zjxHrXlkqWxV71OXbbEn2rj/iMmS6I9jXKUVJnRyzcY6IK+1SW4YqG4qHnyVJNEn3RueKZyzHZg1tjClo5cp29jaOTybkP05roOgX6ThQSM1zOeTnP+lSmgam9tdBS3Garz4e8aL+Pm6S/wCHe7S2WSIEU9/ThBjFQvh7UlmgXLZNWckSKCK8zlxuL2elxyUloip4fimLRgN1qcmjyKiZ02uawy9NkNkjpvBUVOSviDr2qC04EsDUzNzCcjmt3H2jPm9KxqUm6Y4NCsxIZ1wpx7isvY5jOxVPSPeojVtZTQdMa6vb+G0Uc+r2rrJ9YnOf8i+T6xp+j2JudQu44UVcnJ5NeVfrJ9bZdUmk0nQf5duvDOeCaqH1G+rN/q+ota6XNvgQkCUnh/2rlMrzX9wbrUZz6urGqFBydst7KKGr3txcTMzN63PJNMZI38w7jk+9SFxcaZGStqu7A+40wuLmJuQCSewq9KisGMIQSQMUsymVs7sk00BzkY/vT+1sJ5EMuAEHcniiQdWroikyHex6DPSnd1eSgx7GXGOVXjFRDwv5m2Hk/Hel/o5iu+Vwn/xGoAcT3k0gCruVfcGmhdhwkpJ9s1gEEYKPdbs9lFKZrUHKsyj8U+hdg2DsPU2PzSFliiYDcx/BpEkqscHcR80hYgwz0HyaWwjoXe0HIDDtuoDTLIMeX6vcdqwQEnIXcBRPKJJO3bxUbsgDc7ABm4FZgE4Dc0U2zbfQyt+9BVRyCMNShFIHQ5Bp4t3KsewgBfxTRdw9J5J70l/OjGduVP70UQObhQxO3n5or3qTJskQA9jimimOQhZgU+QKWyJGceYD7cU6YosKAuNvJ70JsgZOGA7UUSSRkMQCKx5PNBk8tBn24qOgoArOWLIcAdiaWJt5xIxApccAlLOrqhUZw3Q0AghiMDnvShCPsUgo+75rTSM7Es3PxWl9AKkAg96HiPb9+D7UCC1U9hnNEVghwVII7UJRJGRJG5OO2akrfUY5IWt7y3Vix4lx6hTL/oGMvMJYmMbPzW2k3gf0t7ilTRkylAowOhHek+S6genINFoiNeZtHDndSlmTZuMZDDutYPJPpdyhz1PalSwrZuDuEynnjoaHhB7FCt/GTC43oMlW4Joe6S3kUOvmRZ9SGmsd04O4IF/+Gjm481STw2OvvT3oFD+4hjubcz6ecJ/VATytRiyhSEPpNEgLL6432N0PNAlViSJFw3v70W9ECM27AmiDAcBhSRHbMpUMwk7CkLKSoUngUTyRI5Kk57E0NEDJYysvmROHUdRnmkSrKjGR8oy8HtShBIqFhIMoeQDT+3lhMZa+AkRvTx9w+aLX9EsYJdTIhMbEDHO09a6p9N/GENhKlvfTNtk9J3H7fY5rlMkMcNwyRsWjPQkdac28wTcoBL/04PSqq3sY9s6VrRuYP0s2HZR6Jl5DDtSpbkxyH1Vyz6YeKmvNHgt7tCZbdtpc/wBa10uSBjcAD1RyDKH/AMq7vGlcTgcmLjIDcTmQYz1rdjaszBvmiS2bDAxUtpsGEGBmulF6Oc1bH9tbbYxxTs4j+KUisoFJl56ikci1IaSsWaoPUo3cECrD5O4U2ntAykmsmaWjTjjZze8t3SXkZpVpEy3MZHuKnNUs/UzAU40LSHndXK/3FDFlSg7K8mFudI6N4XdltoyfYVc/N9A5qraTZtBCo9ql5rjy1Ga8zysq7aPS4YPoh3JgxNk1zrxSyiOUZ96st1q6rGRvx+9c68S6kJFcA5JpMT7bKuRJRjRz65OblyPeiwJvIGM0B+ZCSOtPrNQXWtstI4kfR5HZBkGFzUlYaUzzqQPTmpDTrUOigdTVw0rS0XBKd65s8vV0dPFx+460XTBGikirIYljQ8Uu1t1iQdOlIvHxnmsU5Xs7WLH1VEbcv1AqrapCZEbIqxElnOaYX0OVPHaqsUqkXZYXA581l6j061lT7W3qPpHWsrpdzk/CTOu6OZImKryaq8Wilzh05HxXZLyySSP7RVdudOWIFlXBrTxn8XhfyZPM9nOdR0sQ23A5FQUUpjbac8Gug6rBviYYqi3to0c24DivT8bL2VM81ysXR2g+4vFnNDfIFbticFT3pZBLY962UjJetEppcDO6FR1rp+j27pAmRg96qHhPTzIyllOK6bb2ypEB8Yrj87MkqOtwcP2yN1OMtbH2xXLtdiCznIrrmogG3IHtXK/ES4nJrlcWXaZv5UaiUi+jXnioG4BGRVlu1znioS6jAHTkV3YRRwZ+kDN3BoSSeSwYHBo90mBkVGSSdQT0q5YkyvtR0zw14nWJFRnGRxXUNK16OdB6wa8trfPBIPLbFXrw34leNF3uQa5/K/G/Iu0Tp8b8j0/WR6GN3E6jkU2kUSE4qgWniZZCoZx/erPp+qpK4Bbr815jk8KeP1HouPy4T8ZZbKEqAe9PbiQxws2MnHSm9rIHjGw4NMdcu1sbR55pSFVcsc4xS4I0PllZXNf1l7G0mnlMcSICzMT0rxv9RPGkuu+IJhFezSWqnaAzcVafq19SZ9cupNL02YxWoYhwD92K4jIqlsmQnn3rpemPw3NMWYlG6U2eSeRcMSae4tY4wwjz+TSPPiIJWMJTIVjb9MkMaySSAsT/AMMcmtCDexYDGegxUlBcWENof5G+Zv62PT8Un9Ra8iOMlyahBNjpZmfM3pjHJandw9rCQqqTCowMHk0pzDFBtW9ALDJXH+lR8qCXJTJUdzRJYM3DDJVRGD098UGQEMPNdnJ7E0TFvAuGcyuew7UXfFEAWiEjnkE9qhBsgdDmGPn3I6UmRm3+oFm9sU5luZ5gFDBUH+UVoSRRruC7n9zQANhE7csD8cVIx2cH6OSWSVUlXkKRTi1W9vYmkSNcR+/em88Z8o+av80n7fajRBuXwo5IPbsKBKHAzLIOewNPILSeVleSIlB0pM9pI07HavFSiEaWHbPHTmnMJcqcw7/mtvGEb1sAfYVtZZITuhkBzQIGeCIhUaN45fZhwa1+gkeTyg27PTB6UF7ieeUGaQ5IwCO1JVJopchiT2NFKwixb3tuxEsJKjuy0pXTBjuIfSf6h/TRU1O4Q+VNIdh6huRSbmW3d8KcfINM9AG36C4k3PbI0ka81kMNzICu3nqRRAZkUrBcOqkYODihI0sTemQ7u5pSEhb20X6b+YgMhOOW6U1ntRE5IlXntnpSBN/VtyfelW8EV0zbZBHIOdrdDUCNZUkjAdhlT0I6UuLy522SD1HoRT3yprWH+bHvjJ5U9qCYbabDQExyD+k0WiDUo8L8E8daUQCNwHX/AEoy3EgkCSIHxxg0dFUsW8rYCOmeDQoAqNo5YUil6L0YdRSZbW6iCuI/MU8qevFGNsrKp8xE/wCyKIlvclwba8G4dFJohIwvLkrLH+22kqZFxsU4z0I4qcKahbhnuLMSK3VgM01kls5CBh4TnnIo0AaBY5xz6JPbtSJoJIcDDA04a3XIKSB07EGjAlV8u4Uuh6NnmolZGR7sWZSeDjBp3kSqsUxCN/S3alCGBg28NjsRQngKkKzbkPQ+1MtEGbptcqc8HqKNDIFiZCcg96M0DEhM5B6GmrQSxkxlSMHmlqgjiOMuMBuvzRfMe2UiZA4IxnFN4VeTO0FWXpipBLyWKII0SSkHPqXOabYohRDPAAmemf8A4TTJ/MSbPQ+4p/PNAzrPFF5Dn7lHSlNGBkTjYxAKHswoehJPwx4ovdGv1IJeNj6kP/OvVvhHXbDxF4fjkgmBmiHKk8qa8dQ2xeb+Xw47Gr14D1+/0bW0EMpUOcFT/VzWjj5HGVMy8jEpxs9c29sbmNXC5BqYt7IQgFhgVG+Eb79fpCykKjDqtSOo6gsSkHAx89a7Km3pHHcEtsRdXEcQODTFbtJHxmq3qGs7mKqec+9K02d5HUlu9W1S2UqSb0W9CtamTcvFCiYlRT2NNwrLk2a4EBPYNNMBjNWzRNIEUa+mkWtqjy9BmrXY24RVxXM5EnFUjoYMak7ZiwLDHnpioTVJiqkDirDdZA+Kq2pncGWvOZrcjsKlEo+r37ROQCaqV88s5ZjzVn1O2LzYPPNM2sVWMZWujiaUEcLMpTkUqWNgTwae6epLKCOlP762C54FI06MecFPvV7lcTKoNOi56FbM5UkcV0OxtsIOOKq+gwDy1Aq8wJsjAFcfK7kei48KjbF8BeO1Rd8/WpOU7VNQd3JzgVnno3QQGFctk0q5hDJn4o1uvSjSRExnmq46dlknqirtb+o8d6ypEwHceKyru5T0RfyobjFRd/bjaakkI20G6QNGc102/swlDvkBkK4qt6hp28HirleQr57Ee9BayWVenWt3G5ah6Zs/Gc0c5Fm8cvA4qRs9PE9wo28VZ5tKVMttyaPo2mn9USVwK7UeVGUbRx3xXGaTLBoOnLDCpVccVZWXagxQ7SARxgCjSc8V53k5HNs7uGChGiMv1HkH3xXLvEa4Y+9dR1AbYj+K5l4iAMpqcH+YvL/gUucbgai7mIY55NTkqDaairpBjNephE85Irl1CTkDpUTLaEbjyasUwGSDTOfaIyMCtCi0UtJlSnhKvkCpbTAwHpqOv32vgVJaUwMat2q9aRllqRYIJHWYYbFXLRbuVXXcx/vVLjYZBqwWFw0aJhdxz/auby4KcaNnFm4Ss6xY6qsMO4nJA9+lcD+uv1DmjB0uzvWMr/cqNwB81YPFfjJ9F0djDIDPg/8AKvKevapc6zrM15M5ZpGySa8vLD1lR6rHm7xsjbm4luJS2SO5pqy4xtJYmntukQmUzBjBnLBTgmjytFLM/wCjiEcfQfA/NWhIwNFEfMkBJH9JpAkEspZo+PYU7ktrJZAzzM7f1CnPmabHGdlqQcYzuplEDZGAM5IRTgdqVFE7SAMQqnkmpCC9tI7KREt8TMfvJ7UwLLgknHxmo1/RA3mWkZ5RnOeppTNc3bBYk2Rnj2pqtwAdoiHHQmnHmvIu6aTYg6BeKUgjbDbsQ/rccEUh5FOXcnPYChZQtiNSeeWNbZl5DtnjjFQgMySH0pwDR4YW3csp70JQMjjA96IzoqBF6/5s1EElbe6uCPIt8IM8t3os81pFKQsgeXHqZqi4r4RoI0QfLdzWwlvOxPluxY44p0/6FYRrmSQlI5Tj4NJEcUC5klaSRvmn62enW8Kb5HVz1xzims7WKFgrPKccGm662AaCZNxLqu35pLGBiQikA1iR20reqQx/miAWaSZilL49xwaSg3QMW7FBtBosVw9sQHjDge9PYG015dkpeIMOSnIFNZLWVZCYCJo+x9xTdftEsNdSQXkQP6ZScfcnamDRxKuCjg/ijKHQelDGSeR70YyrF0IZWGD3xRaAgMQQRkDJ+aSUIbeFLfFZuaNiY8lT1zWJJOGzHjGOc0ugiWjXh43GT/SaE0gST1qVI7inqwpKmcbG7nNHk0hhZJOLqN1c4255FTqTwYieYRZRyyex5oYmBG4qAfiniwwxIVV2PvxWo7OKV+JCg7Fl4oNMgiI29yST6JB0+aK9tOrjqvfDDrWgFtZcIvmdi2Milf4ncF8MRJEONp6imQQbJbM/8xvLf3Wsa1SQ/wDVrj1joD1NKZLSf1jKMTz3xTmHTYZrhIYruIM3RmOKnpBsbrULQBTLJx/SeRSn1OO5A/V2y7h1dBg0/ubGaFdjyJIFP3K2aYSCNUKyxhh7qOaDTAN1gyGmtyWQH35FEhkCuN5LKeqt2pEIRSdn2nseKO8M6bZU2yofY9KiIwxg2sFB2iTkZprLvgkKnIweafQ3kMtukVwCFU/kiizW6XChI5FmUjhjwR+asasH2R8UwX+XMN6EcY7UZkinw8UxyByCKavbvC/lSqV9mrcAZH3I4Vh0PXNJvxkM/mwksnKP3FO7O+tkmSO7j/l9GcdRWontZYHWXJf/AC/PvTB4l5aNycdQR0o+BJW/sAsga3kSe2l5SQGm4uJBGLW5O7yz6D3HxTK3ZxGT5uAvIGetZMSZBJkjPXNTsRDrc0uZouGX7hTmzvpopo5EcoyEEGoyKUeaTvK56n3p7BLGY2BXcRxn4pb3ZD1Z4B8Xf4l4eQh0/VxABwhwTUpqmvPIrZbn2J5FeWND8SXug34msbpk5ww7MK7hpeqxa5bLNuHmMoJwe9dvh5Iz0/Tic7HKH7Lwm4PMnl8xieferXpeI1U1XLSNVXDdRx1qXtZ9npHAFb5nMhoulq+/GBUrD0GarFnehUBJqQTU1UDJFZJRdm2Mi0WbATjFWy0wVFUHTr+Npl9VXjT5QyDBzXL5aOtxXaHU6blNVbUrWQ7sDjNXFl3Dmmc1org8Vw5QvZ0b+jnEunmR8kUwvrYRQnj8V0CawVWPHFVnWrUeUwxVXdxdCSxqrRyzUZ8OynqKaWc22VW+ae6talJmbFRkQKnjrXRhuJxMkmpnVfDl6jxJjrXQLZ9yD8VxLw/dvDcIN3Fda0u5MkKnNc/Pj6uztcTMpxokLtsISKgpMM9TF0SUOKhyCHJNc/I7OrHQ9t04FOpE9BFAtzwMU6YcYNNHwDIsx8nispyU5PSso2gE1HNxW52zDTZPS3FKnciM81v7aMvXZB3S/wA7PWiw4xTS5mHm4z1NHtzkdc1jctmpLQ5eFZR0FSFhZBCGK03gUs49qnraMBa28fLKqMmaEbsOq7V6YpLdaMehFBPXNXSZSiN1BcxHPtXM/EC5k5966jermM/iuda/D6ycVfwv5lPK3ApVxH6elQ10PSe1WK7TCHIqu3Ckua9VCkedmtkLMOtRV5IVUipi5QjNQt6MKTWxeGRlZu8tJipPTSwQAe1R1wCZOKkrIFQtST0VJW9lgiI2rk81JJeRxW7NuwVHtUSjgIMd6i9a1KKxsXe4uDgA7UXqaw5pJK2aMUX2pFG8eeI7i5maxiOEJyzHvXN5pIYyzStvbHAHApzrOpNd38kzMcE8CoRyzEEda87OXaTZ6jFDrFIU1y8hODxW4hNK/liUIvya0kEkpwgJ/FFUW1sH89Wkcj0gHgGkSLRJSKJhhzLg8gdKRNN5j5VMfFJM4K7QoUfFJ59qPYBgJ538Ul+OlL3qFwVBOa0xDH49qRhEKTwTzRDlvek5UHpWElvigEIXCxYGP/OhbuwxWsHHHNZgde9EBsk8c5pQ2hfUopIBzk0cQKqb5nC55AHeoiMNZ28czs8roir2PenDsjyFbdSijoAKj94HC5+M0aMXIYHcVH4p0wBjAd2WkPPUGsktSI90Lbh7miwJAZf+vOwU/wBQo1y2jwjbbNNMR+wq1pNbFT2N10maOITXZMSMMrxnNNGSAEgFsDtjrToahnaArbRwNxyBRhJBO+1ogJD0IoUvoN/2RQkVWBWNsA8/NOZZplAW2m3Qnnaeq06kspUckxkAfHFB2qD9oVs9aiTCDF4TGEmUNjv3obvAclFYA/NKuk2ygSIFfHUdDTcg5yGApW39hFh3Jwm4/BFJ3uresce1KWe4gwyAHB6gZojalJKio8cZweu3mlQRMr7wBCGIHXApxsuTAhG4KO54xRLPVZLeN4gqBZBgnbmmVzLcSNzIWSj4KSbXVukCRoA0h+56JEEaB3EikL0GcGoiKRFTdIOtbjmAb0kgDt70bISYFzCGdGCg9Vcg02Njvn3l1QtzweKCJpLudnLBSo4X3oEjOBuyQ2ffpRbQKY9FsqXIDTrHngntS7ixZZMwTCdQM7l7VHm4aYbJDkjoaXDJNC20MVz71E0EcM8i4wefb3rDOqqFdGjf/tdDTy50m/S0S7ADxt3Qg4pukyzRfpr0bQv2vjkVHZDS25nRniIwvVQay2gm87+TKMEcqD0/IpqUlt5WET7l/wA2etLQhjuRzFIOpB61ER7CSeZG53Lz79jTqGa1YYcGAkYNN1SaSElJ9xU9DRzPC6CK8tQCBw8ZpqJYW5kkULG0i3EYHDUw2xuBJE2JAeVqSTS3W3FxZXCzxkZKA+pf2qPuN0cqsyf6UGgIx4midZAcE9cU4kG5RIEG7HqH+ahm6YJ0DL7e1ObeeCSSKJsBD6cntmov6CRxs96tLF0PYVq1xM5ikG4AfuKlNU0yfTLlkQ5I9QKnII+KYMouYvOj9Mw4YdM0jVEQ2liaCYo6lfY1uKTYwZWweh+aIJ2liMMy7mX7SabSAjqOntShHgVmfLDjqKv3gHV5LfU1tw5IfhQT0rnyuIQC3ryODmpHR7trPULedW+w5xWjBPpJMpz41ODTPT9s7MQX4qWgG4hgarOiaha3lnDLHKp3qMqT0NT8Der+WD+a9KmpK0eVknGVMlzPsTGaZzag4bC0ly5TnrTFs7+adRTBKT8LHpWqOJVBausaBdGWJcntXC7VmWddvvXYPDV4kdugY84rk/kMaq0db8fkfjL8uSAaUzKq84qIfVo0TJcYqFvvEUSA/wAwf3rziTO65Jesmry5jUH1DNVPUrmORWANQV/4qTeQJAf3qIbWxNk76oyYm9oqXIj4MdZj3FiOtVkeiQg9anb26EgPOTUI65kJrThtKjnchKTtEzpB3zoBXWdFU/pxnrXKvDyZugD1zXYNLiCwrx1oZ9ov4KaY+nX+UKipV5zUvN0K1Fz/APKuJkPRQ2g9rjinUpOKZWmc09l/4dGPgH6R5k5NZSD1NZQoaiYhkDjNCvJNsZANAtH4GaBqM22Igc1qlLRTGOyv3Fx/1vFS9lICB2qvhTJckn3qat0KJnOKxyZekWOyO5uman4VG2q5prdM1YY3G0Culx1+pizehjxQiOeaXuzzSCea0tooob3K5iNUTX48AnGa6E65Uiqfr1vmNjir+O0poTMrhRzq6QMhA61AzQksc1ZLsBcgdqiZIwWJr0kJaODKNlavYPSTVZ1Alc5q66goWImqPqTjfW7E7MWSNEQ0W5807iGwCsVQQO9EZCD0xRmUpfY4eTag9WKovjXUnliaxsYw7Yy7ntVr1K6FrpksuzcUUkH2ril7qV5cXMshfIlPIB7VyOXkpdTq8LE2+zIMhg5MhyTSgisdzHav/OslkRHz1NBZty5LZ+K4p3B3Nfv5YgijWJAMEr1NR5wx5Jx81rgAkkijQW01wVES7Vzje3QUbfhASxjJ7iisU2jaTnvT66isLWFYo5DPcD7yPtqOLM7ekAfilCYI8nJOPzWFArfdn8UoRlFzJ/rWfMa5NQhjxFMFkYA8jPFaGTwEzRJbiabaJpN20YAoaTSxt6GxxioQwbs42AfmsJ4OAK2zDBJYs3bNDUO5yTtUdc0QCshRgeo0uMnfyMn57UnduYRwLknqadTQw2aKBKJpWGSB/TRSsF0BDM7YUD84o0V7LEhhUK/ye1BVk/8AeNt9gO9FWNcBmOwHvRSZBxb3kKyEzDzD2UilSnT3m3OGjJ7AcU3EltE+1E8xuu7FEW4tp93nRkOOhFWJ/wBii/KhYfy3GD7ij28FuhH61wqHup5ppJ5B4jjcAdxWzN/1basBJB5YijdBaJldQ0u0lYQTTTQMMFGGc0yuLnTZ3LQpJEnseRTa1kgY7p4lHtxihySwSExpbE/K96lgofWtpp17KFlvRFxwWHApd94bubW3S5EkU9u/R42yaipYSgAUNEPcikC4kiGxZ3YD54pW19j0ZPF5JHl7h7g96Stq1yjPEBuXkp3ovnJMOWKyf3zQHklhkyDtb/MOKrCDVC7CM+h/misskAyxz2NP7f8AQXVq7zsyXK9+zUmKKOcGAPkt0zRoA0Kx3FsxPpeMZ/NNY0fbkHIp3Lby2kxhkU7h1FD8vA3jhT7dqNANhMEBQd1ILHcV7nrmiI+yRXQ5YHvWiTJM/mel2OaARLRDPTaaLHHujIkbkf3rFVreQrPEW9waL51v5qtFlGHUN0o0kwMDFNPCSFmYIeMZ4ozIxGXOR14705aJLsAwxAOeuD1ps1vPbyFWJV+m0im2mD0XbXdrAzrcW/mqwxjOCDRFsFuV8y3dVz0UnGKFCu8NE9vvkP2mnUFqsMwiupDBnsT0pkSqMihMDfp5dre+DSZrOVTvjIkTuO4pV5HEX8tXxn7XoK+fbuBJIQT0YGi3RDIrlVYjmKQfOM0V51MJjnUODyrDqDTSS4d5w8ipIR0OMGkM6SLt2kGq+wTfri/nKAyGkyvG6h4kK56ihq8iNjBC+1E35jbZHxn+1L2IO455pIAVlcyIOjc5FNBcAyHIAY9a2sxRMrlD70mRPNHnKnHfFSyCxGhOVf1D3pbwNJH5iLtA4NMiRnCvj/nTmOSRxt8w8ds9ahBc9tKsAZk9OOCtNYZSvIJ4707Mc6rhZjg9s03ZMNtf+Xjt71LoJ0rwB4lS2vks731RMeHH9Nd9tWie2VoGDKwBB968k6fcPZSJcKoKZwRXo76eal+q0xI2XeqjKsT2rtcPLcerOHz8NPvEuBwUIJyaZN92Mc1I3DRlCY8A0zjUs+TzXXj4cdh7WHdKhq9aYzJGuKp9odkq5HWr7pkcbRKRjOK5XPl+p1OBG5Edq95doh2Z4qpT3V7MxDkgV0O/t0kQkqKql7bBGJAArzUZ7Olmxy/srckTEEt/emoV1JK5qUn2glc0OOHcTx1q3sY1CmMcv1akMQO1T8VgHHKikzaK2NyqaFot6SoX4X9d3jHeuw6cv8la5r4Z0ySKbcynrXUbCMrEM9qry7NnEVLYSRc5NRdwPVU1IBsJqJuEy3tXHyo7mMy1zT1hlOtNrcYA4p6qEg1IRtAk6ZGmPk8VlPjC2ftrKt+IXuR9sxEeetM9QmyhFOkYJFUPeOWY5NUSbL0gFrEzzEj3qejtzsA96Y6bGO45qyW1vnr2qQj20CTr0XZW5UDipIsU61uGMKvSgXb7Aa68I9Ukc6crY5WcEdaKrBvmq4t7/Mxmpm1k3KDTOLWxFIekZGKr2tR5hcD2qxk5WojVY98ZAHamg6kmR7VHJ9QiKysCe9RTptXJqw6zEUnJI4zVcvXxEQDXosbuKo4k11bsgNXuVVGUHmqDfuzyZ+asOr3DByM1AvHvUE811MMaVnLzTvQqFdyA4pUu8AMCOPenEERCYxTPUiIUaWRiSo4Ue9LldbJjV0jnXjTUZTdNaRTPz1UGqLOyrCoU5l6c1JatczXOtSiQndkkn2qGukYsCowM9a8xnl2menwQUIUNHQn1DvWeQVUMxxmiR4j4LBiaciRH5IGB7iqS6wFva/qJh5a5HuelPJNyIYyMdgq/1UgTOBiDCgdT0pYihlU4lKyAZBFMqINRY+U++6YKOu3PSkNNbtkxIQR3o9zZoCrPcFiRyrHmkytawQBI0DvnNK0RjcyB+ZVLccAUkyyk+lQoHtSpbqS4fc0aoPZRih7A7ZZ8L7UCCWABBLZJrAQX4orPAYgscRZh1YmgrjaeMGpRLMYkPxis9b8HgCkcE+5omCQBuAzxQIEidIV9Ay54zScPIxbqaJNEkLKgIfHJIpLyuAF4Xj96YBoYhXnlqWpmcgqCc+4oSKWbGCxp/At1KgWGInHeogklpuitPGZrm4hgjH3Fjz/akSQ6ehdoZQfLPX3odvHOjZnYSB+CmelEuLDcm91QRn2YVb9aF+xjLqJMg2ANj/s0gz3Gd8i+k9sU6WCBCqoCD8LmnAtxI3qZ/LHXjFRWwjQXBMahrdcA9QOtHNzIzA21rHGVH3Vk0iwp5cSjjuTTQyuTxNjPBwtRuiLYi4NxJlpnDnsAaaiPAJc8UWVVMhxLuNa8l9oBUsCaokyxRbExxx4clWLf0kdqLhZRskP4NWGHRH/QrOU2DHWo6TTZpHZoYyEQckiqu+y94mlZCukkEvqyF9xRSSqh42yevzilPFKysD25Ga1C0W5N+VKnI/FWpmdqvTZmmkZbgOZMdQ3Jp4skU8RWIBXPVCOKDcQ+TdFrVsrIAdtN43XzCp9LGnToUSyZZ1A2sO1IWVm9LjIHQmnWZI7kBgBu6E96byxMk/r4XPUUP+kHiyPcFR5gZ1HU9aRJGUlzJEVf2xwaZ5CyehvwRUvp+qW4uETU4TcQdDt+4UyafoHYKyCm4B83YynPtUvdXVvIymHLyAesvzmo29js5pz+jLpGeQG601W2KkMkpDr70+0CrJa1u40udxhUsDwaXdGz1EySSK0MnupyPzUckb3bmLG2Yc8cZpCtc2UjFhuToTimsFEjc6bi2jlgmF0hH3L1H5FRTOu8ws+5emGHK0T9SYXWa3cxk9QOlLmmjuv5skIJ/wA68UjdhWvRkUIiYqCec8UEON3U07S4ePdHHhQ3HPtWvNjETxvbqWz9/cVWwjZmYkFehoiSP9m7A71qF4gWDoSDSSI+WDHFAgSQhfSpzSBIyDbuI+KFu2rw1DzuOTmoQduY5AGONw+KUsaoVfJI+O1N4wc4x1p1C6xsys2B2pkQP+rjIwwyB8UCULLyucnoKCWQKd68noRRrcb3Xnbz1J6VKsgOKRwfKZsDOcV1H6ZeJpLXUksZ5f5bcJuPSuY3kLRXRXesnP3L0NONMumstRhn3H+WwNW4puEirNBTg0evvNhdtwbPHJpduAXyDkVWfD+oJquhwXKfaR/erRaQ+XgjJXHSvVRdxtHlJRak4seBNjBquehs8kYI9qqDKeBV38Mx5RQRWDmbxnR4T/eiQuYn8pjiqVqUxjdlYd66pcWqm3PA6VzPxJatHKzBeBXklqR3cq0VOeT1lqJDNtwTTd9xbkUpVBOcGr1Gzl3uyyafOhAB61Z7W3WZORkGqHbOVbjtVy0O8L7Vzk0JQZrxzi/S3afpscacKM1NwxbEx2oWngtGKdsCMgVXNOjbBJeAnA2GoyWMmTrwalHA8v5pmVy3Nc7IjfDRqKLpjtT6EcdKHCoxTqMHFX4o0iqctmbD/lrKLzWVopFdlOd/RUVIpklxT52PQUmCHM24iuQ9s6K8HVlHsUVY7QekVGW8GcccVN2sWAK3cbF9mTPP6HBYKtQ2oTekgHpUpcghTioS5Qu2CM11IxMEpEZGWEuTU/p8uQBmoSdfKGfanelTb3FGcdCxbstanK00vEDRkU6h/wCFQrkgRkms70Xo5v4jhWPcxFc21G6+5QeldF8YXGyF/wB649dXe+Rl5616HhftDZwubUZELqZaRmOaZ24D43cAU/ukOD80C3VVP5rtRdI4zVvY9ASOMHtVH8YawbbTnW3BMjnAfsKv2AYDuXPHSuPePZ7gakbR0McEa5A/Nc/l5OsDo8TGpSKNcsBmeR/5jfNR8kzOQxYEe1IupQZSOTg9KGk5XJCftXm7vZ6KqFo5ByAvPUYpagv04PY0SGVn2s0I2jrgUqWPeu6O4AP+U9qegAvKLKTJKqgdvetNPKjKIE24703ZCoIds1uJtqk7ue1LRCUtrASI15qM3lpjIH+Y0xkaNpSQRjtWmDtEGklLIvRc0kvgfy4gAfeiT7EvKQcKoHzSQqk7nckdTilRRySnDDAFLMapneCB7UCGlAkiJXCBe3c0Igc5GaW0icLswPcURYEmC+VMFLHBDdqgRpgg8CnCQs8TSdl61qSFYn2b/wBxSy1v5ShdxbPqB70CA1wvA5PWkcGTcE3H5pRYl8ICKcxsUgIjiLyHvjpTWSgiTz2yFiEUsMD09qarc3G7Yk7Kp64pa2t1K+4qzH5FS8GkS/phPOgijIyCe9GmC0RH83qjNupzbabeThSZCNx4UmnSPFG5SBTnucUcCR1DGNnjJxjvUX/Q0bWOawzFM6EEdzzQ0jt5XxJdOi9xnNHnW1O0JAQ/sTmjpZT+T5gQYHbFM5UFRsjv0elkuXu3Ujpx1ochjVPKtwpB6tUrbQqFcPbLKW9hgiix+G7u6CzKmFJ6Cs88qRfDC34V6GFjKSsW75NT1vFHiMm3A29uuTVkh8K3ptsCNVX8c1P6b4bhiAknRfLjGTkVgychfR0MXFa9RAQpN+lhaeNvLY4WIDGakL7RpbTSheBlVmPqi74q3Q6fDd41O7wkUI2xRgdPmmuqKt/C7LGoVhsDtxisyytys6HwJR2cevoYZGlkgwnONtRMtuFtwD93Y1aNTgtNMleElZJFbIdec1DToLllkC4YnhRXRhPVnGyw/ahh5cstksoPMRxmmk8TB1kAyDySKnmtpIYxbpkA/dSbzTvIto2iIIYdDVvdFHx6ImSbzbJFYepGxn4pxd2bwxxTJIJI5Vz+KQsQEDrsOc8mjQ+pBDISVYen81anZS1RFyxenK8MBzWJGHTKcMvUUc28iSSROCGX/WkxsEm3snPcCiAdWnmTII4cCRecnvTiS6B/k3lrsI/qjrQhiKLJbEg9WU0780ugWWNJlxx7irl4I9Dezsf1X82zvh5n/wCzbgik3Mk9nKYrhC4PXd3rVw1qGEtojQzd1BoUl5LdRZlcOy8ENUuiUNpFUtvi4HsaLZMnnnz4yyEcqOKATIATtBA9u1IM0hKsrbcVX22H6FuVMxMeQoPAYVovvJ3DBxxW3fd6hyT1NCO4rng0rdkSo0RnjoaTjselYeepxW+oOcmgQ2qBhheD80jBXgmtk4HApUTgNl03D2qENLIEYcZIom9fLHoO40NhyWCAD5oqyGUBXbao6YpkRsR6s5YD4FZGzeZgDgdRRDCGxiTP/lSZ1SJyn3nH3LUIHAMqPtHbjPahx7thyN2OtJhlPQHFFmgeFwwcMjjPpPSp/wBCd1+kupR3mjf4cz7ZomJA9xXYbdCEFecPpdrENnraWTKAZiCHPUGvSkALxBx0r0fFydsaR5vlw65bFYJcA1f/AA5HiJCKo0agyDnmr/4cX+UtV8z+BZwl/sLay5gPHaqF4ktwQ1dDwPIOfaqbr8JbOBXkpupHo5K4nKbmMpIR2o9vHuAFPr20G/IGaRaRENjFacdUcuUaYoWxABAqc0JNlwDWorbco4qSsLUpKMD5rT10LFbL3pb/AMoU/cE1F6apCjJqSd8Cs8lejow8BP0xTVpFV+aVNKApqLlnw9ULjuRb81ExHKOgp9FyBVehnyRnipqGZdopnicCd+2x7WUHzKylJZSlAdutPoIuRgc1DafciTB61ZrKMvg9q5ah+1HUk6iSFnbjAzUoiBeaDbx7RTlsBTXYxx6qjlyduxncvwaYGMEE07nGTQiQkZJq5SSKaZA34wDilaMpEnJpN9IGbAp5pEeWBxTN/qKl+xZox/KHxTDUZhHE3PapBfTFVW8QXnlwv6sGs1OTouulbOc+MboyI6hq5e4Ky1cNYuzPPIrHPNVqaDLE16Phx6RpnneXLvO0MLnBT3NRoYo3IxUnOhVc96i5VO7kZzXUT0YXtj39S8YzG3Qd+a4f4wv7rUvENzcynzUU7BtPtXUdYu/0Oi3Ey8SEFVPzXF7rcpMpb1nk5rjfkJ//ACdngQ9kQ0qxySZf0UQW7qhKbWQf1UiVl3cgEnvQgdpGAfn5rjnWDoHYlACD7jpQisUb/wAyVmI/y08gmbkmTyl6YI60GWW2MmAAwHcDrVn0B+gke06sru3sTxQWl/mExRjb2B7VtxGSSnP4pvuZfSqmkYRZeQ53MR8CiKgEe9pM/ApMcMrnDcZ96fW9k0kZfzUVV7E9ai2ARCsYYPJIQD2B5NOZ2S5ZYobVg55HOcimpjVX3g5A604juXEiqj4zxuPamIN5AQ20IAV6gjpTYneW5x+KfXccf6nZHc7w33Nim7wpGp2vn5pWQbD4YsaWASMj/WjCBByZACegFYQhXaDnFAIlZGVwxIBHtUjaazdWhJhijZm7sgNMUaNekefzWpGnzgekHpipdBJCWe8nBlZwFHXHGK2urXssH6ZJP5a+/JqPHmMBHuPPapaye0tCrPH5sw6KB1NI5FkYpk5a6XJJZwzagrW0DcmQjlh7CnbXFmJP+oW6CCPjDnlqYzTalqECPcyFkHCJnASh2NpNNcbIlKqO570ryUaVjt0iSgl083JnmsAT/lQ9TUxbI14gRbER5PCg/wDOpLSfDLxBbmcDL9FPOat9l4dLlTsII+4iufl5iWjqYeC2rZXrHwq49flI4kHKjtVr0fQVilIEGAoz9vSrNpulW8Pow5+c9KmdlzbIsMcaOjDll61yZ8lzejr4+NGC8KlNZWiyqjSszvwFC4xRJNGtlKvdOAoGApHWrfbada3PFyQrjkZFI1HQ7S8KWlpIDIfuYnharUix4/op2o61o+kWjQxp50+PSirkVznVodXv3N3dlre0JyoQYGa7Je2HhnQIWSUJLNzuYDJNUDUbTUvEc6C0RrXSoiSWP9X7VpxzSezPkxNrRy298OX13IEt4DJuOS+eQKktH8H6lHufyFZ8YDydBXSbK3W1zFb6fJK68b24BpNxoetXaFGkNtE/Plx85rQ+RapGVcPfZnMtR8PNHeLbmYF2+9l7Um28OuA9ttEm5/QxPOK6Pa+F3t/Our5NkcakKXPLGh22l21nEt3dRSzSs2V29FWp/kaA+L9nLtQ0iKLzUEeIwNpJ65qqpaSLcr5JJ2txXfNS0XTdXuxa6eCium5s+9c113RJ9Eu/00sRYF8rIK2YOQno5/J4rjtFU1CSeTUmaZAkpXB2jANQzpknJxg1b7lBcu0jKNy+nHc1Az2o2SnGHU9K6ClaOVKFDO0u5bacSZ3Y42t3qQa8IlMiRoueQhqMaEhQ2Dk05l/nWC7woeM/d3IqxNlbQm5mMkxdlEbew6U3jugkhMkYYNwcViTLt2SYcdqE8BPrXlaFkoUzjJ2dO1aUo2QwwexrQPlkKy4pR284BIIoAEK8Y6Z/ajRRQSbi83lgDIyOtN19IznvSwu7q2KgDGjXPokDVoq4XGeKSR1ApZhkChgysPg1CCcYFaO7IwBWFXHOCPzWsEnJNQhsZLYOWoyLIxxHHwOtDGQBs/vS0eQA9cdyKZEYQKMkt6fxSWYbtpX01iOqjldwPvS1CKSSwb2qENeTGCGDDHcUmcNuzF9nxS1iiKszS4YcgYzmnP6fzbbzdy5HBANQPo88OTGDW7aQybDuHq9q9haLcRXGkQOH3lkBJrxtFLBDcQtGCWH3A16l+mt2t1oUTRepMZYE8rXS4WVR/VnL5uFy/ZF3VMEEVePDrfyxzVPZRn09KtHhyT1Be1bOS+0DJxF1yF7B/k/tVa1SPc2DVlhG6HPbFQWpoQ2fmvI5dM9Iim3tmMnC1HJb7JhkVa5Ig45GTTJ7EkggUmLL/ZVPHYqxtgwHFT9pYYYHFNNOtypUGrRbxqF6CuksiaKI4zdvCI0zWriQAUaRgiVE3U/UE0UrY7dKgE0hZiM0ykxk0TIZz81jqCMDFalSMz2IiOSB/rUvaueOahxhSKf2sh3YHNU5aouxkzurKFuPtWVzbNlnKdEvdzqm7qa6jpYXyFrj2hcTqxrpNhqCpEBu5FNDGvTXy5dZdS3rIiLya35gfpVeiu3nkwOmamoA23Jp5ypGCKs1KOpqOvJgkZGafXMwUEdKrep3BKkA9qoU7kXuCoi5bvddbd1WzR1zEpA61zE3bR6iN/TNdF0G8jaJTuGPzW1+GKEk5UWK5kEUBORXLPFuqgBkVuelXvWb5UtWYHt71xPXrsz3jc9/eruNDtK2U8vJ1hSIKeXMpbJ60NtsgzW5+EzTGKUs+3sK7yOC2au4TsziomWIjgg1aUtzMmKa3lmbaNpCMhRnGKtWRJUK4tnOvFF6tlZhWhEzEHCEf61xu/uJ5xiRAh68DFXnxjqn6jUpFfMfGFwaoM8iKpRmySOGNcPlT7zO/wASHSBHsECAEsG980gyqqgLknuTSHfc3HX5oLNhuTWM2DpboLIrGESBTkhjwa09wjyFhbqmey9qDDJGkg3pvXuAetJZtzHCYB6c9Kl6JQQyDJ2rtz2FaRyrEjOfmkANtP8Azraq2cDNDYQpOe5JPvT6yhM7LGT5a9SxPFM1xEMsQx9qWoklViDhB+1HwguQNvfdkjPGKQEkkJZR6V6mhrgNyxNGkmj4SLIQ9RnqahAZceZl/wBsUovGWycg0ORQjY4z8UkAsdpzxQuiBlWSZyyLuwOo7URoZLcBnGC/ajQzMiYwFQe3U0PdJLLk8c8ZpOw/UQMLnzHJwOAKcQ20kkD3DRs0a9zRYrYI+6Zd5PQCkz3N2qi3CkRsemKRyLlj0YDBFEZGwzHhVqT0R5I0mdLaN5XGNz84HxUZbQC4nCSjaR2FdE8P+GUuZFEsgjh6nnmqMmVQWzVgwSyPSG+kaM2puQz+XIOozwB71atG0S0t730oZ9vHHc1PWXh6F1EGm2srgnmUjAq6aR4bay2BrY+Z8DNcvNyX9HewcRLbIex8P3Bdbmf05+2PPQVZ7TR2TaWDEHtnmrLa6O2RJMhGB9tS0dqI0ysP965Urk9nSVR0iBg09doURED3FSMNpJHEwZFLD7QDUmkUmwYXr2ApawopIKke+aijTI3ohZbeVrYvLGiH460xj0e4dHkhUw7ur5q0+XEG3shJ9jQJGkeXYren4p6oidlLvtDskBhANzI/LMeakLXSoYNOFuIV8s1Yo7dVQyGPOe+OaSEy+BE2D2IqzYKRX1tLWFh5sa7T/lFM78Jbv+otVyFHIYdfxVtaCCIbjAS3YEU1FnHcXIknjwvZe1DZNFB0/Q7zUr83mokmItuWHtUzqFlEm0R2oUL/AE4q0/pAJmSHCMBkGhSWUjxMOGJ6mjbBSs5bfaZaS3jSRQvDLyMA4ql65pF5cZt3IkweM8kV22fw+rR+bPJhhyoHWq9qGiFmVolxIe/vTxm4uyueKM1R5t1OzvdE1KOSaMsinqRwab39vHMRqMChQ49SV3DxDpE89sEurFZVT3GK5jq3h65tIlu7SPMTEgxHtXVwclPTOFn4bjbRQljfezuBt9jTdmbdJtjGPb2qXkW4juDmHGP6WoNyu7Ext2VTwa6cZ2ciWOiEa1DqXiI68gnmtZ8nHcjr7VLraW4Rp1UvgdM4pkYFlGYfUW/pq1bKGqBm6Ets8Bs45M8h/wCoU0Qr0wQfanq2s6TDy0YP0xigy28iMyzIUce4qCAjGxXKjcO4oaEK3qVhTgLIoBYgDoCDThhGQquo3HuDRIAWJJACmAaTLbTR/bg++DRiio/oIfHbNFnsrhEV2iKqwyCDmm0AYMruoLA5+KE0bKcEEfJoxZkGAWzSTLISA67gKQhoKqgFmz8ClgB29Oce1ERLeRiT/L9hS3tZFfbC4I9waJBuY3APGF+aSCoYAjg06/ShXUTT4Q9TnNbu47WOQC3dpR2OMVCGxDbpB5glIkPRa0lxGo2P1oUgEYKbGzjqa1EyGMoVzn+r2qBH7WplXdBiRBglh2rs/wBJdSu9MlijlJe1nO0E87TXCoZWhY7WOM9uK6D4C8SxW2pi0vJPLimP3D+lveg247QGlJUz1iAxckcr1zU/oT7LgDNVvQ4ZH02Au4kUjKtnqKnrTMNyv5rqRy98dM5ssPTImjpNk26HGecUx1G2L84omlS74xn2qRmh3D3rgZo7OvHwqyQbGweaILdWNSU0HqJ20iNAprlyTizRHY0RBE3QAU+iugM4NNLoNgkUyhLhjk1ZjySbBOKRLT3JKHmoeeVi1PSCY81G3B9fFdjHLRgmZG530VmBXk03Xit7hV/ZlApmA6c08sX9fNR2eakLIAuCaSTtFkPSb3isoYHFZWPqarOE6ZqQUqFOCav+jRzXgXk4rkmgq017HF8ivQHhqxCWycdh2pYTO/8AleOoysmdO08IikjmpR1VEosabVFAuOVIzUntHEgqIHU7jaDiq9cMXU96lNX9IJNQ8DiUlc5rJGVOzRV6KbrZaGTzFGCDT7QtfZYtpbkU/wBb0vzrdio5qjLDPaTsMECuliyLIqORnxyxztF61LWzPaMu7tXP7kmR2bOSTTySZzGQxPNNWGFBxxXU4/6I5vIk5siLpyiYzTK2JMmacXxwxrenRbnFbu+rMDTstOkwBwpPv0pfiGJ4dMuTb2ZeRkIHxxR9PTywuOtPtZubW00ae6vZxCAvBxnNYsudROngxdtHivX53m1Sbzsq6sQQag7x2YD1KcDoKsfi+7hvfEFzdxKoRmPoAxVSdyzlgAo/NYe3bZ1UqVCVheXJRSxHYCtqkUExNxGHOPtzRI2lUFo22ZGMim7bV+47z70CCW2lyVwB7CthT7daSGABAWixzSKMLj+1QYVBA8rhVByTjb3NOLi3MUwt1Xa6/fmj2169nG3lwo80nIkI5T8UEzH1lzvmlPXNOvADYxAydMKOp963JKPsXhR7d6dExtIgWMhUX15PU0zk8oNuzn2ApGEHnIO0YNEt8CX1JvA7UmJN5JZgB1p/BKtrE42ozSDrjpQSIJ2xHMjDb7DsKewaZc3ioQoUHp803tbV7qZQSdtdK0fREkgigPOcesHpWfLkUUa8GF5GV2y8KXjqzeV5wUfcOgqTj8DSiMzzPtdR9g6munWWg/prPywd8Q9zikNbX97dLpekwBpujS9Qv71yp8pt0juw4KSOdweGrWHHnAyzMcLET0/NS0fhW3lgMVrbNdXrnGR9qfAro1r9O49PkF1ql0bmU8kIe9XPw/oaQy+ekKw/5QB9oqifJo0w4i+0cy0H6QLCVn1Fh5rc+WO1dIsvA2m2BiP6dcsO4q529opy7AuenSjywFsL1xyKyTzSmbceOENJERDpscDKioFjXpgcVLwRgHLIwPv2oqQsQDtBHansdu20B1znsDVSTbHk0gaAMN20/nNKVAQSznHtR/KCcICR3FKQIPT5WPmmor7f0CXeSNq/vREV1UhlByepo22MNjBpQVQ3PI/NMo1sVysZzK5QqAMnpTeK0ljBBO4N1JqScRjLnr0xWIyMpHb5pqD30Bit0XhWyf8AlRPIUNuZsmlF1j5A/tSlbdzjj2q1UI2wb28RUueXPH4oPlptKqnA96egsf6QPzWGJm64x8UXGwKdekTJEUwVjyc+1a2AncyFT7AcVMeWAMbgT7VoW6kdiaTqH5EQxtEkIYYyaZT2kWQ0gG5ehAqwyW5HDAfBHam/6RnYByCvXNRxoikVS80M3pLuTjoAapmveDX/AE0rQgB/uwa65sQOUYZ9s9qY6lakqG8nrxkGkqtoa09M8za14W86NjLAI2b+sDvVZexMFp+lvbUMIz/xB3FejdY0SLBieMfzO5HSqPPo1q0cmn3cSsjf1g8itmHkNaZkzcVS2jiOs6LbWoJ02UzWzgEqf6TVPktHgmWWJiTnoO1dm1bw3d6fHLFbJ+phz1A5FUW4tIo5WSdNobqcdK6+LPGSOHm40osrVvdP5hMruWHuelZdKsyMxnJlPUHmnGo28MDq8attbv2NMmkheYB8onTIHWtSZglCiN8njO7Pxmt7h0YGntzDFHKPIl3KeQaB5Uof1R7we/WmRW0DOwnCkq3zRS90ANkrHHYmgtEZCAEbeOopcSr5g89yijuKgKBvPPgAjAPxSQJm56UV5/KfKL5idtwpIm3yZ6fFQBkcLyMR2x1o/koi7vOxntRIUV3PmOqL164pz5Vu8JUsCe2aZEI+QWygetmoKBdxZSVx0pwwiQeWIdz++eKQxXy9oCnPJ+KADHuHKiJjkDuetCwvUqQR7d6KWilQKE9QoQLoGXbuHtUII9QkDA5Hen1gd14jIO4wKaLwMgDGeaf2F1Da3W+S2EqHkc4INRhR7R+keqrqfhWO1kiIng4YN1xV+ubeMSAxIRz7VyH6I395PDFcWsMLQyel0c+qu+XMOfTJFsfqMdKEMnV0NKHYNozHYqng1ZAAVqu6cnlsMVYUGY/2qme2NVDaZeTxTKQYOakZqZSLuNYcsbNMBs8XmLjFNBbMr9OKmYYeBS5YVC5xRx462VTZCS+hcVFS+qSpe8X1H2qLON5wK2YzJMGR8Ug96I7UFnxwa0lBtPu5NSlmvTtUQDhhUrbSjApX4ND0lqygbx71lZzScH8H2xk1VW64xXobRI9lso+K4v4GtM3IcjoRXcdOASAfis+Pw9b+ZncqRJCm8v2miGQDOTTG7ukSM+qjOSo8zD0q3iKdY0bmqvpt4JLk4Pej+Kb9SrAPVX8Pzs12249+KoULi2SWVRmkjpXkrND07VT9Y01UZiq96udmS0IPxUVqcIct3qjHJwno3TxxyQtnOJoGXr0zQpVHl4PGKnruzPOFzj2qCukIBU5r0mOdpHlM0OkmkQF2mWzT3R7SSWZTjilx2rXEoUKTzV58PaIAqkpVmTN1iV4cLnMcadpLiNSF5NPNW0m2/wAHm86FZmC9GGassNsIYgAQDVa8Zvfw+G71rK4jhlCE+Y54WuHkzOTPQ48MYI8O+PIYbTxJdwIkanefSnRRnpVKjhV5CZjtjFWPxEQ+vXP6m4E8m7JkHc1AXM0YOyNc471uh/FFMvaASsoYovQUE4Ircn3KWbJPak5PbinEN4zSkV2OBxSVVnIVQSTR2ZU2opwR1NBDDy6jjtNkO8M+0FsHOKaBXL7gvJ6U4gihnlBIdiByRWSsquFgzkd/arPRTJrV4MLNIA5GSKYnaJPSOBR5xN5paZy3u1DVGlZUQY4J/NVsYSuWkAOAtEiVp5fLQfvQcHdjripnQYt1+BsBLjAquUuqssxx7SotfhrQXuBGzDAJ4rtvh7TLO20/zJ4x5g7AZqs+E/D14Y42WAxq39RHNdZsNMhsI0TbvlPXNeb5WdydJnruHx1CN0Nbezn1a38kQfpbYD7sepqm9K8O22mQ7YUIYnJfPWpeIqse5I8AdsU6CSyKAZAB2x2rD2OhQxGnxyyAsN3NSsVhsO1eAaJaRBXAHI9zUon3AlRkU0VYjbQEQYQRpke+K20MW3AjOR3NOFBL56E+1LMRxg9Ku66Ku2xiuWxlQVHFPI1UHgfgClJAc4C4pwkBB9jTxgxZzQEhc4IIJrPKzzyAKdmPyxkFSawOQAGUHNWfGinu/ojJy0K+lCRW44GkTfvK/Bp4wBPOOemaUFReCMmk6bHeR1oaCNV4Az80owcZ4p4QBkqOtbKkpx3qxQoX5BiISG9Sk0QbVwMU5AIGMUgoD6jU6k736IxzypI96zcijrgUbyzt6k0kwBuoBo0xey+weyMHzMZpTBDjC4BowgH25AxWFAgwpyKbroHZDRVYuS/KdhSsIx4BU+1G8vHc1gjbGM8e9TqHsM3g3fdwexpvNC/lgBwSD0qUwPtbkU2lQMpKY3DpSSikOpEPqNmLmJSyDzE5z8VR9Y0NP1K3sCgbch0HeuoGPzFyRziq5qmnyeb/AC0Dg8lazzTW0Xxlejm5s545t23fGw71TvFfhW1mL3cUeMDJAHQ10nUrmCyIa4Uwsh5UjgiobUGtdTVlinigjYcMDyaMMjiCeNS9POmo6fIImiHqjDcqR9tVqeye0Vt6Epng+1dl13QxZuxG2aI9WFc/1u3EbB4jviz6kNdjByL0zicjjVtFPlKugwoJWm8dxJGPS3/6Kmb3TYGjMtk5DY5jJ5FQv6dl3FwU/wDOujCdnHyQaDSXLSIZCSrEYyO9NvS656tRY13JsYHbnittFECBuPNWWiqqGx9WP6SPekkA9Tz7ijvHGikliT2FAVxk4TNQUVGUD5lc7Petvcn7IY846Me9Jlkdk9MYAHxQS0mBzgUbIOzIRt3yDPcDtSmWF1LEqvHamnK8kbqWsq59UYOagBSAhuCQPcU5RDvC4wD1NABjBG2ibnUktk+w+KIBMsOyQlDvT3Fb3HAPUVsyGLmL7G6qa1E6SS4cbVPtQCj0l/Ddr8aajLo9390nqhY9j3FevngEkA43MoxXzj8DazNoPiuyvIXO1HDEDvzX0P8ADWpwax4fg1GJvTMgOB24qmS2WocQJsfGOal4SNnzURJII5DyM0+tptwzmkci2UdWEnIA5puihm5pdzIvc02iuBu61lk1Y8YuiSiQKOaFcMoB5FaNwPLFNZZN64qzuilxZF3jbmIFMfLwORUk0W5iaG8IxitOKmjPkTImZGwTUfJKI39RqwSwDysiqxqWY5M1q6mVqg4uQeRREvwneq8btieDQzcuTiqpMidFp/xQ/wCY1lVfzJPc1lU2WdmS/g/TZIApdME10uEhI/2oFrpaQABQBinc0OI+KzTVeHe5PJ+adjG6vQmeareo6kzBgpp7qEL7yRmoG4QrnIzWW3L0xSVLRU9XZ5mO6m+iREXnFPdRXLthcVrRYx+p6d62wVROXN/udAszttx+KaSYlnK9adr6bYc9qi7aXOpEe5rC1+56PAu0B4+jB4Sdvaqnf+HZTOTt9JrqtvGrxAEdqRNp8bHdtFdHHlaVHHz4Iykc0sNA8pgSlW6xt0t4wWwAKd3UUUCk8A1A3OqbQVDUs5ynobHCOImLm6RUO0qPmuSfVO7uH8NSxxO0hb+lTj+9Wya/kZD1qifUtYP+gd5NPIyMB6SOMt2qlY9ljy2eP9YymoTBhtO48HqKh2bJxjHzTq8dnnJ+5s8mmTZUnNdBaVFL2KCqzgF8Z70kqd2Ac1rPGe9OIY0ETTE7n6KtMAxVWFSWJ349O2hLGzDe/SnCRGSURD72PJPFKu49hKF1VV4IBzRqiAln8tSI225/1pyhEEJYAmQjvTSOaCCUP5Ykx2bpTgzzXUnmMAoA7DhRUTINi5kkJbJHfNEtgHuAJGKLjk1k7gRLHGc85J9zSEDy5HUgUknQyFogkuRFCCwzjNdd+nHhIXN1HeTR/wAtD3HWq34L8MNqZ88KTyAx9q9I+FNGSxCwLBgIgxXF5vJpdUeg4HEt95EpZ2P6eyCqB8fFSltCwAZjlz709igG0q6k59+1ax0BGCDgV597dnpFpUPII5XwFIxjkU+hhAYAjHxQ7OFlOVxkjNO44WMm5359qeKFkxxBgDHH4o6rufJHFYoG0LxmnCryF/1rRFUZ5SoWi5AwKMIxjk0lQAeg/NGzgDCg/mtUVrZllJ2I2E+9YFbONppW5yOuKQC277sD2pnQmwnljrit8jqBWi2e5rDnbwaNgFNGrAFlBI6UJowWBY4rZBPXP7VvIznBzU/8ItGAqOta3jd1wKwKOSVreyNhwDU2HQtwCvpoe8gcKKUq5Tb1rMEcUzBoTkntilZ/7OTSiPjmtAH3qEFBgU9Snd8UFpAJNmG5+KL0OQKKpXGCMimF8BZUda3uRO5IPxWHbn4FaYDBKnioD0Q5GTjmgMfSSo5opLAZNaLKwxjFVyLkABk2nIphdszuqxsC/c+1SWPSfVjNNGtlG5xw571nbLoNXsrWpadFcb2uEWVv+0KrT+HdNmZoWgCDOQRV4ubV2IDvwOnvUZcxCBDMFHznvVD0a7T8KDq/h5YbdolAkTHAIrlmreHSs7P5K8n26V3m7Au4gYQVX+oDnFUfXoUUOk43E9GXg1Zjm4u0VZMSktnANZ0q8hlI8gBf6WHtVeu47khY3jzjgYFdqm0Zpn82KUP7qRnFMT4Wa6z5FuQpPqdh1rpQ5VHIy8Ps9HNLbRHmtdzjbxximdxokkFwFUFtwyD2Nd9i8Lwx2Kwi2DN3H/nUVqPgmSCweZQS0Z3KPih/m7Gf479ThMloyFldG4pq+YU3CIY6A12dPC76iRJ5A9Qwciq5rfg67t4JENvtUHg4rVj5ibpmHLwJJWcwaYj0sODWL5JYFmOPYdqdXdjLbzFHQgDoaY7XGcjiujFp+HHknF0w7Rq2fLk4+aWIAkIfIJ+DTUOGOCM4pzC8cZBVSSfccCnAE8pBEGXJc+/asBwTuTn3zTjdEwHI3Y7dKbTnrxz2x0ogFl98ewoAR3pCoB61cZ6baEkhjB9Gc0kuN5DDB/NAhNaLcfp9Wt2ZzHh+T7D3r3f9L9VaLwpbwhxLB0ScdDmvn9HOySAuQR2Y16Y+i2v6vp+nJHdM0+kTHaDnIQ/+VJJWWRdHpW8vitxgn9weKk7C6LIDnNVQOLra0ZDJjqKnrCMooxxWTJ+uzZCSkqJO7lwgOajUnbfTq4BZM5/agW8W5xXPm22WqkiSj3OowacGEgZ60S2iAUZo7KAK0QhrZRKWyNcAcEU2Y84p5NTJxhs08MvWVAlj7KwmF2YNVTW4xyasUs4SM+9VbVbkMrZNdSE1JHNyx6lXdwrkCiReoiou5ucXBxT+xk3eo9aqmZkyVEYx0rKWJOKyqC07UAAMYpLJuFLpJbHamkkzamyNu7QMDx1qvXtjtRjirbK61EX+3ymrDkpPRpjtbOWawhSUjHFG0OH15o2uRh5yFGeacaPAVXJFaIP9Dlzj/tJyZsQMPioXT5QdTIPvUnevstz+KgtOcf4hn3NZL/az13ExXis6ZZuPKH4rVzdLGOTTS1lxb5B7VB6zeSRnAPFaFKzjciPWTA6xqI2Ha1VVS9xNk5IzR55Hn6nil2cGJAcVdE50pNvQ7t7NimSOKo31ctp5/AF1b2tuJMckn+mumRYUYI9NUX6pw3974NuYNOypZDu20HLZdFaPCtypjmZGGGzzTMjccVLapYyWkjpNMrODggHPNRpmPkiIIOO/eta8FE7VWIE/cTxREujCF2KCVOeabMcY3E8UgMSc0bIO5rqWWUySMNx7LQSdx681tVjyu/gZ5NJCK0mEJx2Jo3ZBcEe9iDtA65NFQk5UNhT1NacQKwWIl8dT2rRfgRnAB6mgQUqgnIOAOlTnh7RrjV9QW3ijJBPJx2pnounyalfLaxKc9Tx2r0T4F8N22n2/ES+cRy2M1h5ObpFnR4fH+WSZP+EPC8elaSkEUYUkepiOpq96dCkbls5IG0tSbCPbbBT361J2MACMhHpJzzXmMk3KVs9fjgoxodxghCoGQe5rUcJ3kuOO1HjJCYI5FL6p0FVOiyzLYkSNk4A6U9RPUdzZPam0QIyB0PU05hU55PNPErkx2FCLnP5p0uGUY5pshXaF6nPNFJIXgYrQjPJWHyE9OM0UFtoAXH5ptHnqTzTj7wCW6VdFlMlQrB/zUEW580sZSR2FHXYejAmt5Qdas0xLa8EBMdyTSs8expJlTPp61sJnBIo2D/03uGOa2p5GK0CTxgYre4HjmimAUBk81vIxtUc0hSST7UrkLwcUQGwFHU81vjNDPqHPFaPHGalkoUSAazORkUkHHJOTSC/OMjNRyGSCZPbrWCVgenFC3nPUUrcpHFDsTqG8xSOnNIZ8Z/y0PcOVyBQmkA+5hig5BUBTvxQyxxnFYQGUkEGtcAYPWqm7LUkge9g2NuRS2dF71rcu7uaw8nkcVUOBmKtk4BFRs8XnIY2QFT71Ium7OB+1NXiYEjHH5qtlsSr3ehyHP6WZoj3weKipfCYuWzeXRc54q9tGqR7h0/50ykCscjj4pbotuysx+E9OtUA2B/k96ZSaFFHP/LYqnXAHFWySIOBsc/g01kgJDIfu96HZhogHtXjdZPKQgdx3FIuoFkyZIfSR6cCpQQyD+W/rBPFZOjRx7fLKt2yOKaIGqRVjpcdrGs4QGNzyB/T80w1OzW7tyjRqUxjIq53CRy2flNGA2OoqEms3SYc/ysYOPen3dlNfTOD+LPDQLyNCoCoOSBXM7yxMbDyiCehBr0T4m094TKyncj54NcP1q3CSTSKMFG6V3eFk7Kmec/IYlF2irpbiVyhAVx/rSHHltsd2Uj3FPSQ6eYCCfigSFmf+avGOM966hxxI8tEBEu/PtSmIcABsN2ptLhFyi7R3raTIQC6Z/FQhuQkLyORWK6uP5qZY9CK2zedHhDgjt8UNlYcAft3qChxEHO3BzjIFdr+jviWTTbl9KmTdZzfcrdAfeuNWCTTylSueOprqf07tLm21+LzIg8Eg2lfcUyVkbPX2gWmxEeJi0BGce1W6JAg6cYqK8L6ebXSo0DF0KgqD1AqdmUKoA4rDnNWFjaTDkgUa2h2kUGLljT2HhhWLHG3s0TlSH0a7QMVkhyKUnK5rGA5zWtx0Zk/sjpFzmmzDJxTucqpPNNRjmsM07NcdojrtSEJqj607KGINX+9ZfLNUDXjlXxWrBN+GbkY042VHBmnGO5qwWcHloMioiyi9e4jvVgR1jh5rpde2jkY47D7hjpWUxN4uetZV3wP+jVR3wHIocnehxzKehovDDrmue9ovWmRc7spzk1BalebUbrVluYhtNU3WFG5gK500+xug04lfci5ujn3qwWloI4gQKhra1Pm7wD1qzI4S3AI7VrTqJi+NyyWQeqtiIqKhbNCs4cHvUnqcoYsM96ZwbV2msj9PZcaHXEXOwy0A/FMdXtDIN2Kc6TKDGATUrcQCSMnFXwPP8xfsznZhKkg0/so9xFPr6xKsdq96FaQsrhcVp8Rxox2SMduoQ7qoX1LS6fwrdrbRMGdDgqe3zXSYgCpBFUP6ly3UXhK9WzADlCAx9sVlcv2N6h+p4E1U4upEPJDHJNRaAsTk4FP9SSZb2UTDDbjnPvTGNWZgigknoBXSj4Y2alwuBjJpC+7UuRX6MdpHY0kADgnP4pqAaIYnHNbUZBySMe1KLM2FxitFcZCnNTwhtsBMgEAUWCNn/pyTW413JtwQF5ye5q1aBozXajEbNuOAAOp7VXKVbZbjg5ukWv6aaKpvP1kkbEjj9/avRel6VHaGOQr6pFyR7VTPBvhptM0qOKf/AIzclAOldKlaJLaKONSZAQMDtXneXl7yaPV8TD8cA0aD9QEXjHJzUhGTtIC7R7mkW9pwGJyepp2vDEAZ+K5zOlYBkkkceshR1o4wiccn3oqpucnHAFJYAnaq9etI1RE7NxJI6ZLDFPoP5YG45JpokfIjBxR4QEzht1NEWQ5kdlQsi7WPvRY9+0b25x2oWeQTRVD9cVamVhUGBjd1o6lRwOtNwfmtKW38AnFWplbVjj0r0FaUNvOftoZLseRx7UsZxxxRbsSgg2g9M0rIHJOKCWwODzWLz1NMpA6hSQOc1sDcwIagNIFwDzRkbJB6UylsDVILliDg1pieM9K2GzkCkkAjJHNWWVozfljk0nzEIIyCaUUyvA61pIEHbB96Gw6BNL6gu0/2pJyc8YozFVfnFaJUnIP7UGh0wQBIwetKAA71v05zkUnfnkYpLoYzgH1DNJMSN6iP2rZOaUFyPaluyeGgAq+kc1jMcZxzSgpPQ1ooc1Nk0D3nHqXFaYOQcGl8454pPP8AnIFKMgEhbbg9aAWB4PJpxOm5Mbjn3pmIlWTh9x+arei6PhqVQQVRsEdqaygkAAer4p48ZAJX+9NZPMGcGq2MhsU5BB5/FYyEHOzce4on25GeTQizAnDf3oFoBoo2Ug+l88CkyWsxiyXDMOxou4spDpz70plXYrhjnpirYiMZvEEUekHPBqLuYgrMDwKnWTavqGR1qNvY+M9VbinK2ULxBbLNZyqeqjg1wDxFC1nqMxdPSwIOR1r0Vr8MkUh9J2EdB3ri3jSweWO7YIWZFLfiunwZVKjkfkI3Gzl0kYiXfEDsbjBpqJGz5ci717Y7Vt7hnhMLMQV5FMgx9+td080OGgZyTC+R/l9qCwdG54I7Vina+QxB+KWSxOSQ1QBo+Wzhgdh7mtndnbkHH9VZv59UY/tTlroMmxYEVfxzUAJgd03DefVxxXe/ojbRalq6RSljJEvAIrgw3Aox4wegr1R9Dbe2tpLHUv0jM8iFTtGcn3qNhPTWlI0FjGkiFSq4NbuZxkgH+9JkvVaMMPSPbHNRbXBklHPeqZQtMaM6dEnA4Ip2kijgmofz/KQYNMZ9UKuBmsC/V0bGuyLgLpVXGaDJejFVP/Fiwxu/1pa3rOMZp5ZDZi4jasmJ7kM3J5pCzjHWo5XzyWpTSADg1U3ZtWFR0avLjcpUGqdqw37s9KsrgyOahNStmIYAVfhirMfLxfpoqnmCFsDikT6iQmBTXURLA7cHFQIuZZJiCCOelej4+BfyZ5f5OsqJz9YaymQfgfyzWVv6Is+U9EW98VIy1SsN0rAHdVVvG8hSw4pvaath8Fq8VGTNV0y5XNwBETVL1CcSXW2n9zqqmAjd2qpve7tQx15qKLmzT3UFZZrOAFelZeOY0I6CiWUo8rJNR2qzeljnrTy/VUauLH5ciaK9czFpWJ7Gkwyk4wKBJ6nxnJNTGkaa0rgmsvr0etk1jhsnNJD7ASKnxMAuDSLOx8qIDHameoyNbrkVfCLPKczKpNtBnVJSehoQswGyKYWV2ZJeuankKmPNWz8OdjpsbLGAmO9Unx00Y0adpFysSFse5q8ysACRVT8R2sVzp9ys4yrDge/esL/kdBfxPn14oglTWbmWWMp5jlgp/NV2OTbl19LDpV++pUUp8VXRZNiBtqZ44qgbcAgda6+P+KOZL00Mv97fuaczy2vkRJawEMg9bk9TTZYw2XZsKKVG20Z6kmrRDBuJLHilIuRtPBokkyuACmDnJ/FJtyDNuccYOKgUSlpZtPcx2iDIOMmu2+BNHLX1vGsO0QerJH3GuXeE4Wu9VhhQbnftivVXhLQ4rKwRvLw7AcmuPzc9aR3/AMfxr/dkvp1kEDPKxLdT+amRCFTdgFjzimqxv5oA5XNSgUtGFAwBXDbs9D1SWgUW8pn7TR7ZsuRuzjrgUtIxjOfjFOFVBGeAO3ApWiWJaRMgqv8AahktwenzS/LK8pnnvW1TB+780tETQIRlpNzMfbinUUW37TxSliBIC/3o+0DAVeKMYiyZilwC2OgpYlBTkY/et7Q3GQBSP5StjGaZpiB41UrwM0ZYz1AxQoCQucY9qcqT71bFFUnRoxjIzWyAOAKUMt93asA3dAR+asorsGVBOMVm0k46U42ZIxitFDk0epOw3MfqGKIqAdTWzkdRWiSGAHQ9aCQbsWeTwazAHvWh7gUsDaMnk1YhDfJHHApJz070rLZ46Ugsc4FGwI2q9dwrTAY+3ms3HJyaVvGORU0w7G7L7jitIMcBcA04ADcYrCrEcACkcH9DdgSqASaWo45xS0RiORW/LGcMOaMYMVyEjGeBgVjBc9eaWsZ54rbIMU/QHbYAigsvWnW0CgvjPPAqtxLIsbMp4560No0GSQKO4VcljxQJJEZeCBVThZYpUNTI8heMDApDQg8HORRPNXcQOlYZ0QHIP5pOljuYAxhRnqfkU3cYB3Dg+1OHmyMKc5oDMDx0YdjU6DqdgVHHutEMYK5HQd60Dg7lx8itrIGyEPX+mmSJYhwfLCkj80xmRmypAPtUiVGCCMZ96bMpQkMRxRAVbWIdy7X4Udc9a4n49mNtLOU43rsPsa7xfIJdysOM9a4X9R7RYUuZJD6SPT+a0cSVZTHzYXiZwi7tWS4dx6kz1pixUEbTlTUhJOyStu6HjFAWG3nm2PKIiTxnpXp/o8g9Dba2cg5WnCLE8JO7EinhaRJAbeYhW3gHGR0NI+4liOfioKbZ2B5FZvJIyKwnHIOQaSfuBFQND+EhiN3XPSvaX0U8v/oXbSvbCOWPoR/VXi2wV57uOMd2AzXtn6aWVzo/h2GMMZ7d1DoQOnuKZKxJOkdMuLrzF3k8nt7U2tnzIS3SgTTeaAQpXPvRYAQm7FW9UkZu+w11NtjxmoGQtNcAAmj6ldbVxnFA0oi4nBJzWDNhrZ0cGddqY/SyYAMBmlFniONtWS2tAYhkdq0+l72yFrC4Nno8XLjFUyChkkkI6gUchi2Kl10zZ1UftQZbcIc4o9GWfPGbpCILf05xQLqxEucLUlakDFP1hRucVfj0Yc0v7KRc+GEuBkpnNMI/A8Svu8sV1KO2Q9RRxbR+wrox5Mor04OTFFys5h/0OT/9mKyuo/po/wDLWU/+XL+yv4YlG1O4DRHmqc940VwSp4p5d6gHQ+qq/PKTLXJxxKcmT7Js6i7p9xxQ7di1yHP96jITnAzUxZRF3H5q+MVF2J8jnos8EpW3FRWqzluB1qQ2OIxxjAqNngaaXAFZsu2es/F41FdmMLSEyzLkd6v2i2qoq8YqvW1kYlVsf6VZNNnAwpOMVVj9OpzcvaH6liVAEPeqzrnKtirPG4aOq5rIG05rV/4eTyfdkLpS/wAw/mrKAVjNQelBTIfzU9KQsOR7VMngmEYyuecdah7wGSNg/UDgGnM10ocqTTGcq4cqSWA4B6Vgd2dONUeQPrRoktrrv6t1LeY3ArjTws05ViIx3Neh/rHaXt5diZkO2NSSw6CvOt2T5zZJ/FdXC/1OblX7CZPLKFYhhQep703Gclj26URWIYcZXvQmzkg8c1cVINM6skZAAO3Bx3rLXc06qDgjoDQxzGB7Ue1UfqUIOTnpSSeh4q2do+k2jLLqP6mZOg4OO9ej7JSkQUkjA6Vxj6YISomjjAjVQMe5967RBKxALLwTXmeVJynR7LiLrj0S8ECmMS45p5j054pvBnyslvTRd3PFZjS2GRwSBjHxRlIALAjJ7U2VuQcfvWww35x060aEY5Zyq4yOe1D3bCOPUeopYxjLcn5oc0iRjdn1EUeovahwkm0bpTtHsK0ZHkYHOE9u9QbXe5y0spUL2NO7S5E8gCHC+/vTqLFckyVUqp3EEmiKDtLMcd+aEQqkKmCxHXNKQO0hzzinUBe9IOspGDtLD3pxGzMc02By+NwP7U6hh2+qSTmnUCtzDD+WMu3WnKgFelBURnhH3EdjRk359X9quUdFTdmxH/b4rNgHOaKORkjFYVDdRR6ldjUx7jnNb8kYp3sG0cZrW3jFDoH5GNhEMYrCmDTgrxSSp6VOoVIaFHJz0FbEZA+6nJQ44zSQlDoN2G4TJNL8s9qP5eBwK0g9RyKigTuDVMdv3pflk455om07+OlFwAftxVkYFbmwKqQORSTEd3B+aMSCa2StGhbYgDjHShOCenNGx37UGRiAduM0GGIDcoY5JGKBJcIARjdR2ljU+scmmjTQtkAhaWi1SAyszJnIzTKVNvr3ZHt2osjgDcSB2FMppNoz1X4NI4DdzTXCcDG0/FDnu1CYYMB71HNclpyqrkDoD1Nbe5ka3cMo+AaHQfuBnv1SXCykfJpUepRydHyw71X72aFSxuVMLnphuDVde7uba53Ws3mqe2eaHxC/Kzpm9WQkYwe9DXdEVbB2g9faq5o2vwXkRguH8qeM8huKsCzxs+N/B79qrlCi6M7H0j/ytw9QNMVkEhIycdxRyrJGcH5FMyVzvQ4bPqqtpllje6jJQhR1riH1bRY9MZmbLZ6V3OaTKlxkiuH/AFpVB4fE39bHGKfj/wD6or5T/wBLPOlx6pC2MU1DKGBfjNEdiybe9Axlh8V6lPR4xhxKwQoDle1Jj5lVSwXJ70M4HNbcE4LHtRsWhzIsIDA5LA8FehoH3Nk/2pOCBnnHxSl5YA9KjIWHwraRXXiaygMnpkkAI9q95eGrUWPhm1tByEXAYV4f+nmnve+L7ZEQkowbj817i0wT2+lxRyDIxx7iroLRRlY5I3SYPPzUlGn8kj3FMYkDMKlNm2GrWUIp+s7huC0Pw9K4n5PenepR+ZIwqLtZTaXIJBAzVeTcaJC1KzrOnOGiUZyfmpRNg61SNL1hGVV34qzQ3iyLwecVzZRcfTsQ/ZaJJkVlOKiryE4yKci5+cU3ubgY65pWzZhjKMkQ/ntDLgnjNStteK4GKrmozKCSDSLG/wBhwTVfY68+P3hZe45AQCSKKs69BVWGrKMKGp7a3fmMDmrlLRxsvH6uyw+ZWU1EnArKPYx0cFkmYjGaAzEtmlkAtzWlQs+BRWjhu2PbNC4BNWfSocuCe1ROnWpIAwetW2wsyuDg4pJSNnHw2x+LbemcUm304+aSVqVhULGARTyJE61WlZ34ZXjjRFz2gSMnHaoEXbQ3wTOBmrbe/wDCI+Ko18Nt0GPUGpGH7Cy5VR2XmxuQYclu1RWtzAxtimVpe7IB6qZaleCRTyMVpjDZysmRNWZpV1ifbnvVkll3W557VQ7CfF1171bIpS9uMc0cuMXBNMr95OVuiO2aeQEPFg857Uz1CBjcFsfNZBNtG05FZXjs1xyUyr/ULSrE+ErqNolMjDdkjmvDmq6bJBeSs4IUsdvFfRO6trfULJ4pVV/SfuFeYvrl4Xs9HsbaXT7LahJLOB1NW4n10DK09o87iTZGybQckc0KVvUWosqgKOx60EEOpU/3rVZQYgOOtGtQwu0PXmm68AgU9swAm4HMhbApWrDH09VfSuyQaKjN9xGcV1BU9AG3GK5F9IppDpYjeTc5APWuvxq/p5/JrzfIjWQ9jxpXjRIwOTCqdqMmJZCFPAoNtInlbQMnPJrF3CUmNjg9aoo0tjkNjOTjFDM6CTAYBzzmgTzRxodxOTxUTeapZafGBdTBSfbrRStlEpEzc6lBbp6pNzd8GqpqviN8ERssYHcnmq34j8YWMKlLNCzn+o1ULU3ev3JNzdyW8OeeMZHxWzHhTdsx5Mv0i+W+uwmYLcTGeRjwqnn96uNhcvKBmLYo/ornthDpelkLZjz26NI9Wq1v5DbBVlSNG6v1J+BVjiroSMn9l1tZ0Y7sgfANLnvwqEKwAH9I71RbvVUsECxTSSSH+k8GmMXiCRpd8jFl/qUdqKiO5Vs6LbXzTHcoEadKkVkUjLFmP5rm/wD0lUuqtNHbwjrjk1M2fibSvILRStMw/wAxxmm6id0XtZ39KxxKAOpzTuN1De7fmqB/0smmcJbQxqx6AvUlbaxqEsg863KY6lTwaGkC2/C5mXJAzj3+KKjL1zke9VxNQmVs3EYjTsc8mnsOqQSehJA7e2aSx1GyZEgYZHFZnPOTTNJ2cDIAPsKIJScjHSpaB1HRIJHYVo4HPNB34HB5NJaU885ouSIosX5nqxjNLBHXj8U3U4GSaUW7jmlUguIfIIyKFv2sRitBsD2ptJLtkHNRyDGDY9D9+lCaYltpODQWmKgEDIppPdKfUBgjr8UjmPHGPi5B5PXpSP1ChsHJz0qBfVWS68hjkOPSc0L/ABPBZJSVaM8j2FBTsdwLT5ihQQcg9Qaj7m+WInC9D2NV6XXQsskQlzg4yD0zVa1vxbFZhgk6vJ/lp1KyppRLXc63GGP83Z+TUNeauw9QIZT3Fca8Q+NL2OTdEp9VVe48eakEObgIR0UnFaI4ZSMs+RGJ3ybxMgjAEocqPfmoQ+K5FnMf3K1efJ/HN6Lku85Rj3HINSmn+LDcbP1LFR1yp5NWfA0VLkxZ3CbxLHHhjxxn5FMV8SR3c3qeSNM4JB61z218W6ajhZLdpT7k1Pr4g0aeDBtViyOCOpNJLHRbHIrLRcNYXkBVGaUjpuqpX9o0UheGRkdeQFOa2muwxyjyIgjjqQT6ql7fU1vPutFkHcA4NUeMv/ktFV/6Ryi5jFxgyx8E4wTVx0vxDHPKo8/hhyCe9MrvS9JlVpmtzDK3GGGR/eqlJYxW9yWR3hKHqucGo2mGMZRO62OoCWARuctj0/Na5EhyMZPWuYaFr1xBcxwyzedFnIYe1dGFxHcJHLE2Qe1Z5I0wlY4fnKHgDvXD/ra+3R41HPqxXcOGBJFcP+umV0m2XH3Of+VHjr/YheU/9TPNr/8AE46mhufLI560a4TZIKFIRIFft7V6M8kxIJZCK3g5XJpKEAnJwKMm0rhicHuagDAc5UHrSkXDcnNbDR7Rg8j4paAFgoXPOc03/AHXvonELXxetzcQb42XaGI4Feuo0ZlGOVPtXIPpB4ehl8MW8slgYXwHWUj7q7jbWYQK2f2rQtIyTtyNWlvgjcKfXCYi4o0EIPOOlEuVAj56UHIeMCpTwbpDkVX9WBiiLAYIq1TkBzVV16TbCRxVcZ3kSLHj/VldsvETQXojdsAH3rpOi6uLhV2tnPzXB75yLtivWrr4K1RxcJFI1dHkcXtDsjLxeV8c+jO4R7pUBHXFML7zUUnFSekOksQp3d2aupHGDXn3CrPSYuQrVnO7l5JHIYECmuDGMhqtd7YRoCSBVR1FvJLbaoSdna/zYRgCku5FcHfmrJot7u2ljVDa5Lv1/vUvpt55ODk5q3ro81n5vyTo6iLhcDkVlUj/ABxh3NZSbKe5Wk0uRh9poyaayMCVq+w6Yu3lK0+l7nACd6X5d6K1xdEbo2nbmUleKtcdmsUf21vTLLygPTipaWIeXx1p+vYvhUNFdnm8p8VkV4zHrit6hAd5NNY1CdeK2Y8aSKsmV2HvboeUTnNU6+n3T1NahN6GAPFVW4fMpJNGUUjPKbY4/Vsi7c/601mumkOM0BjnvSFU7jirscdmabY4tn2zAk96uOmnzIwPeqYo2nOKtOizA7RV+WP62DC6kSk1kHVsioG5tzFIfarsqK8efioDVLY8kCuX49nT9GlgiOuDwR7VXPqN4aj13QWiMCyMgOMj4qctZHhlwRgZqUuGjuLYRMeHPOKSXo8PKPnR4v0h9F8SXOnyxiMxnoOcVWkJikJwGyMYNd++tfgyaPXrrWYdzxl8AY5xXB7pCADt2gHB+K1QdoqY2AG8jp704RvLIxg1tTG5UEc/FbWFpJORtAHU01APQv0XmMsDK7njkGu+xYKgA9q83fR26CXAgQgKR3716KhJMYx7V5/mRqdnqeFO8aRIxbQrYG35FYCQc96yHlRx2701umlCuIztCj7jWE3MhNbv1glbLY2jpmqBezW9/cPc3l75MSA7R1JPap/XLq3NvLGWMkp7n/yqE0XTbGSUyXdtI4P+YZq+Femeaf0M9P8A8MDgW+lTahMx5kk4FWLyLxPXLDaW6MOEHLAVM/pNKgjRrUnceiIOBQ54r5mVbTTw8h/94w6VoU7KnBesjbW2mZN72v8AKX7Rxkn5pvJeS28okSFVKnqzjA/ajXwubABL+4QhufLRutRVxbRSxNLBDGQR1Jztq6Kspk+vg7mu7W5QyTTtLcMekWRVR1nWf0YaJEa3T3Y9aa6nqLQlke9KSLwAg4FU/UNWRjh91wT/AFPWuGNGLJlY+/6SXSsWhkaRAeQTijf9M5UlVFVgx754qkXF6sLs0T7t3UEdKYRtPcTDykY47GtDhFIyfJI69p3juUJtklAJOFz2q0aX47vRKEN15igd24FcKh9TLHLEY3HTIqy6PKYZiQjYA5Ud6y5II1Y8jPQlj4pmvUBa8GcYAYcVMwXIQrILjZKTn4rkemX8EgUMrx/noKs0Guyq6WIdCDypk/8AvWCaOnCVo7Fa6o4RDnfgdR1NS9tfGcltpAA71ybT9Q1WOdJZDvQn+g5xV8sr5bkBC43Y6jiqO2y/RY4r1XkK4AxRml6YFQkNwiXBRACfepSP7csRzUUmydUg5cjvzW1fnv8Aigg9cEEUORiuMA596LbJSYdpk37Qeabzzoi5JyKzeM5YHI701ndWQlR+1VybHUUgbXchc7HGAKY32oNBCJj6wOGwO1anIwwwV46ioS4uCkBLNlAOQaXY7oLfTQzRx3UT553AjtUJqusrl3U4bI3HPWmD6zBFcSW8RIULuGaqPiK6hGdkjPJKMBR0FWpGfJOkSw8TR4u2kLGR2yq44NUzW9Uit7kz3k3qcZVBztphqV21rpwjLDe3Vgelc+v7uX9QW84yt25rZjh/ZgyZG/CV1HU7uYO8kvljtnvVIu72eabhjuzyT3qZnN3NEr7WcnqDTAaHqd22Y7Zmz02jpW+GSMfs584Sn4hkrurK7yLhfYZqRj1MSSrEv8pAPuxip/S/pzr16ytHAUQ+4qwx/R7XiCJGEanuV5NWPkQYq42QpuZp+VvVB7GpbRrdbq5WCbWVjOecmrjYfSm3tQBfvL+QOKsdt9PNJttskOl+afeQ8n+1UTywa0aoYJoZWfh25jhV4NYt5vhm6CrLZ6ZqccQSA2jlhyS2KfWWjwpH5SaFHFt7k8GpCLRLmWVVfyY4+gAOMVgnNM6WPHSA2Ojaup/mvCyZ6bwRTy70aBFPnWCs5HVDxUvb+ErdYlkW59Y5O1utSQsZokG5VRPc81llI0pHMZtG00AuI5rNgevbNOtOuri2kCeYJrcdCvWrjqdks9uxaTAHT09arVvpkSzHCOuT+1RO9AaLVAxltA/TPcVxH66Sg2FlHwpDE12zT4mhtjHKenQGuGfXzcH08DlTmtPHX7oy8qX+pnn66O+E4UblOSfemi7BEwbk9vinEwYBsHkU3QxmVTICPfFd48wYEUJnaeaWQ7w7AOFp1LbOcLEpI68UM21xvC7GX4I60Oy8G6v2gEaOZFiQbnY4AAzXbPpp9HdR8SSw6hexmK3DAMCOarngTwB4m1HUbfV7DTvOSB8kOvB+K9v+BoJ7TTYIbzT/ANNMU9QVcDNBuhR9ofh+10rRoLCKMKsSBVIHtT6SJY1AzkipG6kVEOCKg3uPMmCDmmjJv0rmiTtsEcHig32SvFO7OH0A1l3ECMf8qEpDwiU+dWZzVO8RyeXC+a6PJaY3PiuceMY9sb4HNWcOPbLsblTUMWjmUpEszZ55qT0e5e0vY3DYGajVRt5O3nNGiSQPnpXrZQXWjyinb7I754Z1kSQpl81eFulkiB3cV5+8P6rJaFVdjjNX+38Sjysb68zy+M4ttHo+LyFKNFn1eZPLYg1zTV5yZGAbvUtqGu+ahG6qldXPmTEk9TXJjFp7Ls+b6TExviTJNOo53zxkU3jQNjFOVVVWrTn2G/UN/m/1rKbbuaypRLO7xwk9qdJbA9Vp0kQFF2gCqIYqOvLI2BiiWNelJklUAgkUm5l8tCScYFVW71kLcFdwrTGOyiUq2yWvArAkc1A3c/lg80VNREoHOajdQcODg1p0kZZSsjrq6DA8moSZsuaNcGRZMHpQSu7mqpOyLYPBbtRFQjnFFCALmkEkHArRiRVMw8ADrUxpMxjcDpUMoJbmn1s5jcZrTJWqKY+nQLOcSR9etbubcSAnFROlTZUc1YNw8rJrj5v1Z2cT7Iq13Z7ZMqKLa27kjsBTy7Zd2cVu2kQ4B71nU0y5woqXivQba40+cXGni6jYE9M814V8baO2keKbq3eDyomO5Vr6VLFHLEVfBBHevMf8RXgnTZYRrFtLFBcxIdyZHqFWxnTFcLVnkZkxnAwBShMzhOAMe1OFCtayDcMjtTWLEYHdia2J2UHY/pjPHb6lEqyDL8Yr0xpy7kUseoryB4ALQ+JLVppCik9K9g6cAYIWPZRXE58f2PR/jm+pJKMKOOlR2oNHJE0crFFxzt6mnpbk5BPxTOaQYJEQJ+RXLOm9las9HguLvMRHB4MgJq3RWE8EH/Cicj/KorLS2hlUGSEj8cVKpEka5jY49jUIQ08doArSwGGT328VA3tleyyt+jlfa3cNVzupk8oieNHXtUPMLNDuS3Pq64erY5K0K8dnPbrRJreYtOstw55JbBFOIbC0Mex7GRGPcHAq3xXcBk2NbqyDoJDTw3lhFy0EK/BNaI56RS8FnNrvwgs0wkjto5N3VT2oUXgaymzHd6cy5/yjOK6e+s6KQFMSu/sgpUdxIUL2dg7D5q5ZpPxFfwRX8jkd99FtNuctDLIhPOKhpPo29sSU1Aow6DbXcZb3VfIyttHGDx6jgg1WLo6/NOxjCD9sillkykjgxP7OSXXgi/sztnSOZR9rqOaj/wDA5recPA25h17Yq/6uviy3lMjLE8Y7Y61FLdRNIGvbZkkPXHTNK8kq2P8A40PorvkTB/sfcepXpUlCJJIwk8J3r9rA4NWKL9G5VVIGT0NSaWUJYHy1YDuKreR/Y0cFeMa6LqF7ZqEVmcDja1XrTNQMi+aYjFL7VARWihwVi7cVKWcdwMZ4A9qocr2WdKLHYXs7SuxGcHg461Z7W9aXau3nHOap0BlOPWykf5RVn09C0e5927saMAtE2o3LkYFDZXyQGFEijJQe9bePjLDHetHUqT2Rzhwu6bLZPAFIcPtO0DHz1qT2AjO3PtTWdSAWI5xVbjQ6dkPPvX0ou8kdKqeqSOHaJ1AUjn2FWe9fD7nbbgZwKrd0yylg2CjDFVSkhurZR7z9PFIZo90rA4wPaq5fJqM9w3kQek9Ce1dAa1iXcqxgqKQtoCxVQAKCyO9E+FP05VceE769ZWubs4zyBWv+h+n2jepDI3ua6LexxQttLg56YotjpUUuJ7kEr2B71fGUpCPDCJR7Twy0rLsgxGe2KvukeHrSyhVmsxkjqQKnfKiEapHGFI7YoUssFq4kv76OGP8Ayluas6tkSgvR7bva2qLtsn/KrxT0avZv6XjcHv6apereO9H0/T5o4ZjNMPsA6Gm2i/UjQTaE6xH5Uh6FTkGmWGTEefGi+SR6bMpZmIz0zQmtbR4sW86Zx/ScVFJ428HXiqtveqquP6+1JR9Mvjus7hXyf6TSThKA+PLGYf8AQeW+93L/AP8Af1pxGIo2ARQSeoJqHv8ATbqJPMtp2jI7E5qKg1W/0+5CahHvRukq1mk5fZckjo1ukHDn0nuAacuVYBItxPyeKr1tepIiyEEgjIINS9veADAFUOQ7iPjCShOFbtyOlRU1rGrEu4z7YqQSZnfpwfatTxIVzt9VWRkrKZJjFARHjdvA71wn69ws1lYSKOjkZru6W/rJyy1yn63WjP4TV0UHynyeK34Gu6MPIV42eXrhUNuHUfzF4Ye9NLdBcyhQuCew704ZjsZP83vUx4Q0ue61xNsZdUIJx+a7OSajGzgYsbnOkdO+n/0/lvY0nubc7HGfUM11Vfpfosm3zrZS4GcqAKtHg6xdNKiKooXbzx04qxvIkbYjGX715+XIk52esjxYLH0SJPwP4YtNF0zFuFMbc7SOhq0yXHlDaygD4FQ+gTsbWUZIGc4rV/dndjPavQYLyRUjyXLSwzcUKvb4kYDCgWQLyhjyKipJDI9S9g4VQK0ONKjnqfZliiYJHTeSTLcmhrN6etIJVjyaoaNPajU5UQEgdq5j4vAaNsc10e9kVbYge1c08RlnDYFdHgxSnZi5km8dFGgtg7dKeCwYkACndhbiRueKs9pp4ZAMV3OTyFiVnI4vHlkdIgLHTmb+k1YYNHlKgrmp6w0tBj01ZbXT0C9K8nyvyDm2onqOPwVBWyhy6HKY8kGoa60uSAkkHiuynTozH9vFQGraSrKxCCsUMr+wZ+On4czhUqRxRm3dql301o5DlTis/RAjgGtKd7Ob0a0QGWzWVPf4X8VlEnRneMCt1oZ61v5pjpEfqKExMB7VzHVYZY7tiScGurXKgoSao2swI0pPelunopyK0V62uHTAbNO3uFccmmVxCV5UUz3OjHNN2ZlD3ChySKa7SG6UcEtg1oj1UtssijBgpQiOelHCE9KwpW7EtFWQRCpJxinYjxWoY+acFefitJStEppb4YDNWBpT5Q5xUDpkJ3g9qnzBmH9q5HLX9HV4vhB30rE8VGjUTbv6ugqYuoAOoqt6lGCCK5MbTN8yUu/EMsdli2+5h19q4B9R4ptZaWKZ3lJ53E8CuwiEiz5bAFUXUvD669qEgSYhBwQvasU87+T09HxeLF4U69PIOuacum3zwiRXA7r0FRsTjevp3ZNd4+oP0ue1j/VWkRZCOcdc1yC50OfTJ0FwQrkZC13eNyFNKjzvL40sc3rRY/A8fm+J7d2GAHAGa9h6ZGf08Z77RXlf6X6S03iaG6uSPJB4Hua9a2ICwIwHAHFYua7kdH8eqgxy0bRhWYAbqBJGPMHY/inLhpVGSDzxWSQOShVsY6g1y2dY3CzAcYJrJpwDhiBx2pQUqMgYpjdPGWPHqqtsMUNrm62jaW3KagNT1SK2tmJBBA9OOtP7uSGNwDzxVZ1Se3Rt8wzgZAoR2y4a2i395J+ouJGijPITvipyKK0VQ0hUqvUua53rXjmLSrYsuGboBVFHibxX4uvxY6dE6iRtq7cit2PBKWzFl5MYaR2PU/qB4b0CQqds0g6BRVT1D+IS4tGeO0sjEh6Z6mp3wj9EQ0ovtfna6lI3GM9M+1cl8d6CZfGd9bQ2ywpA21VUV1MWOMdHIy55zeiRvfrBrWoKLuW5Ozd6Yk4IptZfVzWlu1EckgQdieKHa6L9PbfwRE2t31xb6ybrDrGM/wAr3FUrTNct9B8QXr6dDHe2jboo/wBSmTtPfHY1v+CLVmF8mUXR2PT/AK229xMtrrNspwcFsCrp/iHhnX4VmtGRC44XvXAtSs9E1O6tZtDtpYxtXzVk/wA/fHxXovS/pPBe+ELTUbENa3jQh/QeM1zs2FO+p08PIkq7FL1fSLm1kEtsx2+4ouj6lcKRFJIWK9Sak7mLVNHH6bVIzIFO0nHagvpsNxEL6wYenquea5cm1+skdlRtdolmtbsGNe5NSNteYO0DfzUXoFlLewDYjZHUVYo9PaEhHXmqZKhrJayuIvKHAy3+lWW1ZSgCkZqtW1rlRxU7ZQLGwbcfxQjKnQko34T0O7ABPB9qOwQL1NN0YYAFLOef/OtsZWjK1s2SgU45WmExVlODg/NOwQQVwaZXaDaTkiq5y0WQWyEu4VY5Ztx6VDz2yRqT5eAOlTUz4XLe9R9z64nZumOBWBytmtKiuXOxQQCATzUVczGJGIznHapSSMyuVPQ9KbXlj5UILkFm4VRzVsVZH4V+xt3ur/zpvVtPCmp+5ntrSMS3MmxUHpWmUt7BpcaW0Ufm3cnHAzgmnFl4M1bxFej/ABDNvETyPitsE3+sTPNqK7Mq+o+LNTnhmGh2MkyoCWfHArkS33jHxh4li062VpZ52KJEDjJr2pL4J0zTPB15Z6fbhJHiILAck4rxpNNf6Fr0slncNbXttIdjLwVOa6cMSx12ONPM8raiVXW9A8T6Ehm1qOWOMzGEOW43A4IqWv8Aw3+r8P2tz4d1d9UMMPnXkYUr+mPtz1qsa5qOtX92yX9zJcK0hkO5sjJ6mnWkrfRK6wSyRrKNrqjEbh81ul8SjaObH5XKmPvCmkXOr+IIdLe7aLzjtVj2NdG1Dw7488BsXUtc2q+pWTnIpH0s8OT6j4ytZooiUtzuc4716qu9KjuLNlkiD+4Ze1YZdWto341JOkzzDpn1YLypDqSNGeh3VbovFGlapEI1YMr9QT0pj42+n2h3eo77NBbTFvW6/bXO38P6tomrGK0U3UAOAyGsMseOV0zoxeWH80ds09jCn/Vpt8R/pY9KsNpMxALjGfauaaO1/LGihHhZRyHNX/TY7pY1LYYH5rmTjTOlHasssEigDGaeqqk85JPuaa2FuzKpk6e1SIBBPApUtlcgTKpzniue/U3TWv8AwdfRoCzBCw/auhODuJJ69qiNWtRc2M0HBDoQB+1bsTpoyZFcWjwvDYh7pYmX1F8V6d+n/wBO7Cx0WG/lQNJMAzfFch0/w3JL45ksZ4iEjnwzAdBmvU+jaMbTTbfTrZiURR6j7VfzMraUUZ+DgSfZjPU9Wj8P6cqxR5d+MDt81K6Tc29/YxzD72GTUb4j0dnXA9e0c5rXhiErEIx2rkTtSo9PDHF4uy9LvprrFbyAe9R97NmXrREYxIwHvUfM5aXFe34MP9SPmX5Sf++QeLGORTy3Z93BwKZIcIPen1sA2OxrZKFnMjKh4JWUeo0GS/VOM1k6YTrzUFPv83aDWaWNGhZGyY/UG4Q45FQeo6W1yp9Jqf0639Azyal/0SlOV5rJ/lPFLRujx/kjs5zZaFJHNyOKtVppgUcrUwligfO2nywqq8AZqnk86WVF/G40cQwtbYKQCtTlvEg7VHghCTTmG4561z4V9mudkjhcYxTS6tVlHSipNuOKcAbhWhU/DK7RV7rSlO704qKGmhH6VepYlK8ioqa29Z4praQnRSZX/wBCPYf2rKmfINZSd2N8SLgvStMeDWxWm6Gt5SRWo3qwo244wKo91qK3E5AarLrsLvA+3riqHFDJHcEMDnNIvSjI2iSMRkTOM1Hz2x3ZxUtHIEj54pnPKrtwaJSRjKVPNbQZajSrlaTCnOKC9GiHSPgYFKaNVyaLjaozTS7m2L1rpYVaory6N+eid8USO5jkkVQ2arVxf7c5NN7TWFW6ClhW5YW0YvkSZ1jTIgcHA5qbYAR4x2qsaBerLGpBq0SMDDuHtXD5CpuztYNpMrOr3HlE84qqXc/mA5OasGuZYn3quiIuQOtcxxNLbug3ku+nnjjFI0DRoUklnIwxJ5qcSDZpGSO1b0tNunvITgkkVypQXytns8GWuMReoWVndWzRzRqV6EEV5h+rvhGSy1g31tGothGDkdq9e3GmrNZNKg9ajp71zfxb4fTVtNuLaWIOrKRyOlNim8M02Zc0Y5sbRwP6T2lxN4ggZzmFBkL/AOdenbVCGAP2Y4FcX+lejtbareGQYWFiiGu4RICqr3B61r5M+7tGTiw6RoLAoLFF7GncsJ2KMdKCgRJsp1NO1Lvu3d+lc9nQGk0e2PaO9Ql1HJ6iVPTrVoZFCgHniou6gdpCV4Wq2h4Mpl1BdSFvKjLAD2qh+IrPV8stvbszHsTmu0i0whyP7VF3dhB5hZY8se9PFqOx5rto8+2ngxruUza5MzuT6Il4Arsn078O6dpzIslnHCFPodRzWrqwUSKiwB27kjpUjZwajGgW1GPdjwBWvHnk2U/BDrTOuW9rbJB/LUYx1BrzD9aPC+oaZ4jk1y0hJtZ/vIHQ11uPXdZsikKo87d9tONX1SDU9Jay1rT/ADY5FwQw5res8WqZy5cOUXaZ4f1qIXgDhSSO/tUNa2Ae6xnPvXpe6+lek3ElzLb3T20RBKoy55qs6Z9FpX1BZJdRLR5yVVccU6z9VSZU+I5SuiteCfD1zrPiSysLOMuC4LlegGe9e6bGC00jQ4YJJURY4wvJrinhbwnH4dkePRyI5SeZH6mrbeWeoSw7bm7J45yaq/yFFUkX/wCH2at0I15NI1S6mEU1u0qgnaxHNUu10PTbKN7yW/jhViWEatn/AEqXfw1YtMJGuCWPXBp0nh7SIkGB5p+elYpz7u6OrBRxR6pjnw2kFyq3FmBGW4PGA1Sd7EqyZ3DPfFM022iKlpH5SjpijfzpCpf1VROyte2ObUEruHHxUjBIFwNv70zgXEfq4NHt2YNgLkVRdssiiYiIPOaMDnvTSNTtBp0oGOa1Rb8KJpJmt6qCAaaXJ9HWjsozTa46fbSzutjY0rIa4G5fT+9MpgWhIZulS8kahTx1qLuoyA1ZGjVWiFhjjkmMbcA96HqFvHaxNKreYyj098VuZXR/T3ocis5VZidpqyNCNMplteLNqDNdadJvDf8AEXqfY1eLTxjcWqwxw2Mrog5L9aXbJZIrK0Khh3xT8XVmhAFrE/wODWyE5Q8K5VNVJFntfHVrNY7bizdcjnIriX1G8FaX4h1E6p4czDcyf8SNhgE11VLnTZItpgVG9qIi2H6dx+n+7PatC5EnpuzI+LBfxVHi3VPDms2N68MmmSMY2wdq5FT+h+D9fufJYac8EM5xvcY216ZuLS0ltZNlgDIBkHHNL0+IXNiAth5csZON/cUyy36Vvj0xv4E0bRfBmjAA+feSDc746mpm88T3NyjpHbsF9wKLa2EdxDsuIBG4/qXvSZdIUHAmdQvPHehPJJr/AIXYsME/NlCu45Jp5GuISiseuODTW002MXH/AA8KejVeL22Xy9hQPjvUfDaouQFzmufKdeGyr9G1vpMEgBbGfepePT1iCmM8ClQx8D04xT+IFh7VWp36M9IcWse3GccUaRMsCvSgDKYOeKcR4ZTuOKYpkAZQCc4zQWjUpkgA06lA3ZxjFNnGQTnj2q+DK2r0c90fQrWL6halNNECXw6gjg11/TIIY7Ldgbjx+Kp1vaoviWKV+POQgn2wausCJHHtRsilb/a2Il+tIYX9qsu/I6ioDQbYLcSAjo1We8DeSxU9qgNDEq3k27s3Oarq2jo4ptY2PZ1Ch8Goot/OqSuySXOOM1EA/wAwnPGa91wo1iifMvyUrzyHu/04704gm+aYKdzU4hGCD2ra0c+LJR33R9e1MY4TLMTjPNFB3kKvepjT7LLAkVz88qRtwx7MNYWzIoyO1SJG0gU5WAIuQKbSE7s157L6d/HpGwM8ihkndzRFY4FKZAQDVHo9jNo92aVDEaexxA80VYgDxVkcYrmDhjO7NSCDC80ONADRce5rXCNIzzdmyBtptLECeKcblHBpBIpmhYumM/KNZRyeayq+qLexKjBreOMUKOVXXqKJWxOzK1Xoxu7cSA5FVm50qMyllHNW2dgoyahLiZC+OOtS0g/E5rSK3eWjKhAH+lV5ldZCDnrV+lRJIjxzUBcWaKzHApn4Y5wcXshgCVwRRYU9Vbkh2niiW6kKarGgIuGCqar97OXzg1L6k+1W/FVaSYNJ1rs8aOrKMrt0MrqNipJqtXEjwXSsnXNW6dQ0VVDUY2/VBRnrXUwyu0Yc0KVnVPBl68kceW6100Pm2A+K5L4OheKKMn810r9SFtufavN/kJJTdHb4UX0VkZqihlbjpUBGAslSF/fLuOSKYxsJDuFcvq6s12u1ErfzbNE4HUUnRS01kuRWSwtNpAB6HipHTbdYLZFUcAVyZpvIeshNR46Q5Z3jiIFV67tzJHJHKuNwODVlm+3iq9rN+YYcmInb3FU5VTExW/Ec18J6d+k1TVE2bY1nIU+/vV8jZRyCKqvh9jJfXspY4aUkA1Z0ZAduOascrQYqm0OeAQ4GSafI2I/VwTUfG/Pp5+KedgDzmqywKBls55oU6nHC5pygxGAoyaBNv3FV4z1NKyL0i5nbGAeemKbeUxJ4JqTeFA2S2cUpY0xwvaloe6IhbFC24qcdzUjFFGI8YzTxIYtpHGTQvL2nAPFWxTQbsTaWo3+Y0m0n2FNpNKuL3UP1M12Qi8KF9qebCOj0lllUgCQir1korcLI3VtOu3iREnEalhnAHSmyaasNxuMxU46rxUtMrudrOSKVDZAncELEd2oPI34MopEeypCdyes+9NLyWdxtZmIP9I71OS2kztiUqq9toraWUSnIAbHekptjdkisCyuHxnMa56A9afpB5a4YEDFTDwAscAKO/FajtxK3A4FPqIjbl6NIoiwACcds05MWMHgEU7MIVQn2kUF2CHBOSaolJ2FI0NoQkryO9ObVAecU3CksFQZzUhCgQChFbHlpUOIw2PYUtVKnJY1uN8enFbKjdnNakl6ZG97Nb1JIFCnQFcE5o4VQfuyaTMNy4NSStEi96I1kBU1GXKbTz0HNSjggkCmk8eRnFZJKzamQsscbk4SmskIB3EcipSSJQOlISMHIYZNVeD1ZD+SXLZTB7GiCxWQfbhgOtTH6UnBXilLH5bgMv71phK1TKZKvCHWzljGCdw6806gM0Y25PPvUuIkPYdOtKWJW4cDNO4f0Mpf2M43LD/h8jqRTmElVwDxRv00SNgrt/FK/Sqzgo5AFKoteCumJ3zggq4wO2KHLI7Hk9qera56PShbhWxjdQakxLSIVozJn0nNbFsApBXFSxgCknnmhmEnJHNK4JB7WR6wADinEcRXIPSiGIAjtRUiY+oNx7UKINmhwK2oK43U8cKAN3FAlBIyOR8URbEHLk7j0prKQXAHtTlTlMEf3plMcvgHFWwK2I2K9zG3dTgVYbchUwTn5quqcSp3PvUl5zIAM8+1CS2PBWiVfJjPp4qNjCw3UzAcGpGyLTwtu7VF3LrHLKPcVZCH7IWU+kZIZ3MoKHnrUPkbzg06nmQjrTMbWbg55r6Bgx9caR8w5WTvlbHcPvmnkeVHTNBhT+XgDtR4lLSBACKk9CRJbTbbzmDY6mrba24RAMVG6Ra7Y19/mrBsCoMVxuRO/Ds4I0htK4XimrLuFEuAd3ApqGIOCK4uS7OpDwWq4NHUZHNIQ5rHlVB1oRQWwwGPiiI6+/aoae/CE5bimf+MLv27q0pGWUy0+aAMim8txgkioiK/80gdqeKrPj2ouVAuxyk27tTkEbaDDDg9acYUKaKZErY1L8msrC4yfTWUOxd1GOn6ssgAzk1YoZQ6ZrlNlcvBIvXFXGz1dQijdRx5Tsczg1uJN38oWM/iqHfanJHe7ATirJd3ySIcGqrdQLLcFu5oSk29A4mGKVTRKWt8ZUHUUufcy5xxWadZnZwKlDZgpyOa1Y3rZx+bjj3/UrckJY8DNKSApGc1YBZKRkChXNsqQHihL0xwhRQ9bfZG2PaqE15tnIz3q7+IjtR8VzS8do59w716fh41KGzlcifWWizJOJI8UzSxF3fjA6GoqC/HTdjjvVn8NjzrneRnmnyQ+KLoSOT5GkXnQ7DybdMDoKeandtbQlc81I6dGotwTVZ8SylQxBryORvJmpnok1jxFavNUZp8Z71L6XdNLtzzVHkmLXJye9WvQZFJUZ5ro5eOo47OVjzuWUvKOf8PAC9GxUtBEVtQ/TioGCTP8snjcKnJ5vJgVA3UV5mSqbbPbxblCKQB5TvIz0qB1hw0ZTbkmnkl0pkOOvegtE0xDlfTWOa7G/HHptlS06yNlcS+8jbsVNR7VcZ60O9CrqJQjGAKUQoO7cCMVHpIS7bYdSN4I608iO1uTkmo+FhnGfVT6PeBkkEmlCOwQD6eaGyHeWLYz0pYTv0/86xUDZOf71AoSIkK4oghGOTtoiLsXGMmlYB61KIwaog4xmlGANwDitlSThFxRUXb95yasQrYJLWMdiT80swRjqmaNwawsB1FWpIS2AECKeFGKVsAXArC5Y4pLRsWyWwKIRBRW57e1IkAQgIOKPt2nC81oQZfcxzQYRssBkYkk/g06EccagD98UUKoHNIWJACeaWgWN5EUnIpo6ruIIzT2Xk+kcU1K7XJaqJel8XoVGBtAUc0dcgEnihFiAAoxS4ySPV0FFAkrHceABzzRzyuaaxsA2SKPuJBzjFaIvRnknZrkHJFIkfK8Hml4z0NNZWZW5pZDRVsG/emrnGMniiu4EgOeDQpGUk54NUM0DOQhj6RQxxJ0o5wTgAfmhlPVnvVbRamPVMZUY4BpbwxuuSc02j9Cjf0Y0/hUhPVx7U0RJMaqgQ4HIo2Mr9v7inHH24oTwv8A0MRirU2isUdrKFIOaxVwCAf71kW443jkUQgCTOOabsL4LjUAeo0XCqPzQlI64peSVyMU/YraMbbj59jQvKxk+9HCcEk9azbzikasidDYxqw+a2sK7eSVp3sx25rTI3fpQ6k7jNkIJyOKASqg54FP5dijJ6U0lEfA7GlaCnYxlJVyV6GmswU4PSn0wUN6eaj5SSxA7U8RWNvV+pjGcDNGkvALsxhsg0GF/wDrSA4696g726C6g/J68U+SVIv4qcm0XfS7wrIUJ/HzTPV2xI7cDimOkTGXaeh96L4gYrbswPRCafiy7ZIr/pTzodMcmv6KrLqIDld3enFjcq754qk/rWe5J3d6m7C7wwwa+pfElBHxt5X8jsvcDgjAqb06yLuHx1qq6VMZpgOvNdJ0qACNTtrjcp9DscWPfZKWVvsQcdKesM8VtE2p0xSehJzXDbvbOzX9DeWLcSaZPD6qkWdRxxTZzkHFZpqJdGTI6eUQoe1RE1/nIByafX6HDdelQIjYS57VRFEnLQK6lkfJzTKFJJJepqTeJT1pdtCqsDtq+9Gb7JTTLT0BmqdRVA4qLt51jUdM0+SUsM1X/wClyHykAZrbt6elBjJ6mhTz4BGRUctF0I29Aiw3GspkZjk81lU9zd1RRGkBXKHmgtqM0XKnpTK2uAw5Ipc+0gnIq5xR6aKb1Ifx62zAKzU8hvg8inPFU2SQK+RxT/TZmlnVQeM00KsbLxko9jqOmyhkBFTOQ2MioDSQqxqDU8hFbI+HieS/9jQvYvtmgXcQMBGOtHdwoBobOr+nrVMpbEjF1ZzDxTbsA+BxXLL8Z3Butegda0xbiNvT1rmV/wCFne5wF4r0vB5EVBJnE5mGTlo51Z2lxPdKiA4zycV1rw3pDwxIxU9KJo3hRInDMgq/WempDEABjFJzebFrrEnE4ri+0hiX/TWxqj67e+YGBNXTW/5cLYOBXKNauys5UciuNxMfyZLOhy8nWFEW/wDxSan9FnKSjBqtiZWbrU1o7YnBIyK7OdJRpnFwy/e0dDs3LsHb/N0qS1CTEYPPTrUTpjq8JPcHNSl8rTWWVrwvL/WTo+mcF3CDZXpb50mwCOasVlcpPaooA3d6ompvJESScYp54b1gLN5bEHNYsWT/AOTs8jEnHtEf6xmPWeRlSvWkxbSfVS9cxJqKNngr1oYZQoz+OKta0cuLd7HUfljJXrTpGdmG0CmkLhkG0ZIp7Cq7xzzSFg9jJZdpXJoxi3AAjA96Qg2rleppwjcerGaKFZry8Yx0FIbOeOlHBLcDj5rBFk81aoiqVeiV5XGKxY+uRRQoU/FbVlcZHbinSQjkIIbjHShSAjnNOW2464oW4f5c0zQYsFh2IwKWsZ/q4reX6AURATwaHULYMrg8Vra56GnKoM5IrZwDnjFMoidwIQ7RuFL2YXO3is3ZbGaUWyhX3o0C2MZV5yOlNmVQpYHmnjgBS2RUa8uWIrJPTNUNozzSenbrRFJJGTmghlAweppzHjbkUEOxe7A4NEV+nJNJC9sUVUAXmrIplcmhYLEc4AoTx5BbrSxnPB4rGUgd6doTxjF0z9wxQWRVBDGncnJJHWmTbySuMiqmqNC2CZBjODj4rSZPprTyFfTg4oAkK+oZNVtBVkhEP8y5x0pxjdjJxQYHDquMA072hgFP96kRGzQB/prYDbsg0tAMFR1FbCEdO9W0LZiZ5BXHzW2HNKx6cE0JQQxycioIt7NrgPjbTlFDDkUgLlc8UsKfc4p4qhJMWI8jHNK24GQOa2Fbrg5rTMR91WVqyq7Nk4jLAc+1CRy8eXUqfalq28YBrZ9OeKWiIbSDkNgfNMpl5ypx8U9nYKmOx701fY6fd0qqRdEZuSFbK4qNmOVznFSE7ZyQeAKinJ3N6aCC0MLyUw28ky8Mozmqfb3jX12FVs81ab4hoZEkztYYNC0bSrOICaKKhmt0jTxJqCbZPaJayKFYrxW9fZWs7kn7VQipUzrb2I2KATwKhNdYr4duWIBdkNbOJDrlj/6ZOZkc8cmcWjLNcuVORk4qatJGTBqHsCRMd3uamwAE4NfV7/RWfGpK5v8A9L54VXzpFauvacoES/Arkng3AVe5rr1jxCD8V5TnzqTR6Xgw/Sx87gd+KZy3AHQ0qUsRgU1EbE8ivP5JvxHWSX2Ce4dmxR48keqtfpwvJBzQJZxGp5xSRjJvYsnQ3vdoDE1Wbi7VZSBTzVNQAVlDZqsB3lnya2KCRlnMnLeTzWFPx6V6UysVC4GMmphFDekjJqqWgx2hpAJWkHtmrBaREqM0G3tBkHFPhthTOar9NMUblcRIelQNzeAy4z1ND1fVUiBy1V21vv1d1kNnmkmnR0MEEyyZPvWVsL6RzWVl2a6ORwTlTgGnzOzR4FRIZVwe9StpIrEZPFbV+3h7DKowVjGW3lY5xUhpcTRShjUgyxuo4FbjULxxVsYUcvLzOy6lu028VEGTVhtpxIMg1zqG5ZHAzVw0uYtED8VpUv1PN8rEm7Ja5mwhI7UxtrsvPit3T4jbmmmnDMrN81z5SfcWEEoFhKrJHhhUfNZRO+do/tTiSYRx5ziomXVkD7d1dCEpKOjlZa7bHwjihXOOlIfUEjU+qoi61RfLOG5qpX2umIsC1SMXkZVPKoKyV8QaqjQuA3IrkmpXZluH571IavrLTFsMeagIXMs2W5r0HD4vxrszicvkfI6QqMtnHNT+m3BVgKZpagjdxRo42SQYqzOlLRThuLOjaJKJVIRuTVjtJV3/AKebmqP4bmZLgexFW9hlxIv3fFeF5sHjyn0r8dNZOOhpr2lW8ylRwW6VzHULSbRLvz4rg4U5xXZ2gFxDl+vzVP8AEHh5rtWVY8g1yMsXF9onb4+W10kyCsdd/wAXs47jqV9B/apqAkqGPbkVXdK0h9HilgIwGfIqftjuGM8VoTco2Y50sjSJO0PqY4x7VKQrtTkDJ71EWpKyBh06VMRMOmDzSDDtOnXpR15OSMe1Nhg4GacqwC80yFkFHxS844PNB3jqOKVnuKti6KqA3LkMAp20u33FOSPmsMQlb180cIqABR0opWxnJdaNEJnqc1og9FFGxxnGa106DmrqKrEDHcdKSSc8UUIzAg9+1bWEDGeBUpg7JGlOUwD+a2Ao6ZNKIVAQtJBYL70wvooRrjNDcqDmsJY9DigsNoyz0JDRT+xlfzgRkjjNQolIl6061GZWby4zkCmUagNlqwzVvZvgqQ73AvnpT2M4AIphGA5DDke1OYpAX2AHNHwNEgg3DNOAFx3JoEbFBjFOAn9RrTHZmmaCDPSkyDPGaNnjGM0N1zk0zQiexs+AeKaS7VY7gadsuDlefim025uGTjFZ5GiJE3Em1iOoNNXkKjBI5pxOpJ2qKbyW/GWO0gd6rtFyQ4srsG4CHpirDBKjqBtORVMUyQzrJnKg8kVYrSctGGLdfaimVTiTQwM8VgC9T0oMcgZBkZpwPUo9ORWiOzM1QNsdQMisCgnjpRR0I21oIo7bTU6E7GgQOP8ASl4y3BwKSFHQkZogXOAAKehWxQLIcA5PsaSfU2DjNb2eo88VhUA1GhECdT/ScYrGfjHBrT+k5HOaCevWqnKi1KzJNuCh5FNHAC7CP3o+7APIzTaUk5DEbRVLLUqGU4GSCeMVHyr6uDUhIu7k4x2phM6h8UYgkRUsTXF15RI9XFWjTtLW1twH6ntVdtvVqiuP6TVrR3baW5AqySTasGNvrSE3NkkjLtJAHNQHiKGQ6VNEnB24yauHlq5V89qiNeiD6dIoGWIwK2cZpZYtmTkt/DJHn4q1tKys2eTTiO85C5zT3WtGulkLrESPgVXo4Z45wJUZQDX09ZIyjpnyiWOXd2jtfgmDdEkpPWuu2SHyR+K4/wCBZy0MagZFdksTmMDGOK8jzdzZ6jirrjVBDHnrS1hxjijY/elA47Vz/jRqcmM50Cxn3xVP1q6MWQp61c7sjyzVC11QZTTJJFU/CEctN16miQWp3ZK04toQ7KKnLfT9w+2hJlMY2M7aMgDAqbsoDu3EVkGnsrDjipaGHYOmKzu2aopGBdidO1V3WNTFvG+CKldSuvJTAPNc88Q3jSQuBzRhjc5JF0pKEbKl4j8RP5xUP1NOfCl+00oyc5NVLUrZ5ZS7CpDwxK1tdBSe4rq5uKvj0ZePzf8AZTO0LJ6F/FZUMmoJ5a+rtWVx/gZ2Pmj/AGc7nt5AenFJgkljbHNWa8tFccCo/wDQNtyFxV8Ekd/Py5zXWjLa5dz3qTjVn5xk0OysMgA1YLex2JgCrm0YIx3bGFtZvLMtXbT7XZAOOlRljYkSZK96tEEQSLpS/Ri5OReENfnbGfam2mzANjIousuAjCq5bX/lyEZ6Vfi4ndWcnJy1DRa9QnX9O2DzXPb/AFFo7o4bjNS99q/8s+r/AFql303muzA1qhhrTOVnzdnaHlzrICffVX1C/MucGm91M5PBOBTPJk+41tw44p2czJllJUMbiRmbrnmjWvBDE1qa34yKDFJtk2k4xXeiriYLp2yxRS+ke1EicFxmmEMoK80USqGBB71lyYrNEchctIbbOjDpXQ7OMSRq2MEiuYaPcjKnrXSdJuM2y15D8rh6vse3/DZnKPUfPEyxnBoBl/llXUE07kkG3B6UynwIyxGK85NHpoX4ysa4F8wFRyKirViGLHoOtSWqZZieRUXCTuIA4pIeDSVMmLV8yY/pbpUuhfaMY4qCifbtPtUxbyF46R6GTskIxnGcc06wKZxsdwx1pwGJJ5yKKZHYQplhnr2NERccnvSA4MfqPSlKfRiniI7FYIJx1o8f28nJoCHOfijL0q+JVIWBk5rb7gOAKUOegpasEGGGauRS2NkeUN6gDRlfJOaS2Wk4wBS2VcYzzRC2mJOwk7eDSHbA9IzSgQBgLSSefalYUgZbPGMGo68lIjIHOOvxUkwOeTk1F37iND/LPJxVcl9l8PSKWJpULFeaWlq3c80/towwB7Ud4QvQ1k62bO6WhlFAQpHQ04gthGd3U+9OY1QgGjDZnFWqJVKYhEZmHFSCwEx/NN0ZUIxUrbyx+VyATWzFFP0w5ptLSI4xMpxW5IGWPfjg0R5Q8pVR3p0HCwYfBqzqnYjnJUQvluWOBkUCZMce9ShmRFfK4z3qLlnXceRWTIkjZjk2yNltzklfuoMlv5iepcnFSIlVpPilsyFvSKzUmalNogDaEKV7GiWe6HMbngdCfapV443bOQajLkGOcEcCotBbsk4CVOckjtT5ZXyB1HxUdCzAAFRinUe4PyMfNOtFMkmPkDEkkYpZAPUYpAk9Azj4NGiBZcntWpeGV2bjiUr6gc1vDq3A4pY3DpW26c8E01FXYRhSMnk0NuARxSmOMAUhh8HNJJjoG4BxQWwEyeDW5CQ+AaQ5BT3NZpbL0gKfzFZwvQ03kGc8enrTlpyiMqrimjNsjyT6jVbLLGjuhUgcio6cjHB5pxcPgFV6nvUfk8swp4CSEWp2XisB35q2WuHiBHIxVXtVD3QVe9WC23xkLnAPQVY/QQ8JBX2ryf2pusbXtz5IGVHJoc4MY3hualNFhEaNcOPU9WY03LRn5U1DGMZ/DMMq5MY+ar154JtpJCREOvtXSxIhXHasWCNyD7128fJnHxnl54YS20VTw94eTT1ComKvVtGEUUiG3Regp2o2jpTSm5u2RRUVSFVhrY5pJoAY0vTiM/iqJrD7nI+au9//AMM89qo9+u6c5pHISfg0058XCqavNhErIDVJtIz+qUgVetOBEa5FI2SHg+WJQOmKFMwRDTtvtqMum65oZKSNMFbKxrUzEHBqk3UbysQRkVfry183JAqv3NoF3emm4mRJ7F5WPWii3tgoU4wTUMqNbz7kGMVdbqIMCMVXby22uSBXfi+6pnAa6vQoarKFAyeKymGw1lV/FEt/yJf2X6CMXL4HIqTj0oFc7aTolmSQSOat8dooiHArgxbPf8rJGDpFTWyETYA4qYtrcMvFFuYAp4pzYpxTLZlyZbhYa3twrAipErth4pKLjGKVcHbAcmrP+HJnJtlP11yUaqVI7LkirTrU2GYVWJyPLJru8VVE8/ynshry6bOCeKZNIGTrWr9/WQaYrIMYFackFRzlJ3sZ3npJIprDhzTu8GY6j4W2vg1mxumGSHkyqY8VDTLtl461KSyADg81GSkPLx1ru4PDFlCpMUABokU7NJikxQF8E0/trT+YMCrZJFcbJ/R2II7ir/o9xsUKxqh2CeXg1ZrS4xtYdK8/z+P8sWj0P43kvBNSL1EQ/PWh3RZk2hevFRljegLh261JCaNuSc14TLBwfWXp9FxTWSKnEg9Ut1Fm74zjtVb5XG04zVz1LypLCVB1xVGQES+psDpVcFSGmyRjJXGTmpu0JQZzwRUJGoKg7sgVK2zqYsZyaSSCmS8IyMq2M96cKdmQaawHCDHOe1Os8A9fmkLLNq6Opz1FFjJwABxSAqk8URM7SCMexooDCRkAlSuKMrDPPagjcAOcmnA255NaIlEjBIp6VnmEY2jNIcopIHWtBvTuK4qyxaD+YTjcAK0u0OSDQw5J+0EUjeFfgUewOv0GaTk4oYY9cZzSC5J4FaBIxSOVjqIU9PamN0pZG3EFaeGTK8AGm0w3qccU1jQI6K4SNCCcYpndeI9PtTi4nVfya3fW6gZRjn2qGTRtPvbkNcICV6g1Q07NUUn6SsHifSn5W9j56ZOKkobtZh5kTBl9wahbrwbo9/BsijVD8VD/APRbWdDk36VfSFByYnOQafpQj6+IvaXH8ynscjYwDgVXdNuppIlN1GVk7+1TSyjA5FGDYk42PlPOax5MDFN/OGMUhpUGc1Z3KVC2DuZGKEKetQV5cpbxvLNIERBksxxipS4mwDjgYrzz9ctc10Qx2OnM8Vk3Ejxnk1XGHyS2y2U/jhpFj1r64+FNGuHtYpWvJlOD5PSnGgfVm11pFkSwnjVjgEivLHh3wnq2v69HBaW8jKz+pyp4FeuvCXgCLRdJiSWNeFHbrVubFGCqJXxZ5Ju8hc7G+juYBIp6880i5kM0ojXBOe9NkWO2UovGOlObJULNI3LHpWM2skbdZMAN+DT2IEcEYFN0YYAOAaco6hck0bKpDhWAwO1GAZjkNj8UBCG57UVTgY/tV8WZ5IOrEHANY7YbJOaETkcEBvmt5z/VT9qK62LHPNIfhcdKSXfjbjFCebqOpHaklJBUXYKUAnrQx0JzkDtRHUyLu+2gZZE2r0rMzSlaBs25vt696Yz4ZtoHHvThzjdjoDQMEjGOBzQGGUuETbnOKjZpQxwBkin1wcZ3cGoxgOWHerIFUxzpRH69Sxqz+jBOKqELXKSBra2eUjrtGcVKwnUJ8B4TCvcsasZX8kYq2yahT9dcLAnQH1GrIYPKhCr0AqJ0nybWPggsepqdWeOSPqK34serODyuQskqXhDyzukgUCpWxZmVSabvAjyA1JWkWwAYrVFGFO2PkGFBrbcdaV/SBQpeASKtCL34xSi+Rmot7jY/JpUd6uMk1LoDQu+I8o5PaqTfuqznBqx6hfR+W3qqj310JLrCnvVTZXJomtMjEkoarrZR4jAHaqpoke4IauVuuEFLFWx4+BZB6OKipxzg1LNypqOnTvRzRtF+J0MWQCM1XdTCqjVYZmIQjpVW1WQnIqjFqRbl3Er7L5khFMrqzyCalIVyc05mtg6ft0r0GORwckCmGy5+2sqxGzGegrKv7FHQu2lWvlqOKn8YixTe1jA4xTuTATiuEvD1OfK5yIedSz4p3axhR0pGzMuafwpgZqRQk8mqCLgcUG8OID+KcD7qa35/kmm+zM2c81xyZGHtUDL6oyAecVL67nzSQeM1XpHODg16LBqB5/kP9yDvsFmFRqNlsZ6U/vcljio4YDk9K1Vao58nTsNMm6M1EvGEJNTKnepGKYXUZGT0rG4OMixtSRGtkng0OOE+aD2pwiguAaeJCOMDNdjC6RjasVBEFAPepK3C7h703jQYAp3BEVf3p5MMV9ElEMLgCncMrDvTaMHAIpxH0596yTRpi2iet2zCN1Kk1B4BjO5aFaf8MUC+GVOK87yuNDJL9jvcXnZePH9WEm1vePLWMsSOgFRT5aYZUoTzipLRbDzZdxXnNB1i3az1gq39Y3LXC5HGhh/iz0fE58+S/wB1QSHJjZQKeWYKgAGmVuHKgk9akYdqvkcVzZHZRLREkhgcfmjrJuB3cc00DDI7GjplgSRxngVWOmPAp2A5waKhIAJNNg5Xr0NEVx0Byag1WOWDMvoOD70TeqjkigRlyvPFamjkZfTjP/OrLor67ph9285UBsVsKw5ZuPagpkKF5U0QSKPSTuNMnfotf0KDFWxjrQzuySSP2ocsrD7Rk+1YGPVhilchlF+hFyTmsYhep5oDyEHKtgUBp0ZvSc/OaKbG6sdmVQCM9KbyXSjr/eoafVliaZpXjCRjsagb/WlgtwzzL5kv2KD2o/sMkky1yXVsQdzDA7ihRQ2kxJAKuehFUnTtdil85WlRYoxk5OSaXL460ixsnne6VXPC5NWKMn9DOaX2XeKV4JdrPnBxmpB7gOApwSe9cel+ptnBZm7uGG3dhVyNzn4qR0nxm160Msk6oJjlUHYVbGEkZ5ZY+nT1Q7WIRcD/AFpl5xQlXOCOlVzUfG2nWw9NwmY+H9XegQeLbfU8eUoPON3vTSx6K459k8dSYSkh8gcUaO7kkwxHpph+iSZBKMqT15oqafcSRkJOEVepqjoX/IqD3l2jgQx8tUTf+FbPV4QZolk+CM0Vriysw6+cski8nJ5ocHie0WSKJpBEZDxTKOyRyKrHGj+GNJ0VB5dpHFk59K81IXepQxr5aYwBwBUHqnifTovT+sXJHvVbbxHp12rSWd5HJImcoWwc1HGT0ho5I+ss8DC7nZ3dRjoKkkdYyrjGwdc1QW8Vac0MMU8otbktgZ6miyeKIEL2ssmc9D0qt4pIb5Yv7OjRXEW4NkfAoyzJIxAYEHtXMv8ApMLe3MglQgdGDZH71JWHiU3E6GOVNxAJUUrxyX0BTizokZIAAIGKdK425FQkV6roGZhk9BT23ug7bSeaG0JJWOwMsWzn4pZY7claxSpOc0p2VV5I5qxMRmgCIx2PtQ9mOSOa3uJI3VjNgHHQVW2RJg3HB5xQX4j+6lOwIyp5oYyRnI/eqmy5DVlBU7iKDKr7DsPNEclZMFQSfagys6gk45PAoBZH342p6jliOajU2jJzTq6kBYhmyT2poQEj3MeCatiUzZZPDRMcVzJ+BmnFw5LFuwpOgQ50lpP87UjUGEERB61rgnJpHn+RKpNsjZdXNs/LYAp9pviHzXwHz2qiazeEbgD+KaaHduk2Gbqa9dxuF2wWeVzcysvU7Vb3glIO6rBbOCorn2jzSSFecir1Z5CrmuTlj0lR18UuyslP6aBPny+KNk7RTeZtqk0rZclsr9/IUyc96gX1UoxBapbUzkMc4FVC6f8AmEDpVfaxJvqOLvUjKpwTzUXEryTq3J5paJ5rDAJqwabpbOwYr/pSPZn3IndCjOxMjtVri+yoqwtRCg45qUQ44p4KjQglNp04NOvmgTDIp5+DReyBvGwCKqt+d5arJqLFTgVWbxuDWJfyNcv4DCD/AIg/NSYUtHUVa/8AEOamY8mOuzB6ORJbAfp/xWU7CnHQ1lX2xOhZLWTjk09PqWoOzc5xUuj+jmuRjlaOxkVAmIVsmix3K5wDUfezYDEVDDVUhk9TVoirMs8iXpdFcMO2aY6iw8o81XG8SwR9JBTSfxFHcZCtn96tjhk34V/LGvSC1zcZj6u9VyVioIqevZluHJzmoC8baDiu7hVRo4WZ3KyGujkmo5yQadzyZamrqT1rXGJjkObb1HNZdxAoeK3bAKKczJlKkoKwRdlcK7ZafwkFQKBLCfMJ+aPapg89K0x0imtj6GP1DIqQiTHUc03iGKdxZJHNJJstih7DGXAFPY7P80C2wMVM2xTjdXPzZJRWjXign6FtrfEPI5oEtuXfbjIqVhw/Ap7FYgndjNcXJmo6sMSaA6RaeXjim3i+0G22ulAyPSasltCI15FRfiUCbSpFXqvqri8ifc7HGSxyRTInweTwe1SMJBbDj96iLaQEc9ulSMMqq+T34rmy0emTtErblujDIp2jbsgLjHTFNYCAgwetO48r24qsaxwn2gnmtgfzAaE4IkQg7R7e9Hj689aUdMMPWRzgCjqB3PSmgcq4XB5o+fTjP5pkxZIU2ACSeKAmHJPQ1tnyOT6RWgwX1DpUsZKkKYBByaBNciGJpGZQF96b6jexQIN7nce1cu8V+NGa7OlWBAf+snoKtxwcmJKaj6XHU9cV0WKGYjcfURTC61+GztzFCxdgOQOa5nL4jdrdp5bhAsYIAHVj71TpvG4WKW8ach1yEXPBrdDjsxz5SX2XTXfGQiu1sw38ln3St3/FV5dci1TxOJrvUHjiQbYo1rl0WvR3d9PcX8rBG6IByTT/AEjVNOk1Vp7kGNUQ+V75+a0rAkZHym9lk8TeIGWYRaZN5XqIl5wSKpeveJ3urqERcpAuB8n3qMu7x5rq5vHcOxz6fYZ4qsmQpIzE5z/pV8cKMeXky+mXO01SW8vI5JX3snADfavzUm/jK50+4aKzug059AkP2qPiqNBeP5EkMOFDDLMabSssUaORuJOc+9WLGir5n9MvMXieW3uApna9kZt7EkkFqvXh3xVeQtm+ukQJ6wg9z2rh0Mk0al4upNTMLv5Si4n2uRkYPNM8SZI5pI9YeG/qBFKUtn/mSv1GelPvEPjZrQiNXMIPGR0NeaPDusTR6pEYSyomA7E9a6B4l1JbjTI7ScsmRvjkxzWOWBKRtXIuBIX/AIqklvFnhmUo52yLnp8021PX5Z7Oa3b0iFf5cqnkVyabUG84xOxRj3HQikXF/ei3DQTF8L6gT1FXrAjP/kM3f+L9TiujHHdySlThizU0m8UvKoeAvBMOu09TVfuEeVmlCY55oOF2sdrBkH3VcscV9GaWebfpZT4uu7mAQ3rvIynKvnkVYrDxNd3emMs08jNAMox/865ptIAkzlD1NSVldSwL5gyYwcEe4oPHF/Q0c8v7LpL4nlSEMWaJXOGCscNVj0bxsLaJonnklQDK88qK5ZcXEUseSjDJyPalrdJGFmiYqzLtPtSPCmXLkyT9PTPhT6gNeMCLkzQrxhuqmui6N4rguYpI3kXzo2zx3FeMNI1mexJ8qYKrHcRnvXQNL8YyRTJLG+0suHXP+tZcvF+0bsXMvTPZNpdpcW6srjJGTThWBOOv71w3wV9QlupVtb2UINoVCe9dmtHWa0SWJwQw6iuXkg4+nThKMlod52As3A+aQ0omTKt6fekuwceW/OeOKz0xoI4x+Kzt/RbVgX3+aoDejHNKf0nO/wDatsvHq6mhOpYjJNKMDfaCHIJx3pncyBsgtgDpTyeT+V5YxgVFXDBicnCrRAyOl2tKWPOKaytuBXPwKeyMpXI6UwRCbpFY/cwwKvxq3RmyyqLZ0DTPLttJgjOBhc1B65MpViDR5rlkgAGeBiq3d3LzuUNd3jYEpJs8fys/a0iq6pvklJHSm9mTHIvY1OTWLMpJFRLIIrpQR0NeywSXx9UeWyxffszqHhmLdDGcmuiW0eIwa574WcGGMZroMcoWGvMctf7Gem438EHdwo61H3FwNp5rV1cgR571CT3LEGufNm+KQ01K44YZqrSkySn2qWvpC5PemMFrJI2VHFLHRmy7dBtMg3ygEcVftNtVWNcL2qu6Xp7JICauVmmxQAKeK2CCpDhI1VenNK2gc0rIrD0q6hrE5ocn2Us/NIf7aD8GXpXtSTIOaqV9n1CrnqQGGqoXa7nYdKxNfsar/QjbUHfUzASVx3qPgh2nNP4hhga6sHo5slsd7HxWUQE46VlW9gdSRih8vGaPJOsaZzTaa8RU6jioK91IbThq4cJ1o6s/NmtX1ZY0YBq55qetMruQ/wDapbUWe5DbTVNvLC5eVvSSK9Lw1CStnneZ3XhHX2uXm9gjNg0XSdZu2kKyOf700nsnTO5cGi2FriTd39q7sYwUfDkd5f2XS3vN68tzihXD7wwPSm9shEfHWtNuOQ1V0voa2yKnT1HnvQVOTg804nT180IR1ZErYuNgHHOKej1Jio9QQ/tT+HpTy8BHQxnj9ecVuFMdRTqZOScUmMDPIqJ0ChaZFOoOD1oSL6aPGpGOKDYw8jcjoelPYrkjpnNMkXAzindtC0syrjisuRJrZdFu1RYtJDylT81bYYcIDiorRtP8tVJGKtKwARCvK8x/tSPScaLUbZC3MwhBFQVxP5+5DyDwan7213E1CS2+w9K5sIuTo0z1tFKaNoZ5YycFW6fFPIGBI5/ak64pg1BZ1HpkHP5pNvIPY5NZs+N43TPRcXKskE0TkKhtoyRj5qRRlHCnOfftUVasRlm5BqQjIPCkc1lNTHRHTcc+1LRsHJIoWD9p5rF3LkE5A70GRDjner5yKzzSJDnO0itRDHyDWASGfORtx0NKWI2VBXbjNN7m7W3gZpCAwHC06O5s9jVW8UyNBolzcE7SowGzzRSbdEbpWUrxp4sl06BpQR5oX0DPvXDtQ8QS73LE75QWd+5p9461jz4obXzWB3bmYiqFqFzCbRp/MLyu2xM9RXouLgUY7PPcrkXKh5f69L+iJD8yDYF9hVajvGbAf1HOAp5FAceZFy5JHb2olqqRXtsZVDjdnB6H81t60c15G2KRZHujvUAMQAAOlPtTT9JIkcKZZRhmp7ZQw/46lzfSRpFuwAvSnWptaS3M92CHjThUP9XzUGV0VGAyNfRjGV3Zb8UO8tf/AGhMiDEeaJPchXyoC5Odo7U2eeRZBKWODzg96ZFL2zZt2S4EchCL3oqwxyS4aTcq8KPmgXMstw28jlz1FOorSZWQEHkZ3Co2kFRbHy2v/UUKDLk8mjWenTQv5kkW8t9uRUro+mTSxKywNN246A12vwZ4WsbhUfWbYkoMqQO9Z8mZR8Ojx+G5+nMfD3h6+m1CETw+WkjZHGMVdPE+mz2uiRmQLO6qVwP6RXYl8I6TdOqwSquBkfFRviHQdMtLQwPJ5rAduc1z3nblZ2FwoqNI8t3FhJI2UQuQpO3HQ00W1k8veoKso9amul6jYGwvSwjHlXOQrAfZVN16C4spNpBKSjh1710ceWMtHFz8ZwbZDfo4pV2xyqqSDLZ7NUbe2jRq0cBDq/DE+9CcEyhAxUg5rUksglVWYkjoR0rSmjn9WNnhC26gZXAyR80a2WQ2UjHATPSnd0BBKBcrwyZGO1ASRf0uIWON3IPSpoAmJJTbyBlzDng4rcEZLJvGYiOOOlIN0y5WN8L0wacW92zNFGVUBAfwaDog0WMtceWgA6nn2p7BM6XEXlNtJOCM00aULqEskOFyensK3vgkaFomxKGO75qUg20dF0rVYxdW0PqWRSPUOlej/BviFkit7WaXfFKo8sg9D7GvKUBhISUThX2blA966x9Orya90zIkJvLWYMoB+5fbFc/l4v17I6/CztypnpmGbf1PTmjKwJ3Z5phbnfbo6ADIBxTxBghccnvXnn6egTsI5wNx6UFpC3AGB70QkqCWximuY3ds5wKBGCmQdSeaZygHGR9tO5GBb3x0plMWxnJANRelbZG3MgXKp07UbR4WuNQVmXIUZplcOC53dal/D8iqWJ+5j/pXU4uPvL/w5POzdMdE3cWQeIj3qFGmf9YJxmrmkQkhzQ0s13ZxXYU+qo848fZ2VSfTsIeKpOqWzRXRI966/dWoMJ4rnGu2hEzMBxmupwc1ujFzMH62iZ8MXISJcmr4l2DB1rk2jXBiYKxIq92V0HQDOQao5uL9uyLuFkuFMfzXDPxnNB8t34A61tl9QK9KlLSBWwSM1yHHZ01LRFDSTKQSDUja6WqH7RxU9FboEB6UQRqpFFQK3TG0FmqDIXFP0XaOBW16UoVYo0CzXNb7VrNZu7USGUKUcYouaDMfTmhLwZekFqbAK3NVeQq0hyeDU/q74yKq28mbb81krdl91Gh9HGOuOKUIzuyAcUe2jLqBinq2x4PatcJKjNKLbGfPz/asp95ArKs7IXqUq51c7DzUal4878ng1H3L4G3Oa1YNmT96wfFSsizOTosUNusvAFHOjIylttL09fQPerBbgEYPtVceTLHLTNnwqa2c51rRlVCyrVctYWSUqw6V1jU7FZUbA4qpT6OY2Lhf9K9Lwucpx6t7OFzOG4PtEYxR/wAvOO1NLhiCRipfZsiwaibnk11YytnMapEZLy9ESMYyBmttH6qdQwE49quukVJWMjCS/SnESEY4p01tjoDSAhXrU72g9aewUyEjIoaJ707xuXHetCPFRMjiJVe2KdInAoQHqHFPB6VHHWg2E2qFsfmrHpFll1YiouwgM0inHFXfTLTYo4rl8vP0idDiYOztk3YwKka4FSBKhcUGAbUAodxJtPxXmpycnZ6FR66FSxo46c1CahCqhuKfi4BfGaBf+qImjx4uWRCZpVE51rhDAqBkg5FMLaUbQxHANP8AWRtuDUPbvtuPLJ9J5ro/mOH/AKlliiv8Jzf9ssMmWCDKqRng81JW5UfvUNBJuXDHGDxT+FjnYTjI4ryJ7Il1xwCec0rdtfAOfmmNsmQVkYlh0NPZVJVSBioCg8TKWPODSiCz5z0FCj9Kg7cH3p4ikLk9aFButgSWIIzx3qleNIZZdEmUOdqHcQKvDrnBXp3qM1axF1ZujgFT1oxdSTDLcWeGvHWrm51xoot2AACKqN+/lyovmb1AzxXT/qtoM1h4maSytN8TLyyqa5Vc2lw8wURsM+4r0mHLFwR5bkYpKb0Yk6yM6xkhTzW1kmmnBPpVas+k+Hb3YXFqrqqZyy9TTjTPBOpanNlYZE3NyMU8syX2JDjzf0RkcTXBt41GFB4JPen+rR+VOYMDbs4I96uDfTLUI1iYyOCnbFTFn4DhmUtdK5c8VnedX6b48ObW0cNNrMGdtu4E4zR/0UhMWVLL7V6Fs/ptphk8pIi4JGWbtT7/APDHTP1rqgBCjjFT/J/otj+NbZ52t7Cb9QojgLAn+1dA8MeFri4XbepuhPAGMV2rSvpzpsbgC2G73xVzsfCNlbDaIFH7VVLPKfhuxfjYw9KDoPhjT7Gy8vYmeoFWO3S3hGxW2kdqs/8AgVtGSQg47VpNFtQ+WjBzVDt+nXhgilogY5VViFkVQO+6mV40bjLOH/1qyy+HbF5g5iOSacf4DYRH/ggj2NLRa8d/ZzuTT7C8iZZQAOoyOlVbW/DOn3dvsV2wmSMDvXb5NLslACWqEH4ppcaVAq+m3XH4qxSa8KXxIzVM8q634SMduJbeF2YD1emqbc2k1vlJIiCvOSOlewr/AEffASluOnQiqRqfgGG/R52hUMeoC1dHkNaOXn/Fx9izzNIst1MHfcVAxk9q0kW2GRFOOeK9CR/T/T47RoXtwSueQOSKr179PrZFkWFD1yBirf8AIRzJcCSOMxWeW3yyqFNHC2Yt5BJLh1Hpx3NXe6+nN48gWMFcnPSkXX07nhtld433r14pvnX9lH+FP+jnEgKEgjPsayLKYdVwBzmrxdeDZWgGxDvH9OKirnw5qNvbKv6d2XsAKsWaL+zLPjzhpoiLa4/mZfPXnHtXXvpW8lnqVrqKuTFJKI2VueK53pHhy8uL2KCe3eJXP3kdBXpLwB4Mgg0DyvJKybwwJHcdDWflZ49KRq4eCXe2dntSskaup69qdqXIOOOaZ6fA0dtGHXDKOtPMjdw2DXn2z0aBTMB6W6ZpuoG5mIJFFkwSWPOKAWYjjt2oWQSVAY4GSaYXcm3Izz1p5K4jU1D3MvGCM5NWQVsqk6I2eTarSMc058PXheXn3qOvmOxh2NK0KTy7nb2zXsPx3GrC5v08T+V5V51jT0jrVm+YAc5p3GMnpURp84aJR8VM2+CKyZFTaHg7SFzRAwnjtVC161+87a6LIuYzVV1m2VkbjrRw5HCVlssanGjmzI8Lh14qe0rUM4BPNMbyEqGGKZ2MxhuQCa7zayw0cZReGdfR0e0Yy+9T1nwB8VXdIkDxA1YI2CYIrgZF1kdWMrVomY5BsFDeYLnJpmkpIoNw7YznFVdhh8t2M4z/AK04S5U//wDaqUty8bnmlQaowOCaikCy5LIG6EVhJHeoO21BZFHP+tSAu02cmn7WgodA80ic+jOaYSXqqc5FBlvwV5YUG9BXpEayxO7FQlnbkykkZqXu5BMxAoVuipyRWOcqNMY9h9bwhVFOSyouCKZifGAtIll4PNVqcrNHxaDG5TNZUSZOTzWVZ3kL8DOYXU3qNF0ti0v700dSxzUjpcJMw/NbpL9Tz2Nvui6achKLU3EKj9NixGpxUmqndXByfyPTQX6oU8YdMYyTTG4sA0ZOP2qTQZxTgxho8GtHFyuErK8uPtGjnV/bGLOBUFNHu7VetYthtbC1VZoMgjFe34+RSjZ5LkYusqITZh/xUzp9n5oBI/amRiO8AirTo9tlRxVnIydYWV8fH2nQBtL9JIWoa6smRiQK6F+lHk9KiLvTwxPHNcbBzv2pnYz8K42imJAQORSJAFBqduLLywSBUHcLhytdvFkU/DjzxvHpgYyx6U+hRpGAptAmTxU9pdlvYEjvTZcigivFjc5E3o9hhVOKt1tAFQdqYafbCNFwKl1PAGK8lys/d0eqwYekRxEo28U2v1xGTT2Iemg3qAxmq1HQZPZVP1Oy55OOady3KtEfmo2+gZZyRmmD3ZjGw5zXc4XEv9jkcrk9dENrv/GJAqvYbeGxyKn9QYyktUMwwTXd5eLvxZQf9HF4mZx5cZJ/ZJWsimMHjNSMcucEruPzUDEzwSAkelql0fIDgD2xXyyUabPrUHaJm3ZSgP8AUOtPDIzR/b+KibcjeHGRxgipGKRlU5PBqscMWfcFJ4p2Cdijd1pgRnB3ZI6U6hIAOTmgEMeQQOMD+9NywYMrcdsUXec7fupPkAuXCkk9jUYxTtc0G31FDGlnGQTy7CqdefTfRWuvONtGGPXC1154di8Dr2pmbWMy58vJ+athOSKZQi/TnkHge1wpEW1VHpGOKm7Xw/a2SYjgRT74q4iMcgUGSEtu9IB7GmeRlmOEUVK4sOodQc/FMZtMjUllTGBnpVqktTuJJzimksA5Y80nZmhIrUEbpINgIB61J2yRpKFbA3HrT+CzSRiJMAdsUf8Aw1VlDIvAq6OUnhJWccIVAMAnvUxHaoxILjFQlvbPHIoDDnnk09EM6yGQzjA7ZrVCaorlb8Y7ms0RuDkUzeKFX3NRWuTjLSDpimYuImk5kFO5Ish2rbDfyAw9Oeetal8t3YAU0a5jWQ+vrSmngG4CTGeQaVTRalTHBiVVj4z70YwQIAWG7NMzcq0QCHJXGKU0skqnLqn70HkSEk2gF2Y1JVFBBqDm8kb8nbjtUtNArKWMu41HvZ5JOOPms8sivYlt+kPOkMoJUZPbiouWw8yb0JnPBq1R2UQIwMmiizRXBAHyKrlm/oHVFVi0dkYeYqg9RTx9FjmjCzQg7u4FWBNPSV23McnpUlFZeWigtkCq+zJRTV8IWbRYMKnuDihf9Ebbb5YgVh0OR1FdCWIE8Hj8VoxJE2CMhqnZopnBMof/AEP0uNAVt1BXH9PSrlplp+mhCoijIGDRTbJIRkZGeaMitH06DpSym2LGKQdsj7nwBxihNNEoIAyR1rewHl3x7U1laMMYwMfNUWy4xpgSccfFJMjFTghaSWVDwBnHWm7uQpPxTeiMDczBSy5yR1qIlkZm6YJ4FOZZAC3vTBCZLhV4IJFa8Stox5W6dDq705hZqxHOM1D2uYLsZ45roV3Y7rRBj+kVTdQsWhl3gdK97xpL4uh855UJfK5stuk3W4KM1crP1IMVzDRrvEqrnkV0zS2DRAnuK5PKj1kdPjS7RRJuvoNQ19b+YpGOKm3B25NNJFyelc+bOpj8KTd6SHycc/iqve2fkTlsV1WW0DLkLVS1jTS25gK3cXkNOmZeTgUlaGmjXgRQhNW6KbfGCK51bB4bkDPSrzpp3wrnrU5S+yjDdUTMBO3mk3THYcUlcp3wKaXc+3jNc5S2aWtERdS4cjOKbK2eRSbt8yEikRDI61ailvZIQzOhGDxTl9SZVxmo8NhabTNnNEKYefVJCeG/1pA1BnwC3P5qMd/UaXACZM1HZE7ZOxOXUEmhTXBTIzTdZccA0KXL8A5rNKLkzucbD9juC6Z245p4rkgA96iEBjA96lLAGZgTTxjR0ZQUY2F/Tr7VlSwtRjpWVbSMfyI4qoBqZ0eP+f071ERjLdKsWjR+sHHWrpukeQwbmi52EeI1NPCvqodkuIgKdFa4uRbPUQ8BxjnpTtQChFN0o4PGaWOthaIjUYwVbjrVRuIirFRVyvsEGq7LGDKcjrXqOBmuNHB5uG3ZBJatJMB2q36VamNFGKjYolR8ipi2ukQDkcVr5E+8aMvHxdZXRLeV6MU3ktt3YVi3yPwGp1EVcdc15vLBxdo9BDa2V69s1CHgVSNTiKynHFdNvYgY24qkahaeZORiupwORTqTObzsHZaI3TLXzCMjNXbTLLbg7cVHaVp21V9NWq3hCAYFNzuUnpCcTiNK2OI12DGKcRDL0LtTu3QcEiuJBdpHWk+qHaYCim853cU4Y7UpsVy2TW6jDJ2yLubISckVV9RsWSTKjiugeUCmMZqMvbHeOVrs8LkfHpnM5XH+RWc5uIDgkjNQU8bK5q86hp5VSQKqV3C4l9S4r0KyxyQaODLFLHkUv+gwizWO0/cOhHass5nV/LlyT70q2wjkDnPY0i4SRZQVXpXyrP8ArllF/wBn1zD+2KM1/RMhhswp5p1BI/lYk4xUJBchiFY4P5qQjmOPuFVNDr0l4G3jjjFOVfB+KjYXAVSjZB6/FHVnxy2R7VXZYPxjgjrR1k3HCnB+ajBIre4YVvzishzmpYaJBiwBZsHFAZ0lG4elh2FARyy9/wAUtcgnjHzRsnUImc+oYz3pRRMHFDzg4Y8e9a3nGD096NjoHJHnlcUylgOCRipBCGJ549q2YwwPFSxiHVCnATBHc0VXZF5an5tNw45NDe04ywwKKYstjOW6j29eRTGS6diSr4/enV1YqwG1SKi5recONmQRTxkhP2XgObUZElx9wNNJPEEUDDK+rvW57S4ZzwcnvTH/AAS4eQvJyR71fGn9ivLkRKR69AylnwMdKaP4hjNyVKjrxTM6ZMrBSuc9BWR6E7ybmB3e1RwQvzZCVj1dskr0p2L8mPeeSe1RiabKmEVc4p1Dp1w47iqpKKHWTJL0ex3TScngCnSFpEwCcU3g06QEE8kdql4LE4x0+KzNjpN+jBYnVSQMk0SK1kLqxY5PUVKxWyKMMMke9EYRryRtxQX/AEI3jhVSO9OhGPtNKDQlfTjHxWmeJepyasTRG2IYejHT5rRkXABGSPehu8juNhwnvQskSFs5AoNgDAj8VjyArtXtQXlJPoOaFluuearaYNBJZG3L3ApsZ0BLkAkUiWUsdoPXvTeR1iQgYJqEYpmLBnzj4prJcMQVXge9aebERL9T0FMfNBQknFWwjbKpsTNJ6SA2fekWKH9ZB7Fx/wA6AEZyTk4zUjZKG1K2QDoa14d5EkZcyrFJnRNgdNvxVf1Wx3BjtqxQ5PApF3b74ycc4r1sJdTw+RdzntrE0OoDjjNdP0YhokqkXcKQ3QfvmrXotwu1QDVXK2rG4v6uizv9lNsc07BDx/tQNnqxXKkdeD0KSPcuKjdQsVdGytTcaYFamiDr0popraFcr0cyuNO8q6LEcZqwaWVChe4p7qNlkE7efxURFK1vMD0watnK47KqSZYZI8jIqDvY3ySOakkvlaP7hTS4cOOtYbpjyV+FfljOTSU9Jwakza72yASKHJZlRnFXRkZ2hozLnikSH0VqYGNjnim7y5TANWCjWUgNiiQsVGaA5JOMU6hhLDkUzZo4+PvIUjMZPzUlb25ZtxoENvhgcVKwrjAFVo9I6hGkMriAg4qV0mHGK00G5hUjZQ7Oop0jNly/pRJhFwOKyt+YBWUxyu0jhEYGatGjR/aRVct4y8gA96uGlRYVcCjk8OVxI3Oy0WajaCTThhxQ7Zf5Q5o7DiuXM9IgAOOcZom700LpxS8ejFUsYY3gyDVbuJhG5JNWK+bbG1UHV7so7YPFa+LmcGWQ4nzuh7PqCIu4NzULdeIGi+1v7VB3d3JJlQ2Kj2DSDmul/kNnUh+IhH0uOm+IvMk9TY+M1e9K1BZgPV1ricSPG4ZTgirtoF+y7Qzc1TlakrKuR+PUdxOmzkPAcEE4qAaz3zkkcU+srjzwBmn4tweQKxJuDtHHnj+mAsrYIvA6VI42jFajQIAK23JqucnJ2BJRWgsI3HmpCNAOfamlutO3kEaGteKFbMmWYC5nCHBNAW9TcBmoPWdREanDjNViPXCJfU9aaMMsiTo6etwjLkVt2WRcccVSrLWWkIAarHbTtJtPvTxewdkxN5aLIpOKp2sadwWAroBAZearurxAIxro4czgzNmxKWznnEUrKOopyFMsZOelClAW7YgZJpxG5ztUcV4/nf8A7yZ7v8e748URc0bRndt6GiwzbgCOvz2qRuIVK9M5qJkieKQ7ScVni79NE407JW3mff5Y6d6kUJwPV/rVajnmhlDDrUhDdF5FIPAPIoSjQIyJxJQSc84704KhgD8f3pmpBUYAweaNE2BhzmqywMg28nilb0JCrk47GkGQFT6eB0oKPl8lQG96NiWPFKPwwx8ZrbJleB6aQjDgnHeirz6FIUdeaYikDClFGOpoyqc4yK0icn1AmjIF24zk0R+wnYVyR1pKkc56dwaNwMZY1jRKVyp5pqB2A+UpOSABQHtYg3QCnB3AYIz+KSyAx8j+/WkDf9EbJaxFiO9BwsSFTGSalSqg5x/eguis2BjJq6LoJDM9sRuZMEdK2ssDnKJg96lPIjB27APckUhbOFZcqgP5FWOTJ0QNIogMhOTTqOOKSM7Rj4rBHskwuDTmKMKSeM+1Z5bJ4YkUcajCDNLIG3I7+1b8sHqcj2rZKKMFCMUKFsGQSdoXqKQYdyndmni4Ayo61piuMUlE70NEjVCAq5B71qXC7js5HtRJX2HGMDFM1maR9pXAHUmjSI52BM2VLtlQOMCkNOHUeWMVqV0XcASyk9u1NZXYOvl7QvemoVyDF2PpBGPihvIwG3d2oZkAbG7PxQn7smCaRkTtmmcpgngGmssygHaelKml4CsPUKi7m42kr26k1IqyN0EmuDkAEAn3pnJK8sqqg9I70BWM7biSV96k7aHc2WGFXvV19RFFydh0UFMEYxR9GxLrkX+VSaFITHEVB4NVLxX4ln8KaYNVtiCyOAQe4rRxFeZMq5qrDI7raj1EmnVwUSBifauc+BPqZoviyxjEU6pdY9UZPOaulzdiSMqp7V6xxs8J2rRTdfu1R2YcYNOvDGqedj1d6itetXlLAA4NK8LWcsEg4ps1fHRTiclk/wCHYbR98S/inIjGc4pjpmfJGakkHzXFOzehYBA4rM9q2eBzTK4uViB5qywAr9kWMk1R9TnUOxU96ktZ1uOONvViqQ+pm6uSqHIJoNPrYjku1E5bXblcZqTt5DJwTUXZRbgMipSCPa2R0rlOf7GtQ0TNtCrYok9oCpwKHaTIBgmpBZFYe4rVBopkipaha7ck9KgXyrEdqu+o2/mRkgVUrmDY5JHetKKHEZxqCwJqYtoQw4HNRkQ/mAYqftAFTNLJnb4eHrHswggEaZNJilAc9Oa3czgRnmon9T/1jAPegmdOOFzTZabcBjmpJEwCaiNPkBUc5qTkmEcJOavizj8iPWQkyjJ5rKg21H1HnvWU5itFEs4i8o45q4afFtC5qGsLUrJyO9Wa2i2oOKrzOjLwofbJSEYQURuhoUR9IFEboa5j2dn7AtxSh0pByWpfRap+xyF1eUJE3PauY6rcbp2UGr/4hkKwPg9q5TeTk3jeqrsEd2d7hRS2K272+acRQbgDQrddzgipRE2rngVsejtxaYEWqk5xRYCYZVKnFDku1Q4zQDchjwaljSgmjomiXW5V55q52+GjBNcr0C/8uYKx710awu1aNcHrSySo8rzuO4ytEgwArcaFmBxWm9YBFOoE6ZFVwhbONklSoNGgRcmovVLvyomIOOKkbmVY0OTjFUTX9VVFZd1dPHC/Dk5snVWyu6zqbSzsgbNRlsjPICOeaYSTPcXhI5BNWDS7dgQSOasyR6o5UJ/JOyb0uDbgkc1cLEEBc1BWcQXbxVitRgCqYHRSofZ4qE1cBo2qWkcKvWqD448Yad4b0mW6u5lBA9K55JrXFfYspLwg7plW8KbgGPai2rEOQxzXDfC3jq88Q/UdpJpCIJgVjTPSu3265wW4Irz35GFZbPXfipXhSJNUDc4yDTS6tP6gMj/lTuAkAKxyKOy5bAHBrj+M7NFZuEITK8mm8UxjXJHNTNzZ4dmUHaeoFRk9q6DdtyPatMZJ6ZmnBp2iQtrwsAA3WpNJQ8akkBhVQWVomLHIp5DfbcEscUXH7ET/ALLJ5p35D8UUcndmoeK5V8Hj9qfRTo6nPXtVfUYkEkRZMk807DD0uR1qMR0C+ohjTrzWwCOQOwp1/wBFY7YhW45BoluFPvuzTdHEiZ4yKcpIAAe5p0rFsOqhmIYVslQewxWearZ44rOAASBjr0p6DYllycIMUJhhxu6U6B3AnIrQiDMSx4FD47Ye9DcruXO0H4rXlqSuV24p2Y0A3LwPegsVUHLZJ6Zq3rQVMbGMlyQAR0pYRljwVzWySwxkjNKiVlZsvn2yaNB7CFToWABNL8tRuJXj3oqkkNkZPetIrlSWIx2FJ1I5glAA9JyKUQGIUg596WwAUBRzWg7KRuAGOtI4i2aYbVJBoDNgAk5P4pM85ExRV9JHUU1eRo0Lq2KRqghjJlySoP5prK4AOVGG+cUpJcnng+9NZSS5Aw+Tx8UugMC+Om30jmm0suFJGMexrcssmWxwo4NRss527MgGpYLMa4ZpMUSW6AgCr91Md4jJdiOOgphNebGLkg56ClqwqVB57napYkZzTFRJcvgk7G60IR3F7LvYYiHbFTVrZuVCIMU1qKIk5M3a2wZAhXGKkVhCEY6YosEPlRkcFqTI2V2/3qluzWo9RlcsXz2x0rk/1dnB8MrbbvU75rq8pVh6TXB/rNelb61sVPG0sa6PBV5Ujn8+VYmco0jWdQ0W/W80+4aKVGzweteovpj9W7TXoo9O1lxDe/aGJ4avJTArKR0o9pczWk6TxSNG6HIKnGK9deqPFuKbs+iNxYxTwiQYIIyD70nTbNInGOxrzl9O/rfNHFFo+vyFxwqSnqPzXoHRdXt7uISwzK6tyCDXPzKZZCMUX6yGEwKkFIXmoexuk2A5HSjz3yhSQ1Y4pmh0Hur1I0OWqnazraoGAbmkarqUhZlTJqryW1xdyZbPWrYqtszzn9RIq9urq/uCi52mpjSdFYAMV5p/p+htuBK4q5WOnLGgGKXLO1SJhxu+zIWKzaGMADtSUYqxDGrVLaKIunOKrt3b7Jd2MVyp42nZ01JMQsjqeDUnaTlgFNMIogRnGacI6wkHpVkNFU0SsqhozzVX1KFcn81MPersIDVA391kn1VpiyrrtEdGux8npmpBLpVQioh7leRnmm8lw2w4oHquJBOA+ur7JKhu9Jt03neetR0IeWTJ5qw2VuSq5FWG6Uo44krpxKrk0vUrzZCwz2rYXyYj+Kq+t3uFYbqugeZ5mRbGbX/rbnv71lVoysSTmsrTRwu51KOyCMDin8aYHxTySJc8AUFuOMVy82Szq4MfVUbjHOaI/wBtDiNFcDFZLNQD+qldiKwLk5rMEA5FLQSqeIxmCT8VyK5RzqB9s12PXUzE/wCK5lPABdscd604HR6TgxUkKs4cAGl3k/lJgGnVsqheOah9YcgNirntnUca8K9f6tskI3d6HZ6tvbbvqBvEeS5bOaFbb4pxknGas6aszrO+1HT9Kum8xX3dK6Rod5vRea5Lo0m5Fya6B4fnLShfmq0rdE5cFPG2dNtvUtSK+lM1HaeCYwT7U6uH2Rn8Vqxwo8DyXUmROtXnlwPziuSazfPPdFEORmr1rzyzhkXPPFQmn+GWllEkq5zz0ro4mobZ57lOeR9YkBptlLI4ZlNXSxsioUbc1MWugJEBhP8ASn62iwnpWTNk7PRdxsHRbGsUJXHFSayCOIUgKqIWbA4rjv1R+rtj4atpdP0uVZ748cHIWjihZonosnjv6laV4VsJTNOr3IHpjB5NeP8Axp451TxdqLy3Up8kH0Rg8CofXPEF9r17JdX07SSOc8npUMzAtjNb0qK1C9lj8Jasuk+IbG5PBEoyfivXWn3H6iGN1IZXAavEaEq64J65r119OtTXVPCFlPuBYJsb8iuH+Sx6Uj0n4nJVwZeYgd4JJ9sU/RQRtzgj3qOjY569OlP4y7xjI9Y7156j0ZkhBAj2YY9DUfc27xPuAxjt2NSiZfg8OPetyxmQevOAKC9IVW7tfOBZVwQMke9RJVlJVwcVb5rRJh6G+081FXcAT0PDn/tdqvUiicbImK4eI8HGelSMM7DDq2ajZY8A7OQKSJHA2rwKtpMo2iyx3O4AjBPce9PopuNwPB7VUI7p1ATPQ9alLS9AO0t+BSOIFKyyB/UGU8dxT2FgeMDPaoSKcnlTn3FP47htgC8Y96Gx2SW8qVGO/NOWfnKnNRCzM3qduRz+aWt6WOShGDirFIVoeGV0jOBkijQ3qk7ZIypYZxTBrlSfsP70YTZADY46Gop0xutjoz7uCpA7CkMwOAF6dCaSZ9seSgPzQTMgPDde3tT9yJGpXdRjdnB61vehCgH1HrzTSYjcWUsR7djQFlDEoF2MKRyYWS6THzBGDj8d6UZAq9eR2xUfE7qAWOcdDRWuRg8DnvU7gocmYP7hqbTSPu9TDAHNM5LkBSSTn3oAmBHmM27P9JqtyY9IctcMIGbHToBQwfOgDP8Ab7UB7pnOBgKPemlzcPIQofaB7UtgHeQpJSTkds00luFZT6iGHUg0KSTbGSrD5NR8k4ClWIwalWQXLKy7szcHsKjZ7jc5284odzdhGwCAajZb5QCFGW96ZQsqc/6DXF0qAlmyT2pMFu1yyyEEL2FN7axmuZBJKpwTnFWq1tEUKCvTtUclHweEG3bB2tpIiA5H/wANS8CpEmVGeOtYsaq2XODRVbzAURMAd6zuTZtilHQDdIzFUXGe9IkUqu3J56mnByoIJ6U1Zy0mScrQS2RsYTLsQgDn3ry59TNV/wAR8a3Kh8rBiMYr09q9zFa6ZcXT8CNC39hXjPVL03uu3d0f/eysf9a7v4yFy7M4X5TJUVEazqp9QPPvTfLg8mnDkH0kZ7imzA7ua9EeYsIrsrAqcEd6vvhz6k+INAKLb3LPEmPQxzmqFlQMA+r3pa5z6Tkmo0mqYT1j4R+vOl3qR2+q5tZzgZJ4rr2l65aa1AJLO8SZW/ytmvnurAIAThvf2qwaD411/wAOTrJp+oOm3+nOQazywL6D2bPfK6Ysr5IzUhb6RGuDsFed/An8Rlo5S08SxiM9PNXpXoDRvHPhrXLYSafqUEhI6bhmseTHJFka9JdLWOI8CncYUYpi97G/2MD+DRFm9ORWZaZc2O5ZFCEd6grlPOlIFOJ53JwBQ4l3Nk8Gll+2gxdGR2wWPkYqK1CXylNWNyqwk5zVJ1+7WMNihHFegSyVsCdQzlc80wupHc5B61BrqS7zk96ereK6DufzTvFKPhVHImxEjMrc0pZNy4pEzBlyKbwyfzNue9Q9XwncETNlGWYAGrdaQqkYzUHpUAChm5qcR9ox7UR+TOlQnUJxFERntXPdYui8xANWbV7vhhmqbM4kc5HOauxnl+VO9DUHj7ayibT8VlX0Yup2tpMjOaAWBam5k560SPk1wZSs70dIdRUR+mKEhAFKLjfSoIWOMsMmlNEQCcUe2XcBxTposrWuOJuNlDyUylazH/KeubXkWLlsDvXWNatz5bYFc31GHbMTQgnFnqfxuS0RsXp4qJ1IBmNShBGT2qF1Gby2yTVn2d1yVEDLZrvLY61EXMYjmz81Ly3oLdRUJdSGWfjnmtcfDjZv56LTozkopFdA8Pvi6AHeufaGNoXir3or4vExWe12OhON4Wdf00/yBR51Lggim2kHdbqPepcwg9q1xPnvLX7tFdbTfOmGV4qWtdPWMDgCnixKnNamvra0hMs8qxoOSWOKsuzAopCnhVU6Coe+kjhBZ3CgdSTXPfG3158J+GY5IILgXlyAQEj55rzd4u+t3ibxL5iQubK2fOFQ84orC5BlKjpH1c+spsfN0Lw9MDKQRJKp+2vMV7e3F7cPPdTNI8hySx6mkz3EtxK0krF3Y5JPJpswGeua3Rioqihu2II561rdg8LmllkAwBk+9CZ+aLGFjcpyc8+9dz+h+tllvNJkY5X1r8e9cMRj1JzXaf4dbSG/+oVzp8uN89o5T8is3JxfJjaNfEzfFlUj0LAQ4DZqQik2jCHmmAhaCUwSZDI20j2p2pxzmvGSVNo9vCSkkx8pMgDn7hSt5ZgGPFCjcrgj+1OiiOQ6gfiq0M0DaJRIXQAg9qaXEGFKsobd/pTqRSn2ZI/5ViAkkkEntViYpWZrI+a23kDsajZrRcN6tvwauMtqkgIk4YjrUVcWOxCpUOP+VMnQjhZUtskYOeQe4pcd0YiAeh7+1Sj2SHJVuPamT2fqIPFWRmvGZ5Yn9D21vsMNrZ5qatrwv6c596qSQSW8mVHH/OnEV28LFVOC3zV3VSWihycXstvmkEhWGKWJyWO37R/rVYXVSgwxO7P96drqaLHlmDZ/0pXjaHU0yZW9fzPKcc9cmjfqiDsAzmq+uoQPhgwJFOYL6JiXV+PaqnBlqkWGO4GzyxhTSJJlxgKN1Q6XyEFRyM8miG6Tbkc01MI6lvDHhccY6ikRyoTkkFm/0phPcxunqwM9qSk8YxyN/YmikwWTZmYKrADA9qbyXSkH+aAR2FRz3gQqUZdnRuaj5J0e737x6R9o6GoogckSk07l1xIFX2PehmY+blgXOO1QrXCPMcuMnsD0rb3b+YFRtwA/ej0K+xKzXSxrlgAx4wDTd7kgjIOT2qMlmQyqZHwR0FIk1GKI5ycjvRWOwfIh/JOAnOSxqEub9ULKMFvegSXlzcy7I8hTxmtQafIzHcMnPU0P1j6Tc/Bsf1Fy3HTPapOx0teGkYux7e1SNlpJPLYUZqWgthDwqD81TPNfhpx4a2wUFskYG0EkU/RdgG7jNLC7RhOW7ilJExbnrWZts0JUaUMMgJ171suyxkAiiSMETbmmkrgrnOPig2O0JL4OCeTQwuVLucCkq3O4nJoNxMxjJ7e1OmLRSPqVe3EXgbVHtQfQmGYdgeK8nqrBs/vXsf6i6W1r9D9XvpRtNyVAJHYGvHZwXIU8e9ev4GHpiUmeN/IZu+VxXiFsehA5962AJTsUc+9ZjCDvSV9MhIOM10TnAymw+qsSYxsGTvWHJbb1zSdqqM5oihy+8Fm4NIbkcGkrIuMnkVsjIO00GFAVkZSWBxipXTtf1LTpA9leSwEf5GIqJKOwxitbWXpxik/9Cdf8PfW3xXpDqJrk3Ua9nPNdx8KfxCaBqQjttVQ2cpGNx6ZrxmkrAcUeOUghsc1XPFGQyk0fRzT/ABNoWqRiSz1GGQMOAGGaf/qo8+mQHHtXzqste1KxYPbX0sRHTaxFXDS/rD4v00qDemdF7Oaz/wCLW0wvIz3M90rIQGqleIAZAw7GuI6J/EMykR6nZH5ZTVuj+sPhXVUAa48pm7NUhhlF7K5yuNCJVljuGAPFO4bhxtySMUyl1jSr2QSWl5G4bpg04BV49yn966bxpo5XdxkSwuN0YwadafEZZwc55qHh9SAVa9FhVV3EVx+Rj6M9z+MzJ4ixWi+XEB3rLu5aOE464okZGwn2qNvSZAcHjNYlIPJyEDqFwWVmc5qKtkaaYqB1pzqAxJt7U60a33TBiK1LUbPPy/edBxpbYHFZVrEA2j0jpWVR8jNPxoeqCzYGTT6JTjBFBgSn+zCVzEjotjZ32t+KyIlpRSLgcjFEs1ywJHNNFXILemTdovTinxAK4xQLYYFOj0rrwX6nLyPZB6rbboWwO1cq12NoJXyOPeu0XMYeI5wa5p4rsC8chC1XOOzufjM9SpnO/OBDYOar2q79rEZJqZijYTshBz0pU+nmVCTznrVXjPWXao5o80gkIPFOrOEzOCanbnRAZidlObHTth5GBTOTokMKbtjnTYfJUVZ9IlX9chJxioNl8leBUdN4nsdGl868uFQL2zzQgnJ6Ls84QxO2ejdFuY/JUZqR1HXNN0u2Nxe3ccKAZyWFeR9Z/iGktIDb6JberoJGrj/iD6heJ/E0zvqOpSlP8ikgf2rpY8La2fN+XljKbcT1Z41/iP0DRjJaaKhvrheNw+0GvN3jP6z+L/FLvHLetb27H/hxHFc2knYksTknvQUDSSAZ471ojBI57Y9iaW4lM87Fuc5Y5pw7ZPp70JRsUe1IkkOeBge9XIrYQbkJZhxQmQA5YkZrGdiOecUM5bk9PaiRMzA/FaPQcZPzRP6eRQnYlsCoKLB6fNdU+gmotYfWbSX3cPujP71ytduBz6qt/wBNbwWH1O0K7Y7QtyoP7nFMlehvo91eLtJa3uxqcCfypvvA7Gq8hJAOOnaut+RFqGlGGQBg6VyzUbSXTNSktpVO3PpOOoryfP4/STlE9b+N5XeKhIVG+TzkCnCybByucnjmm0O3G3PB55oiowyOorj+HcHoG9c1ryyqkgnNBjYoQQT+Kcq+7Bzn4pkVgshkAfG7tQ5I+AxTmnBQbiCOtJ2zIDt9Q9jTbAQ9xYxux2oQfio2e2dGwVJA74qxsSScjaO9NmUHphqFkK40GDuVgR3FN5bZSS+zA96nJrRDIxVCjHv2psbWUrggOPimjJlco2V+a2VQSmefeo+V5Is7gw7Cra1spBBXNR09jGx5jLfJPStMc7RmlgT8Kt+rZGcjeCelHTU3SJVJ9WalpdNDMTtU4HHaoybS3Z9yJ+auWWL9RV8Ml4x0NZ8uPsO5pS6/FkBmzxkjNQs+lysWVl7dKaS2TRp/wxxxjJo9sYOmREy3iKCQk7thHTmsi8QRSZ3ydOKq5t5RlkgUj2JoDtdJJ6YFA6DFHtjFUJstw1yMoY4yCB3rBq5YEe/xVXU3a4OxVY+wp3HBeS/ccMfYYpXkxodY5Mk21BEZjuO7saCupymXMO44GDRLfQJJQGnyfnNTFto8UY9CFhntVbzr6Q6wf2yIWW9uJFVVK+5NSEGml3AnkJqVS0VWLEkY4wKewQbQWcYFUyzSZfHDFDRbKJFCqCPbjmn0dkVUdsU6iReRtK57mnsUIIOxCT71mc22XqKQ3SHZEWbt70XbK6AqpUY7d6OLcK26Zs45xR0ZTlgDtHSlodIDFDKoG7gnvW2bYdqNk9zW3Vn9Zcj2xQzwMAde9DwKQF8r7n800kOSccsadzsCQBnIprsJY7/9KQssEqkjBPNObSxe/v4bNRl3YZx7dzSRtGWOAB7mrx4G0nO/Upl5b0qT7V0OHh+XIv8Ahg5uf4sbOe/xHyLp30dNjH6RvSMAd68ORryRjFezv4q7tYvBthZg8y3G7H4FeNR8A9a9vFKMEkeFnPtJtm84yo/uaHj1HJ6UQ/I5oRxnNRgs0VA5Uc1mFYcjp1pXDEDNI5z6ahLEqgBPGRRRgrhQMULJyc8VsE5FAhvb6uKFKkhJIPSj8bTgUnnaQaJLoaKzE8HkUUF8daHMjJh15HelIQwFIMLDEHk0tJCTkEEUgAZOelYMZBxgURWx0rqQOcHvShJj7Tz703HPSlgdAKJLTJCDVLu1dfIndCO4NWvTPqHrVkoV5vNUdmqjBAct70jLZI7U6k0VuMX6jumh/Va0adE1CLYvdhXZtC8YaBqMKG2v4snsTg14oR8tzkfFO4L+4gYeVNJGR/lYis+XGsnpt42d4fPD6AxzwS24MMiuMdjUXfzrFE2Dz8V490X6leJtGZRFqMkir/S5yKtafWjVZF23cKuD7Vg/w2mW5uV38O0T3IknOTnJqx6B96nGRXBLT6o6fLMnnxlCeprqvhTxtoF2EC38cbccOcU+XE1HRhxTbls60MbRx2rKjl1rSigP6+Hp/nFZXO+OX9HS7r+yywRdKNJwuBSohgUC4kCjrWQ1LY2YF396PF6G4FDhO85pxt5qRVPQ0nqiUtZCQKfZJGai7UnjtUiPsrrY/wCJzZ+m2HpIqta3ZiSN/Tn9qsZYgUxvUDxEd8U7SZZhn0lZxfUdNMV4zInf2pnnY2GFdB1HTleQtgVSPEbWWkWzXN3cJEBzyap+Nvw9dh5seq7EfLHET9tQuq6vpWi27SXM6IR/TnmueeI/qkiB4NLXJzjca5Xqeu3mpytLdzs5JzyeK0Q4re5Gbk/mo411x7ZfPEn1RkmLwaYmxem+ub32s3d+5a5maQmox5CzYPANDd9pxmtccUYeHmc/OzZ/5sU7k5oby4XANCcux9JrWBnrVtmJG+SPzT6GLCDj1YoMEWWye1PWO1fSOtMkBmbWK8ngfNDfaOhzmsR+uTwaQ2c/b+KInonnGaUOofOPitdTitlR161CBVcYb0hs0A539OKzeBxnit5wQB1PvUCxcaIJMrkmnmm3Rs9ds7pTgxTK/wDY0yUAGkk/zQ3TBor0l6PqR4XvFvfD9hdq2VmgVs/kUjxFoqalalkUecoypqk/RLWhrP0n0eXfueGLym/aupphkwax58alaZpwZHBqSOLyxTW9wYpUKuDgg0+TLKpVhkdatvifQGuf+t2y/wAxeSPcVTEVkYqQQQeQa8tyeNLE/wDh7Di8uOaP/RyODuPOaNt6Op470NdrJyenSiKT7cCsiVG0IhMnXtSxvLcHFCyFOV4FF3EKCPUKKYgORGYjIAOaby24Q7gOT3FOpE8wAhttDcNtAx1oMKGMiH7c5B70LywW4zkccU+eItHngD2oLRkKCOMUEyUNZIkIAIbPvQ2tSwJ6+1SSeoZOP7UkRjkLwfmimK0Qr2nBWWPA9xTZoIgpSMhSeAW4zVhKMAS6+Zj2oJit2wZYz+9NZCsyWaovqXLHuDmmEtluLEAfutXRrO0lHpTn5NIXToAcvmoSzn82lEEtGAc9eK1HobTEdcfiuijT7Vjwq4oi2luq7UXAHvUZNFCh8PMWyYwSKkV0do/V5ahvmrd5KBcKoP4oQix1XJ7UtB0ivRWZ43jGfanYslClTnHsKlPIDAlx/atMY0UJzx2oikctmQQQg/FEaBVIZzlv8vanOJ3+xdg96Ilsg5clj70jexgQhLRgquKcIGjyG9C0VU3AKBwKXs49RBHtQpDIAQpGQpPyaRIV9KkFR8UaTIxnge1JKgDJ/vS2MgbjI2rnFCZtg27aK8yqAucMelBZWPC5JPWgRjeQk5IHSh+W2wu3Ap60QCKo6dzTK6lKMIokMkrnaiL3NPCDnKkLKfVWw2m6e+r6pHZQqeuXPsK7Lb20en6ekKABUGKgvB3h7/B9LEs4DXc/rkb2+Kn7k5G08CvV8Tj/ABRr7PJc7kvNKl4eR/4rL4vd6NaF8DDuRXmEIMbgw/Bruf8AE7qYu/qPDZKwKW0AHHua4YAm3DHrXZ8VHHrZnoI5zmhMoxiilDnIORQpSASFPHzQB9mvTjDf6Vrj7RxWlYLj+rNKzkAgc0AsxlAA9XNCIYDI5opIJJIzWlO3juagEzGboDwazPHHeknLtk4GKzrxUCzDgnBFNSPJkKg8HpmnfpoUsYkGB1HSg0GLMUkrzit5HQdqboxUlCelGHJP4oBdigwUfml7/SBSFAA561sYyKYrDqx2cDisw2MAdaH6dvU0pckUSClBVueDShu3EsOKQWyck9KX5n7ioEwZB3bMisMg25rZY7R7e1J4AxioQzexbJH4pzFdTwsrRyMpHscU3JOAcDNYCxPJqEJoeIdUAAF9P/8AxmsqH4rKHVE2fTYOQlRlxIS+OtPZH2pUef5knFeQkd6LHtouQDipER5ptbJtQcYqQiHNaMUbK8kgkMW1elHOcAVpeF5qM1TXNM0iBpr++igVf8zAV0oqjA3e2SR4FQOuazY6XavPfXMcKKOSzYrjnjX+I7SdJEtpoMIvZxkeZn0ivNXi36k+JfF9276heyeSTkRKfSK0RxNvYO9HfvGf140zT45LbRlFzPyA/YV508TeNtZ8SXZl1C7dgTnYDwKrbzFm55PzQTJuOG5FaVjSEeabVWbaUs2TzQ2ZS2K2x7L1pucnOc5NOV/+mpAmODzQnO7FK2YJyKzbxmgBMH5bZyK0Cc/bmnAHbNLgT1lsA1KC3QSEhIwMcmtu5cAdBS8qccAYrZdMDK4NOLYDkcgg/FEYkqOKScFiRxW8t0qMiE9MnbWBTgkYOfesYybiOoNLAIAJPWgRoHgA4rRLdxzRZAvBB4+KG/JyGBxUFFKTu5XNalPGOgrATxjrWypIyag6PXf8KevibQL/AESVxuhfeqn2NeoUODmvnx9A/FH/AEc+pVpG8m2C7PkPn56V9A4JFlhDqcgjNJmWrDD+h2QHHIqp6/4dE266s1CTdSP81WmNuMUTCtwawzxqapmvFlljdxOSKrJIUdSrDggjoaMF2nJJq66zoEN4hlhHlzjo3v8AmqVKZbSc214hSQdCehrgcnjPHteHpuLzFlWzZPBB5FKjG4blPT3rMbgMeoGsCMjHFc/aOj6b3Hdgjmks0hOCOKUctyBzSSDnJGGFRsKRsBHG1sgikrA2eCCPY1rr14JoyHB54oWiMatHJG32naa1jacknbT4uduDjGaxY0f70B9iKahLGChQ2Y3Iz1zRlyRhlV6M1uQcYBBpBtufuI+faikSwJgiz9pTNLWJNuEQfuaV+ncDmUFfY0NIZ2Yk9O1MqFCBQh9SKoNaYx52hv8ASt7bkf8AuVx+1KCueqhT39qBADvwAGH7CkTHC4VSSac7UGcrlqS0bMOR+KgRukDeSXlYKB0Ud6StsD6mA5NHKEsMsTilsPTkcfJoBQ3chFwiZ+aRyUyentS2XjKmtbBkEtSBNrnAwMUsqduCOtLRTj3FGCMV5HFK0NY1CgenAzSXHPJ6UWTZHnn1UIEs3A3t+MUrCNzErNvK9O9L9TcDgUYIcYc8dabXV3Daxsciik34RugN3LHaQF3OWPb3qz+CvDLO41rUY/5j8woR9g/+9R/hXw5PrV2uq6mhW2Q5jib+rnrXUkVIowqqBgY4r0HB4vRd5ennufzL/wBcGYzBVxUZezCOCSVjgIMmn0hzVI+pGtLoXgXU74ttKwsBj3IxXcxq5HAk9HhT6q6p/jv1H1i/VtyCYop+BVGDZJUjind5I811LO7EtIxY57k802PPWtkigwk7MLwBTV88jGTTngAgGgnjPvSABJgY9ODRMMeOBWlzggilBiRgnmgQ0AFBHtScb+c4pQGQRikPnb0HFQhnpBxWzihLxzzSuc89agUhe7b2zWvnvSN2T0reQTkVCAbiH/3oPOeaSm4kHPFH27v3pv6kk2t2NL4OnYcYznFLGPjikjBFLwNv2kU/ovhm5cYxnNb5YDkrSeSPbFZz35FQDF+WpGSawAA4pGWB4OBS0yTyKgDYLDg8ClYZicMK19wx39qzGOPbvRIbwCV5yRSjjPTmkoQBkDNKCgjdnBPaoEz1f5qysrKhD6TXTlSeaDauDLzQr64CqST+5qt3Xi7RtHQy3t9Em3qu7mvNwwOS0dR5VF0dGhG4DBoGqa/pGgWbXOqX0VvGoySzVwDxL/EJbWUMkGhwebJ0DseK8+eJvHmveKbp5tTvJJQTxHn0rWzDxZJ7KcuaL0j0L45/iUgiMln4Vt/NIyP1Djj9hXnfX/GviDxDdvcajqUshf8ApDEAftVXMhIzjApDMvuc10441EySkw0khzk8560FnOPRx70jeemRSSWxjqaehUzUjtnjqaCSwGTiinIHJxWlwP6c1A2IWQd6xmw3A/vSmPtihMwPB6ioCzCc98n2rQ5GDWiBnIOKwKTgioRCmBXg9KNEMQ8DmgAF5AjHGaeBCq5AOPeiRg+DyQQa2SD/AE8URQTnB4+aR5RL4BoiiQUDEc0scL1GDSXRlHIyfitoGH3LgfNAZGbZCoO4UkYP3c4pQbGSOQKxipxkYzUGBkEg4BNJRMKfml59jn4og4GTjmgVglIA460tjkYA57mk7cDO6t4wM9QKgbDafcy2Gp293AdrwyBwR8c19IPpl4mh8TeBtO1GNwzNGFfnow61813xu/NenP4XfF7w31z4YuJcI/8AMhDHv3Ap67RcSN00z2KPxS0bJpCHclKC4Nc9l6CEAjFRGr6HbanblZRhx9rjqKl15NL2giklFSVMshNwdxOU3drdaROLe6U+X/TJ2NKV1ZQVORXRr6wt72BobiNXU9iKoOqaHPpEjSQ75LU9h1SuJyuK4/tE9Dw+cp/rP0AVx6h/pWu/NbjdXjBQgj3pZ54NcmmdhMbO38zDDjtSlPJB6dqWyE4LckVraGXAwM0tUMKRT0PqomHA9IwKEBsHByKWsrg8nimQsggLAAhv3xSvuHqIwe4pG4E8MfxW/Q3DGrCtmipBwFyPetN5nReBS9oHqQ/61pkJIIyagAR84csn7is9TL0waJh8gc5FaZZt3UYqDJgsSscDAx3xWeRIeWlJBo22VsesClGNNuHYkCpRGxuFQcA5x3FIcoOOWzR98MfQAD3pu0sRbKjLUrGQkrlSCQMjpSAEUbmO74rCXKk4ArSjqWNIx6CrIVX0/wClb3SOpLEge1JWRFPAyazzWZtx6ClslGCFOrkkikNKiMcde1akmJOc4qHvbtIAxDFnqVZPPRzeagkMZLMN3tUh4Z8LXWtzpf6krJaKdyIeN/5rPCvhS41e4XU9TUrbg5SM/wBddXihSGIRoAFHAA7V3eHw0v3mcPnc6v0xmQwxW8KxxoEVRgADpWnYc0tzQDnpXZSo87bNMSfxXBv4kNSNt9PmtVfb50ig/IrvJ6V5S/ie1Qs1lpytwDuIrVg9En4eXJWUyY+4Cm6YyTjmltu8w54yaSyFW+KvZSION2W4och5zt/BzTjAYc8Ae9AdRnk8UpAROBg9K0rEHjAoxHp6cUnaMA4x+TQGX/RLFwRhuD1rBjIyKUAQcEcVsn04wPzUACwVzjkmtDfnjn3ouHkQAHAHekbCD1/NQhnPJrYjB5AJ962yKoHqy3tW13KOG6iiASqNv2r0oFzEwY46rRvtOSxrRXeCc9aDQyYCFzyO57UdS3egbfKmzniigHIIPWovAsw5pajjn+9ZNGoI2uM96QCQuKIgcgbQdwFI3dQG5rF2kEDqazbjnuKJDYY9TxSwAccGhgFiC3SjqSGyOBUIJxtyCcUgyADrk0bgud2T+aSUUkAgAdqLRBG8f5ayl+XH71lAh6A8XfWXU9RLQ6cn6aE/1dzXJNQ1m+1GZ5J7iR93OS1R0krOPU9NpT6dqNxSxhGK0hm7FSSE9XyaQmADngmgk9FHWi4Uphhg0aADY54wDWiO+cfFacFOQMitFyeBRI2LC8joDSGIByDn8Vov3waGXBOADUAYcMcc/vW93B5xWlUFmO7kVhQbTuYfAoMgIsCCO1IPqwe9Exng9qUwwv28UCAzHleM5rRDjjJpRyOelIYnbuNQZC4I8yl2bJHSnS7xkFqbwKMdTzReQ3Oc1ANiwAVPr5rQ65DVrI3AsM1iuvOF/amAK3eojd/etlnPBHHakAK0lLMbk5EgxSjeCFJ5G3FawTjnmtlZQcnFay2FJOcdqNksSwC9epogAOPakSKQoJIwevxWL0yWyKgotjg7WOKIsY8rfkCglyGGORilKSyen81CA3Pq96t3068QP4c8a6fqKOV2SgHB7E1USGOSRg9qJAxjlVuhFNB0yNWj6m6NfpqGlW91E25JUDA59xUpXF/oH4qXX/p9bwvIGuLUeW2T/auzKcis2aPWRbB2hVLByBSMVvkVnY4QgYoUsKSoVZQQeoNL3dqVStL7GWvCia14bls2e90tSUPLxf8AmKgY50kHqyr91PUV1goCDmqp4g8Lx3qtdWR8m5HPHAb4Ncnk8JS/aB2uJz2v0yeFXHHIbP5reVY9eaYK0sE5tr1GimXrngGnsZj6lh/euHOMoumehjKMlcRa9duRRcgcGhnBG6kByDgmlTD6HCxt+awRKOvShhsdRzSvMO3mnUhaYoRsPt6e1LUnBwo4oQk/7WKwtgD1Yp07BTCrI/XpW8knO6kI+R71hc9TxTC0LOPehlMDJakGUZxgcUIyg5IfpQboZRYt8N2G2m7kK2ETFY8oP24ptJKPV6sk0jdliQt3JztP5pIJI5zQF3E4JxRlkjTILZc0n/AhA4APQfmhyyBRgtQ5ZmYFQMAd6hru7Iz6ske1Svon1Ya+1NUDIg5Hepnwh4Ym1e7XUtQjItEOVVv6zW/Cng6bVZV1HUkKWw5WM9W/Ndaggit4FiiQIijAAFdvh8Ov3mjic/npL48bNwwpFGI40CqOgApROBSicChk967SR5xu9sSxyaTitkc5rCfScdaIAUjbVJrxP/ERdm78XIm4lVB/avaF9N5VpLITjapNeDPrFfG48ZSkHpmtuBUmyuTOSyD1gkk0rJ+7g4pefRwo3e9a2rsIZvUetO2VAXYMoC9e9CbB4zke1bJK5Crn5rR4wOlAJjEhQvSh4Vhy3SlOrlc9aHsB5GfY0oWEAXOS2azj/LikK4LYA5FLDnqR8VBRXq2lft9vmh81ihi55JwK32P/ACo2QTkE5J/etZ+eKUQQMgftWskDAwB7USGsZIweKXtbOFNZjpt61pc59jUIBmQt8kVqJsqPcdaORz0FN3QxNkHrSob0Lt56Zre3IyMAitrhuc9aVuHJAH/3ogYhD6scfmlgZBG7mk8Y6c0uPO85OBUAaAVfu5FYCO3PNIZgXI7Z/vW/T0A60SBQzYyTW25XmhBHC5xkUQPhccA1LIJx+ayter/MKypZCRIz15NJYoCQoJonqJzjBoe0btzHFNRBAxkEqc0V8Ec9axlDRZzzQicjkZxQogNiwHXj2oW7PTrRAM54rQYAekZNAIgltuM1rJ3Yx060t+ADkc9aHG258LgMe9QhvC7mbv7UJiey5ojg5PAyOtbToSBnNQANCoIyeaWT1y2RW2ChMigkEjJ6UCCieBSJFLMFPNEKgjjjitwMPMdmGQOKAyCx8kKAAB3pRb1/cP7VhYGLIGDSFQHvzRFNsRu7mkoGz2FGEZ2AjDe/NCIXJzxj2qENkDPI4NZsOODxSFkyce1b3DB+6oM2bCN3bOK0VH3FuR2rQIHC5HzWOMDHWoRCSD93UUsZxjAArSrkADilDaDyc1BTaA5wR1omfL4Qg56ihZYkkfsa2gcMdxFQhti2OnWkdMHOSOtOMAIQxz8UE7TyD+1Qh6A/hs8VHTfGUmkzSFYbteFJ717bhYEZB618xfBOtf4D420++ckrHIN209q+kXhvVIdV0K0v4WDJLGpGPxUzLtHsNB06LAOlZ+K0Dmt1hLjB80sHmkVscUGEIOtaIz2rQPFKpQkJrWgWer25SWMCXHpccEGuZ6hY32gXPk30bPAfsmA4rs2BTS+0+3vrZ4LiNXRhjkVjz8WOVWvTocXmSwun4cugmSSIMkoI70VlBwytk0317w1eaDK1xalpbQnPH9PxTSz1KGVcMcEV57LhljdM9Riyxyx7RJLdgc8H3rRY5470kSpKOCD7YpagEZJ5qimWiS23kA5rA745GPii4UDhgT80kbRyTTxRLNpKwOOgrDISxySR2FBkdQSVrSyAEEjmmYEjJJHzgLQiW5BABNYbhWY44oLTnnavqpGyxaDEAptJA/emjGJFIRgWNaZ5Cp460Arxz/eoiMcq7cMftFJkmiRt5xmm7y4jCIePemLrJLP5EAMsrHAUUUm3SEbUVbFXV3NLKEi3Ek4CjvVx8KeBnd11DVlOeqxN/wAzUr4U8GpZql9qKB7g8qpGQlXsKFGAK7nG4ajU5enn+Z+QbuGPwRHGkMaxooCgYAFLJFYelJNdZI4Td7Zo0gnPStseopOeMYpkQ32pP4NL6LQnPp/NEUrviy9Fnos77sHaa+fnjnUf13iy+lDbhvIFe1fqffNHo8yIxB2HvXg/XpWXWp9y+gty3zW+CqNFUkRGJNxODWiDnjnjvRhKDyp4NIclu4BqNCAhyNrEA0knqOo96VgMM7uRSckHhOO9KQ0dyrzyO1CyWHXGaMeTgLxQjkcEUA+mhkcAc0oscAE5+Kxcl8ccUvDbTk85qEBHcVJBwa3Hg5AYcilEkLknr2pBwD6R+9EjMxufHJP5rQwCc1peGzzmiAjoRUAI3EDIGRW9q7gcUoKWIGOPasXAyDziiQ2ASQQhPzQ2j3qcHmiq2PtfpSDhjnJzQGQCElW8tqcYHQ4wKbToY5BIppwp9GSeMULI0aOeaR3wwNH2gjrmtBecsc4oiiNjKB6dorFKhyS3/wCijLyOufzQygB4XJokFKyqD6sihEgEZ6GiBRnmtFV3crgUSG8R+4rKzb/2BWUCEhzgHPPtSChJxjrSlA4GeawLz6jjNP4AExwCC3NC9WcA8UZgm/Gc1v0gMActig3YbBRkofSMtjqaCTgk4wSaKGz6SOlYcHkdKFEugWwYBAyayOIEsDgGlbua3uUA5A5oB9G7FlbGM0ogrz0zWMSRnpWc55NQNCSWbIAxzSjyw+BWwT3wBWECgAFISoLdqXEMRj55oMgOVXrk07xhQCOlRAN53NtJxWNgE1ihSdx4FY+484B5okN5CrwawYwSeSaQcDgnBBrM8dc1CClYAZHP5FEMpUA4Bz2oaH+lhW9uAxPTtUIJPMmAuBW5FQgCPr3FIbIOMkk0nAIPuKg6FKyRnk5NZuQ/bxWlUMv24x3rWeOBSioMhPTjNKI9Xq6juKGM8cha3nMmM8e9EjN7iH9fqrNyhdwGSe1abaCWLjAFaiUk+YTnd0FQAtB5RLqPV3PtXtn+HDxeureFRpFxJme14GT1FeKOpIyM11f6IeKT4c8d24klKwXBEbfmrYq49QPTTPoMhB+KVTO0uEnhSZGyrDINOxntXOkqdGlO0Z3rdZispQmA9RSx0ofelr064oNBF1lYMYrKUgGeCOeNo5FDKwwQa5f4o8GyWTPf6YpMWdzR+34rq1IdFdSjDIPY1TlwxyqmacHJnglcTg1nftGQjkYzgmpuOZHQbWH7VYfEfgaG58y60oiGc+rZ2Nc2f9dply0M6tG6nkHvXCz8eWN+HqePyoZo2nstW8DgDJrRn24DJzUNbawkxCH0tUj5yuOMfmsnU1WOdxfooAoRySef2pIbA6kVv1H04JPuKDQbM2KI+VxmkhR1x/rSHwpwxNCbeRgcA0KCbkbngUJ1Qghj+9EwqJ6iN3561I6X4dvdYcNtMFt/U5HJ/FWY8c8jqKKsmaGNXJkHBZXOoTi30+IuxOCR0FdL8MeELfR4/wBRcHz7puSx/p/FTOk6NZ6VbiK2iC4HJ7k1LYxXe4/Fjj/l6eb5fPll/WPhoDHStnNZWjn3rcco0elDOcUpjjnNIz80yAJOM1utYOa3jAohNE4FAmfbGSaIxxTC/crbMc44qyCtis4x9VLxmsJlU8nivGGrN/7TnVz/AFHmvYX1KYNZt36k1431JmbUJyR1c/8AOtzVIrkyNZCDmNu/SsSYEnAw3tRSMgAdaFJANmeA3uKrKwigkZIpGOWC5HvQ0cqNshwRS8hm9vmoQT0POcfFZgFtw5/NECc4Ubj3xSSBg84qBTEBfXmtsMuSGwKzGB16963sTbls57VKDX2JUbuM5JrAp6E4FKb0qFU1m04AwTnvUFNEKoyOa1n261raxyF7Vm35Ix3qWFGF/UMnn4rDtDdM1og/08571jZxk1CM2QFP244pYAIyOD2rYOQrAZOOaSME4Y47VCCJE3IVP96DC23MZ/1p1llb8U2uEPmCVRgd6Aw4HJGeB8VsYJwOaHGcqCT0rY67gcUwgUkLxjrWgGJUAgc1o4xljx2oZz3Y4qECOGWUg9PcVnHtSQB8/wB6Vke4okMyPesreP8As1lQg7xnjBJP+lIYPj8URmZWyhwPahK4ZjuzimSAIPPA61hG5fZqUSDyBx2rC2I8jt2oMgNgVTIHNI3DbjnOKWcsFwaUcFWGMmgEESe3B96S3CgHJPvWmJ6NwK2AWGBxj3oENerv0rW0nAU/3pZdMgE0Mn4J7VAiygfjPIrDnoO1IUjHAwfmkSMADj+9AgpFaSYsAMLRS0gPOMVq0YpBz1Y0VgMZqEZpnjZMBTWoRmTklaUmAeMc9aVweD2ogESgByAc1igY+4c9qX6QScZHY0gpzkdT7VCC1QlT8fNaTJyHX8HNa2EMDk59iaThy5J6e1QZmMjEF/6R3pB57jbRRgxlNxz7VpCCCmOfeoA1t2x8jitoAVOBmsIO7lgBW2KghYiWGOahEIIJPAwB3rYRT6Sx96Xj34pEsm3GBk9AMUCMRhGmAIyq9fmnBfkDbgDpihpgEM45NFLgKMd+tQAkBS2ccU+066/SXsM0WUkjcMD+KYEJyRwKWhJcZHA6U8XTJVn0V+k/iWPxD4Js5fMzKiBWH7V0hTwK8d/w7eLXs746XcS+h+ADXr6Bw0YYHINU8iFO0PB/QesrMjNZWQuMxzWVnSlAigyGweKVSCR2pQPalCb71lZWVCCCM9KhNZ8P6fq0TLcQqHxw4HNTjOiAlmAAqu6rrR5isAJHPGe2aKh39Q8Jyg7izmet+DtT0cvdQL+pthzuHUftUDa60InKSY6967tazzy2KxXcCsWGGHaoG78FeGrqQyS6Z5RPOU4rBl4Kv9TsYfydKshQotQjmA5GDT5Z08rhsVPv4C0EtiC7nhI7ZrF8C2mdq6rIR7Vil+PyG1fkcJV3mRMliCabCdppFSFDJI3ACc1bpvp8rcRak/PuKs2h+F7DRIBsQSTEcyNyamPgTupeC5PyWOMf09K7oPg+V5FvNVOAOREP/Or7BCkcSxooVVHAFLQAn4ogGK62PFHEusTg5+RPM7kbwBWVlZVpnMpJNbPFIJoohpuRSMUs9KT0/FMA3Wm9q0TiksfTmoQGxyeBUHrVyEh2buTUvNIFUmqdq1yJbhh1A4rTijsRnNPHUTXFjcOcBVjJzXja/YC8mOeNx/517P8AGj7PDmotjG2Fv+VeK5yWlkwuSTk1tmv1Km9gSS2ACBQsFh7DNLc4XDDkdMUPccZP9qoIbeOM8ZzQxvjQK5BXPB7iiqsfXBzWEbuoB9qADFwr5X2zmtkhl65z0obAB8r9vtW0IbJXoKgaNNkcEcVgPA71gbkrkYPvW1ARt2RRCaxyDg0pskZHFJD+rmsOSuBUFMAOck4rRPp6cUk8D3OaXjIyAARQDRpQGGFOK00e00klQeSP2NL4IG0E57GiAUqKMZfihnCttHOa2E6jFL/p24GKhBTSlkVSiqFGMjvTeRGZdu4YoqccN6uOK0cYHFQdDOIvFJsbmngIYe1N7lCF8wdBW4mDoCD+woAYcrlQAARSAM8HNE445xituTtDADNEUwKMHc3FKWPKhwAAe1IQtnLDNb83dgYIxRIK3AcYrKzisqEHamIx8sd1By247B+9JO48KelKVgqnJ570bAI3BjggitsVA+ema3vRmwD2oZGVxnvQCja4HJNKbAGMjnvQjuGODSwQMBh1qEEMu0deTWMCFGV/eljaQSxyc0MuxyAOKDIIITcCqfvWdDz2pYPpGKwnj3zUIDcd+xoL8sEHOaKScE46UmBC85b2oDUPBEAg6ZHatFSRkY4rCuVJDjPxScPkndkCiKYAo4J5Nbztxt5NaKtgccmsw3BNQhonn1HB+KUHUDGawHkjbk/PalBUVgXXIPcVCGnOc85JpIz261jbc8ZAHelblXleaNEEgk5IFZ1Jy1KcEHIPBpOVZc4zigQQAPuPIpbEcbRg0tMN9q8UlgwbpUIIbKZfBH5rSB2TcU/FKZ/NIXHCck+9GAYr6jtoEEqm/G49K26FW9XTHFaKhc55NJAO0jPFEhvPHJokWN2R7cUmNgv/ABOQfYVt1Kt6Tn8VEQu30+1iXSfFFrOG27iB+a+gnhTVU1PQbW4VgSUGf7V80tPn/T30VwCdyEGvcH0Y8QfqtJjtnOQygr/anmu+MMdHbwaVQkPFE7CucXm62a1WUrCKFb4NaWld80GE3Ufq2r2GjadLfahcpBBGMlmbFRPi/wAY6N4M0WXU9XuljUA7Ez6nOOgFeOfHfjvX/qLqPmXFxJaaUrHyrdCcY9zQbSVs2cfiTzyqJdvqN/ELfX109h4RXy7VGw07DmT8U08FfWW7tpEOuWbuP8y1y630q1h2sR5g6jvkVK2YihCyFN6Yzs7UMXJSdPw9DL8Q/ipbZ6Oi+uXhZmIZpVb220S4+uHhlo9iCUk8A7a4va2mialatFDbbJeDg4DA/FQuoaLeWc4LWrNHgkYHT81ZkzNbijNx/wAfhb65v1Z3G2+s/hSNib24uD3wFqS//HfwDEm6DzmkPZlrzVcxW/lRrtGM9aZuljLcurKsWONx6EVnfKb9R0Zfg8P0z06PrZpN8T+juI4iOz9arOo/Xe20/UxI001wBwVUYU1w1YbeIEwwBw3CmgBILicx3MDJxzxkU3+VfiFf4PGvs9m+A/qh4d8bWQFncrFdqPVC5w37V0DPArwZ4Y0WyXUBeQ6y+l3CEGOVWwQc9xXqjwf45AsoLHW9Stp5AAi3KsB5n5FWL91aPN8ziPjz6nS6ykJIkihkIIPIIpY60DAaNJrdJooDEseaSaxutazTEMYcUNueKISCKGRzTJWBsjdTk2QkA81S7x9uWPUVZtWky23OKrN+MwvtH71vxIrk9HPfqHMsfgfVJx18o143k3Fie57165+ppMX061JmPVcf615DcZkwHxV+TwqBYzknGeppOFPPejhIkG5+QemKQSiYKDOelZhjEOcAAfk0kjbncQR2x2pDM2SewrBk9GqANDd3XFaYhDuQde1L3A5yOla4z/8AegOmIIBXfkAnse1bA9JwQaQ6BznOK2hbcY+AetQVmzgDBakqQfQMlj3oohBYeYwAxzSTCI24+w980QCSjI21ufmt44wFz81vYFYkcg+9Zn2PHegGxIVQcEVvcc7QDz7VskYOKRuYEHpz2ogDMGQkHI+DQ+oJ6ilMSwDsxYnr8UkA4GPeoQ0GyQV/tRSufUWC/FICnGTgCt4I5zlagUwTsCCHGRTWL+VKVHSn5Q7clc03mjGN3Q0BguBwTWyvp3dqFG28DFHAbcFz1plsViQWIyGomwEYBBbvQjkja3UGigDBwCGqVQDflrjqayh7pBxisqEHW1Rn18kUJk5IOSfmllTu6ilkx88ktTgGvlnPPFKjXEh38D3ojJz6jSWZSuBzSkMY4QktyelAZZC20E4onJIwMmk8+YMnFAIkjACkHisyQuNvJ9qIxGDt5B96Fgqo5FAhhIBGFPHzWs9O1YQVwema0QcUAiTwpbrRYUdY9w6vyc025eRUBPJ5qQLgek8cYFQL0hChN32mtsfVnIGe1Kb23YrW0nlj070aFEj1NkvgilFgW9XB9q0wGc8VvAB3cGpRDRU7gQMj3ref6TwPetgryWGAfaktjohOPmoE0QVzgn8mhhWPK84680v1Hgck+9KUkAg5IHXFQAEHaO/NFAP9Iwfb3pIKtkrxSwSo9Q5PegGjZXHG4DHtQ5ZWQYwNx6Urei5zksenzQlRtxZlJJ/0okoVDgdDj3o/GfSeDxQFBAJI/FGRvTk8/FQAojapxggd6QT6fg0phngHg0I5H7VCCgSvY47UZVzgj0t80PjGdxI+O1YAwOOpPc9qhDbO4myR09u9eo/oPq/madECxEkDhTk9jXl4tg4HLV176K6ybHxStlIxCXA4HzVuPdoDdHve2cSQqw7jNGqJ0K4E+nRkHoMVL9a581UmjRF2jdZnHFYKz+qqmMLA4qteMvGWk+DNAm1TU51UKDsTPLt2Ap/r+vad4b0W51XU7hYbeBCxLH/SvCPj3x/qX1J8UTajcM6aTbuVtoO3B6mlbpWzXxePLNPqhx4v8aar4+8Rf4rqsgFsjYgtR9qr/wDemViWYxxquEyQMjFM7aANEjmMYY4zUrZxkW0W5Sdpbkdawzk5s9/xeNDBBJG1Ij8shQQQ26lJck8+X0TAogA8iMOArCMneKQY/uJztAUZHehRt7IJHdXMcxMbbWyOnB6VLW3inUikcVzJ5gUY3Ec49s1EjAlYhcAP369KEkcgk3KegJZce9WRm4vRVmwQzRqaJaSysdRhQw5Sb1NuHJP7VWrjTLmF8OhG0ckjipEyTW8qywuQ6p1U9Ks+m69p279LqNkr54M3dvyKu/TJ76cyWPPxtwfaP9FDj86FE2ghcEn4owmcrjG/tmrlqmhafO73GlSZVY9xQ8j9qqbwNbyFZAyMBnkVRKDizdx+VjzLT3/QNkgcEEkOewpsYbj9SiJfTRuPtG84z/5UZkIjBf8AIPeo24uE8x1kbBzwB1psc3Ez83DDNH9kd6+mn1muND1C38O+KbpZbNyI4rknmM+zHuK9P21zDdQRzwSCSN13Kw6EV8ytUmLhiHGQK7z9CPridPeHwl4muGaAttt7iRs7P+ya2JdjxPIxVJr7PYFJpMU0U8ayxOGRhkEd6XQMDEEHNIPHWi9zQpBTEQljnpQ3JCmirzQbnhCfiniCRWdRcNOcZOKgrslYGGOalLtt0znPGajrhN8ew1vxlclo5F9ZJTB9Nrv1YLuB/rXkxkQ7m5/Nerfr+wtvAVpbnG+WbOPivKZDj+nrnircj8KkgXVQM8fNJGBnJ5pZPDF8ZB4FAJ3NkjFZ2EIV3Ac1mFJC5HHWh5K9awNk8dTUILKgZ54HSktgjlvxSmB+1gB+aR1wAeRUIZwcBsAf86VGP5hbt81qTYpB3Z3dPisYMRx0qBEF8T7Scp2NFUgg+rj5pAjAb1nOKGQoclSdp6igRiycPxz89qx1PHqyfatqVMXBGQeK2F3YJIBogBKBkkk56cVs56LS2XapwOpoeR2HSoQXxsGSKIxUAEMW+BQcZ7cUtNw4APJ4qBE+okqcjPalKhZNrNtOeKWV3HL8EUKaeKMjcwz2NRkHCgLHjduOaaTTRAEMQW7Cmz3MsrYiGB70SKFMlpOW96W7JRkAJ7U7VWB3E8UMEg4GPzS1cbsZyaZUAWwO7hgQeelJEpB5FbLE+oLjHFa3A8GiQ3+5rK1t/wC0ayoQcqAF3EfHNILbevOaU2cDHPPWhlvVgDgCjbIY0np29SaSEyPmterblRk+1KZWOMtjPagQ2gZQwLdKGCBkHrSnAQld37mhFwxxuGfmoQxs7MjND7DcacsgwELAHFAKgtjGaATT9uciknA7Gt7GyQM0iRiAcg5oBN2+03BkHOOKe5Q+4oVmg8jdjk8mjbASOfSaZLQGJYcZJzSSxwOaJsbaQACue5oWFIxjpRAKVg2cNgj3rbZAC96EhTODnFFDFRjGTUIJGWIOMGtcZxk5pZBkTONpXvScHdwQT3pSGz7cHHcUhm3cA7a2DgnjA70oRgrvJGMdCagzEqhQeoClE5Ul34FILEnBOMUhdsj852qf70CIVGG84SEDA6UZ1yxYNik7WBxnApQbs2CKILElSBktwaSCAevp96Wyrzg8Ukrj5HtUAbDAkYGRW2U7jhBWlU8YOAOoNE2gHIJP4qEBqQW5XAFLZSOAevetE85K8D5pBly3fH/KoQIh2gk81YPDOpS6V4gs75XK+XIrHHtVdUenO47R8dac2z7Zgd3HXmng6ZGj6R+CL9b3SoZV+2RA4/tV1rgX0G8Rf4p4WtFd9zw/yjz0xXewc4rNyFUi2D0KwSRzQ7q4htLaS5nkEccalmY9ABRMgAlugrgP1r8ezm0l8OaSzIG4mlHt7Cs8VbLoq3Rxr+IH6l3fi3VP8J0e7YaTbHDKvAlPufiuQWNzPDEke8bMdKtLeGr3UZyIIXIJ5YiiXvgPUbTTzPsZioyQBRnilJWkdbh5FjlV7E2V/CYo4lby2bgA9D81P2vnyQFkiMix5DOv9Nc9UvbTAMhwDjBq06JrNxYh4oLgr5uAyH2rD0o9Xi5LdImVfzLcZwo2f+dOAwwyDjO3j2ptCFmQbcMR6WAPvRkZGVRj0gZ568UlG+MjAhYyMSSCScfitsuImAwRtXof9KQkodGx2jZue9GWNGhkKoeVU/iiN9CHhjIf0gEYHBpBAMpOw8E805xGLlkAO4YIJoLOrMRgq4J57GgPdhbK/ubJmMbel/6c5BqflXT9YsQsiiO5CY496rTRHcBIdntgda010baORjI3AwMDpVscn1Lww8niLJ+0HUgWr6XPpUojmkBBXIYdDVTvHhnOAoBHU1Y7/X47q1e1nk3MB6WYdDVJ/mSznDZx1ovGvYnP/wAqTvHNbQ1dQ9wFBLKTzQ7LTLifWgY90cUbZLg4/wBanbPTRO5eRMIvepaCNIWCRx4ArZjxutnnuTJfIen/AKNfUmC7tYvDeqTbJ4l2wyOeXH5967rkEDBzXhfw9bSJfRXURaORDlW+a9deB/Ei61pMcVww/VRABh7/ADVuTE67I5c6vRbaS4JpR4Fa61nK0IHFM79sQnnHFPcYqM1BsRmrIegkVeZgWYAZyetYsIkC7hwK2U3SHANPoogLdiRW2Oito80/xJ3BFvpVrkhSWP8ApXmwkjgglTXe/wCI+73+JtPtRyscJPJ9zXA5HYNvxx0qzIVjbDM+ACB71rcM4bpRCZG6kAHsBQQo3YJz8VSQSSQ/HNK2uOcUtYyxx3rGVlPXPvUIayH4J5HvSQmeS/NbC4OetYODgDn5qEFFAM+oYHQ0rny8E0kY6kdP9aRJOxb0jGaBBYT0kitAAYrYBwMnk+1YCSWzwQPaoQHIEWQFR+RRFZGJA4z71oZYjgZ96QyBiW6H4ojBmWMcZLEChMDwAlEjZSuOhHvQ2lCHLED96gpgB6kY+KTJdRw9T+1NZ72R/TGMCm3kySHcenelb/oZL+xU97JISI8jNajt3lAMjZ9qPFApI6fvTwJtweMCh1v0LaQBIdgCgcUZEOCKKcHjHNYpIOTzngjFWUKJCBeT6qzqoI4JrZwOxzmsBOTx/apQDa543VpxlumB8UrA6Z4rRUBct06UUQX5I96ykZHZziso0iBWyH56UnGMnmiZTYAc7ulIIJJHSowGFGaP0nBrWckA/cPesLYIG7mtllAy3U96UgMqrs2aQyjIGPwaIxwwbtStqMhkWQbum2oQDnI5HNI2jfxxmibTg7sD5Fa3K2Qp5HxQCDYEHIYgCgyE59Q460fGBk1pvWMEZoNBTHMNxb7VBIBA796zKk5XuciomaB85zikpcywkAGh3rTGqyWKuzFm4X4pKErkLxmgR6qpjEcgwDTsS28ijy+tNaYtCRnjPOKwqTyvSiLsAypNJwyqSeVPSiASS4TYBx81pLdjghuvNbWQbtp4omBsBL9TQIBVdueNxNbKrj7cY60QxMp4PHvQZd27ap5PU1CCWIdimMDuaL/L4Cj0itIu6M+oADv70kAxg96hAgyc+47VsYDeoZrYYbc7eTWDG05zmoQ2EG4bsEUph6eP9RQs4bI5HelhguWOSMdKhBGfVgHmsB/FYTj7x1GaSDg4UYqEFM6KMlc4rXlRk7lJOecVsRsWBLZzWElFITr3qEswjOAGwKUvPVsYoYYsCWHNKI3ckY+KKId6/h88RS2WuzaV5v8ALfEig/617ftJRLAkg6MM18zvA2vHQfGenXpzgShW/BOK9+XPi2Gx8NQCD13UsYKj2BFHLBzSoMHT2SXibxDHaqbG3f8AnOOSOwrmmoeDI9ekEroQpOSfepLQbOfVtSa5uWLhjls+9dKt9PjhjAVR+KjjHEqfpZ3d6OUx+E7bTttukA/IHNZfeH444C/lA8c5FXzXrd4ws8S/bTE/9YtASoJI5q+Ek4jdnd2eWvqL9Pp7KM61YQn9O5yyAfaa5xp7sjtG21T/AFM3t8V7XudMiu9NlsrmESQyAqVIryx478HNoGuT25BiiY7oXPRh7GuZycO+0TvcHmNOpEXZ3cEdwSrkjIbrU3DcLJIVkC/YdrL/AOdUu2eVWWJl2kdOOtWG1f8AmjaQR3PQVzmqPU4cqmrTJiGItHn+loeDRkY7mUnrEuRTW1nMcoKEE7Cu1uQafNCsoldD65IwNntSm9OwbhS8hwwAA6nkULYqyhyCOcCnDRusskbKc+kE+1IbYtySfUu7igMDkBzwBt3c5qI1GYPE2zJGe3FS1yAw3Bx93K+9QeoxssEsi8L/AJaJXKVFZv2WWTb5eMnnBq3+DvBd14lvxHZRkQRLuklI4/FU9R5lzhQc165+men2+m+BbTy4Qks6B3OOTW7iw76Z5T8jm6PuvTjuq+FJNMbyxHlR3qEh09zcfZivRuq6NBfbiUGcd6o8/g2WK6MsSce2K6bxU9eHm1n7fy9IPR7Lygu4DFdC0G8uNN1CGe1Y5B5Uf1Cou00vYFVhyO2Kt+hacjThmXIFadKNMpcrZ1XT75b+zSYcEjke1PMYNQNkptsGPgdxU4jiRQw71yMkaehkYx9O6oe+YnIqWfjOehqOuYw2SKmMj2QyxDzBx3p5OoitxnuOfmtwwk3PHQUi+P8AIYZxitEXbEPFP8QV4k31KkiVsrFCike1cgLIeAf71efq1di/+p+sSqchZfL/ALVQ8DJ9WBV89srNEk8DBNI3Ads4rZ5bI7e9bOdpAPHxVQqNBlxkZz71vdgYIH5oT5KAClAZIXj8moQ2wH/+9KR8mlnJOMrSMZUrkGoEXgbTWgucED81pM5AK+n3ojYY7gcDpgVCAmOG5OKUuHPU5Na2FVyTk5pSqBzjg96hLNEEArnmsIHG00vAD9MntmlYOfu4PYVKINpFXkj7j0NR0kLhiZCT7VKOpD+6/is8tJFwP3oNBToj44wzAAinIQjGRgUJ4mRjs5raudoJOaiGasOFUck9aXkZ24pA3MARgDFLzhee/cUwgrg8cj2NKGUxg5PxQwQVwSRRUCjnqaKIIOSS2QD15pO7o2eT7UQhQx3HrWKVChAOaNksTgEYyc1o42dScUpl5BasAAJUgcnrSkQnIxWUry/+0KyoQK2AcZpJI3Adc/NLOCNu4ZFDOeDjOO9OA1jD8LmtsuW2gfvRFAGGbv71o8ZxjBqUSwe0l8DtSMHtwCeaPhcAhyDjmhgYO4E49qDArEkZHJxSQo2nHUUrI3FiMisC8bt2M0owMA7enNazg9MGi9RgGkHp0zUICYKe2abvGuMgZNOgCMZGQa0TwcpwKVqwpkfLB0O39qHtdWBQkVInBBxzn3oRXPDce1J1rwexEN46HDgtUhHdpKgRn2+2ajfLYHJrZUE8VLkgafhK7ATlTmtsoBAA4qNimmhBAbIp5HcxuuDkH2qyLFaoVKzKAI2Jx2FIRNq5YcnrmjKAQGTqetbDIfTJGeKgpo7dvpXpSGyfUf7CkuxX1If2rcfqALHHfFQIrawGc9O1bZgSM5rbEg8g7T3pO7gjHHvRIL7beKSrqjFSwxSNh3Z30siMIDhS3zQIaO113h8gVttu3v8AmsdQFBBAJ7Cs2MQO/HaoRmKQACCc+9DfcxyOtFx9qlSO1ZjdnAC0WQTg5AY4I6Usq2CRgkfND9Wdu0sR/pSlJHUVCGJMySJJzuQgivYP0+1X/H/BVjfzSmSZUEbk+4rx9LgHI4rvn0F1wvZ3ujSSZCESop/1q/C/oD/s9IeFpmhvDEPtNdHibcK5ToUrLqABJA9q6na+pVPciquR/ZZFCp7ZZU2sMgjpUMdOEL7QOM1ZNnem88fG6skZtFyRBSWy4IK1zr6jeDYfE3h2aBYx+pjBeJu+faulyuN5HehPbB0DYq1u0XYpdZWeILWaO1lfRdZswPKYoXxiRSD2PtRLnRbu3U3sBa4sGOA//ka6R9cfBJsb1fEthFtjkOJsdmrlWg6/PHqEaXFwHRONj8qR+KwyipOn6d/DOeJLJj2hzbExlMcoQeOtSsLN5yM4YqV6jtU4PDtnqwFzo86LMBl4DwM/9moq6trizk/T3KtDIhAKSDBrLkhKD2j0nE5WPOv1exwPJkWTAc5O4HPP4NNHG0GVFwP+Vbw4bchIbJB9moau291nUYzxs6VWmbmmgUhTrvG7IOcVFahcJ5TKXG7FS1wY8O0aMUyMsap+rlPPdVY5ycc0TLmfWNk34P8AD83iLxRbafaoZfMcFmA+0V7Bs9LSxtIrOLiOFAgH4Fecv4cv1P8A+IMyqm+PyCWOOlerJEUTPxzmuxx11VnhPyWRzn1IT9MpJyKKlijHOBipBoQp3UaCPp7Vs7HHogLjQ4WbeoAan2j2BifG3jNSkkK5Bp/ZQgAcCqpT0FehFjAXFKjla3fn7D1+Kc+WueuKb3CkKRxWa+2iwduVkj3KcgimBOHIxmgW140MhhkGYzx+KfbR9wHWoo9SMaRDaXfuegqD8QXgs9MuLhjt2IT/AKVOyekk9AK519S9SS38LXeG5EbE/wBqvh7YjPC/ia5a88TX92Wz5s7tn96iHBC4GOe4pxPKZriVwobLE801Zmzztx7CnfpUJC5bDHrWZGCqnBrW8KP/AL1gBZQS4zzQIawemaw4yVPFbALdF5rHO1wxX81AA+Sp5GKUq+ncBxilYU5IUAe1bXqMciowiCSoBY4B7CtrwOlbcDcMDJzSCMEZNAgoMTkAc0rJ+3v1raKwfp+9bZduQGzUAKwdm7cKExBbgHIpS5OCxxihNtySdw5okNByGIJzS0wxPOK0AMn08e/elAAj0nGD371AimVTGDnAAptLAgG6M4NOANx2hsdqSSRkZGB1oVYRmJDGcNxmnCHK5Bz70p0SRftyfegLujZs5xQAHGV5IyDW1OGGOCaQsisRljz1og2Me+KdbIJGdx4yfeleoHIHq71gBDYHIrbEHHJFT7AZnoTjJpePUecfNIVlXIxx34rYJ5A5Ud6NIKNFVz1NZS9rf5qypogTHHI7du9IOQpOcL7UtAucbsn/AJUj75BHkZHvRAtmOWCAAikAMAc80V4ieByRQwkmeetQhtm4HbnFDwQOD1pZVj1cHHek4BBIbIFK2E0Ad4GcA0l22kgjPzSmIAznNZnKdf2oEE/bjt81hb0AbaLsDRkkg5HTFIGxQOcg0WiAycDPXHatZ/AGKUdwJ6YNDGDlcEmlIKz7YApWE28mhMjKO7D2pJJDgAECoQUys3HOO2KFJGwGAnPei7ipyCc1veWbbn1HrUCtDbaeFxT2KAIPtySOc0pYhGwY4yaKdzjAqJBs1g7dnQHpSGyh9RzjoKUznA3dRWEeYQxXIFEUAVJIOeKWq5TIbOOMUllxkk/tSgMnaOD3qUQ3tUruH461mz14OAPzSwjI2QAwpBzvJC8e1CiCzgDhRz3rQxnG3JrFYkY4pe5FO1uPmiQGUwSAA1Kj3RPycZrGKjBByTWnZpNoI+3vRIbZ/V9xz161gbPKrilDaRjB/NYxVRsHGT2oEMYenJ6UlSQcH/WsGDwTwK3wSNgzioQSVXJHU+9X76Sat/hXj60VsBLj+U3PvVEypIB6mnGmXBstatrtSR5UgbI+DTwdMh7ssHMd8hOOT1rq+nuGgRh7VxnS7xLrTLC/jYFJo1f/AErrehyCSwjYe1TkeFkWTg5WhTjKYBoq9KTLxGa5q9LUVSSQre7SO9SsXqj4qEu3C6kR7mpq0YeUoFaH4P4QHivw7D4l8P3ekTqCJ0IBx0PY14b1vQbrw54hudNuf5bwSFPUOoz1r6HRRjzVNedv4j/B0Ajh8U2yYZsRzYH9jWTMr2jqfj+R1l8cvDiuh63LaThkkbMeNrL1rrdlrnh7xZYLD4jUW12BhLqMcn81wPTn9XljIbPUVaLEXCSnPpIxjbzmlhmVdcnh3nw3kfy4H1kXbUPCV9aRvd2w/V2i5xInPHyKqVwhSX1owUj7M81f/DfjS40u2ktV2EP95cbgaTqNhout+ZdoBZ3GCfSMhzVcuOn+2Pwvx/kcmCXx8qNf9ObXdzd+UxAAh2/avX+1VG/nSRsLEE3dWI5q9appepadGZXtnVBkCQqcGqRdW7sxcsMdSTVSTT2a8+WOWFwZ6H/ho0xBbapqZjG/KxhvjrXoOaL+exxiuCfw1ajHHY6rpjdfTKD/AKV6An5myO4rq4/EeC5l/K7G7ICv4osCDbg1hUHijxAdKtbMYho13AAU9t0wo7UHbuPFPEXCiqZS0RIXtxim0wyDmndBmXINVxYzIoxhpckU6gkAPlseP+VN5j5b88U2e4CjPPWr6bFHl+NkJb981wH6r6kT4S1h92NsRUfvXarrUleza2cHeR6Wrz39c4pdN8ATHcSLiVUB/er8caWwP+jyooJbCkD5NakznLYNKB/lkcbh70gYPDkYFAqEtjbluKTkDoP3FKAHHGfitDIOWPFQUSM564+aW+7YCwzWZJztbrSTu980aIZllG3aCB/etdV+41sn1q4GD/yrbFhyGBLdPigE0SW9WcUkgLwSCa0QWH3fmkCKMnJySO9SyBQwXkHOf9KIMZyzDGKQEBAXtWmVFbKkYqEZpsHOASf9KUqkgjaSR1rSyEc4yO1aDSgsCduTUBRm8F9xHHTFYPX2xWYAHLHH/OlZTcMHnsKgROCQBjke1KCrgDofelYVsgk8dq2VUgEE4x/aj1JYkHKcjPNadCeMYFbVeTk+kc0oEshJ9XfI7UGiWM2iVX3bv2xSmdUIBGM0XAxuYZ9qDJh5woxwOtBECrLsIVTnPBzSt6hccGh+SB33UknZgkYwaKAE3NjdtwOlbDEdAOK0GJU87Qe1KWNWAIcZ6mm9CFwf84rKRux2FZUogYr6xg8is8rE2eOlYCeBjPPWthtp3N1PBogE+VICSH6+9J+05L896UVONxOR7Vm3IyeBjihsgkKmCQ3XtWtuEIxSsMQAABjuKRk9zgijRBJU7csvFYAuBkYpRJZR1PtWi3fb+9QhuRnKhccfFCAITnHNLH3YGcVqROpJINI7CDZgABnNJJxyOGPtWjtC/JrXqDEDgUAig3OOc1ofLdKTg59R5NJ5DhUJoBSFLlm2ryTR1gEa7ifVS41jjHTk85ozOm3AGTTJEdA8lgD3HesY9gpBHUitZXOTxmtsy5yT7dKZIUS2GG5cj3zWkDYJzke1LzzkEba3gKMueDQIJZV4J5B7VjMi5AXA96WCnII9J6GhMxGQoyB7igQ3kEbg2D7UoFVTJzz2oYXKZUHNKyCgz1pkiGmkG4bUOR7UobJJCWGCa0diqCuT7itbjgHgYoMgsJtfaMMO/wAUogK23t71pWYDK9TStxbn7TUoAgMELE8Dp+aThnHGMH/SsKueSCeaLH6VGTz7CgEGAQAuefetljwBwB3rH2g5PB+KTkFeWwahDYIAJY5A6UnHq44HWt4IOMZFbYL7cDjFQh6t+kOtLqvgO1ty2+SzJjbPXHavQ/haTdYhfavG/wDD1qoj12/0eVj/ADo/MUE9xXr7wxJtPl9M1Zl3Gx4l1XpxQpz6aIh4oc/2E1zF6XlN1RNuoK44qUsXBAU+1R2sAl1Psae6UNyfIFavod/xJ6EDPPSuf/V/RZ9b+nWoW8ABeNd4B+K6DEpC1RPq093H9OL9rRiGOFbH+XPNUavY2F9Zpo8MpLcaVIHu7Zo42JCuRw1SB8V6fBAQsMskh7qMVI6leRaxKqXLKqwDaicYFNYNLtZ2LMoOOQAOtYZpJ6Pe8X5Ono3fxjftH5dpZBS2B6qlLbUPEzxrKtysKN19H21kelx+cgZCNx7jgVNGSGGL9MGLxp0Kg+qljOUdxLp4o5X1y7GUviLxk1ibGfVUngPRZIwQRVRn06+keR5rjvn0DgVbbgxkKVimAPUgdKhL6V4wT6wpHTIzUlKUnbK/gxY4/qdD+ifjLSvCuqSWesQP510Qi3KnhR7EV65V0mjjlQ7lZQQfcV87bOd0v0k3lVBzyea9u/TrxRB4k8I2kkY2yW6CJ1z3HeujibcDx35KEVO4l5RFPzRdoUdKBFJ6sdKc9etPs5JkandxTwfaBTeMc05X7RVUgoznFJccGljrzWMBShIbUFIRmxmq+0xJAzxVnvhiJz14qp43OSRgg9K2Y/BDRUs4J5rg/wDErcNF4e0qy3FVllLED4Feg4kHH/nXmH+J6/D63pOmjB8uNnOO2a0xdoSR512ckliQfasICqVJzSkzHnPJNI4PJpBDGCgHb1PAoYODjrRTjHqXn2oOD0AwRS0AInU9RWMCfgVobj1OQf8AStnOwbTntRRDWcqMjj3pO5QwHBrYAYDnoOlJUJvG7g+1BkM25XPNYFbjAz81vYN3BzmlplRtxk9hmgQ0zBJMHOcVgOQfRn4rCAAdwyfmsAHJx6RRoJi4A445pLDcxOeKzP8AlHPxSgSTkjJoAEGP0Bh0HvWAbcHhsjrSpGIiIBPPWkjHlqDg/wDOiQWMKB0YGlDaFZeQPmkZBxtG7Ixk9qTg5AAHTqDUsgojrjr7e9LC5faBt46UjAyBgAe5rAzh949XaoQ2yoMHJ/5UxUo1ycDjpTyVj5bOO3vTS0TzGYtwaV+jDzcoXpgihsC/OMCllH284x2NJGcc+kDrmnAaGOF6470RVjU5z1Fa24OFPFZlAnI5qJAN/tWVsOmByayiQMOUyePitn7duARW8b+RSCrbuoFEgptu0ljn8UNWODgZHtRHO1dpHNIChsnoagDHyV3Lkc0nBI5GT3zSzk4RRwO9adkUAk89xQCIXLdMjBrZ2hhzWgQwAHFbZG34PA68VCGztDjnr2FCY7sr0xRMKpJFCIyc8jmgwg9vIKgce9IOCpOTnNFcYHv+KBku2wDk9/aloJobjwAT808jiRCCDuOOa1DDsjLk7iDijNtUZHDUUiNiCFx6VJ7UnJ3H2Het+ojBOMVmNpwf70wBO3PekkjeML+9EIUqBnnPNJfOCFIwO9QhpTxtGKMUXaDvBPtQFU5J9valggc4I+KWyGiTuIHbvSmEmwOGGDxisIG7CHmkYZsgjpUSIaywbaTSgd3T+1bOGA2rjHWtkqH2gZo+ko0NuMZx81oD0kkf3pe4BhwM/it+goPcVKIJV+MHAx0rW8ElT1rbRbn68fmsWLnapz8mpZDFdunx0pQZQ3Q47msQgcgBiKSQ7ozBQBmlAKbDr7Y96FtOc8AUsAqAx5rAp4x0+ahDe9uOOKS23BwcE0UAFfUBx7Vry138MKgSzfTbVzonj7TbsvhHkEbn4PFe/vD7ZmjYHKkZFfNiOVoLmK4jG1o3BGPg19BPpnq41nwtpOo7s+ZAu4/I4NWewoK9Osx9KRcf8M0uI+gGkT/Ya5q9NBUNXbJHPQ1I6QuYRUfqa5kPfmpXTVCwLmtPkRn4TQACHBrmf1h16LS/A1xZnBluhtVe9dISUFG56V5b+sfiRtY8VS2NsfMjs12fGe9ZZa9N/AwvLlT+kcBmcNds+07c/vVl06L+UJX3sMenBwQahFjAvGZoty5xgnoam4hGuB5R46jtWKR7XjRsf7pcMsSP6iAxLjj3pXpWMg+oLzkyd6EnlRDPHPUbTWy4B3RIFCnAOzrSo2NCXBkhJk2qG64YnNQl/ATudkCjtwasIPmJvyw2nIGzGTR9J0WXWdUETs6wJ6pZCPSq+9NFNukUchxhjcpFWTw/Nb6MmpTFUEzbVB+4/tXVfo74oOieJYtPnfFrdr5ZyeAexqleLJ2uNTQRrstYF8uJByMe9Q1hLNFdxSxsUaNgwIPcVt79Kieaxcf/ACFKbXvh7vjf1B89afRvuANULwF4iHiTwlbXjkG4iHlSgdmHerjbyEOBmtPu0ebyweObiyRVsNTtc7c+9Ml5Yc09XOwVTNFaFVnUVg71sVWMR98MxsKrXk5kIxjPerVdKCtQ7w7W3DpWqD0KNUi4we3SvGH8Q19+o+p00O/PkRqmPY17aYbULY4AzXz7+ql+dS+p+uXO4EfqGUHPYVpg9WVyKVvzGVU8560jO48kitHkbR19xWlVec8n81BBROMVv+nLcA1obQx46UpmAXHB/PaoQzeqjPAx296ExIUFcH3rfDDlcVplKoT2Heg2AzaQAMfuK0ME8jA9xSo8CQHdnA7jNbYktwfUeuOlBIglSBJjJPtRARnsCaGVfPX/APTW2TaAx5AqeEFMM8E5P/OkE4cqeBWw/owPTSTJkfbnFGyGB2B+0Z96wyDsCSaSc5PYVobmHpAHyaARW5+FZTjNbOA3pGcURQWjUHGRSGHq3DAJoENZPJAzWAjnAwKSFOM5wKXtXYAMZ981AGwB9rMOnftWRnDjByBziklCOGyRRguCMYAPcVCDO8I8vG7qelatE2rkNih3ZU3ATqB1pzFGECr+9RehCH0qQCT8GtAejjnmknkgnjmsJwOOVp6ogv8AqyR06VplXOSQc9fitcmQAHANbK7CQTkVACtsHzWUjctZUDQ5H/GH4pDD+YDnnNZWVAP0OVDISRznrQsAc9aysqAZgHpIz2oYUE8jNZWUGMbIGQcUsqOPmsrKKICBOSO1akOM4rKyoAC/2gjvT1LaJY1IHLdayspPsYU8aohA7Gmy8vzzzWVlWAMOffvS8Df071lZQZAeMyMPc0SLDSiMj01lZSr0gvhWaMABQKbjiQjNZWUZEFjk571qYbVUrxmsrKVEEuNqjBIzSxEqgMM5xWVlMyG9gHStYGw8VlZUQEECAKh9xzQ34fisrKIWaA2sCO9KHLBe2elZWVGAxxtJUcClFRheTWVlIES+U3bT1ragE8jNZWUUQTJ9pxxXsD+G2+ubjwL5Mr7khlKoPYVlZTR8Yz+j0zbkmNc+1Zcf8OsrK5/2Xoql+B57VI2ZIhSsrK0/Q78FXMzxabeyIcMkbMPzivH95/Oi1LUJCWndmJJ6ZzWVlZsnp2fxuosoNmPMuJnY8jnpTu3ldWwCOD12isrK58vT1+DxEygZ13GRst1xiklNzjezPtORk1lZSo1B3CrPgKMMADmunDT7PT/AFkbWFUkuT/Nk/qYe2fasrKvw/wAjifmX/qRyLXpGF1IgPCuQKYaVGJLtVfJBrKylyfyZfgS6RO1/RC+uY/E2qaar/wDVmjD7T2Oa76pKuCOuaysrpYf4HkPyqS5EqJaM5UE9afR/aKyspZnLQQd63isrKpCN5uhpi4G7pWVlXxFX2R2pO0em3Tr1WJiP7V83tfdp/Ed/NIcu87En96ysrVDwrl6RzKFXIHNDAGwcVlZTCv03gDge1YnK4IrKykIEhjR3CsMg0mRQJGQfaD0rKynABb0qSODSRyq81lZSMLFIMv1NLYZMgPtWVlQAJ0AI/FJiYl8VlZQIwrIuzOO9L2r+nPpHFZWUYhBZIQsOtKI5/asrKjIYBnrzzSsAbsCsrKhBOTgUT/8ARWVlFgItgDeN+adbiCAKysqRGFR8vg8it9XK9hWVlMASCWABPenG0AVlZQZAdZWVlAh//9k=",
      "tribute_en": "Sacrificed their lives fighting for secularism, social dignity, and the unity of the working youth.",
      "tribute_kn": "ಸಾಮಾಜಿಕ ಸಮಾನತೆ, ಸೌಹಾರ್ದತೆ ಮತ್ತು ಯುವಜನರ ಘನತೆಗಾಗಿ ಹೋರಾಟದ ಹಾದಿಯಲ್ಲಿ ಪ್ರಾಣಾರ್ಪಣೆ ಮಾಡಿದ ಚೇತನಗಳು."
    }
  ],
  "leaders": [
    {
      "id": "nl1",
      "name_en": "Comrade A. A. Rahim",
      "name_kn": "ಕಾ.ಎ. ಎ. ರಹೀಮ್",
      "role_en": "All India President (National President)",
      "role_kn": "ಅಖಿಲ ಭಾರತ ಅಧ್ಯಕ್ಷರು (ರಾಷ್ಟ್ರೀಯ ಅಧ್ಯಕ್ಷರು)",
      "tier": "national",
      "region": "DYFI All India Centre",
      "photo": "data:image/jpeg;base64,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"
    },
    {
      "id": "nl2",
      "name_en": "Comrade Himagnoraj Bhattacharya",
      "name_kn": "ಕಾಮ್ರೇಡ್ ಹಿಮಾಘ್ನರಾಜ್ ಭಟ್ಟಾಚಾರ್ಯ",
      "role_en": "All India General Secretary (National General Secretary)",
      "role_kn": "ಅಖಿಲ ಭಾರತ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ",
      "tier": "national",
      "region": "DYFI All India Centre",
      "photo": "data:image/jpeg;base64,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"
    },
    {
      "id": "l1",
      "name_en": "Comrade Lavitra Vastrad",
      "name_kn": "ಕಾಮ್ರೇಡ್ ಲವಿತ್ರ ವಸ್ತ್ರದ",
      "role_en": "State President",
      "role_kn": "ರಾಜ್ಯ ಅಧ್ಯಕ್ಷರು",
      "tier": "state",
      "region": "Karnataka State Committee",
      "photo": "images/lavitra_president.jpg"
    },
    {
      "id": "l2",
      "name_en": "Comrade Santosh Bajal",
      "name_kn": "ಕಾಮ್ರೇಡ್ ಸಂತೋಷ್ ಬಜಾಲ್",
      "role_en": "State General Secretary",
      "role_kn": "ರಾಜ್ಯ ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ",
      "tier": "state",
      "region": "Karnataka State Committee",
      "photo": "images/santosh_bajal.jpg"
    },
    {
      "id": "l3",
      "name_en": "Comrade Dilip Bangalore",
      "name_kn": "ಕಾಮ್ರೇಡ್ ದಿಲೀಪ್ (ಬೆಂಗಳೂರು)",
      "role_en": "State Treasurer",
      "role_kn": "ರಾಜ್ಯ ಖಜಾಂಚಿ",
      "tier": "state",
      "region": "Karnataka State Committee",
      "photo": "images/dilep.jpg"
    }
  ],
  "gallery": [
    {
      "id": "g1",
      "type": "image",
      "category": "rally",
      "src": "images/gallery-1.jpg",
      "caption_en": "State Youth Conference Rally",
      "caption_kn": "ರಾಜ್ಯ ಯುವಜನ ಸಮಾವೇಶದ ಬೃಹತ್ ರ‍್ಯಾಲಿ"
    },
    {
      "id": "g2",
      "type": "image",
      "category": "health",
      "src": "images/blood-donation-bg.jpg",
      "caption_en": "Voluntary Blood Donation Camp",
      "caption_kn": "ಸ್ವಯಂಪ್ರೇರಿತ ರಕ್ತದಾನ ಶಿಬಿರ"
    },
    {
      "id": "g3",
      "type": "image",
      "category": "rally",
      "src": "images/hero-banner-1.jpg",
      "caption_en": "Jobs for All Youth March",
      "caption_kn": "ಉದ್ಯೋಗಕ್ಕಾಗಿ ರಾಜ್ಯಮಟ್ಟದ ಯುವಜನ ಜಾಥಾ"
    },
    {
      "id": "g4",
      "type": "image",
      "category": "conf",
      "src": "images/hero-banner-2.jpg",
      "caption_en": "State Committee Session",
      "caption_kn": "ರಾಜ್ಯ ಸಮಿತಿ ಪ್ರತಿನಿಧಿಗಳ ಸಭೆ"
    },
    {
      "id": "g5",
      "type": "image",
      "category": "relief",
      "src": "images/hero-banner-3.jpg",
      "caption_en": "Volunteer Relief Operations",
      "caption_kn": "ಸ್ವಯಂಸೇವಕ ಪ್ರವಾಹ ಪರಿಹಾರ ಕಾರ್ಯ"
    },
    {
      "id": "g6",
      "type": "image",
      "category": "conf",
      "src": "images/leader-1.jpg",
      "caption_en": "Youth Assembly Address",
      "caption_kn": "ಯುವಜನ ಸಮಾವೇಶದ ಸಾರ್ವಜನಿಕ ಭಾಷಣ"
    },
    {
      "id": "g7",
      "type": "image",
      "category": "rally",
      "src": "images/lavitra_president.jpg",
      "caption_en": "Constitutional Rights Rally",
      "caption_kn": "ಸಂವಿಧಾನ ರಕ್ಷಣಾ ಜಾಗೃತಿ ಜಾಥಾ"
    },
    {
      "id": "g8",
      "type": "image",
      "category": "conf",
      "src": "images/santosh_bajal.jpg",
      "caption_en": "District Office Bearers Conference",
      "caption_kn": "ಜಿಲ್ಲಾ ಪದಾಧಿಕಾರಿಗಳ ಸಮ್ಮೇಳನ"
    }
  ],
  "bloodDonors": [
    {
      "id": "bd1",
      "name": "Ramesh Kumar",
      "phone": "9845012345",
      "group": "O+",
      "district": "Bengaluru",
      "date": "2026-10-15"
    },
    {
      "id": "bd2",
      "name": "Vinayak Goudar",
      "phone": "8951565792",
      "group": "B+",
      "district": "Dakshina Kannada",
      "date": "2026-10-12"
    },
    {
      "id": "bd3",
      "name": "Praveen Shettigar",
      "phone": "9741234567",
      "group": "A+",
      "district": "Udupi",
      "date": "2026-10-09"
    },
    {
      "id": "bd4",
      "name": "Manjunath Belagavi",
      "phone": "9448123456",
      "group": "AB+",
      "district": "Belagavi",
      "date": "2026-10-05"
    }
  ],
  "messages": [
    {
      "id": "msg_1792785420184",
      "name": "Ramesh Kumar",
      "phone": "9876543210",
      "district": "Bengaluru",
      "message": "Inquiry regarding upcoming state youth convention and volunteering.",
      "date": "2026-10-23",
      "status": "Unread"
    },
    {
      "id": "m1",
      "name": "Karthik Gowda",
      "phone": "9988776655",
      "district": "Mysuru",
      "message": "Want to start a DYFI local village unit in Hunsur taluk. Please connect with district secretary.",
      "date": "2026-10-17",
      "status": "Unread"
    },
    {
      "id": "m2",
      "name": "Shreya Patil",
      "phone": "9123456780",
      "district": "Dharwad",
      "message": "Inquiring about volunteer participation in the upcoming youth cultural rally.",
      "date": "2026-10-16",
      "status": "Reviewed"
    }
  ],
  "districts": [
    {
      "id": "dk",
      "zone": "coastal",
      "zone_en": "Coastal Zone",
      "zone_kn": "ಕರಾವಳಿ ವಿಭಾಗ",
      "name_en": "Dakshina Kannada",
      "name_kn": "ದಕ್ಷಿಣ ಕನ್ನಡ",
      "taluks_count": 8,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಮಂಗಳೂರು ನಗರ",
          "name_en": "Mangaluru City",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಉಳ್ಳಾಲ",
          "name_en": "Ullal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬಂಟ್ವಾಳ",
          "name_en": "Bantwal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬೆಳ್ತಂಗಡಿ",
          "name_en": "Belthangady",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಪುತ್ತೂರು",
          "name_en": "Puttur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸುಳ್ಯ",
          "name_en": "Sullia",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಡಬ",
          "name_en": "Kadaba",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮೂಡುಬಿದಿರೆ",
          "name_en": "Moodbidri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Mangaluru City",
        "Ullal",
        "Bantwal",
        "Belthangady",
        "Puttur",
        "Sullia",
        "Kadaba",
        "Moodbidri"
      ],
      "taluks_kn": [
        "ಮಂಗಳೂರು ನಗರ",
        "ಉಳ್ಳಾಲ",
        "ಬಂಟ್ವಾಳ",
        "ಬೆಳ್ತಂಗಡಿ",
        "ಪುತ್ತೂರು",
        "ಸುಳ್ಯ",
        "ಕಡಬ",
        "ಮೂಡುಬಿದಿರೆ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "udupi",
      "zone": "coastal",
      "zone_en": "Coastal Zone",
      "zone_kn": "ಕರಾವಳಿ ವಿಭಾಗ",
      "name_en": "Udupi District",
      "name_kn": "ಉಡುಪಿ ಜಿಲ್ಲೆ",
      "taluks_count": 7,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಉಡುಪಿ",
          "name_en": "Udupi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕುಂದಾಪುರ",
          "name_en": "Kundapura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಾರ್ಕಳ",
          "name_en": "Karkala",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬ್ರಹ್ಮಾವರ",
          "name_en": "Brahmavara",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬೈಂದೂರು",
          "name_en": "Byndoor",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಾಪು",
          "name_en": "Kaup",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೆಬ್ರಿ",
          "name_en": "Hebri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Udupi",
        "Kundapura",
        "Karkala",
        "Brahmavara",
        "Byndoor",
        "Kaup",
        "Hebri"
      ],
      "taluks_kn": [
        "ಉಡುಪಿ",
        "ಕುಂದಾಪುರ",
        "ಕಾರ್ಕಳ",
        "ಬ್ರಹ್ಮಾವರ",
        "ಬೈಂದೂರು",
        "ಕಾಪು",
        "ಹೆಬ್ರಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "uttara-kannada",
      "zone": "coastal",
      "zone_en": "Coastal Zone",
      "zone_kn": "ಕರಾವಳಿ ವಿಭಾಗ",
      "name_en": "Uttara Kannada",
      "name_kn": "ಉತ್ತರ ಕನ್ನಡ",
      "taluks_count": 11,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಕಾರವಾರ",
          "name_en": "Karwar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಅಂಕೋಲಾ",
          "name_en": "Ankola",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕುಮಟಾ",
          "name_en": "Kumta",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೊನ್ನಾವರ",
          "name_en": "Honnavar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಭಟ್ಕಳ",
          "name_en": "Bhatkal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶಿರಸಿ",
          "name_en": "Sirsi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಿದ್ಧಾಪುರ",
          "name_en": "Siddapur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಯಲ್ಲಾಪುರ",
          "name_en": "Yellapur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹಳಿಯಾಳ",
          "name_en": "Haliyal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಜೋಯಿಡಾ",
          "name_en": "Joida",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ದಾಂಡೇಲಿ",
          "name_en": "Dandeli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Karwar",
        "Ankola",
        "Kumta",
        "Honnavar",
        "Bhatkal",
        "Sirsi",
        "Siddapur",
        "Yellapur",
        "Haliyal",
        "Joida",
        "Dandeli"
      ],
      "taluks_kn": [
        "ಕಾರವಾರ",
        "ಅಂಕೋಲಾ",
        "ಕುಮಟಾ",
        "ಹೊನ್ನಾವರ",
        "ಭಟ್ಕಳ",
        "ಶಿರಸಿ",
        "ಸಿದ್ಧಾಪುರ",
        "ಯಲ್ಲಾಪುರ",
        "ಹಳಿಯಾಳ",
        "ಜೋಯಿಡಾ",
        "ದಾಂಡೇಲಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "bengaluru-urban",
      "zone": "bengaluru",
      "zone_en": "Bengaluru Region",
      "zone_kn": "ಬೆಂಗಳೂರು ವಿಭಾಗ",
      "name_en": "Bengaluru Urban",
      "name_kn": "ಬೆಂಗಳೂರು ನಗರ",
      "taluks_count": 5,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಬೆಂಗಳೂರು ಉತ್ತರ",
          "name_en": "Bengaluru North",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬೆಂಗಳೂರು ದಕ್ಷಿಣ",
          "name_en": "Bengaluru South",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬೆಂಗಳೂರು ಪೂರ್ವ",
          "name_en": "Bengaluru East",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಆನೇಕಲ್",
          "name_en": "Anekal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಯಲಹಂಕ",
          "name_en": "Yelahanka",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Bengaluru North",
        "Bengaluru South",
        "Bengaluru East",
        "Anekal",
        "Yelahanka"
      ],
      "taluks_kn": [
        "ಬೆಂಗಳೂರು ಉತ್ತರ",
        "ಬೆಂಗಳೂರು ದಕ್ಷಿಣ",
        "ಬೆಂಗಳೂರು ಪೂರ್ವ",
        "ಆನೇಕಲ್",
        "ಯಲಹಂಕ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "bengaluru-rural",
      "zone": "bengaluru",
      "zone_en": "Bengaluru Region",
      "zone_kn": "ಬೆಂಗಳೂರು ವಿಭಾಗ",
      "name_en": "Bengaluru Rural",
      "name_kn": "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ",
      "taluks_count": 4,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ದೇವನಹಳ್ಳಿ",
          "name_en": "Devanahalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ದೊಡ್ಡಬಳ್ಳಾಪುರ",
          "name_en": "Doddaballapura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೊಸಕೋಟೆ",
          "name_en": "Hoskote",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನೆಲಮಂಗಲ",
          "name_en": "Nelamangala",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Devanahalli",
        "Doddaballapura",
        "Hoskote",
        "Nelamangala"
      ],
      "taluks_kn": [
        "ದೇವನಹಳ್ಳಿ",
        "ದೊಡ್ಡಬಳ್ಳಾಪುರ",
        "ಹೊಸಕೋಟೆ",
        "ನೆಲಮಂಗಲ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "ramanagara",
      "zone": "bengaluru",
      "zone_en": "Bengaluru Region",
      "zone_kn": "ಬೆಂಗಳೂರು ವಿಭಾಗ",
      "name_en": "Ramanagara",
      "name_kn": "ರಾಮನಗರ",
      "taluks_count": 5,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ರಾಮನಗರ",
          "name_en": "Ramanagara",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚನ್ನಪಟ್ಟಣ",
          "name_en": "Channapatna",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮಾಗಡಿ",
          "name_en": "Magadi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕನಕಪುರ",
          "name_en": "Kanakapura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹಾರೋಹಳ್ಳಿ",
          "name_en": "Harohalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Ramanagara",
        "Channapatna",
        "Magadi",
        "Kanakapura",
        "Harohalli"
      ],
      "taluks_kn": [
        "ರಾಮನಗರ",
        "ಚನ್ನಪಟ್ಟಣ",
        "ಮಾಗಡಿ",
        "ಕನಕಪುರ",
        "ಹಾರೋಹಳ್ಳಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "kolar",
      "zone": "bengaluru",
      "zone_en": "Bengaluru Region",
      "zone_kn": "ಬೆಂಗಳೂರು ವಿಭಾಗ",
      "name_en": "Kolar",
      "name_kn": "ಕೋಲಾರ",
      "taluks_count": 6,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಕೋಲಾರ",
          "name_en": "Kolar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬಂಗಾರಪೇಟೆ",
          "name_en": "Bangarapet",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮಾಲೂರು",
          "name_en": "Malur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮುಳಬಾಗಿಲು",
          "name_en": "Mulbagal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶ್ರೀನಿವಾಸಪುರ",
          "name_en": "Srinivaspur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೆ.ಜಿ.ಎಫ್",
          "name_en": "KGF",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Kolar",
        "Bangarapet",
        "Malur",
        "Mulbagal",
        "Srinivaspur",
        "KGF"
      ],
      "taluks_kn": [
        "ಕೋಲಾರ",
        "ಬಂಗಾರಪೇಟೆ",
        "ಮಾಲೂರು",
        "ಮುಳಬಾಗಿಲು",
        "ಶ್ರೀನಿವಾಸಪುರ",
        "ಕೆ.ಜಿ.ಎಫ್"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "chikkaballapura",
      "zone": "bengaluru",
      "zone_en": "Bengaluru Region",
      "zone_kn": "ಬೆಂಗಳೂರು ವಿಭಾಗ",
      "name_en": "Chikkaballapura",
      "name_kn": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
      "taluks_count": 6,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
          "name_en": "Chikkaballapura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬಾಗೇಪಲ್ಲಿ",
          "name_en": "Bagepalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚಿಂತಾಮಣಿ",
          "name_en": "Chintamani",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗೌರಿಬಿದನೂರು",
          "name_en": "Gauribidanur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗುಡಿಬಂಡೆ",
          "name_en": "Gudibande",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶಿಡ್ಲಘಟ್ಟ",
          "name_en": "Sidlaghatta",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Chikkaballapura",
        "Bagepalli",
        "Chintamani",
        "Gauribidanur",
        "Gudibande",
        "Sidlaghatta"
      ],
      "taluks_kn": [
        "ಚಿಕ್ಕಬಳ್ಳಾಪುರ",
        "ಬಾಗೇಪಲ್ಲಿ",
        "ಚಿಂತಾಮಣಿ",
        "ಗೌರಿಬಿದನೂರು",
        "ಗುಡಿಬಂಡೆ",
        "ಶಿಡ್ಲಘಟ್ಟ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "tumakuru",
      "zone": "bengaluru",
      "zone_en": "Bengaluru Region",
      "zone_kn": "ಬೆಂಗಳೂರು ವಿಭಾಗ",
      "name_en": "Tumakuru",
      "name_kn": "ತುಮಕೂರು",
      "taluks_count": 10,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ತುಮಕೂರು",
          "name_en": "Tumakuru",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚಿಕ್ಕನಾಯಕನಹಳ್ಳಿ",
          "name_en": "Chiknayakanhalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗುಬ್ಬಿ",
          "name_en": "Gubbi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೊರಟಗೆರೆ",
          "name_en": "Koratagere",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕುಣಿಗಲ್",
          "name_en": "Kunigal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮಧುಗಿರಿ",
          "name_en": "Madhugiri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಪಾವಗಡ",
          "name_en": "Pavagada",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶಿರಾ",
          "name_en": "Sira",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ತಿಪಟೂರು",
          "name_en": "Tiptur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ತುರುವೇಕೆರೆ",
          "name_en": "Turuvekere",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Tumakuru",
        "Chiknayakanhalli",
        "Gubbi",
        "Koratagere",
        "Kunigal",
        "Madhugiri",
        "Pavagada",
        "Sira",
        "Tiptur",
        "Turuvekere"
      ],
      "taluks_kn": [
        "ತುಮಕೂರು",
        "ಚಿಕ್ಕನಾಯಕನಹಳ್ಳಿ",
        "ಗುಬ್ಬಿ",
        "ಕೊರಟಗೆರೆ",
        "ಕುಣಿಗಲ್",
        "ಮಧುಗಿರಿ",
        "ಪಾವಗಡ",
        "ಶಿರಾ",
        "ತಿಪಟೂರು",
        "ತುರುವೇಕೆರೆ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "mysuru",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Mysuru District",
      "name_kn": "ಮೈಸೂರು ಜಿಲ್ಲೆ",
      "taluks_count": 8,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಮೈಸೂರು ನಗರ/ತಾಲ್ಲೂಕು",
          "name_en": "Mysuru Taluk",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನಂಜನಗೂಡು",
          "name_en": "Nanjangud",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹುಣಸೂರು",
          "name_en": "Hunsur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಪಿರಿಯಾಪಟ್ಟಣ",
          "name_en": "Piriyapatna",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೆ.ಆರ್. ನಗರ",
          "name_en": "K.R. Nagar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಟಿ. ನರಸೀಪುರ",
          "name_en": "T. Narasipura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸರಗೂರು",
          "name_en": "Saragur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಾಲಿಗ್ರಾಮ",
          "name_en": "Saligrama",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Mysuru Taluk",
        "Nanjangud",
        "Hunsur",
        "Piriyapatna",
        "K.R. Nagar",
        "T. Narasipura",
        "Saragur",
        "Saligrama"
      ],
      "taluks_kn": [
        "ಮೈಸೂರು ತಾಲ್ಲೂಕು",
        "ನಂಜನಗೂಡು",
        "ಹುಣಸೂರು",
        "ಪಿರಿಯಾಪಟ್ಟಣ",
        "ಕೆ.ಆರ್. ನಗರ",
        "ಟಿ. ನರಸೀಪುರ",
        "ಸರಗೂರು",
        "ಸಾಲಿಗ್ರಾಮ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "mandya",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Mandya",
      "name_kn": "ಮಂಡ್ಯ",
      "taluks_count": 7,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಮಂಡ್ಯ",
          "name_en": "Mandya",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮದ್ದೂರು",
          "name_en": "Maddur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮಳವಳ್ಳಿ",
          "name_en": "Malavalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಪಾಂಡವಪುರ",
          "name_en": "Pandavapura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶ್ರೀರಂಗಪಟ್ಟಣ",
          "name_en": "Srirangapatna",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನಾಗಮಂಗಲ",
          "name_en": "Nagamangala",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೆ.ಆರ್. ಪೇಟೆ",
          "name_en": "K.R. Pete",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Mandya",
        "Maddur",
        "Malavalli",
        "Pandavapura",
        "Srirangapatna",
        "Nagamangala",
        "K.R. Pete"
      ],
      "taluks_kn": [
        "ಮಂಡ್ಯ",
        "ಮದ್ದೂರು",
        "ಮಳವಳ್ಳಿ",
        "ಪಾಂಡವಪುರ",
        "ಶ್ರೀರಂಗಪಟ್ಟಣ",
        "ನಾಗಮಂಗಲ",
        "ಕೆ.ಆರ್. ಪೇಟೆ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "hassan",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Hassan",
      "name_kn": "ಹಾಸನ",
      "taluks_count": 8,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಹಾಸನ",
          "name_en": "Hassan",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಆಲೂರು",
          "name_en": "Alur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಅರಕಲಗೂಡು",
          "name_en": "Arkalgud",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಅರಸೀಕೆರೆ",
          "name_en": "Arsikere",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬೇಲೂರು",
          "name_en": "Belur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚನ್ನರಾಯಪಟ್ಟಣ",
          "name_en": "Channarayapatna",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೊಳೆನರಸೀಪುರ",
          "name_en": "Holenarasipura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಕಲೇಶಪುರ",
          "name_en": "Sakleshpur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Hassan",
        "Alur",
        "Arkalgud",
        "Arsikere",
        "Belur",
        "Channarayapatna",
        "Holenarasipura",
        "Sakleshpur"
      ],
      "taluks_kn": [
        "ಹಾಸನ",
        "ಆಲೂರು",
        "ಅರಕಲಗೂಡು",
        "ಅರಸೀಕೆರೆ",
        "ಬೇಲೂರು",
        "ಚನ್ನರಾಯಪಟ್ಟಣ",
        "ಹೊಳೆನರಸೀಪುರ",
        "ಸಕಲೇಶಪುರ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "chamarajanagar",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Chamarajanagar",
      "name_kn": "ಚಾಮರಾಜನಗರ",
      "taluks_count": 5,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಚಾಮರಾಜನಗರ",
          "name_en": "Chamarajanagar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗುಂಡ್ಲುಪೇಟೆ",
          "name_en": "Gundlupet",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೊಳ್ಳೇಗಾಲ",
          "name_en": "Kollegal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಯಳಂದೂರು",
          "name_en": "Yelandur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹನೂರು",
          "name_en": "Hanur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Chamarajanagar",
        "Gundlupet",
        "Kollegal",
        "Yelandur",
        "Hanur"
      ],
      "taluks_kn": [
        "ಚಾಮರಾಜನಗರ",
        "ಗುಂಡ್ಲುಪೇಟೆ",
        "ಕೊಳ್ಳೇಗಾಲ",
        "ಯಳಂದೂರು",
        "ಹನೂರು"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "kodagu",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Kodagu",
      "name_kn": "ಕೊಡಗು",
      "taluks_count": 5,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಮಡಿಕೇರಿ",
          "name_en": "Madikeri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸೋಮವಾರಪೇಟೆ",
          "name_en": "Somwarpet",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ವಿರಾಜಪೇಟೆ",
          "name_en": "Virajpet",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕುಶಾಲನಗರ",
          "name_en": "Kushalnagar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಪೊನ್ನಂಪೇಟೆ",
          "name_en": "Ponnampet",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Madikeri",
        "Somwarpet",
        "Virajpet",
        "Kushalnagar",
        "Ponnampet"
      ],
      "taluks_kn": [
        "ಮಡಿಕೇರಿ",
        "ಸೋಮವಾರಪೇಟೆ",
        "ವಿರಾಜಪೇಟೆ",
        "ಕುಶಾಲನಗರ",
        "ಪೊನ್ನಂಪೇಟೆ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "chikkamagaluru",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Chikkamagaluru",
      "name_kn": "ಚಿಕ್ಕಮಗಳೂರು",
      "taluks_count": 8,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಚಿಕ್ಕಮಗಳೂರು",
          "name_en": "Chikkamagaluru",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಡೂರು",
          "name_en": "Kadur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ತರೀಕೆರೆ",
          "name_en": "Tarikere",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮೂಡಿಗೆರೆ",
          "name_en": "Mudigere",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶೃಂಗೇರಿ",
          "name_en": "Sringeri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೊಪ್ಪ",
          "name_en": "Koppa",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನರಸಿಂಹರಾಜಪುರ",
          "name_en": "Narasimharajapura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಅಜ್ಜಂಪುರ",
          "name_en": "Ajjampura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Chikkamagaluru",
        "Kadur",
        "Tarikere",
        "Mudigere",
        "Sringeri",
        "Koppa",
        "Narasimharajapura",
        "Ajjampura"
      ],
      "taluks_kn": [
        "ಚಿಕ್ಕಮಗಳೂರು",
        "ಕಡೂರು",
        "ತರೀಕೆರೆ",
        "ಮೂಡಿಗೆರೆ",
        "ಶೃಂಗೇರಿ",
        "ಕೊಪ್ಪ",
        "ನರಸಿಂಹರಾಜಪುರ",
        "ಅಜ್ಜಂಪುರ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "shivamogga",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Shivamogga District",
      "name_kn": "ಶಿವಮೊಗ್ಗ ಜಿಲ್ಲೆ",
      "taluks_count": 7,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಶಿವಮೊಗ್ಗ ನಗರ",
          "name_en": "Shivamogga",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಭದ್ರಾವತಿ",
          "name_en": "Bhadravathi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಾಗರ",
          "name_en": "Sagara",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶಿಕಾರಿಪುರ",
          "name_en": "Shikaripura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸೊರಬ",
          "name_en": "Soraba",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ತೀರ್ಥಹಳ್ಳಿ",
          "name_en": "Thirthahalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೊಸನಗರ",
          "name_en": "Hosanagara",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Shivamogga",
        "Bhadravathi",
        "Sagara",
        "Shikaripura",
        "Soraba",
        "Thirthahalli",
        "Hosanagara"
      ],
      "taluks_kn": [
        "ಶಿವಮೊಗ್ಗ",
        "ಭದ್ರಾವತಿ",
        "ಸಾಗರ",
        "ಶಿಕಾರಿಪುರ",
        "ಸೊರಬ",
        "ತೀರ್ಥಹಳ್ಳಿ",
        "ಹೊಸನಗರ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "davanagere",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Davanagere",
      "name_kn": "ದಾವಣಗೆರೆ",
      "taluks_count": 6,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ದಾವಣಗೆರೆ",
          "name_en": "Davanagere",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹರಿಹರ",
          "name_en": "Harihara",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೊನ್ನಾಳಿ",
          "name_en": "Honnali",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚನ್ನಗಿರಿ",
          "name_en": "Channagiri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನ್ಯಾಮತಿ",
          "name_en": "Nyamathi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಜಗಳೂರು",
          "name_en": "Jagalur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Davanagere",
        "Harihara",
        "Honnali",
        "Channagiri",
        "Nyamathi",
        "Jagalur"
      ],
      "taluks_kn": [
        "ದಾವಣಗೆರೆ",
        "ಹರಿಹರ",
        "ಹೊನ್ನಾಳಿ",
        "ಚನ್ನಗಿರಿ",
        "ನ್ಯಾಮತಿ",
        "ಜಗಳೂರು"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "chitradurga",
      "zone": "mysuru",
      "zone_en": "Mysuru Region",
      "zone_kn": "ಮೈಸೂರು ವಿಭಾಗ",
      "name_en": "Chitradurga",
      "name_kn": "ಚಿತ್ರದುರ್ಗ",
      "taluks_count": 6,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಚಿತ್ರದುರ್ಗ",
          "name_en": "Chitradurga",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚಳ್ಳಕೆರೆ",
          "name_en": "Challakere",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹಿರಿಯೂರು",
          "name_en": "Hiriyur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೊಳಲ್ಕೆರೆ",
          "name_en": "Holalkere",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೊಸದುರ್ಗ",
          "name_en": "Hosadurga",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮೊಳಕಾಲ್ಮುರು",
          "name_en": "Molakalmuru",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Chitradurga",
        "Challakere",
        "Hiriyur",
        "Holalkere",
        "Hosadurga",
        "Molakalmuru"
      ],
      "taluks_kn": [
        "ಚಿತ್ರದುರ್ಗ",
        "ಚಳ್ಳಕೆರೆ",
        "ಹಿರಿಯೂರು",
        "ಹೊಳಲ್ಕೆರೆ",
        "ಹೊಸದುರ್ಗ",
        "ಮೊಳಕಾಲ್ಮುರು"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "kalaburagi",
      "zone": "kalyana",
      "zone_en": "Kalyana Karnataka",
      "zone_kn": "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ",
      "name_en": "Kalaburagi District",
      "name_kn": "ಕಲಬುರಗಿ ಜಿಲ್ಲೆ",
      "taluks_count": 10,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಕಲಬುರಗಿ ನಗರ/ತಾಲ್ಲೂಕು",
          "name_en": "Kalaburagi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಆಳಂದ",
          "name_en": "Aland",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಅಫಜಲಪುರ",
          "name_en": "Afzalpur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಜೇವರ್ಗಿ",
          "name_en": "Jevargi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸೇಡಂ",
          "name_en": "Sedam",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚಿತ್ತಾಪುರ",
          "name_en": "Chittapur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚಿಂಚೋಳಿ",
          "name_en": "Chincholi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಮಲಾಪುರ",
          "name_en": "Kamalapur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶಹಾಬಾದ್",
          "name_en": "Shahabad",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಾಳಗಿ",
          "name_en": "Kalgi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Kalaburagi",
        "Aland",
        "Afzalpur",
        "Jevargi",
        "Sedam",
        "Chittapur",
        "Chincholi",
        "Kamalapur",
        "Shahabad",
        "Kalgi"
      ],
      "taluks_kn": [
        "ಕಲಬುರಗಿ",
        "ಆಳಂದ",
        "ಅಫಜಲಪುರ",
        "ಜೇವರ್ಗಿ",
        "ಸೇಡಂ",
        "ಚಿತ್ತಾಪುರ",
        "ಚಿಂಚೋಳಿ",
        "ಕಮಲಾಪುರ",
        "ಶಹಾಬಾದ್",
        "ಕಾಳಗಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "ballari",
      "zone": "kalyana",
      "zone_en": "Kalyana Karnataka",
      "zone_kn": "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ",
      "name_en": "Ballari District",
      "name_kn": "ಬಳ್ಳಾರಿ ಜಿಲ್ಲೆ",
      "taluks_count": 5,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಬಳ್ಳಾರಿ ನಗರ",
          "name_en": "Ballari",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಂಡೂರು",
          "name_en": "Sandur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಿರುಗುಪ್ಪ",
          "name_en": "Siruguppa",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕುರುಗೋಡು",
          "name_en": "Kurugodu",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಂಪ್ಲಿ",
          "name_en": "Kampli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Ballari",
        "Sandur",
        "Siruguppa",
        "Kurugodu",
        "Kampli"
      ],
      "taluks_kn": [
        "ಬಳ್ಳಾರಿ",
        "ಸಂಡೂರು",
        "ಸಿರುಗುಪ್ಪ",
        "ಕುರುಗೋಡು",
        "ಕಂಪ್ಲಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "vijayanagara",
      "zone": "kalyana",
      "zone_en": "Kalyana Karnataka",
      "zone_kn": "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ",
      "name_en": "Vijayanagara",
      "name_kn": "ವಿಜಯನಗರ",
      "taluks_count": 6,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಹೊಸಪೇಟೆ",
          "name_en": "Hosapete",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೂಡ್ಲಿಗಿ",
          "name_en": "Kudligi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹಗರಿಬೊಮ್ಮನಹಳ್ಳಿ",
          "name_en": "Hagaribommanahalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೊಟ್ಟೂರು",
          "name_en": "Kotturu",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹೂವಿನ ಹಡಗಲಿ",
          "name_en": "Hoovina Hadagali",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹರಪನಹಳ್ಳಿ",
          "name_en": "Harapanahalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Hosapete",
        "Kudligi",
        "Hagaribommanahalli",
        "Kotturu",
        "Hoovina Hadagali",
        "Harapanahalli"
      ],
      "taluks_kn": [
        "ಹೊಸಪೇಟೆ",
        "ಕೂಡ್ಲಿಗಿ",
        "ಹಗರಿಬೊಮ್ಮನಹಳ್ಳಿ",
        "ಕೊಟ್ಟೂರು",
        "ಹೂವಿನ ಹಡಗಲಿ",
        "ಹರಪನಹಳ್ಳಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "bidar",
      "zone": "kalyana",
      "zone_en": "Kalyana Karnataka",
      "zone_kn": "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ",
      "name_en": "Bidar",
      "name_kn": "ಬೀದರ್",
      "taluks_count": 7,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಬೀದರ್",
          "name_en": "Bidar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬಸವಕಲ್ಯಾಣ",
          "name_en": "Basavakalyan",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಭಾಲ್ಕಿ",
          "name_en": "Bhalki",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹುಮ್ನಾಬಾದ್",
          "name_en": "Humnabad",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಔರಾದ್",
          "name_en": "Aurad",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹುಲಸೂರು",
          "name_en": "Hulsoor",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಮಲನಗರ",
          "name_en": "Kamalnagar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Bidar",
        "Basavakalyan",
        "Bhalki",
        "Humnabad",
        "Aurad",
        "Hulsoor",
        "Kamalnagar"
      ],
      "taluks_kn": [
        "ಬೀದರ್",
        "ಬಸವಕಲ್ಯಾಣ",
        "ಭಾಲ್ಕಿ",
        "ಹುಮ್ನಾಬಾದ್",
        "ಔರಾದ್",
        "ಹುಲಸೂರು",
        "ಕಮಲನಗರ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "raichur",
      "zone": "kalyana",
      "zone_en": "Kalyana Karnataka",
      "zone_kn": "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ",
      "name_en": "Raichur",
      "name_kn": "ರಾಯಚೂರು",
      "taluks_count": 7,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ರಾಯಚೂರು",
          "name_en": "Raichur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮಾನ್ವಿ",
          "name_en": "Manvi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಿಂಧನೂರು",
          "name_en": "Sindhanur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ದೇವದುರ್ಗ",
          "name_en": "Devadurga",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಲಿಂಗಸೂಗೂರು",
          "name_en": "Lingsugur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮಸ್ಕಿ",
          "name_en": "Maski",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಿರವಾರ",
          "name_en": "Sirwar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Raichur",
        "Manvi",
        "Sindhanur",
        "Devadurga",
        "Lingsugur",
        "Maski",
        "Sirwar"
      ],
      "taluks_kn": [
        "ರಾಯಚೂರು",
        "ಮಾನ್ವಿ",
        "ಸಿಂಧನೂರು",
        "ದೇವದುರ್ಗ",
        "ಲಿಂಗಸೂಗೂರು",
        "ಮಸ್ಕಿ",
        "ಸಿರವಾರ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "koppal",
      "zone": "kalyana",
      "zone_en": "Kalyana Karnataka",
      "zone_kn": "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ",
      "name_en": "Koppal",
      "name_kn": "ಕೊಪ್ಪಳ",
      "taluks_count": 7,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಕೊಪ್ಪಳ",
          "name_en": "Koppal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗಂಗಾವತಿ",
          "name_en": "Gangavathi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕುಷ್ಟಗಿ",
          "name_en": "Kushtagi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಯಲಬುರ್ಗಾ",
          "name_en": "Yelburga",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕನಕಗಿರಿ",
          "name_en": "Kanakagiri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಾರಟಗಿ",
          "name_en": "Karatagi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕುಕನೂರು",
          "name_en": "Kukanur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Koppal",
        "Gangavathi",
        "Kushtagi",
        "Yelburga",
        "Kanakagiri",
        "Karatagi",
        "Kukanur"
      ],
      "taluks_kn": [
        "ಕೊಪ್ಪಳ",
        "ಗಂಗಾವತಿ",
        "ಕುಷ್ಟಗಿ",
        "ಯಲಬುರ್ಗಾ",
        "ಕನಕಗಿರಿ",
        "ಕಾರಟಗಿ",
        "ಕುಕನೂರು"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "yadgir",
      "zone": "kalyana",
      "zone_en": "Kalyana Karnataka",
      "zone_kn": "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ",
      "name_en": "Yadgir",
      "name_kn": "ಯಾದಗಿರಿ",
      "taluks_count": 6,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಯಾದಗಿರಿ",
          "name_en": "Yadgir",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶಹಾಪುರ",
          "name_en": "Shahapur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸುರಪುರ",
          "name_en": "Surpur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗುರಮಿಟಕಲ್",
          "name_en": "Gurmitkal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ವಡಗೇರಾ",
          "name_en": "Vadagera",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹುಣಸಗಿ",
          "name_en": "Hunsagi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Yadgir",
        "Shahapur",
        "Surpur",
        "Gurmitkal",
        "Vadagera",
        "Hunsagi"
      ],
      "taluks_kn": [
        "ಯಾದಗಿರಿ",
        "ಶಹಾಪುರ",
        "ಸುರಪುರ",
        "ಗುರಮಿಟಕಲ್",
        "ವಡಗೇರಾ",
        "ಹುಣಸಗಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "belagavi",
      "zone": "kittur",
      "zone_en": "Kittur Karnataka",
      "zone_kn": "ಕಿತ್ತೂರು ಕರ್ನಾಟಕ",
      "name_en": "Belagavi District",
      "name_kn": "ಬೆಳಗಾವಿ ಜಿಲ್ಲೆ",
      "taluks_count": 14,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಬೆಳಗಾವಿ ನಗರ/ತಾಲ್ಲೂಕು",
          "name_en": "Belagavi City",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚಿಕ್ಕೋಡಿ",
          "name_en": "Chikkodi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗೋಕಾಕ್",
          "name_en": "Gokak",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಅಥಣಿ",
          "name_en": "Athani",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬೈಲಹೊಂಗಲ",
          "name_en": "Bailhongal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸವದತ್ತಿ",
          "name_en": "Saundatti",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ರಾಮದುರ್ಗ",
          "name_en": "Ramdurg",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹುಕ್ಕೇರಿ",
          "name_en": "Hukkeri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಖಾನಾಪುರ",
          "name_en": "Khanapur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ರಾಯಭಾಗ",
          "name_en": "Raybag",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಾಗವಾಡ",
          "name_en": "Kagwad",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನಿಪ್ಪಾಣಿ",
          "name_en": "Nippani",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಿತ್ತೂರು",
          "name_en": "Kittur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮೂಡಲಗಿ",
          "name_en": "Mudalgi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Belagavi",
        "Chikkodi",
        "Gokak",
        "Athani",
        "Bailhongal",
        "Saundatti",
        "Ramdurg",
        "Hukkeri",
        "Khanapur",
        "Raybag",
        "Kagwad",
        "Nippani",
        "Kittur",
        "Mudalgi"
      ],
      "taluks_kn": [
        "ಬೆಳಗಾವಿ",
        "ಚಿಕ್ಕೋಡಿ",
        "ಗೋಕಾಕ್",
        "ಅಥಣಿ",
        "ಬೈಲಹೊಂಗಲ",
        "ಸವದತ್ತಿ",
        "ರಾಮದುರ್ಗ",
        "ಹುಕ್ಕೇರಿ",
        "ಖಾನಾಪುರ",
        "ರಾಯಭಾಗ",
        "ಕಾಗವಾಡ",
        "ನಿಪ್ಪಾಣಿ",
        "ಕಿತ್ತೂರು",
        "ಮೂಡಲಗಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "dharwad",
      "zone": "kittur",
      "zone_en": "Kittur Karnataka",
      "zone_kn": "ಕಿತ್ತೂರು ಕರ್ನಾಟಕ",
      "name_en": "Dharwad - Hubballi",
      "name_kn": "ಧಾರವಾಡ - ಹುಬ್ಬಳ್ಳಿ",
      "taluks_count": 7,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಹುಬ್ಬಳ್ಳಿ ನಗರ",
          "name_en": "Hubballi Urban",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಧಾರವಾಡ ನಗರ/ಗ್ರಾಮೀಣ",
          "name_en": "Dharwad Rural",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕಲಘಟಗಿ",
          "name_en": "Kalghatgi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನವಲಗುಂದ",
          "name_en": "Navalgund",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕುಂದಗೋಳ",
          "name_en": "Kundgol",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಅಳ್ನಾವರ",
          "name_en": "Alnavar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಅಣ್ಣಿಗೇರಿ",
          "name_en": "Annigeri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Hubballi Urban",
        "Dharwad Rural",
        "Kalghatgi",
        "Navalgund",
        "Kundgol",
        "Alnavar",
        "Annigeri"
      ],
      "taluks_kn": [
        "ಹುಬ್ಬಳ್ಳಿ ನಗರ",
        "ಧಾರವಾಡ ಗ್ರಾಮೀಣ",
        "ಕಲಘಟಗಿ",
        "ನವಲಗುಂದ",
        "ಕುಂದಗೋಳ",
        "ಅಳ್ನಾವರ",
        "ಅಣ್ಣಿಗೇರಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "gadag",
      "zone": "kittur",
      "zone_en": "Kittur Karnataka",
      "zone_kn": "ಕಿತ್ತೂರು ಕರ್ನಾಟಕ",
      "name_en": "Gadag",
      "name_kn": "ಗದಗ",
      "taluks_count": 7,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಗದಗ",
          "name_en": "Gadag",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ರೋಣ",
          "name_en": "Ron",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶಿರಹಟ್ಟಿ",
          "name_en": "Shirahatti",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮುಂಡರಗಿ",
          "name_en": "Mundargi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನರಗುಂದ",
          "name_en": "Nargund",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗಜೇಂದ್ರಗಡ",
          "name_en": "Gajendragad",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಲಕ್ಷ್ಮೇಶ್ವರ",
          "name_en": "Lakshmeshwar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Gadag",
        "Ron",
        "Shirahatti",
        "Mundargi",
        "Nargund",
        "Gajendragad",
        "Lakshmeshwar"
      ],
      "taluks_kn": [
        "ಗದಗ",
        "ರೋಣ",
        "ಶಿರಹಟ್ಟಿ",
        "ಮುಂಡರಗಿ",
        "ನರಗುಂದ",
        "ಗಜೇಂದ್ರಗಡ",
        "ಲಕ್ಷ್ಮೇಶ್ವರ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "haveri",
      "zone": "kittur",
      "zone_en": "Kittur Karnataka",
      "zone_kn": "ಕಿತ್ತೂರು ಕರ್ನಾಟಕ",
      "name_en": "Haveri",
      "name_kn": "ಹಾವೇರಿ",
      "taluks_count": 8,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಹಾವೇರಿ",
          "name_en": "Haveri",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ರಾಣೇಬೆನ್ನೂರು",
          "name_en": "Ranebennur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬ್ಯಾಡಗಿ",
          "name_en": "Byadgi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹಿರೇಕೆರೂರು",
          "name_en": "Hirekerur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಶಿಗ್ಗಾಂವ",
          "name_en": "Shiggaon",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸವಣೂರು",
          "name_en": "Savanur",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹಾನಗಲ್",
          "name_en": "Hangal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ರಟ್ಟಿಹಳ್ಳಿ",
          "name_en": "Rattihalli",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Haveri",
        "Ranebennur",
        "Byadgi",
        "Hirekerur",
        "Shiggaon",
        "Savanur",
        "Hangal",
        "Rattihalli"
      ],
      "taluks_kn": [
        "ಹಾವೇರಿ",
        "ರಾಣೇಬೆನ್ನೂರು",
        "ಬ್ಯಾಡಗಿ",
        "ಹಿರೇಕೆರೂರು",
        "ಶಿಗ್ಗಾಂವ",
        "ಸವಣೂರು",
        "ಹಾನಗಲ್",
        "ರಟ್ಟಿಹಳ್ಳಿ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "vijayapura",
      "zone": "kittur",
      "zone_en": "Kittur Karnataka",
      "zone_kn": "ಕಿತ್ತೂರು ಕರ್ನಾಟಕ",
      "name_en": "Vijayapura",
      "name_kn": "ವಿಜಯಪುರ",
      "taluks_count": 12,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ವಿಜಯಪುರ",
          "name_en": "Vijayapura",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಇಂಡಿ",
          "name_en": "Indi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬಸವನ ಬಾಗೇವಾಡಿ",
          "name_en": "Basavana Bagewadi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಸಿಂದಗಿ",
          "name_en": "Sindagi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮುದ್ದೇಬಿಹಾಳ",
          "name_en": "Muddebihal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ತಾಳಿಕೋಟೆ",
          "name_en": "Talikoti",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಚಡಚಣ",
          "name_en": "Chadchan",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ದೇವರ ಹಿಪ್ಪರಗಿ",
          "name_en": "Devar Hippargi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಕೊಳ್ಳಾರ",
          "name_en": "Kolhar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ನಿಡಗುಂದಿ",
          "name_en": "Nidagundi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬಬಲೇಶ್ವರ",
          "name_en": "Babaleshwar",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ತಿಕೋಟಾ",
          "name_en": "Tikota",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Vijayapura",
        "Indi",
        "Basavana Bagewadi",
        "Sindagi",
        "Muddebihal",
        "Talikoti",
        "Chadchan",
        "Devar Hippargi",
        "Kolhar",
        "Nidagundi",
        "Babaleshwar",
        "Tikota"
      ],
      "taluks_kn": [
        "ವಿಜಯಪುರ",
        "ಇಂಡಿ",
        "ಬಸವನ ಬಾಗೇವಾಡಿ",
        "ಸಿಂದಗಿ",
        "ಮುದ್ದೇಬಿಹಾಳ",
        "ತಾಳಿಕೋಟೆ",
        "ಚಡಚಣ",
        "ದೇವರ ಹಿಪ್ಪರಗಿ",
        "ಕೊಳ್ಳಾರ",
        "ನಿಡಗುಂದಿ",
        "ಬಬಲೇಶ್ವರ",
        "ತಿಕೋಟಾ"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    },
    {
      "id": "bagalkote",
      "zone": "kittur",
      "zone_en": "Kittur Karnataka",
      "zone_kn": "ಕಿತ್ತೂರು ಕರ್ನಾಟಕ",
      "name_en": "Bagalkote",
      "name_kn": "ಬಾಗಲಕೋಟೆ",
      "taluks_count": 9,
      "units_count": "",
      "president_kn": "",
      "president_en": "",
      "president_post_kn": "ಜಿಲ್ಲಾ ಅಧ್ಯಕ್ಷರು",
      "president_post_en": "District President",
      "president_photo": "",
      "president_phone": "",
      "secretary_kn": "",
      "secretary_en": "",
      "secretary_post_kn": "ಜಿಲ್ಲಾ ಕಾರ್ಯದರ್ಶಿ",
      "secretary_post_en": "District Secretary",
      "secretary_photo": "",
      "secretary_phone": "",
      "office_en": "",
      "office_kn": "",
      "phone": "",
      "leaders": [],
      "taluks_data": [
        {
          "name_kn": "ಬಾಗಲಕೋಟೆ",
          "name_en": "Bagalkote",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬಾದಾಮಿ",
          "name_en": "Badami",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಜಮಖಂಡಿ",
          "name_en": "Jamkhandi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಮುಧೋಳ",
          "name_en": "Mudhol",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಹುನಗುಂದ",
          "name_en": "Hungund",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಬೀಳಗಿ",
          "name_en": "Bilagi",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಗುಳೇದಗುಡ್ಡ",
          "name_en": "Guledagudda",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ರಬಕವಿ ಬನಹಟ್ಟಿ",
          "name_en": "Rabkavi Banhatti",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        },
        {
          "name_kn": "ಇಳಕಲ್",
          "name_en": "Ilkal",
          "president_kn": "",
          "president_en": "",
          "secretary_kn": "",
          "secretary_en": "",
          "phone": "",
          "units_kn": ""
        }
      ],
      "taluks_en": [
        "Bagalkote",
        "Badami",
        "Jamkhandi",
        "Mudhol",
        "Hungund",
        "Bilagi",
        "Guledagudda",
        "Rabkavi Banhatti",
        "Ilkal"
      ],
      "taluks_kn": [
        "ಬಾಗಲಕೋಟೆ",
        "ಬಾದಾಮಿ",
        "ಜಮಖಂಡಿ",
        "ಮುಧೋಳ",
        "ಹುನಗುಂದ",
        "ಬೀಳಗಿ",
        "ಗುಳೇದಗುಡ್ಡ",
        "ರಬಕವಿ ಬನಹಟ್ಟಿ",
        "ಇಳಕಲ್"
      ],
      "area_units_kn": "",
      "area_units_en": ""
    }
  ],
  "activities": [
    {
      "id": "act1",
      "title_en": "Bengaluru State Youth Convention",
      "title_kn": "ಬೆಂಗಳೂರು ರಾಜ್ಯ ಮಟ್ಟದ ಯುವ ಸಮಾವೇಶ",
      "date": "2026-08-01",
      "badge": "Activity",
      "image": "images/hero-banner-2.jpg",
      "desc_en": "Thousands of young delegates from all 31 Karnataka districts assembled to formulate proactive youth policies.",
      "desc_kn": "ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳಿಂದ ಸಹಸ್ರಾರು ಯುವ ಪ್ರತಿನಿಧಿಗಳು ಪಾಲ್ಗೊಂಡು ಯುವ ನೀತಿ ಕುರಿತು ಚರ್ಚಿಸಿದ ಐತಿಹಾಸಿಕ ಸಮಾವೇಶ.",
      "full_en": "Thousands of young delegates from all 31 Karnataka districts assembled in Bengaluru to formulate proactive youth policies, discuss unemployment solutions, and strengthen grassroots youth organizing.",
      "full_kn": "ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಡೆದ ರಾಜ್ಯ ಮಟ್ಟದ ಯುವ ಸಮಾವೇಶದಲ್ಲಿ ಕರ್ನಾಟಕದ 31 ಜಿಲ್ಲೆಗಳಿಂದ ಸಾವಿರಾರು ಯುವ ಪ್ರತಿನಿಧಿಗಳು ಭಾಗವಹಿಸಿ ಉದ್ಯೋಗ ನೀತಿ, ಶಿಕ್ಷಣ ಮತ್ತು ಯುವಜನರ ಭವಿಷ್ಯದ ಕುರಿತು ಮಹತ್ವದ ನಿರ್ಣಯಗಳನ್ನು ಕೈಗೊಂಡರು."
    },
    {
      "id": "act2",
      "title_en": "Flood Relief & Rehabilitation Assistance",
      "title_kn": "ಪ್ರವಾಹ ಸಂತ್ರಸ್ತರ ಪುನರ್ವಸತಿ ನೆರವು",
      "date": "2026-07-15",
      "badge": "Activity",
      "image": "images/hero-banner-3.jpg",
      "desc_en": "DYFI volunteer squads deployed to distribute relief kits and rehabilitate flood-affected villages in North Karnataka.",
      "desc_kn": "ಉತ್ತರ ಕರ್ನಾಟಕ ಮತ್ತು ಮಲೆನಾಡು ಭಾಗದ ಪ್ರವಾಹ ಪೀಡಿತ ಗ್ರಾಮಗಳಲ್ಲಿ ಡಿವೈಎಫ್ಐ ಸ್ವಯಂಸೇವಕರಿಂದ ಪರಿಹಾರ ಸಾಮಗ್ರಿ ವಿತರಣೆ.",
      "full_en": "DYFI volunteer squads deployed across North Karnataka and Malenadu regions to distribute food, dry rations, medicines, and rebuild shelters for flood-affected families.",
      "full_kn": "ಉತ್ತರ ಕರ್ನಾಟಕ ಹಾಗೂ ಮಲೆನಾಡು ಭಾಗದಲ್ಲಿ ನೆರೆ ಸಂತ್ರಸ್ತರಿಗೆ ನೆರವಾಗಲು ಡಿವೈಎಫ್ಐ ತಂಡಗಳು ಹಗಲಿರುಳು ಶ್ರಮಿಸಿ ಆಹಾರ, ಔಷಧ ಹಾಗೂ ಅಗತ್ಯ ಪರಿಹಾರ ಸಾಮಗ್ರಿಗಳನ್ನು ವಿತರಿಸಿ ಮನೆಗಳ ದುರಸ್ತಿ ಕಾರ್ಯ ಕೈಗೊಂಡವು."
    },
    {
      "id": "act3",
      "title_en": "Free Public Health Diagnostics Camps",
      "title_kn": "ಉಚಿತ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಮತ್ತು ತಪಾಸಣೆ ಶಿಬಿರ",
      "date": "2026-06-28",
      "badge": "Activity",
      "image": "images/gallery-1.jpg",
      "desc_en": "Preventive wellness camps organized in underprivileged areas in collaboration with progressive doctors and institutions.",
      "desc_kn": "ಹಿಂದುಳಿದ ಪ್ರದೇಶಗಳ ಜನರಿಗಾಗಿ ನುರಿತ ವೈದ್ಯರ ಸಹಯೋಗದೊಂದಿಗೆ ಉಚಿತ ತಪಾಸಣೆ ಹಾಗೂ ಔಷಧ ವಿತರಣಾ ಶಿಬಿರಗಳು.",
      "full_en": "Preventive wellness camps organized across rural and working-class settlements providing free diagnostics, general checkups, and free essential medicines.",
      "full_kn": "ಹಿಂದುಳಿದ ಬಡಾವಣೆಗಳು ಹಾಗೂ ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ನುರಿತ ವೈದ್ಯರ ಸಹಕಾರದೊಂದಿಗೆ ಉಚಿತ ಆರೋಗ್ಯ ತಪಾಸಣೆ, ರಕ್ತದೊತ್ತಡ, ಮಧುಮೇಹ ಪರೀಕ್ಷೆ ಹಾಗೂ ಉಚಿತ ಔಷಧ ವಿತರಣಾ ಶಿಬಿರಗಳನ್ನು ಆಯೋಜಿಸಲಾಯಿತು."
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

        // Auto-sync latest live repository updates across all browsers & visitors
    const CODE_LIVE_SYNC_VERSION = 'dyfi_live_sync_v20261024_02';
    if (localStorage.getItem('dyfi_last_sync_ver') !== CODE_LIVE_SYNC_VERSION) {
      this.set(DYFI_DATA_KEYS.SITE_CONTENT, DEFAULT_DYFI_DATA.siteContent);
      this.set(DYFI_DATA_KEYS.TICKER, DEFAULT_DYFI_DATA.ticker);
      this.set(DYFI_DATA_KEYS.NEWS, DEFAULT_DYFI_DATA.news);
      this.set(DYFI_DATA_KEYS.CAMPAIGNS, DEFAULT_DYFI_DATA.campaigns);
      this.set(DYFI_DATA_KEYS.STATEMENTS, DEFAULT_DYFI_DATA.statements);
      this.set(DYFI_DATA_KEYS.MARTYRS, DEFAULT_DYFI_DATA.martyrs);
      this.set(DYFI_DATA_KEYS.LEADERS, DEFAULT_DYFI_DATA.leaders);
      this.set(DYFI_DATA_KEYS.GALLERY, DEFAULT_DYFI_DATA.gallery);
      this.set(DYFI_DATA_KEYS.BLOOD_DONORS, DEFAULT_DYFI_DATA.bloodDonors);
      this.set(DYFI_DATA_KEYS.DISTRICTS, DEFAULT_DYFI_DATA.districts);
      this.set(DYFI_DATA_KEYS.ACTIVITIES, DEFAULT_DYFI_DATA.activities);
      localStorage.setItem('dyfi_last_sync_ver', CODE_LIVE_SYNC_VERSION);
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
