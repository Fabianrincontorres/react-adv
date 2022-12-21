import { useProduct } from '../hooks/useProduct'
import { createContext} from 'react'
import {ProductImage, ProductTitle, ProductButtons} from '../components'
import {ProductCardProps as Props, ProductContextProps} from '../interfaces/productsInterface'

import styles from '../styles/styles.module.css'


//Creacion de un context para compartir data entre componentes hijos y padre
export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext


export const ProductCard = ({children, product, className}: Props) => {

    const {counter, increaseBy} = useProduct();

  return (
    <Provider
        value={{
            counter,
            increaseBy,
            product
        }}
    >
        <div className={`${styles.productCard} ${className}`}>
            {children}       
        </div>
    </Provider>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons