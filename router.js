import project from './pages/project.js'
const home = document.body.childNodes

console.log(project);
console.log(home);

const routes = {
  '/': {title: document.title, render: home},
  '/project': {title: `Project | ${document.title}`, render: project}
}

const router = () => {
  let view = routes[location.pathname]
  console.log(document.title);
  console.log(view.title);
  
  if (view) {
    document.title = view.title
    app.innerHTML = view.render()
  } else {
    history.replaceState('', '', '/')
    router()
  }
}

window.addEventListener('click', e => {
  if (e.target.matches('[data-link]')) {
    e.preventDefault()
    history.pushState('', '', e.target.href)
    router()
  }
})

window.addEventListener('popstate', router)
window.addEventListener('DOMContentLoaded', router)