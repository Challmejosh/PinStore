
import Search from "@/component/search";


const Page = ({ params: { search } }: { params: { search: string } }) => {
    return(
        <div className="">
            <Search search={search} />
        </div>
    )
}
 
export default Page;