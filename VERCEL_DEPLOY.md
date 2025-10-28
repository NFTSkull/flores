# Instrucciones para Forzar Rebuild en Vercel

El error de `lib/stripe.ts` persiste porque Vercel está usando caché de builds anteriores.

## Solución: Forzar Rebuild SIN Caché

1. Ve a: https://vercel.com

2. Selecciona tu proyecto **Flores DeVolada**

3. Ve a la pestaña **Deployments**

4. Busca el deployment más reciente (estado: "Failed")

5. Haz clic en los **3 puntos** (...) a la derecha

6. Selecciona **"Redeploy"**

7. En el modal que aparece:
   - ✅ **Marca la opción "Use existing Build Cache"** - **NO MARCADA**
   - Haz clic en **"Redeploy"**

Esto forzará a Vercel a hacer un build completamente nuevo sin usar caché.

## Alternativa: Cambiar Settings

1. Ve a **Settings** → **General**
2. Busca **"Clean Builds"**
3. Activa la opción
4. Haz un nuevo deploy

## Verificar

Después del deploy, verifica que:
- ✅ Build exitoso
- ✅ Sin errores de `lib/stripe.ts`
- ✅ La página carga correctamente

