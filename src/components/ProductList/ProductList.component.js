import Card from './Card/Card.component';
import Loading from './Loading/Loading.component';
import './ProductList.css';

const ProductList = ({products, onAddItem}) => {
  return (
    <div className='container'>
      {products.length === 0 && <Loading />}
      {products.map((product) => (
        <Card
          img={product.photo}
          imgAlt=""
          key={product.id}
          description={product.nameArm}
          secondaryText={product.price}
          buttonText="+"
          onButtonClick={() => onAddItem(product)}
        />
      ))}
    </div>
  )
}

export default ProductList;