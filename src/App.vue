<script setup lang="ts">
import { RouterView } from 'vue-router';
import { usePokemonsStore } from '@/stores/pokemons';
const pokemonsStore = usePokemonsStore();
pokemonsStore.initList();
</script>

<template>
  <div id="app">
    <h1>vue-pinia-router-test</h1>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  border: 1px solid red;
  padding: 20px;
}
</style>
