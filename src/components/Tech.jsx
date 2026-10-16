import { motion } from "framer-motion";

import { stack, techBalls } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import SectionHeading from "./SectionHeading";

const Tech = ({ isMobile }) => {
  return (
    <>
      <SectionHeading index="04" label="stack" title="What I work with." />

      <div className="mt-12 flex flex-row flex-wrap justify-center gap-8 sm:gap-10">
        {techBalls.map((t) => (
          <div className="w-24 h-24 sm:w-28 sm:h-28" key={t.name} title={t.name}>
            {isMobile ? (
              <div className="w-full h-full rounded-full bg-[#fff8eb] flex items-center justify-center">
                <img src={t.icon} alt={t.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            ) : (
              <BallCanvas icon={t.icon} />
            )}
          </div>
        ))}
      </div>

      <motion.dl variants={fadeIn("up", "spring", 0.2, 0.75)} className="mt-14 grid md:grid-cols-2 gap-x-12 border-t border-line">
        {stack.map((row) => (
          <div key={row.group} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-line">
            <dt className="font-mono text-[13px] text-teal sm:w-32 shrink-0">{row.group}</dt>
            <dd className="flex flex-wrap gap-x-4 gap-y-1 text-ink text-[15px]">
              {row.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </motion.dl>
    </>
  );
};

const TechSection = SectionWrapper(() => <Tech isMobile={window.innerWidth <= 768} />, "stack");
export default TechSection;
