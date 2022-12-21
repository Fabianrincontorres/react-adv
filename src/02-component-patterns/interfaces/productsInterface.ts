import React, { ReactElement } from "react";

export interface ProductCardProps{
    children?: ReactElement | ReactElement[]
    product: Product,
    className?: string
}

export interface Product{
    id: string;
    title: string;
    img?: string;
}

export interface ProductButtonsProps{
    counter: number,
    increaseBy: (value:number)=>void
}

export interface ProductContextProps{
    counter: number,
    increaseBy: (value:number)=>void,
    product: Product
}

export interface ProductTitleProps{
    title: string,
    className?: string
}

export interface ProductImageProps{
    img?: string,
    className?: string
}