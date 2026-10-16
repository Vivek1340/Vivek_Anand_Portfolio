import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { basys } from "../assets";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const icons = { "basys.ai": basys };

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#0D1626",
      color: "#E6EDF5",
      border: "1px solid #1B2A3F",
      borderRadius: 16,
      boxShadow: "none",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1B2A3F" }}
    date={experience.date}
    dateClassName="font-mono !text-secondary !text-[13px]"
    iconStyle={{ background: "#111D31", boxShadow: "0 0 0 3px #1B2A3F" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {icons[experience.company] ? (
          <img src={icons[experience.company]} alt={experience.company} className="w-[60%] h-[60%] object-contain" />
        ) : (
          <span className="font-display font-extrabold text-teal text-[20px]">{experience.company[0]}</span>
        )}
      </div>
    }
  >
    <h3 className="font-display text-ink text-[22px] font-semibold">{experience.title}</h3>
    <p className="font-mono text-teal text-[13px]" style={{ margin: 0 }}>
      {experience.company} · {experience.location}
    </p>
    <p className="!mt-4 !text-[15px] !font-normal text-ink/90 leading-relaxed">{experience.summary}</p>
    {experience.points.length > 0 && (
      <ul className="mt-4 space-y-2">
        {experience.points.map((point) => (
          <li key={point} className="text-secondary text-[14px] leading-relaxed pl-4 relative">
            <span className="absolute left-0 top-[9px] w-1.5 h-1.5 rounded-full bg-amber" />
            {point}
          </li>
        ))}
      </ul>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <SectionHeading index="03" label="experience" title="Where I've built." />
      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="#1B2A3F">
          {experiences.map((experience) => (
            <ExperienceCard key={`${experience.company}-${experience.title}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
