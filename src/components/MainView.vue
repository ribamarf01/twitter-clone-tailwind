<template>
  <!-- Start -->
  <div class="flex flex-row flex-wrap">
    <span class="text-xl font-extrabold mb-3 mt-3 px-3 w-full">Home</span>
    
    <!-- Tweet Compose -->
    <TweetCompose />

    <!-- Tweets -->
    <SpinnerLoading 
      v-if="!tweets"
    />

    <div v-else v-for="tweet in tweets" :key="tweet.userAccount" class="flex flex-col w-full px-3 border-b-[thin] border-b-gray-600 py-2">
      <div class="flex flex-col w-full">
        <div class="flex flex-row">
          <img class="w-12 h-12 mr-3 rounded-full" :src="tweet.userImage" alt="user photo">
          <div class="flex flex-col">
            <div class="flex flew-row">
              <span class="font-extrabold mr-1 text-sm">{{ tweet.username }}</span>
              <span class="text-gray-600 text-sm">@{{ tweet.userAccount }}</span>
              <span class="text-gray-600 text-sm ml-1">· {{ tweet.postedAt }}</span>
            </div>
            <span class="w-full max-h-min placeholder-gray-600">{{ tweet.content }}</span>
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

  </div>
</template>

<script>
import SpinnerLoading from "./SpinnerLoading.vue"
import TweetCompose from "./TweetCompose.vue"

export default {
  name: 'MainView',
  components: { SpinnerLoading, TweetCompose },
  data: () => ({
    tweets: null
  }),
  methods: {
    async init() {
      await setTimeout(() => {
        this.tweets = [
          { username: "Ribamar Filho", userAccount: "ribamarf01", userImage: "https://avatars.githubusercontent.com/u/54405190?v=4", content: "Look at my tweet", postedAt: "6h", comments: 23, retweeted: 19, likes: 510 }
        ]
      }, 1500)
    }
  },
  mounted() {
    this.init()
  }
}
</script>