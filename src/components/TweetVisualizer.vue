<template>
  <div v-for="tweet in tweets" :key="tweet.userAccount" class="flex flex-col w-full px-3 border-b-[thin] border-b-gray-600 py-4">
    <div class="flex flex-col w-full py-1">
      <div class="flex flex-row w-full">
        <img class="w-12 h-12 mr-3 rounded-full" :src="tweet.userImage" alt="user photo">
        <div class="flex flex-col w-full">
          <div class="flex w-full justify-between relative">
            <div class="flex">
              <span class="font-extrabold mr-1 text-sm">{{ tweet.username }}</span>
              <span class="text-gray-600 text-sm">@{{ tweet.userAccount }}</span>
              <span class="text-gray-600 text-sm ml-1">· {{ tweet.postedAt }}</span>
            </div>
            <div class="w-9 h-9 p-2 hover:bg-loading-inner hover:rounded-full duration-300 hover:cursor-pointer absolute top-0 right-0">
              <img class="dark:invert" src="../assets/icons/more-horizontal.svg" alt="comment">
            </div>
          </div>
          <span class="w-full placeholder-gray-600">{{ tweet.content }}</span>
        </div>
      </div>
    </div>
    <div class="flex justify-around">
      <div class="flex items-center hover:text-loading-outer hover:cursor-pointer">
        <div class="w-9 h-9 p-2 hover:bg-loading-inner hover:rounded-full duration-300">
          <img class="dark:invert" src="../assets/icons/message-circle.svg" alt="comment">
        </div>
        <span class="text-sm pl-1">{{ tweet.comments }}</span>
      </div>
      <div class="flex items-center hover:text-green-600 hover:cursor-pointer">
        <div class="w-9 h-9 p-2 hover:bg-retweet-inner hover:rounded-full duration-300">
          <img class="dark:invert rotate-90" src="../assets/icons/repeat.svg" alt="retweet">
        </div>
        <span class="text-sm pl-1">{{ tweet.retweeted }}</span>
      </div>
      <div class="flex items-center hover:text-liked-inner hover:cursor-pointer">
        <div class="w-9 h-9 p-2 hover:bg-liked-inner hover:rounded-full duration-300">
          <img class="dark:invert" src="../assets/icons/heart.svg" alt="like">
        </div>
        <span class="text-sm pl-1">{{ tweet.likes }}</span>
      </div>
      <div class="flex items-center hover:text-loading-outer hover:cursor-pointer">
        <div class="w-9 h-9 p-2 hover:bg-loading-inner hover:rounded-full duration-300">
          <img class="dark:invert" src="../assets/icons/share.svg" alt="share link">
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'TweetVisualizer',
  props: ['tweets']
}

</script>