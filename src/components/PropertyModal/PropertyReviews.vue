<template>
    <div class="property-reviews">
        <h2 class="property-reviews__title">Rating overview</h2>

        <p class="property-reviews__total-mark">Total: {{totalMark}}</p>

        <ul class="property-reviews__list">
            <li class="property-reviews__item"
                v-for="review in reviews"
                :key="review.id"
            >
                <span class="property-reviews__position">{{review.position}}</span>
                <p class="property-reviews__mark-container">
                    <span class="property-reviews__rating">{{rating(review.mark)}}</span>
                    <span class="property-reviews__mark">({{review.mark}} / 10)</span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    created() {
      this.$store.dispatch('fetchPropertyReviews');
    },
    computed: {
      totalMark() {
        const sum = this.reviews.reduce((acc, item) => (acc + item.mark), 0);
        return (sum / this.reviews.length).toFixed(1);
      },
    },
    methods: {
      rating(mark) {
          const rating = mark;
          if (rating >= 8.5) {
            return 'Excellent'
          } else if (rating >= 8) {
            return 'Very good'
          } else if (rating >= 7.2) {
            return 'Good'
          }
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .property-reviews__total-mark {
        font-size: 20px;
    }

    .property-reviews__list {
        width: 40%;
        padding: 0;
    }

    .property-reviews__item {
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin-bottom: 15px;
        font-size: 14px;
    }

    .property-reviews__mark-container {
        margin: 0;
    }

    .property-reviews__rating {
        margin-right: 10px;
    }
</style>