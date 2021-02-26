import { motion } from "framer-motion"
import React from "react"

import ContactHeroSection from "../components/organisms/Contact/ContactHeroSection"

const contact = () => {
  return (
    <motion.main
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ContactHeroSection />
    </motion.main>
  )
}

export default contact
