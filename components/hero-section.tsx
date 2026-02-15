import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Modern living room with UrbanWood furniture"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
            Handcrafted Furniture
          </p>
          <h1 className="text-balance font-serif text-5xl leading-tight text-primary-foreground md:text-7xl md:leading-[1.1]">
            Crafted for modern living
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
            Timeless wooden furniture designed with care. Each piece tells a
            story of sustainable craftsmanship and enduring style.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Shop Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products?category=chair"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Browse Chairs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
