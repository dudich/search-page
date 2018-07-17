<template>
    <div class="property-modal" v-if="openModal">
        <property-modal-header :id="propertyId"></property-modal-header>
        <component
                :is="currentView"
                :photos="propertyPhotos"

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
          currentView: null
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