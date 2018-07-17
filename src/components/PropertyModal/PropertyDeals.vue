<template>
    <div class="property-deals">
        <table class="property-deals__table">
            <tr class="property-deals__row" v-for="deal in deals" :key="deal.id">
                <td class="property-deals__company">{{deal.company}}</td>
                <td class="property-deals__description">{{deal.description}}</td>
                <td class="property-deals__price">{{deal.price}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    props: {
      deals: {
        type: Array,
        required: true
      }
    },
    created() {
      this.$store.dispatch('fetchPropertyDeals');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .property-deals__table {
        border-collapse: collapse
    }

    .property-deals__row td {
        padding: 5px 10px;
        border: 1px solid #ebeced;
    }

    .property-deals__company {
        width: 20%;
    }

    .property-deals__description {
        width: 65%;
        font-size: 12px;
    }

    .property-deals__price {
        width: 15%;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        color: #428500;
    }

    .property-deals__company,
    .property-deals__description {
        text-align: left;
    }
</style>