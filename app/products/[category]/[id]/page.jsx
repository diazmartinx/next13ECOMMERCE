import Link from 'next/link'
import Image from 'next/image';

async function getData(id) {
    return fetch('https://dummyjson.com/products/'+id)
    .then((res) => res.json())
}

export default async function Page( { params } ) {
    const data = await getData(params.id);
    return (
        <section>
        <h2 className='m-2'>
            <Link href={'/'}>🏠Home </Link>/ 
            <Link href={`/products/${params.category}`}> {params.category} </Link>
            / <span className='text-gray-500 underline'>{data.title}</span>
        </h2>
        <section className="flex justify-center items-center">
            <div className="border p-2">
                <div className=''><Image src={data.images[0]} width={300} height={300} alt={data.title} /></div>
                
                <h1>Product ID: {data.id}</h1>
                <h2>Product Title: {data.title}</h2>
                <h2>Product Price: {data.price}</h2>
                <h2>Product Category: {data.category}</h2>
            </div>
        </section>
        </section>
    )
}