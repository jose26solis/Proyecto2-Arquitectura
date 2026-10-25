// content.config.ts
// El catálogo se mantiene como un volcado JSON (un arreglo por archivo, como lo
// entregaría un CMS headless) y se indexa con defineCollectionSource (Tutorial 5).
import { defineCollection, defineCollectionSource, defineContentConfig, z } from '@nuxt/content'
import libros from './data/libros.json'
import generos from './data/generos.json'

// Nota: en la versión actual de Nuxt Content cada clave debe terminar en .json
// (para que el módulo sepa cómo interpretar el registro) y getItem debe devolver
// el registro como texto JSON.
const librosSource = defineCollectionSource({
  getKeys: () => libros.map(item => `${item.num}.json`),
  getItem: (key) => JSON.stringify(libros.find(item => `${item.num}.json` === key))
})

const generosSource = defineCollectionSource({
  getKeys: () => generos.map(item => `${item.slug}.json`),
  getItem: (key) => JSON.stringify(generos.find(item => `${item.slug}.json` === key))
})

export default defineContentConfig({
  collections: {
    libros: defineCollection({
      type: 'data',
      source: librosSource,
      schema: z.object({
        num: z.number(),
        titulo: z.string(),
        autor: z.string(),
        genero: z.string(),
        editorial: z.string(),
        anio: z.number(),
        paginas: z.number(),
        precio: z.number(),
        descripcion: z.string(),
        portada: z.string()
      })
    }),
    generos: defineCollection({
      type: 'data',
      source: generosSource,
      schema: z.object({
        slug: z.string(),
        nombre: z.string(),
        descripcion: z.string()
      })
    })
  }
})
