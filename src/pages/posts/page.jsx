import Image from "next/image";
import Related from "../../../components/Related/Related";
import Author from "../../../components/_Child/Author/Author";
import Layout from "../../../Layout/Layout";

const page = () => {
  return (
    <Layout>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl pb-12 text-center">trending</h1>
          <p className="text-gray-500 text-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            officiis cum ipsum blanditiis ipsa iste quod exercitationem,
            consequuntur saepe harum?
          </p>
          <div className="py-10">
            <Image
              src={`/images/img1.jpg`}
              width={900}
              height={300}
              alt="image"
            />
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            ullam repudiandae eos obcaecati quia ad maxime, minus voluptatibus
            nemo repellendus quod aperiam autem porro laboriosam iusto ea
            sapiente nobis quidem id fugit! Possimus minima voluptas error
            quibusdam, modi quasi cum explicabo excepturi voluptatibus beatae
            aliquid odio expedita voluptatum et similique?
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            ullam repudiandae eos obcaecati quia ad maxime, minus voluptatibus
            nemo repellendus quod aperiam autem porro laboriosam iusto ea
            sapiente nobis quidem id fugit! Possimus minima voluptas error
            quibusdam, modi quasi cum explicabo excepturi voluptatibus beatae
            aliquid odio expedita voluptatum et similique?
          </div>

          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            ullam repudiandae eos obcaecati quia ad maxime, minus voluptatibus
            nemo repellendus quod aperiam autem porro laboriosam iusto ea
            sapiente nobis quidem id fugit! Possimus minima voluptas error
            quibusdam, modi quasi cum explicabo excepturi voluptatibus beatae
            aliquid odio expedita voluptatum et similique?
          </div>
        </div>
        <Related/>
      </section>
    </Layout>
  );
};

export default page;
