import Link from 'next/link';
import ProductList from '../../../components/server/products';

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

            <ProductList data={data.products} />
        </div>
    )
}