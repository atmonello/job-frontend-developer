<template>
  <!-- v-expansion-panel -->
  <div class="video-list-item">
    <div class="video-list-item--thumbnail">
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        :src="videoUrl"
        frameborder="0"
      />
    </div>
    <div class="video-list-item--info">
      <h5>{{ videoData.title }}</h5>
      <div class="video-list-item--info--upload">
        <v-icon>mdi-video-account</v-icon>
        <span>{{ videoData.channelTitle }}</span>
        <v-icon>mdi-calendar-range</v-icon>
        <span>Publicado em {{ $getFormattedDate(videoData.publishedAt) }}</span>
      </div>
      <p></p>
      <p>{{ videoData.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-list-item {
  padding: 10px 0;
  display: flex;

  &:nth-child(odd) {
    background-color: $background-alternate-video-item;
  }
  &:hover {
    background-color: $background-alternate-video-item--hover;
  }

  &--thumbnail,
  &--info {
    padding: 0 10px;
  }

  &--info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    * {
      text-align: left;
    }

    &--upload {
      margin: 4px 0;
      span {
        vertical-align: middle;
      }
    }
  }
}
</style>
<script>
export default {
  props: {
    videoData: {
      type: Object,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    }
  }
};
</script>
