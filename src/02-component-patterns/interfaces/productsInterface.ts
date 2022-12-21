import React, { ReactElement } from "react";

export interface ProductCardProps{
    children?: ReactElement | ReactElement[]
    product: Product
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