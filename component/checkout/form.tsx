"use client"
import { Box } from "lucide-react";
import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import { useRouter } from "next/navigation";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";

const Form = () => {
    const {cartTotal,paymentSuccess} = useContext(AppContext)
    const [firstName, setFirstName] = useState<string>(""); 
    const [lastName, setLastName] = useState<string>(""); 
    const [email, setEmail] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [apartment, setApartment] = useState<string>("");
    const [town, setTown] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [zipCode, setZipCode] = useState<string>("");
    const [order, setOrder] = useState<string>("");
    const [checked, setChecked] = useState<boolean>(true);
    const [radio,setRadio] = useState<string>("15")
    const ship: number = Number(radio)
    const allTotal = cartTotal + ship
    const router = useRouter()
    const submit = ()=>{
        router.push('/')
        setFirstName("");
        setLastName("")
        setEmail("")
        setCompany("")
        setStreet("")
        setApartment("")
        setTown("")
        setCountry("")
        setState("")
        setPhone("")
        setZipCode("")
        setOrder("") 
        setChecked(false) 
    }
    const success = ()=>{
        submit()
        paymentSuccess()
    }
    const cancel = ()=>{
    }
    const error = ()=>{
    }
    const paystackId: string | undefined = process.env.NEXT_PUBLIC_PAY_ID;
    if (!paystackId) {
        throw new Error("NEXT_PUBLIC_PAY_ID environment variable is not set.");
    }
    const value = {
            email: email,
            amount: allTotal * 160000 ,
            publicKey: paystackId,
             ref: "unique-transaction-ref-" + new Date().getTime(),
            currency: "NGN",
            text: "Place Order",
            onSuccess:()=> success(),
            onClose: ()=> cancel(),
            onError: ()=> error()
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!checked){
            toast("Please to theagree to the terms and condition")
        }
    }
    return ( 
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>handleSubmit(e)} className="w-full flex flex-col gap-3 items-start justify-start  ">
            <div className="w-full border border-[#FCA1A1] flex flex-col  gap-2 items-start justify-center p-3 rounded-[5px] bg-[#FFF5F5] ">
                <div className="flex items-center justify-start gap-2 ">
                    <Box />
                    <p className="font-semibold">
                        add <b className="text-[#FCA1A1] ">299.11</b> to cart and get free shipping!
                    </p>
                </div>
                <div className="bg-[#FEE2E2] h-[5px] rounded-[2px]  w-full "></div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-3 ">
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
                            <select value={country} onChange={(event: React.ChangeEvent<HTMLSelectElement>)=>setCountry(event.target.value)} id="country" title="country" className="w-full p-3 cursor-pointer border flex border-[#D1D5DB] rounded-[8px]  " required  name="" >
                                <option value="" className="">select a country</option>
                                <option value="United States" className="">United states</option>
                                <option value="England" className="">England</option>
                                <option value="Nigeria" className="">Nigeria</option>
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
                            <select value={state} onChange={(event: React.ChangeEvent<HTMLSelectElement>)=>setState(event.target.value)} id="state" title="state" className="w-full p-3 cursor-pointer border flex border-[#D1D5DB] rounded-[8px]  " required  name="" >
                                <option value="" className="">select a state</option>
                                <option value="California" className="">California</option>
                                <option value="New York" className="">New York</option>
                                <option value="Texas" className="">Texas</option>
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
                            <input required id="phone" type="text" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " inputMode="numeric" placeholder="" value={phone} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value)} />
                        </div>
                        {/* email */}
                        <div className="w-full">
                            <label htmlFor="email" className="">Email </label>
                            <input required id="email" className="w-full p-2 border flex border-[#D1D5DB] rounded-[8px]  " type="email" placeholder="" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="order" className="">Order note (optional) </label>
                            <textarea id="order" className="w-full p-2 min-h-[80px] border flex border-[#D1D5DB] rounded-[8px]  "  placeholder="" value={order} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>setOrder(e.target.value)} />
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
                                    <input value="15" checked={radio === "15"} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setRadio(e.target.value)} id="flat" type="radio"  />
                                </div>
                                <div className="flex items-center gap-2 justify-center">
                                    <p className="">Local pickup: 10.00</p>
                                    <input value="10" checked={radio === "10"}  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setRadio(e.target.value)} id="flat" type="radio"  />
                                </div>
                            </div>
                        </div>
                        <div className=" p-3 border-[#9CA3AF] border-b-[2px] w-full flex items-center justify-between ">
                            <p className="text-[#9CA3AF] ">Total</p>
                            <p className="font-bold text-red-400 ">${allTotal.toFixed(2)}</p>
                        </div>
                    </div>
                    {/* terms and policy */}
                    <div className="w-full flex items-center justify-start gap-2 ">
                        <input checked={checked}  type="checkbox" id="checkbox" required className="" />
                        <label title="" htmlFor="checkbox" className="">
                            <p className="">I have read and agree to the website <span className="text-[#634C9F]">terms and conditions</span> </p>
                        </label>
                    </div>
                    {/* order button */}
                    <PaystackButton  className="w-full cursor-pointer text-white flex items-center justify-center bg-[#634C9F] px-5 py-2 rounded-[10px]  " {...value} />
                </div>
            </div>
        </form>
     );
}
 
export default Form;