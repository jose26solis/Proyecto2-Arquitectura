<!-- app/components/EncabezadoSitio.vue -->
<template>
  <header class="sitio">
    <NuxtLink to="/" class="marca">📚 Librería El Tintero</NuxtLink>
    <p class="lema">Historias para cada lector</p>
    <nav class="principal">
      <NuxtLink to="/">Inicio</NuxtLink>
      <NuxtLink to="/generos">Géneros</NuxtLink>
      <NuxtLink to="/busqueda">Búsqueda</NuxtLink>
      <button class="enlace-carrito snipcart-checkout">
        Mi carrito · <span class="snipcart-items-count">0</span> libros ·
        <span class="snipcart-total-price">$0.00</span>
      </button>
    </nav>
  </header>
</template>
