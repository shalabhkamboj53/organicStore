import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; 
import NavData from '../../JsonData/NavData';
import CartComp from './CartComp';

const Navbar: React.FC = () => {
    const cartAmount = useSelector((state: RootState) => state.cart.cartAmount); 
    const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity); 

    const CartToggler = useRef<HTMLDivElement | null>(null);

    return (
        <div className='w-full px-10 py-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link to={'/'}>
                        <img src={NavData.navImg} className='w-[150px] me-10' alt="Site Logo" />
                    </Link>
                    <ul className='justify-normal lg:flex hidden'>
                        {NavData.navLinks.map((el, id) => (
                            <li key={id} className='me-10'>
                                <Link to={el.link}>{el.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <ul className='lg:flex hidden justify-normal gap-9'>
                        <li>
                            <Link to={'/about'}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>
                                Contact
                            </Link>
                        </li>
                        <li className='text-green-600 cursor-pointer' onClick={() => {
                            if (CartToggler.current) {
                                CartToggler.current.hidden = !CartToggler.current.hidden;
                            }
                        }}>
                            { cartAmount } &nbsp;
                            <div className="indicator">
                                <span className="indicator-item badge bg-green-600 border-none text-white text-[12px]">{ cartQuantity }</span>
                                <i className="bi bi-cart3"></i>
                            </div>
                        </li>
                        <li><i className="bi bi-person-fill"></i></li>
                    </ul>
                </div>

                <div className='lg:hidden block'>
                    <ul className='flex justify-normal gap-14'>
                        <li className='text-green-600 cursor-pointer' onClick={() => {
                            if (CartToggler.current) {
                                CartToggler.current.hidden = !CartToggler.current.hidden;
                            }
                        }}>
                            { cartAmount } &nbsp;
                            <div className="indicator">
                                <span className="indicator-item badge bg-green-600 border-none text-white text-[12px]">{ cartQuantity }</span>
                                <i className="bi bi-cart3"></i>
                            </div>
                        </li>

                        <li>
                            <i className="bi bi-list text-2xl cursor-pointer"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <CartComp CartToggler={CartToggler} />
        </div>
    );
};

export default Navbar;
