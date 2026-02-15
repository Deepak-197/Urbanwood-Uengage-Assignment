"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCallback, useState, useEffect, useTransition } from "react"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["Chair", "Table", "Sofa", "Bed"] as const

const priceRanges = [
  { label: "All Prices", min: null, max: null },
  { label: "Under $500", min: null, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "$1000 - $2000", min: 1000, max: 2000 },
  { label: "Over $2000", min: 2000, max: null },
] as const

export function ProductFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const currentCategory = searchParams.get("category") || ""
  const currentSearch = searchParams.get("search") || ""
  const currentMinPrice = searchParams.get("minPrice") || ""
  const currentMaxPrice = searchParams.get("maxPrice") || ""

  const [searchInput, setSearchInput] = useState(currentSearch)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Sync search input when URL changes externally (back/forward)
  useEffect(() => {
    setSearchInput(currentSearch)
  }, [currentSearch])

  const updateFilters = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString())

      // Reset page to 1 when any filter changes
      params.delete("page")

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") {
          params.delete(key)
        } else {
          params.set(key, value)
        }
      })

      const queryString = params.toString()
      startTransition(() => {
        router.push(`${pathname}${queryString ? `?${queryString}` : ""}`)
      })
    },
    [router, pathname, searchParams]
  )

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== currentSearch) {
        updateFilters({ search: searchInput || null })
      }
    }, 400)
    return () => clearTimeout(timer)
  }, [searchInput, currentSearch, updateFilters])

  const handleCategoryChange = (cat: string) => {
    updateFilters({
      category: currentCategory === cat.toLowerCase() ? null : cat.toLowerCase(),
    })
  }

  const handlePriceChange = (min: number | null, max: number | null) => {
    updateFilters({
      minPrice: min !== null ? String(min) : null,
      maxPrice: max !== null ? String(max) : null,
    })
  }

  const clearAllFilters = () => {
    setSearchInput("")
    startTransition(() => {
      router.push(pathname)
    })
  }

  const hasActiveFilters =
    currentCategory || currentSearch || currentMinPrice || currentMaxPrice

  const currentPriceLabel =
    priceRanges.find(
      (r) =>
        String(r.min ?? "") === currentMinPrice &&
        String(r.max ?? "") === currentMaxPrice
    )?.label || "All Prices"

  const filterContent = (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div>
        <label
          htmlFor="search-products"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
        >
          Search
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="search-products"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search furniture..."
            className="h-10 w-full rounded-md border border-input bg-background py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => setSearchInput("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category */}
      <div>
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Category
        </span>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                currentCategory === cat.toLowerCase()
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background text-foreground hover:border-accent hover:text-accent"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Price Range
        </span>
        <div className="flex flex-col gap-1.5">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              type="button"
              onClick={() => handlePriceChange(range.min, range.max)}
              className={cn(
                "rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                currentPriceLabel === range.label
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear All */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={clearAllFilters}
          className="flex items-center gap-1.5 text-sm font-medium text-destructive transition-colors hover:text-destructive/80"
        >
          <X className="h-3.5 w-3.5" />
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile filter toggle */}
      <div className="mb-4 flex items-center justify-between lg:hidden">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          aria-expanded={mobileFiltersOpen}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {hasActiveFilters && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
              !
            </span>
          )}
        </button>
        {isPending && (
          <span className="text-xs text-muted-foreground">Loading...</span>
        )}
      </div>

      {/* Mobile filters */}
      {mobileFiltersOpen && (
        <div className="mb-6 rounded-lg border border-border bg-card p-4 lg:hidden">
          {filterContent}
        </div>
      )}

      {/* Desktop filters */}
      <aside
        className="hidden lg:block"
        aria-label="Product filters"
      >
        <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground">
              Filters
            </h2>
            {isPending && (
              <span className="text-xs text-muted-foreground">Loading...</span>
            )}
          </div>
          {filterContent}
        </div>
      </aside>
    </>
  )
}
