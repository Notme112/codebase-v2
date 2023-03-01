import { hideLoader } from "../generalFunctions/hideLoader";
import { showLoader } from "../generalFunctions/showLoader";

export async function loadScript(name: string, context: HTMLIFrameElement){
    showLoader();
    context.contentWindow?.parent.document
    let script = document.createElement('script');
    try {
        //@ts-ignore
        script.innerHTML = await (await fetch('https://rettungssimulator.online/js/' + name + '?v='+ ReSi.resiVersion)).text()
    } catch (error) {
        console.error('Error while fetching script: ' + name + '%e')
        return false;
    }
    context.contentDocument?.body?.appendChild(script);
    hideLoader();
}