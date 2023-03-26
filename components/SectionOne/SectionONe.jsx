import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import Author from "../_Child/Author/Author";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Error from "../_Child/Error/Error";
import Spinner from "../_Child/Spinner/Spinner";
import Fetcher from "../../lib/fetcher";

const SectionONe = () => {
  const { data, isLoading, isError } = Fetcher(`/api/trending`);
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  SwiperCore.use([Autoplay]);

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  

 
  return (
    <>
      <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
          <h1 className="font-bold text-4xl pb-12 text-center">trending</h1>

          <Swiper
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
            }}
          >
            {data?.Trending?.map((trend) => (
              <SwiperSlide key={trend.id}>
                <Slide trend={trend} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export function Slide({ trend }) {
  const { id, img, title, subtitle, author, published, category } =
    trend;
  return (
    <>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="image">
          <Link href={`/Posts/${id}`}>
          <Image src={img} alt="blog image" width={600} height={600} />
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="category flex gap-3">
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
              className="text-3xl md:text-5xl capitalize font-bold text-gray-800 hover:text-gray-600"
            >
              {title}
            </Link>
          </div>
          <p className="text-gray-500 py-3">{subtitle}</p>
          {author && <Author author={author} />}
        </div>
      </div>
    </>
  );
}

export default SectionONe;
