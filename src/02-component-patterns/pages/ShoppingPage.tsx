import {ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components'
import { Product } from "../interfaces/productsInterface"

const products : Product[] = [
  {
    id: '1',
    title: 'Coffee Mug - Magdalena',
    img: './coffee-mug.png'
  }
 
]
  

const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr/>

        <div style={{
          display:'flex',
          flexDirection:'row',
          flexWrap: 'wrap'
        }}
        >
          
          <ProductCard product={products[0]}>
            <ProductImage/>
            <ProductTitle title={''}/>
            <ProductButtons/>
          </ProductCard>

          <ProductCard product={products[0]}>
            <ProductCard.Image/>
            <ProductCard.Title title={''}/>
            <ProductCard.Buttons/>
          </ProductCard>

        </div>
        
    </div>
  )
}

export default ShoppingPage