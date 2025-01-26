document.addEventListener('DOMContentLoaded', () => {
    const aboutTile = document.querySelector('.about-tile');
  
    // Секции для About Me
    const sections = [
      `
        <p><strong>Age:</strong> 23 </p>
        <p><strong>Citizenship:</strong> Kazakhstan </p>
        <p><strong>Location:</strong> Remote / Central Asia</p>
      `,
      `
        <p><strong>Languages:</strong></p>
        <p>English (C1), Russian (C2)<br>Kazakh (A2), Uzbek (A1)</p>
        
      `,
      `
        <p><strong>Bachelor's Degree:</strong></p>
        <p>Computer Science<br>Suleyman Demirel University<br>2019-2023</p>
      `,
    ];
  
    let currentSection = 0;
  
    // Функция для обновления контента
    function updateAbout() {
      aboutTile.innerHTML = ''; // Очищаем содержимое
  
      // Добавляем заголовок
      const titleElement = document.createElement('h2');
      titleElement.textContent = 'About Me';
      aboutTile.appendChild(titleElement);
  
      // Добавляем текущую секцию
      const content = document.createElement('div');
      content.innerHTML = sections[currentSection];
      aboutTile.appendChild(content);
  
      // Добавляем индикатор секций
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      sections.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentSection) {
          dot.classList.add('active'); // Текущая секция выделена
        }
        indicator.appendChild(dot);
      });
      aboutTile.appendChild(indicator);
    }
  
    // Начальная загрузка
    updateAbout();
  
    // Смена секции при нажатии
    aboutTile.addEventListener('click', () => {
      currentSection = (currentSection + 1) % sections.length; // Циклический переход
      updateAbout();
    });
  });
  