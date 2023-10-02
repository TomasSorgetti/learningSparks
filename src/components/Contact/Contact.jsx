import React from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import contantDesk from "../../assets/desktop/contact.png";
const Contact = () => {
  return (
    <section
      id="contactanos"
      className="h-[344px] font-manrope px-10 md:pl-[100px] pb-2 pt-0 mt-6 text-white bg-titleColor  sm:px-20 lg:flex lg:p-0 lg:mt-20 lg:h-[300px] xl:justify-between 2xl:h-[400px] 2xl:items-center"
    >
      <article className="lg:w-[460px] lg:p-16 2xl:pl-36 flex flex-col h-full justify-evenly py-8 2xl:gap-4 3xl:w-[860px]">
        <h3 className="font-poppins text-[1.5rem] xl:text-[2.188rem] font-extrabold">
          Contáctanos
        </h3>
        <p className="text-[0.875rem] font-normal mb-6 mt-2 leading-5 lg:w-[350px]">
          ¿Tienes dudas o consultas? ¿No ves la materia que quieres? Envía tu
          mensaje que te respondemos muy pronto.
        </p>
        <div className="flex flex-col gap-2 font-manrope text-[0.875rem] xl:text-[1.063rem]">
          <span className="flex gap-2 items-center">
            <FiMail color="#1ADDC2" />
            <p>contacto@learning-spark.com</p>
          </span>
          <span className="flex gap-2 items-center">
            <FaWhatsapp color="#1ADDC2" />
            <p>(+54 9)11-3947-8794</p>
          </span>
        </div>
      </article>
      <div className="hidden lg:block overflow-hidden w-[800px] 2xl:h-[400px] 3xl:w-full">
        <img
          className=" object-cover w-full h-full"
          src={contantDesk}
          alt="contact decoration"
        />
      </div>
    </section>
  );
};

export default Contact;
