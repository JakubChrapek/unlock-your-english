const React = require("react")
const GlobalLayout = require("./src/components/Layouts/GlobalLayout").default
const AnimatePresence = require("framer-motion").AnimatePresence
const gsap = require("gsap").gsap

exports.wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <GlobalLayout {...props}>{element}</GlobalLayout>
    </AnimatePresence>
  )
}

exports.onClientEntry = () => {
  window.addEventListener("load", () => {
    const body = document.querySelector("body")
    body.className = document.body.className.replace(/\bno-js\b/, "")
    gsap.from(body, { opacity: 0, duration: 1, ease: "Power3.easeInOut" })
  })
}

exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), 50)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), 50)
  }
  return false
}
