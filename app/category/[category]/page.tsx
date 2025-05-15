import Product from "@/component/categoryproduct";



const Page = async ({ params: { category } }: { params: { category: string } }) => {
    
    return ( 
        <div className="">
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;