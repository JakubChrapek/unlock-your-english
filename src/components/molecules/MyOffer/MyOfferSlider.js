import React, { useEffect, useRef, useState } from "react"

import useWindowSize from "../../../utils/getWindowSize"
import { translateXForElement } from "../../../utils/getTranslateXForElement"
import { useAnimation, useDragControls, useMotionValue } from "framer-motion"

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

import { StyledMyOfferSliderWrapper } from "../../atoms/MyOffer/StyledMyOfferSliderWrapper"
import { StyledSlidesWrapper } from "../../atoms/MyOffer/StyledSlidesWrapper"
import { StyledSlide } from "../../molecules/MyOffer/StyledSlide"
import { StyledSliderArrowWrapper } from "../../atoms/MyOffer/StyledSliderArrowWrapper"
import { StyledOfferSlider } from "../../atoms/MyOffer/StyledOfferSlider"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferLink } from "../../atoms/MyOffer/StyledOfferLink"
import { StyledButtonPagination } from "../../atoms/MyOffer/StyledButtonPagination"

const MyOfferSlider = ({ slideData }) => {
  const [containerWidth, setContainerWidth] = useState(undefined)
  const [slidesWidth, setSlidesWidth] = useState(undefined)
  const [singleSlideWidth, setSingleSlideWidth] = useState(undefined)
  const [buttonsDisabledState, setButtonsDisabledState] = useState([
    false,
    false,
  ])
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
    const constraint = slider.clientWidth - slidesWidth
  }, [width])

  return (
    <StyledMyOfferSliderWrapper>
      {console.log(slideData)}
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
            <StyledSlide>
              <StyledText
                hasdeclaredfontsize="36px"
                hasdeclaredfontweight="bold"
                hasdeclaredlineheight="1.85em"
                hasdeclaredfontcolor="var(--blue)"
                hasdeclaredpadding="0 0 24px 0"
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

              <StyledOfferLink
                hasdeclaredfontsize="18px"
                hasdeclaredfontweight="bold"
                hasdeclaredlineheight="1.32em"
                hasdeclaredfontcolor="var(--red)"
                hasdeclaredpadding="6px 0"
              >
                Przeczytaj więcej
                {slide.offerPageContentTitle}
              </StyledOfferLink>
            </StyledSlide>
          ))}
        </StyledSlidesWrapper>
        <StyledSliderArrowWrapper>
          <StyledButtonPagination
            onClick={handlePrevClick}
            hasdeclaredmarginright="42px"
          >
            <AiOutlineArrowLeft
              size="32px"
              color="var(--blue)"
              // color="rgba(17, 19, 30, 0.2)"
            />
          </StyledButtonPagination>
          <StyledButtonPagination onClick={handleNextClick}>
            <AiOutlineArrowRight size="32px" color="var(--blue)" />
          </StyledButtonPagination>
        </StyledSliderArrowWrapper>
      </StyledOfferSlider>
    </StyledMyOfferSliderWrapper>
  )
}

export default MyOfferSlider
