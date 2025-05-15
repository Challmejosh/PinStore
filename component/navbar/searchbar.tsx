"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import { useState } from "react";

const Searchbar = () => {
    const [input,setInput] = useState<string>("")
    const router = useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>,input:string)=>{
        e.preventDefault();
        if(input){
            router.push(`/search/${input}`)
        }
    }
    return ( 
        <form onClick={(e: React.FormEvent<HTMLFormElement>)=>handleSearch(e,input)} className="flex rounded-[10px] w-full p-2 items-center justify-center bg-[#F3F4F6] ">
            <input placeholder="Search for products, category and brands... " type="text" className="flex items-center justify-start p-2 w-full focus:outline-none " value={input} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setInput(e.target.value)} />
            {/* <Link href={`/search/${input}`}> */}
                <button title="search" type="submit" className="relative cursor-pointer w-[20px] h-[20px]  " >
                    <Image src="/search.png" alt="searchicon" className="object-contain text-[#6B7280] " fill />
                </button>
            {/* </Link> */}
        </form>
     );
}
 
export default Searchbar;