import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav.js";
import Filter from "../components/Filter.js";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";
import FilterSVG from "../components/Icons/FilterSVG.js";
import { google } from "googleapis";
import Image from "next/image.js";

const getDesigners = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join(
        "\n"
      )
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets"
    ]
  });

  const sheets = google.sheets({
    auth,
    version: "v4"
  });

  // Replace the spreadsheetId with your spreadsheet ID.
  // Replace the range with the tab name.
  // Issues with permissions look at this guide: https://leerob.io/snippets/google-sheets
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: "1A4X_3PoAeM836ikeBvqc7QPmt-M8IzjfFNuBz5g-42s",
    range: "Designers" // sheet name
  });

  //TODO: Map the collum to object name automatically.
  const rows = response.data.values;
  const db = rows.map((row) => ({
    name: row[0],
    location: row[1],
    expertise: row[2],
    link: row[3],
    approved: row[4],
    featured: row[5]
  }));

  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.approved == "Yes"
  );

  return JSON.stringify(sanitizeResult);
};

export async function getStaticProps() {
  const origin =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000/"
      : //TODO: Replace to the final domain
        "https://argentinians-who-design.vercel.app/";

  console.log(origin);

  const res = await getDesigners();
  const designers = await JSON.parse(res);

  let uniqueExpertise = new Set();
  designers.map((d) => uniqueExpertise.add(d.expertise));

  let uniqueLocation = new Set();
  designers.map((d) => uniqueLocation.add(d.location));

  let expertises = Array.from(uniqueExpertise).map((e) => {
    return { label: e, active: false, category: "expertise" };
  });

  let locations = Array.from(uniqueLocation)
    .sort()
    .map((e) => {
      return { label: e, active: false, category: "location" };
    });

  let filters = expertises.concat(locations);

  return {
    props: {
      designers,
      filters
    },

    revalidate: 500 // 5 days in seconds
  };
}

export default function Home({ designers, filters }) {
  const [isReady, setIsReady] = useState(false);
  const [designersList, setDesignersList] = useState(null);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [filterList, setFilterList] = useState(filters);
  const [filterCategory, setFilterCategory] = useState(null);

  useEffect(() => {
    setDesignersList(shuffle(designers).sort((a, b) => a.order - b.order));
  }, []);

  // Filter
  const handleCloseFilter = (e) => {
    setFilterIsOpen(false);

    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleOpenFilter = (category) => {
    setFilterCategory(category);
    setFilterIsOpen(true);
  };

  const clearFilter = () => {
    let newFilter = filters.map(({ label }) => {
      return { label: label, active: false };
    });

    setFilterList(newFilter);
    setDesignersList(
      shuffle(designers).sort((a, b) => a.featured - b.featured)
    );
  };

  const handleFilterClick = (item) => {
    let indexof = filterList.indexOf(item);
    filterList[indexof].active = filterList[indexof].active ? false : true;
    setFilterList(filterList);

    // Get Each column
    let filterExpert = filterList
      .filter((f) => f.category == "expertise")
      .map((d) => d.label);
    let filterLocation = filterList
      .filter((f) => f.category == "location")
      .map((d) => d.label);

    // Find active
    let activeFilters = filterList
      .filter((d) => d.active == true)
      .map((d) => d.label);

    // If none in that category check all
    if (filterExpert.filter((f) => activeFilters.includes(f)).length <= 0)
      activeFilters = activeFilters.concat(filterExpert);
    if (filterLocation.filter((f) => activeFilters.includes(f)).length <= 0)
      activeFilters = activeFilters.concat(filterLocation);

    // Filter render list
    if (activeFilters.length > 0)
      setDesignersList(
        designers.filter(
          (d) =>
            activeFilters.includes(d.expertise) &&
            activeFilters.includes(d.location)
        )
      );
    else clearFilter();
  };

  return (
    <div
      className="container"
      style={{
        overflow: isReady ? "hidden" : "visible"
      }}
    >
      <Head>
        <title>Argentinians Who Design</title>
        <link id="favicon" rel="alternate icon" href="/favicon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff5c00" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <MetaTags />
      </Head>

      <div className="sol">
        <div className="normal">
          <Image src="/img/sol.svg" alt="Argentina" width={96} height={96} />
        </div>
        <div className="wink">
          <Image
            src="/img/sol_guino.svg"
            alt="Argentina"
            width={96}
            height={96}
          />
        </div>
      </div>

      {!isReady ? (
        <Content
          designers={designersList}
          handleOpenFilter={handleOpenFilter}
          onClick={filterIsOpen ? handleCloseFilter : undefined}
          className={filterIsOpen ? "filterIsOpen" : ""}
        />
      ) : null}

      <AnimatePresence>
        {filterIsOpen ? (
          <Filter
            items={filterList.filter((f) => f.category == filterCategory)}
            filterList={filterList}
            handleFilterClick={handleFilterClick}
            handleCloseFilter={handleCloseFilter}
            categoryName={filterCategory}
          />
        ) : null}
      </AnimatePresence>

      <style global jsx>{`
        html,
        body {
          overflow: ${filterIsOpen ? "hidden" : "auto"};
        }
      `}</style>
    </div>
  );
}

function Content({ designers, handleOpenFilter, className, onClick }) {
  const tableHeaderRef = useRef();

  useEffect(() => {
    const header = tableHeaderRef.current;
    const sticky = header.getBoundingClientRect().top + 40;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div className={className} onClick={onClick}>
      <Nav />

      <Title className="title m0 p0" text="Argentinians*who&nbsp;design" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <table className="large tableContent" cellSpacing="0">
          <thead id="tableHeader" ref={tableHeaderRef}>
            <tr>
              <td>Name</td>
              <td
                className="thsize-aux dn filterTable"
                onClick={(e) => {
                  handleOpenFilter("location");

                  e.preventDefault();
                }}
              >
                Location <FilterSVG />
              </td>
              <td
                className="thsize-aux filterTable"
                onClick={(e) => {
                  handleOpenFilter("expertise");

                  e.preventDefault();
                }}
              >
                Expertise <FilterSVG />
              </td>
              <td className="thsize-link"></td>
            </tr>
          </thead>
          {designers != null ? (
            <tbody>
              {designers.map((d, i) => (
                <tr key={`${d.name}-${i}`}>
                  <td>
                    <a target="_blank" href={d.link}>
                      {d.name}
                    </a>
                  </td>
                  <td className="thsize-aux dn">
                    <a target="_blank" href={d.link}>
                      {d.location}
                    </a>
                  </td>
                  <td className="thsize-aux">
                    <a target="_blank" href={d.link}>
                      {d.expertise}
                    </a>
                  </td>
                  <td className="thsize-link">
                    <a target="_blank" href={d.link}>
                      →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </motion.div>
      <style jsx>{`
        .tableContent {
          padding-top: 18vh;
        }

        .filterTable {
          cursor: pointer;
        }

        thead {
          height: 2.2rem;
        }

        .thsize-aux {
          width: 20%;
        }

        .thsize-link {
          width: 2rem;
          text-align: right;
        }

        @media (max-width: 480px) {
          .thsize-aux {
            width: 30%;
          }
        }

        tbody a {
          width: 100%;
          padding-bottom: 0.6em;
          padding-top: 0.6em;
          color: inherit;
          display: inline-block;
          font-weight: 500;
        }

        tbody tr {
          transition: all 0.2s ease-in-out;
        }

        tbody tr:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        table tbody td {
          padding-top: 0;
          padding-bottom: 0;
        }
      `}</style>

      <Analytics />
    </div>
  );
}

function shuffle(array) {
  var m = array.length,
    temp,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    temp = array[m];
    array[m] = array[i];
    array[i] = temp;
  }

  return array;
}
