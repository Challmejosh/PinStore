import Product from "@/component/categoryproduct";

interface PageProp {
    params:{
        category: string
    }
}
const Page = async ({params}: PageProp) => {
    const {category} = params
    return ( 
        <div className="">
            {!category && <div className="loader"></div>}
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;