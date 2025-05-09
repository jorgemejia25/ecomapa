import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, FileText, Scale } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LeyPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Ley de Reciclaje</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              La Ley de Reciclaje de Guatemala establece el marco legal para la
              gestión adecuada de residuos y promueve prácticas sostenibles de
              reciclaje en todo el país.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Aspectos clave de la ley
            </h2>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold flex items-center gap-2">
                  <Scale className="h-5 w-5 text-green-600" />
                  Responsabilidades ciudadanas
                </h3>
                <p className="mt-2">
                  La ley establece que todos los ciudadanos tienen la
                  responsabilidad de separar sus residuos adecuadamente y
                  participar en los programas de reciclaje disponibles en sus
                  comunidades.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-bold flex items-center gap-2">
                  <Scale className="h-5 w-5 text-green-600" />
                  Obligaciones empresariales
                </h3>
                <p className="mt-2">
                  Las empresas deben implementar planes de gestión de residuos,
                  reducir el uso de materiales no reciclables y participar en
                  programas de responsabilidad extendida del productor.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-bold flex items-center gap-2">
                  <Scale className="h-5 w-5 text-green-600" />
                  Incentivos fiscales
                </h3>
                <p className="mt-2">
                  La ley contempla incentivos fiscales para empresas y
                  organizaciones que implementen prácticas innovadoras de
                  reciclaje y reducción de residuos.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-bold flex items-center gap-2">
                  <Scale className="h-5 w-5 text-green-600" />
                  Sanciones por incumplimiento
                </h3>
                <p className="mt-2">
                  Se establecen sanciones administrativas y económicas para
                  quienes incumplan las disposiciones de la ley, incluyendo
                  multas y suspensión de actividades.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Preguntas frecuentes
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  ¿A quién aplica la Ley de Reciclaje?
                </AccordionTrigger>
                <AccordionContent>
                  La Ley de Reciclaje aplica a todos los ciudadanos, empresas,
                  instituciones públicas y privadas, y cualquier entidad que
                  genere residuos en el territorio guatemalteco.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  ¿Cuáles son las sanciones por incumplimiento?
                </AccordionTrigger>
                <AccordionContent>
                  Las sanciones varían según la gravedad de la infracción, desde
                  amonestaciones y multas económicas hasta la suspensión
                  temporal o definitiva de actividades para casos graves o
                  reincidentes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  ¿Existen incentivos para promover el reciclaje?
                </AccordionTrigger>
                <AccordionContent>
                  Sí, la ley contempla diversos incentivos, como reducciones
                  fiscales, acceso a financiamiento preferencial y
                  reconocimientos públicos para entidades que implementen
                  prácticas ejemplares de reciclaje.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  ¿Cómo se fiscaliza el cumplimiento de la ley?
                </AccordionTrigger>
                <AccordionContent>
                  El Ministerio de Ambiente y Recursos Naturales, junto con las
                  municipalidades, son los encargados de fiscalizar el
                  cumplimiento de la ley mediante inspecciones periódicas y
                  atención a denuncias ciudadanas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Documentos oficiales</CardTitle>
              <CardDescription>
                Accede a la legislación completa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="https://cedesyd.usac.edu.gt/wp-content/uploads/2025/02/ACUERDO-GUBERNATIVO-NO.-164-2021-Y-SUS-REFORMAS.pdf"
                className="justify-start mb-2"
              >
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Texto completo de la Ley de Reciclaje
                </Button>
              </a>
              <a href="https://gremiagro.com/wp-content/uploads/2023/08/AG-164-2021-Reglamento-para-la-Gestion-Integral-de-Residuos-y-Desechos-Solidos-Comunes.pdf">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Reglamento de aplicación
                </Button>
              </a>
              <a href="https://gremiagro.com/guia-practica-para-la-implementacion-del-cumplimiento-del-ag-164-2021-sobre-residuos-y-desechos-solidos/">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Guía de cumplimiento para empresas
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
