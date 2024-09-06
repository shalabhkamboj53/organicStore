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

const ProductData:productDetails = [
    {
        "id": '1',
        "img": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
        "productName": "Assorted Coffee",
        "category": "Groceries",
        "rate": 35,
        "onSale": false,
        "saleRate": 32,
        "description": "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
        "stock": 10,
        "feature": true,
        "topSeller": true
    },
    {
        "id": '2',
        "img": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer.jpg",
        "productName": "Hand Sanitizer",
        "category": "Groceries",
        "rate": 15,
        "onSale": false,
        "saleRate": 12,
        "description": "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
        "stock": 10,
        "feature": true,
        "topSeller": true
    },
    {
        "id": '3',
        "img": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies.jpg",
        "productName": "Handpicked Red Chillies",
        "category": "Groceries",
        "rate": 19,
        "onSale": false,
        "saleRate": 16,
        "description": "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
        "stock": 10,
        "feature": true,
        "topSeller": true
    },
    {
        "id": '4',
        "img": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil.jpg",
        "productName": "Natural Extracted Edible Oil",
        "category": "Groceries",
        "rate": 25,
        "onSale": true,
        "saleRate": 21,
        "description": "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
        "stock": 10,
        "feature": false,
        "topSeller": true
    },
    {
        "id": '5',
        "img": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz.jpg",
        "productName": "Fresh Orange Juice",
        "category": "Juice",
        "rate": 18,
        "onSale": false,
        "saleRate": 15,
        "description": "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
        "stock": 10,
        "feature": true,
        "topSeller": false
    },
    {
        "id": '6',
        "img": "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500.jpg",
        "productName": "Cashew Butter",
        "category": "Groceries",
        "rate": 25,
        "onSale": true,
        "saleRate": 24,
        "description": "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.",
        "stock": 10,
        "feature": false,
        "topSeller": false
    }
]

export default ProductData

