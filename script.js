const tl = gsap.timeline({ repeat: -1 });


//animate chevrons past event name
// tl.from('.chevrons', { duration: 2.5, opacity: 0, x: '-300%', ease: 'power2' })


// //fade frame 1 out
// tl.to('.slide1', {opacity: 0, duration: 1, delay: 4})
// //fade frame 2 in and out
// tl.to('.slide2', {opacity: 1, duration: 1.25, ease: 'power1'})
// tl.to('.slide2', {opacity: 0, duration: 1, delay: 4})
// //fade frame 3 in and out
// tl.to('.slide3', {opacity: 1, duration: 1.25, ease: 'slow'})
// tl.to('.slide3', {opacity: 0, duration: 1, delay: 4})
// //fade frame 4 in and out
// tl.to('.slide4', {opacity: 1, duration: 1.25})
// tl.to('.slide4', {opacity: 0, duration: 1, delay: 4})
// //fade frame 5 in and out
// tl.to('.slide5', {opacity: 1, duration: 1.25})
// tl.to('.slide5', {opacity: 0, duration: 1, delay: 4})
// //fade frame 1 back in 
// tl.to('.slide1', {opacity: 1, duration: 1.25})

//legal pop-up functionality
const legalOpen = document.getElementById('legal')
const legalPopUp = document.getElementById('popUpContainer')
const legalClose = document.getElementById('popUpContainer')

const showPopUp = () => {
legalPopUp.style.display = "block"
}

const closePopUp = () => {
legalPopUp.style.display = "none"
}

legalOpen.onclick = function() {showPopUp()}
legalClose.onclick = function() {closePopUp()}

