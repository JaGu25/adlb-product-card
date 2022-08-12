import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';

export interface Product {
    id: string
    img?: string
    title: string
}

export interface ProductContextProps {
    counter: number
    product: Product
    increaseBy: (value: number) => void
    maxCount?: number
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element
    Buttons: (Props: ProductButtonsProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element
    Title: (Props: ProductTitleProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product
    count: number
}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number
    maxCount?: number
}

export interface ProductCardHandles {
    count: number
    isMaxCountReached: boolean
    maxCount?: number
    product: Product
    increaseBy: (value: number) => void
    reset: () => void
}