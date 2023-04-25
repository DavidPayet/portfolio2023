const heroTitles = document.querySelectorAll('.hero-title-part')
const heroTitleToSplit = ['Développeur', 'Web']

heroTitles.forEach((heroTitle, i) => {

  heroTitleToSplit[i].split('').forEach(letter => {
    heroTitle.innerHTML += `
      <div class="letter-anim">
        <span data-letter="${letter}">${letter}</span>
      </div>
    `
  })
})

const firstTitlePartLetters = document.querySelectorAll('.hero-title-part.first .letter-anim')
const secondTitlePartLetters = document.querySelectorAll('.hero-title-part.second .letter-anim')
const heroLines = document.querySelectorAll('.hero-line')

let tlHero = gsap.timeline()

tlHero
  .from(firstTitlePartLetters, { x: -10, opacity: 0, stagger: .1, duration: 1, ease: 'power4.out' })
  .from(secondTitlePartLetters, { x: 10, y: -10, opacity: 0, stagger: .1, duration: 1, ease: 'power4.out' }, '-=1')
  .from(heroLines, { width: 0 }, '-=.5')


gsap.registerPlugin(ScrollTrigger)

const animationOnSrcoll = (elementToAnim, start, toggleActions, y, opacity, duration, stagger, delay, scaleX, transformOrigin) => {
  gsap
    .from(
      elementToAnim,
      {
        scrollTrigger: {
          trigger: elementToAnim,
          start: start,
          toggleActions: toggleActions
        },
        y: y,
        opacity: opacity,
        duration: duration,
        stagger: stagger,
        delay: delay,
        scaleX: scaleX,
        transformOrigin: transformOrigin
      }
    )
}

const heroSubTitle = document.querySelector('.hero-subtitle')
animationOnSrcoll(heroSubTitle, 'center 90%', 'play', 30, 0, .5,)

const heroCaption = document.querySelector('.hero-caption')
animationOnSrcoll(heroCaption, 'center 85%', 'play', 30, 0, 1)

const heroContent = document.querySelectorAll('.hero-content p')
animationOnSrcoll(heroContent, 'center 85%', 'play', 30, 0, 1, .4)

const navListItems = document.querySelectorAll('.navigation-list-item')
animationOnSrcoll(navListItems, 'center 85%', 'play', 30, 0, 1, .2)

const captionTitles = document.querySelectorAll('.caption-title')
captionTitles.forEach(captionTitle => {
  captionTitle = captionTitle.querySelectorAll('span')

  animationOnSrcoll(captionTitle, 'center 85%', 'play', 10, 0, .5, .3, .6)
})

const underliners = gsap.utils.toArray('.underliner')
underliners.forEach(underline => {
  gsap
    .from(
      underline,
      {
        scrollTrigger: {
          trigger: underline,
          start: 'center 85%',
          toggleActions: 'play none none reverse'
        },
        '--underlineWidth': '0px',
        duration: .2
      }
    )
})


import projects from './data/projects.json'

const workList = document.querySelector('.work-list')

projects.forEach((project) => {
  let oneProject = document.createElement('article')

  oneProject.classList = 'work-list-item'

  oneProject.innerHTML = `
    <a href="${project.project_link}" target="_blank" class="work-list-item-inner">
      <img class="work-picture" src="${project.project_picture}" alt="${project.title}-illustration">
    </a>

    <h4 class="work-list-item-title">
      <a href="${project.project_link}" target="_blank" data-title="${project.title}"></a>
    </h4>

    <p class="work-list-item-role">${project.role}</p>

    <a href="${project.project_link}" target="_blank" class="button">
      <span class="button-text">voir le projet</span>
    </a>
  `
  workList.appendChild(oneProject)

  const workTitle = document.querySelector(`[data-title="${project.title}"]`)
  const title = workTitle.getAttribute('data-title').split('')

  title.forEach(letter => {
    workTitle.innerHTML += `
      <div class="work-title-letter">
        <span>${letter}</span>
      <div>
    `
  })
})


const workPicture = document.querySelectorAll('.work-picture')
workPicture.forEach(pic => {
  animationOnSrcoll(pic, 'center 95%', 'play none none reverse', 30, 0, .5)
})

const articles = document.querySelectorAll('.work-list-item')
articles.forEach((article, i) => {
  const titleToHover = document.querySelectorAll('.work-list-item-title')
  const workPicture = document.querySelectorAll('.work-picture')

  titleToHover[i].addEventListener('mouseover', () => {
    workPicture[i].style.filter = 'sepia(80%) brightness(50%) hue-rotate(290deg)'
    workPicture[i].style.transform = 'scale(.98)'
  })

  titleToHover[i].addEventListener('mouseleave', () => {
    workPicture[i].style.filter = ''
    workPicture[i].style.transform = ''
  })
})

const allWorkTitle = gsap.utils.toArray('.work-list-item-title a')
allWorkTitle.forEach(workTitleLetterAnim => {
  workTitleLetterAnim = workTitleLetterAnim.querySelectorAll('.work-title-letter')

  animationOnSrcoll(workTitleLetterAnim, 'center 70%', 'play none none reverse', 50, 0, .5, .04)
})

const projectRole = gsap.utils.toArray('.work-list-item-role')
projectRole.forEach(role => {
  animationOnSrcoll(role, 'center 85%', 'play none none reverse', 30, 0, .8)
})


const aboutSubtitle = document.querySelectorAll('.about-subtitle')
animationOnSrcoll(aboutSubtitle, 'center 85%', 'play', 30, 0, 1, .4)

const aboutContent = document.querySelectorAll('.about-content p')
animationOnSrcoll(aboutContent, 'center 85%', 'play', 30, 0, 1, .4)

const displaySummaryTitle = (element, title) => {
  const titleToDisplay = document.querySelector(element)
  const summaryTitleToSplit = title

  summaryTitleToSplit.split('').forEach(letter => {
    titleToDisplay.innerHTML += `
      <span class="summary-letter" data-letter="${letter}">${letter}</span>
    `
  })
}

displaySummaryTitle('.summary-title', 'Compétences')
displaySummaryTitle('.summary-title.connection', 'Connexion')

const summaryTitle = document.querySelector('.summary-title')
animationOnSrcoll(summaryTitle, 'center 85%', 'play', 25, 0, .8, 0, .5)

const summaryTitleUnderline = gsap.utils.toArray('.summary-title-underline')
summaryTitleUnderline.forEach(underline => {
  animationOnSrcoll(underline, 'center 85%', 'play none none reverse', 0, 1, .4, 0, 0, 0, 'left')
})


const summaryContent = document.querySelector('.summary-content')
const summaryContentToSplit = ['JavaScript', 'Vue JS', 'React JS']

summaryContentToSplit.forEach(item => {
  const summaryContentList = document.createElement('li')

  item.split('').forEach(letter => {
    summaryContentList.innerHTML += `
      <span class="summary-letter" data-letter="${letter}">${letter}</span>
    `
  })

  summaryContent.appendChild(summaryContentList)
})


const connectionContent = document.querySelectorAll('.summary-content.connection > li > a')
const connectionContentToSplit = ['GitHub', 'LinkedIn', 'Email']

connectionContentToSplit.forEach((item, i) => {
  item.split('').forEach(letter => {
    connectionContent[i].innerHTML += `
        <span class="summary-letter" data-letter="${letter}">${letter}</span>
      `
  })
})

const allSummaryContent = document.querySelectorAll('.about-section .summary-content li')
animationOnSrcoll(allSummaryContent, 'center 85%', 'play', 25, 0, .8, .2, .5)

const summaryTitleConnection = document.querySelector('.summary-title.connection')
animationOnSrcoll(summaryTitleConnection, 'center 85%', 'play', 25, 0, .8, 0, .5)

const summaryContentConnexion = document.querySelectorAll('.summary-content.connection li')
animationOnSrcoll(summaryContentConnexion, 'center 90%', 'play', 25, 0, .8, .2, .5)