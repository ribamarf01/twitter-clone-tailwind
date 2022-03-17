<template>
  <div class="w-full h-screen flex justify-center dark:bg-black dark:text-white">
    <div class="mr-4">
      <LeftNavigation />
    </div>
    <div class="w-1/3 min-w-max border-2 border-white">Content</div>
    <div class="">
      <Suggestions />
    </div>
  </div>
</template>

<script>
import LeftNavigation from './components/LeftNavigation.vue';
import Suggestions from './components/Suggestions.vue';

export default {
  components: { LeftNavigation, Suggestions }
}

</script>