"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { getPersianGreeting, toPersianDigits } from "@/lib/utils";
import { useRouter } from "next/navigation";


interface GameHeaderProps {
    coins: number;
}

export default function GameHeader({ coins }: GameHeaderProps) {
    const { user, isLoaded } = useUser();
    const { signOut } = useClerk(); // פונקציית ההתנתקות
    const router = useRouter();
    const greeting = getPersianGreeting(); // קריאה לפונקציה החדשה

    const handleSignOut = async () => {
        // הוספת אישור קטן כדי שלא יתנתקו בטעות
        if (window.confirm("בטוח שרוצה לצאת מהמערכת?")) {
            await signOut();
            router.push("/"); // מחזיר לדף הכניסה
        }
    };

    if (!isLoaded) return <div className="h-20 w-full bg-white/20 animate-pulse rounded-b-3xl" />;

    return (
        <header className="sticky top-0 z-50 w-full h-20 px-6 flex items-center justify-between 
      bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 rounded-b-4xl border-b border-white/20">

            {/* צד ימין: פרופיל שחקן */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleSignOut}
                    className="relative w-11 h-11 rounded-full border-2 border-gold overflow-hidden shadow-sm 
                     hover:scale-105 active:scale-95 transition-transform cursor-pointer group"
                    title="התנתקות"
                >
                    <Image
                        src={user?.imageUrl || "/logos/logo1-nob.png"}
                        alt="profile"
                        fill
                        sizes="44px"
                        className="object-cover"
                    />
                    {/* שכבה שמופיעה בריחוף (Hover) במחשב */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="text-[8px] text-white font-bold">יציאה</span>
                    </div>
                </button>

                <div className="flex flex-col">
                    <span className="text-zinc-500 text-[12px] font-bold leading-none mb-0.5">
                        {greeting},
                    </span>
                    <span className="text-zinc-900 font-extrabold text-sm leading-tight">
                        {user?.firstName || "שחקן"}
                    </span>
                </div>
            </div>


            {/* צד שמאל: מונה מטבעות */}
            <div className="flex items-center gap-2 bg-zinc-100/80 px-4 py-2 rounded-full border border-zinc-200 shadow-inner">
                <span className="text-zinc-900 font-black text-xl leading-none ">
                    {toPersianDigits(coins.toLocaleString())}
                </span>
                <div className="w-6 h-6 relative">
                    {/* המטבע המוזהב */}
                    <div className="absolute inset-0 bg-linear-to-tr from-gold to-gold-hover rounded-full shadow-[0_2px_5px_rgba(212,175,55,0.4)]" />
                    <span className="absolute inset-0 flex items-center justify-center text-[11px] text-black font-black">₪</span>
                </div>
            </div>

        </header>
    );
}