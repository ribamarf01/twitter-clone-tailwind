<template>
  <div class="flex flex-col items-center ml-8 w-80">
    <!-- Search Bar -->
    <div class="flex items-center w-full bg-relevant my-2 p-3 rounded-full">
      <img class="w-5 h-5 mr-4 " src="../assets/icons/search.svg" alt="Search icon">
      <input class="placeholder-gray-600 bg-transparent" type="text" placeholder="Search">
    </div>
    <!-- Trending -->
    <div class="flex flex-col bg-relevant w-full rounded-xl my-2">

      <span class="text-xl p-3 font-bold">What's happening</span>

      <div class="flex flex-col p-4 hover:bg-relevant-active hover:cursor-pointer duration-300">
        <span class="text-xs text-gray-600">Tech - Trending</span>
        <span class="text-sm font-bold">NFT</span>
        <span class="text-xs text-gray-600">7,800 tweets</span>
      </div>

      <a class="text-sm p-3 text-blue-500 hover:bg-relevant-active hover:cursor-pointer duration-300 rounded-b-xl" href="#">Show more</a>

    </div>
    <!-- Recomended people -->
    <div class="flex flex-col bg-relevant w-full rounded-xl my-2">

      <span class="text-xl p-3 font-bold">Who to follow</span>

      <div class="w-full mb-4 hover:bg-relevant-active p-2 duration-500 hover:cursor-pointer">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <img class="w-12 h-12 rounded-full" :src='userImgUrl' alt="Profile picture">
            <div class="ml-3">
              <p class="text-sm font-bold">{{ username }}</p>
              <p class="text-sm text-gray-400">@{{userAccount }}</p>
            </div>
          </div>
          <span class="dark:bg-white dark:text-black dark:hover:bg-gray-300 duration-500 font-bold text-sm px-4 py-2 rounded-full">Follow</span>
        </div>
      </div>  
    </div>
    
  </div>
</template>

<script>

export default {
  data: () => ({
    username: 'Ribamar Filho',
    userAccount: 'ribamar.f01',
    userImgUrl: 'https://avatars.githubusercontent.com/u/54405190?v=4'
  })
}

</script>