const NewsLetter = () => {
  return (
    <div className=" pt-10">
      <div className="container mx-auto md:px-20 text-center">
        <h1 className="font-bold text-3xl">Subscribe Newsletter</h1>
        <div className="py-4">
            <input type="text" className="shadow border rounded w-9/12 py-3 px-3 text-white focus:outline-none focus:shadow-outline" placeholder="enter your email" />
        </div>
        <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl">
            Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
