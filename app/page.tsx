"use client";

import { useClerk, useUser, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  const handleMainActionButton = () => {
    if (isSignedIn) {
      router.push("/map"); // מעבר למפה
    } else {
      openSignIn(); // פתיחת התחברות
    }
  };

  if (!isLoaded) return null;

  return (
    <div className="relative h-full w-full flex flex-col justify-between p-8 overflow-hidden font-sans">

      {/* 1. תמונת הרקע (מקורית) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/bg1.png"
          alt="Ancient Persia Background"
          fill
          priority
          sizes="(max-width: 450px) 100vw, 450px"
          className="object-cover"
        />
        {/* שכבת האפלה (מומלץ להחשיך קצת יותר עבור זהב) */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 2. לוגו המשחק */}
      <header className="z-10 mt-16 flex justify-center w-full">
        <div className="relative w-full max-w-70 aspect-square">
          <Image
            src="/logos/logo1-nob.png"
            alt="לוגו המסע לאירן"
            fill
            priority
            sizes="(max-width: 450px) 100vw, 280px"
            className="object-contain drop-shadow-[0_4px_30px_rgba(212,175,55,0.4)]" // צל זהוב עדין ללוגו
          />
        </div>
      </header>

      {/* 3. חלק מרכזי: ברכה דינמית וכפתור מוזהב */}
      <section className="z-10 flex flex-col items-center w-full gap-6 px-4">

        {isSignedIn && user?.firstName && (
          <div className="text-center mb-2 animate-fade-in">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">
              סלאם, <span className="text-gold">{user.firstName}</span>!
            </h2>
          </div>
        )}

        {/* --- הכפתור המוזהב החדש --- */}
        <button
          onClick={handleMainActionButton}
          className="w-full py-5 px-10 bg-gold hover:bg-gold-hover text-black text-2xl font-bold rounded-2xl transition-all active:scale-95 shadow-[0_0_25px_rgba(212,175,55,0.5)] border border-white/20 backdrop-blur-sm cursor-pointer"
        >
          {isSignedIn ? "נצא למסע" : "התחברות"}
        </button>


      </section>

      {/* 4. חלק תחתון: קרדיט (נשאר אותו דבר) */}
      <footer className="z-10 text-center mb-6">
        <a
          href="https://www.linkedin.com/in/arik-alexandrov/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex justify-center items-center gap-1 transition-opacity opacity-80 hover:opacity-100"
        >
          <span className="text-sm font-semibold text-gold border-b border-transparent group-hover:border-gold transition-all">
           arikxl
          </span>
          <span className="text-xs text-white/60 tracking-widest">Developed by</span>
        </a>
      </footer>

    </div>
  );
}