import Link from 'next/link'
import Image from 'next/image';
import Breadcrumb from '../../../../components/client/breadcrumb';

async function getData(id) {
    return fetch('https://dummyjson.com/products/'+id)
    .then((res) => res.json())
}

export default async function Page( { params } ) {
    const data = await getData(params.id);
    const breadcrumb = [
        {icon:'Home', name:'Home',link:'/'},
        {icon:'Category', name:params.category,link:'/products/'+params.category},
        {icon:'Badge', name:data.title,link:'/', active:true}
    ]
    return (
        <section className='m-2'>
        <Breadcrumb data={breadcrumb} />
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