import { useContext, useMemo, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../ui/Title";
import ProductItem from "../components/ProductItem";
import SearchBar from "../features/search/SearchBar";
import Filters from "../components/Filters";
export default function Collection() {
  const { products, search } = useContext(ShopContext);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("");

  const toggleCategory = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else setCategories((prev) => [...prev, e.target.value]);
  };

  const toggleSubCategory = (e) => {
    if (subCategories.includes(e.target.value)) {
      setSubCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else setSubCategories((prev) => [...prev, e.target.value]);
  };

  const filteredAndSortedProducts = useMemo(() => {
    // Step 1: Filter products
    let filteredProducts = products.slice();
    if (categories.length) {
      filteredProducts = filteredProducts.filter((product) =>
        categories.includes(product.category)
      );
    }
    if (subCategories.length) {
      filteredProducts = filteredProducts.filter((product) =>
        subCategories.includes(product.subCategory)
      );
    }

    //step 2: filter search
    if (search.length) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Step 3: Sort products
    if (sortType === "low-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  }, [products, categories, subCategories, sortType, search]);

  return (
    <>
      <SearchBar />
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-5">
        {/*filters head*/}
        <Filters
          toggleCategory={toggleCategory}
          toggleSubCategory={toggleSubCategory}
        />
        <div className="w-full">
          <div className=" flex justify-between items-center mb-2">
            <Title label={"All Collections"} style={"text-2xl mb-5"} />
            <select
              className="border-2 border-gray-300 outline-none w-40 sm:w-52 p-1 sm:p-2 mb-4"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: low to high</option>
              <option value="high-low">Sort by: high to low</option>
            </select>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 gap-y-6">
            {filteredAndSortedProducts.length ? (
              filteredAndSortedProducts.map((product) => (
                <ProductItem
                  key={product._id}
                  id={product._id}
                  img={product.image}
                  name={product.name}
                  price={product.price}
                />
              ))
            ) : (
              <p>no items available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
