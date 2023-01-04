import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function bigMap(s: ReSiCodebaseSettingsType): Promise<void> {
    //@ts-ignore
    const CopyOfCloseFrame = closeFrame;
    //@ts-ignore
    closeFrame = function(){
        CopyOfCloseFrame();
        if(document.querySelector("#map")?.classList.contains("expanded")){
            //@ts-ignore
            toggleMap();
            //@ts-ignore
            toggleMap();
        }else{
            //@ts-ignore
            toggleMap();
        };
    }
    //@ts-ignore
    toggleMap();
}