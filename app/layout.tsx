import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="he" dir="rtl">
        <body className="bg-zinc-900 flex justify-center items-center min-h-screen">
          {/* הקונטיינר של הטלפון */}
          <main className="w-full max-w-112.5 h-screen max-h-225 bg-background relative overflow-hidden shadow-2xl border-x border-zinc-800 md:rounded-3xl my-auto">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}