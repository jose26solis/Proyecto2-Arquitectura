<!-- app/components/BotonComprar.vue -->
<!-- Botón de Snipcart: los atributos data-item-* le indican qué artículo agregar al carrito -->
<script setup>
defineProps({
  libro: { type: Object, required: true }
})
</script>

<template>
  <button
    class="boton snipcart-add-item"
    :data-item-id="`libro-${libro.num}`"
    :data-item-name="libro.titulo"
    :data-item-price="libro.precio"
    :data-item-url="`/libros/${libro.num}`"
    :data-item-description="`${libro.autor} · ${libro.editorial}`"
    :data-item-image="libro.portada"
  >
    Comprar
  </button>
</template>
