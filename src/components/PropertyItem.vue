<template>
    <div class="property-item-container">
        <li class="property-item">
            <img class="property-item__image" :src="property.imageLink" alt="image"
                 @click="openPhotoGallery(property.id)">
            <div class="property-item__info">
                <div class="property-item__info-content">
                    <h3 class="property-item__title" @click="openPhotoGallery(property.id)">{{property.title}}</h3>
                    <ul class="property-item__stars">
                        <li v-for="star in property.stars">
                            <i class="fas fa-star"></i>
                        </li>
                    </ul>
                    <span class="property-item__type">{{property.type}}</span>

                    <p class="property-item__location" @click="openInfo(property.id)">Queenstown, 0.9 km to City
                        centre</p>

                    <div class="property-item__reviews" @click="openReviews(property.id)">
                        <div class="reviews-mark" :style="{backgroundColor: rating.color}">
                            <span>{{property.reviews.mark}}</span>
                        </div>
                        <span class="reviews-rating">{{rating.string}}</span>
                        <span class="reviews-count">({{property.reviews.count}} reviews)</span>
                    </div>

                    <p class="property-item__deals" @click="openDeals(property.id)">More deals</p>
                </div>
                <div class="price">
                    <span>{{property.price}} $</span>
                </div>
            </div>
        </li>

        <property-modal :propertyId="property.id"></property-modal>
    </div>
</template>

<script>
  import {
    OPEN_PROPERTY_MODAL,
    CHANGE_PROPERTY_MODAL_COMPONENT,
    OPEN_PROPERTY_PHOTOS_GALLERY,
    OPEN_PROPERTY_DEALS,
    OPEN_PROPERTY_INFO,
    OPEN_PROPERTY_REVIEWS
  } from '../store/actionTypes';

  import PropertyModal from './PropertyModal/PropertyModal';
  import ratingMixin from '../mixins/ratingMixin';

  export default {
    props: {
      property: {
        type: Object,
        required: true
      }
    },
    mixins: [ratingMixin],
    methods: {
      openPhotoGallery(id) {
        EventBus.$emit(CHANGE_PROPERTY_MODAL_COMPONENT, OPEN_PROPERTY_PHOTOS_GALLERY, id);
        EventBus.$emit(OPEN_PROPERTY_MODAL, id);
        /*EventBus.$emit(actionTypes.GET_SHARE_FILES, this.shareFiles);*/
      },

      openDeals(id) {
        EventBus.$emit(CHANGE_PROPERTY_MODAL_COMPONENT, OPEN_PROPERTY_DEALS, id);
        EventBus.$emit(OPEN_PROPERTY_MODAL, id);
      },

      openInfo(id) {
        EventBus.$emit(CHANGE_PROPERTY_MODAL_COMPONENT, OPEN_PROPERTY_INFO, id);
        EventBus.$emit(OPEN_PROPERTY_MODAL, id);
      },
      openReviews(id) {
        EventBus.$emit(CHANGE_PROPERTY_MODAL_COMPONENT, OPEN_PROPERTY_REVIEWS, id);
        EventBus.$emit(OPEN_PROPERTY_MODAL, id);
      }
    },
    components: {
      PropertyModal
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .property-item-container {
        margin-bottom: 5px;
    }

    .property-item {
        display: flex;
        box-shadow: 0 1px 4px rgba(41, 51, 57, .5);
        border-radius: 2px;
        padding: 10px;
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

    .property-item__reviews {
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

    .reviews-rating {
        font-weight: 700;
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

    .property-item__deals {
        font-weight: 900;
    }

    .property-item__image,
    .property-item__title,
    .property-item__reviews,
    .property-item__location,
    .property-item__deals {
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .property-item__info {
            flex-direction: column;
        }
    }
</style>
