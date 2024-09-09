const Footer = () => {
  return (
    <div className="bg-black">
        <div className="py-20 px-20 grid md:grid-cols-2 grid-cols-1 text-gray-400">
            <div className="">
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png" className="md:mx-0 mx-auto" alt="" />
                <p className="mt-10 text-lg md:text-left md:pe-48 text-center">Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 mt-20 md:mt-0">
                <div>
                    <div>
                        <h4 className="text-2xl text-white mb-5">Quick Links</h4>
                        <ul>
                            <li className="mb-1">
                                About
                            </li>
                            <li className="mb-1">
                                Cart
                            </li>
                            <li className="mb-1">
                                Checkout
                            </li>
                            <li className="mb-1">
                                Contact
                            </li>
                            <li className="mb-1">
                                Home
                            </li>
                            <li className="mb-1">
                                My account
                            </li>
                            <li className="mb-1">
                                Shop
                            </li>
                        </ul>
                    </div>
                    <div className="mt-20">
                        <h4 className="text-2xl text-white mb-5">Site Links</h4>
                        <ul>
                            <li className="mb-1">
                                Privacy Policy
                            </li>
                            <li className="mb-1">
                                Shipping Details
                            </li>
                            <li className="mb-1">
                                Offers Coupons
                            </li>
                            <li className="mb-1">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className="text-2xl text-white mb-5">Download Our Mobile App</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.
                        </p>
                    </div>
                    <div className="mt-20">
                        <h4 className="text-2xl text-white mb-5">Quick Links</h4>
                        <ul>
                            <li className="mb-1">
                                Know More About Us
                            </li>
                            <li className="mb-1">
                                Visit Store
                            </li>
                            <li className="mb-1">
                                Let's Connect
                            </li>
                            <li className="mb-1">
                                Locate Stores
                            </li>
                        </ul>
                        <div className="flex gap-5 justify-start mt-4">
                            <div>
                                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" alt="" />
                            </div>
                            <div>
                                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-5 px-20 border-t-2 border-gray-400 border-opacity-25">
            <div className="flex justify-between text-gray-400">
                <div>
                    Copyright © 2024 | Organic Store
                </div>
                <div className="flex gap-5">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer