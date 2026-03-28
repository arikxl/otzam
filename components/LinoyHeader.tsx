import Image from "next/image";

interface LinoyHeaderProps {
    title: string;       // כותרת הבועית (למשל: "מסע בפרס" או "איספהאן")
    text: string;        // הטקסט שלינוי אומרת
    imageUrl?: string;   // תמונת לינוי (אופציונלי, ברירת מחדל היא linoi.png)
}

export default function LinoyHeader({
    title,
    text,
    imageUrl = "/imgs/linoi.png" // ערך ברירת מחדל
}: LinoyHeaderProps) {
    return (
        // המבנה הכללי: Flex, רווח עדין, Padding
        <header className="relative z-10 w-full p-6 pt-4 pb-2 flex-none flex items-start gap-4 dir-rtl">



            {/* צד שמאל: בועית הדיבור (80% מרוחב המכלול) */}
            <div className="flex-1 w-[80%]">
                {/* הבועית עם אפקט זכוכית (Glassmorphism) וסיומת עגולה */}
                <div className="relative bg-white/10 border border-white/20 backdrop-blur-sm p-4 rounded-[25px] rounded-tl-[5px] shadow-lg shadow-black/10">
                    {/* המשולש (Tip) של הבועית בצד ימין למעלה */}
                    <div className="absolute top-0 right-0 -mr-2 w-0 h-0 border-t-10 border-t-white/10 border-r-10 border-r-transparent" />

                    <h1 className="text-xl font-bold text-persian drop-shadow-md">
                        {title}
                    </h1>
                    <p className="text-white text-sm mt-1.5 leading-relaxed drop-shadow-sm font-medium">
                        {text}
                    </p>
                </div>
            </div>

            {/* צד ימין: תמונת לינוי (20% מרוחב המכלול) */}
            <div className="flex-none w-[20%] max-w-20">
                <div className="relative aspect-square rounded-full border-2 border-persian/60 overflow-hidden shadow-lg shadow-black/20 bg-white/5">
                    <Image
                        src={imageUrl}
                        alt="לינוי המדריכה"
                        fill
                        sizes="80px"
                        priority // טעינה בעדיפות גבוהה כי זה בראש הדף
                        className="object-cover"
                    />
                </div>
            </div>

        </header>
    );
}