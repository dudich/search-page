export default {
  computed: {
    rating() {
      const rating = this.randomMark(this.markRange.min, this.markRange.max);
      const excellent = 8.5;
      const veryGood = 8;
      const good = 7.2;

      if (rating >= excellent) {
        return {
          string: 'Excellent',
          color: '#316300'
        }
      } else if (rating >= veryGood) {
        return {
          string: 'Very good',
          color: '#428500'
        }
      } else if (rating >= good) {
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

