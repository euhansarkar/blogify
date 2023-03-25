import Image from "next/image";
import Link from "next/link";
import React from "react";
import Author from "../_Child/Author/Author";

const SectionTWo = () => {
  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="capitalize font-bold text-4xl text-center py-12">
          latest posts
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
          {Post()}
        </div>
      </section>
    </>
  );
};

function Post() {
  return (
    <>
      <div className="item">
        <div className="images">
          <Image
            src={`/images/img1.jpg`}
            width={500}
            height={350}
            className="rounded"
            alt="post image"
          />
        </div>
        <div className="info flex justify-center flex-col py-2">
          <div className="category flex gap-2">
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
              className="text-xl capitalize font-bold text-gray-800 hover:text-gray-600"
            >
              your most unhappy customers are your greatest source of learning
            </Link>
          </div>
          <p className="text-gray-500 py-1">
            {" "}
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <Author />
        </div>
      </div>
    </>
  );
}

export default SectionTWo;
