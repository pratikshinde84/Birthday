import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const fullText = 'Happy Birthday Chitra ❤️';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-300 to-pink-500 relative overflow-hidden">
      <div className="text-center relative z-10">
        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {displayText}
        </h1>
        <p className="font-poppins text-lg md:text-xl text-white/90 drop-shadow-md">Wishing you the happiest day ever!</p>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="absolute bottom-8 left-8 bg-pink-600 hover:bg-pink-700 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110 z-20"
      >
        ❤️
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <h3 className="text-2xl font-bold text-pink-800 mb-4">A Secret Message</h3>
            <p className="text-gray-700 mb-6">
             You are going to be the best Deshmukh in your entire Bloodline... 🎉
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full"
            >    
              Close  
            </button>
          </div>
        </div>
      )}
      {/* Floating Bougainvillea Flowers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0,
              rotate: 0
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <div className="text-2xl">🌸</div>
          </motion.div>
        ))}
      </div>
      {/* Cartoon Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`balloon-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              y: -50,
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            <div className="text-3xl">{['🎈', '🎈', '🎈', '🎂', '🎁', '🎉', '🎊', '💖'][i % 8]}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;