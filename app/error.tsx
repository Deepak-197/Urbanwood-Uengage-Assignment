"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AlertTriangle, RotateCcw } from "lucide-react"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <AlertTriangle className="mb-4 h-12 w-12 text-destructive/60" />
        <h1 className="font-serif text-3xl text-foreground">
          Something went wrong
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          An unexpected error occurred. Please try again or return to the home
          page.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <RotateCcw className="h-4 w-4" />
          Try again
        </button>
      </main>
      <SiteFooter />
    </>
  )
}
