import {
    ReSiCodebaseSettingsType
} from "../types/codebase";

export async function autofocusMissionNew(s: ReSiCodebaseSettingsType): Promise<void> {
    if (location.href.includes('/missionNew/')){
        document.querySelector<HTMLElement>('#' + s.autofocusMissionNewOptions.field)?.focus();
    }
}