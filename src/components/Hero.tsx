import GreenBtn from "./GreenBtn"


const Hero = () => {
    const feature : { title:string, body:string, icon:string }[] = [
        {
            title: 'Free Shipping',
            body: 'Above $5 Only',
            icon: 'bi bi-truck'
        },
        {
            title: 'Certified Organic',
            body: '100% Guarantee',
            icon: 'bi bi-journal-medical'
        },
        {
            title: 'Huge Savings',
            body: 'At Lowest Price',
            icon: 'bi bi-cash'
        },
        {
            title: 'Easy Returns',
            body: 'No Questions Asked',
            icon: 'bi bi-recycle'
        },
    ]
  return (
    <div>
        <div className="flex justify-center items-center md:px-20 before:bg-[url('https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/leaves-free-img.png')] before:bg-no-repeat before:bg-right-bottom before:absolute relative before:top-0 before:left-0 before:right-0 before:bottom-0 before:content-[''] before:-z-10 before:opacity-20 before:bg-[length:28%_auto] text-center md:text-left py-32" >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                <div className="my-auto">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" className="w-full" alt="" />
                </div>
                <div className="">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" className="mx-auto md:mx-0" alt="" />
                    <h3 className="mt-10">Best Quality Products</h3>
                    <h2 className="mt-5 text-xl lg:text-6xl md:text-3xl font-medium">Join The Organic Movement!</h2>
                    <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <GreenBtn className='mt-14'>
                        <i className="bi bi-cart-fill"></i> SHOP NOW
                    </GreenBtn>
                </div>

            </div>
        </div>
        <div className="bg-black py-10 ">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:w-[80%] mx-auto gap-10">
                {
                    feature.map((el, id)=>{
                        return (
                            <div className="flex text-white bg-gray-600 py-10 px-8 gap-8 items-center rounded-sm" key={id}>
                                <div>
                                    <i className={`${el.icon} text-3xl font-bold`}></i>
                                </div>
                                <div>
                                    <h3>{el.title}</h3>
                                    <p>{el.body}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Hero