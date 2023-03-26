import Image from "next/image";
import Link from "next/link";
import React from "react";
import Fetcher from "../../lib/fetcher";
import getPosts from "../../lib/helper";
import Author from "../_Child/Author/Author";
import Error from "../_Child/Error/Error";
import Spinner from "../_Child/Spinner/Spinner";

const SectionTWo = () => {
  const { data, isLoading, isError } = Fetcher(`/api/posts`);

  if(isLoading) return <Spinner/>
  if(isError) return <Error/>

  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="capitalize font-bold text-4xl text-center py-12">
          latest posts
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {data?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

function Post({ post }) {
  const { id, img, category, title, subtitle, published, author } = post;
  return (
    <>
      <div className="item">
        <div className="images">
          <Image
            src={img || `img not found`}
            width={500}
            height={350}
            className="rounded"
            alt="post image"
          />
        </div>
        <div className="info flex justify-center flex-col py-2">
          <div className="category flex gap-2">
            <Link href={`/`} className="text-orange-600 hover:text-orange-800">
              {category}
            </Link>
            <Link href={`/`} className="text-gray-600 hover:text-gray-800">
              {published || `unknown`}
            </Link>
          </div>
          <div className="title">
            <Link
              href={`/Posts/${id}`}
              className="text-xl capitalize font-bold text-gray-800 hover:text-gray-600"
            >
              {title || `unknown`}
            </Link>
          </div>
          <p className="text-gray-500 py-1">{subtitle || `unpublished`}</p>
          {author && <Author author={author} />}
        </div>
      </div>
    </>
  );
}

export default SectionTWo;
