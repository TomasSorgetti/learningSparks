import React from "react";
import Mobile from "../../assets/mobile/bookmobile.png";
import book from "../../assets/desktop/book.png";
import fondo from "../../assets/desktop/fondo.png";
import Statue from "../../assets/mobile/Image.png";
import StatueDesk from "../../assets/desktop/statueDesk.png";
import article2Mobile from "../../assets/mobile/card2.png";
import article2 from "../../assets/Multimedia/article2.jpg";
import MobileSlider from "../Carousel/Mobile/MobileSlider";
import DeskSlider from "../Carousel/Desktop/DeskSlider";

import { MdDone } from "react-icons/md";

const Clases = () => {
  return (
    <section
      id="clases"
      className="font-manrope mt-10 flex flex-col items-center lg:mt-40 lg:relative"
    >
      <div className="hidden lg:absolute lg:top-[-120px] lg:left-0 lg:flex lg:flex-col lg:gap-4 xl:top-[-140px]">
        <div className="h-[4px] w-14 bg-subTitleColor"></div>
        <div className="h-[4px] w-14 bg-subTitleColor"></div>
        <div className="h-[4px] w-14 bg-subTitleColor"></div>
        <div className="h-[4px] w-14 bg-subTitleColor"></div>
        <div className="h-[4px] w-14 bg-subTitleColor"></div>
        <div className="h-[4px] w-14 bg-subTitleColor"></div>
        <div className="h-[4px] w-14 bg-subTitleColor"></div>
        <div className="h-[4px] w-14 bg-subTitleColor"></div>
      </div>
      <div className="lg:hidden mb-[30px]">
        <img src={Mobile} alt="clases mobile" />
      </div>
      <div className="relative">
        <h2 className="font-poppins absolute text-[24px] font-extrabold text-center text-titleColor z-20 top-[-50px] left-[-120px] w-60">
          Clases IB y IGCSE
        </h2>
        <div className="bg-lilaColor w-[216px] h-[50px] absolute top-[-64px] left-[-115px] z-0 rotate-[-6.6deg]"></div>
        <div className="bg-yellowColor w-[216px] h-[50px] absolute top-[-50px] left-[-105px] z-10 rotate-[-3.3deg]"></div>
      </div>
      <div className="hidden lg:flex lg:m-auto lg:justify-center lg:mt-10">
        <img className="w-7/12" src={book} alt="clases desktop book" />
      </div>
      <div className="mt-10 flex flex-col gap-6">
        <h3 className="text-[18px] font-extrabold text-center text-titleColor">
          ¡Elige tu plan ideal!
        </h3>
        <p className="text-[12px] w-8/12 mb-10 m-auto font-normal text-center text-textColor leading-5">
          Clases individuales, grupales, y paquetes con descuento
        </p>
      </div>

      <article className="relative w-full flex justify-center">
        <img
          className="hidden lg:block absolute right-0 top-[-40px] object-cover w-[1400px]"
          src={fondo}
          alt="background"
        />
        <div className="z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:w-8/12 lg:h-[450px] 2xl:w-7/12 3xl:w-6/12">
          <div className="w-11/12 bg-white m-auto py-8 px-6 border rounded-xl flex flex-col gap-6 items-center justify-between sm:h-[500px] sm:p-10 lg:m-0 lg:h-full 2xl:py-10">
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
                Diseña un plan de estudio personalizado y avanza según tus
                metas.
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

          <div className="w-11/12 m-auto py-8 px-6 border rounded-xl flex flex-col gap-6 items-center justify-between bg-subTitleColor text-white sm:h-[500px] sm:p-10 lg:h-full 2xl:py-10">
            <div className="relative flex- flex-col items-center">
              <h4 className="font-poppins text-[18px] font-extrabold">
                Clases grupales
              </h4>
              <p className="text-red-500 text-[10px] absolute left-8">
                (3 personas o más)
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold">
                  Aprendizaje interactivo
                </h5>
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
          <div className="w-11/12 mx-auto h-[3px] my-3 bg-gray-100 lg:hidden"></div>
        </div>
      </article>
      <article className="w-11/12 mx-auto mt-8 bg-blueColor rounded-[30px] sm:w-9/12 md:w-[62%] lg:w-8/12 lg:overflow-hidden lg:rounded-[18px] lg:relative  2xl:w-7/12 2xl:h-[417px] 3xl:w-6/12 4xl:h-[465px] xl:rounded-[30px]">
        <img
          className="w-full sm:object-cover lg:hidden"
          src={Statue}
          alt="statue"
        />
        <img
          className="hidden lg:block lg:object-cover 2xl:h-[417px] 4xl:h-[465px]"
          src={StatueDesk}
          alt="statue"
        />
        <div className="hidden absolute lg:flex lg:flex-col lg:bottom-10 lg:left-10 text-white 2xl:bottom-16 2xl:left-14">
          <h3 className="text-[56px] font-extrabold">3x2</h3>
          <p className="text-[26px] font-medium">abonando por anticipado</p>
        </div>
      </article>
      <article className="w-11/12 mx-auto mt-8 bg-blueColor rounded-[30px] sm:w-9/12 md:w-[62%] lg:w-8/12  2xl:w-7/12 2xl:h-[417px] 3xl:w-6/12 4xl:h-[465px] xl:rounded-[30px]">
        <img
          className="w-full sm:object-cover lg:hidden"
          src={article2Mobile}
          alt="statue"
        />
        <img
          className="hidden lg:block w-full 4xl:h-[465px]"
          src={article2}
          alt="curso de repaso intensivos"
        />
      </article>
      <article className="mt-10 flex flex-col gap-6 items-center w-11/12 text-center 3xl:mt-32">
        <h3 className="font-poppins text-[24px] font-extrabold text-subTitleColor ">
          Elige tu materia
        </h3>
        <p className="text-[17px] font-normal text-textColor leading-7 lg:w-[500px]">
          Todas nuestras clases son impartidas tanto en Standard Level (Nivel
          Estándar) como en High Level (Nivel Superior).
        </p>
        <MobileSlider />
        <DeskSlider />
      </article>
    </section>
  );
};

export default Clases;
