import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { Pagination } from "@/components/pagination"
import { getProducts } from "@/services/api"
import type { Category } from "@/lib/data"

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string
    search?: string
    minPrice?: string
    maxPrice?: string
    page?: string
  }>
}

export async function generateMetadata({
  searchParams,
}: ProductsPageProps): Promise<Metadata> {
  const params = await searchParams
  const category = params.category
  const search = params.search

  let title = "Shop All Furniture"
  let description =
    "Browse our complete collection of handcrafted wooden furniture. Chairs, tables, sofas, and beds made with sustainable materials."

  if (category) {
    const catLabel =
      category.charAt(0).toUpperCase() + category.slice(1) + "s"
    title = `${catLabel} Collection`
    description = `Discover our curated collection of ${category}s. Premium handcrafted ${category}s designed for modern living.`
  }

  if (search) {
    title = `Search: "${search}"`
    description = `Search results for "${search}" in our furniture collection.`
  }

  return {
    title,
    description,
    openGraph: {
      title: `${title} | UrbanWood`,
      description,
      type: "website",
    },
    alternates: {
      canonical: "/products",
    },
  }
}

function ProductsContent({
  category,
  search,
  minPrice,
  maxPrice,
  page,
}: {
  category?: string
  search?: string
  minPrice?: string
  maxPrice?: string
  page?: string
}) {
  const pageNum = Math.max(1, parseInt(page || "1", 10) || 1)

  const validCategories = ["chair", "table", "sofa", "bed"]
  const validCategory =
    category && validCategories.includes(category.toLowerCase())
      ? (category.charAt(0).toUpperCase() +
          category.slice(1).toLowerCase()) as Category
      : null

  const result = getProducts({
    category: validCategory,
    search: search || null,
    minPrice: minPrice ? Number(minPrice) : null,
    maxPrice: maxPrice ? Number(maxPrice) : null,
    page: pageNum,
    pageSize: 8,
  })

  const hasFilters = !!(category || search || minPrice || maxPrice)

  return (
    <>
      <ProductGrid products={result.products} hasFilters={hasFilters} />
      <Pagination
        currentPage={result.page}
        totalPages={result.totalPages}
        total={result.total}
      />
    </>
  )
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-balance font-serif text-3xl text-foreground md:text-4xl">
            {params.category
              ? `${params.category.charAt(0).toUpperCase() + params.category.slice(1)}s`
              : "All Furniture"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {params.search
              ? `Showing results for "${params.search}"`
              : "Explore our handcrafted collection"}
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filters sidebar */}
          <div className="w-full flex-shrink-0 lg:w-72">
            <Suspense fallback={null}>
              <ProductFilters />
            </Suspense>
          </div>

          {/* Product grid + pagination */}
          <div className="flex-1">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square animate-pulse rounded-lg bg-muted"
                    />
                  ))}
                </div>
              }
            >
              <ProductsContent
                category={params.category}
                search={params.search}
                minPrice={params.minPrice}
                maxPrice={params.maxPrice}
                page={params.page}
              />
            </Suspense>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
