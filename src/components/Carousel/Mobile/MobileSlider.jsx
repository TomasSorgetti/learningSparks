import React,{useState} from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const MobileSlider = ({ subjects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + subjects.length) % subjects.length
    );
  };
  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };
  const getVisibleProjects = () => {
    const startIndex = activeIndex % subjects.length;
    const visibleProjects = [];
    for (let i = 0; i < 2; i++) {
      const projectIndex = (startIndex + i) % subjects.length;
      visibleProjects.push(subjects[projectIndex]);
    }
    return visibleProjects;
  };
  const visibleProjects = getVisibleProjects();
  return (
    <section className="font-manrope flex gap-10 justify-center mb-6 lg:hidden">
      <button onClick={handlePrev}>
        <GrPrevious />
      </button>
      {visibleProjects?.map((subj) => (
        <div key={subj.id} className="flex flex-col gap-2 items-center">
          <div className="bg-yellowColor w-[80px] h-[80px] rounded-[50%] flex items-center justify-center">
            {subj.icon}
          </div>
          <h6 className="font-poppins text-[14px] font-extrabold text-titleColor">
            {subj.name}
          </h6>
          <p className="text-[12px] font-normal text-subTitleColor">
            {subj.text}
          </p>
        </div>
      ))}
      <button onClick={handleNext}>
        <GrNext />
      </button>
    </section>
  );
};

export default MobileSlider