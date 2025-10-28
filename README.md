# Flores DeVolada 🌹

Tienda en línea de flores con estética rosa elegante, construida con Next.js 14, TypeScript y TailwindCSS.

## 🚀 Características

- ✨ Catálogo de productos con filtros
- 🛒 Carrito de compras persistente
- 💳 Checkout simulado (Stripe pendiente de configurar)
- 📱 Diseño responsive y moderno
- 🎨 Estética rosa elegante
- 🔍 Optimizado para SEO

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS
- **UI Components:** shadcn/ui
- **Iconos:** lucide-react
- **Pagos:** Stripe Checkout (deshabilitado temporalmente)
- **Fuentes:** Playfair Display + Inter

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en producción
npm start
```

## 🔐 Variables de Entorno

Actualmente no se requieren variables de entorno para el funcionamiento básico.

**Nota:** Para habilitar Stripe Checkout en el futuro, configura:

```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
SITE_URL=https://flores-devolada.vercel.app
```

## 🌐 Despliegue en Vercel

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/NFTSkull/flores.git
   cd flores
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno en Vercel:**
   - Ve a tu proyecto en [Vercel](https://vercel.com)
   - Ve a Settings → Environment Variables
   - Agrega las variables de entorno listadas arriba

4. **Configura el webhook de Stripe:**
   - En el Dashboard de Stripe, ve a Developers → Webhooks
   - Agrega un nuevo endpoint: `https://tu-dominio.vercel.app/api/webhooks/stripe`
   - Selecciona el evento: `checkout.session.completed`
   - Copia el secret y agrégarlo a las variables de entorno en Vercel

5. **Despliega:**
   ```bash
   vercel --prod
   ```

## 📁 Estructura del Proyecto

```
app/
  (store)/          # Páginas de la tienda
  (info)/           # Páginas informativas
  api/              # API routes (checkout, cart, webhooks)
components/         # Componentes React
lib/                # Utilidades y datos semilla
public/images/      # Imágenes de productos
```

## 🛣️ Rutas Principales

- `/` - Home con hero y productos destacados
- `/tienda` - Catálogo completo con filtros
- `/producto/[slug]` - Ficha de producto
- `/checkout` - Proceso de pago
- `/exito` - Página de pago exitoso
- `/cancelado` - Página de pago cancelado
- `/nuestra-historia` - Información sobre la empresa
- `/quienes-somos` - Acerca de nosotros
- `/que-hacemos` - Servicios
- `/contacto` - Formulario de contacto

## 🎨 Paleta de Colores

- **Rose:** `#EC4899`, `#F472B6`, `#FBCFE8`, etc.
- **Accent:** `#DB2777`
- **Ink:** `#111827`
- **Stone:** `#6B7280`
- **Paper:** `#FFFAFC`

## 📝 Licencia

Todos los derechos reservados © 2025 Flores DeVolada
