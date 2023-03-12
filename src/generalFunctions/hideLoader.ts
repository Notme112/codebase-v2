export function hideLoader() {
    let loader = parent.document.querySelector<HTMLElement>('#codebaseLoader');
    if (loader)
        loader.style.display = 'none';
}
