import React, { Suspense, lazy } from 'react';
import { selectFeaturedProducts, selectTrendingProducts, useAppSelector } from '../redux/store';
import Hero from '../components/Hero';

const Cta = lazy(() => import('../components/Cta'));
const ProductGrid = lazy(() => import('../components/ProductGrid'));

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
    const BestSelling: ProductGridType = {
        title: 'Best Selling Products',
        products: useAppSelector(selectFeaturedProducts)
    };

    const TrendingProducts: ProductGridType = {
        title: 'Trending Products',
        products: useAppSelector(selectTrendingProducts)
    };

    return (
        <div>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <ProductGrid details={BestSelling} />
                <Cta />
                <ProductGrid details={TrendingProducts} />
            </Suspense>
        </div>
    );
};

export default Home;
