<template>
  <!-- Tweet Compose -->
  <div class="flex flex-row flex-wrap">
    <span class="text-xl font-extrabold mb-3 mt-3 px-3 w-full">Home</span>
    <div class="flex w-full px-3 border-b-[thin] border-b-gray-600 py-2">
      <img class="w-12 h-12 mr-3 rounded-full" :src="userImgUrl" alt="user photo">
      <div class="flex flex-col w-full">
        <textarea class="w-full p-3 max-h-min placeholder-gray-600 border-b-gray-600 border-b-[thin] bg-transparent text-xl resize-none outline-none" placeholder="What's happening"></textarea>
        <div class="flex mt-3 items-center justify-between">
          <div class="flex">
            <img class="w-9 h-9 p-2 hover:bg-loading-inner hover:rounded-full duration-300 hover:cursor-pointer" src="../assets/icons/image.svg" alt="add image">          
          <!-- Not found any good GIF svg -->
            <img class="w-9 h-9 p-2 hover:bg-loading-inner hover:rounded-full duration-300 hover:cursor-pointer" src="../assets/icons/bar-chart.svg" alt="add poll">
            <img class="w-9 h-9 p-2 hover:bg-loading-inner hover:rounded-full duration-300 hover:cursor-pointer" src="../assets/icons/smile.svg" alt="add emoji">
            <img class="w-9 h-9 p-2 hover:bg-loading-inner hover:rounded-full duration-300 hover:cursor-pointer" src="../assets/icons/calendar.svg" alt="add event">
            <img class="w-9 h-9 p-2 hover:bg-loading-inner hover:rounded-full duration-300 hover:cursor-pointer" src="../assets/icons/map-pin.svg" alt="add location">
          </div>
          <span class="bg-tweet font-extrabold py-1 px-4 rounded-full hover:bg-tweet-active duration-300 hover:cursor-pointer">Tweet</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainView',
  data: () => ({
    userImgUrl: "https://avatars.githubusercontent.com/u/54405190?v=4"
  })
}
</script>