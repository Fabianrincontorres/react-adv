import {ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components'
import { Product } from "../interfaces/productsInterface"

import '../styles/custom-styles.css'

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
          {/* Componentes importados */}
          <ProductCard product={products[0]}>
            <ProductImage/>
            <ProductTitle title={''}/>
            <ProductButtons/>
          </ProductCard>

          {/* Componentes anidados */}
          <ProductCard product={products[0]}>
            <ProductCard.Image/>
            <ProductCard.Title title={'Coffee Mug - Caso CCP'}/>
            <ProductCard.Buttons/>
          </ProductCard>

        {/* Componentes con extensible Styles */}
          <ProductCard 
            product={products[0]}
            className="bg-dark text-white"
          >
            <ProductImage className='custom-image'/>
            <ProductTitle title={'Ext Style'} className='text-white'/>
            <ProductButtons className='custom-buttons'/>
          </ProductCard>
        </div>
        
    </div>
  )
}

export default ShoppingPage