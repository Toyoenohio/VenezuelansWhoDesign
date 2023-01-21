import "../assets/styles/modernism.css";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} key="page" />
      <Analytics key="analytics" />
    </AnimatePresence>
  );
}

export default App;
