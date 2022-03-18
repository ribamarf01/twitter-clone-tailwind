<template>
  <li class="flex items-center my-2 font-semibold w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
    <img class="w-6 h-6 mr-2 dark:invert" :src="imageSrc" :alt="alt">
    <span class="ml-2 font-lg">{{ name }}</span>
  </li>
</template>

<script>

export default {
  name: 'NavItem',
  props: ['name', 'icon', 'alt'],
  computed: {
    imageSrc() {
      return `src/assets/icons/${this.icon}.svg`
    }
  }
}

</script>