import { SiteHeader } from "@/components/site-header"

export default function ProductDetailLoading() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Breadcrumb skeleton */}
        <div className="mb-8 flex items-center gap-2">
          <div className="h-4 w-12 animate-pulse rounded bg-muted" />
          <span className="text-muted-foreground">/</span>
          <div className="h-4 w-16 animate-pulse rounded bg-muted" />
          <span className="text-muted-foreground">/</span>
          <div className="h-4 w-32 animate-pulse rounded bg-muted" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Image skeleton */}
          <div className="aspect-square animate-pulse rounded-lg bg-muted" />

          {/* Info skeleton */}
          <div className="flex flex-col gap-4">
            <div className="h-4 w-20 animate-pulse rounded bg-muted" />
            <div className="h-3 w-16 animate-pulse rounded bg-muted" />
            <div className="h-9 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-8 w-24 animate-pulse rounded bg-muted" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
            </div>
            <div className="mt-6 flex gap-3">
              <div className="h-12 flex-1 animate-pulse rounded-md bg-muted" />
              <div className="h-12 flex-1 animate-pulse rounded-md bg-muted" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
