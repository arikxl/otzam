import GameHeader from "@/components/GameHeader";

export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // בינתיים נשים 100 מטבעות כ-Hardcoded, בהמשך נמשוך מה-Context
    const currentCoins = 100;

    return (
        <div className="flex flex-col h-full bg-zinc-950">
            {/* ה-Header יופיע כאן תמיד בתוך המשחק */}
            <GameHeader coins={currentCoins} />

            {/* כאן ירונדרו הדפים: המפה, התחנות, הבזאר וכו' */}
            <main className="flex-1 overflow-y-auto custom-scrollbar">
                {children}
            </main>
        </div>
    );
}