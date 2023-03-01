export function hideLoader() {
    let loader = document.querySelector<HTMLElement>('#codebaseLoader');
    if (loader)
        loader.style.display = 'none';
}
