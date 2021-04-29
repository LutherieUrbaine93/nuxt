import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://lutherieurbaine93.herokuapp.com/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCategories() { // For main-menu
    return apiClient.get('categories')
  },
  getByRoute(route) { // For pages & sub-pages
    if (route.indexOf("-")) {
      let cleanRoute = route.substring(route.indexOf("-") + 1) // To remove 'parent-' page in sub-pages route
      if (cleanRoute.indexOf("_")) {
        cleanRoute = cleanRoute.replace("_", "-")
      }
      return apiClient.get(cleanRoute)
    } else {
      return apiClient.get(route)
    }
  }/*,
  getEvent(id) {
    return apiClient.get('events/' + id)
  }*/
}

