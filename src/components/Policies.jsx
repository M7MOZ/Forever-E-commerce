import { assets } from "../assets/assets";

export default function Policies() {
  return (
    <div className="flex flex-col gap-10 sm:flex-row sm:gap-12 justify-around">
      <div className="text-center">
        <img
          src={assets.exchange_icon}
          alt="exchange_icon"
          className="mx-auto w-12 mb-5"
        />
        <p className="text-xs sm:text-sm lg:text-xl font-semibold mb-2">
          Easy Exchange Policy
        </p>
        <p className="text-gray-400 text-xs sm:text-sm lg:text-xl">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="text-center">
        <img
          src={assets.quality_icon}
          alt="exchange_icon"
          className="mx-auto w-12 mb-5"
          />
        <p className="text-xs sm:text-sm lg:text-xl font-semibold mb-2">
          7 days return policy
        </p>
        <p className="text-gray-400 text-xs sm:text-sm lg:text-xl">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="text-center">
        <img
          src={assets.support_img}
          alt="exchange_icon"
          className="mx-auto w-12 mb-5"
        />
        <p className="text-xs sm:text-sm lg:text-xl font-semibold mb-2">
          Best customer support
        </p>
        <p className="text-gray-400 text-xs sm:text-sm lg:text-xl">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
}
