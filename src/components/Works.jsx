import { motion } from "framer-motion";

import { caseStudies } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const domainColor = {
  Fintech: "text-amber border-amber/30",
  Platform: "text-teal border-teal/30",
  Reliability: "text-[#7DD3FC] border-[#7DD3FC]/30",
  "Developer productivity": "text-[#C4B5FD] border-[#C4B5FD]/30",
};

const CaseStudy = ({ index, title, domain, problem, did, tags }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.12, 0.75)}
    className="card rounded-2xl p-6 sm:p-7 flex flex-col"
  >
    <div className="flex items-center justify-between gap-3">
      <span className={`font-mono text-[11px] uppercase tracking-wider border rounded-full px-2.5 py-1 ${domainColor[domain]}`}>
        {domain}
      </span>
      <span className="font-mono text-[12px] text-line">{String(index + 1).padStart(2, "0")}</span>
    </div>
    <h3 className="mt-5 font-display text-ink text-[22px] font-semibold leading-snug">{title}</h3>
    <p className="mt-4 text-[14px] leading-relaxed text-secondary">
      <span className="font-mono text-[11px] uppercase tracking-wider text-secondary/70 block mb-1">Problem</span>
      {problem}
    </p>
    <p className="mt-4 text-[14px] leading-relaxed text-ink/90">
      <span className="font-mono text-[11px] uppercase tracking-wider text-teal block mb-1">What I did</span>
      {did}
    </p>
    <div className="mt-auto pt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="font-mono text-[12px] text-secondary bg-primary/60 rounded-md px-2 py-1">
          {t}
        </span>
      ))}
    </div>
  </motion.article>
);

const Works = () => {
  return (
    <>
      <SectionHeading index="02" label="work" title="Selected work at FarMart." />
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-5 text-secondary text-[17px] max-w-2xl leading-[1.8]">
        Systems I designed or owned end to end — from the design doc to production.
      </motion.p>

      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {caseStudies.map((cs, i) => (
          <CaseStudy key={cs.title} index={i} {...cs} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "work");
