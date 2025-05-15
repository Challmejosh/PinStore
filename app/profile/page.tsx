import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const Page = async () => {
    const session = (await auth())
    if(!session){
        toast("sign in to continue")
        redirect("/")
    }
    const user = session?.user
    const image = user?.image
    return ( 
        <div className="flex flex-col gap-8 items-center justify-center  ">
            <img src={image? image : "/user.png"} alt="user"} className="w-[70px] rounded-[10px] object-contain h-[70px] " />
            <p className="font-semibold">{user?.name}</p>
            <div className="flex flex-col w-full items-center justify-center ">
                <div className="loader"></div>
                <div className="">more detail coming soon...</div>
            </div>
        </div>
     );
}
 
export default Page;