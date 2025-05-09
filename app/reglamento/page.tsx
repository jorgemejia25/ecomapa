import { ArrowLeft, Leaf, Recycle, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ReglamentoPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon" asChild className="hover:bg-green-100 dark:hover:bg-green-900/20">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reglamento de Reciclaje</h1>
          <p className="text-muted-foreground">Acuerdo Gubernativo 164-2021</p>
        </div>
      </div>

      {/* Sección principal sobre el reglamento */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-800 to-green-700 p-8 shadow-lg text-white mb-8">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-white opacity-10"></div>

          <h2 className="text-2xl font-bold mb-4">SOBRE EL REGLAMENTO</h2>
          <h3 className="text-xl font-semibold mb-2">Acuerdo Gubernativo 164-2021</h3>
          <p className="text-lg font-medium mb-4">
            Reglamento para la gestión integral de los residuos y desechos sólidos comunes.
          </p>

          <p className="text-white/90 leading-relaxed">
            Nuestro país ha presentado un desarrollo en las últimas décadas que se evidencia por medio del crecimiento
            económico, expansión urbanística y en el incremento del sector industrial. Esto va directamente asociado con
            la demanda de recursos para producir bienes y servicios que satisfagan las necesidades de la población,
            creando un patrón de consumo que produce un aumento en la generación de los residuos y desechos sólidos.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-green-500 p-8 shadow-lg text-white">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-white opacity-10"></div>

          <h2 className="text-2xl font-bold mb-4">PRÁCTICAS SOSTENIBLES PARA EL MANEJO DE RESIDUOS Y DESECHOS</h2>

          <p className="text-white/90 leading-relaxed mb-6">
            Separando tus residuos o desechos en los distintos contenedores garantizas preservar un futuro limpio ya que
            haciendo tu parte contribuyes al cuidado del medio ambiente. Recuerda seguir los principios de las Tres
            Erres "Reducir, Reutilizar y Reciclar" evitando en primer lugar la generación de residuos y desechos.
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xl font-bold">R</span>
            </div>
            <span className="text-lg font-medium">REDUCIR</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xl font-bold">R</span>
            </div>
            <span className="text-lg font-medium">REUTILIZAR</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xl font-bold">R</span>
            </div>
            <span className="text-lg font-medium">RECICLAR</span>
          </div>
        </div>
      </section>

      {/* Sección de clasificación */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">CLASIFICA</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Orgánicos */}
          <Card className="overflow-hidden border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl group">
            <div className="h-24 bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center">
              <Leaf className="h-12 w-12 text-white" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-600 group-hover:text-green-700 transition-colors">
                ORGÁNICOS
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deposita elementos que puedas reutilizar cáscara de frutas, aserrín y restos de café.
              </p>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Cáscaras de frutas y verduras</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Restos de café y té</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Aserrín</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Restos de plantas</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Inorgánicos / No reciclable */}
          <Card className="overflow-hidden border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl group">
            <div className="h-24 bg-gradient-to-r from-gray-600 to-gray-500 flex items-center justify-center">
              <Trash2 className="h-12 w-12 text-white" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-600 group-hover:text-gray-700 transition-colors">
                INORGÁNICOS / NO RECICLABLE
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Coloca aqui los desechos como Duroport y Desechos sanitarios.
              </p>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                  <span>Duroport (poliestireno expandido)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                  <span>Desechos sanitarios</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                  <span>Pañales y toallas sanitarias</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                  <span>Residuos de barrido</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reciclables */}
          <Card className="overflow-hidden border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl group">
            <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
              <Recycle className="h-12 w-12 text-white" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-600 group-hover:text-blue-700 transition-colors">
                RECICLABLES
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Coloca aquí residuos que puedas reutilizar plástico, vidrio, papel/cartón, metal o multicapa.
              </p>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Plástico (botellas, envases)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Vidrio (botellas, frascos)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Papel y cartón</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Metal (latas, aluminio)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  <span>Envases multicapa (tetrapak)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
