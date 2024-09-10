import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//@ts-ignore
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import ProductComp from '../components/ProductComp';

interface Product {
    id: string;
    img: string;
    productName: string;
    category: string;
    rate: number;
    onSale: boolean;
    saleRate: number;
    description?: string;
    stock?: number;
    feature?: boolean;
    topSeller?: boolean;
}

const Category: React.FC = () => {
    const { categoryType } = useParams<{ categoryType: string }>();
    const ProductDataState = useSelector((state: any) => state.products.products);
    const [Search, setSearch] = useState<string>('');
    const [FilterByPrice, setFilterByPrice] = useState<number[]>([0, 100]);
    const [FilterMinMax, setFilterMinMax] = useState<number[]>([0, 100]);

    useEffect(() => {
        setSearch('');
    }, []);

    useEffect(() => {
        if (FilterByPrice[0] === 0 && FilterByPrice[1] === 100 && ProductDataState.length > 1) {
            const sortedProducts = [...ProductDataState].sort((a: Product, b: Product) => a.rate - b.rate);
            const MinMax = [sortedProducts[0].rate, sortedProducts[sortedProducts.length - 1].rate];
            setFilterByPrice(MinMax);
            setFilterMinMax(MinMax);
        }
    }, [ProductDataState]);

    const categoryList = categoryType === 'Shop' ? ProductDataState : ProductDataState?.filter((el: Product) => el.category === categoryType);

    const filteredProducts = categoryList?.filter((el: Product) => {
        return (
            el.productName.toLowerCase().includes(Search.toLowerCase()) &&
            FilterByPrice[0] <= el.rate &&
            el.rate <= FilterByPrice[1]
        );
    });

    const saleProducts = ProductDataState?.filter((el: Product) => el.onSale);

    return (
        <div className="bg-gray-100">
            <div className="xl:w-[80%] px-10 xl:px-auto md:mx-auto">
                <div className="grid lg:grid-cols-3 py-12">
                    <div className="lg:block hidden border-e-2 border-gray-600 border-opacity-25 py-5 px-10">
                        <div className="flex gap-5 w-full">
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input rounded-none bg-white w-full"
                                value={Search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="mt-10">
                            <h5 className="text-3xl mb-5">Filter by Price</h5>
                            <RangeSlider
                                defaultValue={FilterByPrice}
                                min={FilterMinMax[0]}
                                max={FilterMinMax[1]}
                                onInput={(e: number[]) => setFilterByPrice(e)}
                            />
                        </div>
                        <div className="mt-5 flex justify-between">
                            <div>{FilterByPrice[0]}</div>
                            <div>{FilterByPrice[1]}</div>
                        </div>
                        <div className="mt-20">
                            {saleProducts?.slice(0, 3).map((el: Product, id: number) => (
                                <div className="mb-8" key={id}>
                                    <ProductComp el={el} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 py-5 lg:px-10">
                        <div className="text-gray-500">
                            <Link to={'/'}>Home</Link> / {categoryType}
                        </div>
                        <div>
                            <h3 className="text-green-500 text-5xl mt-5 font-bold">{categoryType}</h3>
                        </div>
                        <div className="flex justify-between mt-10">
                            <div>Showing all results</div>
                            <div>
                                <select className="select bg-transparent">
                                    <option>Default Sort</option>
                                    <option>Sort by price low to high</option>
                                    <option>Sort by price high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                            {filteredProducts?.map((el: Product, id: number) => (
                                <ProductComp el={el} key={id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
