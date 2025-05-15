import Product from "@/component/categoryproduct";



const Page = ({category}: {category: string}) => {
    
    return ( 
        <div className="">
            {!category && <div className="loader"></div>}
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;