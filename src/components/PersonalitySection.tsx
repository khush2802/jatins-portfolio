import { motion } from "framer-motion";

const traits = ["Confident", "Disciplined", "Professional", "Hardworking", "Adaptable"];

const PersonalitySection = () => {
  return (
    <section className="section-border px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
      >
        <h2 className="mb-12 text-sm font-body uppercase tracking-[0.3em] text-primary">
          Personality
        </h2>
        <div className="flex flex-wrap gap-4">
          {traits.map((trait, i) => (
            <motion.span
              key={trait}
              className="border border-border px-6 py-3 font-display text-xl uppercase text-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
            >
              {trait}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalitySection;
