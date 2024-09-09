export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_CART = 'UPDATE_CART';

export interface CartItem {
    img: string;
    rate: number;
    quantity: number;
    productName: string;
    id: string;
}

export const removeItem = (id: string) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const updateCart = (updatedCart: any) => ({
    type: UPDATE_CART,
    payload: updatedCart
});