"use client"
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context";

const WishAndCart = () => {
    const {totalWishlist,totalQuantity} = useContext(AppContext)
    return ( 
        <div className="w-full flex items-center justify-center gap-1 ">
            <Link href={"/wishlist"} className="relative p-2 ">
                <p className="font-semibold absolute top-0 right-0 text-red-400 ">{totalWishlist}</p>
                <Heart />
            </Link>
            <Link href={"/cart"} className="relative p-2 " >
                <p className="font-semibold absolute top-0 right-0 text-red-400 ">{totalQuantity}</p>
                <ShoppingCart />
            </Link>
        </div>
     );
}
 
export default WishAndCart;