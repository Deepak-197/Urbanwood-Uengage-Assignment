export type Category = "Chair" | "Table" | "Sofa" | "Bed"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: Category
  image: string
  featured: boolean
}

export const products: Product[] = [
  // ──── CHAIRS ────
  {
    id: "1",
    name: "Nordic Oak Dining Chair",
    description:
      "A beautifully crafted dining chair made from solid Nordic oak. Features a curved backrest for ergonomic comfort and tapered legs for a timeless mid-century aesthetic. Perfect for both dining rooms and home offices.",
    price: 349,
    category: "Chair",
    image: "/images/products/chair-1.jpg",
    featured: true,
  },
  {
    id: "5",
    name: "Ash Lounge Armchair",
    description:
      "An elegant lounge armchair with a natural ash wood frame and padded cushion seat. The gentle curves and wide armrests offer exceptional comfort for reading or relaxation.",
    price: 599,
    category: "Chair",
    image: "/images/products/chair-2.jpg",
    featured: true,
  },
  {
    id: "9",
    name: "Teak Rocking Chair",
    description:
      "A handcrafted rocking chair made from natural teak wood with a traditional woven seat. The artisanal craftsmanship and smooth rocking motion make it a treasured piece for porches and living rooms.",
    price: 449,
    category: "Chair",
    image: "/images/products/chair-3.jpg",
    featured: false,
  },
  {
    id: "11",
    name: "Maple Windsor Chair",
    description:
      "A modern interpretation of the classic Windsor chair, crafted from sustainably sourced maple. The spindle back and sculpted seat provide exceptional comfort and timeless style.",
    price: 399,
    category: "Chair",
    image: "/images/products/chair-1.jpg",
    featured: false,
  },
  {
    id: "15",
    name: "Bentwood Bistro Chair",
    description:
      "A lightweight bistro chair featuring a classic bentwood construction in beech. The curved forms and compact size make it a versatile choice for kitchens, cafes, and dining areas.",
    price: 279,
    category: "Chair",
    image: "/images/products/chair-2.jpg",
    featured: false,
  },
  {
    id: "19",
    name: "Cherry Wood Desk Chair",
    description:
      "An ergonomic desk chair in polished cherry wood with a padded leather seat. The swivel base and adjustable height make it a refined choice for home offices and studies.",
    price: 529,
    category: "Chair",
    image: "/images/products/chair-3.jpg",
    featured: false,
  },
  {
    id: "21",
    name: "Elm Stacking Chair",
    description:
      "A practical stacking chair crafted from solid elm with a slatted backrest. Lightweight and durable, ideal for dining rooms that need flexible seating for guests.",
    price: 249,
    category: "Chair",
    image: "/images/products/chair-1.jpg",
    featured: false,
  },
  {
    id: "22",
    name: "Walnut Accent Chair",
    description:
      "A sculptural accent chair in American walnut with a deep curved shell seat. The organic silhouette makes it a striking statement piece for living rooms and entryways.",
    price: 729,
    category: "Chair",
    image: "/images/products/chair-2.jpg",
    featured: false,
  },
  {
    id: "23",
    name: "Oak Folding Chair",
    description:
      "A beautifully engineered folding chair in European oak. Folds flat for easy storage while maintaining a refined look when unfolded, perfect for small-space living.",
    price: 199,
    category: "Chair",
    image: "/images/products/chair-3.jpg",
    featured: false,
  },
  {
    id: "24",
    name: "Birch Dining Chair",
    description:
      "A Scandinavian-inspired dining chair in natural birch with a woven paper cord seat. The clean lines and warm tones create a welcoming dining atmosphere.",
    price: 319,
    category: "Chair",
    image: "/images/products/chair-1.jpg",
    featured: false,
  },
  {
    id: "25",
    name: "Mahogany Club Chair",
    description:
      "A luxurious club chair with a solid mahogany frame and premium leather upholstery. The deep seat and wide proportions make it perfect for libraries and lounges.",
    price: 1199,
    category: "Chair",
    image: "/images/products/chair-2.jpg",
    featured: false,
  },

  // ──── TABLES ────
  {
    id: "2",
    name: "Walnut Dining Table",
    description:
      "A stunning rectangular dining table crafted from premium American walnut. The rich grain pattern and tapered legs bring warmth and sophistication to any dining space. Seats six comfortably.",
    price: 1299,
    category: "Table",
    image: "/images/products/table-1.jpg",
    featured: true,
  },
  {
    id: "6",
    name: "Round Oak Coffee Table",
    description:
      "A charming round coffee table in solid oak with three sculptural legs. The organic shape and natural finish add a warm, Scandinavian touch to any living area.",
    price: 549,
    category: "Table",
    image: "/images/products/table-2.jpg",
    featured: true,
  },
  {
    id: "10",
    name: "Ash Nightstand",
    description:
      "A modern nightstand crafted from solid ash wood with a single drawer. The minimalist design and compact footprint make it ideal for bedside use in contemporary bedrooms.",
    price: 299,
    category: "Table",
    image: "/images/products/table-3.jpg",
    featured: false,
  },
  {
    id: "12",
    name: "Oak Extendable Table",
    description:
      "A versatile dining table in European oak with a clever extension leaf mechanism. Seats four in compact mode and up to eight when extended, making it perfect for both daily meals and entertaining.",
    price: 1599,
    category: "Table",
    image: "/images/products/table-1.jpg",
    featured: false,
  },
  {
    id: "16",
    name: "Marble Top Console Table",
    description:
      "An elegant console table with a polished marble top and solid oak legs. The combination of natural stone and warm wood creates a striking entryway or living room accent piece.",
    price: 899,
    category: "Table",
    image: "/images/products/table-2.jpg",
    featured: false,
  },
  {
    id: "20",
    name: "Live Edge Dining Table",
    description:
      "A dramatic dining table featuring a live-edge walnut slab with natural bark detail. Each piece is unique, showcasing the raw beauty of the wood grain. Seats eight comfortably.",
    price: 2499,
    category: "Table",
    image: "/images/products/table-1.jpg",
    featured: false,
  },
  {
    id: "26",
    name: "Teak Outdoor Table",
    description:
      "A weather-resistant outdoor dining table crafted from Grade-A teak. The slatted top allows rainwater to drain, while the natural oils protect against the elements year after year.",
    price: 1899,
    category: "Table",
    image: "/images/products/table-2.jpg",
    featured: false,
  },
  {
    id: "27",
    name: "Cherry Writing Desk",
    description:
      "A refined writing desk in polished cherry wood with two dovetail drawers. The classic proportions and rich colour make it a distinguished addition to any home office or study.",
    price: 979,
    category: "Table",
    image: "/images/products/table-3.jpg",
    featured: false,
  },
  {
    id: "28",
    name: "Pine Farmhouse Table",
    description:
      "A rustic farmhouse table in reclaimed pine with a breadboard edge. The distressed finish and thick plank top bring character and warmth to country-style kitchens.",
    price: 1099,
    category: "Table",
    image: "/images/products/table-1.jpg",
    featured: false,
  },
  {
    id: "29",
    name: "Bamboo Nesting Tables",
    description:
      "A set of three nesting tables in natural bamboo with brass-tipped legs. Stack together to save space or spread apart for versatile surface area wherever you need it.",
    price: 449,
    category: "Table",
    image: "/images/products/table-2.jpg",
    featured: false,
  },

  // ──── SOFAS ────
  {
    id: "3",
    name: "Linen Lounge Sofa",
    description:
      "A luxurious mid-century modern sofa featuring a solid hardwood frame and premium linen upholstery in a warm beige tone. The clean lines and generous proportions make it the centrepiece of any living room.",
    price: 2199,
    category: "Sofa",
    image: "/images/products/sofa-1.jpg",
    featured: true,
  },
  {
    id: "7",
    name: "Charcoal Modern Sofa",
    description:
      "A sleek 3-seater sofa with wooden legs and premium charcoal grey fabric. The tailored silhouette and firm cushions provide both style and lasting comfort for everyday living.",
    price: 1899,
    category: "Sofa",
    image: "/images/products/sofa-2.jpg",
    featured: true,
  },
  {
    id: "13",
    name: "Velvet Accent Sofa",
    description:
      "A compact two-seater sofa with solid wood legs and plush velvet upholstery. Ideal for smaller living spaces, studies, or reading nooks where style and comfort are equally important.",
    price: 1499,
    category: "Sofa",
    image: "/images/products/sofa-1.jpg",
    featured: false,
  },
  {
    id: "17",
    name: "Sectional Corner Sofa",
    description:
      "A modular sectional sofa with wooden base and premium woven fabric. The L-shaped design offers generous seating while the reversible chaise allows flexible room arrangements.",
    price: 2899,
    category: "Sofa",
    image: "/images/products/sofa-2.jpg",
    featured: false,
  },
  {
    id: "30",
    name: "Leather Club Sofa",
    description:
      "A classic club-style sofa with a solid oak frame and full-grain leather upholstery. The deep cushions and rolled arms evoke timeless elegance for dens and formal living rooms.",
    price: 3199,
    category: "Sofa",
    image: "/images/products/sofa-1.jpg",
    featured: false,
  },
  {
    id: "31",
    name: "Scandinavian Daybed Sofa",
    description:
      "A versatile daybed sofa with a birch frame and removable cotton covers. Functions as both a sofa and a guest bed, making it perfect for studios and multi-purpose rooms.",
    price: 1699,
    category: "Sofa",
    image: "/images/products/sofa-2.jpg",
    featured: false,
  },
  {
    id: "32",
    name: "Boucle Curved Sofa",
    description:
      "A statement curved sofa in textured boucle fabric with walnut dowel legs. The organic shape creates a welcoming conversation area and adds sculptural interest to any space.",
    price: 2599,
    category: "Sofa",
    image: "/images/products/sofa-1.jpg",
    featured: false,
  },
  {
    id: "33",
    name: "Compact Studio Sofa",
    description:
      "A space-conscious sofa designed for apartment living, with a slim ash wood frame and high-density foam cushions. The narrow depth fits tight spaces without sacrificing comfort.",
    price: 1249,
    category: "Sofa",
    image: "/images/products/sofa-2.jpg",
    featured: false,
  },
  {
    id: "34",
    name: "Outdoor Teak Sofa",
    description:
      "A weather-proof outdoor sofa with a Grade-A teak frame and Sunbrella fabric cushions. Built to endure the elements while maintaining indoor-level comfort on patios and decks.",
    price: 2799,
    category: "Sofa",
    image: "/images/products/sofa-1.jpg",
    featured: false,
  },
  {
    id: "35",
    name: "Mid-Century Loveseat",
    description:
      "A petite two-seater loveseat inspired by 1960s Danish design. The oak frame and wool-blend upholstery create a cozy nook for bedrooms, hallways, or window bays.",
    price: 1399,
    category: "Sofa",
    image: "/images/products/sofa-2.jpg",
    featured: false,
  },

  // ──── BEDS ────
  {
    id: "4",
    name: "Oak Platform Bed",
    description:
      "A minimalist platform bed frame constructed from solid European oak. The low-profile design and integrated headboard create a serene, contemporary bedroom aesthetic. Available in queen and king sizes.",
    price: 1899,
    category: "Bed",
    image: "/images/products/bed-1.jpg",
    featured: true,
  },
  {
    id: "8",
    name: "Walnut King Bed",
    description:
      "A king-size bed frame in rich walnut with a distinctive slatted headboard. The warm wood tones and mid-century modern lines bring character and warmth to the master bedroom.",
    price: 2299,
    category: "Bed",
    image: "/images/products/bed-2.jpg",
    featured: false,
  },
  {
    id: "14",
    name: "Pine Cabin Bed",
    description:
      "A rustic cabin-style bed frame in natural pine with a solid headboard. The warm, knotty grain and sturdy construction bring a cozy, lodge-inspired feel to the bedroom.",
    price: 1299,
    category: "Bed",
    image: "/images/products/bed-1.jpg",
    featured: false,
  },
  {
    id: "18",
    name: "Bamboo Canopy Bed",
    description:
      "A statement canopy bed frame crafted from natural bamboo. The four-poster design and organic material create a serene, tropical-inspired retreat in any bedroom.",
    price: 2599,
    category: "Bed",
    image: "/images/products/bed-2.jpg",
    featured: false,
  },
  {
    id: "36",
    name: "Ash Storage Bed",
    description:
      "A practical storage bed in solid ash with hydraulic-lift slats that reveal a spacious underbed compartment. Perfect for bedrooms that need extra storage without extra furniture.",
    price: 2099,
    category: "Bed",
    image: "/images/products/bed-1.jpg",
    featured: false,
  },
  {
    id: "37",
    name: "Cherry Sleigh Bed",
    description:
      "A classic sleigh bed in polished cherry wood with a scrolled headboard and footboard. The rich colour and elegant curves make it a grand focal point in traditional bedrooms.",
    price: 2799,
    category: "Bed",
    image: "/images/products/bed-2.jpg",
    featured: false,
  },
  {
    id: "38",
    name: "Minimalist Birch Bed",
    description:
      "An ultra-low platform bed in natural birch with a slim floating frame. The pared-back design and light wood tone bring calm, Japandi-inspired simplicity to the bedroom.",
    price: 1599,
    category: "Bed",
    image: "/images/products/bed-1.jpg",
    featured: false,
  },
  {
    id: "39",
    name: "Upholstered Oak Bed",
    description:
      "A luxurious bed combining a solid oak frame with a padded linen headboard. The marriage of wood and fabric creates a warm, inviting centrepiece for restful nights.",
    price: 2399,
    category: "Bed",
    image: "/images/products/bed-2.jpg",
    featured: false,
  },
  {
    id: "40",
    name: "Reclaimed Teak Bed",
    description:
      "An eco-friendly bed frame built from reclaimed teak planks, each carrying unique patina and character. A sustainable choice that brings warmth and story to the bedroom.",
    price: 1999,
    category: "Bed",
    image: "/images/products/bed-1.jpg",
    featured: false,
  },
  {
    id: "41",
    name: "Maple Trundle Bed",
    description:
      "A clever trundle bed in natural maple with a pull-out guest bed hidden beneath. Ideal for children's rooms and guest bedrooms where space is at a premium.",
    price: 1749,
    category: "Bed",
    image: "/images/products/bed-2.jpg",
    featured: false,
  },
]
