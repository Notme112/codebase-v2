import {
    buildDefaultStorage
} from "../generalFunctions/buildDefaultStorage";
import {
    reload
} from "../generalFunctions/reload";

export function showStorage() {
    let table = '<table class="table-divider striped"><thead><tr><th>Key</th><th>Wert</th></tr><tbody>'
    for (var i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (!key) continue;
        table += `<tr><td>${key}</td><td>${localStorage[key]}</td><td onclick='localStorage.removeItem("${key}");$(this).parent().remove()'>löschen <i class="bi bi-trash"></i></td></tr>`
    }
    var table2 = '<table class="table-divider striped"><thead><tr><th>Session-Storage: Key</th><th>Value</th></tr><tbody>'
    for (var i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        if (!key) continue;
        table2 += `<tr><td>${key}</td><td>${sessionStorage[key]}</td><td onclick='sessionStorage.removeItem("${key}");$(this).parent().remove()'>löschen <i class="bi bi-trash"></i></td></tr>`
    }
    table += '</tbody></table>'
    table2 += '</tbody></table>'
    // @ts-ignore
    let tableModal = () => noticeModal('Gescheicherte Daten', `Hier siehst du, welche Daten im sog. local- & session-Storage gespeichert wurden. Davon ausgenommen sind sog. indexDB und Cookies<div style="height: 200px;overflow:auto">${table}${table2}</div><div>Session-Storage löschen: <button class="button button-round button-danger deleteSessionStorage">Daten unwiederruflich löschen <i class="bi bi-trash"></i></button></div><div>Local-Storage löschen: <button class="button button-round button-danger deleteLocalStorage">Daten unwiederruflich löschen <i class="bi bi-trash"></i></button></div><div>Session- & Local-Storage löschen: <button class="button button-round button-danger deleteAllStorage">Daten unwiederruflich löschen <i class="bi bi-trash"></i></button></div>`);
    tableModal();
    document.querySelector('.deleteLocalStorage')?.addEventListener('click', () => {
        // @ts-ignore
        modal(
            'Local-Storage wirklich leeren?',
            'Willst du den Local-Storage wirklich löschen? Dabei gehen alle <b>permanenten</b> Daten von Scripten und ähnlichem <b>unwiederruflich</b> verloren!',
            'Ja, <b>unwiederruflich LÖSCHEN <i class="bi bi-trash"></i></b>',
            'Nein, abbrechen',
            () => {
                localStorage.clear();
                localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
                tableModal();
                reload();
            },
            () => {
                tableModal();
            }
        )
    });
    document.querySelector('.deleteSessionStorage')?.addEventListener('click', () => {
        // @ts-ignore
        modal('Session-Storage wirklich leeren?',
            'Willst du den Session-Storage wirklich löschen? Dabei gehen alle <b>temporären</b> Daten von Scripten und ähnlichem <b>unwiederruflich</b> verloren!',
            'Ja, <b>unwiederruflich LÖSCHEN <i class="bi bi-trash"></i></b>',
            'Nein, abbrechen',
            () => {
                sessionStorage.clear();
                localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
                tableModal();
                reload();
            },
            () => {
                tableModal();
            }
        );
    });
    document.querySelector('.deleteAllStorage')?.addEventListener('click', () => {
        // @ts-ignore
        modal('Session- und Local-Storage wirklich leeren?',
            'Willst du den Session-Storage und Local-Storage wirklich löschen? Dabei gehen alle <b>temporären</b> und <b>permanenten</b> Daten von Scripten und ähnlichem <b>unwiederruflich</b> verloren!',
            'Ja, <b>unwiederruflich LÖSCHEN <i class="bi bi-trash"></i></b>',
            'Nein, abbrechen',
            () => {
                sessionStorage.clear();
                localStorage.storage_resi_base = JSON.stringify(buildDefaultStorage());
                tableModal();
                reload();
            },
            () => {
                tableModal();
            }
        );
    });
}