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
      className="flex items-center justify-between flex-wrap px-8 lg:flex-row shadow-md mb-14"
    >
      <a href="#navbar">
        <img src={Logo} alt="learning sparks logo" />
      </a>
      <div className="block lg:hidden">
        <button
          onClick={handleClick}
          className="flex items-center px-3 py-2 border rounded"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-auto flex flex-col gap-2 items-center lg:flex lg:flex-row lg:items-center lg:justify-end lg:pr-36 lg:w-auto${
          !nav ? " hidden" : ""
        }`}
      >
        <ul className="flex flex-col justify-center gap-2 lg:flex lg:flex-row lg:gap-4 items-center">
          {links?.map(({ id, label, route }) => (
            <li key={id}>
              <a href={route}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation