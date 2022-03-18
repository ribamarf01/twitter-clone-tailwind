<template>
  <div class="flex flex-col items-center ml-8 w-80">
    <!-- Search Bar -->
    <div class="flex items-center w-full bg-relevant my-2 p-3 rounded-full">
      <img class="w-5 h-5 mr-4 " src="../assets/icons/search.svg" alt="Search icon">
      <input class="placeholder-gray-600 bg-transparent" type="text" placeholder="Search">
    </div>
    <!-- Trending -->

    <div class="flex flex-col bg-relevant w-full rounded-xl my-2">

      <SpinnerLoading v-if="!trending" />

      <div v-else class="flex flex-col">
        <span class="text-xl p-3 font-extrabold">What's happening</span>

        <TrendInfo
          :trending="trending"
        />

        <a class="text-sm p-3 text-blue-500 hover:bg-relevant-active hover:cursor-pointer duration-300 rounded-b-xl" href="#">Show more</a>
      </div>

    </div>
    <!-- Recomended people -->
    <div class="flex flex-col bg-relevant w-full rounded-xl my-2">

      <SpinnerLoading 
        v-if="!reccomendedAccounts"
        class="my-24"
      />

      <div v-else class="flex flex-col">
        <span class="text-xl p-3 font-bold">Who to follow</span>

        <div v-for="account in reccomendedAccounts" :key="account.userAccount" class="w-full hover:bg-relevant-active p-2 duration-500 hover:cursor-pointer">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img class="w-12 h-12 rounded-full" :src='account.userImgUrl' alt="Profile picture">
              <div class="ml-3">
                <p class="text-sm font-bold">{{ account.username }}</p>
                <p class="text-sm text-gray-400">@{{ account.userAccount }}</p>
              </div>
            </div>
            <span class="dark:bg-white dark:text-black dark:hover:bg-gray-300 duration-500 font-bold text-sm px-4 py-2 rounded-full">Follow</span>
          </div>
        </div>  

        <a class="text-sm p-3 text-blue-500 hover:bg-relevant-active hover:cursor-pointer duration-300 rounded-b-xl" href="#">Show more</a>

      </div>
    </div>
    
  </div>
</template>

<script>
import SpinnerLoading from "./SpinnerLoading.vue";
import TrendInfo from "./TrendInfo.vue";

export default {
    components: { SpinnerLoading, TrendInfo },
    data: () => ({
        trending: null,
        reccomendedAccounts: null
    }),
    methods: {
        async init() {
            setTimeout(() => {
                this.trending = [
                    { subject: "Tech - Trending", trendWord: "NFT", tweetsAbout: "7,832" },
                    { subject: "Trending in Brazil", trendWord: "WhatsApp", tweetsAbout: "36.5K" },
                    { subject: "COVID-19 - LIVE", trendWord: "See the latest news about covid-19", tweetsAbout: "28.3K" },
                    { subject: "#Something", trendWord: "No more ideas!", tweetsAbout: "247.5K" },
                    { subject: "Trending in Brazil", trendWord: "Corruption", tweetsAbout: "1.1M" }
                ],
                    this.reccomendedAccounts = [
                        { username: "Ribamar Filho", userAccount: "ribamar.f01", userImgUrl: "https://avatars.githubusercontent.com/u/54405190?v=4", following: false },
                        { username: "Ribamar Filho", userAccount: "ribamar.f01", userImgUrl: "https://avatars.githubusercontent.com/u/54405190?v=4", following: false },
                        { username: "Ribamar Filho", userAccount: "ribamar.f01", userImgUrl: "https://avatars.githubusercontent.com/u/54405190?v=4", following: false },
                    ];
            }, 2500);
        }
    },
    mounted() {
        this.init();
    }    
}
</script>