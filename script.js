const translations = {
    'en': {
        // Index page translations
        pageTitle_index: 'Rulaiyuan\'s Ruru Travelogue',
        blogSubtitle: 'Exploring the beauty of Japan, one trip at a time.',
        navHome: 'Home',
        navAbout: 'About',
        navProjects: 'Projects',
        navGallery: 'Gallery',
        navContact: 'Contact',
        aboutTitle: 'About Me',
        aboutContent: 'Welcome to my travel blog! I\'m Ruru, a passionate explorer of Japan. Join me as I share my adventures, from serene temples to bustling city streets, and everything in between. My goal is to inspire your next Japanese journey with authentic experiences and delicious discoveries.',
        post1Title: 'A Trip to Kyoto\'s Temples',
        post1Content: 'I recently visited the beautiful city of Kyoto and was amazed by its stunning temples. From Kinkaku-ji to Fushimi Inari, each temple had its own unique charm and history.',
        post2Title: 'Okinawan Adventure',
        post2Content: 'My journey to Okinawa was filled with breathtaking beaches, delicious food, and a rich cultural experience. I highly recommend visiting this beautiful island.',
        galleryTitle: 'Gallery',
        contactTitle: 'Contact Me',
        contactNamePlaceholder: 'Your Name',
        contactEmailPlaceholder: 'Your Email',
        contactMessagePlaceholder: 'Your Message',
        contactSubmitButton: 'Send',
        footerCopyright: 'Copyright &copy; 2025',

        // Project page translations
        pageTitle_projectOne: 'Attraction Footprints',
        projectOneTitle: 'Attraction Footprints',
        projectOneContent: 'Explore the famous and hidden gems of Japan, from ancient temples to bustling cityscapes.',
        pageTitle_projectTwo: 'Recommended Delicacies',
        projectTwoTitle: 'Recommended Delicacies',
        projectTwoContent: 'A guide to the must-try foods and restaurants across Japan, from street food to fine dining.',
        pageTitle_projectThree: 'Travel Vlogs',
        projectThreeTitle: 'Travel Vlogs',
        projectThreeContent: 'Watch my travel videos and experience Japan through my lens, featuring scenic routes and cultural insights.',
        backToHome: 'Back to Home',

        // New project card translations for index.html
        projectsSectionTitle: 'Our Projects',
        projectOneCardTitle: 'Attraction Footprints',
        projectOneCardContent: 'Explore the famous and hidden gems of Japan, from ancient temples to bustling cityscapes.',
        projectTwoCardTitle: 'Recommended Delicacies',
        projectTwoCardContent: 'A guide to the must-try foods and restaurants across Japan, from street food to fine dining.',
        projectThreeCardTitle: 'Travel Vlogs',
        projectThreeCardContent: 'Watch my travel videos and experience Japan through my lens, featuring scenic routes and cultural insights.'
    },
    'zh-TW': {
        // Index page translations
        pageTitle_index: '茹來願の茹茹旅記',
        blogSubtitle: '探索日本之美，一次一趟旅程。',
        navHome: '首頁',
        navAbout: '關於',
        navProjects: '專案',
        navGallery: '相簿',
        navContact: '關注',
        aboutTitle: '關於我',
        aboutContent: '歡迎來到我的旅遊部落格！我是Ruru，一位熱情的日本探險家。和我一起分享我的冒險，從寧靜的寺廟到繁華的城市街道，以及介於兩者之間的一切。我的目標是透過真實的體驗和美味的發現，激發您的下一次日本之旅。',
        post1Title: '京都寺廟之旅',
        post1Content: '我最近參觀了美麗的京都，並被其令人驚嘆的寺廟所震撼。從金閣寺到伏見稻荷，每座寺廟都有其獨特的魅力和歷史。',
        post2Title: '沖繩冒險',
        post2Content: '我的沖繩之旅充滿了令人驚嘆的海灘、美味的食物和豐富的文化體驗。我強烈推薦您參觀這個美麗的島嶼。',
        galleryTitle: '相簿',
        contactTitle: '關注我',
        contactNamePlaceholder: '您的姓名',
        contactEmailPlaceholder: '您的電子郵件',
        contactMessagePlaceholder: '您的訊息',
        contactSubmitButton: '送出',
        footerCopyright: '版權所有 &copy; 2025',

        // Project page translations
        pageTitle_projectOne: '景點足跡',
        projectOneTitle: '景點足跡',
        projectOneContent: '探索日本著名和隱藏的寶石，從古老的寺廟到繁華的城市景觀。',
        pageTitle_projectTwo: '飽腹推薦',
        projectTwoTitle: '飽腹推薦',
        projectTwoContent: '一份關於日本各地必嚐美食和餐廳的指南，從街頭小吃到高級餐飲。',
        pageTitle_projectThree: '旅記影音集',
        projectThreeTitle: '旅記影音集',
        projectThreeContent: '觀看我的旅行影片，透過我的鏡頭體驗日本，內容包括風景優美的路線和文化見解。',
        backToHome: '返回首頁',

        // New project card translations for index.html
        projectsSectionTitle: '我們的專案',
        projectOneCardTitle: '景點足跡',
        projectOneCardContent: '探索日本著名和隱藏的寶石，從古老的寺廟到繁華的城市景觀。',
        projectTwoCardTitle: '飽腹推薦',
        projectTwoCardContent: '一份關於日本各地必嚐美食和餐廳的指南，從街頭小吃到高級餐飲。',
        projectThreeCardTitle: '旅記影音集',
        projectThreeCardContent: '觀看我的旅行影片，透過我的鏡頭體驗日本，內容包括風景優美的路線和文化見解。',
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    const currentTranslations = translations[lang];

    // Get the current page name (e.g., "index", "project_one")
    const path = window.location.pathname.split('/').pop();
    const pageName = path === '' || path === 'index.html' ? 'index' : path.split('.')[0];

    for (const id in currentTranslations) {
        const element = document.getElementById(id);
        if (element) {
            // Check if the ID is specific to a page and if it matches the current page
            if (id.startsWith('pageTitle_')) {
                // Handle page titles separately as they are dynamic based on pageName
                continue; 
            }

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = currentTranslations[id];
            } else {
                element.textContent = currentTranslations[id];
            }
        }
    }

    // Update page title specifically based on current page
    const pageTitleElement = document.getElementById('pageTitle');
    if (pageTitleElement) {
        if (pageName === 'index') {
            pageTitleElement.textContent = currentTranslations.pageTitle_index;
        } else if (pageName === 'project_one') {
            pageTitleElement.textContent = currentTranslations.pageTitle_projectOne;
        } else if (pageName === 'project_two') {
            pageTitleElement.textContent = currentTranslations.pageTitle_projectTwo;
        } else if (pageName === 'project_three') {
            pageTitleElement.textContent = currentTranslations.pageTitle_projectThree;
        }
    }

    console.log('Language set to: ' + lang);
}

// Set default language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Determine initial language based on URL or browser settings, or default
    const initialLang = localStorage.getItem('selectedLanguage') || 'zh-TW'; 
    setLanguage(initialLang);

    // Handle scrolling to hash on page load
    if (window.location.hash && window.location.hash !== '#') { // Added check for non-empty hash
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // If hash is present but element not found, scroll to top
            window.scrollTo(0, 0);
        }
    }
});

// Save selected language to localStorage when button is clicked
function saveLanguagePreference(lang) {
    localStorage.setItem('selectedLanguage', lang);
    setLanguage(lang);
}

// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const lightboxImg = document.getElementById('lightbox-img');
        const galleryImages = document.querySelectorAll('.gallery img');
        const closeBtn = document.querySelector('.close-btn');

        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        }

        // Also close lightbox when clicking on the background
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
});
