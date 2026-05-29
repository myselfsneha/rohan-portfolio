import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed inset-0 bg-black flex items-center justify-center text-[#00ffcc] text-2xl"
    >
      ROHAN PANDE // SOUND SYSTEM
    </motion.div>
  );
}