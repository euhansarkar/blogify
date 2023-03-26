import Image from "next/image";
import Link from "next/link";
import Author from "../_Child/Author/Author";

const SectionFour = () => {
  return (
    <>
      <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
          <div className="item">
            <h1 className="capitalize font-bold text-4xl py-12">business</h1>

            <div className="flex flex-col gap-6">
              {Post()}
              {Post()}
              {Post()}
              {Post()}
            </div>
          </div>
          <div className="item">
            <h1 className="capitalize font-bold text-4xl py-12">travel</h1>

            <div className="flex flex-col gap-6">
              {Post()}
              {Post()}
              {Post()}
              {Post()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Image
          src={`/images/img1.jpg`}
          width={300}
          height={250}
          className="rounded"
          alt="post image"
        />
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

export default SectionFour;
