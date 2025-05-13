import { Tag } from "lucide-react";
import Form from "./form";

const Checkout = () => {
    return ( 
        <div className="flex flex-col gap-3 p-2 ">
            <div className="w-full flex items-center gap-2 justify-start p-3 bg-[#F7F7F7] rounded-[5px] ">
                <Tag className="text-red-400  " />
                <div className="rounded-[5px] w-full text-sm border border-[#E5E7EB] p-2 flex items-center justify-start bg-transparent  ">
                    Have a coupon? Click here to enter your code
                </div>
            </div>
            <div className="">
                <Form />
            </div>
        </div>
     );
}
 
export default Checkout;