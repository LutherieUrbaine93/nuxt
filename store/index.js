export const state = () => ({
  menus: []
})

export const mutations = {
  setMenus: (state, menus) => (state.menus = menus)
}

export const actions = {
  async fetchMenus({commit}) {
    const response = await this.$strapi.find('menus')

    commit('setMenus', response)
  }
}

export const getters = {
  // fetchMenus: (state) => state.menus
}
