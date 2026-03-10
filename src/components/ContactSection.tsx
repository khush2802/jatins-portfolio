import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-border px-6 py-24 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.87, 0, 0.13, 1] }}
      >
        <h2 className="mb-12 text-sm font-body uppercase tracking-[0.3em] text-primary">
          Contact
        </h2>

        <div className="flex flex-col gap-6">
          <a
            href="mailto:jatinsixpack@gmail.com"
            className="group flex items-center gap-4 border border-border p-6 transition-colors duration-200 hover:border-primary hover:bg-primary/5"
          >
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <span className="block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
              <span className="font-display text-xl text-foreground">JATINSIXPACK@GMAIL.COM</span>
            </div>
          </a>

          <a
            href="https://wa.me/919928473065"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-border p-6 transition-colors duration-200 hover:border-primary hover:bg-primary/5"
          >
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <span className="block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</span>
              <span className="font-display text-xl text-foreground">+91 9928473065</span>
            </div>
          </a>

          <a
            href="https://www.instagram.com/justjatin18"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border border-border p-6 transition-colors duration-200 hover:border-primary hover:bg-primary/5"
          >
            <Instagram className="h-5 w-5 text-primary" />
            <div>
              <span className="block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">Instagram</span>
              <span className="font-display text-xl text-foreground">@JUSTJATIN18</span>
            </div>
          </a>
        </div>

        <p className="mt-16 font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © 2026 Jatin Bora. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
