import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "../Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
      >
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {position}{" "}
            <a
              className="capitalize text-primary dark:text-primaryDark"
              href={companyLink}
              target={"_blank"}
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
            {time} | {address}
          </span>
          <p className="font-medium w-full md:text-sm"> {work}</p>
        </motion.div>
      </li>
    );
  };

  export default Details;