export default {
  computed: {
    rating() {
      const rating = 8;
      if (rating >= 8.5) {
        return {
          string: 'Excellent',
          color: '#316300'
        }
      } else if (rating >= 8) {
        return {
          string: 'Very good',
          color: '#428500'
        }
      } else if (rating >= 7.2) {
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

