import Image from "next/image";

const Error = () => {
  return (
    <div className="text-center py-10 w-full height-full flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-orange-600 py-10">
        something went wrong
      </h1>
      <Image src={`/images/404_Not_found.png`} width={400} height={400} alt="not found image" />
    </div>
  );
};

export default Error;
