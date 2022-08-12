import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProductCard, {ProductTitle, ProductImage, ProductButtons} from 'adlb-product-card';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

const App = () => {
  return (
    <div>
      <ProductCard
        key={product}
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
