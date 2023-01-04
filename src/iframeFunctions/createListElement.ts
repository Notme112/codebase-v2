export function createListElement(){
    const element = document.createElement('li');
    element.id = 'Codebase';
    element.innerHTML = `ReSi-Codebase <i class="bi bi-gear" style="padding-left:5px;"></i>`
    document.querySelector('#darkMode')?.after(element);
    return element;
}