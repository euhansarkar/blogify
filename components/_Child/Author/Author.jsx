import Image from "next/image";
import Link from "next/link";

const Author = ({author}) => {
    return (
        <>
            <div className="author flex py-5">
                <Image src={author && author.img} width={50} height={50} alt="author" className="rounded-full"/>
                <div className="flex flex-col justify-center px-4">
                    <Link href={`/`} className={`text-md font-bold text-gray-800 hover:text-gray-600`}>{author && author.name}</Link>
                    <span className="text-sm text-gray-500">{author && author.designation}</span>
                </div>
            </div>
        </>
    );
};

export default Author;