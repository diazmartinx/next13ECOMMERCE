'use client';

import { useRouter } from 'next/navigation';

export default function Search() {
    const router = useRouter();
    return (
        <form className="border" onSubmit={(e) => { 
            e.preventDefault()
            if (e.target[0].value === '') return
            router.push(`/search/${e.target[0].value}`)
            e.target[0].value = ''
            }}>
            <input type="text"  placeholder=" Este es en SERVIDOR" />
        </form>
    )
}