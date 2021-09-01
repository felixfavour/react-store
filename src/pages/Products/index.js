import CartItem from "../../components/CartItem";
import products from '../../components/assets/products.json'
import ProductList from "../../components/ProductList";

export default function Index() {
  return (
    <div className="product-ctn section pages">
      <div className="inner">
        <ProductList />
      </div>
    </div>
  )
}