// import React, { useEffect, useState } from "react";
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
// import axios from "axios";
import { MdDone } from "react-icons/md";
// import { URl_BASE } from "../../utils/url";

const Clases = ({ t, country }) => {
  const whatsapp = "5491139478794";
  // const [userData, setUserData] = useState({});
  // const postIp = async (ip) => {
  //   try {
  //     await axios.post(`${URl_BASE}/views/${ip}`);
  //   } catch (error) {
  //     console.log("error posting ip", error);
  //   }
  // };
  // useEffect(() => {
  //   const data = async () => {
  //     try {
  //       await axios.get("https://ipapi.co/json/").then((res) => {
  //         if (res) {
  //           setUserData(res.data);
  //           // postIp(res.data.ip);
  //         }
  //       });
  //     } catch (error) {
  //       console.log("error fetching ip api", error);
  //     }
  //   };
  //   data();
  // }, []);
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
        <img src={Mobile} alt={t("ClaseTitle")} />
      </div>
      <div className="relative xl:mb-10">
        <h2 className="font-poppins absolute text-[24px] font-extrabold text-center text-titleColor z-20 top-[-50px] left-[-120px] w-60 xl:text-[3rem] xl:w-[500px] xl:left-[-230px]">
          {t("ClaseTitle")}
        </h2>
        <div className="bg-lilaColor w-[216px] h-[50px] absolute top-[-64px] left-[-115px] z-0 rotate-[-6.6deg] xl:w-[443px] xl:h-[70px] xl:left-[-240px] xl:top-[-80px]"></div>
        <div className="bg-yellowColor w-[216px] h-[50px] absolute top-[-50px] left-[-105px] z-10 rotate-[-3.3deg] xl:w-[443px] xl:h-[82px] xl:left-[-200px] xl:top-[-60px]"></div>
      </div>
      <div className="hidden lg:flex lg:m-auto lg:justify-center lg:mt-10">
        <img className="w-7/12 xl:w-[600px]" src={book} alt={t("ClaseTitle")} />
      </div>
      <div className="mt-10 flex flex-col gap-6 xl:mb-10">
        <h3 className="text-[18px] font-extrabold text-center text-titleColor xl:text-[1.758rem]">
          {t("ClaseSubTitle")}
        </h3>
        <p className="text-[12px] w-8/12 mb-10 m-auto font-normal text-center text-textColor leading-5 xl:text-[1.25rem] xl:leading-8">
          {t("ClaseTitleText")}
        </p>
      </div>

      <article className="relative w-full flex justify-center">
        <div className="w-full overflow-hidden hidden lg:flex absolute right-0 top-[-60px] justify-end 3xl:top-[-30px]">
          <img
            className="object-cover 3xl:w-[96%]"
            src={fondo}
            alt="background"
          />
        </div>
        <div className="z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:w-9/12 lg:h-[450px] xl:h-[520px] 2xl:w-7/12 3xl:w-6/12">
          <div className="w-11/12 bg-white m-auto py-8 px-6 border rounded-xl flex flex-col gap-6 items-center justify-between sm:h-[500px] sm:p-10 lg:m-0 lg:h-full 2xl:py-10">
            <h4 className="font-poppins text-[18px] font-extrabold text-subTitleColor xl:text-[1.5rem]">
              {t("Card1Title")}
            </h4>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold text-subTitleColor xl:text-[1.063rem]">
                  {t("Card1Subtitle1")}
                </h5>
              </div>
              <p className="pl-6 text-[14px] xl:text-[0.875rem]">
                {t("Card1Text1")}
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold text-subTitleColor xl:text-[1.063rem]">
                  {t("Card1Subtitle2")}
                </h5>
              </div>
              <p className="pl-6 text-[14px] xl:text-[0.875rem]">
                {t("Card1Text2")}
              </p>
            </div>
            <div className="flex gap-1 items-center justify-center">
              {country !== "Argentina" ? (
                <h4 className="text-[32px] font-extrabold text-subTitleColor xl:text-[3rem]">
                  $USD 45
                </h4>
              ) : (
                <h4 className="font-poppins text-[32px] font-extrabold text-subTitleColor xl:text-[3rem]">
                  $AR 20000
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
              {t("CardsButton")}
            </a>
          </div>

          <div className="w-11/12 m-auto py-8 px-6 border rounded-xl flex flex-col gap-6 items-center justify-between bg-subTitleColor text-white sm:h-[500px] sm:p-10 lg:h-full 2xl:py-10">
            <div className="relative flex- flex-col items-center">
              <h4 className="font-poppins text-[18px] font-extrabold xl:text-[1.5rem]">
                {t("Card2Title")}
              </h4>
              <p className="text-red-500 text-[10px] absolute left-8 xl:text-[0.75rem]">
                {t("Card2TitleSpan")}
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold xl:text-[1.063rem]">
                  {t("Card2Subtitle1")}
                </h5>
              </div>
              <p className="pl-6 text-[14px] xl:text-[0.875rem]">
                {t("Card2Text1")}
              </p>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <MdDone />
                <h5 className="text-[15px] font-bold xl:text-[1.063rem]">
                  {t("Card2Subtitle2")}
                </h5>
              </div>
              <p className="pl-6 text-[14px] xl:text-[0.875rem]">
                {t("Card2Text2")}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-1 items-center justify-center">
                {country !== "Argentina" ? (
                  <h4 className="font-poppins text-[32px] font-extrabold xl:text-[3rem]">
                    $USD 30
                  </h4>
                ) : (
                  <h4 className="font-poppins text-[32px] font-extrabold xl:text-[3rem]">
                    $AR 16000
                  </h4>
                )}
                <p className="text-[20px] mb-[-5px] font-normal">/h</p>
              </div>
              <span className="m-[-10px] xl:text-[1rem]">{t("Card2Span")}</span>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
              target="blank"
              className="bg-buttonColor hover:bg-[#FE1E45] focus:bg-[#C61130] font-poppins w-auto text-center text-white py-2 px-6 rounded-3xl text-[18px] font-semibold"
            >
              {t("CardsButton")}
            </a>
          </div>
          <div className="w-11/12 mx-auto h-[3px] my-3 bg-gray-100 lg:hidden"></div>
        </div>
      </article>
      <article className="relative w-11/12 mx-auto mt-8 bg-blueColor lg:bg-transparent rounded-[26px] sm:rounded-[38px] sm:w-9/12 md:w-[62%] lg:w-9/12 lg:mt-10 2xl:w-7/12 3xl:w-6/12">
        <img
          className="w-full sm:object-cover lg:hidden"
          src={Statue}
          alt={`${t("statue2Title1")} ${t("statue2Title2")} ${t(
            "statue2Title3"
          )}`}
        />
        <img
          className="hidden lg:block w-full"
          src={StatueDesk}
          alt={`${t("statue2Title1")} ${t("statue2Title2")} ${t(
            "statue2Title3"
          )}`}
        />
        <div className="absolute text-start lg:flex lg:flex-col top-5 pl-6 text-white sm:top-14 sm:pl-16 lg:bottom-10 lg:left-[-20px] lg:top-auto xl:bottom-16">
          <h3 className="text-[2.2rem] sm:text-[2.5rem] w-11/12 font-poppins font-extrabold lg:w-8/12">
            {t("statue2Title1")}{" "}
            <span className="text-buttonColor">{t("statue2Title2")}</span>{" "}
            {t("statue2Title3")}{" "}
            <span className="text-yellowColor">{t("statue2Title4")}</span>
          </h3>
          <p className="text-[20px] font-medium xl:text-[1.75rem]">
            {t("statue2Text")}
          </p>
        </div>
      </article>
      <article className="relative w-11/12 mx-auto mt-8 bg-blueColor lg:bg-transparent rounded-[26px]  sm:rounded-[38px] sm:w-9/12 md:w-[62%] lg:rounded-none lg:h-auto lg:w-9/12 lg:mt-0  2xl:w-7/12 3xl:w-6/12 xl:rounded-[30px]">
        <img
          className="w-full sm:object-cover lg:hidden"
          src={article2Mobile}
          alt={t("statue3Text")}
        />
        <img
          className="hidden lg:block w-full"
          src={article2}
          alt={t("statue3Text")}
        />
        <div className="text-white absolute top-5 text-center flex flex-col sm:top-14 lg:top-40 lg:right-4 lg:text-start xl:top-56 xl:right-16 2xl:top-52 4xl:top-60 4xl:right-20">
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
            {t("statue3Text")}
          </p>
        </div>
        <div className="absolute bottom-5 w-full flex justify-center md:bottom-8 lg:bottom-[66%] lg:justify-end">
          {country !== "Argentina" ? (
            <span className="text-[2rem] text-white font-extrabold font-manrope bg-titleColor w-32 text-center px-1 py-2 rounded">
              80 USD
            </span>
          ) : (
            <span className="text-[2rem] text-white font-extrabold font-manrope bg-titleColor w-52 text-center px-1 py-2 rounded">
              $AR 40000
            </span>
          )}
        </div>
      </article>
      <article className="mt-10 flex flex-col gap-6 items-center w-full text-center 3xl:mt-32">
        <h3 className="font-poppins text-[1.5rem] font-extrabold text-subTitleColor xl:text-[2.188rem]">
          {t("MateriasTitle")}
        </h3>
        <p className="w-11/12 text-[1.063rem] font-normal text-textColor leading-7 lg:w-8/12 max-w-[70ch]">
          {t("MateriasText")}
        </p>
        <MobileSlider t={t} />
        <DeskSlider t={t} />
      </article>
    </section>
  );
};

export default Clases;
