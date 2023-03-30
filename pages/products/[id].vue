<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const runtimeConfig = useRuntimeConfig();
const uri = `${runtimeConfig.public.fakeStoreApiUrl}products/${id}`;

// Le key sert de dépendance, si sa valeur change le fetch ce relance, mais bon apparemment ca marche sans...
const { data: product } = await useFetch(uri, { key: id });
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
