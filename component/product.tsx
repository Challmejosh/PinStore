"use client"
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { SwiperSlide,Swiper } from "swiper/react";
import { Heart } from "lucide-react";
import Link from "next/link";
import useFetch from './useFetch';
import { useContext } from 'react';
import { AppContext } from './context';

export interface Prop{
    text: string|undefined|string[]
}
const Product = ({text}: Prop) => {
    const {data,pending} = useFetch(`https://dummyjson.com/products/category/${text}`)
    const {handleCart,addWishlist} = useContext(AppContext)
    const cal = (init: number,sec: number)=>{
        const first: number = Number(Math.round(init).toFixed(2))
        const second: number = Number(Math.round(sec * 12 /100).toFixed(2))
        return String((first + second).toFixed(2))
    }
    return ( 
        <div className="flex flex-col  md:bg-transparent gap-2">
            {pending && 
            <div className="h-full flex items-center justify-center ">
                Loading...
            </div>
            }
            {!pending && (
                <div className="">
                    {(!data || data?.length <= 0) && 
                    (
                        <div>empty</div>
                    )
                    }
                </div>
            )}
            {!pending && 
                <div className="overflow-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:grid-cols-6">
                    {data?.map((item)=>(
                        <div key={item?.id} className={` overflow-auto relative h-full border-[#9CA3AF] border-l cursor-pointer border flex p-2 flex-col items-center justify-between `}>
                            <div className="w-full flex items-center justify-between  ">
                                <div className="px-2 py-1 bg-[#DC2626] rounded-full flex items-center justify-center ">
                                    {item?.stock}
                                </div>
                                <Heart className='cursor-pointer' onClick={()=>addWishlist(item)} />
                            </div>
                            <p className="w-full h-[150px] flex items-center justify-center ">
                                <img src={item?.images[0]} alt={item?.title} className="object-contain" />
                            </p>
                            <div className="flex w-full items-center justify-end ">
                                <div onClick={()=>handleCart(data,item)} className="shadow-lg cursor-pointer p-2 flex items-center justify-center bg-red-200 rounded-full w-fit h-fit overflow-hidden ">
                                    <p className="">add to cart</p>
                                </div>
                            </div>
                            <Link href={`/detail/${item?.id}`} className=" cursor-pointer flex flex-col items-start justify-center w-full ">
                                <div className="w-full text-[#DC2626] text-xs font-semibold flex items-center justify-start gap-1 ">
                                    <p className="">rating</p>
                                    <p className="">{Math.round(item?.rating)}/10</p>
                                </div>
                                <p className={` w-full text-md font-semibold line-clamp-2 `}>{item?.title}</p>
                                <div className={`w-full flex gap-2 items-center justify-start `}>
                                    <p className="text-2xl text-[#DC2626] font-bold ">
                                        ${Math.round(item?.price).toFixed(2)}
                                    </p>
                                    <p className="line-through font-semibold  text-sm ">
                                        ${cal(item?.price, item?.price)}
                                    </p>
                                </div>
                                <p className="uppercase mt-3 font-semibold text-xs text-[#16A34A] ">
                                    {item?.availabilityStatus}
                                </p>
                                <div className="w-full border-t-[2px] gap-3 flex flex-col items-start justify-center text-[#9CA3AF] text-xs ">
                                    <p className="">
                                        This product is about to run out
                                    </p>
                                    <div className="w-full h-2 gradient-bar"></div>
                                    <p className="flex gap-2 items-center justify-center ">
                                        <span className="">available only:</span>
                                        <span className="">{item?.stock}</span>
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div> 
            }
             
        </div>
     );
}
 
export default Product;