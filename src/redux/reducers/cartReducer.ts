import { REMOVE_ITEM, CartItem, UPDATE_CART } from '../actions/cartActions';

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
        case UPDATE_CART: {
            let amount:number = initialState.cartAmount
            action.payload.items.forEach((el:any)=>{
                amount += el.quantity*el.rate
            })
            let quantity:number = initialState.cartQuantity
            action.payload.items.forEach((el:any)=>{
                quantity += el.quantity
            })
            
            return {
                ...state,
                items: action.payload.items,
                cartAmount: amount,
                cartQuantity: quantity
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
