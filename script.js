const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const headline = document.querySelector('.headlineSection');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('active');
  headline.classList.toggle('active');
});
document.querySelectorAll('.nav-item').forEach((e) => e.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('active');
  headline.classList.remove('active');
}));

const object = [
  {
    id: 1,
    Name: 'Tonic',
    Title: 'CANOPY',
    project: 'Back End Dev',
    year: '2015',
    img: './images/desk1.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
    skill1: 'html',
    skill2: 'CSS',
    skill3: 'JavaScript',
  },
  {
    id: 2,
    Name: 'Multi-Post Stories',
    Title: 'CANOPY',
    project: 'Back End Dev',
    year: '2015',
    img: './images/desk2.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
    skill1: 'html',
    skill2: 'CSS',
    skill3: 'JavaScript',
  },
  {
    id: 3,
    Name: 'Tonic',
    Title: 'CANOPY',
    project: 'Back End Dev',
    year: '2015',
    img: './images/desk3.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
    skill1: 'bootstrap',
    skill2: 'react',
    skill3: 'github',
  },
  {
    id: 4,
    Name: 'Multi-Post Stories',
    Title: 'CANOPY',
    project: 'Back End Dev',
    year: '2015',
    img: './images/desk4.png',
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea'",
    skill1: 'Sass',
    skill2: 'Html',
    skill3: 'JavaScript',
  },
];

function CreatePopup(popupWindow) {
  const projectPop = document.createElement('div');
  projectPop.setAttribute('class', 'cardpopUp');
  projectPop.setAttribute('id', 'cardpopUp');
  const projectPopContainer = document.createElement('div');
  projectPopContainer.setAttribute('class', 'popupContainer');
  const popupTitle = document.createElement('h2');
  popupTitle.setAttribute('class', 'projectName');
  popupTitle.innerHTML = popupWindow.Name;
  const techPop = document.createElement('div');
  techPop.setAttribute('class', 'skillsSection');
  const Title = document.createElement('p');
  Title.setAttribute('class', 'skillsectionElements');
  Title.innerHTML = popupWindow.Title;
  const project = document.createElement('li');
  project.innerHTML = popupWindow.project;
  const year = document.createElement('li');
  year.innerHTML = popupWindow.year;
  const ProjectPopImageDiv = document.createElement('div');
  ProjectPopImageDiv.setAttribute('class', 'image-container');
  const popImage = document.createElement('img');
  popImage.setAttribute('src', popupWindow.img);
  popImage.setAttribute('alt', 'project image');
  const description = document.createElement('p');
  description.setAttribute('class', 'popDescription');
  description.innerHTML = popupWindow.description;
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const skills = document.createElement('div');
  skills.setAttribute('class', 'lang');
  const skill1 = document.createElement('p');
  skill1.innerHTML = popupWindow.skill1;
  const skill2 = document.createElement('p');
  skill2.innerHTML = popupWindow.skill2;
  const skill3 = document.createElement('p');
  skill3.innerHTML = popupWindow.skill3;
  const popBtns = document.createElement('div');

  popBtns.setAttribute('class', 'pop-btn');
  const liveBtn = document.createElement('button');
  liveBtn.setAttribute('class', 'live');
  liveBtn.setAttribute('type', 'button');
  liveBtn.innerHTML = 'See live <i class="fas fa-arrow-circle-right fa-lg"></i>';
  const sourceBtn = document.createElement('button');
  sourceBtn.setAttribute('class', 'source');
  sourceBtn.setAttribute('type', 'button');
  sourceBtn.innerHTML = 'See Source <i class="fab fa-github fa-lg"></i>';

  const closeBtnPop = document.createElement('i');
  closeBtnPop.className = 'fas fa-times';
  closeBtnPop.addEventListener('click', () => {
    const popup = document.querySelector('.cardpopUp');
    if (popup) {
      popup.parentElement.removeChild(popup);
    }
  });

  techPop.append(Title);
  techPop.append(project);
  techPop.append(year);
  ProjectPopImageDiv.append(popImage);
  skills.append(skill1);
  skills.append(skill2);
  skills.append(skill3);
  popBtns.append(liveBtn);
  popBtns.append(sourceBtn);
  container.append(skills);

  container.append(popBtns);
  projectPopContainer.append(closeBtnPop);
  projectPopContainer.append(popupTitle);
  projectPopContainer.append(techPop);
  projectPopContainer.append(ProjectPopImageDiv);
  projectPopContainer.append(description);
  projectPopContainer.append(container);
  projectPop.append(projectPopContainer);
  return projectPop;
}

body.querySelectorAll('.projectButton').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    if (!document.querySelector('.cardpopUp')) {
      const popupWindow = object[parseInt(event.target.id, 10)];
      const popup = CreatePopup(popupWindow);
      body.append(popup);
    }
  });
});
