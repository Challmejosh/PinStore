import Product from "@/component/categoryproduct";
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
            {!category && <div className="loader"></div>}
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;