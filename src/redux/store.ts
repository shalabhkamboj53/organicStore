import { combineReducers, legacy_createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
// @ts-ignore
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer';
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };

// Selectors and Types

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export const selectProducts = (state: RootState) => state.products.products;

export const selectFeaturedProducts = createSelector(selectProducts, (products) => {
    return products.filter((product) => product.feature);
})

export const selectTrendingProducts = createSelector(selectProducts, (products) => {
    return products.filter((product) => product.topSeller);
})

export const selectGroceries = createSelector(selectProducts, (products) => {
    return products.filter((product) => product.category === 'Groceries');
})

export const selectJuices = createSelector(selectProducts, (products) => {
    return products.filter((product) => product.category === 'Juices');
})

export const selectMaxPrice = createSelector(selectProducts, (products) => {
    return Math.max(...products.map((product) => product.rate));
})

export const selectMinPrice = createSelector(selectProducts, (products) => {
    return Math.min(...products.map((product) => product.rate));
})

export const onSaleProducts = createSelector(selectProducts, (products) => {
    return products.filter((product) => product.onSale);
})

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartAmount = (state: RootState) => state.cart.cartAmount;

export const selectCartQuantity = (state: RootState) => state.cart.cartQuantity;
