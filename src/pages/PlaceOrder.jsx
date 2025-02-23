import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../ui/Title";
import { ShopContext } from "../context/ShopContext";

export default function PlaceOrder() {
  const [method ,setMethod] = useState('COD');
  const {navigate} = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title label={"DELIVERY INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="text" placeholder="First Name" />
          <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="text" placeholder="Last Name" />
        </div>
        <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="email" placeholder="Email address" />
        <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="text" placeholder="Street" />
        <div className="flex gap-3">
          <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="text" placeholder="City" />
          <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="number" placeholder="Zipcode" />
          <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="text" placeholder="Country" />
        </div>
        <input className="border border-gray-300 w-full px-3.5 py-1.5 rounded" type="number" placeholder="PhoneNum" />
      </div>
      {/* Right */}
      <div className="mt-8">
        <div className="mt-8 min-w-8">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title label={"PAYMENT METHOD"} />
          <div className="flex gap-3  flex-col lg:flex-row">
            <div onClick={()=>setMethod("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-[#C586A5]' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod("razorpay")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-[#C586A5]' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod("COD")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'COD' ? 'bg-[#C586A5]' : ''}`}></p>
              <p className=' text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={() => navigate('/orders')} className="cursor-pointer bg-black text-white text-sm my-8 w-full py-3">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}
