import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import reducers from './reducers/index'

const persistConfig = {
	key: 'root',
	storage,
}

// const persistedReducer = persistReducer(persistConfig, reducers)
// export const store = createStore(persistedReducer, composeWithDevTools())
// export const persistor = persistStore(store)
export default createStore(reducers, composeWithDevTools())
