import React, { useEffect, useRef, useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../utils/getWindowSize"

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"

import { StyledMyOfferSliderWrapper } from "../../atoms/MyOffer/StyledMyOfferSliderWrapper"
import { StyledSlidesWrapper } from "../../atoms/MyOffer/StyledSlidesWrapper"
import { StyledSlide } from "../../atoms/MyOffer/StyledSlide"
import { StyledSliderArrowWrapper } from "../../atoms/MyOffer/StyledSliderArrowWrapper"
import { StyledOfferSlider } from "../../atoms/MyOffer/StyledOfferSlider"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledOfferLink } from "../../atoms/MyOffer/StyledOfferLink"
import { StyledButtonPagination } from "../../atoms/MyOffer/StyledButtonPagination"
import { useMotionValue } from "framer-motion"

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
  const containerRef = useRef()
  const width = useWindowSize()
  const x = useMotionValue(0)

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
          onDragEnd={(e, { offset, velocity }) => {
            console.log(
              "e.offsetX: ",
              e.offsetX,
              "e.pageX: ",
              e.pageX,
              "e.layerX: ",
              e.layerX,
              "e.clientX: ",
              e.clientX
            )
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
          <StyledButtonPagination hasdeclaredmarginright="42px">
            <AiOutlineArrowLeft size="28px" color="#11131E" opacity="0.2" />
          </StyledButtonPagination>
          <StyledButtonPagination>
            <AiOutlineArrowRight size="28px" color="var(--blue)" />
          </StyledButtonPagination>
        </StyledSliderArrowWrapper>
      </StyledOfferSlider>
    </StyledMyOfferSliderWrapper>
  )
}

export default MyOfferSlider
