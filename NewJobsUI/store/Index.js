import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import reducers from '../reducers/Index'

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
)

persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] })
// clear cache with...
// persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] }).purge()

export default store
