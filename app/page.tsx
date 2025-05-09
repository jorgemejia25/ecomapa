import { ArrowRight, BookOpen, FileText, MapPin, Recycle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import Link from "next/link";
import RecyclingStats from "@/components/recycling-stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <main className="flex-1">
        <section className="container px-4 py-16 md:py-24 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center justify-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                <Recycle className="mr-1 h-3.5 w-3.5" />
                Promoviendo el reciclaje
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-5xl">
                Construyendo un futuro sostenible
              </h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Nuestra plataforma te ayuda a entender cómo separar
                correctamente los residuos, te educa sobre el reciclaje y te
                informa sobre la Ley de Reciclaje.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="group relative overflow-hidden border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Recycle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">
                  Separación de Residuos
                </CardTitle>
                <CardDescription>
                  Aprende a separar correctamente los diferentes tipos de
                  residuos
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Guías detalladas sobre cómo clasificar plásticos, papel,
                  vidrio, metal y residuos orgánicos.
                </p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 group-hover:shadow-md transition-all"
                >
                  <Link
                    href="/separacion"
                    className="flex items-center justify-center"
                  >
                    Ver guía
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group relative overflow-hidden border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Educación Ambiental</CardTitle>
                <CardDescription>
                  Recursos educativos sobre el impacto del reciclaje
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Artículos, videos y materiales educativos sobre la importancia
                  del reciclaje y su impacto en el medio ambiente.
                </p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 group-hover:shadow-md transition-all"
                >
                  <Link
                    href="/educacion"
                    className="flex items-center justify-center"
                  >
                    Explorar recursos
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group relative overflow-hidden border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Ley de Reciclaje</CardTitle>
                <CardDescription>
                  Información sobre la legislación de reciclaje
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Conoce tus derechos y obligaciones según la Ley de Reciclaje
                  de Guatemala y cómo cumplir con ella.
                </p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 group-hover:shadow-md transition-all"
                >
                  <Link
                    href="/ley"
                    className="flex items-center justify-center"
                  >
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <RecyclingStats />

        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl flex items-center justify-center flex-col">
                <div className="inline-flex items-center justify-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <Recycle className="mr-1 h-3.5 w-3.5" />
                  Únete al movimiento
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Juntos por un Guatemala más limpio
                </h2>
                <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Cada pequeña acción cuenta. Juntos podemos hacer una gran
                  diferencia para nuestro planeta.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
