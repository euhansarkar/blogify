import Image from "next/image";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Related from "../../../components/Related/Related";
import Author from "../../../components/_Child/Author/Author";
import Error from "../../../components/_Child/Error/Error";
import Spinner from "../../../components/_Child/Spinner/Spinner";
import Layout from "../../../Layout/Layout";
import Fetcher from "../../../lib/fetcher";
import getPosts from "../../../lib/helper";

export default function Article({fallback}) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = Fetcher(`/api/posts/${postId}`);
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <SWRConfig value={{fallback}}>
      <Page {...data} />
    </SWRConfig>
  );
}

export function Page({
  img,
  title,
  description,
  subtitle,
  author,
  published,
  category,
}) {
  // const { img, title, description, subtitle, author, published, category } =
  //   post.posts;

  return (
    <Layout>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author author={author} />
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl pb-12 text-center">{title}</h1>
          <p className="text-gray-500 text-xl text-center">{subtitle}</p>
          <div className="py-10">
            <Image src={img} width={900} height={300} alt="image" />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description}
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description}
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description}
          </div>
        </div>
        <Related />
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { postId } = params;
  const posts = await getPosts(postId);
  return {
    props: {
      fallback: {
        "/api/posts":
         posts 
      }
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
