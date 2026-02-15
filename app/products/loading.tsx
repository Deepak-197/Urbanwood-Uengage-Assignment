import { SiteHeader } from "@/components/site-header"

export default function ProductsLoading() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-8">
          <div className="h-9 w-48 animate-pulse rounded bg-muted" />
          <div className="mt-2 h-5 w-64 animate-pulse rounded bg-muted" />
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filters skeleton */}
          <div className="hidden w-72 flex-shrink-0 lg:block">
            <div className="h-96 animate-pulse rounded-lg bg-muted" />
          </div>
          {/* Grid skeleton */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex flex-col overflow-hidden rounded-lg border border-border">
                  <div className="aspect-square animate-pulse bg-muted" />
                  <div className="flex flex-col gap-2 p-4">
                    <div className="h-3 w-16 animate-pulse rounded bg-muted" />
                    <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
                    <div className="h-5 w-20 animate-pulse rounded bg-muted" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
