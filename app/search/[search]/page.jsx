import ProductList from '../../../components/server/products';
import Link from 'next/link';

async function getData( param ) {
    return fetch(`https://dummyjson.com/products/search?q=${param}`)
    .then((res) => res.json())
}

export default async function Page({ params }) {
    const data = await getData(params.search);
    return (
        <div className='m-2'>
            <span>
                <Link href={'/'}>🏠Home </Link>
                 / <span className='text-gray-500 underline'>'{params.search}'</span>
            </span>
            <ProductList data={data.products} />
        </div>
    )
}