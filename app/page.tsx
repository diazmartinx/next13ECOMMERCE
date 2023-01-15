import { Inter } from '@next/font/google'
import ProductsList from '../components/server/products'
import Filters from '../components/client/filters'

const inter = Inter({ subsets: ['latin'] })

async function getProducts() {
  return fetch('https://dummyjson.com/products')
  .then((res) => res.json())
}

export default async function Home() {
  const data = await getProducts();
  const products = data.products

  return (
    <section className='m-2'>
      <span>
      🏠<span className='underline text-gray-500'>Home</span>
      </span>
      
      <ProductsList data={products}/>
    </section>
  )
}
