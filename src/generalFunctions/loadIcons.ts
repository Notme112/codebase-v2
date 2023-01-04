export function loadIcons(){
    let stylesheet = document.createElement('link')
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css';
    document.head.appendChild(stylesheet);
}