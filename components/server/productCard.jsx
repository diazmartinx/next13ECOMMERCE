import Link from 'next/link'
import Image from 'next/image';

export default function ProductCard( {product} ){
    return <li>
        <Link className="border flex place-items-center place-content-between h-[200px]" href={`/products/${product.category}/${product.id}`}>
    
    <div className='relative border-r h-full w-1/2 '>
        <Image className='object-contain' src={product.images[0]} width={200} height={200} alt={product.title} />
    </div>
    <div className="p-4 flex flex-col place-content-center place-items-center w-1/2">
        <h1 className='font-bold'>{product.title} <small className='text-gray-500 font-semibold'>({product.brand})</small></h1>     
        <small className='text-gray-500 font-semibold text-left w-full'>{product.stock} available</small>
        <div className='flex place-content-between place-items-center w-full'>
        <span>⭐{product.rating}</span>
        <div className='relative'>
        <span className='bg-slate-100 font-semibold border p-1 text-center'>
            ${product.price}   
        </span>
        {product.discountPercentage >= 5 ? <span 
            className='text-red-500 font-semibold text-xs absolute bottom-[-1.25rem] left-1/2 translate-x-[-50%]'
            >-{product.discountPercentage}%</span> : null}
            </div>
        </div>
        
    </div>
    </Link>
    </li>
}

