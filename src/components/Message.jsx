import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-pink-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-2xl font-semibold text-pink-800 mb-4 text-center">A Special Message</h2>
          <p className="font-poppins text-lg text-pink-700 leading-relaxed text-center">
            Our story started with an accidental initialization—a random meeting that wasn’t in the script, yet somehow resulted in the most perfect synchronized merge. We drifted into each other's orbits by pure coincidence, but we quickly realized our timing was in such perfect sync that it felt like we were running on the same clock cycle.

            Even though we met by chance, you’ve become the hard-coded constant in my life. Like a bougainvillea that blooms vibrantly and scales without a map, our friendship has grown into something resilient and beautiful in the most unplanned ways. You are the beautiful bug in my life’s code that turned out to be its best feature, and I’m so glad we found a way to stay in zero-latency harmony forever. Happy Birthday, my love! ❤️
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Message;