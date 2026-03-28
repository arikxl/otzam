import Image from "next/image";

export default function MapPage() {
  return (
    <div className="relative h-full w-full flex flex-col overflow-hidden">

      {/* 1. הרקע - עכשיו הוא תופס 100% מהגובה, כולל מתחת להדר */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgs/bg2.jpg"
          alt="Map Background"
          fill
          sizes="(max-width: 450px) 100vw, 450px"
          priority
          className="object-cover scale-110 opacity-50"
        />
        <div className="absolute inset-0" />
      </div>

      {/* 2. מרווח בטחון לגובה ה-Header (הגדרנו h-20 ב-Header) */}
      <div className="h-20 flex-none" />

      {/* 3. כותרת המפה - עכשיו היא תתחיל בדיוק מתחת לקימור של ההדר */}
      <header className="relative z-10 p-6 pb-4 flex-none">
        <h1 className="text-3xl font-bold text-gold drop-shadow-lg">מסע בפרס</h1>
        <p className="text-white/80 mt-1 text-sm">
          בחר את היעד הבא שלך...
        </p>
      </header>

      {/* 4. אזור הכרטיסים הנגלל */}
      <main className="relative z-10 flex-1 overflow-y-auto px-6 pb-24 custom-scrollbar">
        <div className="flex flex-col gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full h-36 bg-white/10 border border-white/10 rounded-3xl backdrop-blur-md shrink-0" />
          ))}
        </div>
      </main>
    </div>
  );
}