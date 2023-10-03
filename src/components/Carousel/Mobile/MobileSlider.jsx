import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import subjects from "../slider";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
const MobileSlider = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  // const getVisibleProjects = () => {
  //   const startIndex = activeIndex % subjects.length;
  //   const visibleProjects = [];
  //   for (let i = 0; i < 2; i++) {
  //     const projectIndex = (startIndex + i) % subjects.length;
  //     visibleProjects.push(subjects[projectIndex]);
  //   }
  //   return visibleProjects;
  // };
  // const visibleProjects = getVisibleProjects();
  return (
    <motion.div
      ref={carousel}
      className="w-full overflow-hidden mt-6 lg:hidden pl-6"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="w-full h-[250px] flex gap-10 relative"
        drag="x"
        dragConstraints={{ right: 30, left: -width - 50 }}
        dragMomentum={true}
        // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        {subjects?.map((subj) => (
          <a
            href={`https://api.whatsapp.com/send?phone=${subj.whatsapp}`}
            target="blank"
            key={subj.id}
            className="flex flex-col justify-between gap-2 items-center h-[160px] w-[120px]"
          >
            <div className="bg-yellowColor w-[80px] h-[80px] rounded-[50%] flex items-center justify-center">
              <img src={subj.icon} alt="icon" />
            </div>
              <h6 className="uppercase font-poppins  text-[14px] font-extrabold text-titleColor">
                {subj.name}
              </h6>
              <p className="text-[12px] font-normal text-subTitleColor">
                {subj.text}
              </p>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileSlider;
