import { motion } from 'framer-motion';

const timelineItems = [
  {
    title: 'Best moments',
    image: '/APRIL.png',
    caption: 'Countless adventures, laughter, and memories that we cherish deeply.',
  },
];

const Timeline = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <h2 className="font-playfair text-3xl font-bold text-center text-pink-800 mb-12">Our Journey</h2>
      <div className="max-w-4xl mx-auto">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-sm mb-4">
              <img src={item.image} alt={item.title} className="w-full aspect-[2/3] object-cover rounded-lg shadow-xl border-4 border-pink-200" />
            </div>
            <div className="text-center px-4">
              <h3 className="font-playfair text-xl font-semibold text-pink-800 mb-2">{item.title}</h3>
              <p className="font-poppins text-pink-700">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;