import ProductsList from '../components/server/products'
import BreadCrumb from '../components/client/breadcrumb'


async function getProducts() {
  return fetch('https://dummyjson.com/products')
  .then((res) => res.json())
}

export default async function Home() {
  const data = await getProducts();
  let products = data.products

  const breadcrumb = [
    {icon:'Home',name:'Home',link:'/', active: true},
  ]

  return (
    <section className='m-2'>
      <BreadCrumb data={breadcrumb}/>   
      <ProductsList data={products}/>
    </section>
  )
}
