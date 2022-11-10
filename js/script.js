// menu dropdown
const featuresMenu = document.querySelector('.features')
const companyMenu = document.querySelector('.company')
const featuresArrow = document.querySelector("img[alt='f-arrow']")
const companyArrow = document.querySelector("img[alt='c-arrow']")
const featuresDropdown = document.querySelector('.features-dropdown')
const companyDropdown = document.querySelector('.company-dropdown')
const mobileFeaturesMenu = document.querySelector('.mobile-features')
const mobileCompanyMenu = document.querySelector('.mobile-company')
const mobileFeaturesArrow = document.querySelector("img[alt='mf-arrow']")
const mobileCompanyArrow = document.querySelector("img[alt='mc-arrow']")
const mobileFeaturesDropdown = document.querySelector('.mobile-f-dropdown')
const mobileCompanyDropdown = document.querySelector('.mobile-c-dropdown')


featuresMenu.addEventListener('click', () => {
    featuresArrow.classList.toggle('rotate')
    featuresDropdown.classList.toggle('open')
})
companyMenu.addEventListener('click', () => {
    companyArrow.classList.toggle('rotate')
    companyDropdown.classList.toggle('open')
})

mobileFeaturesMenu.addEventListener('click', () => {
    mobileFeaturesArrow.classList.toggle('rotate')
    mobileFeaturesDropdown.classList.toggle('out')
})

mobileCompanyMenu.addEventListener('click', () => {
    mobileCompanyArrow.classList.toggle('rotate')
    mobileCompanyDropdown.classList.toggle('out')
})



// menu button
let hamburger = document.querySelector('.hamburger-menu')
let closeBtn = document.querySelector('.close')
let menu = document.querySelector('.mobile-menu')
const heroContainer = document.querySelector('.hero-container')
const darkBg = document.querySelector('.dark-bg')


hamburger.addEventListener('click', () => {
    menu.classList.add('active')
    darkBg.classList.add('dark')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
    darkBg.classList.remove('dark')
})