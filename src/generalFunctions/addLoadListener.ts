import { loadCodebaseFrame } from "../iframeFunctions/loadCodebaseFrame";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export function addLoadListener(element:HTMLElement, frame:HTMLIFrameElement, s:ReSiCodebaseSettingsType){
    element.addEventListener('click', async () => {
        // @ts-ignore
        openFrame('about:blank', '1/1/4/5');
        // @ts-ignore
        window['clickedCoodebase'] = true;
        setTimeout(() => {
            // @ts-ignore
            window['clickedCoodebase'] = false;
        }, 1000);
        frame?.addEventListener('load', () => loadCodebaseFrame(frame, s));
    });
}