
import Search from "@/component/search";


export default async function Page({ params}: { params: { search: string } }) {
    const { search } = params
    return(
        <div className="">
            <Search search={search} />
        </div>
    )
}
 
