import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { AllContext } from "../../context/AllContexts"
import ProductComp from "../components/ProductComp"


const Category = () => {
    let { categoryType } = useParams()
    let { ProductDataState } = useContext(AllContext) || {}

    const categoryMap = categoryType === "Shop" ? ProductDataState : ProductDataState?.filter((el)=>{
        return el.category === categoryType
    })

    const saleProductsMap = ProductDataState?.filter((el)=>{
        return el.onSale === true
    })

  return (
    <div className="bg-gray-100">
        <div className="xl:w-[80%] px-10 xl:px-auto md:mx-auto">
            <div className="grid lg:grid-cols-3 py-12">
                <div className="lg:block hidden border-e-2 border-gray-600 border-opacity-25 py-5 px-10">
                    <div className="flex gap-5 w-full">
                            <input type="text" placeholder="Type here" className="input rounded-none bg-white w-full" />
                            <button className="btn btn-success"><i className="bi bi-chevron-right"></i></button>
                    </div>
                    <div className=" mt-20">
                        {
                            saleProductsMap?.slice(0, 3)?.map((el, id)=>{
                                return (
                                    <div className="mb-8">
                                        <ProductComp el = {el} key={id} />
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
                            categoryMap?.map((el, id)=>{
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