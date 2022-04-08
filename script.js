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
    'A daily selection of privately personalized reads no accounts or sign-ups required.',
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
    'Experimental content creation feature that allows users to  add  to an existing story over the course of a day without spamming their friends',
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
    "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..",
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
    'A smart assistant to make driving more safe, efficient,and fun by unlocking your most expensive computer: your car..',
    skill1: 'Sass',
    skill2: 'Html',
    skill3: 'JavaScript',
  },
];

const work = document.querySelector('#work');

for (let i = 1; i < object.length; i += 1) {
  work.innerHTML += `<div  class="card">
  <div class="picturescreenshot">
  <img class="gridimg"  src="${object[i].img}"  alt="projectScreenshot">
  </div>
  <div class="TextArea">
      <h2>${object[i].Name}</h2>
      <ul class="infolist">
          <li class="design font ">${object[i].Title}</li>
          <li class="BulleDesign">${object[i].project}</li>
          <li class="BulleDesign">${object[i].year}</li>
      </ul>
      <p>${object[i].description}</p>
          <ul class="design infolist">
              <li class="liststyle design span">${object[i].skill1}</li> 
             <li class="liststyle design span">${object[i].skill2}</li> 
               <li class="liststyle design span">${object[i].skill3}</li> 
          </ul>
          <button class="btn projectButton" id=${i}>See Project</button>
  </div>
</div>`;
}

function CreatePopup(popupWindow) {
  const projectPop = document.createElement('div');
  projectPop.setAttribute('class', 'cardpopUp');
  projectPop.setAttribute('id', 'cardpopUp');
  const projectPopContainer = document.createElement('div');
  projectPopContainer.setAttribute('class', 'popupContainer');
  const popupTitle = document.createElement('h2');
  popupTitle.setAttribute('class', 'projectName');
  popupTitle.innerHTML = popupWindow.Name;
  const technologiespop = document.createElement('div');
  technologiespop.setAttribute('class', 'skillsSection');
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

  technologiespop.append(Title);
  technologiespop.append(project);
  technologiespop.append(year);
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
  projectPopContainer.append(technologiespop);
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

const form = document.querySelector('.Contact-form');
const text = document.querySelector('#text');
form.addEventListener('submit', (event) => {
  const emailValue = form.elements.email.value;
  if ((emailValue.toLowerCase() !== emailValue)) {
    event.preventDefault();
    text.classList.add('active');
    text.innerHTML = 'Form not sent.Please Enter <br> an email adress in Lowercase';
  } else {
    form.submit();
  }
});

// ######## Local storage ########

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      (e instanceof DOMException && e.code === 22)
      || e.code === 1014 || e.name === 'QuotaExceededError'
      || (e.name === 'NS_ERROR_DOM_QUOTA_REACHED' && storage && storage.length !== 0)
    );
  }
}

if (storageAvailable('localStorage')) {
  const inputs = [form.name, form.email, form.message];
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      const storagData = {
        fullName: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };
      localStorage.setItem('data', JSON.stringify(storagData));
    });
  });
  const getData = JSON.parse(localStorage.getItem('data'));
  if (getData) {
    form.name.value = getData.fullName;
    form.email.value = getData.email;
    form.message.value = getData.message;
  }
}
