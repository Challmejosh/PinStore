import Detail from "@/component/detail";
import { FetchData } from "@/component/useFetch";

interface Prop{
    params:{
        id: number
    }
}
const Page = async ({params} : Prop) => {
    const {id} = await params
    const data = await fetch(`https://dummyjson.com/products/${id}`)
    const product:FetchData = await data.json()
    return ( 
        <div className="">
            <Detail product={product} />
        </div>
     );
}
 
export default Page;