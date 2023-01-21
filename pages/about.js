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
    easing: "easeInOut"
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Argentinians Who Design | About</title>
        <link rel="icon" href="/favicon.png" />
        <MetaTags />
      </Head>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <Title
        className="title m0 p0"
        text="Argentinians*who&nbsp;design&nbsp;is&nbsp;a"
        noAnimation
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="f1 extend">
          <motion.span variants={item}>platform that promotes </motion.span>{" "}
          <motion.span variants={item}>
            the work of Argentinian designers,
          </motion.span>{" "}
          <motion.span variants={item}>
            aiming to inspire new designers{" "}
          </motion.span>{" "}
          <motion.span variants={item}>to broaden their horizons, </motion.span>{" "}
          <motion.span variants={item}>experienced designers </motion.span>{" "}
          <motion.span variants={item}>to expand their networks, </motion.span>{" "}
          <motion.span variants={item}>
            and companies to diversify their teams.
          </motion.span>{" "}
        </p>
      </motion.div>

      <div className="moreabout">
        <div className="col-left">
          <h3>How can I nominate someone?</h3>
          <p>
            If you know a Argentinian designer whose work or voice is valuable
            to the design industry, please{" "}
            <Link href="/nominate">
              <a className="link">fill out this form</a>
            </Link>{" "}
            with their information and a few words about why you’re nominating
            them. You can choose to link to their portfolio, to their Linkedin,
            or to other social profiles — any link that you feel best represents
            how that person is making a difference in the industry. We decided
            not to collect or display the designer’s photo because we wanted the
            directory to be less about what someone looks like and more about
            what they do.
          </p>

          <h3>Why are we featuring artists as well?</h3>
          <p>
            We wanted to showcase not only contemporary Argentinian design but
            also leverage all the visibility this project is getting to
            celebrate the history of design in our country. Every time you
            reload the website, you can learn more about a newly featured
            Argentinian designer.
          </p>

          <h3>How did you come up with this idea?</h3>
          <p>
            We didn’t. Our fantastic sibling sites inspire this project:
            <ul>
              <li>
                <a
                  className="link"
                  href="https://brazilianswho.design/"
                  target="_blank"
                >
                  Brazilians Who Design
                </a>
              </li>

              <li>
                <a
                  className="link"
                  href="https://uruguayanswho.design/"
                  target="_blank"
                >
                  Uruguayans Who Design
                </a>
              </li>

              <li>
                <a
                  className="link"
                  href="https://dutchwho.design/"
                  target="_blank"
                >
                  Dutch Who Design
                </a>
              </li>

              <li>
                <a
                  className="link"
                  href="https://womenwho.design/"
                  target="_blank"
                >
                  Women Who Design
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.womenwhodraw.com/"
                  target="_blank"
                >
                  Women Who Draw
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="http://www.28blacks.com/"
                  target="_blank"
                >
                  28 Black Designers
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.latinxswhodesign.com/"
                  target="_blank"
                >
                  Latinx Who Design
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://queerdesign.club/"
                  target="_blank"
                >
                  Queer Design Club
                </a>
              </li>

              <li>
                <a
                  className="link"
                  href="https://spaniardswho.design/"
                  target="_blank"
                >
                  Spaniards Who Design
                </a>
              </li>

              <li>
                <a
                  className="link"
                  href="https://indianswhodesign.in/"
                  target="_blank"
                >
                  Indians Who Design
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.apiwho.design/"
                  target="_blank"
                >
                  Asian & Pacific Islanders Who Design
                </a>
              </li>
            </ul>
          </p>

          <h3>How did you build this?</h3>
          <p>
            Argentinians Who Design is{" "}
            <a
              className="link"
              target="_blank"
              href="https://github.com/andreuscafe/ArgentiniansWhoDesign"
            >
              open source
            </a>{" "}
            for you to create your own showcase. It is built inspired by the
            tech stack that Jules Forrest kindly made available on{" "}
            <a
              className="link"
              target="_blank"
              href="https://github.com/julesforrest/womenwhodesign"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="col-right">
          <h3>How can I remove my name?</h3>
          <p>
            If you have been added to the directory and would like to opt-out or
            make an edit to your profile, please send us a message at{" "}
            <a className="link" href="mailto:hello@argentinianswho.design">
              hello@argentinianswho.design
            </a>
          </p>

          <h3>Don´t be shy</h3>
          <p>
            If you’re part of the list and want to help us out, just share the
            link on your social media platforms and spread the world about our
            community and tell everyone how proud you’re to be Argentinian and a
            designer.
          </p>

          <h3>Who’s behind this?</h3>
          <p>
            Argentinians Who Design is brought to you by{" "}
            <a
              href="https://twitter.com/andreuscafe"
              target={"_blank"}
              className="link"
            >
              @andreuscafe
            </a>
            and{" "}
            <a
              href="https://twitter.com/facumontanaro_"
              target={"_blank"}
              className="link"
            >
              @facumontanaro_
            </a>
            . If you want to help us keep the project going, you can send a{" "}
            <a
              href="https://cafecito.app/argentiniansdesign"
              target={"_blank"}
              className="link"
            >
              Cafecito
            </a>{" "}
            donation to keep everything running (domain, mail, host, etc).
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
