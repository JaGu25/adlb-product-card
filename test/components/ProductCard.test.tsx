import React from 'react'
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product } from './mocks/product';

const { act } = renderer;

describe('ProductCard', () => {
    it('should renders without crashing with custom title', () => {
        const wrapper = renderer.create(<ProductCard product={product} className='custom-class'>
            {
                () => (<h1>Product Card</h1>)
            }
        </ProductCard>)
        expect(wrapper).toMatchSnapshot();
    });

    it('should increase the counter', () => {
        const wrapper = renderer.create(<ProductCard product={product} className='custom-class'>
            {
                ({ count, increaseBy }) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={() => increaseBy(1)}>+1</button>
                    </>
                )
            }
        </ProductCard>)

        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1');
    });

});
