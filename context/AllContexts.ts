import { createContext } from 'react';

type CartType = {
    items: {
        img:string,
        rate: number,
        quantity: number,
        productName: string,
        id: string,
    }[],
}

type productDetails = {
    id: string,
    img: string,
    productName: string,
    category: string,
    rate: number,
    onSale: true | false,
    saleRate: number,
    description: string,
    stock: number
    feature: boolean,
    topSeller: boolean
}[]

type CartContextType = {
    Cart: CartType;
    setCart: React.Dispatch<React.SetStateAction<CartType>>;
    CartAmount: number;
    CartToLocatStorage: (data:CartType) => void;
    ProductDataState: productDetails;
    CartQuantity: number;
};

export const AllContext = createContext<CartContextType | undefined>(undefined);