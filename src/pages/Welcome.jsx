import { Link } from "react-router-dom";
import welcome from "../images/welcome.jpg";

function Welcome() {
  return (
    <div
      className=" h-screen flex font-poppins bg-cover bg-no-repeat  relative"
      style={{ backgroundImage: `url(${welcome})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative border border-gray-200 p-8 rounded-3xl m-auto bg-transparent shadow-lg text-white text-center">
        <h2 className="tracking-wide">A LITTLE BIRTHDAY SURPRISE</h2>
        <h1 className="font-bold py-4 font-playfair tracking-wider">
          HI, LOVE!
        </h1>
        <p>Do you want to see a little surprise for you?</p>
        <h1 className="text-8xl py-4">🎂</h1>
        <div className="pt-4 flex justify-center gap-4">
          <Link to="/all">
            <button
              type="button"
              className="bg-white text-pink-500 font-bold px-8 py-2 rounded-3xl cursor-pointer hover:bg-blue-500 transition duration-300 hover:text-white"
            >
              Yes🤭
            </button>
          </Link>
          <Link to="/">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold px-8 py-2 rounded-3xl cursor-pointer hover:bg-pink-500 transition duration-300"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
