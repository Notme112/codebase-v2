import {
    variableIsIncorrect
} from "../generalFunctions/variableError";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function flogout(s: ReSiCodebaseSettingsType): Promise<void> {
    let element = document.querySelector<HTMLDivElement>('.brand-img');
    if (!element) {
        variableIsIncorrect('element (toplist-position)', element)
        return;
    }
    element.style.display = 'inline';
    element.style.paddingRight = '20px'
    element.innerHTML = '<i class="bi bi-box-arrow-right"></i>'
    element.addEventListener('click', async () => {
        fetch('/api/deauthenticate').then(() => {
            location.reload();
        }).catch((err: Error) => {
            console.error(err);
        })
    });
}