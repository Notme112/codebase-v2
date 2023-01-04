import { buildDefaultStorage } from "./buildDefaultStorage";
export const LAST_REMOVED_STORAGE = '1.5.1';
export function handleNewUser(){
    if (!localStorage.storage_resi_base) {
        //set storage
        localStorage.setItem(
            'storage_resi_base',
            JSON.stringify(buildDefaultStorage())
        );
        localStorage.setItem('resiBaseRemovedStorage', LAST_REMOVED_STORAGE);
        //show welcome message
        // @ts-ignore
        systemMessage({
            title: 'Willkommen bei der ReSi-Codebase!',
            message: `Schön, dass Du dich entschlossen hast, die ReSi-Codebase zu nutzen!<br><br>
Du kannst jeden Modul einzeln aktivieren, die Möglichkeit findest Du in einem Einstellungs-Panel, welches Du über die Seitenleiste aufrufen kannst.<br>
Probier doch einfach mal alle Module aus. Wenn Du nicht weißt, was ein Modul tut, dann klick einfach auf das [?] hinter dem Namen, damit kommst Du zur Wikiseite des Moduls.<br><br>
Fehler bitte im Forum melden - oder im Thread ReSi-Codebase auf Discord im Bereich <code>#skripting</code><br><br>
Gerne kannst du auch unserem Discord-Server beitreten: <i class="bi bi-discord"></i> <a href="https://discord.gg/8FyA6HBbXs" target="_blank" class="no-prevent">discord.gg/8FyA6HBbXs</a><br><br>

<b>Bitte beachte: die Browser Safari und Internet Explorer werden derzeit nicht unterstützt! Die meisten Module werden auch in diesen Browsern funktionieren, jedoch wird für diese Browser kein Support angeboten.</b>

Viel Spaß,<br>
Dein Team der ReSi-Codebase`,
            type: 'info'
        });
    }
}