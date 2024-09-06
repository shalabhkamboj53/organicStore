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
        id: '1',
        img:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
        productName: 'Assorted Coffee',
        category: 'Groceries',
        rate: 1000,
        onSale: true,
        saleRate: 900,
        description: 'This is a coffee 1',
        stock: 10,
        feature: true,
        topSeller: true
    },
    {
        id: '2',
        img:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
        productName: 'Assorted Coffee',
        category: 'Groceries',
        rate: 1000,
        onSale: false,
        saleRate: 900,
        description: 'This is a coffee 2',
        stock: 10,
        feature: true,
        topSeller: true
    },
    {
        id: '3',
        img:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
        productName: 'Assorted Coffee',
        category: 'Juices',
        rate: 1000,
        onSale: false,
        saleRate: 900,
        description: 'This is a coffee 3',
        stock: 10,
        feature: true,
        topSeller: true
    },
    {
        id: '4',
        img:'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg',
        productName: 'Assorted Coffee',
        category: 'Juices',
        rate: 1000,
        onSale: false,
        saleRate: 900,
        description: 'This is a coffee 4',
        stock: 10,
        feature: true,
        topSeller: true
    },
]


export default ProductData