import { useDispatch, useSelector } from 'react-redux'

import { selectCartCount, selectIsCartOpen } from '../../redux-tool/slices/cart/cartSlice'
import { setIsCartOpen } from '../../redux-tool/slices/cart/cartSlice'
import { setCartIsOpen } from '../../redux-tool/slices/cart/cartSlice'

import { ShoppingIcon, CartIconContainer, ItemCount } from  './cart-icon.styles'


const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const cartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
  
  return (
    <CartIconContainer onClick={() => dispatch(setCartIsOpen(isCartOpen))}>
      <ShoppingIcon  className="shopping-icon"/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon