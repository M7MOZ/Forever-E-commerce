import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../ui/Title";

export default function CartTotal() {
    const { delivery_fee, currency, getCartAmount } = useContext(ShopContext);
    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title label="CART TOTAL" />
            </div>

            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Delivery fee</p>
                    <p>{currency}{delivery_fee}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Total</p>
                    <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                </div>
            </div>
        </div>
    )
}
