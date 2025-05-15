
import Search from "@/component/search";


async function Page({ params: { search } }: { params: { search: string } }) {
    return(
        <div className="">
            <Search search={search} />
        </div>
    )
}
 
export default Page;