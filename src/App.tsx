import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouteMap from '../RouteMap.ts'
import Navbar from './components/Navbar.tsx'
import { useEffect, useMemo, useState } from 'react'
import { AllContext } from '../context/AllContexts.ts'
import Footer from './components/Footer.tsx'
import ProductData from '../JsonData/ProductData.ts'

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

const App = () => {
  const [ProductDataState, setProductDataState] = useState<productDetails>([])

  const [Cart, setCart] = useState<CartType>({items:[]})

  useEffect(() => {
    let CartLocalData:string | CartType | null = localStorage.getItem('OurSiteCartData')
    if(CartLocalData) {
      let CartData:CartType = JSON.parse(CartLocalData)
      setCart(CartData)
    }
    setProductDataState(ProductData)
  }, [])

  let CartToLocatStorage = (data:CartType)=> {
    localStorage.setItem('OurSiteCartData', JSON.stringify(data))
  }

  let CartAmount = useMemo(() => {
    let sum = 0
    if (Cart.items) {
      Cart.items.forEach((el)=>{
        sum += el.quantity * el.rate
      })
      return sum
    }
    return 0
  }, [Cart])


  return (
    <div>
      <AllContext.Provider value={{Cart, setCart, CartAmount, CartToLocatStorage, ProductDataState}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {
              RouteMap.map((el, id)=>{
                return (
                  <Route path={el.path} key={id} Component={el.page} />
                )
              })
            }
          </Routes>
          <Footer />
        </BrowserRouter>
      </AllContext.Provider>
    </div>
  )
}

export default App