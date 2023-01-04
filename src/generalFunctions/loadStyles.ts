export function loadStyles(){
    let css = document.createElement('style');
    css.innerHTML = `.codebase:focus{outline: none;}`;
    document.head?.appendChild(css);
}