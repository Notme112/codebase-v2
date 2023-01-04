import {
    ReSiCodebaseSettingsType
} from "../types/codebase";

export async function autofocusMissionNew(s: ReSiCodebaseSettingsType): Promise<void> {
    if (location.href.includes('/missionNew/'))
        document.addEventListener('keyup', (e) => {
            if (e.key.toLowerCase() == s.resetAAO.keyToReset) {
                document.querySelectorAll<HTMLElement>('#mission-vehicle-group-by-vehicle .mission-vehicle.vehicle.mission-vehicle-selected')?.forEach(e => {
                    e.click()
                });
                document.querySelectorAll<HTMLElement>('.mission-aao-available').forEach(e => e.removeAttribute('aaocount'))
            }
        })
}