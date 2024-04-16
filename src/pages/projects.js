 
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
 import proj1 from "../../public/images/projects/memorise.png";
import proj2 from "../../public/images/projects/guinep.png";
import proj3 from "../../public/images/projects/lights-out.png";
   import Project from "@/components/Project";
import FeaturedProject from "@/components/FeaturedProject";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
 
const FramerImage = motion(Image);



export default function Projects() {
  return (
    <>
      <Head>
        <title>McKiba | Projects </title>
        <meta
          name="description"
          content="Discover the latest projects built by McKiba."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            // text="From Concept to Code!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="iOS App"
                title="MemoriseApp"                
                summary="An app built as part of the Stanford University's CS193p Course (Spring 2020) - Intro to iOS Development"
                img={proj1}
                link="https://github.com/Mckiba/MemoriseApp"
                github="https://github.com/Mckiba/MemoriseApp"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="PWA"
                title="Guinep"
                summary="A travel application that allows users to search for flights, hotels, car rentals and live chat with travel agents"
                img={proj2}
                link=""
                github=""
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="iOS App"
                title="LightsOut"
                summary="Swift app utilizing the TMDB API"
                img={proj3}
                link="https://github.com/Mckiba/Lights-Out"
                github="https://github.com/Mckiba/Lights-Out"
              />
            </div>
            {/* <div className="col-span-12">
              <FeaturedProject
                type=""
                title=""
                summary=""
                img={proj4}
                link=""
                github=""
              />
            </div> */}
      
          </div>
        </Layout>
      </main>
    </>
  );
}
