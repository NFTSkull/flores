export type ProductCategory = 
  | "cumpleaños" 
  | "ocasiones" 
  | "flores-y-plantas" 
  | "postres" 
  | "personalizados" 
  | "regalos";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // en centavos MXN
  images: string[];
  tags: string[]; // ["ramos", "eventos", "san-valentin", etc]
  category: ProductCategory; // Categoría principal del producto
};

export const products: Product[] = [
  {
    id: "ramo-rosas-clasico",
    slug: "ramo-rosas-clasico",
    name: "Ramo de Rosas Clásico",
    description: "Doce rosas premium con follaje y envoltura elegante.",
    price: 89900,
    images: ["/images/rosas-clasico.jpg"],
    tags: ["ramos", "clasicos", "san-valentin"],
    category: "flores-y-plantas",
  },
  {
    id: "bouquet-peonia-blush",
    slug: "bouquet-peonia-blush",
    name: "Bouquet Peonía Blush",
    description: "Composición romántica en tonos blush con peonías y eucalipto.",
    price: 159900,
    images: ["/images/peonia-blush.jpg"],
    tags: ["ramos", "premium", "eventos"],
    category: "ocasiones",
  },
  {
    id: "caja-mixta-amor",
    slug: "caja-mixta-amor",
    name: "Caja Mixta Amor",
    description: "Flores mixtas en caja rígida; opción de agregar peluche y/o pastel.",
    price: 129900,
    images: ["/images/caja-amor.jpg"],
    tags: ["cajas", "regalos", "san-valentin"],
    category: "regalos",
  },
  {
    id: "arreglo-tulipanes",
    slug: "arreglo-tulipanes",
    name: "Arreglo de Tulipanes",
    description: "Arreglo vibrante con tulipanes multicolor, perfecto para alegrar cualquier espacio.",
    price: 74900,
    images: ["/images/tulipanes.jpg"],
    tags: ["ramos", "colorido"],
    category: "flores-y-plantas",
  },
  {
    id: "centro-mesa-elegante",
    slug: "centro-mesa-elegante",
    name: "Centro de Mesa Elegante",
    description: "Centro de mesa para eventos con rosas blancas y verdes.",
    price: 219900,
    images: ["/images/centro-mesa.jpg"],
    tags: ["eventos", "premium"],
    category: "ocasiones",
  },
  {
    id: "ramo-girasoles",
    slug: "ramo-girasoles",
    name: "Ramo de Girasoles",
    description: "Bouquet brillante de girasoles que ilumina cualquier día.",
    price: 89900,
    images: ["/images/girasoles.jpg"],
    tags: ["ramos", "colorido"],
    category: "cumpleaños",
  },
];

