<template>
  <div class="w-full h-screen flex justify-center dark:bg-black dark:text-white">
    
    <div class="mr-4">
      <LeftNavigation />
    </div>

    <div class="w-1/3 border-x-[thin] border-gray-700">
      <MainView />
    </div>

    <div class="">
      <Suggestions />
    </div>

  </div>
</template>

<script>
import LeftNavigation from './components/LeftNavigation.vue';
import Suggestions from './components/Suggestions.vue';
import MainView from './components/MainView.vue';

export default {
  components: { LeftNavigation, Suggestions, MainView }
}

</script>