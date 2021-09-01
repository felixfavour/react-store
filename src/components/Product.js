import './styles/product.css'
import {Link, useRouteMatch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../features/cart/cartSlice"

export default function Product(props) {
  const dispatch = useDispatch()
  return (
    <div className="product-ctn">
      <div className="top-most">
        <img src={props.product.image} alt="" />
        <p>{ props.product.category }</p>
        <Link to={`/products/${props.product.id}`}>{ props.product.title }</Link>
        <h2 className="price">
          ₦ { props.product.price }
        </h2>
      </div>
      <button onClick={() => {dispatch(addToCart(props.product))}} >
        Add To cart
      </button>
    </div>
  )
}