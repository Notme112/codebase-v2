export function createLoaderSvg(d: Document){
    let element = document.createElement('span');
    element.style.position = "fixed";
    element.style.bottom = "10px";
    element.style.right = "10px"
    element.style.padding = "5px";
    element.style.zIndex = '30';
    element.id = "codebaseLoader";
    element.innerHTML = '<i class="bi bi-hourglass-top"></i>';
    d.body.appendChild(element);
    setInterval(() => {
        if(element.querySelector<HTMLElement>('.bi')?.classList.contains('bi-hourglass-top')){
            element.querySelector<HTMLElement>('.bi')?.classList.remove('bi-hourglass-top')
            element.querySelector<HTMLElement>('.bi')?.classList.add('bi-hourglass-split')
        } else if(element.querySelector<HTMLElement>('.bi')?.classList.contains('bi-hourglass-split')){
            element.querySelector<HTMLElement>('.bi')?.classList.remove('bi-hourglass-split')
            element.querySelector<HTMLElement>('.bi')?.classList.add('bi-hourglass-bottom')
        } else if(element.querySelector<HTMLElement>('.bi')?.classList.contains('bi-hourglass-bottom')){
            element.querySelector<HTMLElement>('.bi')?.classList.remove('bi-hourglass-bottom')
            element.querySelector<HTMLElement>('.bi')?.classList.add('bi-hourglass-top')
        }
    }, 1000)
}