import React from 'react';
import { selectFeaturedProducts, selectTrendingProducts, useAppSelector } from '../redux/store';
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
    const BestSelling:ProductGridType = {
        title: 'Best Selling Products',
        products: useAppSelector(selectFeaturedProducts)
    }

    const TrendingProducts: ProductGridType = {
        title: 'Trending Products',
        products: useAppSelector(selectTrendingProducts)
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
