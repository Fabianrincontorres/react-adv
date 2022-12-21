import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import { ProductImageProps } from "../interfaces/productsInterface";

import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'


export const ProductImage=({img, className}: ProductImageProps)=>{

    const {product} = useContext(ProductContext)
    let imgToShow:string;

    if(img){
        imgToShow = img
    } else if (product.img){
        imgToShow = product.img
    }else{
        imgToShow=noImage
    }

    return(
        <img src={imgToShow} alt={"No"} className={`${styles.productImg} ${className}`}/>
    )
}