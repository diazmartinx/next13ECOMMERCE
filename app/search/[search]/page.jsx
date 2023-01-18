import ProductList from '../../../components/server/products';
import Link from 'next/link';
import Breadcrumb from '../../../components/client/breadcrumb';

async function getData( param ) {
    return fetch(`https://dummyjson.com/products/search?q=${param}`)
    .then((res) => res.json())
}

export default async function Page({ params }) {
    const data = await getData(params.search);

    const breadcrumb = [
    {icon:'Home', name:'Home',link:'/'},
    {icon:'Search', name:"'"+params.search+"'", active:true}
    ]
    return (
        <div className='m-2'>
            <Breadcrumb data={breadcrumb} />
            <ProductList data={data.products} />
        </div>
    )
}