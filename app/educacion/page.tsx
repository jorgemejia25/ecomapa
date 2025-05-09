import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Play, FileText, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EducacionPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Educación Ambiental</h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          La educación ambiental es fundamental para crear conciencia sobre la importancia del reciclaje y su impacto
          positivo en nuestro planeta. Explora nuestros recursos educativos.
        </p>

        <Tabs defaultValue="articulos" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articulos">Artículos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="talleres">Talleres</TabsTrigger>
          </TabsList>

          <TabsContent value="articulos" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>El impacto del reciclaje en Guatemala</CardTitle>
                <CardDescription>Publicado el 15 de mayo, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width={150}
                    height={150}
                    alt="Impacto del reciclaje"
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Guatemala enfrenta desafíos significativos en la gestión de residuos. Este artículo explora cómo
                      el reciclaje puede transformar comunidades, generar empleos y proteger nuestros recursos
                      naturales.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Tiempo de lectura: 8 minutos</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Leer artículo completo</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beneficios económicos del reciclaje</CardTitle>
                <CardDescription>Publicado el 3 de abril, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width={150}
                    height={150}
                    alt="Beneficios económicos"
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      El reciclaje no solo beneficia al medio ambiente, sino que también puede impulsar la economía
                      local. Descubre cómo las iniciativas de reciclaje están creando oportunidades económicas en
                      Guatemala.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Tiempo de lectura: 6 minutos</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Leer artículo completo</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reciclaje en escuelas: formando futuras generaciones</CardTitle>
                <CardDescription>Publicado el 20 de febrero, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width={150}
                    height={150}
                    alt="Reciclaje en escuelas"
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Las escuelas juegan un papel crucial en la educación ambiental. Este artículo presenta iniciativas
                      exitosas de reciclaje en escuelas guatemaltecas y cómo implementarlas.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Tiempo de lectura: 5 minutos</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Leer artículo completo</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Cómo funciona el proceso de reciclaje</CardTitle>
                <CardDescription>Publicado el 10 de junio, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Video thumbnail"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" className="h-12 w-12 rounded-full bg-green-600 hover:bg-green-700">
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Reproducir video</span>
                    </Button>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Este video explica el fascinante viaje de los materiales reciclables, desde su recolección hasta su
                  transformación en nuevos productos.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Play className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Duración: 8:24</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Historias de éxito: Comunidades que reciclan</CardTitle>
                <CardDescription>Publicado el 5 de mayo, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Video thumbnail"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" className="h-12 w-12 rounded-full bg-green-600 hover:bg-green-700">
                      <Play className="h-6 w-6" />
                      <span className="sr-only">Reproducir video</span>
                    </Button>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Conoce las inspiradoras historias de comunidades guatemaltecas que han implementado programas de
                  reciclaje exitosos y transformado su entorno.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Play className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Duración: 12:05</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="talleres" className="space-y-6 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Taller: Compostaje doméstico</CardTitle>
                <CardDescription>Próxima fecha: 15 de julio, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width={150}
                    height={150}
                    alt="Taller de compostaje"
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Aprende a crear tu propio sistema de compostaje en casa. Este taller práctico te enseñará cómo
                      convertir tus residuos orgánicos en abono de alta calidad para tus plantas.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <BookOpen className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Duración: 2 horas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Inscribirse al taller</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Taller: Creación de artesanías con materiales reciclados</CardTitle>
                <CardDescription>Próxima fecha: 22 de julio, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width={150}
                    height={150}
                    alt="Taller de artesanías"
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Descubre cómo transformar materiales reciclados en hermosas artesanías. Este taller práctico te
                      enseñará técnicas creativas para dar nueva vida a objetos desechados.
                    </p>
                    <div className="flex items-center gap-2 mt-4">
                      <BookOpen className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Duración: 3 horas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Inscribirse al taller</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
