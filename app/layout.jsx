import './globals.css'
import Header from '../components/server/header'
import { Categories } from '../components/server/categories'


export default function RootLayout({
  children,
}) {
  
  return (
    <html lang="en">
      <head />
      <body className='bg-slate-50'>
        <Header />
        <section className="grid grid-cols-[200px_minmax(900px,_1fr)]">
          <Categories />
          {children}

        </section>
        
        </body>
    </html>
  )
}
