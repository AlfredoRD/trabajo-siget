import { createStore } from 'vuex'
import Formulacion from '@/modules/financiero/FormulacionModule/store/Formulacion'
import AdministrativoModule from '@/modules/administrativo/Usuario/store/Administrativo'
import auth from '@/modules/auth/store/module-template'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  actions: {},
  modules: {
    auth,
    Formulacion,
    AdministrativoModule,
  },
})
