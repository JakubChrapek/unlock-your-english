// For working with drag slider and moving after clicking button
// Unfortunately framer-motion doesn't provide a possibility to get easily current value of transform
export const translateXForElement = element => {
  const transform = element.style.transform
  console.log(transform)

  if (!transform || transform.indexOf("translate3d(") < 0) {
    return 0
  }

  const extractTranslateX = transform.match(/translate3d\((-?\d+)/)

  return extractTranslateX && extractTranslateX.length === 2
    ? parseInt(extractTranslateX[1], 10)
    : 0
}
