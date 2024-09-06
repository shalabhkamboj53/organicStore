import { Link } from "react-router-dom";


type props = {
    el: { id: string; img: string; productName: string; category: string; rate: number; onSale: boolean; saleRate: number; }
}

const ProductComp = ({ el } : props) => {
    return (
        <Link to={`/product/${el.id}`}>
            <div className="text-center relative">
                {
                    el.onSale ? (
                        <div className="absolute -top-2 -right-2 bg-green-500 rounded-full h-[40px] w-[40px] flex items-center justify-center">
                            <span className="text-sm">Sale!</span>
                        </div>
                    ) : ''
                }
                <img src={el.img} className="w-full" alt="" />
                <p className="mt-4 text-gray-400">{el.category}</p>
                <h4 className="text-xl mt-1">{el.productName}</h4>
                <p className="mt-1"><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></p>
                <p className="text-sm mt-1 font-semibold">{el.onSale ? (
                    <><s className="text-gray-500 me-2">Rs. ${el.rate}</s><span>Rs. ${el.saleRate}</span></>
                ) : (
                    <span>Rs. ${el.rate}</span>
                )}</p>
            </div>
        </Link>
    )
}

export default ProductComp