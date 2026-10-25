<!-- app/pages/busqueda.vue -->
<script setup>
useHead({ title: 'Búsqueda' })

const entrada = ref('')
const consulta = ref('')
const campo = ref('titulo')

// La consulta se vuelve a ejecutar cuando cambia el texto buscado o el campo (Tutorial 5)
const { data: resultados } = await useAsyncData(
  'busqueda-libros',
  () => {
    if (!consulta.value) return Promise.resolve([])
    return queryCollection('libros')
      .where(campo.value, 'LIKE', `%${consulta.value}%`)
      .order('titulo', 'ASC')
      .all()
  },
  { watch: [consulta, campo] }
)

function buscar() {
  consulta.value = entrada.value.trim()
}
</script>

<template>
  <main>
    <p class="migas"><NuxtLink to="/">Inicio</NuxtLink> / Búsqueda</p>
    <h1>Buscar libros</h1>
    <form class="form-busqueda" @submit.prevent="buscar">
      <input v-model="entrada" type="search" placeholder="Palabras clave..." aria-label="Palabras clave">
      <select v-model="campo" aria-label="Buscar en">
        <option value="titulo">Título</option>
        <option value="autor">Autor</option>
        <option value="editorial">Editorial</option>
        <option value="descripcion">Descripción</option>
      </select>
      <button class="boton" type="submit">Buscar</button>
    </form>

    <p v-if="consulta">{{ resultados?.length || 0 }} resultado(s) para «{{ consulta }}».</p>
    <ul class="lista-libros">
      <LibroFila v-for="libro in resultados" :key="libro.num" :libro="libro" />
    </ul>
  </main>
</template>
