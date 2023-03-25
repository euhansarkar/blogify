import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Author from "../_Child/Author/Author";
const SectionTHRee = () => {
  return (
    <>
      <section className="container mx-auto md:px-20 py-16">
        <h1 className="capitalize font-bold text-4xl text-center py-12">
          most popular posts
        </h1>
        {/* swiper */}
          <Swiper slidesPerView={2}>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
          </Swiper>
      </section>
    </>
  );
};

function Post() {
  return (
    <>
      <div className="grid mx-12">
        <div className="images">
          <Image
            src={`/images/img1.jpg`}
            width={600}
            height={450}
            alt="post image"
          />
        </div>
        <div className="info flex justify-center flex-col">
          <div className="category flex gap-2 py-1">
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
              className="text-2xl md:text-3xl capitalize font-bold text-gray-800 hover:text-gray-600"
            >
              your most unhappy customers are your greatest source of learning
            </Link>
          </div>
          <p className="text-gray-500 py-2">
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

export default SectionTHRee;
