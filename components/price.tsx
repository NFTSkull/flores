import { cn } from "@/lib/utils";

interface PriceProps {
  price: number; // precio en centavos
  className?: string;
  showCurrency?: boolean;
}

export function Price({ price, className, showCurrency = true }: PriceProps) {
  const formattedPrice = price / 100; // convertir centavos a pesos

  return (
    <span className={cn("font-semibold", className)}>
      {showCurrency && "$"}
      {formattedPrice.toLocaleString("es-MX", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
    </span>
  );
}

