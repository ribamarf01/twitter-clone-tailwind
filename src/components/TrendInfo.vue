<template>
  <div class="flex flex-col p-3 hover:bg-relevant-active hover:cursor-pointer duration-300" v-for="trend in trending" :key="trend.trendWord">
    <span class="text-xs text-gray-600">{{ trend.subject }}</span>
    <span class="text-sm font-extrabold">{{ trend.trendWord }}</span>
    <span class="text-xs text-gray-600">{{ trend.tweetsAbout }} Tweets</span>
  </div>
</template>

<script>

export default {
  name: 'TrendInfo',
  props: ['trending']
}

</script>