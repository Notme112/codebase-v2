import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function filterAssociationMembers(s: ReSiCodebaseSettingsType): Promise<void> {
    if(!window.location.pathname.startsWith('/association/')) return;
    let element = Array.from(document.querySelectorAll('.card')).filter(e => e.innerHTML.includes('Verbandsleitung'))[0];
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<label for="showAbsent">Inaktive Mitglieder anzeigen (funktioniert nur bei (Co-)Admins) <input type="checkbox" id="showAbsent" checked></label><br>
    <label for="showAdmins">(Co-)Admins anzeigen <input type="checkbox" id="showAdmins" checked></label><br>
    <label for="showTeam">Schuldirektoren anzeigen <input type="checkbox" id="showTeam" checked></label><br>
    <label for="showOnline">Online Mitglieder anzeigen <input type="checkbox" id="showOnline" checked></label><br>
    <label for="showOffline">Offline Mitglieder anzeigen <input type="checkbox" id="showOffline" checked></label>`;
    element.after(newDiv);
    function showParent(query:string, doupleParent:boolean = false){
        document.querySelectorAll<HTMLElement>(query).forEach(e => {
            if(!e.parentElement) return;
            if(!doupleParent){
                e.parentElement.style.display = 'none'
            } else {
                if(!e.parentElement.parentElement) return;
                e.parentElement.parentElement.style.display = 'none'
            }
        })
    }
    function hideParent(query:string, doupleParent:boolean = false){
        document.querySelectorAll<HTMLElement>(query).forEach(e => {
            if(!e.parentElement) return;
            if(!doupleParent){
                e.parentElement.style.display = 'block'
            } else {
                if(!e.parentElement.parentElement) return;
                e.parentElement.parentElement.style.display = 'block'
            }
        })
    }
    document.querySelectorAll<HTMLInputElement>('input').forEach(el => {
        el.addEventListener('change', (e) => {
            if(!(e.target instanceof HTMLInputElement)) return;
            switch(e.target?.id){
                case 'showAbsent':
                    if(e.target.checked) showParent('.toplist-absent')
                    else hideParent('.toplist-absent');
                    break;
                case 'showAdmins':
                    if(e.target.checked) showParent('.label-info:contains("Admin")', true)
                    else hideParent('.label-info:contains("Admin")', true)
                    break;
                case 'showTeam':
                    if(e.target.checked) showParent('.label-info:contains("Schul")', true)
                    else hideParent('.label-info:contains("Schul")', true)
                    break;
                case 'showOnline':
                    if(e.target.checked) showParent('.toplist-online')
                    else hideParent('.toplist-online')
                    break;
                case 'showOffline':
                    if(e.target.checked) showParent('.toplist-offline')
                    else hideParent('.toplist-offline')
                    break;
            };
        });
    });
}