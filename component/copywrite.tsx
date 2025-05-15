import Link from "next/link";

const CopyWrite = () => {
    return ( 
        <div className="text-xs w-full flex flex-col sm:flex-row items-start justify-between ">
            <div className="">
                <p className="">
                    Copyright 2025 © Pnstore WooCommerce WordPress Theme. All right reserved. Powered by <span className="text-[#634C9F]">BlackRise Themes.</span>
                </p>
            </div>
            <div className="flex gap-1 items-center justify-center ">
                <Link className="underline" href="/">Terms and Condition</Link>
                <Link className="underline" href="/">Privacy Policy</Link>
            </div>
        </div>
     );
}
 
export default CopyWrite;