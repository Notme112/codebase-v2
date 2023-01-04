import { modules } from "../modules";
import { ReSiCodebaseSettingsType } from "../types/codebase";
import { reload } from "./reload";

export function checkSettings(s:ReSiCodebaseSettingsType) {
    if (!localStorage.storage_resi_base) reload();
    modules.forEach((el) => {
        if (el.hasSettings) {
            el.settings.forEach((setting) => {
                if (setting.subtarget && !s[setting.subtarget]) {
                    s[setting.subtarget] = {};
                }
            })
        }
    });
}