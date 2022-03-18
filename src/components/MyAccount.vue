<template>
  <div class="w-64 mb-4 hover:bg-gray-600 hover:rounded-full p-2 duration-500 hover:cursor-pointer">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full" :src='user.userImgUrl' alt="Profile picture">
        <div class="ml-3">
          <p class="text-sm font-bold">{{ user.username }}</p>
          <p class="text-sm text-gray-400">@{{ user.userAccount }}</p>
        </div>
      </div>
      <img class="h-5 w-5 dark:invert" src="../assets/icons/more-horizontal.svg" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyAccount',
  props: ['user']
}
</script>