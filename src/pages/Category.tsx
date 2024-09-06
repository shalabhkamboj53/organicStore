import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AllContext } from "../../context/AllContexts"
import ProductComp from "../components/ProductComp"
//@ts-ignore
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


const Category = () => {
    let { categoryType } = useParams()
    let { ProductDataState } = useContext(AllContext) || {}
    const [Search, setSearch] = useState<string>('')
    const [FilterByPrice, setFilterByPrice] = useState<number[]>([0, 100])
    const [FilterMinMax, setFilterMinMax] = useState<number[]>([0, 100])

    useEffect(() => {
        setSearch('')
    }, [])

    useEffect(() => {
        if(FilterByPrice[0]===0 && FilterByPrice[1]===100 && ProductDataState?.length! > 1) {
            let MinMax = [
                ProductDataState?.sort((a, b) => {
                    return a.rate - b.rate
                })[0].rate!,
    
                ProductDataState?.sort((a, b) => {
                    return a.rate - b.rate
                })[ProductDataState.length-1].rate!
            ]
            setFilterByPrice(MinMax)
            setFilterMinMax(MinMax)
        }
    }, [ProductDataState])

    let categoryList = categoryType === "Shop" ? ProductDataState : ProductDataState?.filter((el) => {
        return el.category === categoryType
    })

    let categoryMap = categoryList!.filter((el) => {
        return Search && Search.length > 0 ? el.productName.toLocaleLowerCase().includes(Search.toLocaleLowerCase()) : el
    })

    categoryMap = categoryList!.filter((el)=>{
        return FilterByPrice[0] <= el.rate && el.rate <= FilterByPrice[1]
    })
    
    const saleProductsMap = ProductDataState?.filter((el) => {
        return el.onSale === true
    })

    return (
        <div className="bg-gray-100">
            <div className="xl:w-[80%] px-10 xl:px-auto md:mx-auto">
                <div className="grid lg:grid-cols-3 py-12">
                    <div className="lg:block hidden border-e-2 border-gray-600 border-opacity-25 py-5 px-10">
                        <div className="flex gap-5 w-full">
                            <input type="text" placeholder="Type here" className="input rounded-none bg-white w-full" value={Search!} onChange={(e) => { setSearch(e.target.value) }} />
                        </div>
                        <div className="mt-10">
                            <h5 className="text-3xl mb-5">Filter by Price</h5>
                            <RangeSlider defaultValue={FilterByPrice} min={FilterMinMax[0]} max={FilterMinMax[1]} onInput={(e: number[]) => { setFilterByPrice(e);
                             }} />
                        </div>
                        <div className="mt-5 flex justify-between">
                            <div>
                                {
                                    FilterByPrice[0]
                                } 
                            </div>
                            <div>
                                {
                                   FilterByPrice[1]
                                }
                            </div>
                        </div>
                        <div className="mt-20">
                            {
                                saleProductsMap?.slice(0, 3)?.map((el, id) => {
                                    return (
                                        <div className="mb-8" key={id}>
                                            <ProductComp el={el} key={id} />
                                        </div>
                                    )
                                })
                            }
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
                            <div>
                                Showing all results
                            </div>
                            <div>
                                <select className="select bg-transparent">
                                    <option>Default Sort</option>
                                    <option>Sort by popularity</option>
                                    <option>Sort by price low to high</option>
                                    <option>Sort by price high to low</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                            {
                                categoryMap?.map((el, id) => {
                                    return (
                                        <ProductComp el={el} key={id} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category