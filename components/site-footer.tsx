import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <span className="font-serif text-2xl tracking-tight">
              UrbanWood
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Handcrafted modern furniture designed for living. Sustainable
              materials, timeless design.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Shop All
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              Categories
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {["Chair", "Table", "Sofa", "Bed"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?category=${cat.toLowerCase()}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {cat}s
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          &copy; {new Date().getFullYear()} UrbanWood. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
