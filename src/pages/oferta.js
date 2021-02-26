import React from "react"

import HeroOfferSection from "../components/molecules/Offer/HeroOfferSection"
import OfferItemsSection from "../components/organisms/Offer/OfferItemsSection"
import OfferContentItems from "../components/organisms/OfferContentItems/OfferContentItems"
import SignUpSection from "../components/organisms/SignUpHomeSection/SignUpHomeSection"
const Offer = () => {
  return (
    <div>
      <HeroOfferSection />
      <OfferItemsSection />
      <OfferContentItems />
      <SignUpSection />
    </div>
  )
}

export default Offer
