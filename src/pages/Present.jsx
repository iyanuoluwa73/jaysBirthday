// import { Link } from "react-router-dom";
import GiftButton from "../components/GiftButton";

function Present() {
  return (
    <div className="bg-red-900 w-full p-4 font-poppins text-white text-center">
      <div className="font-playfair">
        <h2 className="font-bold text-2xl">Your Present</h2>
        <p className="">It is time to open your present. I hope you like it.</p>
      </div>
      <div className="my-6">
        <iframe
          className="rounded-lg"
          width="100%"
          height="200"
          src="https://www.youtube-nocookie.com/embed/0la4P-qld9o?"
          title="Glory to God in the Highest"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
          allowfullscreen
        ></iframe>
      </div>
      <div className="my-6">
        <iframe
          className="rounded-lg"
          width="100%"
          height="200"
          src="https://www.youtube-nocookie.com/embed/OdR37ZLUACo"
          title="Glory to God in the Highest"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
          allowfullscreen
        ></iframe>
      </div>
      <GiftButton />
    </div>
  );
}
export default Present;
