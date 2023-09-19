import React,{useState} from 'react'
import Logo from "../../assets/Logo/Large.png"
const Navigation = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      label: "Clases",
      route:"#clases",
    },
    {
      id: 2,
      label: "Nosotros",
      route:"#nosotros",
    },
    {
      id: 3,
      label: "Contactanos",
      route:"#contactanos",
    },
    {
      id: 4,
      label: "Blog",
      route:"blog",
    },
  ]
  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <nav
      id="navbar"
      className={`flex items-center justify-between flex-wrap px-8 lg:flex-row lg:px-10 shadow-md mb-14 `}
    >
      <a href="#navbar">
        <img
          className="w-[120px] lg:w-[180px] pt-2 pb-4"
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
        <ul className={`flex flex-col gap-10 justify-center lg:flex lg:flex-row lg:gap-4 items-center ${nav?"h-screen":""}`}>
          {links?.map(({ id, label, route }) => (
            <li
              onClick={handleClick}
              key={id}>
              <a href={route}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation