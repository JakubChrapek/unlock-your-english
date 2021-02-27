import { motion } from "framer-motion"
import React from "react"

import HeroOfferSection from "../components/molecules/Offer/HeroOfferSection"
import PrivacyContentItems from "../components/organisms/Privacy/PrivacyContentItems"

const Privacy = ({ location }) => {
  return (
    <motion.main
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroOfferSection
        sectionTitle="Polityka prywatności"
        sectionTitleParagraph="Niniejsza Polityka Prywatności stanowi zbiór zasad przetwarzania danych osobowych Użytkowników i zbierania plików cookies na stronie internetowej: www.unlockyourenglish.pl."
      />
      <PrivacyContentItems />
    </motion.main>
  )
}

export default Privacy
