import { checkSettings } from "../generalFunctions/checkSettings";
import { reload } from "../generalFunctions/reload";
import { validate } from "../generalFunctions/validate";
import { modules } from "../modules";
import { ReSiCodebaseSettingsType, Setting } from "../types/codebase";

export function saveCodebaseSettings(s:ReSiCodebaseSettingsType, frame:HTMLIFrameElement) {
    checkSettings(s);
    modules.forEach((el) => {
        s[el.settingsTarget] = frame?.contentDocument?.querySelector<HTMLInputElement>(`#${el.target}`)?.checked;
        if (el.hasSettings) {
            el.settings.forEach((setting: Setting) => {
                switch (setting.type) {
                    case 'checkbox':
                        if (setting.subtarget) {
                            s[setting.subtarget][setting.settingsKey] = frame?.contentDocument?.querySelector<HTMLInputElement>(`#${setting.target}`)?.checked;
                        } else {
                            s[setting.settingsKey] = frame?.contentDocument?.querySelector<HTMLInputElement>(`#${setting.target}`)?.checked;
                        }
                        break;
                    case 'input-text':
                        if (setting.subtarget) {
                            s[setting.subtarget][setting.settingsKey] = validate(frame?.contentDocument?.querySelector<HTMLInputElement>(`#${setting.target}`)?.value || '') || 'Fehler';
                        } else {
                            s[setting.settingsKey] = validate(frame?.contentDocument?.querySelector<HTMLInputElement>(`#${setting.target}`)?.value || '') || 'Fehler';
                        }
                        break;
                    case 'input-number':
                        if (setting.subtarget) {
                            s[setting.subtarget][setting.settingsKey] = parseFloat(frame?.contentDocument?.querySelector<HTMLInputElement>(`#${setting.target}`)?.value || '0') || 0;
                        } else {
                            s[setting.settingsKey] = parseFloat(frame?.contentDocument?.querySelector<HTMLInputElement>(`#${setting.target}`)?.value || '0') || 0
                        }
                        break;
                    case 'input-choose':
                        let value:string|number|boolean|undefined = frame?.contentDocument?.querySelector<HTMLInputElement>(`#${setting.target}`)?.value,
                            found = false;
                        setting.options.forEach((option: {value: string; name: string}) => {
                            if(option.value == value)  found = true;
                        });
                        if(!found) {
                            value = setting.default;
                        }
                        if (setting.subtarget) {
                            s[setting.subtarget][setting.settingsKey] = value;
                        } else {
                            s[setting.settingsKey] = value;
                        }
                        break;
                    default:
                        console.error(`Can't save setting ${setting.name} @ ${el.name} with target ${el.target} to storage @ subcategory ${setting.subtarget ?? 'none'} and category ${setting.settingsKey} with type ${setting.type}`);
                }                    
            })
        }
    })
    localStorage.storage_resi_base = JSON.stringify(s)
    reload();
}