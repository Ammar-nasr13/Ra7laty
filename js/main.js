
// ================================================================
//  TRIPS DATA — Static data for all trips
// ================================================================
const TRIPS_DATA = [
    // ===== EGYPTIAN TRIPS =====
    {
        id: 1,
        title_ar: 'غردقة الساحرة',
        title_en: 'Magical Hurghada',
        country_ar: 'مصر', country_en: 'Egypt', flag: '🇪🇬',
        price: 350, currency: '$',
        duration: 5,
        category: 'beach',
        climate: 'beach',
        travel_type: ['family', 'couple', 'friends'],
        budget_tier: 'low',
        color_from: '#0099CC', color_to: '#FF6633',
        is_egyptian: true,
        spots_total: 20, spots_left: 5,
        desc_ar: 'استمتع بشواطئ الغردقة الرائعة وغوص في أعماق البحر الأحمر، رحلة لا تُنسى بأسعار مناسبة.',
        desc_en: 'Enjoy the stunning beaches of Hurghada and dive into the Red Sea depths — an unforgettable trip at affordable prices.',
        image: 'assets/ghardga.jpg',
    },
    {
        id: 2,
        title_ar: 'شرم الشيخ الأسطوري',
        title_en: 'Legendary Sharm El-Sheikh',
        country_ar: 'مصر', country_en: 'Egypt', flag: '🇪🇬',
        price: 420, currency: '$',
        duration: 6,
        category: 'beach',
        climate: 'beach',
        travel_type: ['couple', 'family', 'friends'],
        budget_tier: 'low',
        color_from: '#00B4D8', color_to: '#F77F00',
        is_egyptian: true,
        spots_total: 18, spots_left: 3,
        desc_ar: 'جنة الشعاب المرجانية وأجمل شواطئ مصر في رحلة مثيرة بين الجبال والبحر.',
        desc_en: 'Paradise of coral reefs and Egypt\'s most beautiful beaches in an exciting journey between mountains and sea.',
        image: 'assets/sharm.jpeg',
    },
    {
        id: 3,
        title_ar: 'الأقصر وأسوان — أرض الفراعنة',
        title_en: 'Luxor & Aswan — Land of Pharaohs',
        country_ar: 'مصر', country_en: 'Egypt', flag: '🇪🇬',
        price: 500, currency: '$',
        duration: 7,
        category: 'culture',
        climate: 'desert',
        travel_type: ['family', 'couple', 'solo'],
        budget_tier: 'medium',
        color_from: '#8B4513', color_to: '#C5A028',
        is_egyptian: true,
        spots_total: 15, spots_left: 9,
        desc_ar: 'رحلة في أعماق التاريخ المصري القديم بين معابد الكرنك وأبو سمبل والمتحف الفرعوني.',
        desc_en: 'A journey into ancient Egyptian history between Karnak temples, Abu Simbel, and the Pharaonic museum.',
        image: 'assets/aswan.jpg',
    },
    // ===== EUROPEAN TRIPS =====
    {
        id: 4,
        title_ar: 'باريس — مدينة الأنوار',
        title_en: 'Paris — City of Lights',
        country_ar: 'فرنسا', country_en: 'France', flag: '🇫🇷',
        price: 1500, currency: '$',
        duration: 7,
        category: 'culture',
        climate: 'city',
        travel_type: ['couple', 'solo'],
        budget_tier: 'high',
        color_from: '#003087', color_to: '#ED2939',
        is_egyptian: false,
        spots_total: 20, spots_left: 12,
        desc_ar: 'استكشف عاصمة الفنون والموضة، من برج إيفل إلى متحف اللوفر في رحلة رومانسية لا مثيل لها.',
        desc_en: 'Explore the capital of arts and fashion, from the Eiffel Tower to the Louvre in an unparalleled romantic journey.',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80&auto=format',
    },
    {
        id: 5,
        title_ar: 'روما — العاصمة الأبدية',
        title_en: 'Rome — The Eternal City',
        country_ar: 'إيطاليا', country_en: 'Italy', flag: '🇮🇹',
        price: 1300, currency: '$',
        duration: 6,
        category: 'culture',
        climate: 'city',
        travel_type: ['couple', 'family', 'solo'],
        budget_tier: 'high',
        color_from: '#009246', color_to: '#CE2B37',
        is_egyptian: false,
        spots_total: 16, spots_left: 7,
        desc_ar: 'تجول في شوارع التاريخ بين الكولوسيوم والفاتيكان وينابيع تريفي في مدينة خالدة.',
        desc_en: 'Walk through streets of history between the Colosseum, Vatican, and Trevi Fountain in an eternal city.',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80&auto=format',
    },
    {
        id: 6,
        title_ar: 'برشلونة — مدينة الفن',
        title_en: 'Barcelona — City of Art',
        country_ar: 'إسبانيا', country_en: 'Spain', flag: '🇪🇸',
        price: 1200, currency: '$',
        duration: 6,
        category: 'adventure',
        climate: 'beach',
        travel_type: ['friends', 'couple', 'solo'],
        budget_tier: 'high',
        color_from: '#AA151B', color_to: '#F1BF00',
        is_egyptian: false,
        spots_total: 20, spots_left: 14,
        desc_ar: 'من معمار غاودي الفريد إلى شواطئ لا باركيتا المذهلة، برشلونة تجمع الفن والمتعة معاً.',
        desc_en: 'From Gaudí\'s unique architecture to the stunning beaches of La Barceloneta, Barcelona combines art and fun.',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80&auto=format',
    },
    // ===== ASIA & MIDDLE EAST =====
    {
        id: 7,
        title_ar: 'دبي — مدينة المستقبل',
        title_en: 'Dubai — City of the Future',
        country_ar: 'الإمارات', country_en: 'UAE', flag: '🇦🇪',
        price: 900, currency: '$',
        duration: 5,
        category: 'adventure',
        climate: 'desert',
        travel_type: ['family', 'couple', 'friends'],
        budget_tier: 'high',
        color_from: '#00732F', color_to: '#C0392B',
        is_egyptian: false,
        spots_total: 25, spots_left: 2,
        desc_ar: 'تسوق في أفخم المراكز التجارية وتزلج على الثلج بينما الصحراء تمتد خارج النافذة.',
        desc_en: 'Shop in the most luxurious malls and ski on snow while the desert stretches outside the window.',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format',
    },
    {
        id: 8,
        title_ar: 'إسطنبول — جسر الحضارات',
        title_en: 'Istanbul — Bridge of Civilizations',
        country_ar: 'تركيا', country_en: 'Turkey', flag: '🇹🇷',
        price: 700, currency: '$',
        duration: 6,
        category: 'culture',
        climate: 'city',
        travel_type: ['family', 'couple', 'friends', 'solo'],
        budget_tier: 'medium',
        color_from: '#E30A17', color_to: '#2E4053',
        is_egyptian: false,
        spots_total: 22, spots_left: 10,
        desc_ar: 'مدينة تجمع بين شرق وغرب، بين آيا صوفيا والبسفور والبازارات الشرقية العريقة.',
        desc_en: 'A city that brings together East and West, between Hagia Sophia, the Bosphorus, and ancient Eastern bazaars.',
        image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&q=80&auto=format',
    },
    {
        id: 9,
        title_ar: 'بالي — جنة الأرض',
        title_en: 'Bali — Heaven on Earth',
        country_ar: 'إندونيسيا', country_en: 'Indonesia', flag: '🇮🇩',
        price: 800, currency: '$',
        duration: 10,
        category: 'beach',
        climate: 'beach',
        travel_type: ['couple', 'friends', 'solo'],
        budget_tier: 'medium',
        color_from: '#FF6B35', color_to: '#1A936F',
        is_egyptian: false,
        spots_total: 18, spots_left: 6,
        desc_ar: 'جزيرة الآلهة ذات المعابد والشلالات والشواطئ البركانية الخلابة وثقافة فريدة من نوعها.',
        desc_en: 'Island of the gods with temples, waterfalls, volcanic beaches, and a unique culture like no other.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format',
    },
    // ===== AMERICAS =====
    {
        id: 10,
        title_ar: 'نيويورك — المدينة التي لا تنام',
        title_en: 'New York — The City That Never Sleeps',
        country_ar: 'أمريكا', country_en: 'USA', flag: '🇺🇸',
        price: 2500, currency: '$',
        duration: 8,
        category: 'adventure',
        climate: 'city',
        travel_type: ['friends', 'couple', 'solo'],
        budget_tier: 'luxury',
        color_from: '#3C3B6E', color_to: '#B22234',
        is_egyptian: false,
        spots_total: 15, spots_left: 8,
        desc_ar: 'تجربة المدينة الأكثر إثارة في العالم، من تايمز سكوير إلى سنترال بارك والمتحف الأمريكي.',
        desc_en: 'Experience the most exciting city in the world, from Times Square to Central Park and the American Museum.',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80&auto=format',
    },
    {
        id: 11,
        title_ar: 'المالديف — المتعة الخالصة',
        title_en: 'Maldives — Pure Paradise',
        country_ar: 'المالديف', country_en: 'Maldives', flag: '🇲🇻',
        price: 3000, currency: '$',
        duration: 7,
        category: 'beach',
        climate: 'beach',
        travel_type: ['couple'],
        budget_tier: 'luxury',
        color_from: '#006994', color_to: '#00C9A7',
        is_egyptian: false,
        spots_total: 10, spots_left: 1,
        desc_ar: 'جزر المحيط الهندي الخيالية مع أكواخ فوق الماء وشعاب مرجانية بلورية وغروب شمس لا يوصف.',
        desc_en: 'Dreamy Indian Ocean islands with overwater bungalows, crystal coral reefs, and indescribable sunsets.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80&auto=format',
    },
    {
        id: 12,
        title_ar: 'طوكيو — عاصمة المستقبل',
        title_en: 'Tokyo — Capital of the Future',
        country_ar: 'اليابان', country_en: 'Japan', flag: '🇯🇵',
        price: 2200, currency: '$',
        duration: 9,
        category: 'culture',
        climate: 'city',
        travel_type: ['solo', 'couple', 'friends'],
        budget_tier: 'luxury',
        color_from: '#BC002D', color_to: '#2C3E50',
        is_egyptian: false,
        spots_total: 20, spots_left: 11,
        desc_ar: 'مزيج مذهل بين التكنولوجيا الحديثة والتراث الياباني الأصيل في مدينة لا تشبه أي مكان آخر.',
        desc_en: 'An amazing blend of modern technology and authentic Japanese heritage in a city unlike anywhere else.',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80&auto=format',
    },
    {
        id: 13,
        title_ar: 'المغرب — مملكة الألوان',
        title_en: 'Morocco — Kingdom of Colors',
        country_ar: 'المغرب', country_en: 'Morocco', flag: '🇲🇦',
        price: 600, currency: '$',
        duration: 7,
        category: 'adventure',
        climate: 'desert',
        travel_type: ['friends', 'family', 'solo'],
        budget_tier: 'medium',
        color_from: '#C1272D', color_to: '#006233',
        is_egyptian: false,
        spots_total: 20, spots_left: 15,
        desc_ar: 'من أزقة مراكش الوردية إلى صحراء الصحراء الكبرى وشاطئ أغادير المدهش، رحلة بألف لون.',
        desc_en: 'From the pink alleys of Marrakech to the Sahara Desert and stunning Agadir beach — a journey of a thousand colors.',
        image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80&auto=format',
    },
    {
        id: 14,
        title_ar: 'جزر اليونان — أجمل شواطئ أوروبا',
        title_en: 'Greek Islands — Europe\'s Most Beautiful Beaches',
        country_ar: 'اليونان', country_en: 'Greece', flag: '🇬🇷',
        price: 1100, currency: '$',
        duration: 8,
        category: 'beach',
        climate: 'beach',
        travel_type: ['couple', 'friends'],
        budget_tier: 'high',
        color_from: '#0D5EAF', color_to: '#FFFFFF',
        is_egyptian: false,
        spots_total: 16, spots_left: 4,
        desc_ar: 'سانتوريني الحالمة وميكونوس الصاخبة وجزر الإيجه الخلابة في رحلة بحرية فريدة.',
        desc_en: 'Dreamy Santorini and vibrant Mykonos and stunning Aegean islands in a unique sea journey.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80&auto=format',
    },
    {
        id: 15,
        title_ar: 'البر السويسري — قلب الألب',
        title_en: 'Switzerland — Heart of the Alps',
        country_ar: 'سويسرا', country_en: 'Switzerland', flag: '🇨🇭',
        price: 2800, currency: '$',
        duration: 8,
        category: 'adventure',
        climate: 'mountain',
        travel_type: ['family', 'couple'],
        budget_tier: 'luxury',
        color_from: '#D52B1E', color_to: '#FFFFFF',
        is_egyptian: false,
        spots_total: 12, spots_left: 5,
        desc_ar: 'تزلج على جبال الألب وتجول في قرى الشوكولاتة وبحيرة جنيف الرائعة في قلب أوروبا.',
        desc_en: 'Ski in the Alps, stroll through chocolate villages, and visit stunning Lake Geneva in the heart of Europe.',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80&auto=format',
    },
    {
        id: 16,
        title_ar: 'البانيا — الكنز الخفي',
        title_en: 'Albania — The Hidden Gem',
        country_ar: 'ألبانيا', country_en: 'Albania', flag: '🇦🇱',
        price: 450, currency: '$',
        duration: 6,
        category: 'beach',
        climate: 'beach',
        travel_type: ['friends', 'solo', 'couple'],
        budget_tier: 'low',
        color_from: '#E41E20', color_to: '#1A3A5C',
        is_egyptian: false,
        spots_total: 25, spots_left: 18,
        desc_ar: 'شواطئ البحر الأدرياتيكي والمتوسط بأسعار لا تُصدق وجمال طبيعي بكر لم يكتشفه الكثيرون.',
        desc_en: 'Adriatic and Mediterranean beaches at unbelievable prices with pristine natural beauty few have discovered.',
        image: 'https://images.unsplash.com/photo-1590432325983-04d7c0f1883f?w=800&q=80&auto=format',
    },
];

// ================================================================
//  State & Language
// ================================================================
let activeLang = 'ar';
let activeCurrency = 'USD';

// Hardcoded Exchange Rates (Static for demo)
const RATES = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    EGP: 50,
    SAR: 3.75,
    AED: 3.67,
    KWD: 0.307,
    QAR: 3.64,
};

const SYMBOLS_AR = { USD:'$', EUR:'€', GBP:'£', EGP:'E£', SAR:'ر.س', AED:'د.إ', KWD:'د.ك', QAR:'ر.ق' };
const SYMBOLS_EN = { USD:'$', EUR:'€', GBP:'£', EGP:'E£', SAR:'SAR ', AED:'AED ', KWD:'KWD ', QAR:'QAR ' };

function getSymbols() {
    return activeLang === 'ar' ? SYMBOLS_AR : SYMBOLS_EN;
}

// Translations for UI text elements
const TEXTS = {
    ar: {
        searchNav: 'بحث الوجهات...',
        navHome: 'الرئيسية',
        navTrips: 'الرحلات',
        navDestinations: 'كل الوجهات',
        navEgypt: 'وجهات مصر',
        navSurvey: 'الاستبيان',
        navCta: 'احجز رحلتك',
        loadMore: 'عرض المزيد',
        loading: 'جاري التحميل...',
        bookNow: 'التفاصيل',
        book: 'احجز',
        from: 'يبدأ من ',
        lastSeats: 'آخر مقاعد!',
        seatsLeft: (n) => `${n} مقعد متاح`,
        noTripsFound: 'لا توجد رحلات متاحة حاليا ستتوفر قريبا',
        noTripsFoundSub: 'نحن نعمل باستمرار على إضافة وجهات وعروض جديدة تناسب تطلعاتك.',
        resetFilters: 'عرض كل الرحلات',
        stat1Label: 'وجهة سياحية',
        stat2Label: 'سنوات خبرة',
        stat3Label: 'عميل سعيد',
        stat4Label: 'دعم متواصل',
        egyptSectionTitle: 'اكتشف جمال مصر',
        egyptSectionSub: 'من شواطئ البحر الأحمر إلى معابد الفراعنة الخالدة',
        tripsSectionTitle: 'استكشف العالم معنا',
        tripsSectionSub: 'أكثر من 50 وجهة سياحية تنتظرك بأفضل الأسعار وأروع التجارب',
        filterAll: 'الكل',
        filterBeach: 'شواطئ',
        filterCulture: 'ثقافة وتاريخ',
        filterAdventure: 'مغامرة',
        surveySectionTitle: 'مش عارف تختار رحلتك؟',
        surveySectionSub: 'أجب على 4 أسئلة بسيطة وسنختار لك أنسب الرحلات والوجهات السياحية بدقة متناهية بناءً على تفضيلاتك الشخصية وميزانيتك.',
        surveyCta: 'ابدأ الاستبيان الآن <i class="fa-solid fa-arrow-left-long"></i>',
        surveyFeature1: 'نتائج فورية',
        surveyFeature2: 'رحلات مخصصة لك',
        surveyFeature3: 'مجاناً تماماً',
        testimonialsTitle: 'ماذا قالوا عنّا',
        testimonialsSub: 'تجارب حقيقية لعملائنا في مختلف وجهات العالم',
        addReviewBtn: '<i class="fa-solid fa-pen-to-square"></i> أضف تقييمك',
        newsletterTitle: 'اشترك في نشرتنا الإخبارية',
        newsletterSub: 'كن أول من يعلم بأحدث العروض الحصرية، التخفيضات الكبرى، والرحلات السياحية المميزة حول العالم.',
        newsletterPlaceholder: 'أدخل بريدك الإلكتروني هنا...',
        newsletterBtn: 'اشترك الآن <i class="fa-solid fa-paper-plane" style="margin-inline-start:0.4rem;"></i>',
        footerDesc: 'نقدم لك أجمل الرحلات والبرامج السياحية حول العالم بأجواء مصرية دافئة وخبرة تزيد على 10 سنوات في صناعة السفر الفاخر.',
        footerLinks: 'روابط سريعة',
        footerDest: 'وجهات شهيرة',
        footerContact: 'تواصل معنا',
        footerAddress: 'القاهرة، مصر',
        footerCopy: '© 2026 EgyptTour (رحلاتي). جميع الحقوق محفوظة.',
        surveyHeaderTitle: 'استبيان رحلاتي الفاخر',
        surveyHeaderSub: 'صمم رحلتك المثالية في ثوانٍ',
        step1Title: 'أولاً — بياناتك الشخصية',
        step1Sub: 'حتى نتواصل معك بنتائجك فوراً',
        labelName: '<i class="fa-solid fa-user" style="color:var(--color-primary);"></i> الاسم الكريم',
        labelEmail: '<i class="fa-solid fa-envelope" style="color:var(--color-primary);"></i> البريد الإلكتروني',
        placeholderName: 'مثال: أحمد محمود',
        placeholderEmail: 'example@email.com',
        step2Title: 'ثانياً — نوع رحلتك',
        step2Sub: 'من سيكون رفيق دربك في هذه المغامرة؟',
        optFamily: 'عائلة',
        optCouple: 'شريك',
        optSolo: 'منفرداً',
        optFriends: 'أصدقاء',
        step3Title: 'ثالثاً — تفضيلاتك',
        step3Sub: 'كيف تحب أن تقضي وقتك، وما هي ميزانيتك؟',
        labelClimate: '<i class="fa-solid fa-cloud-sun" style="color:var(--color-primary);"></i> المناخ المفضل',
        optBeach: 'شاطئ وبحر',
        optDesert: 'صحراء وتاريخ',
        optMountain: 'جبال وطبيعة',
        optCity: 'مدن ومعالم',
        labelBudget: '<i class="fa-solid fa-wallet" style="color:var(--color-primary);"></i> الميزانية المتاحة (للشخص الواحد)',
        budLow: '<input type="radio" name="budget" value="low" style="transform:scale(1.2); accent-color:var(--color-primary);"> اقتصادي (أقل من $500)',
        budMed: '<input type="radio" name="budget" value="medium" style="transform:scale(1.2); accent-color:var(--color-primary);"> متوسط ($500 - $1500)',
        budHigh: '<input type="radio" name="budget" value="high" style="transform:scale(1.2); accent-color:var(--color-primary);"> مرتفع ($1500 - $3000)',
        budLux: '<input type="radio" name="budget" value="luxury" style="transform:scale(1.2); accent-color:var(--color-primary);"> فاخر (أكثر من $3000)',
        step4Title: 'رابعاً — اكتشف رحلتك',
        step4Sub: 'مرحباً بك في عالم رحلاتي الفاخر.',
        summaryTitle: '<i class="fa-solid fa-clipboard-list"></i> ملخص إجاباتك',
        btnBack: '<i class="fa-solid fa-arrow-right" style="margin-inline-end:0.4rem;"></i> رجوع',
        btnNext: 'التالي <i class="fa-solid fa-arrow-left" style="margin-inline-start:0.4rem;"></i>',
        badgeMatch: '<i class="fa-solid fa-wand-magic-sparkles"></i> <span>مطابقة لتفضيلاتك</span>',
        resultsTitle: 'رحلاتك المقترحة!',
        resultsSub: 'بناءً على إجاباتك، اخترنا لك هذه الرحلات المثالية لقضاء عطلة لا تُنسى',
        noMatchTitle: 'لا توجد رحلات مطابقة تماماً',
        noMatchSub: 'إليك أفضل رحلاتنا المقترحة والشهيرة',
        btnRestart: '<i class="fa-solid fa-rotate-right"></i> <span>أعد الاستبيان</span>',
        tripAdventureTitle: 'اكتشف المغامرة',
        tripIncludeTitle: 'ماذا تشمل الرحلة؟',
        incFlight: 'تذاكر الطيران ذهاب وعودة',
        incHotel: 'إقامة فندقية فاخرة بالإفطار',
        incTransfer: 'انتقالات خاصة من وإلى المطار',
        incGuide: 'مرشد سياحي ممتاز يتحدث العربية',
        priceStarts: 'سعر الشخص الواحد يبدأ من',
        labelFullName: 'الاسم بالكامل',
        placeholderFullName: 'مثال: أحمد محمود',
        labelPhone: 'رقم الهاتف (للتواصل الفوري)',
        placeholderPhone: '+20 123 456 7890',
        labelTravelers: 'عدد المسافرين',
        opt1: '1 مسافر',
        opt2: '2 مسافرين',
        opt3: '3 مسافرين',
        opt4: '4 مسافرين',
        opt5: '5 مسافرين (عائلة)',
        totalRequired: 'الإجمالي المطلوب:',
        btnConfirmBooking: 'تأكيد الحجز الآن <i class="fa-solid fa-check" style="margin-inline-start:0.4rem;"></i>',
        loadingTripDetails: 'جاري تحميل تفاصيل الرحلة...',
        successTitle: 'تم استلام طلبك بنجاح!',
        successSub: 'شكراً لاختيارك رحلاتي. سيتواصل معك فريقنا في غضون 24 ساعة لتأكيد الحجز والدفع.',
        btnReturnHome: 'العودة للرئيسية',
        btnShowTrips: '<i class="fa-solid fa-wand-magic-sparkles" style="margin-inline-end:0.4rem;"></i> اعرض رحلاتي',
        stepOf: (c, t) => `خطوة ${c} من ${t}`,
        summaryName: 'الاسم الكريم:',
        summaryTravel: 'نوع الرحلة:',
        summaryBudget: 'الميزانية المتاحة:',
        summaryClimate: 'المناخ المفضل:',
        resultsTitleName: (name) => `رحلاتك المقترحة يا ${name}! <i class="fa-solid fa-wand-magic-sparkles" style="color:var(--color-primary);"></i>`,
        heroTitle: 'اكتشف <span style="color: var(--color-primary);">سحر السفر</span> برفاهية',
        heroSub: 'نأخذك في رحلات حصرية مصممة خصيصاً لتناسب ذوقك الرفيع. أكثر من 50 وجهة وتجربة استثنائية بانتظارك.',
        heroBtn1: 'استعرض الرحلات',
        heroBtn2: 'صمم رحلتك (استبيان)',
        filterDestLabel: '<i class="fa-solid fa-location-dot" style="color:var(--color-primary);"></i> الوجهة',
        filterDestAll: 'كل الوجهات',
        filterDestEgypt: 'وجهات مصر',
        filterDestWorld: 'وجهات دولية',
        filterDurLabel: '<i class="fa-solid fa-calendar-days" style="color:var(--color-primary);"></i> المدة',
        filterDurAll: 'أي مدة',
        filterDurShort: '1 - 4 أيام',
        filterDurLong: '5 أيام فأكثر',
        filterBudLabel: '<i class="fa-solid fa-wallet" style="color:var(--color-primary);"></i> الميزانية',
        filterBudAll: 'كل الفئات',
        filterBudLow: 'اقتصادي',
        filterBudHigh: 'فاخر المميز',
        filterSearchBtn: '<i class="fa-solid fa-magnifying-glass"></i> بحث الرحلات',
        sharmTitle: 'شرم الشيخ الأسطوري',
        sharmSub: 'جنة الشعاب المرجانية وأجمل الشواطئ والمنتجعات الفاخرة',
        ghardgaTitle: 'الغردقة الساحرة',
        ghardgaSub: 'استمتع بأجمل الشواطئ والمياه الصافية والمنتجعات الفاخرة',
        aswanTitle: 'الأقصر وأسوان',
        aswanSub: 'رحلة عبر الزمن في أعظم متاحف العالم المفتوحة',
        exploreTrips: 'استكشف الرحلات <i class="fa-solid fa-arrow-left"></i>',
        destHurghada: 'الغردقة',
        destSharm: 'شرم الشيخ',
        destParis: 'باريس',
        destIstanbul: 'إسطنبول',
        destDubai: 'دبي',
        footerMadeIn: 'صُنع بفخر في مصر'
    },
    en: {
        searchNav: 'Search destinations...',
        navHome: 'Home',
        navTrips: 'Trips',
        navDestinations: 'All Destinations',
        navEgypt: 'Egypt Destinations',
        navSurvey: 'Survey',
        navCta: 'Book Your Trip',
        loadMore: 'Show More',
        loading: 'Loading...',
        bookNow: 'Details',
        book: 'Book',
        from: 'From ',
        lastSeats: 'Last seats!',
        seatsLeft: (n) => `${n} seats left`,
        noTripsFound: 'No trips available currently, coming soon',
        noTripsFoundSub: 'We are constantly working on adding new destinations and offers to match your expectations.',
        resetFilters: 'Show All Trips',
        stat1Label: 'Destinations',
        stat2Label: 'Years Experience',
        stat3Label: 'Happy Clients',
        stat4Label: '24/7 Support',
        egyptSectionTitle: 'Discover the Beauty of Egypt',
        egyptSectionSub: 'From the Red Sea beaches to the immortal Pharaonic temples',
        tripsSectionTitle: 'Explore the World With Us',
        tripsSectionSub: 'Over 50 destinations await you with the best prices and amazing experiences',
        filterAll: 'All',
        filterBeach: 'Beaches',
        filterCulture: 'Culture & History',
        filterAdventure: 'Adventure',
        surveySectionTitle: 'Unsure Which Trip to Choose?',
        surveySectionSub: 'Answer 4 simple questions and we will select the perfect trips and destinations tailored to your preferences and budget.',
        surveyCta: 'Start Survey Now <i class="fa-solid fa-arrow-right-long"></i>',
        surveyFeature1: 'Instant Results',
        surveyFeature2: 'Tailored Trips',
        surveyFeature3: '100% Free',
        testimonialsTitle: 'What They Say About Us',
        testimonialsSub: 'Real experiences from our clients across worldwide destinations',
        addReviewBtn: '<i class="fa-solid fa-pen-to-square"></i> Add Review',
        newsletterTitle: 'Subscribe to Our Newsletter',
        newsletterSub: 'Be the first to know about exclusive offers, major discounts, and premium worldwide trips.',
        newsletterPlaceholder: 'Enter your email address here...',
        newsletterBtn: 'Subscribe Now <i class="fa-solid fa-paper-plane" style="margin-inline-start:0.4rem;"></i>',
        footerDesc: 'We offer the most beautiful trips and tourism programs worldwide with a warm Egyptian atmosphere and over 10 years of luxury travel experience.',
        footerLinks: 'Quick Links',
        footerDest: 'Popular Destinations',
        footerContact: 'Contact Us',
        footerAddress: 'Cairo, Egypt',
        footerCopy: '© 2026 EgyptTour (Rahalaty). All rights reserved.',
        surveyHeaderTitle: 'Luxury Survey',
        surveyHeaderSub: 'Design your perfect trip in seconds',
        step1Title: 'Step 1 — Personal Details',
        step1Sub: 'So we can reach you with your results instantly',
        labelName: '<i class="fa-solid fa-user" style="color:var(--color-primary);"></i> Full Name',
        labelEmail: '<i class="fa-solid fa-envelope" style="color:var(--color-primary);"></i> Email Address',
        placeholderName: 'e.g. John Doe',
        placeholderEmail: 'example@email.com',
        step2Title: 'Step 2 — Travel Type',
        step2Sub: 'Who will be your companion on this adventure?',
        optFamily: 'Family',
        optCouple: 'Couple',
        optSolo: 'Solo',
        optFriends: 'Friends',
        step3Title: 'Step 3 — Preferences',
        step3Sub: 'How do you like to spend your time, and what is your budget?',
        labelClimate: '<i class="fa-solid fa-cloud-sun" style="color:var(--color-primary);"></i> Preferred Climate',
        optBeach: 'Beach & Sea',
        optDesert: 'Desert & History',
        optMountain: 'Mountains & Nature',
        optCity: 'Cities & Landmarks',
        labelBudget: '<i class="fa-solid fa-wallet" style="color:var(--color-primary);"></i> Available Budget (Per Person)',
        budLow: '<input type="radio" name="budget" value="low" style="transform:scale(1.2); accent-color:var(--color-primary);"> Budget (Under $500)',
        budMed: '<input type="radio" name="budget" value="medium" style="transform:scale(1.2); accent-color:var(--color-primary);"> Medium ($500 - $1500)',
        budHigh: '<input type="radio" name="budget" value="high" style="transform:scale(1.2); accent-color:var(--color-primary);"> High ($1500 - $3000)',
        budLux: '<input type="radio" name="budget" value="luxury" style="transform:scale(1.2); accent-color:var(--color-primary);"> Luxury (Over $3000)',
        step4Title: 'Step 4 — Discover Your Trip',
        step4Sub: 'Welcome to the world of luxury travel.',
        summaryTitle: '<i class="fa-solid fa-clipboard-list"></i> Your Answers Summary',
        btnBack: '<i class="fa-solid fa-arrow-left" style="margin-inline-end:0.4rem;"></i> Back',
        btnNext: 'Next <i class="fa-solid fa-arrow-right" style="margin-inline-start:0.4rem;"></i>',
        badgeMatch: '<i class="fa-solid fa-wand-magic-sparkles"></i> <span>Matched to your preferences</span>',
        resultsTitle: 'Your Suggested Trips!',
        resultsSub: 'Based on your answers, we selected these perfect trips for an unforgettable holiday',
        noMatchTitle: 'No exact matching trips',
        noMatchSub: 'Here are our best suggested and popular trips',
        btnRestart: '<i class="fa-solid fa-rotate-left"></i> <span>Retake Survey</span>',
        tripAdventureTitle: 'Discover the Adventure',
        tripIncludeTitle: 'What is Included?',
        incFlight: 'Roundtrip flight tickets',
        incHotel: 'Luxury hotel stay with breakfast',
        incTransfer: 'Private airport transfers',
        incGuide: 'Excellent tour guide speaking Arabic/English',
        priceStarts: 'Price per person starts from',
        labelFullName: 'Full Name',
        placeholderFullName: 'e.g. John Doe',
        labelPhone: 'Phone Number (For instant contact)',
        placeholderPhone: '+1 234 567 8900',
        labelTravelers: 'Number of Travelers',
        opt1: '1 Traveler',
        opt2: '2 Travelers',
        opt3: '3 Travelers',
        opt4: '4 Travelers',
        opt5: '5 Travelers (Family)',
        totalRequired: 'Total Required:',
        btnConfirmBooking: 'Confirm Booking Now <i class="fa-solid fa-check" style="margin-inline-start:0.4rem;"></i>',
        loadingTripDetails: 'Loading trip details...',
        successTitle: 'Booking Received Successfully!',
        successSub: 'Thank you for choosing Rahalaty. Our team will contact you within 24 hours to confirm your booking and payment.',
        btnReturnHome: 'Return to Home',
        btnShowTrips: '<i class="fa-solid fa-wand-magic-sparkles" style="margin-inline-end:0.4rem;"></i> Show My Trips',
        stepOf: (c, t) => `Step ${c} of ${t}`,
        summaryName: 'Full Name:',
        summaryTravel: 'Travel Type:',
        summaryBudget: 'Available Budget:',
        summaryClimate: 'Preferred Climate:',
        resultsTitleName: (name) => `Your Suggested Trips, ${name}! <i class="fa-solid fa-wand-magic-sparkles" style="color:var(--color-primary);"></i>`,
        heroTitle: 'Discover <span style="color: var(--color-primary);">the Magic of Travel</span> in Luxury',
        heroSub: 'We take you on exclusive trips tailored to your refined taste. Over 50 destinations and exceptional experiences await you.',
        heroBtn1: 'Explore Trips',
        heroBtn2: 'Plan Your Trip (Survey)',
        filterDestLabel: '<i class="fa-solid fa-location-dot" style="color:var(--color-primary);"></i> Destination',
        filterDestAll: 'All Destinations',
        filterDestEgypt: 'Egypt Destinations',
        filterDestWorld: 'International Destinations',
        filterDurLabel: '<i class="fa-solid fa-calendar-days" style="color:var(--color-primary);"></i> Duration',
        filterDurAll: 'Any Duration',
        filterDurShort: '1 - 4 Days',
        filterDurLong: '5+ Days',
        filterBudLabel: '<i class="fa-solid fa-wallet" style="color:var(--color-primary);"></i> Budget',
        filterBudAll: 'All Tiers',
        filterBudLow: 'Budget',
        filterBudHigh: 'Luxury',
        filterSearchBtn: '<i class="fa-solid fa-magnifying-glass"></i> Search Trips',
        sharmTitle: 'Legendary Sharm El-Sheikh',
        sharmSub: 'Paradise of coral reefs, beautiful beaches, and luxury resorts',
        ghardgaTitle: 'Charming Hurghada',
        ghardgaSub: 'Enjoy the most beautiful beaches, crystal clear waters, and luxury resorts',
        aswanTitle: 'Luxor & Aswan',
        aswanSub: 'A journey through time in the world\'s greatest open-air museums',
        exploreTrips: 'Explore Trips <i class="fa-solid fa-arrow-right"></i>',
        destHurghada: 'Hurghada',
        destSharm: 'Sharm El-Sheikh',
        destParis: 'Paris',
        destIstanbul: 'Istanbul',
        destDubai: 'Dubai',
        footerMadeIn: 'Proudly Made in Egypt'
    }
};

// ================================================================
//  Currency Logic
// ================================================================
function toggleCurrencyMenu() {
    const menu = document.getElementById('currencyMenu');
    if (menu) {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
}

function selectCurrency(code) {
    activeCurrency = code;
    localStorage.setItem('site_currency', code);
    
    const btnLabel = document.getElementById('currencyBtnLabel');
    if(btnLabel) btnLabel.textContent = code;
    
    const menu = document.getElementById('currencyMenu');
    if(menu) menu.style.display = 'none';
    
    // Highlight active in menu
    document.querySelectorAll('[data-currency]').forEach(btn => {
        btn.style.color = btn.dataset.currency === code ? '#F0D060' : '#C8D4E0';
        btn.style.fontWeight = btn.dataset.currency === code ? '800' : 'normal';
    });
    
    convertAllPrices();
}

function convertAllPrices() {
    const rate = RATES[activeCurrency] || 1;
    const symbolObj = getSymbols();
    const symbol = symbolObj[activeCurrency] || activeCurrency;
    
    document.querySelectorAll('[data-price-usd]').forEach(el => {
        const usd = parseFloat(el.dataset.priceUsd);
        const converted = (usd * rate).toLocaleString(undefined, { maximumFractionDigits: 0 });
        el.textContent = symbol + converted;
    });
}

// Close currency menu on outside click
document.addEventListener('click', function(e) {
    const widget = document.getElementById('currencyWidget');
    const menu = document.getElementById('currencyMenu');
    if (widget && !widget.contains(e.target) && menu) {
        menu.style.display = 'none';
    }
});

// ================================================================
//  Trips Rendering Logic
// ================================================================
const INITIAL_COUNT = 8;
const STEP_COUNT    = 4;
let visibleCount    = INITIAL_COUNT;
let activeCategory  = 'all';
let currentFilterFn = null;

function filterByCategory(category) {
    let base = TRIPS_DATA;
    if (category !== 'all') {
        base = base.filter(t => t.category === category);
    }
    if (currentFilterFn) {
        base = base.filter(currentFilterFn);
    }
    return base;
}

function applyHeroFilter() {
    const dest = document.getElementById('heroDestFilter')?.value || 'all';
    const duration = document.getElementById('heroDurationFilter')?.value || 'all';
    const budget = document.getElementById('heroBudgetFilter')?.value || 'all';

    currentFilterFn = (trip) => {
        if (dest === 'egypt' && !trip.is_egyptian) return false;
        if (dest === 'world' && trip.is_egyptian) return false;
        
        if (duration === 'short' && trip.duration > 4) return false;
        if (duration === 'long' && trip.duration <= 4) return false;

        if (budget === 'budget' && trip.budget_tier === 'high') return false;
        if (budget === 'luxury' && trip.budget_tier === 'low') return false;

        return true;
    };

    activeCategory = 'all';
    visibleCount = INITIAL_COUNT;
    renderVisibleTrips();

    const tripsSection = document.getElementById('world-trips');
    if (tripsSection) {
        tripsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function renderVisibleTrips() {
    const container = document.getElementById('tripsGrid');
    if (!container) return;
    
    const all = filterByCategory(activeCategory);
    const visible = all.slice(0, visibleCount);
    
    if (all.length === 0) {
        const title = TEXTS[activeLang].noTripsFound;
        const sub = TEXTS[activeLang].noTripsFoundSub;
        const reset = TEXTS[activeLang].resetFilters;
        
        container.innerHTML = `
        <div class="fade-up visible" style="grid-column: 1 / -1; text-align: center; padding: 5rem 2rem; background: var(--color-surface); border-radius: 24px; border: 1px solid rgba(255,87,34,0.2); box-shadow: 0 15px 40px rgba(0,0,0,0.08);">
            <div style="font-size: 4rem; color: var(--color-primary); margin-bottom: 1.5rem; animation: float 3s ease-in-out infinite;">
                <i class="fa-solid fa-plane-slash"></i>
            </div>
            <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--color-primary-dark); margin-bottom: 0.8rem; font-family: var(--font-ar-display);">
                ${title}
            </h3>
            <p style="color: var(--color-text-muted); font-size: 1.1rem; max-width: 550px; margin: 0 auto 2.5rem; line-height: 1.6;">
                ${sub}
            </p>
            <button onclick="renderCurrentTrips('all')" class="btn-primary" style="padding: 0.8rem 2.5rem; border-radius: 14px; font-weight: 700; font-size: 1.05rem; display: inline-flex; align-items: center; gap: 0.6rem; box-shadow: 0 8px 25px rgba(255,87,34,0.25);">
                <i class="fa-solid fa-rotate-left"></i>
                <span>${reset}</span>
            </button>
        </div>`;
        
        observeFadeUpElements();
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }
    
    container.innerHTML = visible.map((trip, index) => {
        const title     = activeLang === 'ar' ? trip.title_ar     : trip.title_en;
        const country   = activeLang === 'ar' ? trip.country_ar   : trip.country_en;
        const desc      = activeLang === 'ar' ? trip.desc_ar      : trip.desc_en;
        const duration  = activeLang === 'ar' ? `${trip.duration} أيام` : `${trip.duration} days`;
        
        const bookLabel = TEXTS[activeLang].bookNow;
        const bookBtn   = TEXTS[activeLang].book;
        const fromLabel = TEXTS[activeLang].from;
        
        const spotsLeft  = trip.spots_left ?? 10;
        const spotsTotal = trip.spots_total ?? 20;
        const spotsUrgent = spotsLeft <= 3;
        const spotsColor  = spotsUrgent ? '#C0392B' : spotsLeft <= 7 ? '#E67E22' : '#1A936F';
        const spotsLabel  = TEXTS[activeLang].seatsLeft(spotsLeft);
        
        const thumbStyle = `background:url(${trip.image}) center/cover no-repeat;`;

        return `
        <div class="trip-card fade-up" data-category="${trip.category}" data-id="${trip.id}">
            <div class="trip-card-thumb" style="${thumbStyle}"></div>
            <span class="trip-card-price" data-price-usd="${trip.price}">${trip.currency}${trip.price}</span>
            <div class="trip-card-body">
                <h3 class="trip-card-title">${title}</h3>
                <div class="trip-card-meta">
                    <span><i class="fa-solid fa-location-dot" style="color:var(--color-accent);"></i> ${country}</span>
                    <span><i class="fa-regular fa-clock" style="color:var(--color-accent);"></i> ${duration}</span>
                    <span><i class="fa-solid fa-user-group" style="color:var(--color-accent);"></i> ${spotsLabel}</span>
                </div>
            </div>
            <div class="trip-card-footer">
                <a href="trip.html?id=${trip.id}" class="btn-primary" style="display:block; text-align:center;">
                    ${bookBtn} ←
                </a>
            </div>
        </div>`;
    }).join('');

    // Re-observe newly added fade-up elements
    observeFadeUpElements();
    convertAllPrices();

    const remaining = all.length - visibleCount;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (remaining > 0) {
            document.getElementById('loadMoreLabel').textContent = TEXTS[activeLang].loadMore;
            loadMoreBtn.style.display = 'inline-flex';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
}

function loadMoreTrips() {
    visibleCount += STEP_COUNT;
    renderVisibleTrips();
}

function renderCurrentTrips(category = 'all') {
    currentFilterFn = null;
    activeCategory = category;
    visibleCount   = INITIAL_COUNT;
    renderVisibleTrips();
}

// ================================================================
//  UI Interactions & Animations
// ================================================================
function observeFadeUpElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { 
            if (e.isIntersecting) { 
                e.target.classList.add('visible'); 
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

function generateHeroStars() {
    const container = document.getElementById('heroStars');
    if (!container) return;
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1;
        star.style.cssText = `
            width:${size}px; height:${size}px;
            top:${Math.random() * 70}%;
            left:${Math.random() * 100}%;
            animation-delay:${Math.random() * 4}s;
            animation-duration:${2 + Math.random() * 3}s;
        `;
        container.appendChild(star);
    }
}

function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.counter);
            const suffix = el.dataset.suffix || '';
            if (!target) return;
            let current = 0;
            const step = Math.ceil(target / 60);
            const timer = setInterval(() => {
                current = Math.min(current + step, target);
                el.textContent = current.toLocaleString() + suffix;
                if (current >= target) clearInterval(timer);
            }, 25);
            observer.unobserve(el);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if(nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

// Mobile menu toggle logic
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.style.display === 'block';
            mobileMenu.style.display = isOpen ? 'none' : 'block';
        });
    }
}

function switchLanguage(targetLang) {
    if (targetLang && (targetLang === 'ar' || targetLang === 'en')) {
        activeLang = targetLang;
    } else {
        activeLang = activeLang === 'ar' ? 'en' : 'ar';
    }
    localStorage.setItem('site_lang', activeLang);
    document.documentElement.lang = activeLang;
    document.documentElement.dir = activeLang === 'ar' ? 'rtl' : 'ltr';
    const langLabel = document.getElementById('langBtnLabel');
    if (langLabel) langLabel.textContent = activeLang === 'ar' ? 'EN' : 'عربي';
    
    // Convert translations manually for a purely static site
    const tNodes = document.querySelectorAll('[data-i18n]');
    tNodes.forEach(node => {
        const key = node.getAttribute('data-i18n');
        if (TEXTS[activeLang] && TEXTS[activeLang][key]) {
            if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
                node.placeholder = TEXTS[activeLang][key];
            } else {
                node.innerHTML = TEXTS[activeLang][key];
            }
        }
    });

    document.querySelectorAll('.offer-text').forEach(el => {
        const txt = el.getAttribute(`data-${activeLang}`);
        if (txt) el.innerHTML = txt;
    });

    renderVisibleTrips();
    if (typeof window.updateSurveyUI === 'function') {
        window.updateSurveyUI();
    }
    if (typeof window.loadTripData === 'function' && typeof currentTrip !== 'undefined' && currentTrip) {
        window.loadTripData(currentTrip.id);
    }
    convertAllPrices();

    document.querySelectorAll('img[alt="EgyptTour Logo"]').forEach(img => {
        img.src = activeLang === 'ar' ? 'assets/logo.png' : 'assets/logo_en.png';
    });
}

// Newsletter
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email || !email.includes('@')) {
        alert(activeLang === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address');
        return;
    }
    document.getElementById('newsletterForm').style.display = 'none';
    document.getElementById('newsletterSuccess').style.display = 'block';
}

// Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize language
    const storedLang = localStorage.getItem('site_lang');
    if (storedLang && (storedLang === 'ar' || storedLang === 'en')) {
        switchLanguage(storedLang);
    } else {
        switchLanguage('ar');
    }

    // Initialize currency
    const storedCurrency = localStorage.getItem('site_currency');
    if(storedCurrency) {
        activeCurrency = storedCurrency;
    }
    const btnLabel = document.getElementById('currencyBtnLabel');
    if(btnLabel) btnLabel.textContent = activeCurrency;
    
    // Set up tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCurrentTrips(tab.dataset.category);
        });
    });

    generateHeroStars();
    initCounters();
    initMobileMenu();
    observeFadeUpElements();
    
    // Render initial trips
    renderCurrentTrips('all');
});

// Expose globals for onclick handlers
window.toggleCurrencyMenu = toggleCurrencyMenu;
window.selectCurrency = selectCurrency;
window.switchLanguage = switchLanguage;
window.subscribeNewsletter = subscribeNewsletter;
window.loadMoreTrips = loadMoreTrips;
