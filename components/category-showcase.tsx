import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categoriesData = [
  {
    name: "Chairs",
    slug: "chair",
    image: "/images/products/chair-1.jpg",
    count: "11 Designs",
  },
  {
    name: "Tables",
    slug: "table",
    image: "/images/products/table-1.jpg",
    count: "10 Designs",
  },
  {
    name: "Sofas",
    slug: "sofa",
    image: "/images/products/sofa-1.jpg",
    count: "10 Designs",
  },
  {
    name: "Beds",
    slug: "bed",
    image: "/images/products/bed-1.jpg",
    count: "10 Designs",
  },
]

export function CategoryShowcase() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Explore
          </p>
          <h2 className="text-balance font-serif text-3xl text-foreground md:text-4xl">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoriesData.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg"
            >
              <Image
                src={cat.image}
                alt={`${cat.name} collection`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/30 transition-colors group-hover:bg-foreground/40" />
              <div className="relative z-10 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
                  {cat.count}
                </p>
                <h3 className="mt-1 flex items-center gap-2 font-serif text-2xl text-primary-foreground">
                  {cat.name}
                  <ArrowRight className="h-5 w-5 translate-x-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
