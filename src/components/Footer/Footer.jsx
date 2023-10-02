import React from "react";
import logo from "../../assets/Logo/Large.png";
import insta from "../../assets/Logo/insta.svg";
import tiktok from "../../assets/Logo/tiktok.svg";
const Footer = () => {
  return (
    <section className="font-manrope px-4 sm:px-16">
      <article className="flex flex-col gap-6 pb-20 border-b-[1px] border-gray-300 lg:flex-row lg:justify-center lg:pb-24 lg:pt-4 lg:gap-12 xl:gap-20 3xl:justify-around">
        <a href="#navbar">
          <img
            className="pt-4 w-[157px] lg:w-[250px] lg:pt-4 xl:w-[280px]"
            src={logo}
            alt="logo"
          />
        </a>
        <div className="flex flex-col gap-10 lg:flex-row lg:pt-16 lg:pl-16 xl:gap-32">
          <div className="text-subTitleColor flex flex-col gap-2">
            <h5 className="text-[1.27rem] font-poppins font-semibold">
              Contacto
            </h5>
            <p>contacto@learning-spark.com</p>
            <p>(+54 9)11-5995-6114</p>
            <div className="flex gap-3">
              <a
                target="blank"
                href="https://www.instagram.com/learningspark_/"
                className="h-[28px] flex items-center justify-center rounded-full w-[28px] bg-gray-100"
              >
                <img className="w-[18px]" src={insta} alt="instagram logo" />
              </a>
              <a
                target="blank"
                href="https://www.tiktok.com/@learning.spark"
                className="h-[28px] flex items-center justify-center rounded-full w-[28px] bg-gray-100"
              >
                <img className="w-[18px]" src={tiktok} alt="tiktok logo" />
              </a>
            </div>
          </div>
          <div className=" text-subTitleColor">
            <h5 className="text-[1.27rem] font-poppins font-semibold pb-6">
              Menú
            </h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#clases">Clases</a>
              </li>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#contactanos">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </article>
      <p className="pt-12 pb-16 text-[0.65rem] font-normal text-subTitleColor lg:text-center">
        ©Copyright 2023. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
