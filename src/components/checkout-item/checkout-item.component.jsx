import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { CheckoutItemContainer, Arrow, ImageContainer, RemoveButton } from './checkout-item.styles'

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext)

  const clearItemHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemToCart(cartItem)

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