import { loadCodebaseFrame } from "../iframeFunctions/loadCodebaseFrame";
import { ReSiCodebaseSettingsType } from "../types/codebase";
import { variableIsIncorrect } from "./variableError";

export function addLoadListener(element:HTMLElement, frame:HTMLIFrameElement, s:ReSiCodebaseSettingsType){
    element.addEventListener('click', async () => {
        // @ts-ignore
        openFrame('', '1/1/4/5');
        if (!frame) {
            variableIsIncorrect('frame', frame);
        }
        frame?.addEventListener('load', () => loadCodebaseFrame(frame, s));
    });
}