export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_CART_AMOUNT = 'SET_CART_AMOUNT';
export const SET_CART_QUANTITY = 'SET_CART_QUANTITY';
export const SYNC_CART_WITH_LOCAL_STORAGE = 'SYNC_CART_WITH_LOCAL_STORAGE';
export const UPDATE_CART = 'UPDATE_CART';

export const syncCartWithLocalStorage = () => ({
    type: SYNC_CART_WITH_LOCAL_STORAGE,
});

export interface CartItem {
    img: string;
    rate: number;
    quantity: number;
    productName: string;
    id: string;
}

export const addItem = (item: CartItem) => ({
    type: ADD_ITEM,
    payload: item,
});

export const removeItem = (id: string) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const setCartAmount = (amount: number) => ({
    type: SET_CART_AMOUNT,
    payload: amount,
});

export const setCartQuantity = (quantity: number) => ({
    type: SET_CART_QUANTITY,
    payload: quantity,
});

export const updateCart = (updatedCart: any) => ({
    type: UPDATE_CART,
    payload: updatedCart
});
