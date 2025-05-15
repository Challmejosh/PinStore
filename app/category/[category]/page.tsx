import Product from "@/component/categoryproduct";


type PageProps = {
  params: {
    category: string;
  };
};
const Page = async ({params}: PageProps) => {
    const {category} = params
    return ( 
        <div className="">
            {!category && <div className="loader"></div>}
            {category && (<Product text={category} />)}
        </div>
     );
}
 
export default Page;