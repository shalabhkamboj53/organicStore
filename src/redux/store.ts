import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
// @ts-ignore
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer';
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore';
import rootSaga from './saga';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export { store, persistor };
