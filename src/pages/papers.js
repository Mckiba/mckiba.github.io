import { motion } from "framer-motion";
import Head from "next/head";

import proj1 from "../../public/images/projects/memorise.png";
import proj2 from "../../public/images/articles/kiba.png";
import proj3 from "../../public/images/articles/kiba2.png";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import FeaturedArticle from "@/components/FeaturedArticle";
import Article from "@/components/Article";



export default function Articles() {
  return (
    <>
      <Head>
        <title>McKiba| Papers</title>
        <meta name="description" content="Browse papers" />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Design Projects"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={proj2}
              title="KID INTERACTIVE BUDDY APPLICATION (KIBA)"
              time="INFO 508: INFORMATION INOVATION THROUGH DESIGN THINKING Dec 2023"
              summary="This project focused on how might we address the significant issues related to
               language barriers and limited understanding of the situation for 3 to 8-year-old patients growing up in intercultural and English-as-second-language households when in Emergency Care settings. This project gave us the opportunity to go through the entire design process from empathizing to prototyping and testing. "
              link="https://drive.google.com/file/d/14c7GcqfxmBqzcOoEEScQKlY3QdMEjUYr/view?usp=drive_link"
            />

            <FeaturedArticle
              img={proj2}
              title="KID INTERACTIVE BUDDY APPLICATION (KIBA)"
              time="INFO 508: INFORMATION INOVATION THROUGH DESIGN THINKING Dec 2023"
              summary="This project focused on how might we address the significant issues related to
               language barriers and limited understanding of the situation for 3 to 8-year-old patients growing up in intercultural and English-as-second-language households when in Emergency Care settings. This project gave us the opportunity to go through the entire design process from empathizing to prototyping and testing. "
              link="https://drive.google.com/file/d/14c7GcqfxmBqzcOoEEScQKlY3QdMEjUYr/view?usp=drive_link"
            />
          </ul>

          {/* <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Projects
          </h2> */}

          {/* <ul className="flex flex-col items-center relative">
            <Article
              title=" "
              img={proj1}
              date=""
              link=""
            />
          </ul> */}
        </Layout>
      </main>
    </>
  );
}
