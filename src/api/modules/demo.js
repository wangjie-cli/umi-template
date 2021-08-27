import $axios from '@/api'

export default {
  /**
   * demo
   * @returns {Promise}
   */
  demo() {
    return $axios.get('url')
  },
}
