import { variableIsIncorrect } from "../generalFunctions/variableError";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function filterKH(s: ReSiCodebaseSettingsType): Promise<void>{
    let containsUebernehmen = Array.from(document.querySelectorAll('.label-info')).filter((e) => e.innerHTML.includes('übernommen'));
    let containsKrankenhauszuweisung = Array.from(document.querySelectorAll('.card-headline')).filter((e) => e.innerHTML.includes('Krankenhauszuweisung'));
    let containsWLF = Array.from(document.querySelectorAll('.tab')).filter((e) => e.innerHTML.includes('WLF'));
    if ((document.querySelectorAll('.s5').length > 0 && location.pathname.includes('vehicle') && containsKrankenhauszuweisung.length > 0 && containsWLF.length == 0) || containsUebernehmen.length > 0) {
        let val = s?.filterKHSettings?.maxDistanceKH || 0;
        let own = s?.filterKHSettings?.ownKH;
        let alli = s?.filterKHSettings?.alliKH;
        let active = s?.filterKHActive || false;
        let newElement = document.createElement("button");
        newElement.classList.add('button', 'button-round', 'button-danger');
        newElement.id = 'changeFilterKHMode';
        newElement.innerHTML = 'Filter aktivieren';
        document.querySelector('.card')?.after(newElement);
        if (s?.filterKHSettings ? s?.filterKHSettings?.showPatientsInfo : false) {
            let el = document.querySelector<HTMLElement>('.card');
            if (el) {
                el.style.display = 'none';
            }
        }
        if (s?.filterKHSettings ? s?.filterKHSettings?.hidePatientsRelease : false){
            let el = document.querySelector<HTMLElement>('#releasePatient');
            if (el) {
                el.style.display = 'none';
            }
        }
        function addFilter() {
            let progressBoxes = document.querySelectorAll<HTMLElement>('.box-progress');
            for (var i = 1; i < progressBoxes?.length + 1; i++) {
                if (document.querySelector('#releasePatient') === progressBoxes[i]) continue;
                var j = 1 + (i * 2) - 1;
                let element = document.querySelectorAll('.box-text')[j];
                if (!element || !(element instanceof HTMLElement)) {
                    continue;
                }
                var entf = parseInt(element?.textContent?.replace(' km', '') || "0");
                if (entf < val) {
                    if (progressBoxes[i].innerHTML.includes('<span class="label label-info label-round text-small">')) {
                        if (alli) {
                            progressBoxes[i].style.display = "flex";
                        } else {
                            progressBoxes[i].style.display = "none";
                        }
                    } else if (own) {
                        progressBoxes[i].style.display = "flex";
                    } else {
                        progressBoxes[i].style.display = "none";
                    };
                } else {
                    progressBoxes[i].style.display = "none";
                }
            }
        }
        function removeFilter() {
            let progressBoxes = document.querySelectorAll<HTMLElement>('.box-progress');
            progressBoxes.forEach((e) => {
                e.style.display = "flex";
            })
            if (s.filterKHSettings ? s.filterKHSettings.hidePatientsRelease : false) {
                let el = document.querySelector<HTMLElement>('#releasePatient')
                if(el) {
                    el.style.display = 'none';
                }
            }
        };
        let element = document.querySelector<HTMLElement>('#changeFilterKHMode');
        if (!element) {
            variableIsIncorrect('#changeFilterKHMode', element);
            return;
        }
        element?.addEventListener('click', function () {
            if (element?.classList.contains('button-danger')) {
                addFilter();
                element?.classList.remove('button-danger')
                element?.classList.add('button-success')
                element.textContent = 'Filter aktiviert';
                s.filterKHActive = true;
            } else {
                removeFilter();
                element?.classList.remove('button-success');
                element?.classList.add('button-danger');
                if (!element) return;
                element.textContent = 'Filter deaktiviert';
                s.filterKHActive = false;
            }
            localStorage.storage_resi_base = JSON.stringify(s)
        });

        if (active) {
            element?.click();
        }
    } else {
        return;
    };
}