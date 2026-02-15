import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { CategoryShowcase } from "@/components/category-showcase"
import { getFeaturedProducts } from "@/services/api"

export default function HomePage() {
  const featured = getFeaturedProducts(6)

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedProducts products={featured} />
        <CategoryShowcase />

        {/* Brand Promise */}
        <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Sustainably Sourced",
                description:
                  "All our wood is responsibly sourced from certified sustainable forests, ensuring minimal environmental impact.",
              },
              {
                title: "Handcrafted Quality",
                description:
                  "Each piece is built by skilled artisans using time-honoured joinery techniques for furniture that lasts generations.",
              },
              {
                title: "Modern Design",
                description:
                  "Clean lines and timeless aesthetics that complement any interior, from contemporary lofts to classic homes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-8 text-center"
              >
                <h3 className="font-serif text-xl text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
