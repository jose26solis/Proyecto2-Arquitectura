<!-- app/pages/libros/[num].vue -->
<script setup>
const route = useRoute()
const num = Number(route.params.num)

const { data: libro } = await useAsyncData(`libro-${num}`, () => {
  return queryCollection('libros').where('num', '=', num).first()
})

if (!libro.value) {
  throw createError({ statusCode: 404, statusMessage: 'Libro no encontrado' })
}

const { data: genero } = await useAsyncData(`genero-libro-${num}`, () => {
  return queryCollection('generos').where('slug', '=', libro.value.genero).first()
})

// Libro anterior y siguiente dentro del mismo género (Tutorial 7)
const { data: anterior } = await useAsyncData(`anterior-${num}`, () => {
  return queryCollection('libros')
    .where('genero', '=', libro.value.genero)
    .where('num', '<', num).order('num', 'DESC').first()
})

const { data: siguiente } = await useAsyncData(`siguiente-${num}`, () => {
  return queryCollection('libros')
    .where('genero', '=', libro.value.genero)
    .where('num', '>', num).order('num', 'ASC').first()
})

useHead({ title: libro.value.titulo })
</script>

<template>
  <main>
    <p class="migas">
      <NuxtLink to="/">Inicio</NuxtLink> /
      <NuxtLink to="/generos">Géneros</NuxtLink> /
      <NuxtLink :to="`/generos/${libro.genero}`">{{ genero?.nombre }}</NuxtLink> /
      {{ libro.titulo }}
    </p>
    <div class="detalle">
      <div>
        <img :src="libro.portada" :alt="`Portada de ${libro.titulo}`">
      </div>
      <div>
        <h1 style="margin-top: 0">{{ libro.titulo }}</h1>
        <p class="autor">por {{ libro.autor }}</p>
        <p>{{ libro.descripcion }}</p>
        <dl>
          <dt>Género</dt><dd>{{ genero?.nombre }}</dd>
          <dt>Editorial</dt><dd>{{ libro.editorial }}</dd>
          <dt>Año</dt><dd>{{ libro.anio }}</dd>
          <dt>Páginas</dt><dd>{{ libro.paginas }}</dd>
        </dl>
        <p class="precio">${{ libro.precio.toFixed(2) }}</p>
        <BotonComprar :libro="libro" />
      </div>
    </div>

    <div class="vecinos">
      <NuxtLink v-if="anterior" :to="`/libros/${anterior.num}`">« {{ anterior.titulo }}</NuxtLink>
      <span v-else />
      <NuxtLink v-if="siguiente" :to="`/libros/${siguiente.num}`">{{ siguiente.titulo }} »</NuxtLink>
    </div>

    <ComentariosLibro repo="jose26solis/Proyecto2-Arquitectura" />
  </main>
</template>
