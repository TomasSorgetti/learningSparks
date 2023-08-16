import React from 'react'
import about from "../../assets/desktop/about.png"
const About = () => {
  return (
    <section className="mx-auto w-11/12">
      <div className="w-11/12 mx-auto h-[3px] my-3 bg-gray-100"></div>
      <span>¿QUIÉNES SOMOS?</span>
      <h3 className="aboutTitle text-[26px] mb-5 font-extrabold text-left text-titleColor">
        Sobre Learning Spark
      </h3>
      <img src={about} alt="about us" />
      <div className="flex flex-col gap-1 mt-5">
        <p className="text-[16px] font-normal text-textColor">
          Sabemos lo difícil y estresante que puede ser prepararse para los
          exámenes internacionales y por eso queremos darte la tranquilidad de
          que <span className="font-bold text-subTitleColor"> podemos ayudarte a alcanzar tu máximo potencial.</span>
        </p>
        <p className="text-[16px] font-normal text-textColor">
          Nuestro equipo de profesionales altamente especializados te guiará en
          un <span className="font-bold text-subTitleColor"> ambiente bilingüe </span> y
          <span className="font-bold text-subTitleColor"> enfocado en los exámenes IB y IGCSE.</span> Prepárate para el
          éxito con las primeras tutorías especializadas diseñadas
          exclusivamente para estos desafiantes programas educativos.
        </p>
      </div>
    </section>
  );
}

export default About