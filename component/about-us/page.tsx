import Link from "next/link";
// royal tension
const Page = () => {
    return ( 
        <div className="flex text-center  flex-col items-center justify-center gap-3 ">
            {/* Intro */}
            <div className="w-full bg-[#F6F7F9] rounded-[5px] h-[350px] p-5 shadow-lg flex items-center justify-center  ">
                <p className="">
                    Welcome to <b>PinStore</b>, where innovation meets affordability. We specialize in premium-quality fashion accessories designed to make you stand out—without breaking the bank.
                </p>
            </div>
            {/* story */}
            <div className="w-full bg-[#F6F7F9] rounded-[5px] h-[350px] p-5 shadow-lg flex items-center justify-center ">
                <p className="">
                    Our journey began in 2015 when our founder, Jane Doe, struggled to find stylish yet affordable handbags. Frustrated by the lack of options, she launched PinStore to bridge the gap between luxury and accessibility. Today, we serve thousands of customers worldwide, providing timeless designs at fair prices.
                </p>
            </div>
            {/* core value */}
            <div className="w-full bg-[#F6F7F9] rounded-[5px] h-[350px] p-5 shadow-lg flex flex-col gap-2 items-center justify-center ">
                <p className="font-semibold">
                    At PinStore, we believe in three fundamental principles:
                </p>
                <ol className="">
                    <li className="">
                        ✔ Quality First – Every product undergoes rigorous testing for durability and style.
                    </li>
                    <li className="">
                        ✔ Customer Commitment – Your satisfaction drives our innovation.
                    </li>
                    <li className="">
                        ✔ Sustainability – Eco-friendly materials and ethical sourcing are at the heart of what we do.
                    </li>
                </ol>
            </div>
            {/* why choose us */}
            <div className="w-full bg-[#F6F7F9] rounded-[5px] h-[350px] p-5 shadow-lg flex flex-col gap-4 items-center justify-center ">
                <p className="font-semibold">
                    With countless options available, why choose [Your Brand Name]? Because we offer:
                </p>
                <ol className="">
                    <li className="">
                        - Exclusive Designs – Handcrafted collections you won’t find anywhere else.
                    </li>
                    <li className="">
                        - Affordable Luxury – Premium materials at unbeatable prices.
                    </li>
                    <li className="">
                        - Hassle-Free Shopping – Fast shipping, easy returns, and stellar customer service
                    </li>
                </ol>
            </div>
            {/* contact */}
            <div className="w-full bg-[#F6F7F9] rounded-[5px] h-[350px] p-5 shadow-lg flex flex-col items-center justify-center ">
                <p className="">
                    We love hearing from you! Reach us at:
                </p>
                <p className="">
                    📧 Email: support@[yourbrand].com
                </p>
                <p className="">
                    📞 Phone: +123-456-7890
                </p>
                <div className="flex gap-1 items-center justify-center ">
                    <Link href={'/about-us'} className="text-blue-400">
                        📱 Instagram |
                    </Link>
                    <Link href={'/about-us'} className="text-blue-400">
                        Facebook |
                    </Link>
                    <Link href={'/about-us'} className="text-blue-400">
                        Twitter: @YourBrandHandle
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Page;