
import Search from "@/component/search";


const Page = ({search}:{search: string}) => {
    return(
        <div className="">
            <Search search={search} />
        </div>
    )
}
 
export default Page;