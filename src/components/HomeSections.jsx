import HomeSection from "./Section";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Policies from "./Policies";
import Sub from "./Sub";
export default function HomeSections() {
  const { products } = useContext(ShopContext);
  const [initialProducts, setInitialProducts] = useState(
    {
        latestProducts: [],
        bestSellers: []
    }
  );
  const {latestProducts, bestSellers} = initialProducts
  useEffect(() => {
    setInitialProducts({
      latestProducts: products.slice(0,10),
      bestSellers: products.filter((product) => product.bestseller).slice(0,5)
    });
  }, [products]);
  return (
    <div>
      <HomeSection label="Latest Products" products={latestProducts} />
      <HomeSection label="Best Sellers" products={bestSellers} />
      <Policies/>
      <Sub/>
    </div>
  );
}
