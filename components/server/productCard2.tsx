import Link from 'next/link'
import Image from 'next/image';

type ProductCard2Props = {
    product: {
        id: string,
        title: string,
        price: number,
        stock: number,
        images: [string],
        category: string
    }
}

export default function ProductCard2( {product} : ProductCard2Props ){
    return <div className="card card-side bg-base-300 shadow-xs rounded-sm">
    <figure><Image className='object-contain' src={product.images[0]} width={200} height={200} alt={product.title} /></figure>
    <div className="card-body">
      <h2 className="card-title">{product.title}</h2>
    
      <div className="card-actions justify-end flex flex-row">
        <div className="badge badge-ghost">{product.stock} available</div>
        <div className="badge badge-accent badge-outline badge-lg">${product.price}</div>
        <Link href={`/products/${product.category}/${product.id}`}><button className="btn btn-sm btn-outline">+ Info</button></Link>
      </div>
    </div>
  </div>
}

