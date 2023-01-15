import Search from '../client/search';
import Link from 'next/link';

export default function Header() {
    return (
      <header className="p-4 border border-b flex place-items-center place-content-between">
        <Link href={'/'}><h1 className='font-bold'>NEXT 13 ECOMMERCE</h1></Link>
        <Search />
      </header>
      
    )
  }