import React, { useEffect, useState } from "react";
import Mobile from "../../assets/mobile/bookmobile.png";
import book from "../../assets/desktop/book.png";
import fondo from "../../assets/desktop/fondo.png";
import Statue from "../../assets/mobile/Image.png";
import StatueDesk from "../../assets/desktop/statueDesk.png";
import article2Mobile from "../../assets/mobile/card2.png";
import article2 from "../../assets/desktop/repaso.png";
import linesCard from "../../assets/desktop/linesCard.png";
import MobileSlider from "../Carousel/Mobile/MobileSlider";
import DeskSlider from "../Carousel/Desktop/DeskSlider";
import axios from "axios";
import { MdDone } from "react-icons/md";

const Clases = () => {
  const whatsapp = "5491139478794";
  const [userData, setUserData] = useState({});
  console.log(userData);
  useEffect(() => {
    const data = async () => {
      await axios.get("https://ipapi.co/json/").then((res) => {
        if (!res) {
          console.log("error fetching ip api");
        } else {
          setUserData(res.data);
        }
      });
    };
    data();
  }, []);
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
      <div className="relative xl:mb-10">
        <h2 className="font-poppins absolute text-[24px] font-extrabold text-center text-titleColor z-20 top-[-50px] left-[-120px] w-60 xl:text-[3rem] xl:w-[500px] xl:left-[-230px]">
          Clases IB y IGCSE
        </h2>
        <div className="bg-lilaColor w-[216px] h-[50px] absolute top-[-64px] left-[-115px] z-0 rotate-[-6.6deg] xl:w-[443px] xl:h-[70px] xl:left-[-240px] xl:top-[-80px]"></div>
        <div className="bg-yellowColor w-[216px] h-[50px] absolute top-[-50px] left-[-105px] z-10 rotate-[-3.3deg] xl:w-[443px] xl:h-[82px] xl:left-[-200px] xl:top-[-60px]"></div>
      </div>
      <div className="hidden lg:flex lg:m-auto lg:justify-center lg:mt-10">
        <img
          className="w-7/12 xl:w-[600px]"
          src={book}
          alt="clases desktop book"
        />
      </div>
      <div className="mt-10 flex flex-col gap-6 xl:mb-10">
        <h3 className="text-[18px] font-extrabold text-center text-titleColor xl:text-[1.758rem]">
          ¡Elige tu plan ideal!
        </h3>
        <p className="text-[12px] w-8/12 mb-10 m-auto font-normal text-center text-textColor leading-5 xl:text-[1.25rem] xl:leading-8">
          Clases individuales, grupales, y paquetes con descuento
        </p>
      </div>

      <article className="relative w-full flex justify-center">
        <img
          className="hidden lg:block absolute right-0 top-[-40px] object-cover w-[1400px]"
          src={fondo}
          alt="background"
        />
        <div className="z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:w-9/12 lg:h-[450px] xl:h-[480px] 2xl:w-7/12 3xl:w-6/12">
          <div className="w-11/12 bg-white m-auto py-8 px-6 border rounded-xl flex flex-col gap-6 items-center justify-between sm:h-[500px] sm:p-10 lg:m-0 lg:h-full 2xl:py-10">
            <h4 className="font-poppins text-[18px] font-extrabold text-subTitleColor xl:text-[1.5rem]">
              Clases individuales
            </h4>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold text-subTitleColor xl:text-[1.063rem]">
                  A tu ritmo
                </h5>
              </div>
              <p className="pl-6 text-[14px] xl:text-[0.875rem]">
                Diseña un plan de estudio personalizado y avanza según tus
                metas.
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold text-subTitleColor xl:text-[1.063rem]">
                  Atención individualizada
                </h5>
              </div>
              <p className="pl-6 text-[14px] xl:text-[0.875rem]">
                Recibe orientación y retroalimentación enfocada en tus
                necesidades.
              </p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              {userData.country_name !== "Argentina" ? (
                <h4 className="text-[32px] font-extrabold text-subTitleColor xl:text-[3rem]">
                  $USD 45
                </h4>
              ) : (
                <h4 className="font-poppins text-[32px] font-extrabold text-subTitleColor xl:text-[3rem]">
                  $15000
                </h4>
              )}
              <p className="text-[20px] mb-[-5px] font-normal text-subTitleColor">
                /h
              </p>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
              target="blank"
              className="bg-buttonColor hover:bg-[#FE1E45] focus:bg-[#C61130] font-poppins w-auto text-center text-white py-2 px-6 rounded-3xl text-[18px] font-semibold"
            >
              Consultar
            </a>
          </div>

          <div className="w-11/12 m-auto py-8 px-6 border rounded-xl flex flex-col gap-6 items-center justify-between bg-subTitleColor text-white sm:h-[500px] sm:p-10 lg:h-full 2xl:py-10">
            <div className="relative flex- flex-col items-center">
              <h4 className="font-poppins text-[18px] font-extrabold xl:text-[1.5rem]">
                Clases grupales
              </h4>
              <p className="text-red-500 text-[10px] absolute left-8 xl:text-[0.75rem]">
                (3 personas o más)
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold xl:text-[1.063rem]">
                  Aprendizaje interactivo
                </h5>
              </div>
              <p className="pl-6 text-[14px] xl:text-[0.875rem]">
                Participa en dinámicas y debates con otros estudiantes.
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold xl:text-[1.063rem]">
                  Descuento por amistad
                </h5>
              </div>
              <p className="pl-6 text-[14px] xl:text-[0.875rem]">
                ¡Trae a dos amigos y todos obtendrán un precio especial!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1 items-center justify-center">
                {userData.country_name !== "Argentina" ? (
                  <h4 className="font-poppins text-[32px] font-extrabold xl:text-[3rem]">
                    $USD 30
                  </h4>
                ) : (
                  <h4 className="font-poppins text-[32px] font-extrabold xl:text-[3rem]">
                    $ 12000
                  </h4>
                )}
                <p className="text-[20px] mb-[-5px] font-normal">/h</p>
              </div>
              <span className="m-[-10px] xl:text-[1rem]">por estudiante</span>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
              target="blank"
              className="bg-buttonColor hover:bg-[#FE1E45] focus:bg-[#C61130] font-poppins w-auto text-center text-white py-2 px-6 rounded-3xl text-[18px] font-semibold"
            >
              Consultar
            </a>
          </div>
          <div className="w-11/12 mx-auto h-[3px] my-3 bg-gray-100 lg:hidden"></div>
        </div>
      </article>
      <article className="relative w-11/12 mx-auto mt-8 bg-blueColor lg:bg-transparent rounded-[26px] sm:rounded-[38px] sm:w-9/12 md:w-[62%] lg:w-9/12 lg:mt-10 2xl:w-7/12 3xl:w-6/12">
        <img
          className="w-full sm:object-cover lg:hidden"
          src={Statue}
          alt="statue"
        />
        <img className="hidden lg:block w-full" src={StatueDesk} alt="statue" />
        <div className="absolute text-start lg:flex lg:flex-col top-5 pl-6 text-white sm:top-14 sm:pl-16 lg:bottom-10 lg:left-[-20px] lg:top-auto xl:bottom-16">
          <h3 className="text-[2.2rem] sm:text-[2.8rem] w-11/12 font-poppins font-extrabold xl:text-[3.5rem] lg:w-8/12">
            Get <span className="text-buttonColor">10</span> lessons, pay for{" "}
            <span className="text-yellowColor">8</span>
          </h3>
          <p className="text-[20px] font-medium xl:text-[1.75rem]">
            abonando por anticipado
          </p>
        </div>
      </article>
      <article className="relative w-11/12 mx-auto mt-8 bg-blueColor lg:bg-transparent rounded-[26px]  sm:rounded-[38px] sm:w-9/12 md:w-[62%] lg:rounded-none lg:h-auto lg:w-9/12 lg:mt-0  2xl:w-7/12 3xl:w-6/12 xl:rounded-[30px]">
        <img
          className="w-full sm:object-cover lg:hidden"
          src={article2Mobile}
          alt="statue"
        />
        <img
          className="hidden lg:block w-full"
          src={article2}
          alt="curso de repaso intensivos"
        />
        <div className="text-white absolute top-5 text-center flex flex-col sm:top-14 lg:top-36 lg:right-4 lg:text-start xl:top-52 xl:right-16 2xl:top-44 4xl:top-56 4xl:right-20">
          <h3
            className="font-poppins text-[2rem] font-extrabold sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.5rem]
          "
          >
            EE & IA Coaching
          </h3>
          <img
            className="hidden lg:block w-[210px]"
            src={linesCard}
            alt="lines decoration"
          />
          <p className="text-[1rem] font-medium w-10/12 m-auto leading-6 sm:w-7/12 md:text-[1.1rem] md:leading-8 lg:w-[360px] lg:text-start lg:text-[1.15rem]">
            Submit your projects, gain insights from expert feedback, and excel
            in your assessments.
          </p>
        </div>
        <div className="absolute bottom-5 w-full flex justify-center md:bottom-8 lg:bottom-[66%] lg:justify-end">
          <span className="text-[2rem] text-white font-extrabold font-manrope bg-titleColor w-32 text-center px-1 py-2 rounded">
            80 USD
          </span>
        </div>
      </article>
      <article className="mt-10 flex flex-col gap-6 items-center w-full text-center 3xl:mt-32">
        <h3 className="font-poppins text-[1.5rem] font-extrabold text-subTitleColor xl:text-[2.188rem]">
          Elige tu materia
        </h3>
        <p className="w-11/12 text-[1.063rem] font-normal text-textColor leading-7 lg:w-8/12">
          Todas nuestras clases son impartidas tanto en Standard Level (Nivel
          Estándar) como en High Level (Nivel Superior), Ofrecemos clases para
          IB y IGCSE y coaching para tus Extended Essays e Internal Assessments.
        </p>
        <MobileSlider />
        <DeskSlider />
      </article>
    </section>
  );
};

export default Clases;
