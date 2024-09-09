import GreenBtn from "./GreenBtn"

const Cta = () => {
    const ctaBoxData : {title: string, body: string, link: string, img: string}[] = [
        {
            title: 'Farm Fresh Fruits',
            body: 'Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.',
            link: '/',
            img: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg'
        },
        {
            title: 'Farm Fresh Fruits',
            body: 'Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.',
            link: '/',
            img: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg'
        },
        {
            title: 'Farm Fresh Fruits',
            body: 'Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.',
            link: '/',
            img: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/product11-free-img.jpg'
        },
    ]
  return (
    <div>
        <div className="bg-gray-200 relative">
            <div className="absolute -top-10 left-0 right-0">
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" className="mx-auto" alt="" />
            </div>
            <div className="lg:w-[80%] px-10 lg:px-0 py-32 grid lg:grid-cols-3 grid-cols-1 mx-auto gap-10">
                {
                    ctaBoxData.map((el, id)=>{
                        return (
                            <div className="bg-white rounded-lg py-10 px-8 shadow-lg relative overflow-hidden"  key={id}>
                                <div className=" relative z-10">
                                    <h3 className="text-2xl font-semibold mb-2">{el.title}</h3>
                                    <p>{el.body}</p>
                                    <GreenBtn className="mt-5">
                                        <i className="bi bi-arrow-right"></i> SHOP NOW
                                    </GreenBtn>
                                </div>
                                <img src={el.img} className="absolute bottom-0 right-0 w-[40%] md:w-[20%] lg:w-[50%] z-[0]" alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="bg-black">
            <div className="sm:flex justify-between w-[90%] py-10 mx-auto text-center">
                <h2 className="text-white md:text-3xl text-2xl font-bold">Get 25% Off On Your First Purchase!</h2>
                <GreenBtn className="mt-5 sm:mt-0">
                    <i className="bi bi-cart-fill"></i> SHOP NOW
                </GreenBtn>
            </div>
        </div>
        <div className="bg-gray-200">
            <div className="py-8">
                <p className="text-center text-2xl md:text-4xl font-bold">Try It For Free. No Registration Needed.</p>
            </div>
        </div>

    </div>
  )
}

export default Cta