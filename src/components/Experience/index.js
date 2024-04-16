import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import Details from "../Details";




const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Software Developer"
              company="Trafalgar Travel Ltd"
              // companyLink="https://google.com"
              time="2022-2023"
              address="Kingston | Jamaica."
              work="..."
            />

            <Details
              position="Intern Quality Assurance Analyst"
              company="Digicel Group"
              companyLink="https://www.digicelgroup.com/en"
              time="February 2022 - August 2022"
              address="14 Ocean Blvd, Kingston | Jamaica."
              work="..."
            />

            <Details
              position="Intern Software Developer"
              company="Cenedex Software Solutions"
              // companyLink="https://amazon.com"
              time="2020-2021"
              address="Los Angeles, CA."
              work="..."
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
