import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn(className)} {...props}>
      <div className="items-center space-x-6 lg:space-x-8 hidden md:flex">
        <Link
          href="/separacion"
          className="text-sm font-medium transition-colors hover:text-green-600 relative group"
        >
          Separación
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/educacion"
          className="text-sm font-medium transition-colors hover:text-green-600 relative group"
        >
          Educación
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/ley"
          className="text-sm font-medium transition-colors hover:text-green-600 relative group"
        >
          Ley de Reciclaje
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link
          href="/reglamento"
          className="text-sm font-medium transition-colors hover:text-green-600 relative group"
        >
          Reglamento
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>
    </nav>
  );
}
