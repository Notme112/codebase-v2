import { getAPI } from "../generalFunctions/getAPI";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function gesamtmuenzen (s: ReSiCodebaseSettingsType): Promise<void> {
    const r = await getAPI('user', false);
    let newElement = document.createElement('li');
    // @ts-ignore
    newElement.innerHTML = `<li>${r?.muenzenTotal?.toLocaleString()} Münzen</li>`;
    document.querySelector('#darkMode')?.after(newElement);
}