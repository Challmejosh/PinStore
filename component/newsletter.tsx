"use client"
import { Mail } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
    const [email,setEmail] = useState<string>("")
    const handleNews = (e: React.FormEvent<HTMLFormElement>,email: string)=>{
        e.preventDefault();
        alert(`${email} signed for newsletter`)
    }
    return ( 
        <div className="w-full flex gap-3 flex-col md:flex-row items-start justify-between ">
            <div className="w-full flex flex-col items-start justify-center ">
                <h2 className="font-semibold">Join our newsletter for $10 offs</h2>
                <p className="text-xs text-[#6B7280] ">
                    Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!
                </p>
            </div>
            <div className="w-full flex flex-col gap-2 items-start justify-center ">
                <form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>handleNews(e,email)} className="w-fit border border-[#D1D5DB] p-2 flex items-center justify-start rounded-[10px] ">
                    <div className="flex items-center justify-center gap-1 ">
                        <Mail />
                        <input required title="email" type="text" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} placeholder="Enter your email address" name="" id="" className="focus:outline-none p-2  " />
                    </div>
                    <button type="submit" className="uppercase p-2 bg-[#634C9F] cursor-pointer text-white flex items-center justify-center text-xs rounded-[5px] h-full " >send</button>
                </form>
                <p className="text-xs">
                    By subscribing you agree to our <span className="text-[#634C9F] ">Terms & Conditions and Privacy & Cookies Policy.</span>
                </p>
            </div>
        </div>
     );
}
 
export default Newsletter;