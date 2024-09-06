import React from 'react'
import Home from './src/pages/Home'
import Category from './src/pages/Category'
import Buy from './src/pages/Buy'
import About from './src/pages/About'
import Contact from './src/pages/Contact'

const RouteMap:{id:string, path: string, page: React.FC<{}>}[] = [
    {
        id: '1',
        path:'/',
        page: Home
    },
    {
        id: '2',
        path:'/category/:categoryType',
        page: Category
    },
    {
        id: '3',
        path:'/product/:id',
        page: Buy
    },
    {
        id: '4',
        path:'/about',
        page: About
    },
    {
        id: '5',
        path:'/contact',
        page: Contact
    },
]

export default RouteMap