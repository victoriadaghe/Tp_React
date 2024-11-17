import React, { useState } from 'react'
import { Header } from './Header/Header'
import { FormProduct } from './FormProduct/FormProduct'

import { ListProduct } from './ListProduct/ListProduct'


interface ItemProduct {
    precio: number,
    imagen: string,
    nombre: string

}


export const AppProduct = () => {
    const [products, setProduct] = useState<ItemProduct[]>([]);
    console.log(products);

    const handleAddProduct = (newItem: ItemProduct) => {
        setProduct((prev) => [...prev, newItem]);
    }

    return (
        <div>

            <Header />
            <h2 className='text-center'>FORMULARIO</h2>
            <FormProduct handleAddProduct={handleAddProduct} />
            <h2 className='text-center'>PRODUCTOS</h2>

            {

            products.length >0 ? <ListProduct arrItems={products} /> : <h2 className='text-center'>NO HAY PRODUCTOS</h2>
            }
 

        </div>
    )
}
