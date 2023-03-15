<template>
  <div class="bg-bg-primary">
    <SiteNavigation />
    <RouterView class="min-h-[100vh]" />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
</script>

<style></style>
