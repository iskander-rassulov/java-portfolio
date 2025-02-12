function downloadCV() {
    const cvUrl = "files/cv.pdf"; // Укажите путь к файлу CV
    
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Iskandar_Rassulov_CV.pdf"; // Имя файла при скачивании
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}