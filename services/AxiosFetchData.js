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
  getMenu(e) { // For main-menu
    return apiClient.get(e)
  },
  getMenus() { // For main-menu
    return apiClient.get('menus')
  },
  getByRoute(path) { // For pages & sub-pages
    const lastSlash = path.lastIndexOf('/')
    const pageName = path.substring(lastSlash + 1)

    return apiClient.get(pageName)
  },
  getAllCategories() { // For main-menu
    // return apiClient.get('categories')
    return apiClient
  }
}
/*
activites
creations-tous-terrains
ecouter-voir
instrumentarium
pedagogie-de-la-creation
presentation
presse

*/
