<template>
  <div class="video-list-item">
    <div class="video-list-item--thumbnail">
      <img
        :src="video.thumbnails.medium.url"
        :alt="video.title"
        :width="video.thumbnails.medium.width"
        :height="video.thumbnails.medium.height"
      />
    </div>
    <div class="video-list-item--info">
      <h5>{{ video.title }}</h5>
      <div class="video-list-item--info--upload">
        <v-icon>mdi-video-account</v-icon>
        <span>{{ video.channelTitle }}</span>
        <v-icon>mdi-calendar-range</v-icon>
        <span>Publicado em {{ $getFormattedDate(video.publishedAt) }}</span>
      </div>
      <p></p>
      <p>{{ video.description }}</p>
      <!-- <p>{{ video }}</p> -->
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
    cursor: pointer;
  }

  &--thumbnail,
  &--info {
    padding: 0 10px;
  }

  &--info {
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
    video: {
      type: Object,
      required: true
    }
  }
};
</script>
