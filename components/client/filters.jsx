'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation';

export default function Filters() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const finalLink = pathname + '?'

    return (
        <div className="mt-2 p-2 border w-full">
            <Link href={finalLink+'order=asc'}><button>ASC|</button></Link>
            <Link href={finalLink+'order=dsc'}><button>DSC|</button></Link>
            <Link href={finalLink+'minPrice=1000'}><button>minPrice|</button></Link>
        </div>
    )
}