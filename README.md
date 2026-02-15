# UrbanWood – Furniture Brand Website

A modern furniture e-commerce prototype built using Next.js (App Router) and Tailwind CSS.  
This project demonstrates:

- SEO implementation
- Server-side rendering (SSR)
- Pagination with URL sync
- Shared filters (category, price, search)
- Clean state management
- Responsive UI
- Performance optimization

---

## 🪵 Project Overview

UrbanWood is a mini furniture brand website featuring:

- **Home Page**: Hero section + Featured products (4–6)
- **Product Listing Page**: Filters, search, server-side pagination
- **Product Detail Page**: Dynamic SEO, structured data (JSON-LD)
- **Responsive UI**: Tailwind CSS
- **SEO-friendly**: Server-side rendering ensures search engines can crawl content

---

SEO Approach

SEO is implemented using Next.js App Router to ensure server-rendered, crawlable content.

Dynamic Metadata:
Each product page uses generateMetadata() to set:

<title>

<meta description>

Open Graph tags (og:title, og:description, og:image, og:url)

Structured Data (JSON-LD):
Added product schema to detail pages to enable rich snippets in search engines.

Canonical URLs:
Ensures no duplicate content indexing when filters or pagination parameters are present.

Server-Side Rendering:
Product listing and detail pages are SSR to guarantee that content is crawlable by search engines and SEO-friendly.

📄 Pagination Logic

Server-side Pagination:
Product listing page fetches only the current page data from server (SSR).

Page Size: 8 products per page

URL-driven State:
Pagination is controlled via query parameters:

/products?category=chair&search=wood&page=2


Features:

Resets page to 1 when filters change

Handles invalid page numbers or overflow

Preserves filters on refresh

Back/forward navigation works correctly

No redundant API calls

🧠 State Management Decision

URL as Single Source of Truth:
Filters (category, search) and pagination (page) are managed via query parameters.

Server Components:
Data fetching and filtering are handled in server components (SSR) to reduce client JS bundle and improve performance.

Client Components:
Only update filters and pagination UI.

Debounced search implemented to avoid excessive renders

No global state library (Redux/Context) used

Benefits:

Predictable behavior

Shareable links

Minimal client-side re-renders

Clean architecture with no prop drilling

⚖️ Trade-offs Made

Mock JSON Data Instead of Database:

Simpler setup

Demonstrates pagination & filtering

In production, would replace with database queries

SSR over CSR:

Slightly higher server cost

Ensures SEO-friendly, crawlable pages

No Global State Library (Redux/Context):

URL-driven state preferred for cleaner architecture

Avoids unnecessary complexity

Basic Filters Only:

Category, search, and price implemented

Shows fundamentals clearly without over-engineering

ISR Not Used:

SSR chosen because filters and query params change dynamically

Gives full control of server-side data and SEO
