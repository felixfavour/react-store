import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../features/cart/cartSlice";

export default function Details (props) {
  const { productId } = useParams()
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch()
  const product = products.find(p => (p.id === Number(productId)))
  return (
    <div className="product-details-ctn section pages">
      <div className="inner">
        <div className="lhs">
          <img src={product.image} alt=""/>
        </div>
        <div className="rhs">
          <div>
            {product.category}
          </div>
          <hr/>
          <h3>
            {product.title}
          </h3>
          <p>
            {product.description}
          </p>
          <hr/>
          <h1>
            ₦ {product.price}
          </h1>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}