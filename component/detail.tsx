"use client"
import { BriefcaseBusiness, CreditCard, Heart, ShieldCheck, User } from "lucide-react";
import { FetchData } from "./useFetch";
import { useContext, useState } from "react";
import Related from "./relatedProduct";
import { AppContext } from "./context";

interface Prop{
    id?: number
    product: FetchData
}
const Detail = ({product}:Prop) => {
    const {addWishlist} = useContext(AppContext)
    const [tab,setTab] = useState<string>('description')
    const cal = (init: number,sec: number)=>{
        const first: number = Number(Math.round(init).toFixed(2))
        const second: number = Number(Math.round(sec * 12 /100).toFixed(2))
        return String((first + second).toFixed(2))
    }
    const handleTab = (text: string)=>{
        setTab(text)
    }
    return ( 
        <div className="w-full flex flex-col gap-3 items-center lg:items-start justify-center ">
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3 ">
                <div className="w-full lg:w-1/2 h-full flex items-center justify-center ">
                    <img src={product?.images[0]} alt={product?.title} className="object-contain" />
                </div>
                <div className="w-full lg:w-1/2 text-[#4B5563] flex flex-col items-start justify-start gap-3">
                    <h2 className="font-bold text-black text-lg ">{product?.title}</h2>
                    <div className="flex items-center justify-start gap-2 text-red-400 text-sm ">
                        <p className="">rating</p>
                        <p className="">{Math.round(product?.rating)}</p>
                    </div>
                    <p className="">{product?.description}</p>
                    <div className={`w-full flex gap-2 items-center justify-start `}>
                        <p className="text-2xl text-[#DC2626] font-bold ">
                            ${Math.round(product?.price).toFixed(2)}
                        </p>
                        <p className="line-through font-semibold  text-sm ">
                            ${cal(product?.price, product?.price)}
                        </p>
                    </div>
                    <div className="bg-[#FFF7ED] w-full flex flex-col sm:flex-row items-start justify-start sm:items-center sm:justify-center gap-2 border border-[#FFEDD5] p-3 rounded-[10px]  ">
                        <p className="text-[#EA580C]  ">Special offer:</p>
                        <div className="flex gap-2 items-center justify-center ">
                            <p className="bg-[#FED7AA] text-[#C2410C] border border-[#FFEDD5] p-2 rounded-[5px] font-semibold ">81</p>
                            <p className="bg-[#FED7AA] text-[#C2410C] border border-[#FFEDD5] p-2 rounded-[5px] font-semibold ">06</p>
                            <p className="bg-[#FED7AA] text-[#C2410C] border border-[#FFEDD5] p-2 rounded-[5px] font-semibold ">50</p>
                            <p className="">:</p>
                            <p className="bg-[#FED7AA] text-[#C2410C] border border-[#FFEDD5] p-2 rounded-[5px] font-semibold ">02</p>
                        </div>
                        <div className="text-xs">
                            <p className="">Remain until the end of the offer.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-start gap-3 ">
                        <div className="py-3 px-5 rounded-[5px] border border-[#D1D5DB] w-[120px] flex items-center justify-between ">
                            <p className="cursor-pointer">-</p>
                            <p className="">1</p>
                            <p className="cursor-pointer">+</p>
                        </div>
                        <div className="px-5 py-3 rounded-[5px]  cursor-pointer flex items-center gap-2 justify-center bg-[#16A34A] ">
                            <BriefcaseBusiness />
                            <p className="text-white">add to cart</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-center rounded-[10px] text-[#6B7280] gap-2 border border-[#E5E7EB] ">
                        <div className="w-full flex items-start justify-start gap-2 p-4 ">
                            <p className="w-[80px] ">
                                <CreditCard size={24} />
                            </p>
                            <p className="">
                               <b>Payment.</b> Payment upon receipt of goods, Payment by card in the department, Google Pay,
                                Online card, -5% discount in case of payment
                            </p>
                        </div>
                        <hr />
                        <div className="w-full flex items-start justify-start gap-2 p-4 ">
                            <p className="w-[80px] ">
                                <ShieldCheck size={24} />
                            </p>
                            <p className="">
                                <b>Warranty.</b> The Consumer Protection Act does not provide for the return of this product of proper quality.
                            </p>
                        </div>
                    </div>
                    <div className="flex cursor-pointer items-center justify-start gap-2 ">
                        <Heart onClick={()=>addWishlist(product)} className="cursor-pointer" />
                        <p className="">Add to wishlist</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-3 ">
                <div className="w-full flex items-start justify-start gap-1 border-b border-b-[#E5E7EB] ">
                    <p onClick={()=>handleTab("description")} className={`${tab === "description" && "border-b font-semibold "} cursor-pointer p-4`}>Description</p>
                    <p onClick={()=>handleTab("review")} className={`${tab === "review" && "border-b font-semibold "} cursor-pointer p-4`}>Reviews</p>
                </div>
                {tab==="description" && (
                    <p className="">{product?.description}</p>
                )}
                {tab==="review"&&(
                    <div className="w-full grid sm:grid-cols-2  lg:grid-cols-3 items-center justify-center gap-4 ">
                        {product?.reviews?.map((item,index)=>(
                            <div className="w-full bg-[#c0bcbc] rounded-[10px] shadow-md flex p-2 gap-2 justify-start items-start " key={index}>
                                <div className="rounded-[5px] p-2 bg-[#8a8787] flex items-center justify-center w-[30px] h-[30px] ">
                                    <User />
                                </div>
                                <div className="flex flex-col items-start justify-start ">
                                    <p className="font-semibold text-md ">{item?.reviewerName}</p>
                                    <p className="text-xs">{item?.reviewerEmail}</p>
                                    <p className="mt-3 text-sm ">{item?.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="w-full flex flex-col gap-2 items-start justify-start ">
                <h2 className="font-semibold uppercase ">Related Products</h2>
                <Related text={product?.category} />
            </div>
        </div>
     );
}
 
export default Detail;