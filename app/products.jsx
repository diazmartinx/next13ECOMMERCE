import Link from 'next/link'

async function getProducts() {
  return fetch('https://dummyjson.com/products', { cache: 'no-store' })
  .then((res) => res.json())
}

export async function Products() {
    const data = await getProducts();
    const products = data.products

    return <ul className='m-2 grid grid-cols-3 gap-4'>{products.map((product) => (
        <li key={product.id} className="border">
            <Link href={`/products/${product.category}/${product.id}`}>
            <div className="p-4 m-2">
                <h1>{product.title}</h1>
                <p>${product.price}</p>
            </div>
            </Link>
        </li>
    ))} </ul>

}