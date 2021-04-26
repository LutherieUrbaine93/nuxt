//--------------------------- Circles animation -----------------------------------
console.log("hey I'm in the RIGHT PLACE")
const theMoons = document.querySelectorAll(".moon")

const transitionDurations = ["transitionDuration", "msTransitionDuration", "webkitTransitionDuration", "mozTransitionDuration", "oTransitionDuration"]
const transitionDurationProperty = getSupportedPropertyName(transitionDurations)

const transforms = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"]
const transformProperty = getSupportedPropertyName(transforms)

function setInitialProperties() {
  for (let i = 0; i < theMoons.length; i++) {
    const theMoon = theMoons[i]
    setTranslate3DTransform(theMoon)
  }
  setTimeout(kickOffTransition, 100)

}
setInitialProperties()

function kickOffTransition() {
  for (let i = 0; i < theMoons.length; i++) {
    const theMoon = theMoons[i]

    theMoon.addEventListener("transitionend", updatePosition, false)
    theMoon.addEventListener("webkitTransitionEnd", updatePosition, false)
    theMoon.addEventListener("mozTransitionEnd", updatePosition, false)
    theMoon.addEventListener("msTransitionEnd", updatePosition, false)
    theMoon.addEventListener("oTransitionEnd", updatePosition, false)
    theMoon.addEventListener("mouseover", stopPosition, false)
    theMoon.addEventListener("mouseout", releasePosition, false)

    setTranslate3DTransform(theMoon)
    setTransitionDuration(theMoon)
  }
}

function updatePosition(e) {
  let theThing = e.currentTarget,
    theThingClean = e.propertyName.indexOf("transform") != -1

  if (theThingClean) {
    setTranslate3DTransform(theThing)
    setTransitionDuration(theThing)
  }
}
function stopPosition(e) {
  let theThing = e.currentTarget
  let computedStyle = window.getComputedStyle(theThing)
  const somePause = computedStyle.getPropertyValue("transform")
  //	somePause = new WebKitCSSMatrix(computedStyle.webkitTransform)

  theThing.style.transform = somePause;
//	theThing.style.webkitTransform = "translate3d(" + somePause.m41 + "px," + somePause.m42 +  "px, 0)"
  theThing.style.transitionProperty = "none"
//	theThing.style.webkitTransitionProperty = "none"

//   console.log(e.propertyName.indexOf("webit"))
}

function releasePosition(e) {
  let theThing = e.currentTarget

  theThing.style.transitionProperty = "transform"
	theThing.style.webkitTransition = "-webkit-transform"

  setTranslate3DTransform(theThing)
  setTransitionDuration(theThing)
}

function MoonsRandomPositionX() {
  return Math.round( - Math.random() * window.innerWidth + Math.random() * window.innerWidth)
}
function MoonsRandomPositionY() {
  return Math.round( - Math.random() * window.innerHeight + Math.random() * window.innerHeight)
}

function setTranslate3DTransform(element) {
  const moonSpread = 50
  element.style[transformProperty] = "translate3d(" + MoonsRandomPositionX()/moonSpread + "px" + ", " + MoonsRandomPositionY()/moonSpread + "px" + ", 0)"
}

function getRandomDuration() {
  return (.5 + Math.random() * 3) + "s"
}

function getSupportedPropertyName(properties) {
  for (let i = 0; i < properties.length; i++) {
    if (typeof document.body.style[properties[i]] != "undefined") {
      return properties[i]
    }
  }
  return null
}

function setTransitionDuration(element) {
  if (transitionDurationProperty) {
    element.style[transitionDurationProperty] = getRandomDuration()
  }
}
