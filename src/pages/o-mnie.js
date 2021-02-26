import React from "react"

import AboutMeHeroSection from "../components/organisms/AboutMeHeroSection/AboutMeHeroSection"
import HowItAllStarted from "../components/organisms/HowItAllStarted/HowItAllStarted"
import AboutContact from "../components/organisms/AboutContact/AboutContact"
import { motion } from "framer-motion"

const about = () => {
  return (
    <motion.main
      key="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AboutMeHeroSection />
      <HowItAllStarted />
      <AboutContact />
    </motion.main>
  )
}

export default about
