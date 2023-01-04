import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function autocomplete(s: ReSiCodebaseSettingsType): Promise<void> {
    if (location.href.includes('/missionNew/')) return;
    document.querySelectorAll('input').forEach((e) => {
        e?.setAttribute('autocomplete', 'off');
    });
}