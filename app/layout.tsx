import './globals.css'
import Header from '../components/header'
import { Categories } from './categories'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
