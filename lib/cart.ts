import { cookies } from "next/headers";
import { Product } from "./products";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
};

const COOKIE_NAME = "flores-cart";

export async function getCart(): Promise<Cart> {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get(COOKIE_NAME);
  
  if (!cartCookie) {
    return { items: [] };
  }

  try {
    return JSON.parse(cartCookie.value);
  } catch {
    return { items: [] };
  }
}

export async function addToCart(product: Product, quantity: number = 1): Promise<void> {
  const cart = await getCart();
  const existingItem = cart.items.find((item) => item.product.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product, quantity });
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify(cart), {
    maxAge: 60 * 60 * 24 * 30, // 30 días
    path: "/",
  });
}

export async function removeFromCart(productId: string): Promise<void> {
  const cart = await getCart();
  cart.items = cart.items.filter((item) => item.product.id !== productId);

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify(cart), {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
}

export async function updateCartQuantity(productId: string, quantity: number): Promise<void> {
  if (quantity <= 0) {
    return removeFromCart(productId);
  }

  const cart = await getCart();
  const item = cart.items.find((item) => item.product.id === productId);

  if (item) {
    item.quantity = quantity;
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, JSON.stringify(cart), {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
}

export async function clearCart(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export function getTotalPrice(cart: Cart): number {
  return cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export function getTotalItems(cart: Cart): number {
  return cart.items.reduce((total, item) => total + item.quantity, 0);
}

