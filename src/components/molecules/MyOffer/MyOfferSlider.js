import React, { useEffect, useRef, useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../utils/getWindowSize"
import { translateXForElement } from "../../../utils/getTranslateXForElement"

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

import { StyledMyOfferSliderWrapper } from "../../atoms/MyOffer/StyledMyOfferSliderWrapper"
import { StyledSlidesWrapper } from "../../atoms/MyOffer/StyledSlidesWrapper"
import { StyledSlide } from "../../atoms/MyOffer/StyledSlide"
import { StyledSliderArrowWrapper } from "../../atoms/MyOffer/StyledSliderArrowWrapper"
import { StyledOfferSlider } from "../../atoms/MyOffer/StyledOfferSlider"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferLink } from "../../atoms/MyOffer/StyledOfferLink"
import { StyledButtonPagination } from "../../atoms/MyOffer/StyledButtonPagination"
import { useAnimation, useDragControls, useMotionValue } from "framer-motion"

const MyOfferSlider = () => {
  const slides = useStaticQuery(graphql`
    query getSlides {
      allDatoCmsOfferItem {
        nodes {
          offerTitle
          offerTextContent
          id
        }
      }
    }
  `)

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
    const newXPosition = xPos + singleSlideWidth

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
    })
  }

  const handleNextClick = () => {
    const xPos = translateXForElement(containerRef.current)
    const newXPosition = xPos - singleSlideWidth
    const constraint = containerWidth - slidesWidth

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
      <StyledOfferSlider>
        <StyledSlidesWrapper
          drag="x"
          dragConstraints={{
            left: containerWidth - slidesWidth,
            right: -50,
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
          {slides.allDatoCmsOfferItem.nodes.map(slide => (
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
                dangerouslySetInnerHTML={{ __html: slide.offerTextContent }}
              />

              <StyledOfferLink
                hasdeclaredfontsize="18px"
                hasdeclaredfontweight="bold"
                hasdeclaredlineheight="1.32em"
                hasdeclaredfontcolor="var(--red)"
                hasdeclaredpadding="6px 0"
              >
                Przeczytaj więcej
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
              size="28px"
              color="var(--blue)"
              // color="rgba(17, 19, 30, 0.2)"
            />
          </StyledButtonPagination>
          <StyledButtonPagination onClick={handleNextClick}>
            <AiOutlineArrowRight size="28px" color="var(--blue)" />
          </StyledButtonPagination>
        </StyledSliderArrowWrapper>
      </StyledOfferSlider>
    </StyledMyOfferSliderWrapper>
  )
}

export default MyOfferSlider
