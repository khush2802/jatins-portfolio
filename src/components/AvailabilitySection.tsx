import { motion } from "framer-motion";

const items = [
  "Fashion Shoots",
  "Fitness Campaigns",
  "Lifestyle Brand Promotions",
  "Streetwear Brand Collaborations",
  "Commercial Advertisements",
];

const AvailabilitySection = () => {
  return (
    <section className="section-border px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
      >
        <h2 className="mb-12 text-sm font-body uppercase tracking-[0.3em] text-primary">
          Available For
        </h2>
        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item}
              className="stat-cell flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <span className="h-2 w-2 bg-primary" />
              <span className="font-display text-lg text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AvailabilitySection;
