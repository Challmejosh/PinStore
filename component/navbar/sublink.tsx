
import Link from "next/link";
import CategorySelect from "./categoryselect";

const Sublink = async () => {
    const data = await fetch("https://dummyjson.com/products/category-list")
    const list = await data.json()
    if(!data){
        return
    }
    return ( 
        <div className="p-3 border-y border-y-[#E5E7EB]  ">
            <div className="flex items-center flex-wrap justify-between gap-3 lg:mx-28 ">
                <div className="flex flex-wrap items-center justify-start gap-3">
                    <Link href="/">Home</Link>
                    <CategorySelect list={list} />
                    <Link href={`/category/groceries`} >Groceries</Link>
                    <Link href={`/category/smartphones`} >Smartphone</Link>
                    <Link href="/contact" >Contact</Link>
                </div>
                <div className="flex items-center justify-center flex-wrap ">
                    <Link href={`/product`} >All Products</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Sublink;