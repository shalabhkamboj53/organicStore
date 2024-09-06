import ProductComp from "./ProductComp"


type BestSelling = {
    details : {
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
} 

const ProductGrid = ({ details }:BestSelling) => {
  return (
    <div>
      <div className="py-32">
          <div className="text-center">
              <h3 className="text-4xl mb-8">{details.title}</h3>
              <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" className="mx-auto" alt="" />
          </div>
          <div className="mt-20">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[95%] lg:w-[80%] mx-auto gap-10">
                {
                    details.products.map((el, id)=>{
                        return (
                            <ProductComp el={el} key={id} />
                        )
                    })
                }
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductGrid