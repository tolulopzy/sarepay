import React from "react";
import image1 from "../images/image1.png";
import acceptpayment from "../images/acceptpayment.png";
import image3 from "../images/image3.png";

const LandingPage = () => {
  return (
    <main>
      <div
        className="bg-white flex flex-col justify-center items-center relative text-center gap-16 bg-yellow-100"
        style={{ height: "calc(100vh - 5.75rem)" }}
      >
        <img
          src={image3}
          alt="Saly"
          className="absolute left-0 bottom-8 w-56 lg:w-72 hidden md:block"
        />
        <h1 className="lg:text-5xl md: text-3xl sm: text-1xl font-black w-1/2">
          Grow your business with SarePay
        </h1>
        <p className="w-1/2">
          Voog Next provides a constrained, purposeful set of typographic
          styles. These style maps as much as possible to functional roles so
          you know when each can be used.
        </p>
        <div className="">
          <button className="bg-yellow-400 rounded-md m-2 py-2 px-4">
            Create an account
          </button>
          <button className="bg-gray-400 rounded-md py-2 px-4">
            Speak to us now
          </button>
        </div>
      </div>
      <div className="section2 h-screen flex flex-row flex-auto px-28 py-14 gap-10">
        <img src={acceptpayment} alt="payment" className=" w-2/5" />
        <div className="">
          <h4 className="lg:text-3xl md: text-2xl sm: text-1xl font-black pb-12">
            Accept payments anywhere.
          </h4>
          <p className="pb-10">
            Voog Next provides a constrained, purposeful set of typographic
            styles. These style maps as much as possible to functional roles so
            you know when each can be used.
          </p>
          <div className="flex flex-row pb-10">
            <div className="">
              <h6 className="font-black">Online Website and Mobile</h6>
              <p>
                Commonly used for large H1 headings to put strong emphasis on
                bold typography.
              </p>
            </div>
            <div className="">
              <h6 className="font-black">Online Website and Mobile</h6>
              <p>
                Commonly used for large H1 headings to put strong emphasis on
                bold typography.
              </p>
            </div>
          </div>
          <div className="flex flex-row pb-10">
            <div className="">
              <h6 className="font-black">Online Website and Mobile</h6>
              <p>
                Commonly used for large H1 headings to put strong emphasis on
                bold typography.
              </p>
            </div>
            <div className="">
              <h6 className="font-black">Online Website and Mobile</h6>
              <p>
                Commonly used for large H1 headings to put strong emphasis on
                bold typography.
              </p>
            </div>
          </div>
          <div className="justify-center py-5 px-8">
            <button className="bg-yellow-400 rounded-md m-2 py-2 px-4">
              Create an account
            </button>
            <button className="bg-gray-400 rounded-md py-2 px-4">
              Speak to us now
            </button>
          </div>
        </div>
      </div>
      <div className="section3 flex flex-row px-28 py-14">
        <div className="bg-blue-900 text-white rounded-tl-md rounded-bl-md px-8 py-20">
          <h1 className="text-2xl pb-5">Issue cards, create new businesses.</h1>
          <h6>Online Website and Mobile</h6>
          <p>
            Commonly used for large H1 headings to put strong emphasis on bold
            typography.
          </p>
        </div>
        <div className="bg-gray-900 text-white px-8 py-20">
          <h1 className="text-2xl pb-5">
            {" "}
            Issue cards, create new businesses.
          </h1>
          <h6>Online Website and Mobile</h6>
          <p>
            Commonly used for large H1 headings to put strong emphasis on bold
            typography.
          </p>
        </div>
        <div className="bg-yellow-400 text-white rounded-tr-md rounded-br-md px-8 py-20">
          <h1 className="text-2xl pb-5">Issue cards, create new businesses.</h1>
          <h6>Online Website and Mobile</h6>
          <p>
            Commonly used for large H1 headings to put strong emphasis on bold
            typography.
          </p>
        </div>
      </div>
      <div className="section4 flex flex-row px-28 py-14 bg-yellow-100">
        <div className="w-full  py-10">
          <h6>Online Website and Mobile </h6>
          <h4 className="font-black">Accept Payments anywhere</h4>
          <p>
            Voog Next provides a constrained, purposeful set of typographic
            styles. These style maps as much as possible to functional roles so
            you know when each can be used.
          </p>
          <div className="justify-center py-5 px-8">
          <button className="bg-yellow-400 rounded-md m-2 py-2 px-4">
            Create an account
          </button>
          <button className="bg-gray-400 rounded-md py-2 px-4">
            Speak to us now
          </button>
        </div>
        </div>
        {/* <div className="justify-center py-5 px-8">
          <button className="bg-yellow-400 rounded-md m-2 py-2 px-4">
            Create an account
          </button>
          <button className="bg-gray-400 rounded-md py-2 px-4">
            Speak to us now
          </button>
        </div> */}
        <div className="w-full">
          <img src={image1} alt="image1" />
        </div>
      </div>
      <div className="text-center bg-pink-100">
        <h3>Grow your business with Sarepay.</h3>
        <button className="bg-gray-800 rounded-md m-2 py-2 px-4">
          Create an account
        </button>
      </div>
    </main>
  );
};

export default LandingPage;
