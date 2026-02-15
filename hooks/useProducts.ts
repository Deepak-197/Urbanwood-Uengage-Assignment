"use client"

import { useSearchParams } from "next/navigation"
import { useMemo } from "react"
import type { Category } from "@/lib/data"

/**
 * Custom hook to extract and validate product filter state from URL search params.
 * Acts as a single source of truth for filter values used by both the filter sidebar
 * and the product grid. Avoids prop drilling by letting any component read the
 * current filter state directly from the URL.
 */
export function useProducts() {
  const searchParams = useSearchParams()

  const filters = useMemo(() => {
    const categoryRaw = searchParams.get("category") || ""
    const search = searchParams.get("search") || ""
    const minPrice = searchParams.get("minPrice") || ""
    const maxPrice = searchParams.get("maxPrice") || ""
    const pageRaw = searchParams.get("page") || "1"

    const validCategories = ["chair", "table", "sofa", "bed"]
    const category =
      categoryRaw && validCategories.includes(categoryRaw.toLowerCase())
        ? (categoryRaw.charAt(0).toUpperCase() +
            categoryRaw.slice(1).toLowerCase())
        : null

    const page = Math.max(1, parseInt(pageRaw, 10) || 1)

    return {
      category: category as Category | null,
      search: search || null,
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
      page,
    }
  }, [searchParams])

  const hasActiveFilters = !!(
    filters.category ||
    filters.search ||
    filters.minPrice !== null ||
    filters.maxPrice !== null
  )

  return {
    filters,
    hasActiveFilters,
  }
}
