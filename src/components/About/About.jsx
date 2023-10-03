import React from "react";
import about from "../../assets/desktop/about.png";
const About = ({ t }) => {
  return (
    <section
      id="nosotros"
      className="font-manrope mx-auto w-11/12 sm:w-9/12 lg:mt-20 lg:flex lg:gap-10 lg:w-10/12 lg:mb-10 xl:w-9/12 3xl:w-8/12"
    >
      <div className="w-11/12 mx-auto h-[3px] my-3 bg-gray-100 lg:hidden"></div>
      <img className="hidden lg:block" src={about} alt={t("AboutText1")} />
      <article>
        <span className="text-[14px] text-subTitleColor font-medium">
          {t("AboutSpan")}
        </span>
        <h3 className="font-poppins text-[26px] mb-5 font-extrabold text-left text-titleColor xl:text-[2.188rem]">
          {t("AboutTitle1")}{" "}
          <span className="aboutTitle">{t("AboutTitle2")}</span>
        </h3>
        <img className="w-full lg:hidden" src={about} alt={t("AboutText1")} />
        <div className="flex flex-col gap-2 mt-6 leading-7">
          <p className="text-[1rem] font-normal text-textColor xl:text-[1.063rem]">
            {t("AboutText1")}{" "}
            <span className="font-bold text-subTitleColor">
              {" "}
              {t("AboutSpan1")}
            </span>
          </p>
          <p className="text-[16px] font-normal text-textColor">
            {t("AboutText2")}{" "}
            <span className="font-bold text-subTitleColor">
              {" "}
              {t("AboutSpan2")}
            </span>{" "}
            {t("AboutText3")}
            <span className="font-bold text-subTitleColor">
              {" "}
              {t("AboutSpan3")}
            </span>{" "}
            {t("AboutText4")}
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
