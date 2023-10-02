import React from 'react'
import header from "../../assets/desktop/header.png"
const Header = ({t}) => {
  const whatsapp = "5491139478794";
  return (
    <section
      id="header"
      className="mt-20 lg:mt-32 flex flex-col gap-8 items-center m-auto w-11/12 lg:w-full relative lg:h-[300px] lg:items-start lg:pl-10 lg:gap-5 lg:mb-30 xl:mb-80 xl:pl-16 2xl:pl-40 2xl:pt-11 2xl:mb-96"
    >
      <h1 className="font-poppins text-[26px] font-extrabold text-center text-titleColor sm:w-10/12 lg:text-left lg:w-[360px] xl:text-[2.625rem] xl:w-[500px]">
        {t("HeaderTitle1")} <span className="title">{t("HeaderTitle2")}</span>
        {t("HeaderTitle3")}
      </h1>
      <p className="font-manrope text-center text-[16px] text-textColor leading-7 sm:w-10/12 lg:text-left lg:w-[500px] xl:text-[1.1rem]">
        {t("HeaderText")}
      </p>
      <a
        href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
        target="blank"
        className="bg-buttonColor hover:bg-[#FE1E45] focus:bg-[#C61130] font-poppins  w-auto text-center text-white py-2 px-6 rounded-3xl text-[18px] font-semibold"
      >
        {t("HeaderButton")}
      </a>
      <img
        className="hidden lg:block absolute right-0 top-[-56px] z-[-1] 2xl:h-[560px] 2xl:object-contain "
        src={header}
        alt="header background"
      />
    </section>
  );
}

export default Header