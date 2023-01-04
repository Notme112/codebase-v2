import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function removeEventText(s: ReSiCodebaseSettingsType): Promise<void> {
    let element = document.querySelector('.brand')?.querySelector('.label');
    if(element && element.innerHTML.toLowerCase().includes('event')) element.remove();
}