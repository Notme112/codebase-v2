import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function highlightOwnMissionProtokollEntries(s: ReSiCodebaseSettingsType): Promise<void> {
    if(!location.pathname.includes("mission/")) return;
    let els = document.querySelectorAll('#missionLogs > tbody > tr > td:nth-child(2)');
    els.forEach((el, i) => {
        if(!els[i]?.innerHTML?.trim()?.startsWith('<svg')) {
            if(!el?.parentElement || !(el?.parentElement instanceof HTMLElement)) return;
            el.parentElement.style.backgroundColor = document.body.classList.contains('dark') ? 'blue' : 'yellow';
        }
    })
}