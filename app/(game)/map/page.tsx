export default function MapPage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4 text-gold">מפת התחנות</h1>
      <p className="text-white/70">
        ברוך הבא למסע! כאן יופיעו 50 התחנות שלך ברחבי איראן.
      </p>

      {/* כאן נכניס בהמשך את ה-List של התחנות שראינו בעיצוב שלך */}
      <div className="mt-10 flex justify-center italic text-sm opacity-50">
        הזרמת נתונים מפרספוליס...
      </div>
    </div>
  );
}