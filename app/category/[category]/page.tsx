import Product from "@/component/categoryproduct";



async function Page ({ params: { category } }: { params: { category: string } }) {
    
    return ( 
        <div className="">
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;