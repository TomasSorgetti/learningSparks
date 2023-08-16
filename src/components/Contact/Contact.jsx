import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="font-manrope px-6 pt-4 pb-6 my-6 text-white bg-titleColor">
      <h3 className="font-poppins text-[35px] font-extrabold">Contactanos</h3>
      <p className="text-[14px] mb-6 mt-2 leading-5">
        ¿Tenés dudas o consultas? ¿No ves la materia que querés? Mandá tu
        mensaje que te respondemos muy pronto.
      </p>
      <article className="flex flex-col gap-2 font-manrope">
        <a href="#" className="flex gap-2 items-center">
          <FiMail color="#1ADDC2" />
          <p>contacto@learning-spark.com</p>
        </a>
        <a href="#" className="flex gap-2 items-center">
          <FaWhatsapp color="#1ADDC2" />
          <p>(+54 9)11-5995-6114</p>
        </a>
      </article>
    </section>
  );
}

export default Contact