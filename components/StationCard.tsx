import Image from "next/image";
import { Lock } from "lucide-react";

interface StationCardProps {
    station: {
        id: number;
        name: string;
        namePersian: string;
        image: string;
        totalQuestions: number;
        completedQuestions: number;
        status: 'locked' | 'active' | 'completed';
    };
}

export default function StationCard({ station }: StationCardProps) {
    const isLocked = station.status === "locked";
    const progressPercent = (station.completedQuestions / station.totalQuestions) * 100;

    // גרייסקייל הפוך להתקדמות: 0% התקדמות = 100% שחור-לבן
    const grayscaleValue = 100 - progressPercent;

    return (
        <div className="relative group shrink-0">
            {/* 1. מסגרת התקדמות (Border Progress) */}
            {/* אנחנו משתמשים ב-conic-gradient כדי ליצור את אפקט הטעינה מסביב */}
            <div
                className="absolute -inset-0.5 rounded-3xl z-0 transition-all duration-1000"
                style={{
                    background: isLocked
                        ? 'transparent'
                        : `conic-gradient(var(--gold-main) ${progressPercent}%, rgba(255,255,255,0.1) 0deg)`
                }}
            />

            {/* 2. גוף הכרטיס */}
            <div className={`relative aspect-square rounded-[22px] overflow-hidden bg-zinc-900 z-10 
        ${!isLocked ? "cursor-pointer active:scale-95 transition-transform" : ""}`}>

                {/* תמונת התחנה */}
                <Image
                    src={station.image}
                    alt={station.name}
                    fill
                    className={`object-cover transition-all duration-700
            ${isLocked ? "blur-md opacity-40 scale-110" : "blur-0 opacity-100"}`}
                    style={{
                        filter: !isLocked ? `grayscale(${grayscaleValue}%)` : "grayscale(100%)"
                    }}
                />

                {/* שכבת האפלה תחתונה לשמות */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />

                {/* תוכן טקסטואלי */}
                <div className="absolute inset-0 p-3 flex flex-col justify-end items-center text-center">
                    {isLocked ? (
                        <Lock className="text-white/20 mb-auto mt-auto" size={24} />
                    ) : (
                        <>
                            <h3 className="text-white font-bold text-sm drop-shadow-md truncate w-full">
                                {station.name}
                            </h3>
                            <p className="text-gold/80 text-[10px] font-medium leading-none mb-1">
                                {station.namePersian}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}