document.addEventListener('DOMContentLoaded', () => {
    const experienceTile = document.querySelector('.experience-tile');
  
    // Заголовок
    const title = document.createElement('h2');
    title.textContent = 'Experience';
    experienceTile.appendChild(title);
  
    // Временный контент
    const content = document.createElement('p');
    content.textContent = 'Nothing at this moment';
    experienceTile.appendChild(content);
  });
  