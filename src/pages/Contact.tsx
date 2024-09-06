

const Contact = () => {
  return (
    <div>
        <h1 className="mt-20 mb-48 text-center text-6xl font-bold">Get in Touch</h1>
        <div className="bg-gray-100 py-20">
            <div className="relative -mt-40 bg-white pt-32 pb-20 xl:w-[80%] lg:w-[90%] mx-10 lg:mx-auto" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                <div className="absolute -top-10 left-0 right-0">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" className="mx-auto" alt="" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-20">
                    <div className="border-[1px] border-gray-300 px-10 py-10 text-center">
                        <i className="bi bi-telephone-fill text-4xl text-green-500"></i>
                        <p className="mt-3">
                            +123 456 7890<br/>
                            +123 456 7890
                        </p>
                    </div>
                    <div className="border-[1px] border-gray-300 px-10 py-10 text-center">
                        <i className="bi bi-envelope text-4xl text-green-500"></i>
                        <p className="mt-3">
                            info@example.com<br />
                            support@example.com
                        </p>
                    </div>
                    <div className="border-[1px] border-gray-300 px-10 py-10 text-center">
                        <i className="bi bi-geo-alt text-4xl text-green-500"></i>
                        <p className="mt-3">
                            1569 Ave, New York,<br />
                            NY 10028, USA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact