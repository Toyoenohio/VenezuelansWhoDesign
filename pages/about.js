import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

const item = {
  hidden: { opacity: 0, y: "15%" },
  show: { opacity: 1, y: "0%" },
  transition: {
    easing: "easeInOut",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Dutch Who Design | About</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <Title
        className="title m0 p0"
        text="Dutch*who&nbsp;design&nbsp;is&nbsp;a"
        noAnimation
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="f1 extend">
          <motion.span variants={item}>place to showcase</motion.span>{" "}
          <motion.span variants={item}>the work of talented</motion.span>{" "}
          <motion.span variants={item}>Dutch designers to</motion.span>{" "}
          <motion.span variants={item}>the world. The goal</motion.span>{" "}
          <motion.span variants={item}>is to inspire new</motion.span>{" "}
          <motion.span variants={item}>designers to diversify</motion.span>{" "}
          <motion.span variants={item}>
            their references, experienced designers
          </motion.span>{" "}
          <motion.span variants={item}>
            to diversity their network, and companies to diversify their teams.
          </motion.span>
        </p>
      </motion.div>

      <div className="moreabout">
        <div className="col-left">
          <h3>How can I nominate someone?</h3>
          <p>
          If you know a Dutch designer whose work or voice is valuable to the design industry, please {" "}
            <Link href="/nominate">
              <a className="link">fill out this form</a>
            </Link>{" "}
            with their information and a few words about why you’re nominating
            them. You can link to their portfolio, Linkedin, or other social profiles — any link that you feel best represents how that person is making a difference in the industry. 
            We decided not to collect or display the designer’s photo because we wanted the directory to be less about what someone looks like and more about how they impact the industry.
          </p>

          <h3>Why are featuring artists as well?</h3>
          <p>
          We wanted to showcase not only contemporary Dutch design but also leverage all the visibility this project is getting to celebrate the history of design in our country. 
          Every time you reload the website, you can learn more about a newly featured Dutch designer.
          </p>

          <h3>How did you come up with this idea?</h3>
          <p>
          We didn’t. Our fantastic sibling sites inspire this project:

          <ul>
            <li>
              <a className="link" href="https://womenwho.design/">
                Women Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.womenwhodraw.com/">
                Women Who Draw
              </a>
            </li>
            <li>
              <a className="link" href="http://www.28blacks.com/">
                28 Black Designers
              </a>
            </li>
            <li>
              <a className="link" href="https://www.latinxswhodesign.com/">
                Latinx Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://queerdesign.club/">
                Queer Design Club
              </a>
            </li>

 
            <li>
              <a className="link" href="https://indianswhodesign.in/">
                Indians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.apiwho.design/">
                Asian & Pacific Islanders Who Design
              </a>
            </li>

          </ul>
          </p>
       

          <h3>How did you build this?</h3>
          <p>
            Dutch Who Design is{" "}
            <a
              className="link"
              target="_blank"
              href="https://github.com/DannyRuchtie/dutchwhodesign"
            >
              open source
            </a>{" "}
            for you to create your showcase. It is built inspired by the tech stack that Jules Forrest kindly made available on GitHub after building{" "}
            <a
              className="link"
              target="_blank"
              href="https://github.com/julesforrest/womenwhodesign"
            >
              Women Who Design.
            </a>
           </p>

           <p>   
            Sites built using our open-source platform:
       
          <ul>
            <li>
              <a className="link" href="https://uruguayanswho.design/">
                uruguayanswho.design
              </a>
            </li>
            <li>
              <a className="link" href="https://spaniardswho.design/">
                spaniardswho.design
              </a>
            </li>

            <li>
              <a className="link" href="https://brazilianswho.design/">
              Brazilians Who Design
              </a>
            </li>

          </ul>
          </p>
        



          <h3>Who’s behind this?</h3>
          <p> Dutch who design is an Initiative by <a className="link" href="http://twitter.com/DannyRuchtie">
                Danny Ruchtie </a> with exceptional help from <a className="link" href="https://twitter.com/zehf">
                Zeh Fernandes</a> and <a className="link" href="https://twitter.com/MingshiMr">Ming Shi</a> </p>
      
        </div>
        <div className="col-right">
          <h3>How can I remove my name?</h3>
          <p>
            If you’ve been added to the directory and would like to opt-out or
            make an edit to your profile, please send us a <a className="link" href="mailto:hello@dutchwho.design">message</a>
          </p>
          <h3>Why is my nomination not showing?</h3>
          <p>
          We update this website once a week to include new names. Some nominations might take longer to appear to ensure a healthy gender balance on this website.
          In the meantime, try nominating a designer who identifies as a woman or non-binary.
          </p>
        </div>

        <Analytics />
      </div>

      <style jsx>{`
        .extend {
          margin: 0;
          max-width: 17ch;
        }

        .moreabout {
          font-weight: normal;
          display: flex;
          margin-top: 8rem;
        }

        .moreabout > div {
          width: 50%;
          max-width: 50ch;
        }

        .col-right {
          padding-left: 3rem;
        }
        .col-left {
          padding-right: 3rem;
        }


        }


        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          margin-top: 0.3rem;
        }

ul{
  margin: 0.3rem 0 4rem 0;
}

        @media (max-width: 480px) {
          .moreabout {
            display: block;
          }

          .moreabout > div {
            width: 100%;
            max-width: 100%;
            display: block;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
