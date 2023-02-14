import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function settingsInNavbar(s: ReSiCodebaseSettingsType): Promise<void> {
    let newElement = document.createElement("div");
    newElement.classList.add("openCodebaseSettings");
    newElement.innerHTML = `<i class="bi bi-gear codebase" data-tooltip="ReSi-Codebase-Einstellungen"></i>`;
    document.querySelector(".dropdown")?.prepend(newElement);
    newElement.addEventListener('click', () => {
        let element = document.querySelector('#Codebase')
        if (element instanceof HTMLElement) element.click();
    });
}