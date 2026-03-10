import { motion } from "framer-motion";

const stats = [
  { label: "Name", value: "Jatin Bora" },
  { label: "Age", value: "33" },
  { label: "Height", value: '5\'10" (178 CM)' },
  { label: "Location", value: "Kota, Rajasthan" },
  { label: "Nationality", value: "Indian" },
  { label: "Chest", value: "38 IN" },
  { label: "Waist", value: "32 IN" },
  { label: "Hips", value: "39 IN" },
  { label: "Shoe Size", value: "UK 8" },
  { label: "Hair Color", value: "Black" },
  { label: "Eye Color", value: "Black" },
];

const StatsSection = () => {
  return (
    <section className="section-border px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
      >
        <h2 className="mb-12 text-sm font-body uppercase tracking-[0.3em] text-primary">
          Model Statistics
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-cell"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <span className="block text-xs text-muted-foreground">{stat.label}</span>
              <span className="mt-1 block font-display text-lg text-foreground">{stat.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
