import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cat, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              404 - Gato não encontrado
            </h1>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  DESAPARECIDO
                </span>
                <div className="flex gap-2">
                  <Badge variant={"destructive"}>Urgente</Badge>
                  <Badge variant={"default"}>Recompensa: Catnip</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Nome:</span> Gato do Erro 404
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Última vez visto:</span> Nos
                  logs do servidor
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Descrição:</span> Felino
                  travesso, conhecido por esconder páginas da web
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Se encontrado, por favor, retorne à página inicial
                  imediatamente. Este gato é essencial para a navegação adequada
                  do site!
                </p>
              </div>
            </div>
          </div>
          <div className="text-center space-y-4">
            <p className="text-base text-gray-600 dark:text-gray-400">
              Não se preocupe, nossos localizadores de gatos especialistas estão
              no caso!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/">Retornar à Página Inicial</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
