import './globals.css'
import Header from '../components/server/header'
import Categories from '../components/client/categories'

async function getCategories() {
  return fetch('https://dummyjson.com/products/categories')
  .then((res) => res.json())
}

export default async function RootLayout({ children }) {
  const categories = await getCategories();
  return (
    <html lang="en">
      <head />
      <body className='bg-slate-50'>
        <Header />
        <section className="grid grid-cols-[200px_minmax(900px,_1fr)]">
          <Categories data={categories} />
          {children}
        </section>        
      </body>
    </html>
  )
}
