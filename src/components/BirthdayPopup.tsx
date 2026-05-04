import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";

// Elegant Celebration Confetti (falling from top to bottom)
const ElegantConfetti = () => {
  const pieces = Array.from({ length: 50 });
  // Using the site's elegant color palette for the confetti
  const colors = ["#d4af37", "#b8952a", "#4a88b3", "#494433"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {pieces.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${i % 3 === 0 ? "w-2 h-6" : i % 2 === 0 ? "w-3 h-3 rounded-full" : "w-2 h-2"
            }`}
          style={{ backgroundColor: colors[i % colors.length] }}
          initial={{
            opacity: 0,
            y: -50,
            x: `${Math.random() * 100}%`,
            rotate: Math.random() * 360,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: ["0%", "100%"],
            x: `calc(${Math.random() * 100}% + ${Math.random() * 200 - 100}px)`,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Elegant floating balloons matching the theme
const ElegantBalloons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-40">
      <motion.div
        initial={{ y: "120%", opacity: 0 }}
        animate={{ y: "-20%", opacity: [0, 0.8, 0.8, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute left-[10%] bottom-0 flex flex-col items-center"
      >
        <div className="w-16 h-20 bg-gradient-to-tr from-[#4a88b3] to-[#8dbbe0] rounded-[50%] opacity-70 blur-[1px] shadow-lg" />
        <div className="w-[1px] h-32 bg-[#4a88b3]/50" />
      </motion.div>

      <motion.div
        initial={{ y: "120%", opacity: 0 }}
        animate={{ y: "-20%", opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 4 }}
        className="absolute right-[15%] bottom-0 flex flex-col items-center"
      >
        <div className="w-14 h-16 bg-gradient-to-tr from-[#d4af37] to-[#f9e596] rounded-[50%] opacity-70 blur-[1px] shadow-lg" />
        <div className="w-[1px] h-40 bg-[#d4af37]/50" />
      </motion.div>
    </div>
  );
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const BirthdayPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-hidden">
          {/* Subtle elegant backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-[#494433]/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Premium Clean Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-[#faf9f6] rounded-sm shadow-2xl flex flex-col md:flex-row border border-[#e5e2d9]"
          >
            {/* Celebration Animations inside the card */}
            <ElegantConfetti />
            <ElegantBalloons />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-[60] p-2 text-[#494433]/60 hover:bg-[#494433]/10 hover:text-[#494433] rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={24} strokeWidth={1.5} />
            </motion.button>

            {/* Left Image Section - Deep Background with Arched Frame */}
            <div className="w-full md:w-5/12 bg-[#494433] p-8 md:p-12 flex items-center justify-center relative overflow-hidden z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="relative w-full max-w-[280px] aspect-[3/4] rounded-t-full overflow-hidden shadow-2xl z-20"
              >
                {/* Continuous subtle breathing effect on the image */}
                <motion.img
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src="/sriphoto.png"
                  alt="Birthday Celebration"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right Content Section - Clean & Elegant Typography */}
            <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center items-center text-center bg-[#faf9f6] relative z-10">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center"
              >
                <motion.div
                  variants={fadeUpVariant}
                  className="text-[#4a88b3] text-sm uppercase tracking-[0.2em] font-medium mb-4"
                >
                  A Special Day
                </motion.div>

                <motion.h1
                  variants={fadeUpVariant}
                  className="text-4xl md:text-4xl font-serif text-[#494433] mb-2 leading-tight relative"
                >
                  Wishing You a <br />
                  <span className=" ">Happy Birthday</span>
                </motion.h1>

                <motion.h2
                  variants={fadeUpVariant}
                  className="text-3xl md:text-4xl font-serif font-bold text-[#4a88b3] tracking-wide mb-6 relative"
                >
                  Sri D.N.V. Prasad Sthapathy
                </motion.h2>

                {/* Animated separator line */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 48, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="h-[1px] bg-[#494433]/30 mx-auto mb-8"
                />

                <motion.p
                  variants={fadeUpVariant}
                  className="text-[#5b5540] text-lg font-serif leading-relaxed mb-10 max-w-md mx-auto"
                >
                  May this year bring you immense joy, profound wisdom, and
                  continuous success. We deeply value your presence and
                  contributions to our journey.
                </motion.p>

                <motion.button
                  variants={fadeUpVariant}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#494433",
                    color: "#faf9f6",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 border border-[#494433] text-[#494433] transition-colors duration-300 font-serif tracking-widest text-sm uppercase relative z-20 bg-[#faf9f6]/50 backdrop-blur-sm"
                >
                  Enter Site
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BirthdayPopup;
