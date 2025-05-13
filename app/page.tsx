import AfterArrival from "@/component/homepage/afterArrival";
import AfterFeature from "@/component/homepage/afterFeature";
import AfterProduct, { Img } from "@/component/homepage/afterProduct";
import Category from "@/component/homepage/category";
import Deals from "@/component/homepage/deals";
import LastSection from "@/component/homepage/lastsection";
import Product from "@/component/homepage/product";
export interface BannerImg {
    text: string;
    subtext: string;
    image: string;
}

export default function Home() {
  const newproduct: string = "new products"
  const subtext: string = "Some of the new products arriving this weeks"
  const topCategory = "Top Categories"
  const subCategory = "New Product with updated stocks"
  const newarrival: string = "new arrivals"
  const newtext: string = "Do not miss the current offers until the end of the month"
  const afterProd: Img[] = [
      {
          text: "We provide the best quality products",
          subtext: "Only this week. Don't miss...",
          image: "/first-after-product.png",
      },
      {
          text: "We make your grocery shopping more exciting",
          subtext: "Feed your family the best.",
          image: "/second-after-product.png",
      },
      {
          text: "The only supermarket that saves your money",
          subtext: "Eat one every day",
          image: "/third-after-product.png",
      },
  ]
  const afterArr: Img[] = [
    {
      text:"Provide the quality that you expected",
      subtext: "Feed your family the best"
    },
    {
      text:"Grocery store at the center of the city",
      subtext: "Only this wek. Don;t miss..."
    },
  ]
  const afterFeat: Img[] = [
    {
      text: "We are here for shopping lovers",
      subtext: "Eat one everyday",
      image: "",
    },
    {
      text: "Get pocket-friendly products with us",
      subtext: "Only this week. Don't miss...",
      image: "",
    },
    {
      text: "Grocery storeat the center of the city",
      subtext: "Feed your family the best",
      image: "",
    },
  ]
  return (
    <div className="flex flex-col gap-8  ">
      <Category topic={topCategory} subtext={subCategory} />
      <div className="relative p-4 flex items-center justify-start w-full h-[86px] afterCategory ">
        <div className="absolute sm:p-5">
            <p className="text-[#EA580C] font-bold text-lg ">In store or online your health & safety is our top priority.</p>
            <p className="text-xs text-[#9CA3AF] ">The only supermarket that makes your life easier, makes you enjoy life and makes it better</p>
        </div>
      </div>
      <Product topic={newproduct} subtext={subtext} text="groceries" />
      <AfterProduct img={afterProd} />
      <Product topic={newarrival} subtext={newtext} text="kitchen-accessories" />
      <AfterArrival img={afterArr} />
      <Product topic="featured products" subtext={newtext} text="smartphones" />
      <AfterFeature  img={afterFeat} />
      <Deals />
      <LastSection />
    </div>
  );
}
