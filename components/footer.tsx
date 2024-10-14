import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-16">
      <div className="flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center md:px-6 border-t max-w-5xl px-5 mx-auto">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Srlepe. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
