<!-- app/app.vue -->
<script setup>
const SNIPCART_API_KEY = 'ZmNkZjhjY2YtM2RhNi00ZTJiLWI1NTUtM2Q0NTUxYWY1ODc5NjM5Mjg0ODU0MTkyMTgxNDIw'

onMounted(() => {
  if (document.getElementById('snipcart')) return
  const contenedor = document.createElement('div')
  contenedor.id = 'snipcart'
  contenedor.hidden = true
  contenedor.setAttribute('data-api-key', SNIPCART_API_KEY)
  contenedor.setAttribute('data-currency', 'usd')
  document.body.appendChild(contenedor)

  const script = document.createElement('script')
  script.src = 'https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <div class="contenedor">
    <EncabezadoSitio />
    <NuxtPage />
    <PieSitio />
  </div>
</template>
