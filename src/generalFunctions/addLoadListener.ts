import { loadCodebaseFrame } from "../iframeFunctions/loadCodebaseFrame";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export function addLoadListener(element:HTMLElement, frame:HTMLIFrameElement, s:ReSiCodebaseSettingsType){
    element.addEventListener('click', async () => {
        // @ts-ignore
        openFrame('', '1/1/4/5');
        frame?.addEventListener('load', () => loadCodebaseFrame(frame, s));
    });
}