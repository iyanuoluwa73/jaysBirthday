import { Link } from "react-router-dom";
import camera from "../images/camera.png";
import gift from "../images/gift.png";
import headphone from "../images/headphones.png";
import letter from "../images/letter.png";

function All() {
  return (
    <div className="w-full bg-red-900  flex flex-col text-white text-center">
      <div className="mx-auto mt-8 font-playfair">
        <h2 className="text-2xl font-bold tracking-wider">
          These are for you❤️
        </h2>
        <p className="text-sm pt-4 pb-8 tracking-widest w-[95%] mx-auto">
          A few little things made with love, wrapped in ribbon bows just for
          your special day.
        </p>
      </div>

      <div className="font-poppins md:flex md:flex-row md:flex-wrap md:items-center ">
        {/* camera */}

        <div className="w-11/12 border border-gray-200 p-8 rounded-3xl mx-auto bg-transparent shadow-lg md:w-[48%]">
          <Link to="/camera">
            {/* <h1 className="text-6xl">📷</h1> */}
            <img src={camera} alt="Camera" className="w-1/3 mx-auto" />
          </Link>
          <h1 className="py-4 font-bold">Camera</h1>
          <p>Open your sweet photo booth gallery</p>
        </div>

        {/* song */}

        <div className="w-11/12 border border-gray-200 p-8 rounded-3xl mx-auto my-8 bg-transparent shadow-lg md:w-[48%]">
          <Link to="/song">
            {/* <h1 className="text-6xl">🎧</h1> */}
            <img src={headphone} alt="Headphone" className="w-1/3 mx-auto" />
          </Link>
          <h1 className="py-4 font-bold">Song</h1>
          <p>Play your special song</p>
        </div>

        {/* letter */}

        <div className="w-11/12 border border-gray-200 p-8 rounded-3xl m-auto bg-transparent shadow-lg md:w-[48%]">
          <Link to="/letter">
            {/* <h1 className="text-6xl">💌</h1> */}
            <img src={letter} alt="Letter" className="w-1/3 mx-auto" />
          </Link>
          <h1 className="py-4 font-bold">Letter</h1>
          <p>Open a lovely envelope and read a message</p>
        </div>

        {/* present */}

        <div className="w-11/12 border border-gray-200 p-8 rounded-3xl  mx-auto my-8  bg-transparent shadow-lg md:w-[48%]">
          <Link to="/present">
            {" "}
            <img src={gift} alt="Gift" className="w-1/3 mx-auto" />
          </Link>
          <h1 className="py-4 font-bold">Present</h1>
          <p>It is time to open your present</p>
        </div>

        {/* login button */}

        <div className="">
          <Link to="/welcome">
            <button className="mx-auto mt-8 cursor-pointer text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 text-center">
              Back to login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default All;
