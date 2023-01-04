import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function collapseCardsInAssociation (s: ReSiCodebaseSettingsType): Promise<void> {
    if (!location.href.includes('/association/')) return;
    let autoCollapse = s.collapseCardsAssociation.autoCollapseCards;
    let containsVerbandsleitung = Array.from(document.querySelectorAll<HTMLElement>('.card-headline')).filter((e) => e.innerHTML.includes('Verbandsleitung'));
    containsVerbandsleitung.forEach((e) => {
        e.innerHTML = e.innerHTML + '<i class="bi bi-caret-up-fill pointer right card-collapse-toggle"></i>';
        e.parentElement?.classList.add(`card-collapse`);
        if(autoCollapse) e.parentElement?.classList.add('collapsed');
    });
}