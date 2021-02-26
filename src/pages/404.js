import { motion } from "framer-motion"
import React from "react"

const NotFoundPage = () => {
  return (
    <motion.main
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>404. Nie znaleziono strony</h1>
    </motion.main>
  )
}

export default NotFoundPage
