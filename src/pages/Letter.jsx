// import { Link } from "react-router-dom";
import GiftButton from "../components/GiftButton";

function Letter() {
  return (
    <div className="bg-red-900 w-full p-4 font-poppins md:flex md:flex-row md:flex-wrap md:items-center ">
      {/* mummy */}
      <div className="w-11/12 border border-gray-200 p-4 rounded-3xl mx-auto my-8 bg-transparent shadow-lg text-white text-center md:w-[48%]">
        {/* <p className="">💌</p> */}
        <h2 className="font-bold text-2xl">A Message For You From Mummy</h2>
        <div className="bg-pink-200 w-full h-52 mx-auto my-4 rounded-3xl relative">
          {/* <p className="text-3xl">❤️</p> */}
          <div className="bg-white w-11/12 h-40 rounded-3xl absolute top-6 left-3 text-pink-950 text-left">
            <h4 className="font-bold mt-2 ml-4">
              Congratulations on your birthday, Olajumoke.
            </h4>
            <p className="h-28 overflow-scroll ml-4">
              This birthday will mark the beginning of the manifestation of
              greater glory in your life. You will celebrate more in sound
              health and mind. Your expectations shall not be cut short. The
              Lord will grant your good heart desires according to His plan for
              your life. It is forward ever and backward never for you in Jesus
              name. You will not know a better yesterday. You will have cause to
              thank God every time as you arise and shine in Jesus Mighty name.
              You will fulfill destiny in life according to God's plan for you.
              Untimely death shall not be your portion in Jesus name. You are
              blessed in the morning and evening. Aseyi samodun l'oruko Jesu Kristi. Amen💐
            </p>
          </div>
        </div>
        <p className="text-left">
        </p>
      </div>

      {/* ife */}
      <div className="w-11/12 border border-gray-200 p-4 rounded-3xl mx-auto my-8 bg-transparent shadow-lg text-white text-center md:w-[48%]">
        <h2 className="font-bold text-2xl">A Message For You From IfeOluwa</h2>
        <div className="bg-pink-200 w-full h-52 mx-auto my-4 rounded-3xl relative">
          <div className="bg-white w-11/12 h-40 rounded-3xl absolute top-6 left-3 text-pink-950 text-left">
            <h4 className="font-bold mt-2 ml-4">Big Sister,</h4>
            <p className="h-28 overflow-scroll ml-4">
              May your dreams come true, May your new year be full of light💡,
              sweetness and love💖. May your intentions be granted. Have a
              wonderful birthday celebration🎂.
            </p>
          </div>
        </div>
        
      </div>

      {/* me */}
      <div className="w-11/12 border border-gray-200 p-4 rounded-3xl mx-auto my-8 bg-transparent shadow-lg text-white text-center md:w-[48%]">
        <h2 className="font-bold text-2xl">
          A Message For You From IyanuOluwa
        </h2>

        <div className="bg-pink-200 w-full h-52 mx-auto my-4 rounded-3xl relative">
          <div className="bg-white w-11/12 h-40 rounded-3xl absolute top-6 left-3 text-pink-950 text-left">
            <h4 className="font-bold mt-2 ml-4">Big Sister Jay,</h4>
            <p className="h-28 overflow-scroll ml-4">
              Happy birthday to the sweetest soul. May God continue to bless and
              keep you. May He grant you all your heart desires and may you
              never lack anything good in life. I am so proud of you. You are a
              blessing to me and to everyone around you. May this year be filled
              with joy, laughter, and endless opportunities. Happy birthday, my
              dear sister💖.
            </p>
          </div>
        </div>
      </div>

      <GiftButton />
    </div>
  );
}
export default Letter;
