import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';
import React, { createContext, CSSProperties } from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandles } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product
    children: (args: ProductCardHandles) => JSX.Element
    className?: string
    style?: CSSProperties
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ product, onChange, value, initialValues });
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div style={style}
                className={`${styles.productCard} ${className}`} >
                {children({
                    count: counter,
                    isMaxCountReached,
                    product,
                    maxCount: initialValues?.maxCount,
                    increaseBy,
                    reset
                })}
            </div >
        </Provider>
    )
}
