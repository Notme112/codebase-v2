import { getAPI } from "../generalFunctions/getAPI";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function showNAChance(s: ReSiCodebaseSettingsType) {
    if (!location.pathname.includes('/mission/')) return
    // @ts-ignore
    const data = (await getAPI('missions', false))[parseInt(document.querySelector('.detail-title')?.getAttribute('missionid') || '0')];
    let newElement = document.createElement('span');
    // @ts-ignore
    newElement.innerHTML = `Grundvariante: ${data.patients.min == data.patients.max ? data.patients.min : data.patients.min + '-' + data.patients.max} Patienten, ${data.patients.naChance}\% NA-Wahrscheinlichkeit`
    newElement.classList.add('label', 'label-info')
    if (data.patients) document.querySelector('#s5')?.after(newElement)
}