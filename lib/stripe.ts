import Stripe from "stripe";

// Solo inicializa Stripe si existe la clave (modo desarrollo sin claves)
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2025-09-30.clover",
    })
  : null;

