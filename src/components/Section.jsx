/* eslint-disable react/prop-types */
import Title from "../ui/Title";
import ProductItem from "./ProductItem";

export default function HomeSection({label, products}) {
  
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title label = {label} />
        <p className="m-auto w-3/4 text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        </p>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {products.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            img={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
