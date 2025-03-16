// Home.tsx
import { Hero } from "@/components/layout/Hero";
import { motion } from "framer-motion";
import Login from "./login/Login";

// import TailwindApiSection from "@/components/TailwindApiSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Hero>
        <Login />
      </Hero>
    </motion.div>
  );
}
