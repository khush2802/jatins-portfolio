import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-border px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
        className="max-w-4xl"
      >
        <h2 className="mb-2 text-sm font-body uppercase tracking-[0.3em] text-primary">
          About
        </h2>
        <div className="mt-8 space-y-6">
          <p className="font-body text-lg leading-relaxed text-foreground md:text-xl">
            Jatin Bora is an aspiring model based in Kota, Rajasthan, India, with a natural presence and confident personality suited for fitness, lifestyle, and streetwear modeling. Standing at 5'10", he maintains a fit and well-balanced physique that aligns with modern fashion and active lifestyle campaigns.
          </p>
          <p className="font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
            With a strong interest in fitness and personal development, Jatin brings discipline, professionalism, and a positive attitude to every project. Comfortable in front of the camera and eager to grow within the industry, he is focused on building a diverse portfolio and collaborating with photographers, brands, and creative professionals.
          </p>
          <p className="font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
            His goal is to establish himself in the modeling industry while representing brands that promote fitness, lifestyle, and contemporary fashion.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
