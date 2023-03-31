import {
    ReSiCodebaseSettingsType
} from "../types/codebase";

export async function distanceVehicle(s: ReSiCodebaseSettingsType): Promise<void> {
    if (!location.pathname.includes('/mission/')) return;
    let distance = s.distaceVehicle.distance ?? 10;
    let onlyHideAAO = s.distaceVehicle.onlyHideAAO ?? false;
    function applyFilter(dis: number){
        const elements = document.querySelectorAll<HTMLElement>('.mission-vehicle') ?? [];
        const KMs = document.querySelectorAll('.vehicle-distance') ?? [];
        const wasAAOIgnored: any = {};
        for(let i = 0; i < elements.length; i++){
            let e = elements[i];
            if(e.getAttribute('ignoreaao')) wasAAOIgnored[e.getAttribute('uservehicleid') ?? '.'];
            //@ts-ignore
            if(parseFloat(KMs[i].innerText.trim().replace('~', '')) > dis){
                if(!onlyHideAAO){
                    e.classList.remove('vehicle');
                    e.style.display = 'none';
                } else {
                    document.querySelector('#mission-vehicle-group-by-vehicle [uservehicleid="'+e.getAttribute('uservehicleid')+'"]')?.setAttribute('ignoreaao', '');
                }
            } else {
                if(!e.classList.contains('vehicle')){
                    e.classList.add('vehicle');
                    e.style.display = '';
                } else if(!wasAAOIgnored[e.getAttribute('uservehicleid') ?? '0'] && document.querySelector('#mission-vehicle-group-by-vehicle [uservehicleid="'+e.getAttribute('uservehicleid')+'"]')?.getAttribute('ignoreaao')) document.querySelector('#mission-vehicle-group-by-vehicle [uservehicleid="'+e.getAttribute('uservehicleid')+'"]')?.removeAttribute('ignoreaao');

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
            applyFilter(distance ?? 10)
            let element = document.querySelector('#toggleVehicleFilter');
            if(!element) return;
            element.classList.remove('button-danger')
            element.classList.add('button-success')
            element.innerHTML = 'Fahrzeuge nicht filtern';
        } else {
            applyFilter(1000000)
            let element = document.querySelector('#toggleVehicleFilter');
            if(!element) return;
            element.classList.add('button-danger')
            element.classList.remove('button-success')
            element.innerHTML = 'Fahrzeuge filtern';
        }
    });
    document.querySelectorAll('.mission-vehicles').forEach((el) => {
        let visibleOne = false;
        Array.from(el.children).forEach((child) => {
            if(visibleOne) return;
            if(!(child instanceof HTMLElement)) return;
            if(child.style.display != 'none') visibleOne = true;
        });
        if(!el.parentElement) return;
        if(!visibleOne) el.parentElement.style.display = 'none'
        else el.parentElement.style.display = '';
    });
}