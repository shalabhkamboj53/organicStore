import { combineReducers, legacy_createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
// @ts-ignore
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer';
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(persistedReducer);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor };
