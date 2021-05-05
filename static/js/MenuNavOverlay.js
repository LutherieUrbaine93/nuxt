// selected elements
const navTrigger = document.getElementById('nav-trigger')
const nav = document.getElementById('nav')
const labels = document.getElementsByClassName('nav-label')

// Event Listening
navTrigger.addEventListener('click', navTriggerToggle)
labels.forEach(item => {
  item.addEventListener('click', navTriggerToggle)
})

function navTriggerToggle(e) {
  let closed = (navTrigger.className.indexOf('close') > 0)
  if (closed) {
    navTrigger.className = 'nav-trigger open'
    nav.className = 'out'
  } else {
    navTrigger.className = 'nav-trigger close'
    nav.className = 'in'
  }
}
