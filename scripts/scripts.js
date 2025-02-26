document.addEventListener("DOMContentLoaded", function() {
    const experienceInfo = [
        {
            title: "File Converter",
            technologies: "Java, Spring Boot, FFmpeg",
            description: "A simple web-based file conversion tool powered by Spring Boot and FFmpeg/LibreOffice",
            points: [
                "Developed a web-based file converter supporting 19+ formats, including images, audio, video and documents",
                "Integrated FFmpeg for media processing and LibreOffice for document conversion with seamless browser-based previews"
            ],
            links: {
                view: "https://www.youtube.com/watch?v=M_9XGhGIzjk",
                github: "https://github.com/iskander-rassulov/SPRING_-_file-converter"
            }
        },
        {
            title: "Database Wizard",
            technologies: "Java, Spring Boot, PostgreSQL, Rest API",
            description: "A web-based database management tool for interacting with PostgreSQL databases efficiently.",
            points: [
                "Developed a user-friendly interface for connecting to databases, viewing, modifying and managing tables",
                "Implemented 5 features for data insertion, deletion, modifying, searching with real-time updates and export to .csv"
            ],
            links: {
                view: "https://www.youtube.com/watch?v=D8zTbJWPgSg",
                github: "https://github.com/iskander-rassulov/SPRING-database-wizard"
            }
        }
    ];

    const experienceContainer = document.getElementById("experience-info");

    experienceInfo.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("experience-item");

        const titleElement = document.createElement("h3");
        titleElement.textContent = item.title;
        itemElement.appendChild(titleElement);

        const technologiesElement = document.createElement("p");
        technologiesElement.innerHTML = `<strong>Technologies:</strong> ${item.technologies}`;
        itemElement.appendChild(technologiesElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = item.description;
        itemElement.appendChild(descriptionElement);

        const pointsElement = document.createElement("ul");
        item.points.forEach(point => {
            const listItem = document.createElement("li");
            listItem.textContent = point;
            pointsElement.appendChild(listItem);
        });
        itemElement.appendChild(pointsElement);

        const linksElement = document.createElement("div");
        linksElement.classList.add("links");

        const viewLink = document.createElement("a");
        viewLink.href = item.links.view;
        viewLink.target = "_blank";
        viewLink.textContent = "View Project";
        linksElement.appendChild(viewLink);

        const githubLink = document.createElement("a");
        githubLink.href = item.links.github;
        githubLink.target = "_blank";
        githubLink.textContent = "GitHub";
        linksElement.appendChild(githubLink);

        itemElement.appendChild(linksElement);

        experienceContainer.appendChild(itemElement);

        // Add a separator line if it's not the last item
        if (index < experienceInfo.length - 1) {
            const separator = document.createElement("hr");
            separator.style.margin = "2.4vh 0";
            experienceContainer.appendChild(separator);
        }
    });
});









document.addEventListener("DOMContentLoaded", function() {
    const educationInfo = [
        {
            period: "2019-2023",
            degree: "Bachelor",
            field: "Computer Science",
            institution: "Suleyman Demirel University"
        },
        {
            period: "2023-2024",
            degree: "Master",
            field: "Engineering",
            institution: "University of Cassino and Southern Lazio"
        }
    ];

    const educationContainer = document.getElementById("education-info");

    educationInfo.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("education-item");

        const periodElement = document.createElement("h3");
        periodElement.textContent = item.period;
        itemElement.appendChild(periodElement);

        const degreeFieldContainer = document.createElement("div");
        degreeFieldContainer.classList.add("degree-field");

        const degreeElement = document.createElement("p");
        degreeElement.innerHTML = `<strong>Degree:</strong> ${item.degree}`;
        degreeFieldContainer.appendChild(degreeElement);

        const fieldElement = document.createElement("p");
        fieldElement.innerHTML = `<strong>Field:</strong> ${item.field}`;
        degreeFieldContainer.appendChild(fieldElement);

        itemElement.appendChild(degreeFieldContainer);

        const institutionElement = document.createElement("p");
        institutionElement.innerHTML = `<strong>Institution:</strong> ${item.institution}`;
        itemElement.appendChild(institutionElement);

        educationContainer.appendChild(itemElement);

        // Add a separator line if it's not the last item
        if (index < educationInfo.length - 1) {
            const separator = document.createElement("hr");
            separator.style.margin = "2.4vh 0";
            educationContainer.appendChild(separator);
        }
    });
});



















document.addEventListener("DOMContentLoaded", function() {
    const aboutMeInfo = "Hello! My name is Iskandar Rassulov. I am a citizen of the Republic of Kazakhstan and currently 23 years old. I can speak languages: Russian [C2], English [C1] and Kazakh [A2]. I enjoy writing logic for healthy web application performance";

    const aboutMeContainer = document.getElementById("about-me-info");
    
    // Создаем параграф для всего текста
    const infoElement = document.createElement("p");
    infoElement.textContent = aboutMeInfo;
    
    // Добавляем класс для стилизации (опционально)
    infoElement.className = "about-me-text";
    
    // Добавляем элемент в контейнер
    aboutMeContainer.appendChild(infoElement);
});


document.addEventListener("DOMContentLoaded", function() {
    const contactInfo = {
        github: "https://github.com/iskander-rassulov",
        email: "iskander.rassulov.2002@gmail.com",
        linkedin: "https://www.linkedin.com/in/iskandar-rassulov/" // Замените на вашу ссылку LinkedIn, если есть
    };

    const linksContainer = document.getElementById("social-links");
    
    // Создаем контейнер для ссылок
    const linksBox = document.createElement("div");
    linksBox.classList.add("links-box");
    
    // GitHub ссылка
    const githubLink = document.createElement("a");
    githubLink.href = contactInfo.github;
    githubLink.target = "_blank";
    githubLink.textContent = "GitHub Link";
    githubLink.classList.add("link-item");
    linksBox.appendChild(githubLink);
    
    // Email
    const emailLink = document.createElement("a");
    emailLink.href = "mailto:" + contactInfo.email;
    emailLink.textContent = contactInfo.email;
    emailLink.classList.add("link-item");
    linksBox.appendChild(emailLink);
    
    // LinkedIn ссылка
    const linkedinLink = document.createElement("a");
    linkedinLink.href = contactInfo.linkedin;
    linkedinLink.target = "_blank";
    linkedinLink.textContent = "LinkedIn Link";
    linkedinLink.classList.add("link-item");
    linksBox.appendChild(linkedinLink);
    
    // Добавляем блок ссылок в контейнер
    linksContainer.appendChild(linksBox);
});