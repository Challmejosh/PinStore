import { FetchData } from "./useFetch"

export const handleCart = (arr: FetchData[],item:FetchData)=>{
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