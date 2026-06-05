import burger1 from "@/assets/burger-1.jpg";
import burger2 from "@/assets/burger-2.jpg";
import burger3 from "@/assets/burger-3.jpg";
import combo from "@/assets/combo.jpg";
import fries from "@/assets/fries.jpg";
import onionRings from "@/assets/onion-rings.jpg";
import drink from "@/assets/drink.jpg";

export const IMAGE_MAP: Record<string, string> = {
  "burger-1": burger1,
  "burger-2": burger2,
  "burger-3": burger3,
  combo: combo,
  fries: fries,
  "onion-rings": onionRings,
  drink: drink,
};

export const IMAGE_OPTIONS = Object.keys(IMAGE_MAP);

export const DEFAULT_CATEGORIES = ["Hambúrgueres", "Combos", "Porções", "Bebidas"];

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  ingredients: string;
  price: number;
  image: string;
  image_key: string;
  category: string;
  position: number;
  active: boolean;
}

export const resolveImage = (key: string) => IMAGE_MAP[key] ?? burger1;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "burger-classico",
    name: "Bola Burguer Clássico",
    description: "Hambúrguer artesanal suculento com queijo e molho da casa.",
    ingredients: "Pão brioche, blend bovino, queijo, alface, tomate e molho especial.",
    price: 24.9,
    image_key: "burger-1",
    image: resolveImage("burger-1"),
    category: "Hambúrgueres",
    position: 1,
    active: true,
  },
  {
    id: "burger-bacon",
    name: "Bola Bacon",
    description: "O clássico da casa com bacon crocante e cheddar.",
    ingredients: "Pão brioche, blend bovino, cheddar, bacon, cebola e molho especial.",
    price: 29.9,
    image_key: "burger-2",
    image: resolveImage("burger-2"),
    category: "Hambúrgueres",
    position: 2,
    active: true,
  },
  {
    id: "burger-premium",
    name: "Bola Premium",
    description: "Burger caprichado para quem quer matar a fome de verdade.",
    ingredients: "Pão brioche, dois blends, queijo, bacon, salada e molho da casa.",
    price: 36.9,
    image_key: "burger-3",
    image: resolveImage("burger-3"),
    category: "Hambúrgueres",
    position: 3,
    active: true,
  },
  {
    id: "combo-bola",
    name: "Combo Bola Burguer",
    description: "Hambúrguer, batata e bebida para completar o pedido.",
    ingredients: "Burger clássico, batata frita e refrigerante lata.",
    price: 39.9,
    image_key: "combo",
    image: resolveImage("combo"),
    category: "Combos",
    position: 4,
    active: true,
  },
  {
    id: "batata-frita",
    name: "Batata Frita",
    description: "Porção crocante para acompanhar seu lanche.",
    ingredients: "Batata frita sequinha com sal na medida.",
    price: 16.9,
    image_key: "fries",
    image: resolveImage("fries"),
    category: "Porções",
    position: 5,
    active: true,
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    description: "Anéis de cebola empanados e crocantes.",
    ingredients: "Cebola empanada, frita na hora.",
    price: 18.9,
    image_key: "onion-rings",
    image: resolveImage("onion-rings"),
    category: "Porções",
    position: 6,
    active: true,
  },
  {
    id: "refrigerante",
    name: "Refrigerante Lata",
    description: "Bebida gelada para acompanhar.",
    ingredients: "Consulte os sabores disponíveis pelo WhatsApp.",
    price: 6.9,
    image_key: "drink",
    image: resolveImage("drink"),
    category: "Bebidas",
    position: 7,
    active: true,
  },
];

export const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
