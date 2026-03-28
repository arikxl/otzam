import GameFooter from "@/components/GameFooter";
import GameHeader from "@/components/GameHeader";

export default function GameLayout({ children }: { children: React.ReactNode }) {
    const currentCoins = 10;

    return (
        // relative כאן מאפשר לאלמנטים בתוכו לצוף אחד מעל השני
        <div className="relative h-full w-full overflow-hidden bg-zinc-950">

            {/* ה-Header יושב בשכבה הכי גבוהה (z-50) וצף למעלה */}
            <div className="absolute top-0 left-0 right-0 z-50">
                <GameHeader coins={currentCoins} />
            </div>

            {/* הדפים ירונדרו כאן. הם ימלאו את כל המסך, כולל מה שמתחת להדר */}
            <div className="h-full w-full">
                {children}
            </div>


            <GameFooter />
        </div>
    );
}