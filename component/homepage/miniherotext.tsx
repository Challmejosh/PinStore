import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Prop = {
    text: string
    subtext: string
}
const MiniText = ({text,subtext}:Prop) => {
    return ( 
        <div className="w-1/2 z-20 flex flex-col p-3 gap-5 items-start justify-center  ">
            <h2 className="text-[#EA580C]  ">Only This Week</h2>
            <div className="flex flex-col gap-3 items-start justify-center ">
                <p className="text-md font-semibold ">{text}</p>
                <p className="text-[#6B7280] text-xs  ">{subtext}</p>
            </div>
            <Link href={`/product`} className="flex items-center justify-center gap-1 px-5 py-3 rounded-full bg-white  ">
                <p className="">Shop now</p>
                <ArrowRight />
            </Link>
        </div>
     );
}
 
export default MiniText;