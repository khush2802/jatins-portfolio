import { motion } from "framer-motion";
import p1 from "@/assets/portfolio-1.jpeg";
import p2 from "@/assets/portfolio-2.jpeg";
import p3 from "@/assets/portfolio-3.jpeg";
import p4 from "@/assets/portfolio-4.jpeg";
import p5 from "@/assets/portfolio-5.jpeg";
import p6 from "@/assets/portfolio-6.jpeg";
import p7 from "@/assets/portfolio-7.png";
import p8 from "@/assets/portfolio-8.png";
import p9 from "@/assets/portfolio-9.jpeg";
import p10 from "@/assets/portfolio-10.jpeg";
import p11 from "@/assets/portfolio-11.jpeg";
import p12 from "@/assets/portfolio-12.png";
import p13 from "@/assets/portfolio-13.jpeg";
import p14 from "@/assets/portfolio-14.jpeg";
import p15 from "@/assets/portfolio-15.jpeg";
import p16 from "@/assets/portfolio-16.jpeg";
import p17 from "@/assets/portfolio-17.jpeg";
import p18 from "@/assets/portfolio-18.jpeg";
import p19 from "@/assets/portfolio-19.jpeg";
// import p20 from "@/assets/portfolio-20.jpeg";
// import p12 from "@/assets/portfolio-12.png";


const images = [
  { src: p1, alt: "Fitness editorial", category: "FITNESS" },
  { src: p2, alt: "Streetwear night shoot", category: "STREETWEAR" },
  { src: p3, alt: "Lifestyle rooftop", category: "LIFESTYLE" },
  { src: p4, alt: "Studio fitness portrait", category: "FITNESS" },
  { src: p5, alt: "Streetwear brutalist", category: "STREETWEAR" },
  { src: p6, alt: "Portrait editorial", category: "LIFESTYLE" },
  { src: p7, alt: "Fitness editorial", category: "FITNESS" },
  { src: p8, alt: "Streetwear night shoot", category: "STREETWEAR" },
  { src: p9, alt: "Lifestyle rooftop", category: "LIFESTYLE" },
  { src: p10, alt: "Studio fitness portrait", category: "FITNESS" },
  { src: p11, alt: "Streetwear brutalist", category: "STREETWEAR" },
  { src: p12, alt: "Portrait editorial", category: "LIFESTYLE" },
  { src: p13, alt: "Streetwear brutalist", category: "STREETWEAR" },
  { src: p14, alt: "Portrait editorial", category: "LIFESTYLE" },
  { src: p15, alt: "Fitness editorial", category: "FITNESS" },
  { src: p16, alt: "Streetwear night shoot", category: "STREETWEAR" },
  { src: p17, alt: "Lifestyle rooftop", category: "LIFESTYLE" },
  { src: p18, alt: "Studio fitness portrait", category: "FITNESS" },
  { src: p19, alt: "Streetwear brutalist", category: "STREETWEAR" },
  
];

const PortfolioSection = () => {
  return (
    <section className="section-border px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
      >
        <h2 className="mb-12 text-sm font-body uppercase tracking-[0.3em] text-primary">
          Portfolio
        </h2>
      </motion.div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="flashbulb-hover mb-4 break-inside-avoid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.87, 0, 0.13, 1] }}
          >
            <div className="group relative overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 bg-background/80 px-3 py-1 font-body text-xs uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.category}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
