import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function searchVehicle(s: ReSiCodebaseSettingsType){
    let vehicles = document.querySelectorAll<HTMLElement>('#mission-vehicle-group-by-vehicle .mission-vehicle, .mission-vehicles-group')
    vehicles.forEach(vehicle => {
        vehicle.classList.add('searchable');
    });
    let newElement = document.createElement("div");
    newElement.classList.add('card');
    newElement.innerHTML = `<div class="card-headline card-headline-danger">
    Fahrzeug-Suche
    </div>
    <div class="card-body">
      <div class="input-container">
        <div class="input-label">Name</div>
        <div class="input-content">
          <input class="input-round" type="text" id="vehicleSearch" placeholder="Suche eingeben..." autocomplete="off">
          <div class="input-icon"><i class="bi bi-funnel" data-tooltip="Icons by Fontawsome (fontawesome.com) unter CC BY 4.0 Lizenz"></i></div>
        </div>
      </div>
    </div>`
    document.querySelector('.enroute')?.before(newElement);
    document.querySelector<HTMLInputElement>('#vehicleSearch')?.addEventListener('keyup', (e) => {
        let search = document.querySelector<HTMLInputElement>('#vehicleSearch')?.value?.toLowerCase();
        if(!search) {
            vehicles.forEach(vehicle => {
                if(vehicle.classList.contains('mission-vehicles-group')) vehicle.style.display = 'block';
                else vehicle.style.display = 'flex';
            });
            return;
        }
        vehicles.forEach(vehicle => {
            if(!search) return;
            if (vehicle?.innerText?.toLowerCase()?.includes(search)) {
                if(vehicle?.classList?.contains('mission-vehicles-group')) vehicle.style.display = 'block';
                else vehicle.style.display = 'flex';
            } else {
                vehicle.style.display = 'none';
            }
        });
    });
}