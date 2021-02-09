import React, { useState, useRef } from "react"

import { graphql, useStaticQuery } from "gatsby"
import { AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

import { StyledUserImageImg } from "../../atoms/WhatSayAboutMe/StyledUserImage"
import { StyledText } from "../../atoms/Text/StyledText"
import { StyledWhatSayAboutMeSection } from "../../atoms/WhatSayAboutMe/StyledWhatSayAboutMeSection"
import { StyledWhatSayAboutMeWrapper } from "../../atoms/WhatSayAboutMe/StyledWhatSayAboutMeWrapper"
import { StyledSliderWrapper } from "../../atoms/WhatSayAboutMe/StyledSliderWrapper"
import { StyledAboutMeSpiral } from "../../atoms/WhatSayAboutMe/StyledAboutMeSpiral"
import { StyledSlide } from "../../atoms/WhatSayAboutMe/StyledSlide"
import { StyledLeftArrow } from "../../atoms/WhatSayAboutMe/StyledLeftArrow"
import { StyledRightArrow } from "../../atoms/WhatSayAboutMe/StyledRightArrow"
import { StyledPagination } from "../../atoms/WhatSayAboutMe/StyledPagination"
import { StyledUserWrapper } from "../../atoms/WhatSayAboutMe/StyledUserWrapper"
import { StyledUserImage } from "../../atoms/WhatSayAboutMe/StyledUserImage"

import aboutspiral from "../../../images/aboutspiral.png"

import { StyledWrapperWithoutPagination } from "../../atoms/WhatSayAboutMe/StyledWrapperWithoutPagination"
import { StyledSpanPagination } from "../../atoms/WhatSayAboutMe/StyledSpanPagination"
import { StyledSliderTextWrapper } from "../../atoms/WhatSayAboutMe/StyledSliderTextWrapper"
import { StyledButtonPagination } from "../../atoms/MyOffer/StyledButtonPagination"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"

const WhatSayAboutMe = () => {
  const whatSayAboutMeContent = useStaticQuery(graphql`
    query WhatSayAboutMeContent {
      allDatoCmsWhatTheySayAboutMe {
        nodes {
          customerName
          customerPhoto {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          whatTheSayAboutMeContent
        }
      }
    }
  `)
  const allDatoData = whatSayAboutMeContent.allDatoCmsWhatTheySayAboutMe
  const [[slide, direction], setSlide] = useState([0, 0])
  const slideIndex = wrap(0, allDatoData.nodes.length, slide)
  const paginate = newDirection => {
    setSlide([slide + newDirection, newDirection])
  }
  const sliderRef = useRef(null)
  return (
    <StyledWhatSayAboutMeSection>
      <StyledAboutMeSpiral>
        <img src={aboutspiral} alt="spiral" />
      </StyledAboutMeSpiral>
      <StyledWhatSayAboutMeWrapper>
        <StyledSliderWrapper>
          <StyledText
            hasdeclaredfontsize="48px"
            hasdeclaredfontcolor="var(--blue)"
            hasdeclaredfontweight="bold"
          >
            Co o mnie mówią
          </StyledText>

          <StyledSliderTextWrapper ref={sliderRef}>
            <AnimatePresence initial={false} custom={direction}>
              {allDatoData.nodes
                .filter((_, iterator) => iterator === slideIndex)
                .map(slideItem => (
                  <StyledSlide
                    key={slide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      duration: 0.8,
                    }}
                  >
                    <div>
                      <StyledWrapperWithoutPagination>
                        <StyledLeftArrow>
                          <StyledButtonPagination
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 0.5 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(-1)}
                          >
                            <IoIosArrowBack />
                          </StyledButtonPagination>
                        </StyledLeftArrow>
                        <StyledRightArrow>
                          <StyledButtonPagination
                            whileHover={{
                              scale: 1.2,
                              transition: { duration: 0.5 },
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => paginate(1)}
                          >
                            <IoIosArrowForward />
                          </StyledButtonPagination>
                        </StyledRightArrow>

                        <StyledText
                          hasdeclaredmaxwidth="780px"
                          hasdeclaredtextalign="center"
                        >
                          {slideItem.whatTheSayAboutMeContent}
                        </StyledText>
                      </StyledWrapperWithoutPagination>
                      <StyledUserWrapper>
                        <StyledUserImage>
                          <StyledUserImageImg
                            fluid={slideItem.customerPhoto.fluid}
                          />
                        </StyledUserImage>
                        <StyledText
                          hasdeclaredfontcolor="#23242A"
                          hasdeclaredfontweight="bold"
                          hasdeclaredfontsize="30px"
                          hasdeclaredpadding="0 0 0 27px"
                        >
                          {slideItem.customerName}
                        </StyledText>
                      </StyledUserWrapper>
                    </div>
                  </StyledSlide>
                ))}
            </AnimatePresence>
          </StyledSliderTextWrapper>
        </StyledSliderWrapper>
        <StyledPagination>
          {allDatoData.nodes.map((slideItem, iterator) => (
            <StyledSpanPagination
              active={iterator === slideIndex}
            ></StyledSpanPagination>
          ))}
        </StyledPagination>
      </StyledWhatSayAboutMeWrapper>
    </StyledWhatSayAboutMeSection>
  )
}

export default WhatSayAboutMe
