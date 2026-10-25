<!-- app/app.vue -->
<script setup>
// Snipcart se agrega al documento una vez que la aplicación se monta en el navegador.
// Reemplazar por la API Key pública (modo Test) de su cuenta de Snipcart.
const SNIPCART_API_KEY = 'REEMPLAZAR_CON_SU_API_KEY_PUBLICA'

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
