import { getAPI } from "../generalFunctions/getAPI";
import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function associationDashboard(s: ReSiCodebaseSettingsType): Promise<void> {
    const buildingTypes:any = {
        4: 'Krankenhaus'
    }
    const roles:any = {
        1: 'Admin',
        2: 'Co-Admin',
        3: 'Schuldirektor',
        4: 'Mitglied'
    }
    const apidata:any = getAPI('association');
    let li = document.createElement('li');
    li.id = 'associationDashboard';
    li.innerHTML = 'Verbandsdashboard';
    document.querySelector('#darkMode')?.after(li);
    var text = `
                <script src='https://rettungssimulator.online/js/jquery-3.5.0.min.js'></script>
                <link rel='stylesheet' href='css/index.css?v=0.6a' charset='utf-8'>
                <script src='https://rettungssimulator.online/js/index.js?v=0.7.1a'></script>
                <script src='https://rettungssimulator.online/js/iframe.js?new=true&v=0.6.1e'></script>
                <script src='https://rettungssimulator.online/js/controlCenter.js?v=0.6.1e'></script>
                <script src="https://rettungssimulator.online/js/popper.js?v=0.7l" charset="utf-8"></script>
                <script src='https://rettungssimulator.online/js/tippy.js?v=0.6.1e'></script>
                <script>
                if(localStorage.getItem('darkmode_resi_base') == 'true') document.body.classList.add('dark')
                </script>
                <div class='detail-header'>
                <div class='detail-title'>Verbands-Statistiken <div class='right' onclick='window.parent.closeFrame()'> X </div></div>
                <div class='detail-subtitle'>Schau dir hier Verbands-Statistiken an!</div></div>`;
    text += `<h2>Team</h2>`;
    text += `<table class="striped table-divider">
               <thead>
                 <th>Name</th>
                 <th>Position</th>
                 <th>Onlinestatus</th>
               </thead>
             <tbody>`;
    var user = `<table class="striped table-divider">
               <thead>
                 <th>Name</th>
                 <th>Onlinestatus</th>
               </thead>
             <tbody>`;
    var adminOnline = 0;
    var coadminOnline = 0;
    var schooldirektorOnline = 0;
    var onlineUser = 0;
    apidata.associationUsers.forEach((obj:any) => {
        if(obj.associationRoleID != 4){
            text += `<tr><td>${obj.userName}</td><td>${roles[obj.associationRoleID]}</td><td>${obj.isOnline ? '<span class="label label-success">Online</span>' : '<span class="label label-danger">Offline</span>'}</td></tr>`
            if(obj.isOnline){
                switch(obj.associationRoleID){
                    case 1:
                        adminOnline++;
                        break;
                    case 2:
                        coadminOnline++;
                        break;
                    case 3:
                        schooldirektorOnline++;
                        break;
                }
            }
        };
        user += `<tr><td>${obj.userName}</td><td>${obj.isOnline ? '<span class="label label-success">Online</span>' : '<span class="label label-danger">Offline</span>'}</td></tr>`;
        if(obj.isOnline) onlineUser++
    })
    text += `</tbody></table>`;
    user += `</tbody></table>`;
    text += `<h2>Status</h2>
             Verbandsname: ${apidata.associationName}<br>
             Admin's online: ${adminOnline}<br>
             Co-Admin's online: ${coadminOnline}<br>
             Schuldirektoren online: ${schooldirektorOnline}<br>
             Mitglieder online: ${onlineUser}<br>
             Mitglieder gesamt: ${apidata.associationUsers.length}<br>
             Geteilte Geb채ude: ${apidata.associationSharedBuildings.length}<br>
             ID: ${apidata.associationID}<br>
             Münzen (gesamt verdient): ${apidata.associationMuenzenTotal}<br>
             Münzen (aktull in der Kasse): ${apidata.associationMuenzenBank}
             `
    text += `<h2>Mitglieder</h2>
    ${user}`;
    text += `<h2>Verbandsgeb채ude</h2>`;
    var b = `<table class="striped table-divider">
               <thead>
                 <th>Typ</th>
                 <th>Name</th>
                 <th>Adresse</th>
               </thead>
             <tbody>`;
    apidata.associationSharedBuildings.forEach((obj:any) => {
        b += `<tr><td>${buildingTypes[obj.buildingType]}</td><td>${obj.userBuildingName}</td><td>${obj.address}</td></tr>`
    })
    b += `</tbody></table>
          <i>Werte aktualisieren sich bei neuladen mit Strg + F5 oder Strg + Umschalt + R</i>`
    text += b;
    li.addEventListener('click', () => {
        //@ts-ignore
        openFrame('', '1/1/4/5');
        const frame = document.querySelector<HTMLIFrameElement>('#iframe');
        let div = document.createElement('div');
        div.classList.add('panel-body');
        div.innerHTML = text;
        frame?.addEventListener('load', () => {
            frame.contentDocument?.body.append(div);
        });
    });
}