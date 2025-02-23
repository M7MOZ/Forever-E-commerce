export default function Sub() {
  return (
    <div className="flex flex-col justify-center items-center my-32 text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 text-center my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <form className="w-full sm:w-3/4 md:w-1/2 flex flex-col sm:flex-row items-center mx-auto">
        <input type = "email" placeholder="Enter your email" className="border border-gray-400 outline-none p-3 sm:flex-1"/>
        <button disabled className="bg-black text-white p-3">Subscribe</button>
      </form>
    </div>
  );
}
