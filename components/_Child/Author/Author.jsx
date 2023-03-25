import Image from "next/image";
import Link from "next/link";

const Author = () => {
    return (
        <>
            <div className="author flex py-5">
                <Image src={`/images/authors/author1.jpg`} width={50} height={50} alt="author" className="rounded-full"/>
                <div className="flex flex-col justify-center px-4">
                    <Link href={`/`} className={`text-md font-bold text-gray-800 hover:text-gray-600`}>jhon doe</Link>
                    <span className="text-sm text-gray-500">CEO & Founder</span>
                </div>
            </div>
        </>
    );
};

export default Author;