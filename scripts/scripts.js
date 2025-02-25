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
