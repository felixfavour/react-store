import CartItem from "../components/CartItem";
import products from '../components/assets/products.json'
import ProductList from "../components/ProductList";
import Banner from "../components/Banner";
import ProductHeader from "../components/ProductHeader";

export default function Home() {
  return (
    <div className="section pages">
     <div className="inner">
       <Banner />
       <ProductHeader />
       <ProductList size={4} />
     </div>
    </div>
  )
}