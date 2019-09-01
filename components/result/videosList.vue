<template>
  <section class="video-list">
    <h5>Video List</h5>
    <video-item
      v-for="(item, index) in videos"
      :key="index"
      :video-data="item.data"
      :video-url="item.url"
    ></video-item>
  </section>
</template>

<script>
import videoItem from './videoItem';
export default {
  components: {
    videoItem
  },
  props: {
    videos: {
      type: Array,
      required: true
    }
  }
};
</script>
