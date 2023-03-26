import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Fetcher from "../../lib/fetcher";
import Author from "../_Child/Author/Author";
import Error from "../_Child/Error/Error";
import Spinner from "../_Child/Spinner/Spinner";
const SectionTHRee = () => {
  const { data, isLoading, isError } = Fetcher(`/api/popular`);
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;


  return (
    <>
      <section className="container mx-auto md:px-20 py-16">
        <h1 className="capitalize font-bold text-4xl text-center py-12">
          most popular posts
        </h1>
        {/* swiper */}
        <Swiper slidesPerView={2}>
          {data?.map((popu) => (
            <SwiperSlide key={popu.id}>
              <Post popu={popu} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export function Post({popu}) {
  const { id, img, title, subtitle, author, published, category } = popu;
  return (
    <>
      <div className="grid mx-12">
        <div className="images">
          <Image
            src={img}
            width={600}
            height={450}
            alt="post image"
          />
        </div>
        <div className="info flex justify-center flex-col">
          <div className="category flex gap-2 py-1">
            <Link href={`/`} className="text-orange-600 hover:text-orange-800">
              {category}
            </Link>
            <Link href={`/`} className="text-gray-600 hover:text-gray-800">
              {published}
            </Link>
          </div>
          <div className="title">
            <Link
              href={`/Posts/${id}`}
              className="text-2xl md:text-3xl capitalize font-bold text-gray-800 hover:text-gray-600"
            >
              {title}
            </Link>
          </div>
          <p className="text-gray-500 py-2">
            {subtitle}
          </p>
          <Author author={author} />
        </div>
      </div>
    </>
  );
}

export default SectionTHRee;
