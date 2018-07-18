<template>
  <div>
    <PropertyList/>
  </div>
</template>

<script>
import PropertyList from '../components/PropertyList/PropertyList'
export default {
  created() {
    this.$store.dispatch('loadData');
  },
  components: {
    PropertyList
  }
}
</script>
