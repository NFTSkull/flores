# Probar el Proyecto Localmente 🔧

Mientras esperas que Vercel termine el deploy, puedes probar el proyecto localmente:

## 🚀 Pasos para probar localmente

### 1. Asegúrate de estar en el directorio correcto

```bash
cd flores-devolada
```

### 2. Instala las dependencias (si no lo has hecho)

```bash
npm install
```

### 3. Inicia el servidor de desarrollo

```bash
npm run dev
```

### 4. Abre tu navegador

Ve a: **http://localhost:3000**

## ✅ Qué deberías ver

- **Página principal** con hero section rosa
- **Productos destacados** en grid
- **Navegación funcional**
- **Carrito** funcionando (sidebar)
- **Diseño responsive**

## 🧪 Prueba estas rutas

- http://localhost:3000/ - Home
- http://localhost:3000/tienda - Tienda
- http://localhost:3000/producto/ramo-rosas-clasico - Producto
- http://localhost:3000/checkout - Checkout
- http://localhost:3000/nuestra-historia - Historia
- http://localhost:3000/quienes-somos - Quiénes somos
- http://localhost:3000/que-hacemos - Qué hacemos
- http://localhost:3000/contacto - Contacto

## 🔍 Si hay errores

1. Verifica la consola del navegador
2. Verifica la terminal donde corre `npm run dev`
3. Verifica que todos los archivos estén presentes
4. Intenta borrar `.next` y volver a ejecutar `npm run dev`

## 📱 Funcionalidades

- ✅ Agregar productos al carrito
- ✅ Ver carrito (click en el ícono de bolsa)
- ✅ Navegación mobile responsive
- ✅ Productos con imágenes placeholder
- ✅ Precios en MXN

