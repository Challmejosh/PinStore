"use client"
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context";
import CartFound from "./cartfound";
type Review = {
    comment: string
    date: string
    rating: number
    reviewerEmail: string
    reviewerName:string
}
export interface CartData{
        quantity: number
        availabilityStatus: string; 
        brand: string;
        category: string;
        description: string;
        dimensions: {width: number, height: number, depth: number};
        discountPercentage: number
        id:number
        images: string[]
        meta: {createdAt: string, updatedAt: string, barcode: string, qrCode: string}
        minimumOrderQuantity: number
        price: number
        rating:number
        returnPolicy: string
        reviews: Review[]
        shippingInformation: string
        sku: string
        stock: number
        tags: string[]
        thumbnail: string
        title: string
        warrantyInformation: string
        weight: number
}
const Cart = () => {
    const {cart} = useContext(AppContext)
     return ( 
        <div className="flex flex-col items-center justify-center ">
            {cart.length <= 0 &&<div className="flex flex-col gap-3 justify-center items-center ">
                <p className="relative w-[200px] h-[150px] ">
                    <Image src={"/empty-cart.png"} alt="empty-cart" className="object-contain" fill  />
                </p>
                <div className="px-5 py-3 rounded-[5px] flex items-center justify-center shadow w-full lg:w-[760px] h-[61px] border border-[#E5E7EB] ">
                    <p className="uppercase text-red-400 text-lg font-semibold ">your cart is currently empty</p>
                </div>
                <div className="flex items-center justify-center ">
                    <Link href="/" className="px-5 py-2 text-[#E5E7EB] bg-black rounded-[10px]  " >Return to Shop</Link>
                </div>
            </div>}
            {cart.length >=1 &&
            <CartFound cart={cart} />
            }

        </div>
     );
}
 
export default Cart;