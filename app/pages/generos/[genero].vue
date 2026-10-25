<!-- app/pages/generos/[genero].vue -->
<script setup>
const LIBROS_POR_PAGINA = 3

const route = useRoute()
const slug = route.params.genero

const { data: genero } = await useAsyncData(`genero-${slug}`, () => {
  return queryCollection('generos').where('slug', '=', slug).first()
})

if (!genero.value) {
  throw createError({ statusCode: 404, statusMessage: 'Género no encontrado' })
}

const { data: libros } = await useAsyncData(`libros-genero-${slug}`, () => {
  return queryCollection('libros').where('genero', '=', slug).order('titulo', 'ASC').all()
})

// Paginación: se avanza y retrocede entre páginas sin volver a consultar la colección
const pagina = ref(1)
const totalPaginas = computed(() => Math.ceil((libros.value?.length || 0) / LIBROS_POR_PAGINA))
const librosPagina = computed(() => {
  const inicio = (pagina.value - 1) * LIBROS_POR_PAGINA
  return (libros.value || []).slice(inicio, inicio + LIBROS_POR_PAGINA)
})

function anterior() { if (pagina.value > 1) pagina.value-- }
function siguiente() { if (pagina.value < totalPaginas.value) pagina.value++ }

useHead({ title: genero.value.nombre })
</script>

<template>
  <main>
    <p class="migas">
      <NuxtLink to="/">Inicio</NuxtLink> / <NuxtLink to="/generos">Géneros</NuxtLink> / {{ genero.nombre }}
    </p>
    <h1>{{ genero.nombre }}</h1>
    <p>{{ genero.descripcion }} — {{ libros.length }} títulos.</p>

    <ul class="lista-libros">
      <LibroFila v-for="libro in librosPagina" :key="libro.num" :libro="libro" />
    </ul>

    <div class="paginacion">
      <button class="boton boton-secundario" :disabled="pagina === 1" @click="anterior">« Anterior</button>
      <span>Página {{ pagina }} de {{ totalPaginas }}</span>
      <button class="boton boton-secundario" :disabled="pagina === totalPaginas" @click="siguiente">Siguiente »</button>
    </div>
  </main>
</template>
