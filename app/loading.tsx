import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-rose-500 mx-auto mb-4" />
        <p className="text-stone">Cargando...</p>
      </div>
    </div>
  );
}

