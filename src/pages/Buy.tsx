import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCart } from '../redux/actions/cartActions';
import ProductComp from '../components/ProductComp';
import { selectCartItems, selectProducts, useAppSelector } from '../redux/store';

const Buy: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [productQuantity, setProductQuantity] = useState<number>(1);

    const dispatch = useDispatch();
    const productData = useAppSelector(selectProducts);
    const cart = useAppSelector(selectCartItems);

    const currentProductData = productData.find((el: any) => el.id === id);

    const relatedProducts = productData.filter((el: any) => el.category === currentProductData?.category);

    const addItemsToCart = () => {
        let tempFlag = false;
        let updatedCart = {
            items: cart.map((data: any) => {
                if (data.id === currentProductData?.id) {
                    data.quantity += productQuantity;
                    tempFlag = true;
                }
                return data;
            })
        };

        if (!tempFlag) {
            updatedCart = {
                items: [
                    ...cart,
                    {
                        id: currentProductData?.id!,
                        img: currentProductData?.img!,
                        productName: currentProductData?.productName!,
                        rate: currentProductData?.onSale ? currentProductData?.saleRate! : currentProductData?.rate!,
                        quantity: productQuantity
                    }
                ]
            };
        }
        
        dispatch(updateCart(updatedCart));
    };

    return (
        <div>
            <div className="bg-[#f8f6f3] py-20">
                <div className="max-w-7xl mx-auto p-3">
                    <div className="mainGrid grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="col1 relative">
                            <img src={currentProductData?.img} className="w-full" alt="Product" />
                            <p className="bg-white rounded-full px-3 py-2 absolute top-2 right-2">
                                <i className="bi bi-search"></i>
                            </p>
                            {currentProductData?.onSale && (
                                <p className="bg-white rounded-full px-3 py-2 absolute top-2 left-2">
                                    SALE!
                                </p>
                            )}
                        </div>
                        <div className="col2">
                            <div className="flex flex-col gap-4">
                                <div>
                                    <h1 className="font-bold text-3xl">{currentProductData?.productName}</h1>
                                </div>
                                <div className="flex items-center">
                                    <p className="font-bold text-2xl">
                                        {currentProductData?.onSale ? (
                                            <span>
                                                <s className="me-2 text-xl text-gray-500">
                                                    ${currentProductData.rate}
                                                </s>
                                                <span>${currentProductData.saleRate}</span>
                                            </span>
                                        ) : (
                                            <span>$ {currentProductData?.rate}</span>
                                        )}
                                    </p>
                                    <p className="text-gray-600 ms-2"> + Free Shipping</p>
                                </div>
                                <div>
                                    <p className="text-gray-600">{currentProductData?.description}</p>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="px-3 py-1 border-2 border-gray-200 hover:bg-[#6a9739]"
                                        onClick={() => productQuantity > 1 && setProductQuantity(productQuantity - 1)}
                                    >
                                        -
                                    </button>
                                    <p className="px-3 py-1 border-t-2 border-b-2 border-l-0 border-r-0 border-gray-200">
                                        {productQuantity}
                                    </p>
                                    <button
                                        className="px-3 py-1 border-2 border-gray-200 hover:bg-[#6a9739]"
                                        onClick={() => setProductQuantity(productQuantity + 1)}
                                    >
                                        +
                                    </button>
                                    <button
                                        className="px-10 rounded py-1 bg-[#6a9739] text-white ml-3"
                                        onClick={addItemsToCart}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="border-t">
                                    <p>Category: {currentProductData?.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t mt-5 flex flex-col">
                        <h4 className="text-xl mt-3">Description</h4>
                        <p className="text-gray-600">{currentProductData?.description}</p>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-4xl font-bold">Related Products</h3>
                        <div className="grid md:grid-cols-6 grid-cols-3 gap-10 mt-10">
                            {relatedProducts?.map((el: any, id: number) => (
                                <ProductComp el={el} key={id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Buy;
