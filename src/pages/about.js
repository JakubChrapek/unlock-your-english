import React from "react"

import AboutMeHeroSection from "../components/organisms/AboutMeHeroSection/AboutMeHeroSection"
import HowItAllStarted from "../components/organisms/HowItAllStarted/HowItAllStarted"
import AboutContact from "../components/organisms/AboutContact/AboutContact"

const about = () => {
  return (
    <div>
      <AboutMeHeroSection />
      <HowItAllStarted />
      <AboutContact />
    </div>
  )
}

export default about
