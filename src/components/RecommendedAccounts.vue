<template>
  <div v-for="account in recommendedAccounts" :key="account.userAccount" class="w-full hover:bg-relevant-active p-2 pr-4 duration-500 hover:cursor-pointer">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img class="w-12 h-12 rounded-full" :src='account.userImgUrl' alt="Profile picture">
        <div class="ml-3">
          <p class="text-sm font-bold">{{ account.username }}</p>
          <p class="text-sm text-gray-400">@{{ account.userAccount }}</p>
        </div>
      </div>
      <span class="dark:bg-white dark:text-black dark:hover:bg-gray-300 duration-500 font-bold text-sm px-4 py-2 rounded-full">
        Follow
      </span>
    </div>
  </div>  
</template>

<script>

export default {
  name: 'RecommendedAccounts',
  props: ['recommendedAccounts']
}

</script>