import { loadCodebaseFrame } from "../iframeFunctions/loadCodebaseFrame";
import { ReSiCodebaseSettingsType } from "../types/codebase";

export function addLoadListener(element:HTMLElement){
    element.addEventListener('click', async () => {
        // @ts-ignore
        openFrame('/script/NiZi112/codebase-mainFrame', '1/1/4/5');
    });
}