<template>
    <li class="property-item">
        <img class="property-item__image" :src="property.imageLink" alt="image">
        <div class="property-item__info">
            <div class="property-item__info-content">
                <h3 class="property-item__title">{{property.title}}</h3>
                <ul class="property-item__stars">
                    <li v-for="star in property.stars">
                        <i class="fas fa-star"></i>
                    </li>
                </ul>
                <span class="property-item__type">{{property.type}}</span>
                <div class="reviews">
                    <div class="reviews-mark" :style="{backgroundColor: rating.color}">
                        <span>{{property.reviews.mark}}</span>
                    </div>
                    <span class="reviews-rating">{{rating.string}}</span>
                    <span class="reviews-count">({{property.reviews.count}} reviews)</span>
                </div>
            </div>
            <div class="price">
                <span>{{property.price}} $</span>
            </div>
        </div>
    </li>


</template>

<script>
  export default {
    props: {
      property: {
        type: Object,
        required: true
      }
    },
    computed: {
      rating() {
        const raiting = this.property.reviews.mark;
        if (raiting >= 8.5) {
          return {
            string: 'Excellent',
            color: '#316300'
          }
        } else if (raiting >= 8) {
          return {
            string: 'Very good',
            color: '#428500'
          }
        } else if (raiting >= 7.2) {
          return {
            string: 'Good',
            color: '#71A340'
          }
        }
        return {
          string: '',
          color: '#F48F00'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .property-item {
        display: flex;
        box-shadow: 0 1px 4px rgba(41,51,57,.5);
        border-radius: 2px;
        padding: 10px;
        margin-bottom: 5px;
        background-color: white;
        list-style: none;
    }

    .property-item__info {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .property-item__info-content {
        width: 80%;
    }

    .property-item__image {
        flex: 0 0 auto;
        margin-right: 10px;
    }

    .property-item__title {
        width: 100%;;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 20px;
    }

    .property-item__stars {
        display: inline-block;
        padding: 0;
        margin-right: 8px;
    }

    .property-item__stars li {
        display: inline-block;
        margin-right: 1px;
        list-style: none;
        font-size: 12px;
        color: #F6AB3F
    }

    .reviews {
        margin-top: 16px;
    }

    .reviews-mark {
        display: inline-block;
        width: 25px;
        height: 25px;
        text-align: center;
        font-size: 14px;
        line-height: 25px;
        font-weight: 700;
        color: white;
        border-radius: 2px;
    }

    .price {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20%;
    }

    .price {
        font-size: 25px;
        font-weight: 900;
        color: #428500;
    }

    @media screen and (max-width: 768px) {
        .property-item__info {
            flex-direction: column;
        }
    }
</style>
