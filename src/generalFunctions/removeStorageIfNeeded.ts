import { buildDefaultStorage } from "./buildDefaultStorage";
import { LAST_REMOVED_STORAGE } from "./handleNewUser";

export function removeStorageIfNeeded() {
    if (localStorage.resiBaseRemovedStorage != LAST_REMOVED_STORAGE) {
        localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
        localStorage.resiBaseRemovedStorage = LAST_REMOVED_STORAGE;
    }
    if (localStorage.storage_resi_base == '[object Object]') {
        // @ts-ignore
        systemMessage({
            'title': `Fehler in den Codebase-Einstellungen`,
            'message': `Es gab einen Fehler in den Codebase-Einstellungen, die Einstellungen wurden zurückgesetzt.`,
            'type': 'danger'
        });
        localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
    }
}