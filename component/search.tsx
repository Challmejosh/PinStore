import AllProducts from "./allproducts"
import MiniText from "./homepage/miniherotext"

interface Prop{
    search: string
}
const Search  = async ({search}:Prop) => {
    const fetchData = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    const data = await fetchData.json()
    const products = data.products
    return ( 
        <div className="w-full h-full flex p-5 flex-col gap-3 items-center justify-center ">
            <div className="filterBanner w-full h-[200px] ">
                <MiniText text="Grocery store with different treasures" subtext="We have prepared special discounts for you on grocery products..." />
            </div>
            {data.total === 0 && (
                <p className="loader"></p>
            ) }
            {data.total > 0 && 
            <AllProducts products={products} />
            }
        </div>
     );
}
 
export default Search;