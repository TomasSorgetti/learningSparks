import React, { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import subjects from "../slider";
const DeskSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 4 + subjects.length) % subjects.length
    );
  };
  const handleNext = () => {
    if (activeIndex === 12) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prevIndex) => prevIndex + 4);
    }
  };
  const getVisibleProjects = () => {
    const startIndex = activeIndex % subjects.length;
    const visibleProjects = [];
    for (let i = 0; i < 4; i++) {
      const projectIndex = (startIndex + i) % subjects.length;
      visibleProjects.push(subjects[projectIndex]);
    }
    return visibleProjects;
  };
  const visibleProjects = getVisibleProjects();
  return (
    <section className="font-manrope hidden lg:block">
      <article className="lg:flex gap-10 justify-center my-20 h-[240px]">
        <button onClick={handlePrev}>
          <GrPrevious size="2rem" />
        </button>
        <div className="gap-10 flex">
          {visibleProjects?.map((subj) => (
            <a
              href={`https://api.whatsapp.com/send?phone=${subj.whatsapp}`}
              target="blank"
              key={subj.id}
              className="flex flex-col gap-2 items-center justify-between"
            >
              <div className="bg-yellowColor w-[120px] h-[120px] rounded-[50%] flex items-center justify-center">
                <img src={subj.icon} alt="icon" />
              </div>
              <h6 className="uppercase font-poppins text-[1.3rem] font-extrabold text-titleColor w-40 text-center">
                {subj.name}
              </h6>
              <p className="text-[17px] font-normal text-subTitleColor">
                {subj.text}
              </p>
            </a>
          ))}
        </div>
        <button onClick={handleNext}>
          <GrNext size="2rem" />
        </button>
      </article>
      <article className="flex gap-2 w-full justify-center">
        <div
          className={`h-[9px] w-[49px] rounded-[5px] border-solid border-[1px] border-greenColor ${
            activeIndex === 0 ? "activePanel" : ""
          }`}
        ></div>
        <div
          className={`h-[9px] w-[49px] rounded-[5px] border-solid border-[1px] border-greenColor ${
            activeIndex === 4 ? "activePanel" : ""
          }`}
        ></div>
        <div
          className={`h-[9px] w-[49px] rounded-[5px] border-solid border-[1px] border-greenColor ${
            activeIndex === 8 ? "activePanel" : ""
          }`}
        ></div>
        <div
          className={`h-[9px] w-[49px] rounded-[5px] border-solid border-[1px] border-greenColor ${
            activeIndex === 12 ? "activePanel" : ""
          }`}
        ></div>
      </article>
    </section>
  );
};

export default DeskSlider;
