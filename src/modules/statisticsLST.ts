import { getAPI } from "../generalFunctions/getAPI";
import { scriptInfo } from "../generalFunctions/scriptInfo";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function statisticsLST(s: ReSiCodebaseSettingsType): Promise<void>{
    if (!localStorage.counterConfig) localStorage.counterConfig = JSON.stringify({
        dayReset: (new Date()).getDate(),
        yearReset: (new Date()).getFullYear(),
        missionsToday: 0,
        missionsYear: 0,
        moneyToday: 0,
        moneyYear: 0,
        patientsToday: 0,
        patientsYear: 0
    });
    if (document.querySelectorAll('#tab_controlCenter_stats').length && location.pathname.includes('/department/')) {
        var config = JSON.parse(localStorage.counterConfig)
        //vehicles
        const userVehicles = await getAPI('userVehicles', false);
        const vehicleCategories = await getAPI('vehicleCategories', false);
        // @ts-ignore
        for (var i in userVehicles) {
            // @ts-ignore
            for (var j in vehicleCategories) {
                // @ts-ignore
                if (!vehicleCategories[j].count) vehicleCategories[j].count = 0
                // @ts-ignore
                if (vehicleCategories[j].ids.includes(userVehicles[i].vehicleID)) {
                    // @ts-ignore
                    ++vehicleCategories[j].count;
                }
            }
        }
        //buildings
        const userBuildings = await getAPI('userBuildings', false);
        const buildingCategories = await getAPI('buildings', false);
        // @ts-ignore
        userBuildings.forEach((el) => {
            // @ts-ignore
            if (!buildingCategories[(el.buildingType - 1)].count) buildingCategories[(el.buildingType - 1)].count = 0
            // @ts-ignore
            buildingCategories[(el.buildingType - 1)].count++
        })
        //insert into #tab_controlCenter_stats
        var table = `<table class="table-divider striped"><thead><tr><th><u>Wachentyp</u></th><th><u>Anzahl</u></th></tr></thead></tbody>`;
        // @ts-ignore
        buildingCategories.forEach((el) => {
            table += `<tr><td>${el.buildingName}</td><td>${el.count ? el.count : 0}</td></tr>`;
        });
        table += `</tbody><thead><tr><th><u>Fahrzeugtyp</u></th><th><u>Anzahl</u></th></tr></thead><tbody>Test`;
        // @ts-ignore
        for (i in vehicleCategories) {
            // @ts-ignore
            if (!vehicleCategories[i].ids.length || vehicleCategories[i].ids[0]>10000) continue;
            console.log(i)
            table += `<tr><td>`;
            // @ts-ignore
            table += vehicleCategories[i].name + `</td><td>`;
            // @ts-ignore
            table += vehicleCategories[i].count ? vehicleCategories[i].count : 0;
            table += `</td></tr>`;  
        }
        table += `</tbody><br><thead><tr><th><u>Typ</u></th><th><u>Anzahl</u></th></tr></thead><tbody><tr><td>Einsätze heute</td><td>${config.missionsToday.toLocaleString()}</td></tr><tr><td>Einsätze dieses Jahr</td><td>${config.missionsYear.toLocaleString()}</td></tr><tr><td>Patienten heute</td><td>${config.patientsToday.toLocaleString()}</td></tr><tr><td>Patienten dieses Jahr</td><td>${config.patientsYear.toLocaleString()}</td></tr><tr><td>Münzen heute</td><td>${config.moneyToday.toLocaleString()}</td></tr><tr><td>Münzen dieses Jahr</td><td>${config.moneyYear.toLocaleString()}</td></tr></tbody></table>`;
        //new Element
        let newElement = document.createElement('div');
        newElement.innerHTML = table;
        document.querySelector('#tab_controlCenter_stats')?.append(newElement)
        //change label
        let label = document.querySelector<HTMLElement>('#tab_controlCenter_stats')?.querySelector<HTMLElement>('.label');
        if(label) label.style.textDecoration = 'strike-through'
    }
    if (location.pathname == '/') {
        const config = JSON.parse(localStorage.counterConfig);

        function changeConfig(type: string, plus = 1) {
            if (config.yearReset != (new Date()).getFullYear()) {
                for (i in config) {
                    if (i.includes('Year')) continue
                    config[i] = 0;
                }
                config.yearReset = (new Date()).getFullYear();
                config.dayReset = (new Date()).getDate();
            }
            if (config.dayReset != (new Date()).getDate()) {
                for (var i in config) {
                    if (i.includes('Year')) continue
                    config[i] = 0
                }
                config.dayReset = (new Date()).getDate();
            }
            if (type) {
                switch (type) {
                    case 'patients':
                        config.patientsToday++;
                        config.patientsYear++;
                        break;
                    case 'money':
                        config.moneyToday += plus;
                        config.moneyYear += plus;
                        break;
                    case 'missions':
                        config.missionsToday++;
                        config.missionsYear++
                        break;
                    default:
                        console.error(`Unknown config type "${type}" => changeConfig@Statistics LST (V${scriptInfo.version})`);
                }
            }
            localStorage.counterConfig = JSON.stringify(config)
        }
        // @ts-ignore
        socket.on('patientStatus', async (e) => {
            // @ts-ignore
            if (((e.treatmentUserVehicleID == null || await getAPI(`userVehicles?id=${e.treatmentUserVehicleID}`)).status == 'error') && (e.transportUserVehicleID != null || await getAPI(`userVehicles?id=${e.transportUserVehicleID}`)).status == 'error') return;
            if (e.userPatientStatus == 3)
                changeConfig('patients')
        });
        var actual = parseInt(document.querySelector<HTMLElement>('.muenzen')?.textContent?.replaceAll('.', '') || '0');
        // @ts-ignore
        socket.on('muenzenUpdate', (e) => {
            e = parseInt(e.toString().replaceAll('.', ''))
            actual = parseInt(actual.toString().replaceAll('.', ''))
            if (e>actual) {
                var diff = e - actual;
                changeConfig('money', diff)
            }
            actual = e;
        });
        // @ts-ignore
        socket.on('finishMission', (e: any) => {
            // @ts-ignore
            let mission = ControlCenter.missions[e];
            if (!mission || (mission.isShared && !mission.ownParticipation)) return;
            changeConfig('missions')
        });
    }
}