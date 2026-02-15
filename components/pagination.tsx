"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useCallback, useTransition } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  total: number
}

export function Pagination({ currentPage, totalPages, total }: PaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const goToPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams.toString())
      if (page <= 1) {
        params.delete("page")
      } else {
        params.set("page", String(page))
      }
      const queryString = params.toString()
      startTransition(() => {
        router.push(`${pathname}${queryString ? `?${queryString}` : ""}`, {
          scroll: false,
        })
      })
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
    [router, pathname, searchParams]
  )

  if (totalPages <= 1) return null

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | "...")[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push("...")
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i)
      }
      if (currentPage < totalPages - 2) pages.push("...")
      pages.push(totalPages)
    }
    return pages
  }

  return (
    <nav
      className="flex flex-col items-center gap-4 pt-8"
      aria-label="Product pagination"
    >
      <p className="text-sm text-muted-foreground">
        Showing page {currentPage} of {totalPages} ({total} products)
      </p>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1 || isPending}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm transition-colors",
            currentPage <= 1
              ? "cursor-not-allowed opacity-40"
              : "hover:bg-muted"
          )}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {getPageNumbers().map((page, i) =>
          page === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="flex h-9 w-9 items-center justify-center text-sm text-muted-foreground"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              disabled={isPending}
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors",
                page === currentPage
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border hover:bg-muted"
              )}
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= totalPages || isPending}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm transition-colors",
            currentPage >= totalPages
              ? "cursor-not-allowed opacity-40"
              : "hover:bg-muted"
          )}
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </nav>
  )
}
