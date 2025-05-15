"use client"
import { useContext } from "react";
import Topic from "./topic";
import { AppContext } from "../context";
import { Briefcase, Heart, Plus } from "lucide-react";
import Link from "next/link";

const Deals = () => {
    const {data,pending,handleCart,addWishlist} = useContext(AppContext)
    const topic: string = "deals of the day"
    const subtext: string = "The freshest green grocery product are waiting for you"
    const cal = (init: number,sec: number): string=>{
        const first: number = Number(Math.round(init).toFixed(2))
        const second: number = Number(Math.round(sec * 12 /100).toFixed(2))
        return String((first + second).toFixed(2))
    }
    return ( 
        <div className="flex flex-col gap-2 items-center justify-center ">
            <Topic topic={topic} subtext={subtext} />
            {pending && 
                <div className="h-[600px] flex items-center justify-center ">
                    <div className="loader"></div>
                </div>
            }
            {!pending && (
                <div className="flex flex-col lg:flex-row justify-between gap-3 items-start h-full w-full ">
                    <div className="flex flex-col h-full items-start justify-between p-3 rounded-lg border border-[#E5E7EB] w-full ">
                        {data?.slice(0,2)?.map((item,index)=>(
                            <div key={item?.id} className={`${index === 1 && "border-t border-t-[#E5E7EB] " } w-full flex flex-col md:flex-row items-start justify-between gap-1 `}>
                                <div className="w-full p-2 flex flex-col gap-1 items-start justify-center ">
                                    <div className="w-full flex items-center justify-end  ">
                                        <Heart onClick={()=>addWishlist(item)} className="cursor-pointer" />
                                    </div>
                                    <div className="w-full flex items-center justify-center ">
                                        <img src={item?.images[0]} alt="" className="object-contain w-full h-[100px] " />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col items-start justify-between gap-2 p-2 ">
                                    <Link href={`/detail/${item?.id}`} className="font-semibold text-sm flex w-full ">{item?.title}</Link>
                                    <div className="flex gap-2 items-center justify-start text-[#DC2626] text-xs ">
                                        <p className="">rating</p>
                                        <p className="">{item?.rating}/10</p>
                                    </div>
                                    <div className="flex items-baseline justify-start gap-1 ">
                                        <p className="text-2xl text-[#DC2626] font-bold">${Math.round(item?.price).toFixed(2)}</p>
                                        <p className="line-through font-semibold  text-sm ">${cal(item?.price,item?.price)}</p>
                                    </div>
                                    <div onClick={()=>handleCart(data,item)} className="bg-white hover:bg-[#634C9F] hover:text-white px-5 p-2 cursor-pointer text-[#634C9F] rounded-full w-full flex items-center justify-between border border-[#634C9F] ">
                                        <p className="">add to cart</p>
                                        <Plus />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border border-[#E5E7EB] h-full flex items-center justify-center  rounded-lg ">
                        {data?.slice(0,1)?.map((item)=>(
                            <div className="w-full h-full flex flex-col md:flex-row items-start justify-between  " key={item?.id} >
                                <div className="w-full h-full p-5 flex flex-col gap-1 items-start justify-center ">
                                    <div className="w-full flex items-center justify-end  ">
                                        <Heart onClick={()=>addWishlist(item)} className="cursor-pointer" />
                                    </div>
                                    <div className="w-full h-full flex items-center justify-center ">
                                        <img src={item?.images[0]} alt="" className="object-contain w-full h-full " />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-3 items-start justify-between h-full p-2 ">
                                    <p className="font-semibold text-lg flex w-full ">{item?.title}</p>
                                    <div className="flex gap-2 items-center justify-start text-[#DC2626] text-sm ">
                                        <p className="">rating</p>
                                        <p className="">{item?.rating}/{10}</p>
                                    </div>
                                    <div className="flex items-baseline justify-start gap-1 ">
                                        <p className="text-3xl text-[#DC2626] font-bold">${Math.round(item?.price).toFixed(2)}</p>
                                        <p className="line-through font-semibold  text-md ">${cal(item?.price,item?.price)}</p>
                                    </div>
                                    <Link href={`/detail/${item?.id}`} className="">
                                        <p className="">{item?.description}</p>
                                    </Link>
                                    <div className="w-full border-t-[2px] gap-3 flex flex-col items-start justify-center text-[#9CA3AF] text-sm ">
                                        <p className="">
                                            This product is about to run out
                                        </p>
                                        <div className="w-full h-2 gradient-bar"></div>
                                        <p className="flex gap-2 items-center justify-center ">
                                            <span className="">available only:</span>
                                            <span className="">{item?.stock}</span>
                                        </p>
                                    </div>
                                    <div onClick={()=>handleCart(data,item)} className="bg-[#16A34A] text-white cursor-pointer rounded-[10px] px-5 py-3 flex w-full items-center justify-start gap-2 ">
                                        <Briefcase />
                                        <p className="">add to cart</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        </div>
     );
}
 
export default Deals;