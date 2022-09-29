import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { ProductCardContainer, SpanName, SpanPrice, Footer } from './product-card.styles'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext)

  const addProductTocart = () => addItemToCart(product)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <SpanName className="name">{name}</SpanName>
        <SpanPrice className="price">{price}</SpanPrice>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductTocart}>Add to card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard