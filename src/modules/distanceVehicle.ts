import {
    ReSiCodebaseSettingsType
} from "../types/codebase";

export async function distanceVehicle(s: ReSiCodebaseSettingsType): Promise<void> {
    if (!location.pathname.includes('/mission/')) return;
    let distance = s.distaceVehicle ? s.distaceVehicle.distance : 10;
    function applyFilter(dis: number){
        const elements = document.getElementsByClassName('mission-vehicle')
        const KMs = document.getElementsByClassName('vehicle-distance')
        for(let i = 0; i < elements.length; i++){
            let e = elements[i];
            let km = KMs[i];
            if(!(km instanceof HTMLElement)) return;
            if(parseFloat(km.innerText.trim().replace('~', '')) > dis){
                if(!(e instanceof HTMLElement)) return;
                e.classList.remove('vehicle');
                e.style.display = 'none';
            }else{
                if(!e.classList.contains('vehicle')){
                    if(!(e instanceof HTMLElement)) return;
                    e.classList.add('vehicle');
                    e.style.display = '';
                };
            };
        }
        //@ts-ignore
        updateAAOButtons()
    };
    if (s.filterKMActualActive) applyFilter(distance ? distance : 10)
    else applyFilter(1000000);
    let newElement = document.createElement('div');
    newElement.innerHTML = `<button class="button button-round button-${s.filterKMActualActive ? 'success' : 'danger'}" id="toggleVehicleFilter">Fahrzeuge ${s.filterKMActualActive ? 'nicht ' : ''}filtern</button>`
    document.querySelector('.enroute')?.before(newElement)
    document.querySelector('#toggleVehicleFilter')?.addEventListener('click', () => {
        s.filterKMActualActive = !s.filterKMActualActive;
        localStorage.storage_resi_base = JSON.stringify(s)
        if (s.filterKMActualActive) {
            applyFilter(distance ? distance : 10)
            let element = document.querySelector('#toggleVehicleFilter');
            element?.classList.remove('button-danger')
            element?.classList.add('button-success')
            if (element) element.innerHTML = 'Fahrzeuge nicht filtern';
        } else {
            applyFilter(1000000)
            let element = document.querySelector('#toggleVehicleFilter');
            element?.classList.add('button-danger')
            element?.classList.remove('button-success')
            if (element) element.innerHTML = 'Fahrzeuge filtern';
        }
    })
}