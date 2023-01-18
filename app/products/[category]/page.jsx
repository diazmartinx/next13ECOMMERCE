import Link from 'next/link';
import ProductList from '../../../components/server/products';
import BreadCrumb from '../../../components/client/breadcrumb'

async function getData( category ) {
    return fetch('https://dummyjson.com/products/category/'+ category)
    .then((res) => res.json())
  }

export default async function Page( { params } ) {
    const data = await getData(params.category);

    const breadcrumb = [
        {icon:'Home', name:'Home',link:'/'},
        {icon:'Category', name:params.category,link:'/products/'+params.category, active:true}
    ]

    return (
        <section className='m-2'>
            <BreadCrumb data={breadcrumb} />
            <ProductList data={data.products} />
        </section>
    )
}