// Gallery items backed by real photos of Lulu Animaciones.
//
// Photos live in `public/images/galeria/` as WebP at two sizes (640 and 1080
// px on the longest side), generated from the source photos (JPEG/PNG/WebP)
// in `fotos/` via:
//
//   pnpm images
//
// `src` points to the desktop-size version; `srcSet` lets the browser pick
// the right resolution. To add a new photo: drop it in `fotos/`, run
// `pnpm images`, then append an item below using its generated slug.
// HEIC files are never processed.

import { asset } from "../lib/asset"

export type GalleryCategory =
  | "pintacaritas"
  | "animacion"
  | "juegos"
  | "globoflexia"
  | "eventos"

export interface GalleryItem {
  id: string
  slug: string
  src: string
  srcSet?: string
  alt: string
  category: GalleryCategory
  caption: string
  // Layout weight: "wide" spans 2 columns, "tall" spans 2 rows on desktop.
  span?: "wide" | "tall"
}

export const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  pintacaritas: "Pintacaritas",
  animacion: "Animación",
  juegos: "Juegos y actividades",
  globoflexia: "Globoflexia",
  eventos: "Eventos y celebraciones",
}

function img(slug: string): string {
  return asset(`images/galeria/${slug}-1080.webp`)
}

function srcSet(slug: string): string {
  return `${asset(`images/galeria/${slug}-640.webp`)} 640w, ${asset(`images/galeria/${slug}-1080.webp`)} 1080w`
}

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    slug: "pintacarita-flores-rosa",
    src: img("pintacarita-flores-rosa"),
    srcSet: srcSet("pintacarita-flores-rosa"),
    alt: "Primer plano de un diseño de pintacaritas con flores rosadas y purpurina",
    category: "pintacaritas",
    caption: "Flores y purpurina",
    span: "tall",
  },
  {
    id: "g2",
    slug: "lulu-y-nina-feliz",
    src: img("lulu-y-nina-feliz"),
    srcSet: srcSet("lulu-y-nina-feliz"),
    alt: "Animadora de Lulu cargando a una niña pintada frente a un castillo inflable",
    category: "animacion",
    caption: "Animación en vivo",
    span: "wide",
  },
  {
    id: "g3",
    slug: "foto-grupal-nocturna",
    src: img("foto-grupal-nocturna"),
    srcSet: srcSet("foto-grupal-nocturna"),
    alt: "Grupo de invitados y animadora celebrando en una terraza nocturna",
    category: "eventos",
    caption: "Celebraciones grupales",
    span: "wide",
  },
  {
    id: "g4",
    slug: "pintacarita-diseno-violeta",
    src: img("pintacarita-diseno-violeta"),
    srcSet: srcSet("pintacarita-diseno-violeta"),
    alt: "Niña con un diseño de pintacaritas violeta y rosa con purpurina",
    category: "pintacaritas",
    caption: "Diseño artístico",
    span: "tall",
  },
  {
    id: "g5",
    slug: "pintacarita-brillo",
    src: img("pintacarita-brillo"),
    srcSet: srcSet("pintacarita-brillo"),
    alt: "Mujer con un diseño de brillos y purpurina en el rostro",
    category: "pintacaritas",
    caption: "Brillo para grandes y chicos",
  },
  {
    id: "g6",
    slug: "foto-grupal-grupo",
    src: img("foto-grupal-grupo"),
    srcSet: srcSet("foto-grupal-grupo"),
    alt: "Grupo grande de invitados posando en una celebración",
    category: "eventos",
    caption: "Eventos y celebraciones",
    span: "wide",
  },
  {
    id: "g7",
    slug: "pintacarita-estrellas",
    src: img("pintacarita-estrellas"),
    srcSet: srcSet("pintacarita-estrellas"),
    alt: "Niña con estrellas pintadas en el rostro y purpurina",
    category: "pintacaritas",
    caption: "Diseños personalizados",
    span: "tall",
  },
  {
    id: "g8",
    slug: "pintacarita-personaje",
    src: img("pintacarita-personaje"),
    srcSet: srcSet("pintacarita-personaje"),
    alt: "Niña con un diseño de pintacaritas de un pollito y su peluche",
    category: "pintacaritas",
    caption: "Personajes y animalitos",
  },
  {
    id: "g9",
    slug: "foto-grupal-familiar",
    src: img("foto-grupal-familiar"),
    srcSet: srcSet("foto-grupal-familiar"),
    alt: "Familia posando frente a un castillo inflable en una fiesta",
    category: "eventos",
    caption: "Fiestas familiares",
    span: "tall",
  },
  {
    id: "g10",
    slug: "pintacarita-estrellas-rosa",
    src: img("pintacarita-estrellas-rosa"),
    srcSet: srcSet("pintacarita-estrellas-rosa"),
    alt: "Niña con estrellas rosadas y purpurina en el rostro",
    category: "pintacaritas",
    caption: "Detalles a mano alzada",
  },
  {
    id: "g11",
    slug: "lulu-y-nina-pintacarita",
    src: img("lulu-y-nina-pintacarita"),
    srcSet: srcSet("lulu-y-nina-pintacarita"),
    alt: "Animadora de Lulu junto a una niña con pintacaritas morado",
    category: "pintacaritas",
    caption: "Pintacaritas en el evento",
    span: "wide",
  },
  {
    id: "g12",
    slug: "foto-grupal-disfraz",
    src: img("foto-grupal-disfraz"),
    srcSet: srcSet("foto-grupal-disfraz"),
    alt: "Animadora y grupo de invitados junto a un personaje disfrazado",
    category: "animacion",
    caption: "Animación con personajes",
    span: "wide",
  },
  {
    id: "g13",
    slug: "pintacarita-flores",
    src: img("pintacarita-flores"),
    srcSet: srcSet("pintacarita-flores"),
    alt: "Niña con flores rosadas pintadas en el rostro y un moño grande",
    category: "pintacaritas",
    caption: "Diseños personalizados",
  },
  {
    id: "g14",
    slug: "foto-grupal-tnt",
    src: img("foto-grupal-tnt"),
    srcSet: srcSet("foto-grupal-tnt"),
    alt: "Animadora e invitados frente a una decoración de globos para cumpleaños",
    category: "eventos",
    caption: "Cumpleaños temáticos",
    span: "tall",
  },
  {
    id: "g15",
    slug: "pintacarita-flores-magenta",
    src: img("pintacarita-flores-magenta"),
    srcSet: srcSet("pintacarita-flores-magenta"),
    alt: "Mujer joven con flores magenta pintadas en la mejilla",
    category: "pintacaritas",
    caption: "Pintacaritas artístico",
  },
  {
    id: "g16",
    slug: "lulu-y-pareja",
    src: img("lulu-y-pareja"),
    srcSet: srcSet("lulu-y-pareja"),
    alt: "Animadora de Lulu junto a una pareja frente a una decoración de globos",
    category: "eventos",
    caption: "Eventos y celebraciones",
  },
  {
    id: "g17",
    slug: "pintacarita-flores-naranjas",
    src: img("pintacarita-flores-naranjas"),
    srcSet: srcSet("pintacarita-flores-naranjas"),
    alt: "Mujer con flores naranjas y líneas blancas de pintacaritas",
    category: "pintacaritas",
    caption: "Detalle y color",
  },
  {
    id: "g18",
    slug: "lulu-y-baby-shower",
    src: img("lulu-y-baby-shower"),
    srcSet: srcSet("lulu-y-baby-shower"),
    alt: "Animadora de Lulu junto a la mamá en un baby shower",
    category: "eventos",
    caption: "Baby showers",
    span: "tall",
  },
  {
    id: "g19",
    slug: "pintacarita-flores-purpurina",
    src: img("pintacarita-flores-purpurina"),
    srcSet: srcSet("pintacarita-flores-purpurina"),
    alt: "Niña con flores rosadas y purpurina en el rostro",
    category: "pintacaritas",
    caption: "Flores con purpurina",
  },
  {
    id: "g20",
    slug: "globoflexia-1",
    src: img("globoflexia-1"),
    srcSet: srcSet("globoflexia-1"),
    alt: "Figuras de globoflexia en colores hechas para la celebración",
    category: "globoflexia",
    caption: "Globoflexia artística",
    span: "tall",
  },
  {
    id: "g21",
    slug: "globoflexia-2",
    src: img("globoflexia-2"),
    srcSet: srcSet("globoflexia-2"),
    alt: "Globo modelado por los juegos y actividades de Lulu",
    category: "globoflexia",
    caption: "Figuras para cada invitado",
    span: "wide",
  },
  {
    id: "g22",
    slug: "globoflexia-3",
    src: img("globoflexia-3"),
    srcSet: srcSet("globoflexia-3"),
    alt: "Bloque de globoflexia con colores de la paleta del evento",
    category: "globoflexia",
    caption: "Detalle y color",
  },
]

// A curated subset used on the home page preview (10 photos).
export const GALLERY_PREVIEW = GALLERY.slice(0, 10)
