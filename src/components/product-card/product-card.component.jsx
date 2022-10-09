import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../redux-tool/slices/cart/cart.selector'
import { addItemToCart } from '../../redux-tool/slices/cart/cart.action'
import { setItemToCart } from '../../redux-tool/slices/cart/cartSlice'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { ProductCardContainer, SpanName, SpanPrice, Footer } from './product-card.styles'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  
  const addProductTocart = () => dispatch(setItemToCart(addItemToCart(cartItems,product)))

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <SpanName className="name">{name}</SpanName>
        <SpanPrice className="price">{price}</SpanPrice>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addProductTocart()}>Add to card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard