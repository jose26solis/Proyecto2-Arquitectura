<!-- app/pages/generos/index.vue -->
<script setup>
useHead({ title: 'Géneros' })

const { data: generos } = await useAsyncData('generos-lista', () => {
  return queryCollection('generos').order('nombre', 'ASC').all()
})
</script>

<template>
  <main>
    <p class="migas"><NuxtLink to="/">Inicio</NuxtLink> / Géneros</p>
    <h1>Géneros literarios</h1>
    <ul>
      <li v-for="g in generos" :key="g.slug" style="margin-bottom: 10px">
        <NuxtLink :to="`/generos/${g.slug}`"><strong>{{ g.nombre }}</strong></NuxtLink> —
        {{ g.descripcion }}
      </li>
    </ul>
  </main>
</template>
