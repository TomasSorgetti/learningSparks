import React from 'react'

const Header = () => {
  return (
    <section className="flex flex-col gap-8 items-center m-auto w-11/12">
      <h1 className="font-poppins title text-[26px] font-extrabold text-center text-titleColor">
        Clases de apoyo con tutores especializados para IB y IGCSE
      </h1>
      <p className="font-manrope text-center text-[16px] text-textColor leading-7">
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
      <div className="w-11/12 h-[3px] mt-3 bg-gray-100"></div>
    </section>
  );
}

export default Header