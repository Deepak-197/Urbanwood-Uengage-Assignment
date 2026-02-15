import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Truck, Shield, RotateCcw } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"
import { getProductById, getRelatedProducts } from "@/services/api"
import { products } from "@/lib/data"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | UrbanWood`,
      description: product.description,
      type: "website",
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `/products/${product.id}`,
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const related = getRelatedProducts(product.id, product.category, 4)

  // JSON-LD Structured Data for Product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://urbanwood.vercel.app${product.image}`,
    brand: {
      "@type": "Brand",
      name: "UrbanWood",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://urbanwood.vercel.app/products/${product.id}`,
    },
    category: product.category,
  }

  return (
    <>
      <SiteHeader />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/products"
                className="transition-colors hover:text-foreground"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/products?category=${product.category.toLowerCase()}`}
                className="transition-colors hover:text-foreground"
              >
                {product.category}s
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="truncate text-foreground" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product detail */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <Link
              href="/products"
              className="mb-4 inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to shop
            </Link>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {product.category}
            </span>

            <h1 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4 text-3xl font-semibold text-foreground">
              ${product.price.toLocaleString()}
            </p>

            <p className="mt-6 leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Free Shipping
                  </p>
                  <p className="text-xs text-muted-foreground">
                    On orders over $500
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    5-Year Warranty
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Full coverage
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    30-Day Returns
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Hassle-free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-8 font-serif text-2xl text-foreground">
              You might also like
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
