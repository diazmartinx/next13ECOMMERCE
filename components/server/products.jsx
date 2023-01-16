import Filters from '../client/filters';
import ProductCard from './productCard';

export default function ProductList( {data} ) {

    if (data.length > 0) {
        return <>
        <Filters />
        <ul className='grid grid-cols-3 gap-4 mt-2 auto-rows-max'>
        {data.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))} 
    </ul>
    </>
    } else {
        return <div className='m-2'>No products found</div>
    }
}