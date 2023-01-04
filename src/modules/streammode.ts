import { variableIsIncorrect } from "../generalFunctions/variableError";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function streammode (s: ReSiCodebaseSettingsType): Promise<any> {
    let element = document.querySelector<HTMLElement>("#chat");
    if (!element) {
        variableIsIncorrect('element (streammode)', element)
        return;
    }
    element.innerHTML = s?.text?.stream_mode?.toString() || '';
    element.style.padding = '15px';
}