import React from "react";
import image1 from "../images/image1.png";
import acceptpayment from "../images/acceptpayment.png";
import image3 from "../images/image3.png";

const LandingPage = () => {
  return (
    <main>
      <div
        className="bg-white  relative text-center  px-4 lg:pt-8 lg:px-28 bg-yellow-100"
        style={{ height: "calc(100vh - 5.75rem)" }}
      >
        <img
          src={image3}
          alt="Saly"
          className="absolute left-0 bottom-8 w-56 lg:w-72 hidden md:block sm:hidden"
        />
        <h1 className="pt-10 pb-8 text-5xl lg:text-7xl md:px-48 text-center font-bold">
          Grow your business with SarePay
        </h1>
        <p className="text-sm md:text-2xl md:w-1/2 md:leading-10 md:mx-auto">
          Voog Next provides a constrained, purposeful set of typographic
          styles. These style maps as much as possible to functional roles so
          you know when each can be used.
        </p>
        <div className="mt-4 ">
          <button className="bg-yellow-400 rounded-md m-2 py-2 px-4">
            Create an account
          </button>
          <button className="bg-gray-400 rounded-md py-2 px-4">
            Speak to us now
          </button>
        </div>
      </div>
      <div className="section2 lg:flex flex-row flex-auto px-4 lg:px-28 lg:py-14 gap-10">
        <img src={acceptpayment} alt="payment" className="w-full lg:w-2/5" />
        <div className="">
          <h4 className="lg:text-3xl md: text-2xl sm: text-1xl font-black pb-12 pt-6 lg:pt-0">
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
          <div className="flex items-center gap-4  py-5 px-2">
            <button className="bg-yellow-400 rounded-md m-2 py-2 px-2 lg:px-4">
              Create an account
            </button>
            <button className="bg-gray-400 rounded-md py-2 px-2 lg:px-4">
              Speak to us now
            </button>
          </div>
        </div>
      </div>
      <div className="section3 lg:flex flex-row px-4 py-6 lg:px-28 lg:py-14">
        <div className="bg-blue-900 text-white rounded-tl-md rounded-tr-md lg:rounded-bl-md px-8 py-20">
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
        <div className="bg-yellow-400 text-white lg:rounded-tr-md rounded-bl-md lg:rounded-bl-none rounded-br-md px-8 py-20">
          <h1 className="text-2xl pb-5">Issue cards, create new businesses.</h1>
          <h6>Online Website and Mobile</h6>
          <p>
            Commonly used for large H1 headings to put strong emphasis on bold
            typography.
          </p>
        </div>
      </div>
      <div className="section4 lg:flex flex-row-reverse px-4 py-6lg:px-28 lg:py-14 bg-yellow-100">
        <div className="w-full">
          <img src={image1} alt="image1" />
        </div>
        <div className="w-full  py-10">
          <h6 className="font-bold text-sm">Online Website and Mobile </h6>
          <h4 className="font-black mt-2 text-3xl">Accept Payments anywhere</h4>
          <p className="text-sm mt-2 text-gray-500 leading-8">
            Voog Next provides a constrained, purposeful set of typographic
            styles. These style maps as much as possible to functional roles so
            you know when each can be used.
          </p>
          <div className="flex justify-center gap-4 py-5 px-2">
          <button className="bg-yellow-400 rounded-md  py-2 px-2 lg:px-4">
            Create an account
          </button>
          <button className="bg-gray-400 rounded-md py-2 px-2 lg:px-4">
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
        
      </div>
      <div className="text-center bg-pink-100 py-8">
        <h3 className="text-2xl pb-5 font-bold">Grow your business with SarePay.</h3>
        <button className="bg-gray-800 rounded-md m-2 py-2 px-4 text-white">
          Create an account
        </button>
      </div>
    </main>
  );
};

export default LandingPage;
