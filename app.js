import rectangle from './rectangle'
import { format } from 'url';

const projectsBackground = document.querySelector('.projects');
const projects = document.querySelector('.projects .small-width');
const projectsArticles = projects.querySelectorAll('article');
const belt = document.querySelectorAll('.belt');
const beltMobile = document.querySelector('.belt-mobile');
const skillsBackground = document.querySelector('.skills');
const skills = document.querySelector('.skills .small-width');
const aboutmeBackground = document.querySelector('.about-me');
const aboutme = document.querySelectorAll('.about-me article');
const contacts = document.querySelectorAll('.contacts a');
const contactsSmall = document.querySelector('.contacts .small-width');
const contactsElements = document.querySelectorAll('.contacts-element');
const contactsBackground = document.querySelector('.contacts');
const canvas = document.querySelector('.projects-and-canvas');
const seeMore = document.querySelector('.see-more');
rectangle();

if (screen.width >= 1024) {
  for (let i = 4; i < projectsArticles.length - 1; i++) {
    projectsArticles[i].style.display = 'none';
  }
  const menu = document.querySelectorAll('ul>li');
  seeMore.addEventListener('click', function () {
    belt[0].classList.remove("belt-color2");
    belt[0].classList.add("belt-color1");
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove("show-elem");
      aboutme[i].classList.add("hide-elem");
    }
    projectsArticles[0].classList.add('project-move0');
    projectsArticles[1].classList.add('project-move1');
    projectsArticles[2].classList.add('project-move2');
    projectsArticles[3].classList.add('project-move3');
    projectsArticles[4].classList.add('project-move4');
    projectsArticles[5].style.display = 'none';
  });
  menu[0].addEventListener('click', function () {
    if (contacts[0].classList.contains('contact-move1')) {
      contacts[0].classList.remove('contact-move1');
      contacts[0].classList.add('contact-move1-remove');
    }
    if (contacts[1].classList.contains('contact-move2')) {
      contacts[1].classList.remove('contact-move2');
      contacts[1].classList.add('contact-move2-remove');
    }
    if (contacts[2].classList.contains('contact-move3')) {
      contacts[2].classList.remove('contact-move3');
      contacts[2].classList.add('contact-move3-remove');
    }
    if (contacts[3].classList.contains('contact-move4')) {
      contacts[3].classList.remove('contact-move4');
      contacts[3].classList.add('contact-move4-remove');
    }
    skills.classList.add("show-elem");
    skills.classList.remove("hide-elem");
    aboutmeBackground.style.cssText = '';
    for (let i = 0; i < belt.length; i++) {
      belt[i].style.cssText = '';
    }
    for (let i = 1; i < projectsArticles.length; i++) {
      projectsArticles[i].style.cssText = '';
      if (i >= 4 && i < projectsArticles.length - 1) {
        projectsArticles[i].style.display = 'none';
      }
    }
    if (aboutme[0].classList.contains("hide-elem")) {
      for (let i = 0; i < aboutme.length; i++) {
        aboutme[i].classList.add("show-elem");
        aboutme[i].classList.remove("hide-elem");
      }
    }
    belt[0].classList.remove("belt-color1");
    belt[0].classList.add("belt-color2");
    skillsBackground.classList.add("blue-belt");
    projectsBackground.classList.add("hide-projects");
    projectsBackground.classList.remove("blue-belt");
    projects.classList.add("hide-elem");
    projects.classList.remove("show-elem");
    projects.classList.remove("bg-projects");
    canvas.classList.remove("projects-and-canvas");
  })
  menu[1].addEventListener('click', function () {
    if (contacts[0].classList.contains('contact-move1')) {
      contacts[0].classList.remove('contact-move1');
      contacts[0].classList.add('contact-move1-remove');
    }
    if (contacts[1].classList.contains('contact-move2')) {
      contacts[1].classList.remove('contact-move2');
      contacts[1].classList.add('contact-move2-remove');
    }
    if (contacts[2].classList.contains('contact-move3')) {
      contacts[2].classList.remove('contact-move3');
      contacts[2].classList.add('contact-move3-remove');
    }
    if (contacts[3].classList.contains('contact-move4')) {
      contacts[3].classList.remove('contact-move4');
      contacts[3].classList.add('contact-move4-remove');
    }
    projectsBackground.style.cssText = '';
    skillsBackground.classList.remove("blue-belt");
    projectsBackground.classList.add("blue-belt");
    projectsBackground.classList.remove("hide-projects");
    if (projects.classList.contains("hide-elem")) {
      projects.classList.add("show-elem");
      projects.classList.remove("hide-elem");
      projects.classList.add("bg-projects");
    }
    if (skills.classList.contains("show-elem")) {
      skills.classList.add("hide-elem");
      skills.classList.remove("show-elem");
      skills.classList.remove("skills-background");
    }
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove("show-elem");
      aboutme[i].classList.add("hide-elem");
    }
    belt[0].classList.add("belt-color1");
    belt[0].classList.remove("belt-color2");
    canvas.classList.remove("projects-and-canvas");

    projectsArticles[0].classList.add('project-move0');
    projectsArticles[1].classList.add('project-move1');
    projectsArticles[2].classList.add('project-move2');
    projectsArticles[3].classList.add('project-move3');
    projectsArticles[4].classList.add('project-move4');
    projectsArticles[5].style.display = 'none';
  })
  menu[2].addEventListener('click', function () {
    canvas.classList.remove("projects-and-canvas");
    projects.classList.add("hide-elem");
    projects.classList.remove("show-elem");
    projects.classList.remove("bg-projects");
    belt[0].classList.remove("belt-color2");
    belt[0].classList.add("belt-color1");
    for (var i = 0; i < aboutme.length; i++) {
      aboutme[i].classList.remove("show-elem");
      aboutme[i].classList.add("hide-elem");
    }
    skills.classList.remove("show-elem");;
    skills.classList.remove("skills-background");
    skills.classList.add("hide-elem");
    contacts[0].classList.remove('contact-move1-remove');
    contacts[0].classList.add('contact-move1');
    contacts[1].classList.remove('contact-move2-remove');
    contacts[1].classList.add('contact-move2');
    contacts[2].classList.remove('contact-move3-remove');
    contacts[2].classList.add('contact-move3');
    contacts[3].classList.remove('contact-move4-remove');
    contacts[3].classList.add('contact-move4');
  })
} else { //width < 1024

  const menu = document.querySelector('nav');
  const navLi = menu.querySelectorAll('li');
  menu.addEventListener('click', function () {
    for (let i = 0; i < navLi.length; i++) {
      if (navLi[i].classList.contains('nav-li')) {
        navLi[i].classList.remove('nav-li');
      } else {
        navLi[i].classList.add('nav-li');
      }
    }
  })
  navLi[0].addEventListener('click', function () {
    if (navLi[0].classList.contains('nav-li')) {
      aboutmeBackground.style.cssText = '';
      skillsBackground.style.cssText = '';
      projectsBackground.style.cssText = '';
      contactsBackground.style.cssText = '';
      belt[0].style.cssText = '';
      belt[1].style.cssText = '';
      belt[2].style.cssText = '';
      beltMobile.style.cssText = '';
    }
  })
  navLi[1].addEventListener('click', function () {
    if (navLi[1].classList.contains('nav-li')) {
      contactsBackground.style.cssText = '';
      aboutmeBackground.style.display = 'none';
      skillsBackground.style.display = 'none';
      projectsBackground.style.display = 'block';
      belt[0].style.display = 'none';
      belt[1].style.display = 'none';
      belt[2].style.display = 'block';
      beltMobile.style.cssText = '';

    }
  })
  navLi[2].addEventListener('click', function () {
    if (navLi[2].classList.contains('nav-li')) {
      aboutmeBackground.style.display = 'none';
      skillsBackground.style.display = 'none';
      projectsBackground.style.display = 'none';
      contactsBackground.style.display = 'block';
      belt[0].style.display = 'none';
      belt[1].style.display = 'none';
      belt[2].style.display = 'none';
      beltMobile.style.display = 'none';
    }
  })
}
