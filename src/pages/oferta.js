import { motion } from "framer-motion"
import React from "react"

import HeroOfferSection from "../components/molecules/Offer/HeroOfferSection"
import OfferItemsSection from "../components/organisms/Offer/OfferItemsSection"
import OfferContentItems from "../components/organisms/OfferContentItems/OfferContentItems"
import SignUpSection from "../components/organisms/SignUpHomeSection/SignUpHomeSection"

const Offer = ({ location }) => {
  return (
    <motion.main
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroOfferSection
        sectionTitle="Oferta"
        sectionTitleParagraph="Mobilna pracownia językowa „Unlock Your English” to całoroczna
          działalność edukacyjna, zajmującą się przede wszystkim nauką języka
          angielskiego"
      />
      <OfferItemsSection />
      <OfferContentItems hash={location.hash} />
      <SignUpSection />
    </motion.main>
  )
}

export default Offer
