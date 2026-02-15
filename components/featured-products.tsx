import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/data"

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Curated Selection
          </p>
          <h2 className="text-balance font-serif text-3xl text-foreground md:text-4xl">
            Featured Pieces
          </h2>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-accent transition-colors hover:text-accent/80"
        >
          View all products
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} priority={index < 3} />
        ))}
      </div>
    </section>
  )
}
