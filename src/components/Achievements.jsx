import { motion } from "framer-motion";

import { achievements } from "../constants";
import { imo, ntse, iit } from "../assets";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const images = [imo, ntse, iit];

const Achievements = () => {
  return (
    <>
      <SectionHeading index="05" label="before code" title="Achievements." />
      <div className="mt-12 grid sm:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <motion.div key={a.title} variants={fadeIn("up", "spring", i * 0.15, 0.75)} className="card rounded-2xl p-6">
            <div className="h-36 rounded-xl bg-white/95 flex items-center justify-center overflow-hidden">
              <img src={images[i]} alt="" className="max-h-28 max-w-[80%] object-contain" />
            </div>
            <p className="mt-5 font-display text-ink text-[18px] font-semibold leading-snug">{a.title}</p>
            <p className="mt-1 font-mono text-[13px] text-amber">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "");
