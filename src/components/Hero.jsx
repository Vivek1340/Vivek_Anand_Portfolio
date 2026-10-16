import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../constants";
import { desk } from "../assets";
import { ComputersCanvas } from "./canvas";
import NetworkGraph from "./NetworkGraph";

const rise = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = ({ isMobile }) => {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden hero-glow">
      <div className="absolute inset-0 dot-grid" />
      <NetworkGraph className="absolute inset-0 w-full h-full opacity-80" />

      <div
        className={`${styles.paddingX} relative z-10 max-w-7xl mx-auto pt-32 sm:pt-40 flex flex-row items-start gap-5 pointer-events-none`}
      >
        <div className="flex flex-col items-center mt-3">
          <div className="w-4 h-4 rounded-full bg-teal shadow-[0_0_18px_#2dd4bf]" />
          <div className="w-px sm:h-72 h-40 bg-gradient-to-b from-teal to-transparent" />
        </div>

        <div className="max-w-xl">
          <motion.p {...rise(0)} className="font-mono text-[13px] text-secondary">
            <span className="text-teal">~/vivek</span> $ whoami
          </motion.p>
          <motion.h1 {...rise(0.08)} className={`${styles.heroHeadText} mt-4`}>
            Vivek <span className="text-gradient">Anand</span>
          </motion.h1>
          <motion.p {...rise(0.16)} className={`${styles.heroSubText} mt-6`}>
            <span className="text-ink">{profile.tagline}</span>
            <br />
            {profile.pitch} Payments, reconciliation and access control at scale.
          </motion.p>
          <motion.p {...rise(0.24)} className="mt-5 font-mono text-[13px] text-secondary">
            {profile.role} · {profile.location}
          </motion.p>
          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap gap-3 pointer-events-auto">
            <a
              href="#work"
              className="rounded-full bg-teal text-primary font-medium px-6 py-3 hover:bg-[#5eead4] transition-colors"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line bg-surface/60 backdrop-blur px-6 py-3 text-ink hover:border-teal transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      {isMobile ? (
        <img
          src={desk}
          alt="Desk setup"
          className="relative z-0 w-full mt-10 opacity-90 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        />
      ) : (
        <div className="absolute inset-0 z-0 lg:left-[30%]">
          <ComputersCanvas />
        </div>
      )}

      <div className="absolute bottom-8 w-full flex justify-center z-10">
        <a href="#about" aria-label="Scroll to about">
          <div className="w-[30px] h-[54px] rounded-3xl border-2 border-line flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 22, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2.5 h-2.5 rounded-full bg-teal"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
