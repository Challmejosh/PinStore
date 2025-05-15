
import Search from "@/component/search";


export default async function Page({ params: { search } }: { params: { search: string } }) {
    return(
        <div className="">
            <Search search={search} />
        </div>
    )
}
 
