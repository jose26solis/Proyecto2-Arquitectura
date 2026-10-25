# Proyecto 2 — Librería El Tintero (Tienda de libros)

Aplicación de comercio electrónico en **Nuxt 4 + Nuxt Content**, con carrito **Snipcart** y comentarios **Utterances**.

## Cómo cumple el enunciado

| Requisito | Implementación |
|---|---|
| Catálogo de ≥ 30 artículos en JSON | 36 libros en `data/libros.json` (título, autor, descripción, género, portada, precio, editorial, año, páginas) |
| Listas de categorías | 6 géneros en `data/generos.json` |
| Carga de los JSON | Fuentes personalizadas con `defineCollectionSource` en `content.config.ts` (Tutorial 5, "arreglo JSON con muchos registros") |
| Organización por categorías | `/generos` presenta los géneros → `/generos/[genero]` lista sus libros → `/libros/[num]` muestra el detalle (con libro anterior/siguiente del mismo género) |
| Búsqueda | `/busqueda`: palabras clave + selección del campo (título, autor, editorial o descripción), consulta `LIKE` que se re-ejecuta con `watch` (Tutorial 5) |
| Paginación | 3 libros por página; botones **Anterior** / **Siguiente** e indicador "Página X de Y" |
| Snipcart | Botón **Comprar** en cada libro (`BotonComprar.vue`) y botón **Mi carrito** (cantidad y total) en el menú principal |
| Utterances | `ComentariosLibro.vue` en el detalle de cada libro; los comentarios se cargan al presionar **Ver comentarios** (ejercicio del Tutorial 8) |

## Ejecutar localmente

```
npm install
npm run dev
```
Abrir http://localhost:3000

## Configuración antes de publicar

1. **Snipcart**: crear cuenta en snipcart.com, copiar la *Public API Key* (modo Test) y pegarla en
   `app/app.vue` (constante `SNIPCART_API_KEY`). En el dashboard de Snipcart, en *Domains & URLs*,
   agregar el dominio de Netlify del sitio.
2. **Utterances**: el repositorio `jose26solis/Proyecto2-Arquitectura` debe ser público; instalar
   la aplicación desde https://github.com/apps/utterances en ese repositorio.

## Publicación en Netlify

Subir el proyecto a GitHub y conectarlo en Netlify:
- Branch to deploy: `main`
- Build command: `npm run build`
- Publish directory: `dist`

## Estructura

```
data/libros.json, data/generos.json   catálogo (volcado JSON)
public/portadas/                      portadas
app/assets/css/main.css               estilos del sitio
app/app.vue                           encabezado, pie y carga de Snipcart
app/components/                       EncabezadoSitio, PieSitio, LibroFila, BotonComprar, ComentariosLibro
app/pages/                            index, busqueda, generos/index, generos/[genero], libros/[num]
```
