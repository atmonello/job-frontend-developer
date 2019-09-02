<template>
  <!-- v-expansion-panel -->
  <div class="video-list-item">
    <div class="video-list-item--thumbnail">
      <iframe
        id="ytplayer"
        type="text/html"
        :width="videoWidth"
        :height="videoHeight"
        :src="videoUrl"
        frameborder="0"
      />
    </div>
    <div class="video-list-item--info">
      <h5>{{ videoData.title }}</h5>
      <div class="video-list-item--info--upload">
        <div class="channel">
          <v-icon>mdi-video-account</v-icon>
          <span>{{ videoData.channelTitle }}</span>
        </div>
        <div class="date">
          <v-icon>mdi-calendar-range</v-icon>
          <span
            >Publicado em {{ $getFormattedDate(videoData.publishedAt) }}</span
          >
        </div>
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

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }

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

  &--thumbnail {
    @media screen and (max-width: 960px) {
      text-align: center;
    }
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
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .channel {
        margin-right: 16px;
      }

      @media screen and (min-width: 600px) {
        flex-direction: row;
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
  },
  computed: {
    videoWidth() {
      let width;

      if (this.$mq === 'sm' || this.$mq === 'md') {
        width = 480;
      } else if (this.$mq === 'xs') {
        width = 320;
      } else {
        width = 640;
      }

      return width;
    },
    videoHeight() {
      let height;

      if (this.$mq === 'sm' || this.$mq === 'md') {
        height = 320;
      } else if (this.$mq === 'xs') {
        height = 240;
      } else {
        height = 480;
      }

      return height;
    }
  }
};
</script>
