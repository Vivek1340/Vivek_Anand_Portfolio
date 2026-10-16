import { motion } from "framer-motion";

import { about, stats } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <>
      <SectionHeading index="01" label="about" title="Correctness first." />

      <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-12">
        <motion.div variants={fadeIn("", "", 0.1, 1)} className="space-y-5 text-secondary text-[17px] leading-[1.8] max-w-2xl">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="first:text-ink first:text-[19px]">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.ul variants={fadeIn("left", "spring", 0.2, 0.75)} className="space-y-4">
          {about.principles.map((pr, i) => (
            <li key={pr.title} className="card rounded-2xl p-5">
              <p className="font-mono text-[12px] text-amber">0{i + 1}</p>
              <h3 className="mt-1 font-display text-ink text-[19px] font-semibold">{pr.title}</h3>
              <p className="mt-1 text-secondary text-[15px] leading-relaxed">{pr.body}</p>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.dl
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-line overflow-hidden"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-surface p-6 border-line [&:not(:last-child)]:border-b sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-ink text-[34px] font-extrabold leading-none">{s.value}</dd>
            <dd className="mt-2 text-secondary text-[14px]">{s.label}</dd>
          </div>
        ))}
      </motion.dl>
    </>
  );
};

export default SectionWrapper(About, "about");
