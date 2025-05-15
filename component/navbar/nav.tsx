import { auth } from "@/auth";
import Link from "next/link";

const Nav = async () => {
    const session = (await auth())
    return ( 
        <nav className="text-xs p-3 border-t border-t-[#E5E7EB] ">
            <div className="flex items-center justify-between lg:mx-28">
                <div className="flex  items-center justify-start gap-4">
                    <>
                        {session&&
                        <Link href="/profile">My account</Link>
                        }
                        <Link href="/wishlist">Wishlist</Link>
                    </>
                    <div className="border-l hidden sm:block p-1 ">
                        <p className="">
                            We deliver to you every day from 7:00 to 23:00
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-4 ">
                    <select className="cursor-pointer" title="currency" name="currency" id="">
                        <option value="">USD</option>
                        <option value="">NGN</option>
                        <option value="">GBP</option>
                    </select>
                    <select className="cursor-pointer" title="language" name="language" id="">
                        <option value="">English</option>
                        <option value="">Spanish</option>
                        <option value="">French</option>
                    </select>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;