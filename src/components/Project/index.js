import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "../Icons";


const FramerImage = motion(Image);


const Project = ({ title, type, img, link, github, summary }) => {

    return (
      <article
        className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
        border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
        xs:p-4
        "
      >
        <div
          className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
           dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
          xs:rounded-[1.5rem]  "
        />
  
        <Link
          href={link}
          target={"_blank"}
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            
            className="h-auto w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sizes="(max-width: 768px) 100vw, 
                (max-width: 1200px) 50vw,
                33vw"
          />
        </Link>
        <div className="mt-4 flex w-full flex-col items-start justify-between">
          <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
            {type}
          </span>
  
          <Link
            href={link}
            target={"_blank"}
            className="underline-offset-2 hover:underline"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
              {title}
            </h2>
          </Link>
          <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="flex w-full items-center  justify-between">
    
            <Link
              href={link}
              target={"_blank"}
              className="rounded text-lg
              font-medium underline md:text-base
              "
              aria-label={title}
            >
              Visit
            </Link>
            <Link
              href={github}
              target={"_blank"}
              className="w-8 md:w-6"
              aria-label={title}
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    );
  };
  
  export default Project;