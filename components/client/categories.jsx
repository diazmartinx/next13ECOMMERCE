'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Categories( {data} ) {
  const pathname = usePathname();
  console.log(pathname);
  
    return  <ul className='p-2 m-2 border'>
      {data.map((category) => (
                    <li key={category}>
                        <Link href={`/products/${category}`} 
                        className={pathname == '/products/'+category 
                        ? 'text-gray-500 underline' 
                        : 'hover:text-gray-500'}>{category}</Link>
                    </li>
                ))} 
            </ul> 

}