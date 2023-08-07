const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.btn__burger')
const navBrand = document.querySelector('.brand')
const allNavLinks = document.querySelectorAll('.nav__link')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	nav.classList.toggle('nav--active')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) 
        {
			navBtn.classList.add('black-bars-color')
            navBrand.classList.add('brand--color')
		} 
        else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) 
        {
			navBtn.classList.remove('black-bars-color')
            navBrand.classList.remove('brand--color')
		}
	})
}



navBtn.addEventListener('click', handleNav)
handleCurrentYear()
window.addEventListener('scroll', handleObserver)
