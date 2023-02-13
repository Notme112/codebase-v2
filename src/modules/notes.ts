import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function notes(s: ReSiCodebaseSettingsType): Promise<void> {
    if(!localStorage.notesNiZi) localStorage.notesNiZi = "Notizen";
    var btn = document.querySelector("#darkMode");
    btn?.addEventListener("click", function() {if(localStorage.getItem("darkmode_resi_base") == "true"){localStorage.setItem("darkmode_resi_base", "false");}else{localStorage.setItem("darkmode_resi_base", "true");};});
    let li = document.createElement('li');
    li.id = "notes_nizi";
    document.querySelector('#darkMode')?.after(li);
    document.querySelector("#notes_nizi")?.addEventListener("click", () => {
        //@ts-ignore
        openFrame("", "1/1/4/4");
        let frame = document.querySelector<HTMLIFrameElement>("#iframe");
        frame?.addEventListener("load", () => {
            let body = frame?.contentDocument?.querySelector("body");
            if(!(body instanceof HTMLElement)) return;
            body.innerHTML = `<script src='https://rettungssimulator.online/js/jquery-3.5.0.min.js'></script>
            <script src="https://rettungssimulator.online/js/frame.js?v=0.6.1e" charset="utf-8"></script><script>
            if(localStorage.getItem('darkmode_resi_base')=='true'){document.getElementsByTagName('body')[0].classList.add('dark');};
            </script>
            <link rel='stylesheet' href='css/index.css?v=0.6a' charset='utf-8'>
            <div class='detail-header'>
            <div class='detail-title'>Notizen</div>
            <div class='detail-subtitle'>Deine eigenen Notizen</div>
            </div>
            <textarea class='input-round' rows='10' autocomplete='off' id='notes_nizi_resi'>${localStorage.notesNiZi}</textarea>
            <button class='button button-round button-success' onclick='localStorage.notesNiZi = $("#notes_nizi_resi").val(); parent.closeFrame()'>Speichern</button>`;
        });
    });
}