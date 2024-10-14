import HeaderAuth from "@/components/header-auth";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Logo from "@/components/logo";
import Name from "@/components/typography/name";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Srlepe",
  description: "Compartilhe os seus serelepes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen relative">
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
              <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <Link
                  href="/"
                  className="flex items-center gap-3 drop-shadow shadow-gray-300"
                >
                  <Logo />
                  <Name />
                </Link>
                <HeaderAuth />
              </div>
            </nav>
            <main className="max-w-5xl px-5 mx-auto">{children}</main>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
