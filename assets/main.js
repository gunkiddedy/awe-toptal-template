let prevScrollpos = window.scrollY
const navbar = document.getElementById('navbar')
const section1 = document.getElementById('section-one')
const section2 = document.getElementById('section-two')
const imgPlaceholder = document.getElementById('img-placeholder')

// set animations fade out from left, right or bottom
function setAnimations() {
    const reveals = document.querySelectorAll(".reveal")

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active")
            reveals[i].classList.remove("inactive")
        } 
        else { // uncomment this to stop the animations loop
            reveals[i].classList.remove("active")
            reveals[i].classList.add("inactive")
        }
    }
}

// show/hide the image placeholder fixed/relative
function showImagePlaceholder (type, value) {
    if (type.toLowerCase() === 'fixed') {
        const screenWidth = window.innerWidth
        const pageWidth = 1440
        const leftPosition = (screenWidth / pageWidth) * (100 / 7)
        const leftImage = leftPosition + '%'
        
        /**
         * set the dinamically left position of placeholder image
        */
        if (screenWidth > pageWidth) {
            imgPlaceholder.style.left = leftImage
        } else {
            imgPlaceholder.style.left = '7%'
        }

        if (window.scrollY >= value) {
            // console.log('>= 2200')
            imgPlaceholder.classList.remove( 
                'relative',
                'opacity-0',
                'transition-all',
                'duration-300'
            )
            imgPlaceholder.classList.add( 
                'fixed',
                'opacity-100',
                'transition-all',
                'duration-300',
                'transform',
                'scale-105'
            )
        } else {
            // console.log('< 2200')
            imgPlaceholder.classList.add( 
                'opacity-0',
                'transition-all',
                'duration-300',
                'relative',
            )
            imgPlaceholder.classList.remove( 
                'fixed',
                'opacity-100',
                'transition-all',
                'duration-300',
                'transform',
                'scale-105'
            )
        }
    } else {
        if (window.scrollY >= value) {
            // console.log('>= 2200')
            imgPlaceholder.classList.add( 
                'reveal',
                'fade-left',
                'active',
                'opacity-100',
                'transition-all',
                'duration-300',
                'scale-105'
            )
        }
    }
}

window.onscroll = function() {
    setAnimations()

    /**
     * if section 2 has overflowed the section 1 
    */ 
    if ((section2.offsetTop + section2.offsetHeight) > window.scrollY) {
        section1.classList.add('sticky', 'top-0')
    }

    // console.log(window.scrollY);

    /**
     * if scroll y has reachead the minimum height value of 1000, 
     * then run the wipe animations
     */ 
    const wiper1 = document.getElementById('wiper1')
    if (window.scrollY >= 1000) {
        // console.log('wiper up', window.scrollY)
        wiper1.classList.remove('wipe-gone')
        wiper1.classList.add('wipe-left')
    } else {
        // console.log('wiper down', window.scrollY)
        wiper1.classList.remove('wipe-left')
        wiper1.classList.add('wipe-gone')
    }

    /**
     * show/hide the image placeholder fixed or relative
    */
    if (window.innerWidth >= 1280) {
        // console.log('2000')
        showImagePlaceholder('fixed', 2000)
    } else if (window.innerWidth >= 1024) {
        // console.log('1950')
        showImagePlaceholder('fixed', 1950)
    } else {
        showImagePlaceholder('relative', 1950)
    }

    /**
     * hide or show navbar depending on page scroll
    */
    const currentScrollPos = window.scrollY
    // scroll up
    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = '0'
        navbar.classList.add('bg-nav')
    }  
    // scroll down
    else {
        navbar.style.top = "-90px"
    }

    /**
     * not scrolled yet / on the top position
    */
    if (currentScrollPos === 0) {
        navbar.classList.remove('bg-nav')
    }

    prevScrollpos = currentScrollPos
}

// window.addEventListener("scroll", setAnimations)

// open mobile menu
function openNav() {
    document.body.style.overflow = 'hidden'
    document.getElementById("navbarBackdrop").classList.add('fixed', 'inset-0')
    document.getElementById("sidenav").classList.remove('-top-[500%]')
    document.getElementById("sidenav").classList.add('top-0') 
}

// close mobile menu
function closeNav() {
    document.getElementById("navbarBackdrop").classList.remove('fixed', 'inset-0')
    document.getElementById("sidenav").classList.remove('top-0')
    document.getElementById("sidenav").classList.add('-top-[500%]')
    document.body.style.overflow = ''
}

// call closeNav if window is resized
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1023) {
        console.log('close navbar in size', window.innerWidth)
        closeNav()
    }
})

// window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
//     const portrait = e.matches;
//     if (portrait) {
//         console.log('portrait', portrait)
//     } else {
//         console.log('portrait', portrait)
//     }
// });