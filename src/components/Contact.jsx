import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { profile } from "../constants";
import { resume } from "../assets";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import SectionHeading from "./SectionHeading";

const inputClass =
  "bg-primary/70 border border-line focus:border-teal focus:outline-none py-3.5 px-5 placeholder:text-secondary/60 text-ink rounded-xl transition-colors";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send(
        "service_0z6c9rm",
        "template_s08st24",
        {
          from_name: form.name,
          to_name: "Vivek",
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        "MfzoX5pROUzEe30kr"
      )
      .then(
        () => {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
        },
        () => setStatus("error")
      );
  };

  return (
    <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.85] card !transform-none rounded-2xl p-6 sm:p-9">
        <SectionHeading index="06" label="contact" title="Let's talk." />
        <p className="mt-4 text-secondary text-[16px] leading-relaxed">
          Open to conversations about backend, platform and fintech infrastructure. Write to{" "}
          <a href={`mailto:${profile.email}`} className="text-teal hover:underline">
            {profile.email}
          </a>{" "}
          or use the form.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[12px] text-secondary">name</span>
            <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[12px] text-secondary">email</span>
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[12px] text-secondary">message</span>
            <textarea required rows="5" name="message" value={form.message} onChange={handleChange} placeholder="What are you building?" className={inputClass} />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-teal text-primary font-medium px-7 py-3 hover:bg-[#5eead4] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <a
              href={resume}
              download="Resume_Vivek_Anand.pdf"
              className="rounded-full border border-line px-7 py-3 text-ink hover:border-teal transition-colors"
            >
              Résumé
            </a>
            {status === "sent" && <span className="font-mono text-[13px] text-teal">Sent — I'll reply soon.</span>}
            {status === "error" && <span className="font-mono text-[13px] text-amber">Couldn't send. Email me instead.</span>}
          </div>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
