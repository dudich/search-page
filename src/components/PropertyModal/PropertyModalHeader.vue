<template>
    <div class="property-modal__header">
        <nav class="property-modal__nav">
            <ul>
                <li @click="openPhotoGallery(id)">Photos</li>
                <li  @click="openInfo(id)">Info</li>
                <li  @click="openReviews(id)">Reviews</li>
                <li  @click="openDeals(id)">Deals</li>
            </ul>
        </nav>
        <div class="property-modal__closer" @click="closeModal(id)">
            <i class="fas fa-times"></i>
        </div>
    </div>
</template>

<script>
  import {
    OPEN_PROPERTY_MODAL,
    CLOSE_PROPERTY_MODAL,
    CHANGE_PROPERTY_MODAL_COMPONENT,
    OPEN_PROPERTY_PHOTOS_GALLERY,
    OPEN_PROPERTY_DEALS,
    OPEN_PROPERTY_INFO,
    OPEN_PROPERTY_REVIEWS
  } from '../../store/actionTypes';

  export default {
    props: ['id'],
    methods: {
      closeModal(id) {
        EventBus.$emit(CLOSE_PROPERTY_MODAL, id);
      },
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
  }
</script>