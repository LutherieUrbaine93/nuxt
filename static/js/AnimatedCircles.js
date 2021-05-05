//--------------------------- Circles animation -----------------------------------
// (function() {
window.onbeforeunload = function() { console.log('Hey did you just get back!?') }

  const theCircles = document.querySelectorAll(".circle-item")

  const transitionDurations = ["transitionDuration", "msTransitionDuration", "webkitTransitionDuration", "mozTransitionDuration", "oTransitionDuration"]
  const transitionDurationProperty = getSupportedPropertyName(transitionDurations)

  const transforms = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"]
  const transformProperty = getSupportedPropertyName(transforms)


  function setInitialProperties() {
    for (let i = 0; i < theCircles.length; i++) {
      const theCircle = theCircles[i]
      setTranslate3DTransform(theCircle)
    }
    setTimeout(kickOffTransition, 100)
  }
  setInitialProperties()

  function kickOffTransition() {
    for (let i = 0; i < theCircles.length; i++) {
      const theCircle = theCircles[i]

      theCircle.addEventListener("transitionend", updatePosition, false)
      theCircle.addEventListener("webkitTransitionEnd", updatePosition, false)
      theCircle.addEventListener("mozTransitionEnd", updatePosition, false)
      theCircle.addEventListener("msTransitionEnd", updatePosition, false)
      theCircle.addEventListener("oTransitionEnd", updatePosition, false)
      theCircle.addEventListener("mouseover", stopPosition, false)
      theCircle.addEventListener("mouseout", releasePosition, false)

      setTranslate3DTransform(theCircle)
      setTransitionDuration(theCircle)
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
    let theThing = e.currentTarget,
        computedStyle = window.getComputedStyle(theThing),
        somePause = computedStyle.getPropertyValue("transform")
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

  function CirclesRandomPositionX() {
    return Math.round( - Math.random() * window.innerWidth + Math.random() * window.innerWidth)
  }
  function CirclesRandomPositionY() {
    return Math.round( - Math.random() * window.innerHeight + Math.random() * window.innerHeight)
  }

  function setTranslate3DTransform(element) {
    const circleSpread = 50
    element.style[transformProperty] = "translate3d(" + CirclesRandomPositionX()/circleSpread + "px" + ", " + CirclesRandomPositionY()/circleSpread + "px" + ", 0)"
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

// })()
