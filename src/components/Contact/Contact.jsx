import React from "react";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import contantDesk from "../../assets/desktop/contact.png";
const Contact = () => {
  return (
    <section className="font-manrope px-6 pb-2 pt-4 mt-6 text-white bg-titleColor sm:px-20 lg:flex lg:p-0 lg:mt-20 lg:h-[300px] xl:justify-between 2xl:h-[400px] 2xl:items-center">
      <article className="lg:p-16 2xl:pl-36 flex flex-col 2xl:gap-4">
        <h3 className="font-poppins text-[35px] font-extrabold">Contactanos</h3>
        <p className="text-[14px] mb-6 mt-2 leading-5 lg:w-[400px]">
          ¿Tenés dudas o consultas? ¿No ves la materia que querés? Mandá tu
          mensaje que te respondemos muy pronto.
        </p>
        <div className="flex flex-col gap-2 font-manrope">
          <a href="#" className="flex gap-2 items-center">
            <FiMail color="#1ADDC2" />
            <p>contacto@learning-spark.com</p>
          </a>
          <a href="#" className="flex gap-2 items-center">
            <FaWhatsapp color="#1ADDC2" />
            <p>(+54 9)11-5995-6114</p>
          </a>
        </div>
      </article>
      <div className="hidden lg:block overflow-hidden w-[800px] 2xl:h-[400px]">
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
