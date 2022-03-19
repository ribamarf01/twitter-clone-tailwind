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

    <TweetVisualizer 
      v-else
      :tweets="tweets"
    />

  </div>
</template>

<script>
import SpinnerLoading from "./SpinnerLoading.vue"
import TweetCompose from "./TweetCompose.vue"
import TweetVisualizer from "./TweetVisualizer.vue"

export default {
  name: 'MainView',
  components: { SpinnerLoading, TweetCompose, TweetVisualizer },
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