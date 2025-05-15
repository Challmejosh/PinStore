import Product from "@/component/categoryproduct";

interface Prop {
    params:{
        category: string
    }
}
const Page = async ({params}: Prop) => {
    const {category} = params
    return ( 
        <div className="">
            {!category && <div className="loader"></div>}
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;