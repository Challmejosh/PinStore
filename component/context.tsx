"use client"
import { createContext, useState } from "react";
import useFetch, { FetchData } from "./useFetch";
import { CartData } from "./cart/cart";
interface ContextValue{
    data: FetchData[]| null;
    pending: boolean;
    handleCart: (arr: FetchData[],item:FetchData)=>void;
    cartIncrement: (item:FetchData)=>void;
    cartDecrement: (item:FetchData)=>void;
    cart: CartData[];
    cartTotal: number
    totalQuantity: number
    totalWishlist: number
    delCart: (item: CartData)=>void
    wishlist: FetchData[]
    addWishlist: (item: FetchData)=>void
}
const initial = {
    data: [],
    pending: true,
    handleCart: ()=>null,
    cart: [],
    cartIncrement: ()=>null,
    cartDecrement: ()=>null,
    cartTotal: 0,
    totalQuantity: 0,
    totalWishlist: 0,
    delCart: ()=>null,
    wishlist: [],
    addWishlist: ()=>null
}
interface Children{
    children: React.ReactNode
}
export const AppContext = createContext<ContextValue>(initial)
const Context = ({children}: Children) => {
    const {data,pending} = useFetch("https://dummyjson.com/products")
    const [cart,setCart] = useState<CartData[]>([])
    const [wishlist,setWishlist] = useState<FetchData[]>([])
    const handleCart = (arr: FetchData[],item:FetchData)=>{
        const find = arr.find((itm: FetchData)=> itm?.id === item?.id )
        if(find){
            const check = cart?.find((prod:FetchData)=> prod?.id === find?.id)
            if(check){
                alert("already in cart")
            }else{
                setCart(prev => [...prev, {...find, quantity: Number(1)}] )
            }

        }
    }
    const cartIncrement = (item: FetchData): void => {
        setCart(prev =>
            prev
            .map((prod: CartData) =>
                prod.id === item.id
                ? { ...prod, quantity: prod.quantity + Number(1) }
                : prod
            )
        );
    };
    const cartDecrement = (item: FetchData): void => {
        setCart(prev =>
            prev
            .map((prod: CartData) =>
                prod.id === item.id
                ? { ...prod, quantity: prod.quantity - Number(1) }
                : prod
            )
            .filter(prod => prod.quantity > 0) 
        );
    };
    const cartTotal: number = cart.reduce((acct,item)=> acct + item?.price * item?.quantity, 0);
    const totalQuantity: number = cart.reduce((acct,item)=> acct + item?.quantity, 0);
    const totalWishlist: number = wishlist.length;
    const delCart = (item: CartData)=>{
        setCart(prev => prev.filter((itm) => itm?.id !== item?.id))
    }
    const addWishlist = (item: FetchData)=>{
        const check = wishlist.find((itm)=>itm?.id === item?.id)
        if(check){
            alert("already in wishlist")
        }else{
            setWishlist([...wishlist, item])
        }
    }
    return ( 
        <AppContext.Provider value={{data,pending,cart,handleCart,cartIncrement,cartDecrement,cartTotal,delCart,wishlist,addWishlist,totalQuantity,totalWishlist}}>
            {children}
        </AppContext.Provider>
     );
}
 
export default Context;