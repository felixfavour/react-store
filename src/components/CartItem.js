import './styles/cart.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../features/cart/cartSlice";
export default function CartItem(props) {
  // State Declaration
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  // Methods
  const handleChange = (event) => {
    setQuantity(Number(event.target.value))
  }

  // View Return
  return (
    <div className="cart-item shadow">
      <div className="image sect">
        <img src={props.product.image} alt=""/>
      </div>
      <div className="texts sect">
        <div className="category">
          {props.product.category}
        </div>
        <h4 className="name">
          {props.product.title}
        </h4>
        <button className="remove-btn" onClick={() => {dispatch(removeFromCart(props.product))}}>
          Remove From Cart
        </button>
      </div>
      <div className="quantity sect">
        <select onChange={handleChange} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="up sect">
        <h4>
          Unit Price
        </h4>
        <div>
          ₦ {props.product.price}
        </div>
      </div>
      <div className="st sect">
        <h4>
          Sub-total
        </h4>
        <div>
          ₦ {quantity * props.product.price}
        </div>
      </div>
    </div>
  )
}