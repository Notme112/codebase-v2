import { buildDefaultStorage } from "../generalFunctions/buildDefaultStorage";
import { reload } from "../generalFunctions/reload";

export function resetStorage(){
    // @ts-ignore
    modal('Alle Einstellungen zurücksetzen', 'Willst du wirklich alle Einstellungen zurücksetzten? Die aktuellen Einstellungen sind dann unwiderruflich verloren!', 'Ja, zurücksetzen', 'Nein, behalten', () => {
        localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
        reload()
    }, () => {});
}