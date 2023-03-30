const projectCards = [
  {
    id: 1,
    title: 'Blue Dreams Yatch',
    img: 'images/Blue-Dreams.jfif',
    description: 'This is an app in which you can reserve a Yatch, delete a yatch booking and show all your reserved yatchs. This app is a webpage where you can see the details of every yatch and the city of depart, in there you can reserve all the yatchs you want, and also cancel it, after that, you can check out all the bookings made, with the yatch, date, and city. This page was made using the most advanced program languages such as Ruby on Rails, React, Redux, and a custom API to ensure the best experience.',
    tags: ['React', 'Ruby on rails', 'API', 'Authentification'],
    link: 'https://develop.d394vyctawdkiv.amplifyapp.com/',
    source: 'https://github.com/dgonzalesi/blue-dreams-front-end',
  },
  {
    id: 2,
    title: 'Pokedex-API',
    img: 'images/Pokedex.png',
    description: 'This is a webpage in which you can see Pokémon from a list, see the types, and attacks, and also you can use a search bar to find the Pokémon of your liking.This project utilizes one of the best programming languages, using React with the help of Redux to store the information, all connected to an external API that comes with the Pokémon library.',
    tags: ['React', 'API'],
    link: 'https://63ebfb31fcaaba1c0da1bd0f--extraordinary-buttercream-fbbff9.netlify.app/',
    source: 'https://github.com/renercrows/Pokedex-API',
  },
  {
    id: 3,
    title: 'Concert-Page',
    img: 'images/Concert.png',
    description: 'This is a concert webpage where you can see the information about the new music event, this event works with popular singers as Sia and Maroon 5. It was developed with the help of some of the best technologies such as HTML, CSS, and JavaScript, using principally DOM to manipulate the information. Do not hesitate to come and see the project.',
    tags: ['html', 'CSS', 'JavaScript'],
    link: 'https://renercrows.github.io/Concert-Page/',
    source: 'https://github.com/renercrows/Concert-Page',
  },
  {
    id: 4,
    title: 'Book-Store',
    img: 'images/Book.png',
    description: 'This webpage where you can set up your books, make the title, the author, and the description, and also allows you to see it in the same page. The project was built using some of the best technologies such as React and Redux, with also the use of Webpack. Feel free to come and check out the project.',
    tags: ['Ruby on Rails', 'Bootstrap', 'Redux'],
    link: 'https://63ec08f0fcaaba26a5a1c021--beautiful-cat-a84a46.netlify.app/',
    source: 'https://github.com/renercrows/Book-Store',
  },
];

const projectSection = document.querySelector('.recent-works');

function createCard(project) {
  const pCard = document.createElement('article');
  pCard.classList.add('work-card');

  const img = document.createElement('img');
  img.classList.add('image-placeholder');
  img.setAttribute('src', project.img);
  img.setAttribute('alt', 'Project thumbnail');
  pCard.appendChild(img);

  if (project.id % 2 === 0) {
    pCard.classList.add('left-block');
    img.classList.add('left-side');
  }

  const pContent = document.createElement('div');
  pContent.classList.add('work-content');
  pCard.appendChild(pContent);

  const pHeader = document.createElement('h3');
  pHeader.classList.add('work-header');
  pHeader.textContent = project.title;
  pContent.appendChild(pHeader);

  const pText = document.createElement('p');
  pText.classList.add('work-p');
  pText.textContent = 'This is one of the four projects presented, check out the "See Project" button to see more about the project.';
  pContent.appendChild(pText);

  const pTags = document.createElement('ul');
  pTags.classList.add('tags-section');
  pContent.appendChild(pTags);

  project.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    tag.classList.add('tag');
    pTags.appendChild(tag);

    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', '#');

    anchorTag.textContent = project.tags[index];
    tag.appendChild(anchorTag);
  });

  const pBtn = document.createElement('button');
  pBtn.setAttribute('type', 'button');
  pBtn.setAttribute('id', project.id);
  pBtn.classList.add('work-card-button');
  pBtn.textContent = 'See Project';

  pContent.appendChild(pBtn);

  projectSection.appendChild(pCard);
}

projectCards.forEach(createCard);

const modalContainer = document.getElementById('modal-container');

function closeModal() {
  modalContainer.classList.remove('show');
}

function createModal(id) {
  // Search the project with the same id in the projects array
  const project = projectCards.find((project) => Number(project.id) === Number(id));
  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  modalContainer.appendChild(modal);

  const modalHeaderContainer = document.createElement('div');
  modalHeaderContainer.classList.add('modal-header-container');
  modal.appendChild(modalHeaderContainer);

  const modalHeader = document.createElement('h3');
  modalHeader.classList.add('modal-header');
  modalHeader.textContent = project.title;
  modalHeaderContainer.appendChild(modalHeader);

  const modalClose = document.createElement('div');
  modalClose.classList.add('modal-close');
  modalHeaderContainer.appendChild(modalClose);
  modalClose.addEventListener('click', closeModal);

  for (let i = 0; i < 3; i += 1) {
    const closeSpan = document.createElement('span');
    closeSpan.classList.add('line');
    modalClose.appendChild(closeSpan);
  }

  const modalImg = document.createElement('img');
  modalImg.classList.add('modal-image');
  modalImg.setAttribute('src', project.img);
  modalImg.setAttribute('alt', 'Project thumbnail');
  modal.appendChild(modalImg);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modal.appendChild(modalContent);

  const modalP = document.createElement('p');
  modalP.classList.add('modal-p');
  modalP.textContent = project.description;
  modalContent.appendChild(modalP);

  const modalTags = document.createElement('ul');
  modalTags.classList.add('tags-section');
  modalContent.appendChild(modalTags);

  project.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    tag.classList.add('tag');
    modalTags.appendChild(tag);

    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', '#');

    anchorTag.textContent = project.tags[index];
    tag.appendChild(anchorTag);
  });

  const modalBtnContainer = document.createElement('div');
  modalBtnContainer.setAttribute('id', 'modal-btn-container');
  modalContent.appendChild(modalBtnContainer);

  const liveBtn = document.createElement('a');
  liveBtn.setAttribute('id', 'live');
  liveBtn.setAttribute('href', project.link);
  liveBtn.setAttribute('target', '_blank');
  liveBtn.textContent = 'See Live';
  const liveIcon = document.createElement('img');
  liveIcon.setAttribute('src', 'images/live-icon.svg');
  liveIcon.setAttribute('alt', 'Arrow link icon');
  liveBtn.appendChild(liveIcon);
  modalBtnContainer.appendChild(liveBtn);
  const srcBtn = document.createElement('a');
  srcBtn.setAttribute('id', 'source');
  srcBtn.setAttribute('href', project.source);
  srcBtn.setAttribute('target', '_blank');
  srcBtn.textContent = 'See Source';
  const srcIcon = document.createElement('img');
  srcIcon.setAttribute('src', 'images/githubicon.png');
  srcIcon.setAttribute('alt', 'Github icon');
  srcBtn.appendChild(srcIcon);
  modalBtnContainer.appendChild(srcBtn);
}

function cleanModal() {
  const div = document.getElementById('modal-container');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function openModal() {
  modalContainer.classList.add('show');
  window.onclick = (event) => {
    if (event.target === modalContainer) {
      modalContainer.classList.remove('show');
    }
  };
}

projectSection.addEventListener('click', (e) => {
  const elementId = e.target.id;
  // Only for button See project
  if (e.target.classList.contains('work-card-button')) {
    cleanModal(modalContainer.id);
    createModal(elementId);
    openModal();
  }
});

const hmgIcon = document.querySelector('.hmg-menu');
const overlayMenu = document.querySelector('.overlay-menu');
const closeBtn = document.querySelector('.close');

hmgIcon.addEventListener('click', () => {
  hmgIcon.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  hmgIcon.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n
  .addEventListener('click', () => {
    hmgIcon.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

document.querySelectorAll('.close').forEach((n) => n
  .addEventListener('click', () => {
    hmgIcon.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

// Contact Form Validation

const submitBtn = document.getElementById('submit-btn');
const error = document.getElementById('error-msg');
const emailInput = document.getElementById('email-at');

error.style.color = 'red';
error.style.padding = '0.5em';
error.style.textAlign = 'center';

submitBtn.onclick = (event) => {
  const emailValue = document.getElementById('email-at').value;
  const lowerEmail = emailValue.toLowerCase();

  if (emailValue !== lowerEmail) {
    error.textContent = 'Please check the email format';
    emailInput.classList.toggle('email-error-msg');
    event.preventDefault();
  }
};

// LocalStorage input data preservation
const inputFields = document.getElementById('contact');
const nameInput = document.getElementById('name-input');
const msgInput = document.getElementById('msg-input');

let inputData;

inputFields.addEventListener('input', () => {
  const nameValue = nameInput.value;
  const email = emailInput.value;
  const msg = msgInput.value;

  // make email format error disappear with new entry
  error.textContent = '';
  emailInput.classList.remove('email-error-msg');

  if (!nameValue && !email && !msg) {
    return;
  }

  inputData = {
    nameValue,
    email,
    msg,
  };

  localStorage.setItem('inputData', JSON.stringify(inputData));
});

inputData = JSON.parse(localStorage.getItem('inputData'));

// Data Store in localStorage
if (inputData) {
  nameInput.value = inputData.nameValue;
  emailInput.value = inputData.email;
  msgInput.value = inputData.msg;
}
