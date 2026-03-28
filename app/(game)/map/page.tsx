import LinoyHeader from "@/components/LinoyHeader";
import StationCard from "@/components/StationCard";
import stations from "@/data/data";
import Image from "next/image";



export default function MapPage() {
  const welcomeTitle = "מסע בפרס";
  const welcomeText = "שלום, אריק! בחר את היעד הבא שלך וגלה את סודות השפה הפרסית דרך נופים היסטוריים.";

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


      {/* 3. שימוש ברכיב החדש והגמיש - עם השם המתוקן! */}
      <LinoyHeader
        title={welcomeTitle}
        text={welcomeText}
      // imageUrl="/imgs/linoy_happy.png" // דוגמה להחלפת תמונה בעתיד
      />

      {/* 4. אזור הכרטיסים הנגלל */}
      <main className="relative z-10 flex-1 overflow-y-auto px-4 pb-32 custom-scrollbar">
        <div className="grid grid-cols-2 gap-4 pt-4">
          {stations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))}
        </div>
      </main>
    </div>
  );
}