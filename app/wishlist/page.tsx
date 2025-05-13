"use client"
import AllProducts from "@/component/allproducts";
import { AppContext } from "@/component/context";
import { useContext } from "react";

const Page = () => {
    const {wishlist} = useContext(AppContext)
    return ( 
        <div className="">
            <AllProducts products={wishlist} />
        </div>
     );
}
 
export default Page;