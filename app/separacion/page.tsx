import { ArrowLeft, Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SeparacionPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex items-center gap-2 mb-8">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="hover:bg-green-100 dark:hover:bg-green-900/20"
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Guía de Separación de Residuos
          </h1>
          <p className="text-muted-foreground">
            El primer paso para un reciclaje efectivo
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        <div className="space-y-8">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6 shadow-sm">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-green-100 opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-green-100 opacity-20"></div>
            <p className="relative text-lg text-gray-700 dark:text-gray-300">
              La correcta separación de residuos es el primer paso para un
              reciclaje efectivo. Aprende cómo clasificar diferentes tipos de
              materiales para facilitar su procesamiento y reutilización.
            </p>
          </div>

          <Tabs defaultValue="plastico" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-green-50 dark:bg-green-950/50 p-1 rounded-xl">
              <TabsTrigger
                value="plastico"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-green-600 data-[state=active]:shadow-sm rounded-lg"
              >
                Plástico
              </TabsTrigger>
              <TabsTrigger
                value="papel"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-green-600 data-[state=active]:shadow-sm rounded-lg"
              >
                Papel
              </TabsTrigger>
              <TabsTrigger
                value="vidrio"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-green-600 data-[state=active]:shadow-sm rounded-lg"
              >
                Vidrio
              </TabsTrigger>
              <TabsTrigger
                value="metal"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-green-600 data-[state=active]:shadow-sm rounded-lg"
              >
                Metal
              </TabsTrigger>
              <TabsTrigger
                value="organico"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950 data-[state=active]:text-green-600 data-[state=active]:shadow-sm rounded-lg"
              >
                Orgánico
              </TabsTrigger>
            </TabsList>

            <TabsContent value="plastico" className="space-y-4 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-auto md:flex-none md:w-64 h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    fill
                    alt="Reciclaje de plástico"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-medium">Plásticos reciclables</h4>
                      <p className="text-sm text-white/80">Tipos 1, 2, 4 y 5</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">
                    Reciclaje de Plástico
                  </h3>
                  <p className="mb-4">
                    Los plásticos se clasifican según su tipo, identificado por
                    el número dentro del símbolo de reciclaje:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          1
                        </span>
                      </div>
                      <span>PET: Botellas de agua, refrescos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          2
                        </span>
                      </div>
                      <span>HDPE: Envases de detergente, champú</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          3
                        </span>
                      </div>
                      <span>PVC: Tuberías, mangueras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          4
                        </span>
                      </div>
                      <span>LDPE: Bolsas, envolturas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          5
                        </span>
                      </div>
                      <span>PP: Tapas, envases de yogurt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          6
                        </span>
                      </div>
                      <span>PS: Vasos desechables, bandejas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          7
                        </span>
                      </div>
                      <span>Otros: Mezclas de plásticos</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/50 p-6 rounded-xl">
                <h4 className="font-medium mb-3 text-green-800 dark:text-green-400">
                  Consejos para reciclar plástico:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Enjuaga los envases para eliminar residuos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Retira las tapas y etiquetas cuando sea posible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Aplasta las botellas para reducir su volumen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      No incluyas plásticos muy sucios o con residuos de aceite
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="papel" className="space-y-4 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-auto md:flex-none md:w-64 h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    fill
                    alt="Reciclaje de papel"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-medium">Papel y cartón</h4>
                      <p className="text-sm text-white/80">
                        Reciclable múltiples veces
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">
                    Reciclaje de Papel y Cartón
                  </h3>
                  <p className="mb-4">
                    El papel y cartón son materiales altamente reciclables que
                    pueden procesarse varias veces para crear nuevos productos:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          1
                        </span>
                      </div>
                      <span>Papel de oficina: hojas, sobres, folletos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          2
                        </span>
                      </div>
                      <span>Periódicos y revistas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          3
                        </span>
                      </div>
                      <span>Cajas de cartón</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          4
                        </span>
                      </div>
                      <span>Envases de cartón (tetra pak)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          5
                        </span>
                      </div>
                      <span>Cuadernos y libros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          6
                        </span>
                      </div>
                      <span>Cartulinas y papel de regalo</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/50 p-6 rounded-xl">
                <h4 className="font-medium mb-3 text-green-800 dark:text-green-400">
                  Consejos para reciclar papel y cartón:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Mantén el papel seco y limpio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Retira grapas, clips, espirales y cualquier elemento
                      metálico o plástico
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Aplana las cajas de cartón para optimizar el espacio
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      No incluyas papel con residuos de comida, aceite o muy
                      sucio
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Separa el papel encerado, plastificado o metalizado, ya
                      que requieren procesos especiales
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="vidrio" className="space-y-4 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-auto md:flex-none md:w-64 h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    fill
                    alt="Reciclaje de vidrio"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-medium">Vidrio</h4>
                      <p className="text-sm text-white/80">
                        100% reciclable infinitas veces
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">
                    Reciclaje de Vidrio
                  </h3>
                  <p className="mb-4">
                    El vidrio es 100% reciclable y puede procesarse infinitas
                    veces sin perder calidad, ahorrando energía y recursos
                    naturales:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          1
                        </span>
                      </div>
                      <span>
                        Botellas de bebidas (refrescos, vino, licores)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          2
                        </span>
                      </div>
                      <span>Frascos de alimentos (conservas, salsas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          3
                        </span>
                      </div>
                      <span>Envases de perfumes y cosméticos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          4
                        </span>
                      </div>
                      <span>Tarros y recipientes de vidrio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          5
                        </span>
                      </div>
                      <span>Botellas de medicamentos (sin medicinas)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/50 p-6 rounded-xl">
                <h4 className="font-medium mb-3 text-green-800 dark:text-green-400">
                  Consejos para reciclar vidrio:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Enjuaga los envases para eliminar residuos de alimentos o
                      líquidos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Retira tapas, corchos y etiquetas cuando sea posible
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Manipula con cuidado para evitar roturas y posibles
                      lesiones
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      No incluyas vidrios de ventanas, espejos, bombillas,
                      cristalería o cerámica
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Separa por colores (transparente, verde, ámbar) cuando sea
                      posible
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="metal" className="space-y-4 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-auto md:flex-none md:w-64 h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    fill
                    alt="Reciclaje de metal"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-medium">Metales</h4>
                      <p className="text-sm text-white/80">
                        Alta durabilidad y valor
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">
                    Reciclaje de Metal
                  </h3>
                  <p className="mb-4">
                    Los metales son altamente valorados en el reciclaje por su
                    durabilidad y capacidad de reutilización sin perder
                    propiedades:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          1
                        </span>
                      </div>
                      <span>Latas de aluminio (refrescos, cerveza)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          2
                        </span>
                      </div>
                      <span>Latas de conservas (atún, frijoles, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          3
                        </span>
                      </div>
                      <span>Papel aluminio y bandejas de aluminio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          4
                        </span>
                      </div>
                      <span>Tapas metálicas de botellas y frascos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          5
                        </span>
                      </div>
                      <span>Utensilios de cocina metálicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          6
                        </span>
                      </div>
                      <span>
                        Cables y alambres (sin recubrimiento plástico)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/50 p-6 rounded-xl">
                <h4 className="font-medium mb-3 text-green-800 dark:text-green-400">
                  Consejos para reciclar metal:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Enjuaga las latas para eliminar residuos de alimentos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Aplasta las latas para reducir su volumen y optimizar el
                      espacio
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Separa diferentes tipos de metales cuando sea posible
                      (aluminio, acero, cobre)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Retira etiquetas de papel cuando sea posible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      No incluyas latas con residuos tóxicos o peligrosos
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="organico" className="space-y-4 pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-auto md:flex-none md:w-64 h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    fill
                    alt="Reciclaje de residuos orgánicos"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h4 className="font-medium">Residuos orgánicos</h4>
                      <p className="text-sm text-white/80">
                        Convertibles en compost
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">
                    Reciclaje de Residuos Orgánicos
                  </h3>
                  <p className="mb-4">
                    Los residuos orgánicos pueden convertirse en compost, un
                    valioso fertilizante natural que mejora la calidad del
                    suelo:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          1
                        </span>
                      </div>
                      <span>Restos de frutas y verduras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          2
                        </span>
                      </div>
                      <span>Cáscaras de huevo (trituradas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          3
                        </span>
                      </div>
                      <span>Posos de café y bolsitas de té</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          4
                        </span>
                      </div>
                      <span>Restos de plantas y flores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          5
                        </span>
                      </div>
                      <span>Hojas secas y ramas pequeñas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          6
                        </span>
                      </div>
                      <span>Aserrín (de madera no tratada)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs font-medium text-green-800">
                          7
                        </span>
                      </div>
                      <span>Cáscaras de frutos secos</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/50 p-6 rounded-xl">
                <h4 className="font-medium mb-3 text-green-800 dark:text-green-400">
                  Consejos para compostar residuos orgánicos:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Corta los residuos en trozos pequeños para acelerar su
                      descomposición
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Alterna capas de residuos "verdes" (frescos) y "marrones"
                      (secos)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Mantén el compost húmedo pero no empapado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Voltea regularmente la pila para airearla y acelerar el
                      proceso
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      No incluyas carne, pescado, lácteos, grasas o alimentos
                      cocinados
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-800"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>
                      Evita plantas enfermas o tratadas con pesticidas
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
              <CardTitle>Recursos Descargables</CardTitle>
              <CardDescription>Guías prácticas para imprimir</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <a href="https://cedesyd.usac.edu.gt/wp-content/uploads/2025/02/ACUERDO-GUBERNATIVO-NO.-164-2021-Y-SUS-REFORMAS.pdf">
                <Button
                  variant="outline"
                  className="w-full justify-start group hover:border-green-500 hover:text-green-600 transition-all"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:text-green-600 transition-colors" />
                  Guía completa de reciclaje
                </Button>
              </a>
              <a href="https://cedesyd.usac.edu.gt/wp-content/uploads/2025/02/ACUERDO-GUBERNATIVO-NO.-164-2021-Y-SUS-REFORMAS.pdf">
                <Button
                  variant="outline"
                  className="w-full justify-start group hover:border-green-500 hover:text-green-600 transition-all"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:text-green-600 transition-colors" />
                  Infografía de separación
                </Button>
              </a>
            
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
              <CardTitle>¿Sabías que?</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <span className="text-xs font-medium text-green-800">
                      1
                    </span>
                  </div>
                  <p className="text-sm">
                    Reciclar una lata de aluminio ahorra suficiente energía para
                    hacer funcionar un televisor durante 3 horas.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <span className="text-xs font-medium text-green-800">
                      2
                    </span>
                  </div>
                  <p className="text-sm">
                    Una botella de vidrio puede tardar más de 4,000 años en
                    descomponerse en un vertedero.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <span className="text-xs font-medium text-green-800">
                      3
                    </span>
                  </div>
                  <p className="text-sm">
                    Reciclar una tonelada de papel salva aproximadamente 17
                    árboles.
                  </p>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <span className="text-xs font-medium text-green-800">
                      4
                    </span>
                  </div>
                  <p className="text-sm">
                    El plástico puede tardar hasta 500 años en descomponerse en
                    el medio ambiente.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
