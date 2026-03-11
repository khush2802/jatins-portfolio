import { motion } from "framer-motion";
import heroImg from "@/assets/hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: 0 }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.87, 0, 0.13, 1] }}
      >
        <img
          src={heroImg}
          alt="Jatin Bora - Fitness and Streetwear Model"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.87, 0, 0.13, 1] }}
        >
          <h1 className="text-7xl font-bold leading-none tracking-tighter text-foreground md:text-[10rem] lg:text-[12rem]">
            JATIN
            <br />
            <span className="text-primary">BORA</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:gap-8"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Fitness &nbsp;|&nbsp; Lifestyle &nbsp;|&nbsp; Streetwear Model
          </p>
          <span className="hidden h-px w-16 bg-border md:block" />
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Kota, Rajasthan, India
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="h-8 w-px bg-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
