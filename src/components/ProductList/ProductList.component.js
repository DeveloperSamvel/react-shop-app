import React from 'react';
import Card from './Card/Card.component';
import './ProductList.css';

const ProductList = ({products, onAddItem}) => {
  return (
    <div className='container'>
      {products.map((product) => (
        <Card
          img=""
          imgAlt=""
          key={product.id}
          title={product.name}
          description={product.description}
          secondaryText={product.price}
          buttonText="Add"
          onButtonClick={() => onAddItem(product)}
        />
      ))}
    </div>
  )
}

export default ProductList;