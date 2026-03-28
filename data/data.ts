// הגדרת הטיפוס (Type) כדי שה-TypeScript לא יצעק עלינו
export interface Station {
    id: number;
    name: string;
    namePersian: string;
    image: string;
    totalQuestions: number;
    completedQuestions: number;
    status: 'locked' | 'active' | 'completed';
}

export interface Station {
    id: number;
    name: string;
    namePersian: string;
    image: string;
    totalQuestions: number;
    completedQuestions: number;
    status: 'locked' | 'active' | 'completed';
}

const rawStations = [

    // --- שיראז וסביבתה ---
    { id: 10, name: "גן אראם", namePersian: "باغ ارم", image: "/imgs/stations/eram-garden.jpg" },
    { id: 9, name: "מסגד נסיר אל-מולכ", namePersian: "مسجد نصیرالملک", image: "/imgs/stations/pink-mosque.jpg" },
    { id: 8, name: "קבר חאפז", namePersian: "حافظیه", image: "/imgs/stations/hafez.png" },
    { id: 7, name: "פרספוליס", namePersian: "تخت جمשید", image: "/imgs/stations/paras.jpg" },
    { id: 11, name: "פאסארגאדה (קבר כורש)", namePersian: "پاسارگاد", image: "/imgs/stations/cyrus.png" },
    { id: 12, name: "שוק וקיל", namePersian: "بازار وکیل", image: "/imgs/stations/vakil-bazaar.png" },

    // --- טהראן (הבירה) ---
    { id: 13, name: "ארמון גולסתאן", namePersian: "کاخ گلستان", image: "/imgs/stations/golestan.png" },
    { id: 14, name: "מגדל אזאדי", namePersian: "برج آزادی", image: "/imgs/stations/azadi.png" },
    { id: 15, name: "בית הכנסת אברישמי", namePersian: "کنیسه ابریشمی", image: "/imgs/stations/abrishami.png" },
    { id: 16, name: "מגדל מילאד", namePersian: "برج میلاد", image: "/imgs/stations/milad.png" },
    { id: 17, name: "מוזיאון התכשיטים הלאומי", namePersian: "موزه جواهرات ملی", image: "/imgs/stations/jewelry.png" },
    { id: 18, name: "מתחם דארבנד", namePersian: "دربند", image: "/imgs/stations/darband.png" },

    // --- המדאן (מורשת יהודית) ---
    { id: 19, name: "קבר אסתר ומרדכי", namePersian: "آرامگاه استر و مردخای", image: "/imgs/stations/esther.png" },
    { id: 20, name: "מערת עלי-סדר", namePersian: "غار علی‌صدر", image: "/imgs/stations/ali-sadr.png" },
    { id: 21, name: "כתובות גנג'נאמה", namePersian: "گنج‌نامه", image: "/imgs/stations/ganjnameh.png" },

    // --- יזד (עיר המדבר) ---
    { id: 22, name: "העיר העתיקה יזד", namePersian: "بافت تاریخی یزد", image: "/imgs/stations/yazd-old.png" },
    { id: 23, name: "מגדלי השתיקה", namePersian: "دخمه زرتشتیان", image: "/imgs/stations/silence.png" },
    { id: 24, name: "מקדש האש צ'ק-צ'ק", namePersian: "چک چک", image: "/imgs/stations/chak-chak.png" },

    // --- טבע והרים ---
    { id: 25, name: "הר דמאוונד", namePersian: "کوه دماوند", image: "/imgs/stations/damavand.png" },
    { id: 26, name: "מדבר לוט (קלוטס)", namePersian: "دشت لوت", image: "/imgs/stations/lut.png" },
    { id: 27, name: "טרסות באדאב-י סורת", namePersian: "باداب سورت", image: "/imgs/stations/badab.png" },
    { id: 28, name: "האי קיש", namePersian: "جزیره کیش", image: "/imgs/stations/kish.png" },
    { id: 29, name: "האי הורמוז (החוף האדום)", namePersian: "جزیره هرمز", image: "/imgs/stations/hormuz.png" },
    { id: 30, name: "עמק הכוכבים (קשם)", namePersian: "دره ستاره‌ها", image: "/imgs/stations/stars-valley.png" },
    { id: 31, name: "אגם אורמיה", namePersian: "دریاچه ارومیه", image: "/imgs/stations/urmia-lake.png" },

    // --- כפרים ואתרים עתיקים ---
    { id: 32, name: "הכפר האדום אביאנה", namePersian: "ابیانه", image: "/imgs/stations/abyaneh.png" },
    { id: 33, name: "כפר הסלע כנדובאן", namePersian: "کندوان", image: "/imgs/stations/kandovan.png" },
    { id: 34, name: "הכפר התלוי מאסולה", namePersian: "ماسوله", image: "/imgs/stations/masuleh.png" },
    { id: 35, name: "מצודת אלמות", namePersian: "قلعه الموت", image: "/imgs/stations/alamut.png" },
    { id: 36, name: "ארג-י באם (מצודת באם)", namePersian: "ارگ بم", image: "/imgs/stations/bam.png" },
    { id: 37, name: "מערכת המים של שושתר", namePersian: "سازه‌های آبی شوشتر", image: "/imgs/stations/shushtar.png" },
    { id: 38, name: "זיגוראת צ'וגה זנביל", namePersian: "چغازنبیل", image: "/imgs/stations/ziggurat.png" },
    { id: 39, name: "כיפת סולטאנייה", namePersian: "گنبد سلطانیه", image: "/imgs/stations/soltaniyeh.png" },
    { id: 40, name: "ביסותון", namePersian: "بیستون", image: "/imgs/stations/bisotun.png" },

    // --- כרמאן, כאשאן וצפון ---
    { id: 41, name: "גן פין (כאשאן)", namePersian: "باغ فین", image: "/imgs/stations/fin-garden.png" },
    { id: 42, name: "בתי כאשאן העתיקים", namePersian: "خانه طباطبایی‌ها", image: "/imgs/stations/kashan-houses.png" },
    { id: 43, name: "מתחם גנג'-עלי ח'אן", namePersian: "مجموعه گنج‌علی خان", image: "/imgs/stations/ganjali.png" },
    { id: 44, name: "ג'ולפה (הרובע הארמני)", namePersian: "جلفای تبریز", image: "/imgs/stations/jolfa.png" },
    { id: 45, name: "קבר אבן סינא", namePersian: "آرامگاه بوعلی‌سینا", image: "/imgs/stations/avicenna.png" },
    { id: 46, name: "שוק תבריז", namePersian: "بازار تبریز", image: "/imgs/stations/tabriz-bazaar.png" },
    { id: 47, name: "היערות ההירקאניים", namePersian: "جنگل‌های هیرکانی", image: "/imgs/stations/hyrcanian.png" },
    { id: 48, name: "מקדש אנהיטה", namePersian: "معبد آناهیتا", image: "/imgs/stations/anahita.png" },
    { id: 49, name: "תח'ת-י סוליימאן", namePersian: "تخت سلیمان", image: "/imgs/stations/solomon-throne.png" },
    { id: 50, name: "נמל אנזלי", namePersian: "بندر انزلی", image: "/imgs/stations/anzali.png" },



    { id: 6, name: "גשר חאג'ו", namePersian: "پل خواجو", image: "/imgs/stations/khaju.jpg" },
    { id: 2, name: "גשר סי-או-סה פול", namePersian: "سی‌وسه‌پل", image: "/imgs/stations/siosepol.jpeg" },
    { id: 4, name: "ארמון צ'הל סותון", namePersian: "چهل‌ستون", image: "/imgs/stations/chehel-sotoun.jpg" },
    { id: 5, name: "הרובע היהודי (ג'ויבארה)", namePersian: "محله جویباره", image: "/imgs/stations/jouybareh.jpg" },
    { id: 1, name: "כיכר נקש-י ג'האן", namePersian: "میدان نقش جهان", image: "/imgs/stations/isfahan.png" },
    { id: 3, name: "בית הכנסת מולא נהוראי", namePersian: "کنیسه ملا نهورای", image: "/imgs/stations/mulla-nehoray.jpg" },

];

const stations: Station[] = rawStations.map((s, index) => ({
    ...s,
    totalQuestions: 20,
    completedQuestions: index === 0 ? 20 : (index === 1 ? 8 : 0),
    status: index === 0 ? "completed" : (index === 1 ? "active" : "locked"),
}));

export default stations;



