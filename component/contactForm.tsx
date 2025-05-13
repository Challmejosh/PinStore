"use client"

import { useState } from "react";

const Form = () => {
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [subject,setSubject] = useState<string>("")
    const [message,setMessage] = useState<string>("")
    const handleContact=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    return ( 
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>handleContact(e)} className="flex flex-col gap-3 items-start justify-center ">
            <p className="">
                On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam
                inte loba även om prerade i garanterad traditionell specialitet till bebel.
            </p>
            <div className="w-full flex items-center justify-between gap-4 ">
                <div className="w-full">
                    <label htmlFor="name" className="">Name </label>
                    <input required id="name" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " type="text" placeholder="" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="">Email </label>
                    <input required id="email" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " type="email" placeholder="" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} />
                </div>
            </div>
            <div className="w-full">
                <label htmlFor="subject" className="">Subject </label>
                <input required id="subject" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " type="text" placeholder="" value={subject} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSubject(e.target.value)} />
            </div>
            <div className="w-full">
                <label htmlFor="message" className="">Your message </label>
                <textarea required id="message" className="w-full p-2 min-h-[80px] border flex border-[#D1D5DB] rounded-[8px]  " placeholder="" value={message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setMessage(e.target.value)} />
            </div>
            <div className="w-full flex items-center justify-start ">
                <button className="px-5 py-2 text-white cursor-pointer rounded-[5px] bg-[#634C9F] " type="submit">Send Message</button>
            </div>
        </form>
     );
}
 
export default Form;