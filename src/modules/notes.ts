import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function notes(s: ReSiCodebaseSettingsType): Promise<void> {
    if(!localStorage.notesNiZi) localStorage.notesNiZi = "Notizen";
    if(location.pathname == '/'){
        let li = document.createElement('li');
        li.id = "notes_nizi";
        li.innerHTML = 'Notizen';
        document.querySelector('#darkMode')?.after(li);
        document.querySelector("#notes_nizi")?.addEventListener("click", () => {
            //@ts-ignore
            openFrame("script/NiZi112/notes", "1/1/4/4");
        });
    } else if (location.pathname == '/script/NiZi112/notes'){
        document.body.innerHTML = `<div class='detail-header'>
        <div class='detail-title'>Notizen</div>
        <div class='detail-subtitle'>Deine eigenen Notizen</div>
        </div>
        <textarea class='input-round' rows='10' autocomplete='off' id='notes_nizi_resi'>${localStorage.notesNiZi}</textarea>
        <button class='button button-round button-success' onclick='localStorage.notesNiZi = document.querySelector("#notes_nizi_resi").value; parent.closeFrame()'>Speichern</button>`;
    }
}