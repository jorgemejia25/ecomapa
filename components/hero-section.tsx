"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Animación de las letras
    const letters = document.querySelectorAll(".ecomapa-letter")
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.classList.add("animate-in")
      }, 100 * index)
    })
  }, [])

  return (
    <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-b from-green-800 via-green-600 to-green-500">
      {/* Efecto de luz radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>

      {/* Líneas decorativas */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Texto de introducción con animación */}
          <div
            className={`mb-6 transition-all duration-700 ${isLoaded ? "opacity-100" : "opacity-0 transform translate-y-4"}`}
          >
            <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white">
              Transformando el reciclaje en Guatemala
            </span>
          </div>

          {/* Nombre ECOMAPA destacado */}
          <h1 className="relative text-center mb-8">
            <span className="sr-only">ECOMAPA</span>
            <div className="flex justify-center items-center overflow-hidden h-24 sm:h-32 md:h-40">
              <div className="ecomapa-letter opacity-0 transform translate-y-8 transition-all duration-500 text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 tracking-tighter">
                E
              </div>
              <div className="ecomapa-letter opacity-0 transform translate-y-8 transition-all duration-500 text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 tracking-tighter">
                C
              </div>
              <div className="ecomapa-letter opacity-0 transform translate-y-8 transition-all duration-500 text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 tracking-tighter">
                O
              </div>
              <div className="ecomapa-letter opacity-0 transform translate-y-8 transition-all duration-500 text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 tracking-tighter">
                M
              </div>
              <div className="ecomapa-letter opacity-0 transform translate-y-8 transition-all duration-500 text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 tracking-tighter">
                A
              </div>
              <div className="ecomapa-letter opacity-0 transform translate-y-8 transition-all duration-500 text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 tracking-tighter">
                P
              </div>
              <div className="ecomapa-letter opacity-0 transform translate-y-8 transition-all duration-500 text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 tracking-tighter">
                A
              </div>
            </div>

            {/* Efecto de resplandor */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
          </h1>

          {/* Descripción con animación */}
          <div
            className={`max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100" : "opacity-0 transform translate-y-4"}`}
          >
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Descubre cómo reciclar correctamente y únete al movimiento que está cambiando el futuro de nuestro país.
            </p>
          </div>

          {/* Botón con animación */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-white/90 transition-all shadow-lg hover:shadow-xl group text-base"
            >
              <Link href="/separacion">
                Guía de separación
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Decoración inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <svg className="absolute bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fillOpacity="0.05"
                d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Estilos para la animación de las letras */}
      <style jsx>{`
        .ecomapa-letter.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
