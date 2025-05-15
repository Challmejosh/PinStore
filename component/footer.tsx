import FooterLinks from "./footerLinks";
import CopyWrite from "./copywrite";
import Newsletter from "./newsletter";

const Footer = () => {
    return ( 
        <div className="bg-[#F3F4F6] w-full flex flex-col items-start justify-start gap-8 p-3 sm:p-16 ">
            <Newsletter />
            <FooterLinks />
            <CopyWrite />
        </div>
     );
}
 
export default Footer;