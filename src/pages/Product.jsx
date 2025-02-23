/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

export default function Product() {
  const { productId } = useParams();
  
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [productImage, setProductImage] = useState("");
  const [size, setSize] = useState("");
  const fetchProductData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setProductImage(product.image[0]);
        return null;
      }
    });
  };
  useEffect(() => { 
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-6 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((image, index) => (
                <img
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  key={index}
                  src={image}
                  alt={productData.name}
                  onClick={() => setProductImage(image)}
                />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              src={productImage}
              alt={productData.name}
            />
          </div>
        </div>


        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5"/>
            <img src={assets.star_icon} alt="" className="w-3 5"/>
            <img src={assets.star_icon} alt="" className="w-3 5"/>
            <img src={assets.star_icon} alt="" className="w-3 5"/>
            <img src={assets.star_dull_icon} alt="" className="w-3 5"/>
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border cursor-pointer border-gray-100 px-4 py-2 ${item === size? 'border-orange-500': ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5"></hr>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-20">
        <div className="flex gap">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus eius amet libero sed aut voluptatum modi laborum reiciendis minima natus, nostrum maiores fugiat voluptas perferendis ducimus error. Inventore, dolores harum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur tempore doloribus libero eligendi ea fugiat sed porro laboriosam consequatur, dolor magni itaque excepturi, possimus accusamus illo asperiores natus quisquam?</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} id = {productId}/>
    </div>
  ):
  (
    <div className="opacity-0"></div>
  )
}
