import { motion } from 'framer-motion';

const Final = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="font-playfair text-4xl md:text-6xl font-bold mb-8 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Happy Birthday!
        </motion.h2>
        <motion.p
          className="font-poppins text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          This is just a small part of how much you mean to me. Every day with you is a blessing,
          and I can't wait to create more beautiful memories together. You are my everything. ❤️
        </motion.p>
      </div>
      {/* Floating hearts and flowers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <div className="text-2xl">{['❤️', '🌸', '🎈', '💖', '🌺', '🎂'][i % 6]}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Final;