import Image from "next/image";
import Link from "next/link";
import Fetcher from "../../lib/fetcher";
import Author from "../_Child/Author/Author";
import Error from "../_Child/Error/Error";
import Spinner from "../_Child/Spinner/Spinner";

const SectionFour = () => {
  const { data, isLoading, isError } = Fetcher(`/api/popular`);
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <>
      <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
          <div className="item">
            <h1 className="capitalize font-bold text-4xl py-12">business</h1>

            <div className="flex flex-col gap-6">
              {data[0] && <Post post={data[0]} />}
              {data[1] && <Post post={data[1]} />}
              {data[2] && <Post post={data[2]} />}
            </div>
          </div>
          <div className="item">
            <h1 className="capitalize font-bold text-4xl py-12">travel</h1>

            <div className="flex flex-col gap-6">
              {data[3] && <Post post={data[3]} />}
              {data[4] && <Post post={data[4]} />}
              {data[5] && <Post post={data[5]} />}
              
              {/* {data[7] && <Post post={data[7]} />} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export function Post({ post }) {
  const { id, img, title, author } = post;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/Posts/${id}`}>
          <Image
            src={img}
            width={300}
            height={250}
            className="rounded"
            alt="post image"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="title">
          <Link
            href={`/Posts/${id}`}
            className="text-xl capitalize font-bold text-gray-800 hover:text-gray-600"
          >
            {title}
          </Link>
        </div>
        <Author author={author} />
      </div>
    </div>
  );
}

export default SectionFour;
