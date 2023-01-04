import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function averageMoneyInMissionOverview(s: ReSiCodebaseSettingsType): Promise<void> {
    if(!location.pathname.includes('/missionOverview/')) return;
    function getAverageMissionCredits(){
        let list = document.querySelectorAll('table > tbody > tr > td:nth-child(3) > a');
        let sum = 0;
        list.forEach((el) => {
            sum += parseInt(el.innerHTML.replaceAll('.', ''))
        })
        return (sum / list.length).toFixed(2);
    }
    let span = document.createElement('span');
    span.innerHTML = `Durchschnittlicher Verdienst pro Einsatz: ${getAverageMissionCredits()} Münzen`;
    span.classList.add('label label-info')
    document.querySelector('.detail-subtitle')?.append(span);
}