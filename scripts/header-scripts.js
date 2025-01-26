document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('header nav ul li a');
  const sections = document.querySelectorAll('section');

  // Обработчик кликов по навигации
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Отключаем переход по якорям
      const targetId = link.getAttribute('href').substring(1); // Получаем ID секции
      const targetSection = document.getElementById(targetId);

      // Скрываем все секции
      sections.forEach(section => {
        section.classList.remove('fade-in');
        section.classList.add('fade-out');
      });

      // Показываем целевую секцию
      targetSection.classList.remove('fade-out');
      targetSection.classList.add('fade-in');
    });
  });
});
