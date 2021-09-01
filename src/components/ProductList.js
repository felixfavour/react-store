import './styles/product-list.css'
import products from './assets/products.json'
import Product from "./Product";

export default function ProductList(props) {
  const listItems = products.map((product, index) => (
    <Product key={index} product={product} />
  ))
  const template = (
    <div className="product-list-ctn">
      <div className="inner">
        { listItems.slice(0, props.size) }
      </div>
    </div>
  )
  return template
}