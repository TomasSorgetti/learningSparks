import React from "react";
import errorPage from "../assets/desktop/errorPage.png";
import lgerrorPage from "../assets/desktop/lgErrorPage.png";
import mobileErrorPage from "../assets/mobile/mobileErrorPage.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="relative h-[100vh]">
      <div className=" lg:absolute px-6 flex flex-col items-center gap-4 lg:right-5 lg:top-[30%] xl:right-10">
        <h1 className="z-50 font-poppins font-extrabold text-center text-titleColor text-[40px] xl:text-[3.75rem]">
          ¡Ooops!
        </h1>
        <p className="z-50 font-poppins font-medium text-center text-titleColor text-[1.7rem] xl:text-[2.5rem]">
          Sorry, page not found
        </p>
        <p className="z-50 font-poppins font-light text-center text-titleColor text-[1rem] 2xl:text-[2rem] sm:w-[500px] 2xl:w-[700px]">
          The link you followed may be broken or the page may have been removed.
        </p>
        <Link
          className="z-50 bg-buttonColor hover:bg-[#FE1E45] focus:bg-[#C61130] font-poppins text-center text-white py-2 px-6 rounded-3xl text-[1.125rem] font-semibold xl:text-[1.8rem] xl:rounded-full 2xl:mt-5 w-40 xl:w-52 "
          to="/"
        >
          Go Home
        </Link>
      </div>
      <div className="hidden 2xl:block w-full overflow-hidden h-[100dvh]">
        <img
          className="w-full object-contain"
          src={errorPage}
          alt="student girl watching the title desktop"
        />
      </div>
      <img
        className="lg:hidden absolute bottom-0 w-full"
        src={mobileErrorPage}
        alt="student girl watching the title mobile"
      />
      <img
        className="hidden lg:block 2xl:hidden w-full"
        src={lgerrorPage}
        alt="student girl watching the title desktop"
      />
    </section>
  );
};

export default ErrorPage;
