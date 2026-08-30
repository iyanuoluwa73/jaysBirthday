// import { Link } from "react-router-dom";
import GiftButton from "../components/GiftButton";
import birth from "../images/birth.jpg";
import growingBaby from "../images/growing.jpg";
import grownBaby from "../images/welcome.jpg";
import sisters from "../images/sisters.jpg";
import revsister from "../images/revsister.jpg";
import ambition from "../images/ambition.jpg";
import level1 from "../images/level1.jpg";
import level2 from "../images/level2.jpg";
import marry from "../images/marry.jpg";
import completion2 from "../images/completion2.jpg";
import flex from "../videos/flex.mp4";
import babies from "../images/babies.jpg";
import family from "../images/family.jpg";
import baby from "../images/baby.jpg";
import learning from "../images/learning.jpg";
import convo from "../images/convo.jpg";
import twentieth from "../images/twentieth.jpg";
import induction from "../images/induction.jpg";
import beach from "../videos/beach.mp4";

function Camera() {
  return (
    <div className="bg-red-900 w-full text-white text-center py-4 font-poppins">
      <div className="pb-8 font-playfair">
        <h1 className="font-bold text-2xl">Photo Booth</h1>
        <p>Special memories for YOU!!!</p>
      </div>
      <div className="w-11/12 flex justify-between items-center flex-row flex-wrap mx-auto text-pink-950 font-bold">
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl">
          <img
            src={birth}
            className="w-full h-64 object-cover rounded-lg"
            alt="birth"
          />
          <p className="text-center pt-3 text-xs">
            And it all started with this bundle of joy
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl">
          <img
            src={growingBaby}
            className="w-full h-60 object-cover rounded-lg"
            alt="growingBaby"
          />
          <p className="text-center pt-3 text-xs">
            Growing up, one beautiful moment at a time.
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img src={grownBaby} className=" rounded-lg" alt="grownBaby" />
          <p className="text-center pt-3 text-xs">
            The little girl who had no idea how far she would go.
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={revsister}
            className="w-full h-52 object-cover rounded-lg"
            alt="revsister"
          />
          <p className="text-center pt-3 text-xs">
            A little glimpse into her "Rev. Sister" era
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={twentieth}
            className="w-full h-52 object-cover rounded-lg"
            alt="twentieth"
          />
          <p className="text-center pt-3 text-xs">20 looked good on her.</p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={ambition}
            className="w-full h-52 object-cover rounded-lg"
            alt="ambition"
          />
          <p className="text-center pt-3 text-xs">
            From 'I want to be a doctor'...
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={level1}
            className="w-full h-48 object-cover rounded-lg md:h-96"
            alt="level1"
          />
          <p className="text-center pt-3 text-xs">
            To being a student, still dreaming, still figuring it all out.
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img src={completion2} className="rounded-lg" alt="completion2" />
          <p className="text-center pt-3 text-xs">
            Final year: the finish line was finally in sight.
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={sisters}
            className="w-full h-60 object-cover rounded-lg"
            alt="sisters"
          />
          <p className="text-center pt-3 text-xs">
            Sisters by blood, best friends by choice
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={family}
            className="w-full h-56 object-cover rounded-lg"
            alt="family"
          />
          <p className="text-center pt-3 text-xs">
            Her biggest cheerleaders, from day one.
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={convo}
            className="w-full h-60 object-cover rounded-lg md:h-96"
            alt="convo"
          />
          <p className="text-center pt-3 text-xs">
            From dreams written on paper to a degree in her hands.
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={learning}
            className="w-full h-60 object-cover rounded-lg md:h-96"
            alt="learning"
          />
          <p className="text-center pt-3 text-xs">
            She didn't just wear the scrubs; she earned them.
          </p>
        </div>

        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img src={induction} className="rounded-lg" alt="induction" />
          <p className="text-center pt-3 text-xs">
            And finally to the day she became a doctor — we've been privileged
            to witness it all.
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={level2}
            className="w-full h-64 object-cover  rounded-lg"
            alt="level2"
          />
          <p className="text-center pt-3 text-xs">
            She grew up, chased her dream, and became Dr. Olajumoke
            Aanuoluwayimika
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <video className="rounded-lg" controls>
            <source src={beach} type="video/mp4" />
          </video>
          <p className="text-center pt-3 text-xs">
            Proof that doctors know how to have fun too.
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={marry}
            className="w-full h-56 object-cover rounded-lg md:h-96"
            alt="marry"
          />
          <p className="text-center pt-3 text-xs">
            From "our sister" to somebody's wife. We are still processing it😂
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={babies}
            className="md:w-full md:h-64 md:object-cover rounded-lg"
            alt="babies"
          />
          <p className="text-center pt-3 text-xs">
            She's always loved babies...
          </p>
        </div>
        <div className="w-[48%] bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4">
          <img
            src={baby}
            className="w-full h-56 object-cover rounded-lg"
            alt="baby"
          />
          <p className="text-center pt-3 text-xs">
            ...but this one is hers to love forever.
          </p>
        </div>
      </div>

      <div className="w-11/12 mx-auto bg-pink-200 border border-gray-200 p-3 rounded-2xl mt-4 text-pink-950 font-bold">
        <video className="rounded-lg" controls>
          <source src={flex} type="video/mp4" />
        </video>
        <p className="text-center pt-1 text-xs">
          We've watched you grow through every chapter. And somehow, every
          chapter has been more beautiful than the last. Here's to the woman
          you've become—and all the beautiful chapters still waiting to be
          written.
        </p>
      </div>
      <GiftButton />
    </div>
  );
}
export default Camera;
