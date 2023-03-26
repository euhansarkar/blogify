import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import NewsLetter from "../_Child/NewsLetter/NewsLetter";

const Footer = () => {

    const db = {
        background: "url('/images/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left"
    }


    return (
        <footer className="bg-gray-500" style={db}>
        <NewsLetter/>
            <div className="container mx-auto flex justify-center py-12 flex-col">
                 <div className="py-5">
                    <div className="flex gap-6 justify-center">
                    <Link href={`/`}><ImTwitter color="#888888"/></Link>
                    <Link href={`/`}><ImFacebook color="#888888"/></Link>
                    <Link href={`/`}><ImYoutube color="#888888"/></Link>
                    </div>
                 </div>
                 <p className="py-5 text-center text-gray-400">Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with  by <Link href={`https://www.github.com/euhansarkar`}className="text-red-400 font-semibold">Euhan Sarkar</Link></p>
                 <p className="text-gray-400 text-center">Terms & Conditions</p>
            </div>
        </footer>
    );
};

export default Footer;