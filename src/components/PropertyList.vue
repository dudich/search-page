<template>
    <ul class="property-list">
        <PropertyItem v-for="property in properties" :property="property" :key="property.id"/>
    </ul>
</template>

<script>
  import PropertyItem from './PropertyItem';

  export default {
    computed: {
      properties() {
        return this.$store.getters.properties;
      }
    },
    components: {
      PropertyItem
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .property-list {
        max-width: 820px;
        padding: 0;
        margin: 0 auto;
    }
</style>
