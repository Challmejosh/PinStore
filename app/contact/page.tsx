import Form from "@/component/contactForm";
import LastSection from "@/component/homepage/lastsection";
import { Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";

const Page = () => {
    type Info={
        miniCountry: string,
        country: string,
        address: string,
        phone: string,
        email: string,
    }
    const info: Info[] = [
        {
            miniCountry: "United states",
            country: "United States Office",
            address: "205 Middle Road, 2nd Floor, New York",
            phone: "02123456788",
            email: "info@example.com",
        },
        {
            miniCountry: "Munich",
            country: "Munich States Office",
            address: "205 Middle Road, 2nd Floor, New York",
            phone: "545612322",
            email: "contact@example.com",
        },
    ]
    return ( 
        <div className="flex flex-col gap-5 ">
            <div className="flex flex-col p-8 border-b border-b-[#E5E7EB] gap-2 items-center justify-center ">
                <h2 className="font-semibold text-center ">Contact with us</h2>
                <p className="text-3xl font-semibold text-center   ">You can ask us questions</p>
                <p className=" text-center ">Contact us for all your questions and opinions, or you can solve your</p>
                <p className=" text-center ">problems in a shorter time with our contact offices.</p>
            </div>
            <div className="p-8 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-between gap-4 ">
                <div className="flex flex-col gap-5 items-start justify-center ">
                    <div className="p-3 flex flex-col gap-1 items-start justify-center ">
                        <h2 className="font-semibold ">Our offices</h2>
                        <p className="">
                            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om
                            prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens
                            biov dijevis.
                        </p>
                    </div>
                    <div className="w-full border-b border-b-[#E5E7EB] p-8 grid sm:grid-cols-2 items-start justify-center ">
                        {info?.map((item: Info,index: number)=>(
                            <div className="flex gap-2 items-start justify-center  "key={index}>
                                <p className="">
                                    <MapPin />
                                </p>
                                <div className="flex flex-col gap-4 items-start justify-start">
                                    <div className="flex flex-col gap-2 items-start justify-start ">
                                        <div className="">
                                            <p className="text-xs">{item?.miniCountry}</p>
                                            <p className="font-semibold">{item?.country}</p>
                                        </div>
                                        <p className="text-xs">
                                            {item?.address}
                                        </p>
                                    </div>
                                    <div className="font-semibold">
                                        <p className="">{item?.phone}</p>
                                        <p className="text-[#2563EB] text-xs ">{item?.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-xs mt-3 flex items-center justify-start gap-2 ">
                        <p className="text-[#4B5563]">Follow us</p>
                        <div className="flex items-center justify-start gap-2 ">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                            <Linkedin />
                        </div>
                    </div>
                </div>
                <Form />
            </div>
            <LastSection />
        </div>
     );
}
 
export default Page;