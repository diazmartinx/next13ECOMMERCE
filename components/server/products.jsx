import Link from 'next/link'
import Image from 'next/image';
import Filters from '../client/filters';

export default function ProductList( {data} ) {


    if (data.length > 0) {
        return <>
        <Filters />
        <ul className='grid grid-cols-3 gap-4 mt-2'>
        {data.map((product) => (
            <li key={product.id} className="border flex place-items-center ">
                <Link href={`/products/${product.category}/${product.id}`}>
                <div className='border-r h-full flex place-items-center justify-items-center'>
                    <Image src={product.images[0]} height={100} width={100}  alt={product.title} />
                </div>
                </Link>
                <div className="p-4 flex flex-col place-content-center place-items-center">
                    <h1>{product.title}</h1>
                    <p>${product.price}</p>
                </div>
                
            </li>
        ))} 
    </ul>
    </>
    } else {
        return <div className='m-2'>No products found</div>
    }
}