import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const FooterLinks = () => {
    return ( 
        <div className="w-full p-3 sm:p-14 border-y-[2px] border-y-[#D1D5DB] flex flex-col gap-5 lg:gap-8 md:flex-row items-center justify-center md:items-start md:justify-between  ">
            {/* first section */}
            <section className="flex flex-col gap-3 items-start justify-start ">
                <h2 className="font-semibold">Do You Need Help ?</h2>
                <p className="w-[200px] text-xs text-[#111827] ">
                    Autoseligen syr. Nek diarask fröbomba. Nörantipol kynoda nynat. Pressa fåmoska.
                </p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-center gap-2 ">
                        <Phone />
                        <div className="">
                            <p className="text-[#111827] text-xs ">
                                Monday-Friday: 08am-9pm
                            </p>
                            <p className="font-semibold">
                                0 800 300-353
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start justify-center gap-2 ">
                        <Mail />
                        <div className="">
                            <p className="text-[#111827] text-xs ">
                                Need help with your order?
                            </p>
                            <p className="font-semibold">
                                info@example.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* second section */}
            <section className="flex-1 grid sm:grid-cols-2 gap-3 lg:grid-cols-4 justify-center sm:justify-start items-start   ">
                <div className="hidden sm:block">
                    <h2 className="font-semibold">
                        Make Money With Us
                    </h2>
                    <div className="text-xs flex flex-col gap-3 items-start justify-center ">
                        <Link href={'/'}>Sell on Grogin</Link>
                        <Link href={'/'}>Sell Your Services on Grogin</Link>
                        <Link href={'/'}>Sell on Grogin Business</Link>
                        <Link href={'/'}>Sell Your Apps on Grogin</Link>
                        <Link href={'/'}>Become an Affilate</Link>
                        <Link href={'/'}>Advertise Your Products</Link>
                        <Link href={'/'}>Sell-Publish with Us</Link>
                        <Link href={'/'}>Become an Blowwe Vendor</Link>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <h2 className="font-semibold">
                        Let Us Help You
                    </h2>
                    <div className="text-xs flex flex-col gap-3 items-start justify-center ">
                        <Link href={'/'}>Accessibility Statement</Link>
                        <Link href={'/'}>Your Orders</Link>
                        <Link href={'/'}>Returns & Replacements</Link>
                        <Link href={'/'}>Shipping Rates & Policies</Link>
                        <Link href={'/'}>Refund and Returns Policy</Link>
                        <Link href={'/'}>Privacy Policy</Link>
                        <Link href={'/'}>Terms and Conditions</Link>
                        <Link href={'/'}>Cookie Settings</Link>
                        <Link href={'/'}>Help Center</Link>
                    </div>
                </div>
                <div className="">
                    <h2 className="font-semibold">
                        Get To Know Us
                    </h2>
                    <div className="text-xs flex flex-col gap-3 items-start justify-center ">
                        <Link href={'/'}>Careers for Grogin</Link>
                        <Link href={'/'}>About Grogin</Link>
                        <Link href={'/'}>Inverstor Relations</Link>
                        <Link href={'/'}>Grogin Devices</Link>
                        <Link href={'/'}>Customer reviews</Link>
                        <Link href={'/'}>Social Responsibility</Link>
                        <Link href={'/'}>Store Locations</Link>
                    </div>
                </div>
                {/* download app */}
                <div className="">
                    <div className="">
                        <p className="">follow us on social media</p>
                        <div className="flex gap-2 items-center justify-start  ">
                            <Link href={`/`} className="p-2 rounded-[5px] bg-white  " >
                                <Facebook />
                            </Link>
                            <Link href={`/`} className="p-2 rounded-[5px] bg-white  " >
                                <Twitter />
                            </Link>
                            <Link href={`/`} className="p-2 rounded-[5px] bg-white  " >
                                <Instagram />
                            </Link>
                            <Link href={`/`} className="p-2 rounded-[5px] bg-white  " >
                                <Linkedin />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default FooterLinks;