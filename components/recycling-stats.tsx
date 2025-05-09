"use client"

import { useState, useEffect } from "react"
import { Trash2, Recycle, Leaf, BarChart3, Droplet } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecyclingStats() {
  // Estadísticas reales sobre reciclaje
  const [stats, setStats] = useState({
    wasteGenerated: 0,
    recyclingRate: 0,
    plasticOceans: 0,
    deforestationSaved: 0,
  })

  useEffect(() => {
    // Simulación de carga de datos
    const timer = setTimeout(() => {
      setStats({
        wasteGenerated: 2010, // Millones de toneladas de residuos generados globalmente al año
        recyclingRate: 19, // Tasa global de reciclaje en porcentaje
        plasticOceans: 8, // Millones de toneladas de plástico que llegan a los océanos anualmente
        deforestationSaved: 700, // Miles de hectáreas de bosque salvadas anualmente por el reciclaje de papel
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-green-50 dark:from-gray-950 dark:to-green-950/20"></div>
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center justify-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
              <BarChart3 className="mr-1 h-3.5 w-3.5" />
              Estadísticas Globales
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              El reciclaje en cifras reales
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Datos actuales que muestran la importancia del reciclaje a nivel mundial
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div custom={0} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium">Residuos Generados</CardTitle>
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Trash2 className="h-4 w-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold">{stats.wasteGenerated.toLocaleString()} millones</div>
                <div className="flex items-center mt-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-xs text-muted-foreground">Toneladas de residuos generados al año en el mundo</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={1} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium">Tasa de Reciclaje Global</CardTitle>
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Recycle className="h-4 w-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold">{stats.recyclingRate}%</div>
                <div className="flex items-center mt-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-xs text-muted-foreground">De los residuos mundiales son reciclados</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={2} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium">Plástico en Océanos</CardTitle>
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Droplet className="h-4 w-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold">{stats.plasticOceans} millones</div>
                <div className="flex items-center mt-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-xs text-muted-foreground">Toneladas de plástico llegan a los océanos cada año</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={3} variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="border-2 hover:border-green-500 transition-all duration-300 hover:shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium">Deforestación Evitada</CardTitle>
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Leaf className="h-4 w-4 text-green-600" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold">{stats.deforestationSaved} mil</div>
                <div className="flex items-center mt-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-xs text-muted-foreground">Hectáreas de bosque salvadas por reciclaje de papel</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Fuentes: Banco Mundial, ONU Medio Ambiente, National Geographic, Environmental Paper Network
          </p>
        </div>
      </div>
    </section>
  )
}
