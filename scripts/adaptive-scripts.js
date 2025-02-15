function adjustRootFontSize() {
    let width = window.innerWidth;
    let fontSize = Math.max(12, Math.min(16, width / 120)); // Границы от 12px до 16px
    
    document.documentElement.style.fontSize = fontSize + 'px';
}

window.addEventListener("resize", adjustRootFontSize);
adjustRootFontSize(); // Запуск при загрузке страницы
