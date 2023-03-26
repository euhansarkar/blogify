import Image from "next/image";
import Link from "next/link";
import Author from "../_Child/Author/Author";

const Related = () => {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-4xl pb-12 text-center">related contents</h1>
      <div className="flex flex-col gap-10">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
};

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/`}>
          <Image
            src={`/images/img1.jpg`}
            width={300}
            height={200}
            className="rounded"
            alt="post image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="title">
          <Link
            href={`/`}
            className="text-xl capitalize font-bold text-gray-800 hover:text-gray-600"
          >
            your most unhappy customers are your greatest source of learning
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}

export default Related;
