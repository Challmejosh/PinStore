"use client"
import AllProducts from "@/component/allproducts";
import { AppContext } from "@/component/context";
import { useContext } from "react";

const Product = () => {
    const {data,pending} = useContext(AppContext)
    return ( 
        <div className="w-full h-full flex items-center justify-center ">
            {pending && 
            (
                <div className="h-full w-full flex items-center justify-center ">
                    <div className="loader"></div>
                </div>
            )}
            {!pending&&
            <AllProducts products={data} />
            }
        </div>
     );
}
 
export default Product;