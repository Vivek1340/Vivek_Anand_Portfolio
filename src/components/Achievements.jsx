import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn,textVariant } from "../utils/motion"
import { achievements } from "../constants"

const AchievementCard = ({index,
  organisation,
  rank,
  image}
  ) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index* 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
    <p className="text-white tracking-wider text-[18px]" >{organisation}</p>
    <img src={image} alt={`image of ${organisation}`} className="mt-7 w-96 h-48 rounded-[5px] object-contain" />
    <p className="mt-3 text-secondary text-[12px] peach-text-gradient" >{rank}</p>
    </motion.div>
  )
}

const Achievements = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]" >
       <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
         <motion.div
          variants={textVariant()}
         >
           <p className={styles.sectionSubText}>NOTEWORTHY ACCOMPLISHMENTS</p>
           <h2 className= {styles.sectionHeadText}>Achievments.</h2>
         </motion.div>
       </div>
       <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          achievements.map((achievement, index) => (
            <AchievementCard key={achievement.organisation} index={index} {...achievement} />
          ))

        }
       </div>
       
     </div>
   
  )
}

export default SectionWrapper(Achievements, "")
