import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an enthusiastic, honest, and communicative T-shape professional who learns quickly. I have a strong knowledge in various forms of analysis, including system analysis, market analysis, and business analysis. My skills allow to manage the Software Development Life Cycle (SDLC), using both Agile and Waterfall methodologies effectively. I am proficient in SQL, well-versed in Jira and Confluence. In terms of development skills, I am highly skilled in C++, particularly with object-oriented programming (OOP). I am also proficient in JavaScript with frameworks like React, Node.js, and Three.js. 
        With strong analytical capabilities and technical skills, I am able to both assist the development team and bridge the gap between technical and business teams to ensure successful project implementation and effective solutions. My ability to communicate clearly and learn quickly allows me to adapt to new challenges and contribute positively to any team or project. <a href={'#contact'} className="text-[#b08ff8] hover:text-[#915eff]">Let's make the world better together!</a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")