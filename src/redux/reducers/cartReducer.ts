import { ADD_ITEM, REMOVE_ITEM, SET_CART_AMOUNT, SET_CART_QUANTITY, CartItem, UPDATE_CART } from '../actions/cartActions';

type CartState = {
    items: CartItem[];
    cartAmount: number;
    cartQuantity: number;
};

const initialState: CartState = {
    items: [],
    cartAmount: 0,
    cartQuantity: 0,
};

const cartReducer = (state = initialState, action: any): CartState => {
    switch (action.type) {
        case ADD_ITEM: {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push(newItem);
            }
            return {
                ...state,
                cartQuantity: state.cartQuantity + newItem.quantity,
                cartAmount: state.cartAmount + newItem.rate * newItem.quantity,
            };
        }
        case REMOVE_ITEM: {
            const id = action.payload;
            const itemToRemove = state.items.find((item) => item.id === id);
            if (itemToRemove) {
                return {
                    ...state,
                    items: state.items.filter((item) => item.id !== id),
                    cartQuantity: state.cartQuantity - itemToRemove.quantity,
                    cartAmount: state.cartAmount - itemToRemove.rate * itemToRemove.quantity,
                };
            }
            return state;
        }
        case SET_CART_AMOUNT: {
            return {
                ...state,
                cartAmount: action.payload,
            };
        }
        case SET_CART_QUANTITY: {
            return {
                ...state,
                cartQuantity: action.payload,
            };
        }
        case UPDATE_CART: {
            return {
                ...state,
                items: action.payload.items
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
