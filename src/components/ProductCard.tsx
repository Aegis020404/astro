import { IProduct } from "../types"
import { useState } from 'preact/hooks'
interface ProductCardProps {
    product: IProduct
}

export default function ProductCard({ product }: ProductCardProps) {
    const [details, setDetails] = useState(true)
    const toggle = () => setDetails(state => !state)
    return <div className='border rounded mb-2 p-3'>
        <h2 className='text-lg'>{product.title}</h2>
        <p className='font-bold'>{product.price}</p>
        <div>
            <a href={`/product/${product.id}`}>Open Product</a>
        </div>
        <button onClick={toggle} className='border py-2 px-4 bg-yellow-400 text-white'>Toogle Description</button>

        {details && <p>{product.description}</p>}
    </div>
}