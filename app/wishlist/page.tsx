"use client"
import AllProducts from "@/component/allproducts";
import { AppContext } from "@/component/context";
import { useContext } from "react";

const Page = () => {
    const {wishlist} = useContext(AppContext)
    return ( 
        <div className="h-full w-full ">
            {wishlist.length <= 0 &&
                (
                    <div className="flex flex-col items-center justify-center h-full  ">
                        <div className="loader"></div>
                        <div className="">
                            wishlist is empty
                        </div>
                    </div>
                )
            }
            {wishlist.length >= 1 &&
            <AllProducts products={wishlist} />
            }
        </div>
     );
}
 
export default Page;