import { Inter } from '@next/font/google'
import {Categories} from './categories'
import {Products} from './products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='m-2'>
      <span>
      🏠<span className='underline text-gray-500'>Home</span>
      </span>
      <Products />''
    </section>
  )
}
