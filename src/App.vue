<template>
  <div class="w-full h-screen flex justify-center dark:bg-black dark:text-white">
    <div class="w-1/6">
      <LeftNavigation />
    </div>
    <div class="w-1/3 border-2 border-white">Content</div>
    <div class="w-1/6">Suggestions</div>
  </div>
</template>

<script>
import LeftNavigation from './components/LeftNavigation.vue';

export default {
  components: { LeftNavigation }
}

</script>