import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function uhr(s: ReSiCodebaseSettingsType): Promise<void> {
    let newElement = document.createElement("div");
    newElement.id = "clock";
    document.querySelector(".brand")?.appendChild(newElement);
    var updateClock = function () {
        var date = new Date();
        var stunde = date.getHours().toString();
        var minute = date.getMinutes().toString();
        if (minute.length == 1) {
            minute = `0${minute}`
        };
        newElement.innerHTML = `${stunde}:${minute} <i class="bi bi-clock"></i>`;
    };
    setInterval(updateClock, 50)
}