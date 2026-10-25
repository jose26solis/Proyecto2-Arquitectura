<!-- app/components/LibroFila.vue -->
<script setup>
defineProps({
  libro: { type: Object, required: true }
})
</script>

<template>
  <li>
    <NuxtLink :to="`/libros/${libro.num}`">
      <img :src="libro.portada" :alt="`Portada de ${libro.titulo}`">
    </NuxtLink>
    <div class="info">
      <h3><NuxtLink :to="`/libros/${libro.num}`">{{ libro.titulo }}</NuxtLink></h3>
      <p class="autor">{{ libro.autor }} · {{ libro.anio }}</p>
      <p style="margin: 0 0 8px">{{ libro.descripcion }}</p>
      <span class="precio">${{ libro.precio.toFixed(2) }}</span>
      &nbsp;
      <BotonComprar :libro="libro" />
    </div>
  </li>
</template>
