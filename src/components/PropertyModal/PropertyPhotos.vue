<template>
    <div class="property-photos">
        <img v-for="photo in photos"
             :src="photo.imageLink"
             alt="photo"
             :key="photo.id"
             class="property-photos__img"
        >
    </div>
</template>

<script>
  export default {
    props: {
      photos: {
        type: Array,
        required: true
      }
    },
    created() {
      this.$store.dispatch('fetchPropertyPhotos');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .property-photos {
        padding: 20px;
        text-align: center;
    }
    .property-photos__img {

    }
</style>