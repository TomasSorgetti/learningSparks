import React from "react";
import Mobile from "../../assets/mobile/bookmobile.png";
import Statue from "../../assets/mobile/Image.png"
import MobileSlider from "../Carousel/Mobile/MobileSlider";
import DeskSlider from "../Carousel/Desktop/DeskSlider";

import { MdDone } from "react-icons/md";
import { TbMath } from "react-icons/tb";
const Clases = () => {
    const subjects = [
      {
        id: 1,
        name: "INGLES A y B",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 2,
        name: "FRANCES",
        text: "IB/IGCSE",
        icon: <TbMath size="2em" />,
      },
      {
        id: 3,
        name: "ESPAÑOL",
        text: "IB/IGCSE",
        icon: <TbMath size="2em" />,
      },
      {
        id: 4,
        name: "HISTORIA",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 5,
        name: "TEORIA DEL CONOCIMIENTO",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 6,
        name: "ECONOMIA",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 7,
        name: "BUSINESS",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 8,
        name: "BIOLOGIA",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 9,
        name: "ENVIRONMENTAL SYSTEMS",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 10,
        name: "SPORTS",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 11,
        name: "FISICA",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 12,
        name: "QUIMICA",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 13,
        name: "MATEMATICA APLICACIONES E INTERPRETACIONES",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
      {
        id: 14,
        name: "MATEMATICA ANALISIS Y ENFOQUES",
        text: "IB",
        icon: <TbMath size="2em" />,
      },
    ];


  return (
    <section className="font-manrope mt-10 flex flex-col items-center">
      <div>
        <img src={Mobile} alt="clases mobile" />
      </div>
      <div className="relative">
        <h2 className="font-poppins absolute text-[24px] font-extrabold text-center text-titleColor z-20 top-[-50px] left-[-120px] w-60">
          Clases IB y IGCSE
        </h2>
        <div className="bg-lilaColor w-[216px] h-[50px] absolute top-[-64px] left-[-115px] z-0 rotate-[-6.6deg]"></div>
        <div className="bg-yellowColor w-[216px] h-[50px] absolute top-[-50px] left-[-105px] z-10 rotate-[-3.3deg]"></div>
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <h3 className="text-[18px] font-extrabold text-center text-titleColor">
          ¡Elige tu plan ideal!
        </h3>
        <p className="text-[12px] w-8/12 mb-10 m-auto font-normal text-center text-textColor leading-5">
          Clases individuales, grupales, y paquetes con descuento
        </p>
      </div>

      <article className="flex flex-col gap-8">
        <div className="w-11/12 m-auto py-8 px-6 border rounded-xl flex flex-col gap-6 items-center">
          <h4 className="font-poppins text-[18px] font-extrabold text-subTitleColor">
            Clases individuales
          </h4>
          <div>
            <div className="flex gap-2 items-center">
              <MdDone />
              <h5 className="text-[15px] font-bold text-subTitleColor">
                A tu ritmo
              </h5>
            </div>
            <p className="pl-6 text-[14px]">
              Diseña un plan de estudio personalizado y avanza según tus metas.
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <MdDone />
              <h5 className="text-[15px] font-bold text-subTitleColor">
                Atención individualizada
              </h5>
            </div>
            <p className="pl-6 text-[14px]">
              Recibe orientación y retroalimentación enfocada en tus
              necesidades.
            </p>
          </div>
          <div className="flex gap-1 items-center justify-center">
            <h4 className="text-[32px] font-extrabold text-subTitleColor">
              €60
            </h4>
            <p className="text-[20px] mb-[-5px] font-normal text-subTitleColor">
              /h
            </p>
          </div>
          <a
            href="#algunlado"
            className="bg-buttonColor font-poppins w-auto text-center text-white py-2 px-6 rounded-3xl text-[18px] font-semibold"
          >
            Consultar
          </a>
        </div>

        <div className="w-11/12 m-auto py-8 px-6 border rounded-xl flex flex-col gap-6 items-center bg-subTitleColor text-white">
          <div className="flex- flex-col items-center">
            <h4 className="font-poppins text-[18px] font-extrabold">
              Clases grupales
            </h4>
            <p className="text-red-500 text-[10px] text-center">
              (3 personas o más)
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <MdDone />
              <h5 className="text-[15px] font-bold">Aprendizaje interactivo</h5>
            </div>
            <p className="pl-6 text-[14px]">
              Participa en dinámicas y debates con otros estudiantes.
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <MdDone />
              <h5 className="text-[15px] font-bold">Descuento por amistad</h5>
            </div>
            <p className="pl-6 text-[14px]">
              ¡Trae a dos amigos y todos obtendrán un precio especial!
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-1 items-center justify-center">
              <h4 className="font-poppins text-[32px] font-extrabold">€40</h4>
              <p className="text-[20px] mb-[-5px] font-normal">/h</p>
            </div>
            <span>por estudiante</span>
          </div>
          <a
            href="#algunlado"
            className="bg-buttonColor font-poppins w-auto text-center text-white py-2 px-6 rounded-3xl text-[18px] font-semibold"
          >
            Consultar
          </a>
        </div>
        <div className="w-11/12 mx-auto h-[3px] my-3 bg-gray-100"></div>
      </article>
      <article className="w-11/12 mx-auto mt-8 bg-blueColor rounded-[24px]">
        <img src={Statue} alt="statue" />
      </article>
      <article className="w-11/12 mx-auto mt-8 bg-blueColor rounded-[24px]">
        <img src={Statue} alt="statue" />
      </article>
      <article className="mt-10 flex flex-col gap-6 items-center w-11/12 text-center">
        <h3 className="font-poppins text-[24px] font-extrabold text-subTitleColor">
          Elige tu materia
        </h3>
        <p className="text-[17px] font-normal text-textColor leading-7">
          Todas nuestras clases son impartidas tanto en Standard Level (Nivel
          Estándar) como en High Level (Nivel Superior).
        </p>
        <MobileSlider subjects={subjects} />
        <DeskSlider subjects={subjects} />
      </article>
    </section>
  );
};

export default Clases;
