import { getAPI } from "../generalFunctions/getAPI";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function differenceToAnotherUser (s: ReSiCodebaseSettingsType): Promise<void> {
    if (!location.pathname.includes('/profile/')) return
    const res = await getAPI('user')
    // @ts-ignore
    var diff = parseInt(document.querySelectorAll<HTMLElement>('.detail-subtitle b')[2]?.textContent?.replaceAll('.', '') || '0') - res.muenzenTotal,
        negative;
    diff<0 ? negative = true : negative = false;
    diff = Math.abs(diff);
    let newElement = document.createElement('span');
    newElement.innerHTML = `<i class="bi bi-plus-slash-minus"></i> Differenz: <b>${diff.toLocaleString()}</b> Münzen ${negative ? 'weniger als Du' : 'mehr als Du'}<br>`
    document.querySelectorAll('.detail-subtitle')[1]?.after(newElement);
}