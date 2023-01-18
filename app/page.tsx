import ProductsList from '../components/server/products'
import BreadCrumb from '../components/client/breadcrumb'


async function getProducts() {
  return fetch('https://dummyjson.com/products')
  .then((res) => res.json())
}

export default async function Home( {searchParams} ) {
  console.log(searchParams);
  const data = await getProducts();
  let products = data.products

  if (searchParams.order) {
    products.sort((a, b) => {
      if (searchParams.order === 'asc') {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
  }

  if (searchParams.minPrice) {
    products = products.filter((product) => product.price >= searchParams.minPrice)
  }

  if (searchParams.maxPrice) {
    products = products.filter((product) => product.price <= searchParams.maxPrice)
  }

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
