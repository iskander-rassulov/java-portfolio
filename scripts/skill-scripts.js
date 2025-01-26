document.addEventListener('DOMContentLoaded', () => {
    const skillsTile = document.querySelector('.skills-tile');
  
    // Разбиваем список на части
    const sections = [
      [
        { category: 'Programming', skills: 'Java, JavaScript' },
        { category: 'Frameworks', skills: 'Spring (Boot, Data, Security, MVC)' },
        { category: 'Databases', skills: 'PostgreSQL' },
        { category: 'Containers', skills: 'Docker, Kubernetes' },
      ],
      [
        { category: 'APIs', skills: 'RESTful APIs' },
        { category: 'Build Tools', skills: 'Maven, Gradle' },
        { category: 'Testing', skills: 'JUnit, Mockito' },
        { category: 'Messaging', skills: 'Apache Kafka' },
      ],
      [
        { category: 'Architecture', skills: 'Microservices (Spring Cloud)' },
        { category: 'ORM', skills: 'JPA/Hibernate' },
        { category: 'Version Control', skills: 'Github' },
        { category: 'CI/CD', skills: 'Jenkins, GitLab CI' },
      ],
    ];
  
    let currentSection = 0;
  
    // Функция для обновления контента
    function updateSkills() {
      skillsTile.innerHTML = ''; // Очищаем содержимое
  
      // Добавляем заголовок
      const titleElement = document.createElement('h2');
      titleElement.textContent = 'Skill set';
      skillsTile.appendChild(titleElement);
  
      // Добавляем текущий список
      const ul = document.createElement('ul');
      sections[currentSection].forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.category}:</strong> ${item.skills}`;
        ul.appendChild(li);
      });
      skillsTile.appendChild(ul);
  
      // Добавляем индикатор текущей секции
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      sections.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentSection) {
          dot.classList.add('active'); // Текущая секция жирная
        }
        indicator.appendChild(dot);
      });
      skillsTile.appendChild(indicator);
    }
  
    // Начальная загрузка
    updateSkills();
  
    // Смена секции при нажатии
    skillsTile.addEventListener('click', () => {
      currentSection = (currentSection + 1) % sections.length; // Циклический переход
      updateSkills();
    });
  });
  