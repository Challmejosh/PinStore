import Image from "next/image";

const LastSection = () => {
    type Arr = {
        image: string;
        text: string;
        title: string;
    }
    const array : Arr[] = [
        {
            image: "/homelastpayment.png",
            text: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
            title: "Payment only online",
        },
        {
            image: "/lasthomestock.png",
            text: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
            title: "New stocks and sales",
        },
        {
            image: "/lasthomeassurance.png",
            text: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
            title: "Quality assurance",
        },
        {
            image: "/lasthomecar.png",
            text: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
            title: "Deliver from 1 hour",
        },
    ]
    return ( 
        <div className="h-full flex items-start justify-between flex-wrap w-full ">
            <div className="grid sm:grid-cols-2 gap-2 lg:grid-cols-4 items-center justify-between ">
                {array?.map((item,index)=>(
                    <div className="flex items-start justify-between gap-2 " key={index}>
                        <p className="relative flex items-start justify-start h-[80px] w-[100px] ">
                            <Image src={item?.image} alt={item?.title} fill className="object-contain" />
                        </p>
                        <div className="flex flex-col gap-2 items-start justify-start  ">
                            <p className="font-semibold text-sm ">{item?.title}</p>
                            <p className="">{item?.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default LastSection;