import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function shortlinks(s: ReSiCodebaseSettingsType): Promise<void> {
    let div = document.createElement('div');
    div.classList.add('button-split');
    div.innerHTML = `<a target="_blank" href="https://forum.rettungssimulator.online/" class="no-prevent button button-round button-success button-w100"><center>Forum</center></a>
    <a target="_blank" href="https://wiki.rettungssimulator.online/" class="no-prevent button button-round button-success button-w100"><center>Wiki</center></a>
    <a target="_blank" href="https://rettungssimulator.online/faq" class="no-prevent button button-round button-success button-w100"><center>FAQ</center></a>`;
    document.querySelector('#ad')?.append(div);
}