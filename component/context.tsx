"use client"
import { createContext, useEffect, useState } from "react";
import useFetch, { FetchData } from "./useFetch";
import { CartData } from "./cart/cart";
import { toast } from "react-toastify";
interface ContextValue{
    data: FetchData[]| null;
    pending: boolean;
    handleCart: (arr: FetchData[],item:FetchData)=>void;
    detailAddtoCart: (item:FetchData)=>void;
    cartIncrement: (item:FetchData)=>void;
    cartDecrement: (item:FetchData)=>void;
    cart: CartData[];
    cartTotal: number
    totalQuantity: number
    totalWishlist: number
    delCart: (item: CartData)=>void
    wishlist: FetchData[]
    addWishlist: (item: FetchData)=>void
    paymentSuccess: ()=>void
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
    addWishlist: ()=>null,
    detailAddtoCart: ()=>  null,
    paymentSuccess: ()=>null
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
                toast("already in cart")
            }else{
                setCart(prev =>{
                    const updatedCart = [...prev, {...find, quantity: Number(1)}]
                    // save to local storage
                    localStorage.setItem("cart",JSON.stringify(updatedCart))
                    return updatedCart 
                })
                toast("added to cart")
            }

        }
    }
    const detailAddtoCart = (item:FetchData)=>{
        const find = data?.find((itm: FetchData)=> itm?.id === item?.id )
        if(find){
            const check = cart?.find((prod:FetchData)=> prod?.id === find?.id)
            if(check){
                toast("already in cart")
            }else{
                setCart(prev => { 
                    const updatedCart = [...prev, {...find, quantity: Number(1)}]
                    // save to local storage
                    localStorage.setItem("cart",JSON.stringify(updatedCart))
                    return updatedCart
            } )
                toast("add to cart")
            }

        }
    }
    const cartIncrement = (item: FetchData): void => {
        setCart(prev =>{
            const updatedCart = prev.map((prod: CartData) =>prod.id === item.id? { ...prod, quantity: prod.quantity + Number(1) }: prod)
            // save to local storage
            localStorage.setItem("cart",JSON.stringify(updatedCart))
            return updatedCart
        }
        );
    };
    const cartDecrement = (item: FetchData): void => {
        setCart(prev => {
           const updateCart = prev.map((prod: CartData) =>prod.id === item.id? { ...prod, quantity: prod.quantity - Number(1) }: prod)
            .filter(prod => prod.quantity > 0)
            // save to local storage
            localStorage.setItem("cart",JSON.stringify(updateCart))
            return updateCart
        }
        );
    };
    const cartTotal: number = cart.reduce((acct,item)=> acct + item?.price * item?.quantity, 0);
    const totalQuantity: number = cart.reduce((acct,item)=> acct + item?.quantity, 0);
    const totalWishlist: number = wishlist.length;
    const delCart = (item: CartData) => {
        setCart(prev => {
            const updatedCart = prev.filter((itm) => itm?.id !== item?.id);
            // save to local storage
            localStorage.setItem("cart", JSON.stringify(updatedCart)); 
            return updatedCart;
        });
    };
const addWishlist = (item: FetchData) => {
    const check = wishlist.find((itm) => itm?.id === item?.id);
    if (check) {
        toast("already in wishlist");
    } else {
        const updatedWishlist = [...wishlist, item];
        setWishlist(updatedWishlist);
        // save to localstorage
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        toast("added to wishlist");
    }
};
    // useEffect for localStorage

    useEffect(()=>{
        const getCart = localStorage.getItem("cart")
        const getWishlist = localStorage.getItem("wishlist")
        if(getCart){
            setCart(JSON.parse(getCart))
        }else{
            setCart([])
        }
        if(getWishlist){
            setWishlist(JSON.parse(getWishlist))
        }else{
            setWishlist([])
        }
    },[])
    const paymentSuccess = ()=>{
        localStorage.removeItem("cart")
    }
    return ( 
        <AppContext.Provider value={{data,pending,cart,handleCart,cartIncrement,cartDecrement,cartTotal,delCart,wishlist,addWishlist,totalQuantity,totalWishlist,detailAddtoCart,paymentSuccess}}>
            {children}
        </AppContext.Provider>
     );
}
 
export default Context;