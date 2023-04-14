import { ProductCard } from "../component/ProductCard";
import { useProductContext } from "..";

export default function ProductList() {
  // const [productList, setProductList] = useState([]);
  const { productList } = useProductContext();

  return (
    <div>
      <h2>Welcome to meKart</h2>
      {productList.length ? (
        <div style={{ textAlign: "left" }}>
          {productList.map((product) => (
            <ProductCard key={product.id} {...product} noDetail />
          ))}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
