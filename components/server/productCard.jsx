import Link from 'next/link'
import Image from 'next/image';

export default function ProductCard( {product} ){
    return <Link href={`/products/${product.category}/${product.id}`}>
        <li className="border flex place-items-center place-content-between">
    
    <div className='border-r h-full flex place-items-center justify-items-center'>
        <Image src={product.images[0]} height={100} width={100}  alt={product.title} />
    </div>
    <div className="p-4 flex flex-col place-content-center place-items-center">
        <h1 className='font-bold'>{product.title} <small className='text-gray-500 font-semibold'>({product.brand})</small></h1>     
        <small className='text-gray-500 font-semibold text-left w-full'>{product.stock} available</small>
        <div className='flex place-content-between place-items-center w-full'>
        <span>⭐{product.rating}</span>
        <span className='bg-slate-100 font-semibold border p-1 text-center'>
            ${product.price}<br></br>
            {product.discountPercentage >= 5 ? <span
            className='text-red-500 font-semibold text-xs'
            >-{product.discountPercentage}%</span> : null} 
        </span>
        </div>
        
    </div>
    
    </li></Link>
}

