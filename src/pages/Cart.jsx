import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../ui/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
export default function Cart() {
  const { cartItems, products, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  console.log('cartItems', cartItems);
  
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
              tempData.push({
                _id: items,
                size: item,
                quantity: cartItems[items][item],
              });
            }
        }
      }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3" >
        <Title label="YOUR CART" />
      </div>
      <div>
        {cartData.map((item) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={item._id} className="py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} alt={productData.name} className="w-16 sm:w-20" />
                <div className="ml-3">
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, e.target.value)} className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min = {1} defaultValue={item.quantity} />
              <img onClick={() => updateQuantity(item._id, item.size, 0)} src = {assets.bin_icon} alt = "delete" className = "w-4 mr-5 sm:w-5 cursor-pointer" />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className = "w-full text-end">
            <button onClick={()=> navigate('/place-order')} className = "cursor-pointer bg-black text-white text-sm my-8 px-8 py-3">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
