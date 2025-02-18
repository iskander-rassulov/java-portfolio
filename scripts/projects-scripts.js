document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.querySelector('.project-container');
  
    // Список проектов
    const projects = [
      {
        name: 'File Converter',
        image: 'images/screen-file-converter.png',
        description: 'This application allows you to convert images, audio, video and documents to various formats right from your browser',
        technologies: ['Java', 'Spring Boot', 'FFmpeg', 'Rest API', 'Gradle', 'PostgreSQL',  'CORS'],
        viewLink: 'https://www.youtube.com/watch?v=M_9XGhGIzjk',
        githubLink: 'https://github.com/iskander-rassulov/SPRING-file-converter',
      },
      {
        name: 'Database Wizard',
        image: 'images/screen-dbwizard.png',
        description: 'Database Wizard is a tool for managing database tables through an intuitive web interface',
        technologies: ['Java', 'Spring Boot', 'Rest API', 'Maven', 'PostgreSQL'],
        viewLink: 'https://www.youtube.com/watch?v=D8zTbJWPgSg',
        githubLink: 'https://github.com/iskander-rassulov/SPRING-file-converter',
      },
      {
        name: 'Medical Records Management System',
        image: 'images/screen-med-records.png',
        description: 'Medical Records Management System is a simplified system for managing electronic medical records',
        technologies: ['Java', 'JavaFX', 'PostgreSQL', 'FXML'],
        viewLink: 'https://www.youtube.com/watch?v=80VjwO4nTTg',
        githubLink: 'https://github.com/iskander-rassulov/JAVA_-_medical-records-management-system',
      },
      {
        name: 'Pomodoro Lo-Fi',
        image: 'images/screen-lofi.png',
        description: 'Lofi Pomodoro is a simple and effective Pomodoro timer with lofi music',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        viewLink: 'https://iskander-rassulov.github.io/JS-lofi-pomodoro/',
        githubLink: 'https://github.com/iskander-rassulov/JS-lofi-pomodoro',
      },
      {
        name: 'Katakana Hiragana Learn',
        image: 'images/screen-katakana.png',
        description: 'A project to learn and practice katakana and hiragana with a simple quiz',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        viewLink: 'https://iskander-rassulov.github.io/JS-learn-katakana-hiragana/',
        githubLink: 'https://github.com/iskander-rassulov/JS-learn-katakana-hiragana',
      },{
        name: 'To-Do list',
        image: 'images/screen-todo.png',
        description: 'A simple To-Do List application written in vanilla JavaScript, HTML, and CSS',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        viewLink: 'https://iskander-rassulov.github.io/JS-to-do-list//',
        githubLink: 'https://github.com/iskander-rassulov/JS-to-do-list',
      },
      {
        name: 'QR Code Generator',
        image: 'images/screen-qr.png',
        description: 'Simple QR code generator for text and url',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        viewLink: 'https://iskander-rassulov.github.io/JS-qr-code-generator/',
        githubLink: 'https://github.com/iskander-rassulov/JS-qr-code-generator',
      },
      
    ];
  
    // Функция для создания проекта
    function createProject({ name, image, description, technologies, viewLink, githubLink }) {
      const project = document.createElement('div');
      project.classList.add('project');
  
      project.innerHTML = `
        <img src="${image}" alt="${name}" class="project-image">
        <h2 class="project-title">${name}</h2>
        <p class="project-description">${description}</p>
        <ul class="project-technologies">
          ${technologies.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
        <div class="project-buttons">
          <a href="${viewLink}" target="_blank" class="btn view-project">Explore</a>
          <a href="${githubLink}" target="_blank" class="btn github-link">GitHub</a>
        </div>
      `;
  
      return project;
    }
  
    // Добавляем проекты в контейнер
    projects.forEach(projectData => {
      const projectElement = createProject(projectData);
      projectContainer.appendChild(projectElement);
    });
  });
  