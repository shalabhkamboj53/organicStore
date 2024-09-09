export const SET_PRODUCTS = 'SET_PRODUCTS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export interface Product {
    id: string;
    img: string;
    productName: string;
    category: string;
    rate: number;
    onSale: boolean;
    saleRate: number;
    description: string;
    stock: number;
    feature: boolean;
    topSeller: boolean;
}

export const setProducts = (products: Product[]) => ({
    type: SET_PRODUCTS,
    payload: products,
});

export const updateProduct = (product: Product) => ({
    type: UPDATE_PRODUCT,
    payload: product,
});
