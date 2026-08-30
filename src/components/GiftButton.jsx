import { Link } from "react-router-dom";

function GiftButton() {
  return (
    <div className="w-full font-poppins">
      <div className="text-white text-center">
        <Link to="/all">
          <button className="mx-auto mt-8 cursor-pointer text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 text-center">
            Back to gifts
          </button>
        </Link>
      </div>
    </div>
  );
}
export default GiftButton;
