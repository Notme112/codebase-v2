import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function nextFieldOnEnter(s: ReSiCodebaseSettingsType): Promise<void> {
    let inputs: HTMLInputElement[] = [], changeHadHappen = false, actualInput: HTMLInputElement | null = null;
    let openNewMission = s.nextFieldSettings.openMissionOnNextField;
    function save(){
        document.querySelector<HTMLElement>('#missionNewSave')?.click();
    }
    function open(){
        document.querySelector<HTMLElement>('#missionNewOpen')?.click();
    }
    function goToNextInput(originalInput: HTMLInputElement){
        if(!inputs) inputs = Array.from(document.querySelectorAll('input'));
        inputs.forEach((input, i) => {
            if(input == originalInput) {
                if(inputs[inputs.length - 1] == originalInput) {
                    if(openNewMission) open();
                    else save();
                } else inputs[i + 1].focus();
            }
        })
    }
    document.addEventListener('change', (e) => {
        if(!(e.currentTarget instanceof HTMLInputElement)) return;
        if(!changeHadHappen) {
            changeHadHappen = true;
            actualInput = e.currentTarget;
            setTimeout(() => {
                changeHadHappen = false
            }, 1000)
        } else {
            goToNextInput(e.currentTarget);
        };
    })
    document.addEventListener('click', (e) => {
        if(!(e.currentTarget instanceof HTMLElement) || !(e.currentTarget?.classList.contains('.autocomplete-element'))) return;
        if(!changeHadHappen) {
            changeHadHappen = true;
            setTimeout(() => {
                changeHadHappen = false
            }, 1000)
        } else {
            if(!actualInput) return;
            goToNextInput(actualInput);
            actualInput = null;
        };
    });
    document.addEventListener('keydown', (e) => {
        if(!(e.currentTarget instanceof HTMLInputElement)) return;
        if(e.keyCode != 13) return;
        goToNextInput(e.currentTarget)
    });
}