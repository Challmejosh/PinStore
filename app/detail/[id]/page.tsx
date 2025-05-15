"use client"
import DetailMain from "@/component/detailmain";
import { useParams } from "next/navigation";


const Page = () => {
    const params = useParams()
    return <DetailMain id={Number(params?.id)} />
}
 
export default Page;