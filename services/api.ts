import { products, type Product, type Category } from "@/lib/data"

export interface ProductFilters {
  category?: Category | null
  search?: string | null
  minPrice?: number | null
  maxPrice?: number | null
  page?: number
  pageSize?: number
}

export interface PaginatedProducts {
  products: Product[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

/**
 * API abstraction layer for fetching products.
 * Simulates a server-side API with filtering and pagination.
 */
export function getProducts(filters: ProductFilters = {}): PaginatedProducts {
  const {
    category = null,
    search = null,
    minPrice = null,
    maxPrice = null,
    page = 1,
    pageSize = 8,
  } = filters

  let filtered = [...products]

  // Filter by category
  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    )
  }

  // Filter by search term
  if (search && search.trim()) {
    const searchLower = search.toLowerCase().trim()
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
    )
  }

  // Filter by price range
  if (minPrice !== null) {
    filtered = filtered.filter((p) => p.price >= minPrice)
  }
  if (maxPrice !== null) {
    filtered = filtered.filter((p) => p.price <= maxPrice)
  }

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  // Handle page overflow - clamp to valid range
  const validPage = Math.max(1, Math.min(page, totalPages))

  const start = (validPage - 1) * pageSize
  const paginatedProducts = filtered.slice(start, start + pageSize)

  return {
    products: paginatedProducts,
    total,
    page: validPage,
    pageSize,
    totalPages,
  }
}

/**
 * Fetch a single product by ID.
 */
export function getProductById(id: string): Product | null {
  return products.find((p) => p.id === id) || null
}

/**
 * Get related products by category, excluding current product.
 */
export function getRelatedProducts(
  productId: string,
  category: Category,
  limit: number = 4
): Product[] {
  return products
    .filter((p) => p.id !== productId && p.category === category)
    .slice(0, limit)
}

/**
 * Get featured products for the home page.
 */
export function getFeaturedProducts(limit: number = 6): Product[] {
  return products.filter((p) => p.featured).slice(0, limit)
}

/**
 * Get all available categories.
 */
export function getCategories(): Category[] {
  return ["Chair", "Table", "Sofa", "Bed"]
}
