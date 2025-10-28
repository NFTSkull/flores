# 🔧 Solución para el 404: Configurar Root Directory en Vercel

## ❌ El Problema

Vercel está buscando tu proyecto en la raíz del repositorio, pero tu proyecto Next.js está en la subcarpeta `flores-devolada/`.

Estructura del repo:
```
Flores de Volada (repo root)
  └── flores-devolada/ (aquí está tu proyecto Next.js)
        ├── app/
        ├── package.json
        ├── next.config.ts
        └── ...
```

## ✅ Solución: 3 Pasos en Vercel

### 1. Ve a Settings en tu proyecto Vercel

1. Abre https://vercel.com
2. Selecciona tu proyecto **flores-devolada**
3. Ve a **Settings** → **General**

### 2. Configura el Root Directory

Busca la sección **"Root Directory"** y:

**IMPORTANTE: Configura `flores-devolada`** (sin la barra final)

```
flores-devolada
```

### 3. Verifica Build Settings

En la misma sección de Settings → **General**:

- ✅ **Framework Preset:** `Next.js`
- ✅ **Build Command:** (déjalo vacío o `next build`)
- ✅ **Output Directory:** (déjalo vacío)
- ✅ **Install Command:** (déjalo vacío o `npm install`)

### 4. Guarda y Redeploy

1. Haz clic en **"Save"**
2. Ve a la pestaña **"Deployments"**
3. Haz clic en los 3 puntos del último deployment
4. Selecciona **"Redeploy"**

## 🎯 Resultado Esperado

Después del redeploy, deberías ver:
- ✅ Build exitoso
- ✅ Deployment Ready
- ✅ Página cargando en la URL de Vercel

## 📍 Ubicación Exacta en Vercel Dashboard

```
Dashboard → Tu Proyecto → Settings → General
└── Root Directory: flores-devolada
```

## ⚠️ Si No Funciona

Si aún ves 404 después de estos pasos:
1. Verifica que el Root Directory sea exactamente: `flores-devolada`
2. No uses barra final: ❌ `flores-devolada/` ✅ `flores-devolada`
3. Verifica que estás guardando los cambios

