import { variableIsIncorrect } from "../generalFunctions/variableError";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function einsatzzaehler(s: ReSiCodebaseSettingsType): Promise<void> {
    let today = (new Date()).getDate();
    if (!localStorage.getItem("finished_missions_nizi") || !localStorage.getItem("finished_missions_nizi_time")) {
        localStorage.setItem("finished_missions_nizi", "0")
        localStorage.setItem("finished_missions_nizi_time", today.toString())
    };
    if (localStorage.getItem("finished_missions_nizi_time") != today.toString()) {
        localStorage.setItem("finished_missions_nizi", "0")
        localStorage.setItem("finished_missions_nizi_time", today.toString())
    };
    let newElement = document.createElement("li");
    newElement.id = "finishedMissionsToday";
    newElement.innerHTML = `Einsätze heute: ${localStorage.getItem("finished_missions_nizi")}`;
    document.querySelector("#darkMode")?.after(newElement);
    // @ts-ignore
    socket.on("finishMission", (e) => {
        // @ts-ignore
        let mission = ControlCenter.missions[e];
        if (!mission || (mission.isShared && !mission.ownParticipation)) return;
        var missions = parseInt(localStorage.getItem("finished_missions_nizi") || "0");
        missions++;
        localStorage.setItem("finished_missions_nizi", missions.toString());
        let element = document.querySelector('#finishedMissionsToday')
        if (!element) {
            variableIsIncorrect('element (mission counter)', element);
            return;
        }
        element.innerHTML = `Einsätze heute: ${localStorage.getItem("finished_missions_nizi")}`;
    });
}