import './globals.css'
import Categories from '../components/client/categories';
import Header from '../components/server/header';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  weight: ['300','400','500','700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'optional'
})

async function getCategories() {
  return fetch('https://dummyjson.com/products/categories')
  .then((res) => res.json())
}

export default async function RootLayout({ children }) {
  const categories = await getCategories();
  return (
    <html lang="en" className={roboto.className} data-theme="dark">
      <head />
      <body className='flex'>
        <main className=''>
        <Header />
        <section className="grid grid-cols-[200px_minmax(900px,_1fr)]">
          <Categories data={categories} />
          {children}
        </section>    
        </main>    
      </body>
    </html>
  )
}
