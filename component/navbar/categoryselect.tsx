"use client"

import Link from "next/link";
import { useState } from "react";

interface Prop{
    list: string[]
}
const CategorySelect = ({list}:Prop) => {
    const [active,setActive] = useState<boolean>(false)
    return ( 
        <div className="flex flex-col relative">
            <div title="category" onClick={()=>{
                    setActive(prev=>!prev)
                }} className="flex items-center justify-between cursor-pointer ">
                <p className="">select a category</p>
            </div>
            {active&&(
                <div className="shadow-lg z-10 p-2 overflow-y-scroll h-[400px] bg-white rouned-[5px]  flex flex-col gap-2 absolute top-5 w-[200px] ">
                    {list?.map((item,index)=>(
                        <Link href={`/category/${item}`} className="w-full p-2 hover:bg-[#f6f7f9] " key={index} >{item}</Link>
                    ))}
                </div>
            )}
        </div>
     );
}
 
export default CategorySelect;