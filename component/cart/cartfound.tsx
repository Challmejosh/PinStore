"use client"
import { ArrowDown, ArrowUp, Trash } from "lucide-react";
// import { FetchData } from "../useFetch";
import { CartData } from "./cart";
import { useContext } from "react";
import { AppContext } from "../context";
import Link from "next/link";

interface Prop{
    cart: CartData[]
}
const CartFound = ({cart}:Prop) => {
    const {cartIncrement,cartDecrement,delCart,cartTotal} = useContext(AppContext)
    return ( 
        <div className="grid gap-3  ">
            {cart?.map((item)=>(
                <div className="px-5 py-3 rounded-[5px] flex gap-3 items-center justify-start shadow w-full lg:w-[760px] h-[75px] border border-[#E5E7EB] "key={item?.id}>
                    <div className="w-full h-full flex gap-2 items-center justify-start ">
                        <div className="w-[50px] h-full ">
                            <img src={item?.images[0]} alt={item?.title} className=" w-full h-full object-contain " />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold">{item?.title}</p>
                            <p className="line-clamp-2 text-xs ">{item?.description}</p>
                        </div>
                    </div>
                    <div className="w-full flex gap-2 items-center justify-between ">
                        <div className="flex gap-1 items-center justify-center ">
                            <p className="">{item?.quantity}</p>
                            <div className="flex flex-col gap-1">
                                <ArrowUp onClick={()=>cartIncrement(item)} className="cursor-pointer" />
                                <ArrowDown onClick={()=>cartDecrement(item)} className="cursor-pointer" />
                            </div>
                        </div>
                        {/* total */}
                        <div className="flex gap-2 items-center justify-between">
                            <p className="">${(item?.price).toFixed(2)}</p>
                            <p className="">{(Number(item?.quantity) * item?.price).toFixed(2)}</p>
                        </div>
                        {/* delete */}
                        <Trash onClick={()=>delCart(item)} className="cursor-pointer" />
                    </div>
                </div>
            ))}
            <div className="w-full flex flex-col gap-2 items-center justify-center ">
                <div className="font-semibold w-full flex items-center justify-between ">
                    <p className="">Total</p>
                    <p className="text-red-400">${cartTotal.toFixed(2)}</p>
                </div>
                <Link href={"/checkout"} className="w-full bg-red-400 p-3 rounded-[10px] text-white flex items-center justify-center " >proceed to checkout</Link>
            </div>
        </div>
     );
}
 
export default CartFound;