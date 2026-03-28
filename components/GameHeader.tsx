"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { toPersianDigits } from "@/lib/utils"; // ייבוא פונקציית העזר

interface GameHeaderProps {
    coins: number;
}

export default function GameHeader({ coins }: GameHeaderProps) {
    const { user, isLoaded } = useUser();

    if (!isLoaded) return <div className="h-16 w-full bg-zinc-900 animate-pulse" />;

    return (
        <header className="glass-header sticky top-0 z-50 w-full h-16 px-4 flex items-center justify-between">

            {/* צד ימין: פרופיל שחקן */}
            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full border-2 border-gold overflow-hidden shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                    <Image
                        src={user?.imageUrl || "/logos/logo1-nob.png"}
                        alt="profile"
                        fill
                        sizes="40px"
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-[10px] opacity-60 leading-none">סלאם,</span>
                    <span className="text-white font-bold text-sm leading-tight">
                        {user?.firstName || "שחקן"}
                    </span>
                </div>
            </div>

            {/* צד שמאל: מונה מטבעות עם ספרות פרסיות */}
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-gold/30">
                <span className="text-gold font-bold text-xl leading-none mt-1">
                    {/* כאן קורה הקסם */}
                    {toPersianDigits(coins.toLocaleString())}
                </span>
                <div className="w-5 h-5 relative">
                    <div className="absolute inset-0 bg-gold rounded-full shadow-[0_0_8px_#D4AF37]" />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] text-black font-black">₪</span>
                </div>
            </div>

        </header>
    );
}