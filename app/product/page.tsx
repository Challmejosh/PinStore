"use client"
import AllProducts from "@/component/allproducts";
import { AppContext } from "@/component/context";
import { useContext } from "react";

const Product = () => {
    const {data,pending} = useContext(AppContext)
    return ( 
        <div className="">
            {pending && 
            (
                <div className="">Loading...</div>
            )}
            {!pending&&
            <AllProducts products={data} />
            }
        </div>
     );
}
 
export default Product;