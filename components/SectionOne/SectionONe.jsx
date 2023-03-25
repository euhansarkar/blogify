import Image from "next/image";
import Link from "next/link";
import Author from "../_Child/Author/Author";

const SectionONe = () => {

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right",
    }

    console.log(bg);

  return (
    <>
      <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
          <h1 className="font-bold text-4xl pb-12 text-center">trending</h1>
          {Slide()}
        </div>
      </section>
    </>
  );
};

function Slide() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="image">
          <Image
            src={"/images/img1.jpg"}
            alt="blog image"
            width={600}
            height={600}
          />
        </div>
        <div className="info flex justify-center flex-col">
          <div className="category flex gap-3">
            <Link href={`/`} className="text-orange-600 hover:text-orange-800">
              business travel
            </Link>
            <Link href={`/`} className="text-gray-600 hover:text-gray-800">
              Mar 26, 2023
            </Link>
          </div>
          <div className="title">
            <Link
              href={`/`}
              className="text-3xl md:text-5xl capitalize font-bold text-gray-800 hover:text-gray-600"
            >
              your most unhappy customers are your greatest source of learning
            </Link>
          </div>
          <p className="text-gray-500 py-3">
            {" "}
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <Author/>
        </div>
      </div>
    </>
  );
}

export default SectionONe;
