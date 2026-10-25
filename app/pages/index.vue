<!-- app/pages/index.vue -->
<script setup>
useHead({ title: 'Inicio' })

const { data: generos } = await useAsyncData('generos-inicio', () => {
  return queryCollection('generos').order('nombre', 'ASC').all()
})

const { data: total } = await useAsyncData('total-libros', () => {
  return queryCollection('libros').count()
})
</script>

<template>
  <main>
    <h1>Bienvenido a El Tintero</h1>
    <p>
      Contamos con {{ total }} títulos organizados por género. Elija un género para
      explorar el catálogo o utilice la <NuxtLink to="/busqueda">búsqueda</NuxtLink>
      por título, autor, editorial o descripción.
    </p>
    <h2>Géneros</h2>
    <ul>
      <li v-for="g in generos" :key="g.slug" style="margin-bottom: 10px">
        <NuxtLink :to="`/generos/${g.slug}`"><strong>{{ g.nombre }}</strong></NuxtLink><br>
        <span style="color: #666">{{ g.descripcion }}</span>
      </li>
    </ul>
  </main>
</template>
