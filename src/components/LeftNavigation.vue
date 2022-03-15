<template>
  <nav class="flex flex-col justify-between w-56 mr-8 h-screen">
    <ul class="w-full">
      <li class="hover:bg-blue-200 w-max hover:cursor-pointer duration-300 p-3 hover:rounded-full">
        <img class="w-8 h-8 dark:invert" src="../assets/icons/twitter.svg" alt="Twitter logo" />
      </li>
      <li class="flex items-center my-2 font-semibold w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
        <img class="w-6 h-6 mr-2 dark:invert" src="../assets/icons/home.svg" alt="Home icon">
        <span class="ml-2 font-lg">Home</span>
      </li>
      <li class="flex items-center my-2 w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
        <img class="w-6 h-6 mr-2 dark:invert" src="../assets/icons/hash.svg" alt="Explore icon">
        <span class="ml-2 text-lg">Explore</span>
      </li>
      <li class="flex items-center my-2 w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
        <img class="w-6 h-6 mr-2 dark:invert" src="../assets/icons/bell.svg" alt="Notifications icon">
        <span class="ml-2 text-lg">Notification</span>
      </li>
      <li class="flex items-center my-2 w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
        <img class="w-6 h-6 mr-2 dark:invert" src="../assets/icons/mail.svg" alt="Messages icon">
        <span class="ml-2 text-lg">Messages</span>
      </li>
      <li class="flex items-center my-2 w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
        <img class="w-6 h-6 mr-2 dark:invert" src="../assets/icons/bookmark.svg" alt="Bookmarks icon">
        <span class="ml-2 text-lg">Bookmarks</span>
      </li>
      <li class="flex items-center my-2 w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
        <img class="w-6 h-6 mr-2 dark:invert" src="../assets/icons/list.svg" alt="Lists icon">
        <span class="ml-2 text-lg">Lists</span>
      </li>
      <li class="flex items-center my-2 w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
        <img class="w-6 h-6 mr-2 dark:invert" src="../assets/icons/user.svg" alt="Profile icon">
        <span class="ml-2 text-lg">Profile</span>
      </li>
      <li class="flex items-center my-2 w-max hover:cursor-pointer hover:bg-gray-600 duration-300 p-3 hover:rounded-full">
        <img class="w-6 h-6 mr-2 border-2 dark:border-black rounded-full dark:invert" src="../assets/icons/more-horizontal.svg" alt="More icon">
        <span class="ml-2 text-lg">More</span>
      </li>

      <li class="w-full flex justify-center">
        <button class="bg-tweet hover:bg-tweet-active p-3 rounded-3xl w-full text-center text-lg font-bold">Tweet</button> 
      </li>
    </ul>

    <div class="w-64 mb-4 hover:bg-gray-600 hover:rounded-full p-2 duration-500 hover:cursor-pointer">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/54405190?v=4" alt="Profile picture">
          <div class="ml-3">
            <p class="text-sm font-bold">Ribamar Filho</p>
            <p class="text-sm text-gray-400">@ribamar.f01</p>
          </div>
        </div>
        <img class="h-5 w-5 dark:invert" src="../assets/icons/more-horizontal.svg" alt="">
      </div>
    </div>
    
  </nav>
</template>

<style>

</style>