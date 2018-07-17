<template>
    <div class="property-info">
        <h2 class="property-info__title">{{info.title}}</h2>
        <p class="property-info__description">{{info.description}}</p>
    </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    created() {
      this.$store.dispatch('fetchPropertyInfo');
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