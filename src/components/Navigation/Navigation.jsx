import React, { useState } from "react";
import Logo from "../../assets/Logo/Large.png";
// import spain from "../../assets/Logo/spain.png"
// import english from "../../assets/Logo/english.png";
const Navigation = ({ t, i18n }) => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      label: t("Clases"),
      route: "#clases",
    },
    {
      id: 2,
      label: t("Nosotros"),
      route: "#nosotros",
    },
    {
      id: 3,
      label: t("Contactanos"),
      route: "#contactanos",
    },
  ];
  const handleClick = () => {
    setNav(!nav);
  };
  const changeLanguage = (e, prop) => {
    e.preventDefault();
    localStorage.setItem("lang", prop);
    i18n.changeLanguage(prop);
    setNav(false);
  };
  return (
    <nav
      className={`fixed top-0 bg-white w-full z-30 flex items-center justify-between flex-wrap px-8 lg:flex-row lg:px-10 shadow-md mb-14 `}
    >
      <a href="#header">
        <img
          className="w-[120px] lg:w-[180px] pt-4 pb-4"
          src={Logo}
          alt="learning sparks logo"
        />
      </a>
      <button
        onClick={handleClick}
        className={`relative lg:hidden flex flex-col  py-2 w-5 gap-1 ${
          nav ? "items-start" : "items-end"
        }`}
      >
        <div className={`h-[3px] bg-gray-600 w-[22px]`}></div>
        <div className={`h-[3px] bg-gray-600 w-[16px]`}></div>
        <div className={`h-[3px] bg-gray-600 w-[9px]`}></div>
      </button>

      <div
        className={`w-full  font-poppins text-subTitleColor font-medium text-[16px] flex flex-col gap-2 items-center lg:flex lg:flex-row lg:items-center lg:justify-end lg:w-auto lg:pr-10 ${
          !nav ? " hidden " : ""
        }`}
      >
        <ul
          className={`bg-white flex flex-col gap-10 justify-start pt-10 lg:flex lg:flex-row lg:pt-0 lg:gap-4 items-center lg:h-auto ${
            nav ? "h-screen" : ""
          }`}
        >
          {links?.map(({ id, label, route }) => (
            <li className="hover:font-bold" onClick={handleClick} key={id}>
              <a href={route}>{label}</a>
            </li>
          ))}
          <div className="flex gap-2 items-center">
            <button
              onClick={(e) => changeLanguage(e, "es")}
              className={i18n.language === "es" ? "font-extrabold" : ""}
            >
              ES
            </button>
            <div className="h-4 w-[1px] bg-gray-500"></div>
            <button
              onClick={(e) => changeLanguage(e, "en")}
              className={i18n.language === "en" ? "font-extrabold" : ""}
            >
              EN
            </button>
          </div>
          {/* <select onChange={(e) => changeLanguage(e)}>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select> */}
          {/* <div className='flex gap-2 items-center'>
            <span className='h-4 w-[1px] bg-gray-500'></span>
          </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
