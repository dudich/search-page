<template>
    <div>
        <div v-for="photo in photos">
            <img :src="photo.imageLink" alt="photo" :key="photo.id">
        </div>
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

</style>