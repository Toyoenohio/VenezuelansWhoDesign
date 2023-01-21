import { motion } from "framer-motion";
import CheckSVG from "../components/Icons/CheckSVG.js";
import CloseSVG from "../components/Icons/CloseSVG.js";

const sidebarAnimation = {
  hidden: { x: "120%" },
  show: {
    x: "0%",
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export default function Filter({
  items,
  filterList,
  handleFilterClick,
  handleCloseFilter,
  categoryName
}) {
  return (
    <motion.div
      variants={sidebarAnimation}
      initial="hidden"
      animate="show"
      exit="hidden"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        maxWidth: "420px",
        overflowY: "scroll"
      }}
    >
      <div className="sidebar">
        <a
          aria-label="Close"
          href="#"
          className="close"
          onClick={handleCloseFilter}
        >
          <CloseSVG />
        </a>
        <h4>
          {categoryName.charAt(0).charAt(0).toUpperCase() +
            categoryName.slice(1)}
        </h4>

        {items.map((item, i) => (
          <FilterItem
            key={`${item.label}-${i}`}
            label={item.label}
            active={item.active}
            onClick={() => {
              handleFilterClick(item);
            }}
            noFilters={filterList.filter((f) => f.active).length == 0}
          />
        ))}
      </div>
      <style jsx>{`
        .sidebar {
          width: 100%;
          max-width: 420px;
          background: #fff;
          color: #000;
          padding: 2.5rem;
          min-height: 100vh;
        }

        .close {
          display: block;
          width: 1.5rem;
          height: 1.5rem;
        }

        h4 {
          margin: 4rem 0;
          font-weight: 500;
          font-size: 0.8em;
        }
      `}</style>
    </motion.div>
  );
}

function FilterItem({ label, active, onClick, noFilters }) {
  return (
    <div
      className={`filterItem ${noFilters ? "no-filters" : ""} ${
        active ? "active" : ""
      }`}
      onClick={onClick}
    >
      {label}
      <div className={`check ${active ? "checked" : ""}`}>
        <CheckSVG />
      </div>
      <style jsx>{`
        .filterItem {
          cursor: pointer;
          font-size: 1.36em;
          line-height: 1.5em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-items: center;
          color: #999;
          transition: color 0.2s ease;
        }

        .filterItem.no-filters {
          color: #000;
        }

        .filterItem.active {
          color: #000;
        }

        .check {
          width: 1.7rem;
          height: 1.7rem;
          /*background: #fff;
          border-radius: 6px; */
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
