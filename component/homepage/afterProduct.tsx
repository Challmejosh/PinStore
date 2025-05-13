import MiniText from "./miniherotext";
export type Img = {
    text: string;
    subtext: string;
    image?: string;
}
interface BannerImg{
    img: Img[]
}
const AfterProduct = ({ img }: BannerImg) => {
    return ( 
        <div className="">
            <div className="w-full hidden lg:grid gap-2 grid-cols-3 items-start justify-start ">
                {img?.map((item: Img ,index: number)=>(
                    <div className={`${index === 0 && "firstHomeBanner" } ${index === 1 && "secondHomeBanner" } ${index === 2 && "thirdHomeBanner"} w-full rounded-lg h-fit relative`} key={index}>
                        <MiniText text={item?.text} subtext={item?.subtext} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default AfterProduct;