"use client"
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "./searchbar";
import { useContext } from "react";
import { AppContext } from "../context";

const Navmain = () => {
    const {totalQuantity,totalWishlist} = useContext(AppContext)
    return ( 
        <div className="w-full p-3 flex flex-col gap-2 border-t border-t-[#E5E7EB]">
            <div className="lg:mx-28 flex items-center justify-between gap-3">
                <div className="w-full flex items-center justify-between gap-2 ">
                    <div className="flex items-center justify-center gap-2">
                        <p className="w-[50px] h-[50px] relative flex items-center justify-center ">
                        <Image
                        src="/logo.png"
                        alt="logo"
                        fill
                        className="object-contain"
                        />
                        </p>
                            <h1 className="font-semibold text-2xl ">PinStore</h1>
                    </div>
                    <div className="w-full hidden md:flex items-center gap-1 justify-start ">
                        <Image src="/location-icon.png" alt="location" width={20} height={20} className="" />
                        <div className="w-full flex items-center justify-center  ">
                            <div className="flex flex-col items-start">
                                <p className="text-xs text-[#030712] ">Deliver to</p>
                                <p className="font-semibold">all</p>
                            </div>
                            <Searchbar />
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-center gap-1 ">
                    <Image src="/user.png" alt="user" width={20} height={20} className="object-contain" />
                    <div className="w-full text-xs flex flex-col items-start justify-center ">
                        <p className="">Sign in</p>
                        <p className="font-semibold">Account</p>
                    </div>
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
                </div>
            </div>
            <div className="w-full md:hidden flex items-center gap-1 justify-start ">
                <div className="w-full flex items-center justify-center  ">
                    <Searchbar />
                </div>
            </div>
        </div>
     );
}
 
export default Navmain;