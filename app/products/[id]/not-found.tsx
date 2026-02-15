import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, PackageX } from "lucide-react"

export default function ProductNotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <PackageX className="mb-4 h-12 w-12 text-muted-foreground/40" />
        <h1 className="font-serif text-3xl text-foreground">
          Product Not Found
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          This product does not exist or the ID is invalid. Please check the URL
          or browse our collection.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Browse Products
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Go Home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
