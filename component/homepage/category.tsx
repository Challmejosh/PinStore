"use client"
import useCategory from "../useCategory";
import Topic from "./topic";
import { Prop } from "./product";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide,Swiper } from "swiper/react";


export interface Items{
    slug: string;
    name: string;
    url: string;
}

const Category = ({topic,subtext}:Prop) => {
    const {data,pending} = useCategory("https://dummyjson.com/products/categories")
    return ( 
        <div className="flex flex-col gap-2 items-start justify-between ">
            <Topic topic={topic} subtext={subtext} />
            {pending && 
            <div className="h-[150px] w-full flex items-center justify-center ">
                <div className="loader"></div>
            </div>
            }
            <div className="hidden lg:grid grid-cols-9 items-center w-full justify-between ">
                {!pending && 
                    <>
                        {data?.slice(0,9).map((item: Items,index)=>(
                            <div key={index} className={`${index === 0 && "rounded-l-[10px] "} ${index === 8 && "rounded-r-[10px] border-r "} border-[#9CA3AF] border-l cursor-pointer border-y flex p-2 flex-col items-center justify-between h-full `}>
                                {/* <p className="w-full h-[120px]  ">
                                    <img src={item?.url} alt={item?.slug} className="object-contain" />
                                </p> */}
                                <p className="text-xs ">{item?.name}</p>
                            </div>
                        ))}
                    </>
                }
            </div>
            <div className="lg:hidden w-full">
                <Swiper 
                pagination
                modules={[Pagination,Navigation]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                className="w-full ">
                    {!pending && 
                        <>
                            {data?.slice(0,9).map((item: Items,index)=>(
                                <SwiperSlide key={index} className={` border-[#9CA3AF] w-fit border cursor-pointer border-y flex p-2 flex-col items-center justify-between h-full `}>
                                    {/* <p className="w-full h-[120px]  ">
                                        <img src={item?.url} alt={item?.slug} className="object-contain" />
                                    </p> */}
                                    <p className="text-xs ">{item?.name}</p>
                                </SwiperSlide>
                            ))}
                        </>
                    }
                </Swiper>
            </div>
        </div>
     );
}
 
export default Category;