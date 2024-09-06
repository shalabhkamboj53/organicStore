import { useContext } from "react"
import Cta from "../components/Cta"
import Hero from "../components/Hero"
import ProductGrid from "../components/ProductGrid"
import { AllContext } from "../../context/AllContexts"

type productGridType = {
    title: string,
    products: {
        id: string,
        img: string,
        productName: string,
        category: string,
        rate: number,
        onSale: true | false,
        saleRate: number
    }[]
}

const Home = () => {
    let { ProductDataState } = useContext(AllContext) || {};

    const BestSelling:productGridType = {
        title: 'Best Selling Products',
        products: ProductDataState?.filter((el)=>{
            return el.feature
        }) || []
    }


    const TrendingProducts:productGridType = {
        title: 'Trending Products',
        products: ProductDataState?.filter((el)=>{
            return el.topSeller
        }) || []
    }
  return (
    <div>
        <Hero />
        <ProductGrid details={BestSelling} />
        <Cta />
        <ProductGrid details={TrendingProducts} />

    </div>
  )
}

export default Home