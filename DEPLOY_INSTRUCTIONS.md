# Instrucciones para subir a GitHub y desplegar en Vercel

## Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `mercado-pago-bricks-app`
3. Descripción: "React app with Mercado Pago Bricks integration"
4. Selecciona "Public" o "Private"
5. NO inicialices con README (ya tenemos uno)
6. Haz clic en "Create repository"

## Paso 2: Conectar y subir el código

Ejecuta estos comandos en la terminal:

```bash
cd /Users/mateocunha/Desarrollo/proyects/mercado-pago-bricks/CascadeProjects/windsurf-project/mercado-pago-bricks-app

# Agregar el remote de GitHub (reemplaza 'mateocunha' con tu usuario si es diferente)
git remote add origin https://github.com/mateocunha/mercado-pago-bricks-app.git

# Subir el código
git push -u origin master
```

Cuando te pida credenciales, usa:
- Username: mateocunha1@gmail.com
- Password: Tu Personal Access Token (NO tu contraseña)

### Crear Personal Access Token:
1. Ve a https://github.com/settings/tokens
2. Click en "Generate new token" > "Generate new token (classic)"
3. Nombre: "Vercel Deploy"
4. Selecciona: `repo` (todos los permisos de repositorio)
5. Click en "Generate token"
6. COPIA el token (solo se muestra una vez)

## Paso 3: Desplegar en Vercel

1. Ve a https://vercel.com
2. Haz clic en "Add New" > "Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto React
5. Haz clic en "Deploy"

¡Listo! Tu app estará disponible en una URL de Vercel.

## Alternativa: Usar GitHub CLI

Si tienes GitHub CLI instalado:

```bash
gh repo create mercado-pago-bricks-app --public --source=. --remote=origin --push
```
