import Product from "@/component/categoryproduct";



export default async function Page ({ params: { category } }: { params: { category: string } }) {
    
    return ( 
        <div className="">
            {category && (<Product text={category} />)}
        </div>
     );
}
 
