import { motion } from "framer-motion";
import Head from "next/head";


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
            text="In progress..."
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid g">
            {/* <FeaturedArticle
              img={blog1}
              title=""
              time=""
              summary=""
              link=""
            /> */}

          </ul>

          {/* <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Articles
          </h2> */}

          <ul className="flex flex-col items-center relative">
            {/* <Article
              title=" "
              img={blog3}
              date=""
              link=""
            /> */}
          </ul>
        </Layout>
      </main>
    </>
  );
}
