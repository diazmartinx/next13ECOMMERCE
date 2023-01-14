import Link from 'next/link';

async function getData( category ) {
    return fetch('https://dummyjson.com/products/category/'+ category)
    .then((res) => res.json())
  }

export default async function Page( { params } ) {
    const data = await getData(params.category);
    return (
        <div className='m-2'>
            <span>
                <Link href={'/'}>🏠Home </Link>
                 / <span className='text-gray-500 underline'>{params.category}</span>
            </span>

            <ul>
                {data.products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/products/${product.category}/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}