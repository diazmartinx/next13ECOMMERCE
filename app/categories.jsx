import Link from 'next/link';

async function getData() {
  return fetch('https://dummyjson.com/products/categories')
  .then((res) => res.json())
}

export async function Categories() {
    const data = await getData();
    console.log(data)
    return <ul className='p-2 m-2 border'>
      {data.map((category) => (
                    <li key={category}>
                        <Link href={`/products/${category}`} className='hover:text-gray-500'>{category}</Link>
                    </li>
                ))} 
            </ul> 

}