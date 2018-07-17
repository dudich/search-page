<template>
    <div class="property-modal" v-if="openModal">
        <property-modal-header :id="propertyId" :currentView="currentView"></property-modal-header>
        <component
                :is="currentView"
                :photos="propertyPhotos"
                :info="propertyInfo"
                :reviews="propertyReviews"
                :deals="propertyDeals"
        >
        </component>
    </div>
</template>

<script>
    import {
      OPEN_PROPERTY_MODAL,
      CLOSE_PROPERTY_MODAL,
      CHANGE_PROPERTY_MODAL_COMPONENT

    } from '../../store/actionTypes'

    import PropertyDeals from './PropertyDeals';
    import PropertyInfo from './PropertyInfo';
    import PropertyPhotos from './PropertyPhotos';
    import PropertyReviews from './PropertyReviews';
    import PropertyModalHeader from './PropertyModalHeader'

    export default {
      props: {
        propertyId: {
          type: Number,
          required: true
        }
      },
      data() {
        return {
          openModal: false,
          currentView: null,
          activeTab: '',
        }
      },

      created() {
        EventBus.$on(OPEN_PROPERTY_MODAL, (id) => {
          if(id === this.propertyId) {
            this.openModal = true;
          }
        });

        EventBus.$on(CLOSE_PROPERTY_MODAL, (id) => {
          if(id === this.propertyId) {
            this.openModal = false;
          }
        });

        /*EventBus.$on(actionTypes.GET_SHARE_FILES, payload => {
          this.payloadData = payload;
        });*/

        EventBus.$on(CHANGE_PROPERTY_MODAL_COMPONENT, (view, id) => {
          const map = {
            OPEN_PROPERTY_DEALS: PropertyDeals,
            OPEN_PROPERTY_INFO: PropertyInfo,
            OPEN_PROPERTY_PHOTOS_GALLERY: PropertyPhotos,
            OPEN_PROPERTY_REVIEWS: PropertyReviews,
          };
          if (id === this.propertyId) {
            this.currentView = map[view];
          }
        });
      },

      computed: {
        propertyPhotos() {
          return this.$store.getters.propertyPhotos;
        },
        propertyInfo() {
          return this.$store.getters.propertyInfo;
        },
        propertyReviews() {
          return this.$store.getters.propertyReviews;
        },
        propertyDeals() {
          return this.$store.getters.propertyDeals;
        }
      },

      components: {
        PropertyDeals,
        PropertyInfo,
        PropertyPhotos,
        PropertyReviews,
        PropertyModalHeader
      }
    }
</script>

<style scoped>
    .property-modal {
        padding: 10px 20px;
        background-color: white;
        box-shadow: 0 1px 4px rgba(41,51,57,.5);
    }
</style>