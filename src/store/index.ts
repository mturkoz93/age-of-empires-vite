// store.ts
import { createStore } from 'vuex'
import user from '../store/modules/user'

const store = createStore({
  state: {
    test: 'test',
  },
  modules: {
    user,
  },
})

export default store
