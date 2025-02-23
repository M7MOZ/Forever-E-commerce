/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "../ui/Title";
export default function RelatedProducts({category, subCategory}) {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = [...products];
            productsCopy = productsCopy.filter(product => product.category === category && product.subCategory === subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products])
    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <Title label="Related Products"/>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((product, index) => (
                    <ProductItem key = {index} id = {product._id} name = {product.name} price = {product.price} img = {product.image} />
                ))}
            </div>
        </div>
    )
}
