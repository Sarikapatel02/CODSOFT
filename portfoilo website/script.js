function linkAction(e){
    e.preventDefault()

    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')

    // Remove the 'active' class from all links
    document.querySelectorAll('.nav__menu a').forEach(link => {
        link.classList.remove('active')
    })

    // Add the 'active' class to the current link
    e.target.classList.add('active')
}

document.getElementById('nav-menu').addEventListener('click', function(e){
    if(e.target.tagName === 'A'){
        linkAction(e)
    }
})

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav__menu a')

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}

function handleIntersect(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const activeNavLink = document.querySelector(`.nav__menu a[href*='${entry.target.id}']`)
            activeNavLink.classList.add('active')
        } else {
            const activeNavLink = document.querySelector(`.nav__menu a[href*='${entry.target.id}']`)
            activeNavLink.classList.remove('active')
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)

sections.forEach(section => {
    observer.observe(section)
})