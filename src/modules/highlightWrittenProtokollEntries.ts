import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function highlightWrittenMissionProtokollEntries(s: ReSiCodebaseSettingsType): Promise<void> {
    if(!location.pathname.includes("mission/")) return;
    function main() {
        let els = document.querySelectorAll('.fa-pencil');
        els.forEach((el, i) => {
            if(!el.parentElement || !(el.parentElement instanceof HTMLElement) || !el.parentElement.parentElement || !(el.parentElement.parentElement instanceof HTMLElement)) return;
            el.parentElement.parentElement.style.backgroundColor = document.body.classList.contains('dark') ? 'darkblue' : 'lightgreen';
        });
    }
    main();
    setInterval(main, 1000);
}