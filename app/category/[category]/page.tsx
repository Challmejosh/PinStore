import Product from "@/component/categoryproduct";



async function Page ({ params }: { params: { category: string } }) {
    const { category } = params
    return ( 
        <div className="">
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;