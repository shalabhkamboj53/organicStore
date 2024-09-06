import { Link } from 'react-router-dom'
import NavData from '../../JsonData/NavData'
import { useContext, useRef } from 'react'
import { AllContext } from '../../context/AllContexts'
import CartComp from './CartComp'

const Navbar = () => {
    let context = useContext(AllContext)

    const CartToggler:React.MutableRefObject<null> = useRef(null)

    if (!context) {
        throw new Error('Cannot Fetch Cart');
    }

    var { CartAmount } = context
  return (
    <div className='w-full px-10 py-5 '>
        <div className='flex justify-between items-center'>
            <div className=' flex items-center'>
                <Link to={'/'}>
                    <img src={NavData.navImg} className='w-[150px] me-10' alt="" />
                </Link>
                <ul className='justify-normal md:flex hidden'>
                    {
                        NavData.navLinks.map((el, id)=>{
                            return <li key={id} className='me-10'>
                                <Link to={el.link}>{el.title}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
            
            <div>
                <ul className='md:flex hidden justify-normal gap-9'>
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
                    <li className='text-green-600 cursor-pointer' onClick={()=>{
                        if(CartToggler.current != null) {
                            (CartToggler.current as HTMLElement).hidden = !(CartToggler.current as HTMLElement).hidden;
                        }
                    }}>{CartAmount} <i className="bi bi-cart3"></i></li>
                    <li><i className="bi bi-person-fill"></i></li>
                </ul>
            </div>
        </div>
        <CartComp CartToggler={CartToggler} />
    </div>
  )
}

export default Navbar