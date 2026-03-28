
export const toPersianDigits = (num: number | string): string => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num
        .toString()
        .replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};


export const getPersianGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = ראשון, 5 = שישי, 6 = שבת

    // בדיקת שבת (משישי בערב עד שבת בערב)
    if ((day === 5 && hour >= 16) || (day === 6 && hour <= 19)) {
        return "شبات شالوم"; // בפרסית אומרים אותו דבר או "שבת בח'יר"
    }

    // ברכות לפי שעות היום
    if (hour >= 5 && hour < 12) {
        return "صبح بخیر"; // Sobh Bekheir - בוקר טוב
    } else if (hour >= 12 && hour < 17) {
        return "روز بخیر"; // Rooz Bekheir - יום טוב / צהריים טובים
    } else if (hour >= 17 && hour < 21) {
        return "عصر بخیر"; // Asr Bekheir - ערב טוב
    } else {
        return "شب بخیر"; // Shab Bekheir - לילה טוב
    }
};