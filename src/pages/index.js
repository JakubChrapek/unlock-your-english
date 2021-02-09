import React from "react"

import HomeHeroSection from "../components/organisms/HomeHeroSection/HomeHeroSection"
import UnlockYourEnglish from "../components/organisms/UnlockYourEnglish/UnlockYourEnglish"
import MyOffer from "../components/organisms/MyOffer/MyOffer"
import HiAboutMe from "../components/molecules/HiAboutMe/HiAboutMe"
import WhatSayAboutMe from "../components/organisms/WhatSayAboutMe/WhatSayAboutMe"
import SignUpHomeSection from "../components/organisms/SignUpHomeSection/SignUpHomeSection"

const IndexPage = () => {
  return (
    <>
      <HomeHeroSection />
      <UnlockYourEnglish />
      <MyOffer />
      <HiAboutMe />
      {/* <WhatSayAboutMe />
      <SignUpHomeSection /> */}
    </>
  )
}

export default IndexPage
