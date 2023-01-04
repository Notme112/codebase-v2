import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function mapMode(s: ReSiCodebaseSettingsType): Promise<void> {
    function toggleBigMap(){
        //@ts-ignore
        setTimeout(toggleMap, 1000)
        document.querySelector('header')?.remove();
    };
    if(window.location.href.endsWith('#map=true') || window.location.href.endsWith('&map=true') || window.location.href.includes('#map=true') || window.location.href.includes('&map=true')){
        document.addEventListener('load', toggleBigMap)
    } else {
        let span = document.createElement('span');
        span.innerHTML = '<a href="https://rettungssimulator.online#map=true" class="button button-success button-round no-prevent" style="width:50%" target="_blank">Karte in großem Fenster öffnen</a>';
        document.querySelector('#ad')?.appendChild(span)
    };
}