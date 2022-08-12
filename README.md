# ALBD-Product-Card

Paquete de Prueba


### Antony Albites

## Ejemplo

```
import ProductCard, { ProductTitle, ProductImage, ProductButtons } from 'adlb-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```