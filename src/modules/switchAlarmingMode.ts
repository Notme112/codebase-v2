import { ReSiCodebaseSettingsType } from "../types/codebase"

export async function switchAlarmingMode(s: ReSiCodebaseSettingsType): Promise<void> {
    if (!location.pathname.includes('/mission/')) return
    document.addEventListener('keyup', (e) => {
        if (e.key.toLowerCase() == s.switchAlarmingMode.keyToSwitch) {
            document.querySelector<HTMLElement>('.detail-right .button-gray')?.click()
        }
    })
}