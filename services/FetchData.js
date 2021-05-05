export default {
  data () {
    return {
      categories: []
    }
  },
  async fetch() {
    this.categories = await fetch('https://lutherieurbaine93.herokuapp.com/categories')
      .then(resp => resp.json())
  }
}
