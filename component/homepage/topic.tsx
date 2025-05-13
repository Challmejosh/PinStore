import { ArrowRight } from "lucide-react";
import { Prop } from "./product";
import Link from "next/link";

const Topic = ({topic,subtext, category }: Prop) => {
    return ( 
        <div className="flex text-xs w-full items-center justify-between  ">
            <div className="flex font-semibold flex-wrap items-center justify-start gap-3 ">
                <h2 className={`${topic !== "Top Categories" && "uppercase" } text-lg font-semibold `}>{topic}</h2>
                <p className="text-xs text-[#9CA3AF] ">{subtext}</p>
            </div>
            {topic !== "Top Categories" &&
            <Link href={`/category/${category}`} className="border rounded-full py-1 w-[120px] sm:w-fit px-3 sm:px-2 sm:py-1 cursor-pointer flex items-center justify-center ">
                <p className="flex text-[12px] "> {topic === "deals of the day" ? "view all" : "view more"}</p>
                <ArrowRight size={14} className="hidden sm:block " />
            </Link>
             }
        </div>
     );
}
 
export default Topic;