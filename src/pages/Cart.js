import CartItem from "../components/CartItem";
import {useSelector} from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart)
  const cartItems = cart.map((item, index) =>
    <CartItem key={index} product={item} />
  )
  return (
    <div className="cart-ctn section pages">
      <div className="inner">
        {cartItems}
      </div>
    </div>
  )
}