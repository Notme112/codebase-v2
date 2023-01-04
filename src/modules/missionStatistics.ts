import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function missionStatistics(s: ReSiCodebaseSettingsType): Promise<void> {
    let data;

    function calcPercent() {
        let red = document.querySelectorAll('.mission-list-progress-1')?.length || 0;
        let yellow = document.querySelectorAll('.mission-list-progress-2')?.length || 0;
        let green = document.querySelectorAll('.mission-list-progress-3')?.length || 0;
        let aRed = document.querySelectorAll('#sharedMissions .mission-list-progress-1')?.length || 0;
        let aYellow = document.querySelectorAll('#sharedMissions .mission-list-progress-2')?.length || 0;
        let aGreen = document.querySelectorAll('#sharedMissions .mission-list-progress-3')?.length || 0;
        let oRed = document.querySelectorAll('#ownMissions .mission-list-progress-1')?.length || 0;
        let oYellow = document.querySelectorAll('#ownMissions .mission-list-progress-2')?.length || 0;
        let oGreen = document.querySelectorAll('#ownMissions .mission-list-progress-3')?.length || 0;
        let all = red + yellow + green;
        let rPer = Math.floor(red / all * 100);
        let yPer = Math.floor(yellow / all * 100);
        let gPer = Math.floor(green / all * 100);
        if (isNaN(rPer)) rPer = 0;
        if (isNaN(yPer)) yPer = 0;
        if (isNaN(gPer)) gPer = 0;
        document.querySelector('#missionPercent')?.setAttribute('data-tooltip', `Rot: ${red} (${rPer}%, eigene: ${oRed}, shared: ${aRed}),<br>Gelb: ${yellow} (${yPer}%, eigene: ${oYellow}, shared: ${aYellow}),<br>Grün: ${green} (${gPer}%, eigene: ${oGreen}, shared: ${aGreen})`)
    };
    let newElement = document.createElement('div');
    newElement.innerHTML = `<span id="mission-detail"><i class="bi bi-sliders"></i>:</span>`
    if (!document.querySelector('#mission-detail')) document.querySelector('#missions .panel-headline')?.prepend(newElement)
    let newElement2 = document.createElement('span');
    newElement2.id = 'missionPercent';
    newElement2.setAttribute('data-tooltip', '');
    newElement2.classList.add('bi', 'bi-info-circle', 'nizi112');
    newElement2.style.paddingLeft = '5px';
    document.querySelector('#mission-detail')?.append(newElement2);
    calcPercent();
    // @ts-ignore
    socket.on('missionStatus', () => {
        calcPercent();
    });
    // @ts-ignore
    socket.on('finishMission', () => {
        calcPercent();
    });
}