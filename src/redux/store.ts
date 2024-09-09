// src/redux/store.ts
import { combineReducers, legacy_createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
// import thunk from 'redux-thunk'; // If you use any async actions

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
});

const store = legacy_createStore(rootReducer);

// Dispatch SYNC_CART_WITH_LOCAL_STORAGE action to initialize the cart state from localStorage
store.dispatch({ type: 'SYNC_CART_WITH_LOCAL_STORAGE' });

export type RootState = ReturnType<typeof rootReducer>;

export default store;
