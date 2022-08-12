import React from 'react'
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product } from './mocks/product';


describe('ProductTitle', () => {
    it('should renders without crashing with custom title', () => {
        const wrapper = renderer.create(<ProductTitle title='Custom Product' className='custom-class' />)
        expect(wrapper).toMatchSnapshot();
    });

    it('should show a component with product title', () => {
        const wrapper = renderer.create(
            <ProductCard product={product}>
                {
                    () => (
                        <ProductTitle></ProductTitle>
                    )
                }
            </ProductCard >
        )
        expect(wrapper).toMatchSnapshot();
    });
});
