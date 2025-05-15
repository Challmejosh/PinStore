"use client"
import { Box } from "lucide-react";
import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import { useRouter } from "next/navigation";
import { PaystackButton } from "react-paystack";

const Form = () => {
    const {cartTotal} = useContext(AppContext)
    const [firstName, setFirstName] = useState<string>(""); 
    const [lastName, setLastName] = useState<string>(""); 
    const [email, setEmail] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [apartment, setApartment] = useState<string>("");
    const [town, setTown] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [state, setstate] = useState<string>("");
    const [phone, setPhone] = useState<number>();
    const [zipCode, setZipCode] = useState<string>("");
    const router = useRouter()
    const submit = ()=>{
        router.push('/')
    }
    const success = ()=>{
        submit()
    }
    const cancel = ()=>{
        submit()
    }
    const error = ()=>{
        submit()
    }
    const value = {
            email: email,
            amount: cartTotal,
            publicKey: 'pk_test_ee35b8f44c715c5fffad4db74ae73ebf2c8cd566',
             ref: "unique-transaction-ref-" + new Date().getTime(),
            currency: "NGN",
            text: "Place Order",
            onSuccess:()=> success(),
            onClose: ()=> cancel(),
            onError: ()=> error() 
        }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }
    return ( 
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>handleSubmit(e)} className="w-full flex flex-col gap-3 items-start justify-start  ">
            <div className="w-full border border-[#FCA1A1] flex flex-col gap-2 items-start justify-center p-3 rounded-[5px] bg-[#FFF5F5] ">
                <div className="flex items-center justify-start gap-2 ">
                    <Box />
                    <p className="font-semibold">
                        add <b className="text-[#FCA1A1] ">299.11</b> to cart and get free shipping!
                    </p>
                </div>
                <div className="bg-[#FEE2E2] h-[5px] rounded-[2px]  w-full "></div>
            </div>
            <div className="w-full flex items-start justify-between gap-3 ">
                <div className="w-full flex-1 flex flex-col gap-3 items-start justify-center  ">
                    {/* Name */}
                    <div className="w-full flex items-center justify-between gap-2 ">
                        <div className="w-full">
                            <label htmlFor="" className="">First Name </label>
                            <input title="first name" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " required placeholder="" value={firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setFirstName(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="lastName" className="">Last Name </label>
                            <input id="lastName" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " required placeholder="" value={lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setLastName(e.target.value)} />
                        </div>
                    </div>
                    {/* Company name */}
                        <div className="w-full">
                            <label htmlFor="company name" className="">Company name (optional) </label>
                            <input id="company name" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " placeholder="" value={company} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCompany(e.target.value)} />
                        </div>
                        {/* Country */}
                        <div className="w-full">
                            <label htmlFor="country" className="">Country</label>
                            <select id="country" title="country" className="w-full p-3 cursor-pointer border flex border-[#D1D5DB] rounded-[8px]  " required  name="" >
                                <option value="" className="">select a country</option>
                                <option value="" className="">United states</option>
                                <option value="" className="">England</option>
                                <option value="" className="">Nigeria</option>
                            </select>
                        </div>
                        {/* street address */}
                        <div className="w-full">
                            <label htmlFor="street address" className="">Street Address </label>
                            <input id="street address" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " required placeholder="Home number and street name" value={street} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setStreet(e.target.value)} />
                        </div>
                        {/* Apartment */}
                        <div className="w-full">
                            <input id="apartment" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " placeholder="Apartment, suite, unit, etc [optional]" value={apartment} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setApartment(e.target.value)} />
                        </div>
                        {/* town / city */}
                        <div className="w-full">
                            <label htmlFor="town/city" className="">Town/City </label>
                            <input required id="town/city" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " placeholder="" value={town} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTown(e.target.value)} />
                        </div>
                        {/* state */}
                        <div className="w-full ">
                            <label htmlFor="state" className="">Country</label>
                            <select id="state" title="state" className="w-full p-3 cursor-pointer border flex border-[#D1D5DB] rounded-[8px]  " required  name="" >
                                <option value="" className="">select a state</option>
                                <option value="" className="">city</option>
                                <option value="" className="">city</option>
                                <option value="" className="">city</option>
                            </select>
                        </div>
                        {/* Zip code */}
                        <div className="w-full">
                            <label htmlFor="zipcode" className="">Zip code </label>
                            <input required id="zipcode" type="text" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " placeholder="" value={zipCode} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setZipCode(e.target.value)} />
                        </div>
                        {/* phone */}
                        <div className="w-full">
                            <label htmlFor="phone" className="">Phone </label>
                            <input required id="phone" type="tel" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " inputMode="numeric" placeholder="" value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value)} />
                        </div>
                        {/* email */}
                        <div className="w-full">
                            <label htmlFor="email" className="">Email </label>
                            <input required id="email" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " type="email" placeholder="" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="">Order note (optional) </label>
                            <textarea id="email" className="w-full p-2 min-h-[80px] border flex border-[#D1D5DB] rounded-[8px]  "  placeholder="" value={email} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setEmail(e.target.value)} />
                        </div>
                </div>
                <div className="bg-[#E5E7EB] rounded-[10px] p-3 border border-[#E5E7EB] shadow-sm flex flex-col items-start justify-start gap-2 ">
                    <h2 className="">
                        <b className="">Your Order</b>
                    </h2>
                    <div className="w-full">
                        <div className="text-[#9CA3AF] p-3 border-[#9CA3AF] border-b-[2px] w-full flex items-center justify-between ">
                            <p className="">Shipping</p>
                            <div className="text-xs flex flex-col items-start justify-center gap-2 ">
                                <div className="flex items-center gap-2 justify-center">
                                    <label htmlFor="flat" className="">Flat rate: 15.00</label>
                                    <input id="flat" type="radio"  />
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <p className="">Local pickup: 10.00</p>
                                    <input id="flat" type="radio"  />
                                </div>
                            </div>
                        </div>
                        <div className=" p-3 border-[#9CA3AF] border-b-[2px] w-full flex items-center justify-between ">
                            <p className="text-[#9CA3AF] ">Total</p>
                            <p className="font-bold  ">100.00</p>
                        </div>
                    </div>
                    {/* terms and policy */}
                    <div className="w-full flex items-center justify-start gap-2 ">
                        <input type="checkbox" id="checkbox" required className="" />
                        <label title="" htmlFor="checkbox" className="">
                            <p className="">I have read and agree to the website <span className="text-[#634C9F]">terms and conditions</span> </p>
                        </label>
                    </div>
                    {/* order button */}
                    <PaystackButton  className="w-full cursor-pointer flex items-center justify-center bg-[#634C9F] px-5 py-2 rounded-[10px]  " {...value} />
                </div>
            </div>
        </form>
     );
}
 
export default Form;