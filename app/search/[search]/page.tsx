"use client"
import Search from "@/component/search";
import { useParams } from "next/navigation";


export default function Page() {
    const params = useParams()
    return(
        <div className="">
            <Search search={String(params?.search)} />
        </div>
    )
}
 
