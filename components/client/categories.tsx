'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Categories( {data} : {data: [string]} ) {
    const pathname = usePathname();
    return  <ul className="menu bg-base-200 w-full">
                {data.map((category: string) => (    
                        <li key={category} className={pathname == '/products/'+category ? 'bordered' : ''}>
                            <Link key={category} href={`/products/${category}`} >
                                {category}
                            </Link>
                        </li>
                ))}
            </ul>
    
}
