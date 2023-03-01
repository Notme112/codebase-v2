export function showLoader() {
    let loader = document.querySelector<HTMLElement>('#codebaseLoader');
    if (loader)
        loader.style.display = 'block';
}
