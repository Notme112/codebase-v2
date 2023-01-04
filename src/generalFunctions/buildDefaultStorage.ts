import { modules } from "../modules";

export function buildDefaultStorage() {
    let obj: {
        [k: string]: any
    } = {};
    modules.forEach((el) => {
        obj[el.settingsTarget] = false;
        if (el.hasSettings) {
            el.settings.forEach((setting) => {
                if (setting.subtarget && !obj[setting.subtarget]) obj[setting.subtarget] = {};
                if (setting.subtarget) obj[setting.subtarget][setting.settingsKey] = setting.default
                else obj[setting.settingsKey] = setting.default
            });
        }
    });
    return obj;
}