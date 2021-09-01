import {Link} from "react-router-dom";

export default function ProductHeader (props) {
  return (
    <div className="product-header">
      <h3>Popular Products</h3>
      <Link to="/products">See All</Link>
    </div>
  )
}