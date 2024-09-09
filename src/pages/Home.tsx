import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Cta from '../components/Cta';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

type ProductGridType = {
    title: string,
    products: {
        id: string,
        img: string,
        productName: string,
        category: string,
        rate: number,
        onSale: boolean,
        saleRate: number
    }[]
};

const Home: React.FC = () => {
    const productData = useSelector((state: RootState) => state.products.products); 

    const BestSelling: ProductGridType = {
        title: 'Best Selling Products',
        products: productData?.filter((el) => el.feature) || []
    };

    const TrendingProducts: ProductGridType = {
        title: 'Trending Products',
        products: productData?.filter((el) => el.topSeller) || []
    };

    return (
        <div>
            <Hero />
            <ProductGrid details={BestSelling} />
            <Cta />
            <ProductGrid details={TrendingProducts} />
        </div>
    );
};

export default Home;
