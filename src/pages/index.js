import React from "react"

import HomeHeroSection from "../components/organisms/HomeHeroSection/HomeHeroSection"
import UnlockYourEnglish from "../components/organisms/UnlockYourEnglish/UnlockYourEnglish"
import MyOffer from "../components/organisms/MyOffer/MyOffer"
import HiAboutMe from "../components/molecules/HiAboutMe/HiAboutMe"
import WhatSayAboutMe from "../components/organisms/WhatSayAboutMe/WhatSayAboutMe"
import SignUpHomeSection from "../components/organisms/SignUpHomeSection/SignUpHomeSection"
import { motion } from "framer-motion"

const IndexPage = () => {
  return (
    <motion.main
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HomeHeroSection />
      <UnlockYourEnglish />
      <MyOffer />
      <HiAboutMe />
      <WhatSayAboutMe />
      <SignUpHomeSection />
    </motion.main>
  )
}

export default IndexPage
