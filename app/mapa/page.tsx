"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MapaPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for recycling centers
  const recyclingCenters = [
    {
      id: 1,
      name: "Centro de Reciclaje Ciudad de Guatemala",
      address: "Zona 10, Ciudad de Guatemala",
      materials: ["Plástico", "Papel", "Vidrio", "Metal"],
      phone: "+502 2222-3333",
      hours: "Lunes a Viernes: 8:00 - 17:00, Sábado: 8:00 - 12:00",
    },
    {
      id: 2,
      name: "EcoReciclaje Quetzaltenango",
      address: "Zona 3, Quetzaltenango",
      materials: ["Plástico", "Papel", "Electrónicos"],
      phone: "+502 7777-8888",
      hours: "Lunes a Viernes: 9:00 - 18:00",
    },
    {
      id: 3,
      name: "Recicladora del Sur",
      address: "Escuintla",
      materials: ["Plástico", "Metal", "Vidrio"],
      phone: "+502 5555-6666",
      hours: "Lunes a Sábado: 7:00 - 16:00",
    },
    {
      id: 4,
      name: "Centro de Acopio Municipal",
      address: "Antigua Guatemala",
      materials: ["Papel", "Cartón", "Plástico"],
      phone: "+502 7777-9999",
      hours: "Lunes a Viernes: 8:00 - 15:00",
    },
    {
      id: 5,
      name: "Reciclaje Industrial GT",
      address: "Zona 12, Ciudad de Guatemala",
      materials: ["Metal", "Electrónicos", "Baterías"],
      phone: "+502 2222-4444",
      hours: "Lunes a Viernes: 7:00 - 17:00",
    },
  ]

  const filteredCenters = recyclingCenters.filter(
    (center) =>
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.materials.some((material) => material.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Mapa de Reciclaje</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar por ubicación, material o nombre..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrar por material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los materiales</SelectItem>
                <SelectItem value="plastic">Plástico</SelectItem>
                <SelectItem value="paper">Papel y cartón</SelectItem>
                <SelectItem value="glass">Vidrio</SelectItem>
                <SelectItem value="metal">Metal</SelectItem>
                <SelectItem value="electronics">Electrónicos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Tabs defaultValue="map" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="map">Mapa</TabsTrigger>
              <TabsTrigger value="list">Lista</TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="space-y-4 pt-4">
              <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Mapa interactivo de centros de reciclaje</p>
                {/* En una implementación real, aquí iría un componente de mapa como Google Maps o Mapbox */}
              </div>
              <p className="text-sm text-muted-foreground">
                Haz clic en los marcadores para ver detalles de cada centro de reciclaje.
              </p>
            </TabsContent>

            <TabsContent value="list" className="space-y-4 pt-4">
              {filteredCenters.length > 0 ? (
                <div className="space-y-4">
                  {filteredCenters.map((center) => (
                    <Card key={center.id}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{center.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {center.address}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <div>
                            <p className="text-sm font-medium">Materiales aceptados:</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {center.materials.map((material) => (
                                <span
                                  key={material}
                                  className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full dark:bg-green-900 dark:text-green-100"
                                >
                                  {material}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="font-medium">Teléfono:</p>
                              <p className="text-gray-500 dark:text-gray-400">{center.phone}</p>
                            </div>
                            <div>
                              <p className="font-medium">Horario:</p>
                              <p className="text-gray-500 dark:text-gray-400">{center.hours}</p>
                            </div>
                          </div>
                          <Button variant="outline" className="mt-2">
                            Ver detalles
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No se encontraron centros de reciclaje que coincidan con tu búsqueda.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
              <CardDescription>Refina tu búsqueda</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Distancia</label>
                <Select defaultValue="10">
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar distancia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 km</SelectItem>
                    <SelectItem value="10">10 km</SelectItem>
                    <SelectItem value="25">25 km</SelectItem>
                    <SelectItem value="50">50 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Departamento</label>
                <Select defaultValue="guatemala">
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="guatemala">Guatemala</SelectItem>
                    <SelectItem value="quetzaltenango">Quetzaltenango</SelectItem>
                    <SelectItem value="escuintla">Escuintla</SelectItem>
                    <SelectItem value="sacatepequez">Sacatepéquez</SelectItem>
                    <SelectItem value="otros">Otros departamentos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tipo de centro</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los centros</SelectItem>
                    <SelectItem value="municipal">Municipal</SelectItem>
                    <SelectItem value="privado">Privado</SelectItem>
                    <SelectItem value="comunitario">Comunitario</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">
                <Filter className="mr-2 h-4 w-4" />
                Aplicar filtros
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>¿No encuentras un centro?</CardTitle>
              <CardDescription>Ayúdanos a mejorar nuestro mapa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Si conoces un centro de reciclaje que no aparece en nuestro mapa, puedes ayudarnos a completar nuestra
                base de datos.
              </p>
              <Button variant="outline" className="w-full">
                Sugerir un centro
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
