import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

function Form() {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctDate = "1995-08-31";

  function handleSubmit(e) {
    e.preventDefault();

    const dateInputted = e.target.date.value;

    console.log("Submitted date:", dateInputted);

    if (date === correctDate) {
      navigate("/welcome");
      console.log("Correct date submitted!");
    } else if (date === "") {
      setError("Please enter your birthday.");
      console.log("No date submitted.");
    } else {
      setError("Incorrect date submitted.");
      console.log("Incorrect date submitted.");
    }
  }

  return (
    <div className="bg-pink-300 h-screen flex font-poppins">
      <div className="border border-pink-500 p-8 rounded-lg m-auto bg-white shadow-lg">
        <form action="" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="date" className="text-xl">
              When is your birthday❤️?
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block my-4"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {/* <Link to="/welcome">
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-pink-500 transition duration-300"
            >
              Welcome
            </button>
          </Link> */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2  rounded cursor-pointer hover:bg-pink-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
