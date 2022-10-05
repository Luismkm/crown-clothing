import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action'

import { CheckoutItemContainer, Arrow, ImageContainer, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span>{name}</span>
      <span>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <span>{quantity}</span>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </span>
      <span>{price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem