import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
  "Your smile that lights up my day",
  "The way you make me laugh even on bad days",
  "Your kindness and compassion",
  "How you always support my dreams",
  "The warmth of your hugs",
  "Your intelligence and wisdom",
  "The adventures we have together",
  "Your beautiful soul",
  "How you make every moment special",
  "Simply because you are you ❤️"
];

const Reasons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReason = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-pink-100 to-rose-200">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-playfair text-3xl font-bold text-pink-800 mb-8">Reasons I Love You</h2>
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-pink-300 min-h-[200px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              className="font-poppins text-xl text-pink-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {reasons[currentIndex]}
            </motion.p>
          </AnimatePresence>
          <button
            onClick={nextReason}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-lg"
          >
            Show Next Reason ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reasons;