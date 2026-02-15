import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/lib/data"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  product: Product
  priority?: boolean
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {product.category}
        </span>
        <h3 className="font-serif text-lg leading-snug text-card-foreground transition-colors group-hover:text-accent">
          {product.name}
        </h3>
        <p className="mt-auto flex items-center justify-between pt-2">
          <span className="text-base font-semibold text-card-foreground">
            ${product.price.toLocaleString()}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-accent opacity-0 transition-opacity group-hover:opacity-100">
            View
            <ArrowRight className="h-3 w-3" />
          </span>
        </p>
      </div>
    </Link>
  )
}
