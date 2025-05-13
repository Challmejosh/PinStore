import Product from "@/component/product";
// import useFetch from "@/component/useFetch";

interface Prop {
    params:{
        category: string
    }
}
const Page = async ({params}: Prop) => {
    const {category} = await params
    return ( 
        <div className="">
            {!category && <div className="">Loading again...</div>}
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;