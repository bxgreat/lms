import { GraduationCap } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { APP_NAME } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <header className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span>{APP_NAME}</span>
        </div>
        <ThemeToggle />
      </header>

      <section className="container flex flex-1 flex-col items-center justify-center text-center">
        <span className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          Tahap 1 — Foundation
        </span>
        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          {APP_NAME} —{" "}
          <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-balance text-muted-foreground">
          Modern learning management system for online courses. Built with
          Next.js 14, Tailwind, shadcn/ui, Prisma, and TanStack Query.
        </p>
      </section>

      <footer className="container py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </footer>
    </main>
  );
}
