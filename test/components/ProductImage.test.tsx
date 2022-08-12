import React from 'react'
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product } from './mocks/product';


describe('ProductImage', () => {
    it('should renders without crashing with not image', () => {
        const wrapper = renderer.create(<ProductImage img={product.img} className='custom-class' />)
        expect(wrapper).toMatchSnapshot();
    });

    it('should show a component with product image', () => {
        const wrapper = renderer.create(
            <ProductCard product={product}>
                {
                    () => (
                        <ProductImage></ProductImage>
                    )
                }
            </ProductCard >
        )
        expect(wrapper).toMatchSnapshot();
    });
});
