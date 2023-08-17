import React from 'react'
import header from "../../assets/desktop/header.png"
const Header = () => {
  return (
    <section className="flex flex-col gap-8 items-center m-auto w-11/12 lg:w-full relative lg:h-[300px] lg:items-start lg:pl-10 lg:gap-5 lg:mb-30">
      <h1 className="font-poppins title text-[26px] font-extrabold text-center text-titleColor sm:w-10/12 lg:text-left lg:w-[360px]">
        Clases de apoyo con tutores especializados para IB y IGCSE
      </h1>
      <p className="font-manrope text-center text-[16px] text-textColor leading-7 sm:w-10/12 lg:text-left lg:w-[500px]">
        Un mundo de aprendizaje a tu alcance. Exploraciones guiadas y
        preparación para exámenes en Mathematics, Biology, Physics y más, ¡sin
        importar tu ubicación!
      </p>
      <a
        href="#algunlado"
        className="bg-buttonColor font-poppins  w-auto text-center text-white py-2 px-6 rounded-3xl text-[18px] font-semibold"
      >
        Reservar ahora
      </a>
      <img
        className="hidden lg:block absolute right-0 top-[-56px] z-[-1]"
        src={header}
        alt="header background"
      />
      <div className="w-11/12 h-[3px] mt-3 bg-gray-100 lg:hidden"></div>
    </section>
  );
}

export default Header