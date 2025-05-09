import "@/app/globals.css";

import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import type React from "react";
import { Recycle } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ECOMAPA - Promoviendo el reciclaje en Guatemala",
  description: "Plataforma interactiva para promover el reciclaje en Guatemala",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-xl"
                >
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Recycle className="h-5 w-5 text-green-600" />
                  </div>
                  <span>ECOMAPA</span>
                </Link>
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center gap-2">
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 shadow-sm hover:shadow-md transition-all"
                  >
                    <Link href="/separacion">Separación</Link>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-8 md:py-12 bg-gray-50 dark:bg-gray-950">
              <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">ECOMAPA</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/about"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Sobre nosotros
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/equipo"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Nuestro equipo
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/historia"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Historia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Recursos</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/separacion"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Guía de separación
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/educacion"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Educación ambiental
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/ley"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Ley de reciclaje
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/terminos"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Términos de uso
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacidad"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Política de privacidad
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/cookies"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Política de cookies
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/contacto"
                          className="text-sm text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          Formulario de contacto
                        </Link>
                      </li>
                      <li>
                        <span className="text-sm text-muted-foreground">
                          info@ecomapa.gt
                        </span>
                      </li>
                      <li>
                        <span className="text-sm text-muted-foreground">
                          +502 2222-3333
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t">
                  <p className="text-center text-sm text-muted-foreground md:text-left">
                    © 2023 ECOMAPA. Todos los derechos reservados.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-green-600"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-green-600"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-green-600"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
