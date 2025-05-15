import { auth } from "@/auth";
import Checkout from "@/component/checkout/checkout";
import { redirect } from "next/navigation";

const Page = async () => {
    const session = (await auth())
    if(!session){
        redirect("/")
    }
    return ( 
        <div className="">
            <Checkout />
        </div>
     );
}
 
export default Page;