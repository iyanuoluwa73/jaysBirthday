import { Link } from "react-router-dom";
import GiftButton from "../components/GiftButton";

function Song() {
  return (
    <div className="bg-red-900 w-full p-4 text-white text-center font-poppins">
      <div className="pb-4 font-playfair">
        <h1 className="font-bold text-2xl">For Your Ears</h1>
        <p>Special songs curated for YOU!!!</p>
      </div>
      <div className="w-11/12 mx-auto my-8  ">
        <div className="border border-gray-200 p-4 rounded-3xl">
          <iframe
            className="rounded-lg"
            width="100%"
            height="200"
            src="https://www.youtube-nocookie.com/embed/-wuT9VGG1DQ"
            title="Glory to God in the Highest"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
            allowfullscreen
          ></iframe>
          <button className="bg-rose-600 px-4 py-2 rounded-full shadow mt-4">
            <Link to="https://youtu.be/-wuT9VGG1DQ?si=x4eSQdBeGVECAV1u">
              Play on Youtube
            </Link>
          </button>
        </div>

        <div className="border border-gray-200 p-4 my-6 rounded-3xl">
          <iframe
            className="rounded-lg"
            width="100%"
            height="200"
            src="https://www.youtube-nocookie.com/embed/gUnI2xQNdf8"
            title="Oluwapelumi"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
            allowfullscreen
          ></iframe>
          <button className="bg-rose-600 px-4 py-2 rounded-full shadow mt-4">
            <Link to="https://youtu.be/gUnI2xQNdf8?si=vHqpk6FJBhdkZeZU">
              Play on Youtube
            </Link>
          </button>
        </div>
        <div className="border border-gray-200 p-4 my-6 rounded-3xl">
          <iframe
            className="rounded-lg"
            width="100%"
            height="200"
            src="https://www.youtube-nocookie.com/embed/tyYfj-zAb_Q"
            title="K'orin Iyin"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
            allowfullscreen
          ></iframe>
          <button className="bg-rose-600 px-4 py-2 rounded-full shadow mt-4">
            <Link to="https://youtu.be/tyYfj-zAb_Q">Play on Youtube</Link>
          </button>
        </div>
        <div className="border border-gray-200 p-4 my-6 rounded-3xl">
          <iframe
            className="rounded-lg"
            width="100%"
            height="200"
            src="https://www.youtube-nocookie.com/embed/lrdmnAn9gxk"
            title="Worthy of My Praise"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
            allowfullscreen
          ></iframe>
          <button className="bg-rose-600 px-4 py-2 rounded-full shadow mt-4">
            <Link to="https://youtu.be/lrdmnAn9gxk?si=Npdrx8_b8yBKvS3z">
              Play on Youtube
            </Link>
          </button>
        </div>
      </div>

      <GiftButton />
    </div>
  );
}
export default Song;
