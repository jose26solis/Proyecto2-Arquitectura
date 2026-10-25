<!-- app/components/ComentariosLibro.vue -->
<!-- Utterances (Tutorial 8): los comentarios se cargan sólo cuando el lector los solicita -->
<script setup>
const props = defineProps({
  repo: { type: String, required: true }
})

const visible = ref(false)
const contenedor = ref(null)
const route = useRoute()

function cargarComentarios() {
  if (!contenedor.value) return
  contenedor.value.innerHTML = ''
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('repo', props.repo)
  script.setAttribute('issue-term', 'pathname')
  script.setAttribute('label', 'comments')
  script.setAttribute('theme', 'github-light')
  contenedor.value.appendChild(script)
}

async function mostrar() {
  visible.value = true
  await nextTick()
  cargarComentarios()
}

// Al cambiar de libro se ocultan los comentarios del anterior
watch(() => route.path, () => { visible.value = false })
</script>

<template>
  <section>
    <h2>Comentarios de lectores</h2>
    <button v-if="!visible" class="boton boton-secundario" @click="mostrar">Ver comentarios</button>
    <div v-if="visible" ref="contenedor" />
  </section>
</template>
