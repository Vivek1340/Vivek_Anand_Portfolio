import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SectionHeading = ({ index, label, title }) => (
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
      {index} <span className="text-secondary">/ {label}</span>
    </p>
    <h2 className={`${styles.sectionHeadText} mt-3`}>{title}</h2>
  </motion.div>
);

export default SectionHeading;
