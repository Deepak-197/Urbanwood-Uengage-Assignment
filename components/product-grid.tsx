import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/data"
import { PackageOpen } from "lucide-react"
import Link from "next/link"

interface ProductGridProps {
  products: Product[]
  hasFilters: boolean
}

export function ProductGrid({ products, hasFilters }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card py-20 text-center">
        <PackageOpen className="mb-4 h-12 w-12 text-muted-foreground/50" />
        <h3 className="font-serif text-xl text-foreground">
          No products found
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          {hasFilters
            ? "Try adjusting your filters or search terms to find what you're looking for."
            : "No products are available at the moment. Check back soon!"}
        </p>
        {hasFilters && (
          <Link
            href="/products"
            className="mt-6 inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Clear all filters
          </Link>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index === 0} />
      ))}
    </div>
  )
}
