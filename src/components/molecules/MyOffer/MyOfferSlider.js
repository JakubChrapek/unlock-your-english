import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-scroll"
import slugify from "slugify"
import { navigate } from "@reach/router"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import useWindowSize from "../../../utils/getWindowSize"
import { translateXForElement } from "../../../utils/getTranslateXForElement"
import { useAnimation } from "framer-motion"

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

import { StyledMyOfferSliderWrapper } from "../../atoms/MyOffer/StyledMyOfferSliderWrapper"
import { StyledSlidesWrapper } from "../../atoms/MyOffer/StyledSlidesWrapper"
import { StyledSlide } from "../../molecules/MyOffer/StyledSlide"
import { StyledSliderArrowWrapper } from "../../atoms/MyOffer/StyledSliderArrowWrapper"
import { StyledOfferSlider } from "../../atoms/MyOffer/StyledOfferSlider"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferLink } from "../../atoms/MyOffer/StyledOfferLink"
import { StyledButtonPagination } from "../../atoms/MyOffer/StyledButtonPagination"

const MyOfferSlider = ({ slideData, fromAnotherPage }) => {
  const [containerWidth, setContainerWidth] = useState(undefined)
  const [slidesWidth, setSlidesWidth] = useState(undefined)
  const [singleSlideWidth, setSingleSlideWidth] = useState(undefined)
  const containerRef = useRef()
  const width = useWindowSize()
  const animation = useAnimation()

  const handlePrevClick = () => {
    const xPos = translateXForElement(containerRef.current)
    const newXPosition = xPos + singleSlideWidth + 40
    const constraint = width < 600 ? -40 : -50
    animation.start({
      x: newXPosition > constraint ? constraint : newXPosition,
    })
  }

  const handleNextClick = () => {
    const xPos = translateXForElement(containerRef.current)
    const newXPosition = xPos - singleSlideWidth - 40
    const constraint = containerWidth - slidesWidth - 40

    animation.start({
      x: newXPosition < constraint ? constraint : newXPosition,
    })
  }

  useEffect(() => {
    const slider = containerRef.current
    let slidesWidth = 0

    Array.from(slider.children).forEach(slide => {
      const slideWidth = slide.clientWidth
      const slideMargin = 40
      slidesWidth += slideWidth + slideMargin
    })

    setSlidesWidth(slidesWidth)
    setContainerWidth(slider.clientWidth)
    setSingleSlideWidth(slider.children[0].clientWidth)
    // const constraint = slider.clientWidth - slidesWidth
  }, [width])

  return (
    <StyledMyOfferSliderWrapper>
      <StyledOfferSlider>
        <StyledSlidesWrapper
          drag="x"
          dragConstraints={{
            left: containerWidth - slidesWidth - (width < 600 ? 40 : 50),
            right: width < 600 ? -40 : -50,
          }}
          ref={containerRef}
          initial={false}
          animate={animation}
          style={{ x: 0 }}
          dragTransition={{
            bounceDamping: 90,
            bounceStiffness: 600,
          }}
        >
          {slideData.nodes.map(slide => (
            <StyledSlide key={slide.offerTitle}>
              <StyledText
                hasdeclaredfontsize="36px"
                hasdeclaredfontweight="bold"
                hasdeclaredlineheight="1.31em"
                hasdeclaredfontcolor="var(--blue)"
                hasdeclaredpadding="0 0 24px 0"
                as="h3"
              >
                {slide.offerTitle}
              </StyledText>
              <StyledText
                hasdeclaredfontsize="18px"
                hasdeclaredfontweight="medium"
                hasdeclaredlineheight="1.64em"
                hasdeclaredfontcolor="var(--black)"
                hasdeclaredfontfamily="Raleway"
                hasdeclaredpadding="0 0 24px 0"
                hasdeclaredheight="180px"
                hasoverflow="hidden"
              >
                {slide.offerTextContent}
              </StyledText>
              {fromAnotherPage ? (
                <AnchorLink
                  to={`/oferta#${slugify(slide.offerPageContentTitle, {
                    lower: true,
                  })}`}
                  title={slide.offerPageContentTitle}
                >
                  <StyledOfferLink
                    hasdeclaredfontsize="18px"
                    hasdeclaredfontweight="bold"
                    hasdeclaredlineheight="1.32em"
                    hasdeclaredfontcolor="var(--red)"
                    hasdeclaredpadding="6px 0"
                    as="p"
                  >
                    Przeczytaj więcej
                  </StyledOfferLink>
                </AnchorLink>
              ) : (
                <Link
                  to={slugify(slide.offerPageContentTitle, {
                    lower: true,
                  })}
                  smooth={true}
                  duration={400}
                  onClick={
                    fromAnotherPage
                      ? () =>
                          navigate(
                            `/oferta/#${slugify(slide.offerPageContentTitle, {
                              lower: true,
                            })}`
                          )
                      : () => {}
                  }
                >
                  <StyledOfferLink
                    hasdeclaredfontsize="18px"
                    hasdeclaredfontweight="bold"
                    hasdeclaredlineheight="1.32em"
                    hasdeclaredfontcolor="var(--red)"
                    hasdeclaredpadding="6px 0"
                    as="p"
                  >
                    Przeczytaj więcej
                  </StyledOfferLink>
                </Link>
              )}
            </StyledSlide>
          ))}
        </StyledSlidesWrapper>
        <StyledSliderArrowWrapper>
          <StyledButtonPagination
            onClick={handlePrevClick}
            hasdeclaredmarginright="42px"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
          >
            <AiOutlineArrowLeft size="32px" color="var(--blue)" />
          </StyledButtonPagination>
          <StyledButtonPagination onClick={handleNextClick} 
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
          >
            <AiOutlineArrowRight size="32px" color="var(--blue)" />
          </StyledButtonPagination>
        </StyledSliderArrowWrapper>
      </StyledOfferSlider>
    </StyledMyOfferSliderWrapper>
  )
}

export default MyOfferSlider
