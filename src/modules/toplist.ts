import { getAPI } from "../generalFunctions/getAPI";
import { variableIsIncorrect } from "../generalFunctions/variableError";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function toplist(s: ReSiCodebaseSettingsType): Promise<void> {
    const r = await getAPI('user');
    let element = document.querySelectorAll('.dropdown-content li')[3];
    if (!element) {
        variableIsIncorrect('element (toplist-position)', element)
        return;
    }
    // @ts-ignore
    element.innerHTML = `Topliste: ${r.toplistRank}`;
}