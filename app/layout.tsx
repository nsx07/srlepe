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
            <main className="h-full max-w-5xl px-5 mx-auto">{children}</main>
            <footer className="bottom-0 left-0 right-0 static w-full">
              <div className="flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center md:px-6 border-t max-w-5xl px-5 mx-auto">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} Srlepe. Todos os direitos
                  reservados.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                  <Link
                    className="text-xs hover:underline underline-offset-4"
                    href="#"
                  >
                    Termos de Serviço
                  </Link>
                  <Link
                    className="text-xs hover:underline underline-offset-4"
                    href="#"
                  >
                    Privacidade
                  </Link>
                </nav>
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
