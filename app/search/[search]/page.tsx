
import Search from "@/component/search";


type PageProps = {
  params: {
    search: string;
  };
};
const Page = ({params}:PageProps) => {
    const { search } = params 
    return(
        <div className="">
            <Search search={search} />
        </div>
    )
}
 
export default Page;