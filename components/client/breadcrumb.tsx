'use client';
import Link from 'next/link';

type BreadcrumbProps = {
    icon: string,
    name: string,
    link: string, 
    active?:boolean | false
}

export default function Breadcrumb( {data} : {data: [BreadcrumbProps]} ) {
    console.log(data)
        return <div className="text-sm breadcrumbs">
        <ul>
            {data.map((item: BreadcrumbProps) => (
                <li key={item.name}>
                {item.active
                ? <div className="badge badge-secondary badge-outline">{item.name}</div>
                : <Link href={item.link}>{item.name}</Link>
                }
                </li>
                
            ))}
        </ul>
      </div> 
}