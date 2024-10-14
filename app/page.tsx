import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cat, Camera, Share2, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen gap-2">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Compartilhe as poses mais engraçadas do seu gato
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                  Junte-se à maior comunidade de amantes de gatos. Faça uploads,
                  interaja, compartilhe e aproveite poses hilárias de gatos de
                  todo o mundo.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/in"
                  className={buttonVariants({ variant: "default" })}
                >
                  Começar
                </Link>
                <Button variant="outline">Saiba Mais</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border dark:border-gray-900 rounded-lg">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Funcionalidades
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Camera className="h-12 w-12" />
                <h3 className="text-xl font-bold">Upload Fácil</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Faça upload das fotos do seu gato rapidamente com apenas
                  alguns toques.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Share2 className="h-12 w-12" />
                <h3 className="text-xl font-bold">
                  Compartilhamento Instantâneo
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Compartilhe as poses engraçadas do seu gato com amigos e a
                  comunidade.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Heart className="h-12 w-12" />
                <h3 className="text-xl font-bold">Curtir & Comentar</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Interaja com outros amantes de gatos e seus felinos adoráveis.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Gatos em Destaque
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow-lg border-gray-800 border"
                >
                  <img
                    src={`https://g-nhjnnjsncoy.vusercontent.net/placeholder.svg?height=300&width=400`}
                    alt={`Pose engraçada de gato ${i}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Sr. Bigodes em Ação</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Enviado por AmanteDeGatos{i}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
