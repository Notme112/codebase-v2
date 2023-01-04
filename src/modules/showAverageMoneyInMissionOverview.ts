import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function showAverageMoneyInMissionOverview(s: ReSiCodebaseSettingsType): Promise<void> {
    if(!location.pathname.includes("/missionOverview")) return;
    function getAverageMissionCredits(){
        let list = document.querySelectorAll('table > tbody > tr > td:nth-child(3) > a');
        let sum = 0;
        list.forEach((el) => {
            sum += parseInt(el.innerHTML.replaceAll('.', ''))
        })
        return (sum / list.length).toFixed(2);
    }
    let newElement = document.createElement("span");
    newElement.classList.add('label', 'label-info');
    newElement.innerHTML = `Durchschnittlicher Verdienst pro Einsatz: ${getAverageMissionCredits()} Münzen`;
    document.querySelector('.detail-subtitle')?.append(newElement)
}