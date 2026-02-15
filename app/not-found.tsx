import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-7xl font-bold text-muted-foreground/20">404</p>
        <h1 className="mt-4 font-serif text-3xl text-foreground">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you are looking for does not exist or the product ID is
          invalid.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Browse Products
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
