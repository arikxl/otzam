"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Store, User, Star } from "lucide-react"; // אייקונים מתאימים

export default function GameFooter() {
    const pathname = usePathname();

    const navItems = [
        { name: "מפה", href: "/map", icon: Map },
        { name: "בזאר", href: "/bazaar", icon: Store },
        { name: "משימה", href: "/quests", icon: Star },
        { name: "פרופיל", href: "/profile", icon: User },
    ];

    return (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-112.5 h-14 
      bg-white/90 backdrop-blur-lg border-t border-white/20 rounded-t-4xl 
      flex items-center justify-around px-6 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">

            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col items-center  group relative"
                    >
                        {/* אפקט זוהר קטן לאייטם הפעיל */}
                        {isActive && (
                            <span className="absolute -top-2 w-8 h-1 bg-gold rounded-full shadow-[0_0_10px_#D4AF37]" />
                        )}

                        <div className={`p-2 rounded-xl transition-all duration-300 ${isActive
                            ? "bg-gold/10 text-gold scale-110"
                            : "text-zinc-400 group-hover:text-zinc-600"
                            }`}>
                            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        </div>

                        {/* <span className={`text-[10px] font-bold transition-colors ${isActive ? "text-zinc-900" : "text-zinc-400"
                            }`}>
                            {item.name}
                        </span> */}
                    </Link>
                );
            })}
        </nav>
    );
}