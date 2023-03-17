import "../styles/globals.css";
import "../styles/components.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{
          opacity: 0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        animate={{
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        exit={{
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
        }}
        transition={{
          duration: 0.85,
        }}
        className={inter.className}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
