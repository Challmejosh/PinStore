
import Search from "@/component/search";


const Page = async ({ params: { search } }: { params: { search: string } }) => {
    return(
        <div className="">
            <Search search={search} />
        </div>
    )
}
 
export default Page;