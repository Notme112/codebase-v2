export function showLoader() {
    let loader = parent.document.querySelector<HTMLElement>('#codebaseLoader');
    if (loader)
        loader.style.display = 'block';
}
