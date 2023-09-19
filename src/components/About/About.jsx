import React from "react";
import about from "../../assets/desktop/about.png";
const About = () => {
  return (
    <section
      id="nosotros"
      className="font-manrope mx-auto w-11/12 sm:w-9/12 lg:mt-20 lg:flex lg:gap-10 lg:w-10/12 lg:mb-10 xl:w-9/12 3xl:w-8/12">
      <div className="w-11/12 mx-auto h-[3px] my-3 bg-gray-100 lg:hidden"></div>
      <img className="hidden lg:block" src={about} alt="about us" />
      <article>
        <span className="text-[14px] text-subTitleColor font-medium">
          ¿QUIÉNES SOMOS?
        </span>
        <h3 className="font-poppins aboutTitle text-[26px] mb-5 font-extrabold text-left text-titleColor">
          Sobre Learning Spark
        </h3>
        <img className="w-full lg:hidden" src={about} alt="about us" />
        <div className="flex flex-col gap-2 mt-6 leading-7">
          <p className="text-[16px] font-normal text-textColor">
            Sabemos lo difícil y estresante que puede ser prepararse para los
            exámenes internacionales y por eso queremos darte la tranquilidad de
            que{" "}
            <span className="font-bold text-subTitleColor">
              {" "}
              podemos ayudarte a alcanzar tu máximo potencial.
            </span>
          </p>
          <p className="text-[16px] font-normal text-textColor">
            Nuestro equipo de profesionales altamente especializados te guiará
            en un{" "}
            <span className="font-bold text-subTitleColor">
              {" "}
              ambiente bilingüe{" "}
            </span>{" "}
            y
            <span className="font-bold text-subTitleColor">
              {" "}
              enfocado en los exámenes IB y IGCSE.
            </span>{" "}
            Prepárate para el éxito con las primeras tutorías especializadas
            diseñadas exclusivamente para estos desafiantes programas
            educativos.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
