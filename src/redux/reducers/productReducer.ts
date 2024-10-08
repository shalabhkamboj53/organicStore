import { SET_PRODUCTS, UPDATE_PRODUCT, Product } from '../actions/productActions';

type ProductState = {
    products: Product[];
};

const initialState: ProductState = {
    products: [],
};

const productReducer = (state = initialState, action: any): ProductState => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
            };
        }
        case UPDATE_PRODUCT: {
            const updatedProduct = action.payload;
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === updatedProduct.id ? updatedProduct : product
                ),
            };
        }
        default:
            return state;
    }
};



export default productReducer;
