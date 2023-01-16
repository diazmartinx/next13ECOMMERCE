import { Inter } from '@next/font/google'
import ProductsList from '../components/server/products'
import Filters from '../components/client/filters'

const inter = Inter({ subsets: ['latin'] })

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

  return (
    <section className='m-2'>
      <span>
      🏠<span className='underline text-gray-500'>Home</span>
      </span>
      
      <ProductsList data={products}/>
    </section>
  )
}
