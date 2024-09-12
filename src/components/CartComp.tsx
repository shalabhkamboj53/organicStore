import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCartAmount, selectCartItems, useAppSelector } from '../redux/store';
import { removeItem } from '../redux/actions/cartActions';
import GreenBtn from './GreenBtn';

interface CartCompProps {
    CartToggler: React.RefObject<HTMLDivElement>;
}

const CartComp: React.FC<CartCompProps> = ({ CartToggler }) => {
    const dispatch = useDispatch();
    const Cart = useAppSelector(selectCartItems);
    const CartAmount = useAppSelector(selectCartAmount);
    
    const editCardHandler = (id: string) => {
        dispatch(removeItem(id));
    };

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 bottom-0 before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:content-[''] before:bg-black before:bg-opacity-50 z-30" hidden ref={CartToggler}>
                <div>
                    <div className="fixed right-0 top-0 bottom-0 w-[30rem] bg-white z-50">
                        <div className="relative h-full">
                            <div className="mx-10 py-10">
                                <div className="flex justify-between">
                                    <div>
                                        Shopping Cart
                                    </div>
                                    <div>
                                        <i className="bi bi-x-lg hover:cursor-pointer" onClick={() => { CartToggler.current!.hidden = !CartToggler.current!.hidden }}></i>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mx-5 my-5">
                                {
                                    Cart.length > 0 ? Cart.map((el, id) => (
                                        <div className="flex justify-between" key={id}>
                                            <div className="flex gap-3">
                                                <img src={el.img} className="w-16" alt="" />
                                                <div>
                                                    <h5>{el.productName}</h5>
                                                    <p>
                                                        <span>{el.quantity}</span> x <span>{el.rate}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <i className="bi bi-x-circle" onClick={() => editCardHandler(el.id)}></i>
                                            </div>
                                        </div>
                                    )) : <div className="w-full h-full flex justify-center items-center">
                                        No products in the cart.
                                    </div>
                                }
                            </div>
                            <div className="mx-5 py-5 absolute bottom-0 left-0 right-0">
                                <hr />
                                <div className="flex justify-between py-3">
                                    <div>
                                        <span>Subtotal: </span>
                                    </div>
                                    <div>
                                        <span>$ {CartAmount}</span>
                                    </div>
                                </div>
                                <hr />
                                <GreenBtn className="w-full mt-5">
                                    CHECKOUT
                                </GreenBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartComp;
