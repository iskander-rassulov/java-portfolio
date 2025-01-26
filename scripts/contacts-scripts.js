document.addEventListener('DOMContentLoaded', () => {
  const contactsTile = document.querySelector('.contacts-tile');

  // Контакты с иконками
  const contacts = [
    { icon: '/icons/github-icon.png', content: '<a href="https://github.com/iskander-rassulov" target="_blank">GitHub</a>' },
    { icon: '/icons/email-icon.png', content: '<a href="mailto:iskander.rassulov.2002@gmail.com">iskander.rassulov.2002@gmail.com</a>' },
    { icon: '/icons/linkedin-icon.png', content: '<a href="https://linkedin.com/in/iskandar-rassulov" target="_blank">LinkedIn</a>' },
  ];

  // Добавляем контакты в тайл
  contacts.forEach(contact => {
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
      <img src="${contact.icon}" alt="icon">
      ${contact.content}
    `;
    contactsTile.appendChild(contactDiv);
  });
});
