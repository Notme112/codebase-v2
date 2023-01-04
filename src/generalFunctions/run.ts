import { modules } from "../modules";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function run(s:ReSiCodebaseSettingsType){
    modules.forEach(async (el) => {
        try {
            if (s[el.settingsTarget]) {
                if (location.pathname != "/" && el.allSite) {
                    await el.func(s);
                }
                if (location.pathname == "/") {
                    await el.func(s);
                }
            }
        } catch (e) {
            console.error(`Fehler im Modul ${el.name}: ${e}`)
        }
    });
}