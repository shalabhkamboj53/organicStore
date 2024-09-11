export const SET_PRODUCTS = 'SET_PRODUCTS';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';

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

export const fetchProducts = () => {
    return async (dispatch: any) => {    
        try {
            console.log("Started API fetch");
            const response = await fetch('https://run.mocky.io/v3/f28c3a5d-2e16-4397-89c0-9ccde50a42e0');
            console.log("API Fetched");
            
            if (!response.ok) {
                console.log("API response status false");
            }

            const products = await response.json();
            console.log("Data fetched by API: ", products);

            console.log("Started dispatching data to store");
            dispatch(setProducts(products));
            console.log("API data dispatched to store");
            
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };
};
