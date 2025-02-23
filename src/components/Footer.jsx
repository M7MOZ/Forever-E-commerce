import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div className="flex flex-col gap-14 sm:grid grid-cols-[3fr_1fr_1fr] my-5">
      <div>
        <img src={assets.logo} alt="logo" className="w-32 mb-4" />
        <p className="text-sm text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore illo
          natus architecto velit, cum laborum iusto. Aliquid quas expedita
          itaque, nihil unde voluptates assumenda labore corrupti tempora totam
          pariatur sunt.
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-medium mb-4">COMPANY</h1>
        <ul className="text-sm text-gray-700 flex flex-col gap-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-medium mb-4">GET IN TOUCH</h1>
        <p className="text-sm text-gray-700">
          +1-000-000-0000 greatstackdev@gmail.com Instagram
        </p>
      </div>
    </div>
  );
}
