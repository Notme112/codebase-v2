import { ReSiCodebaseSettingsType } from "../types/codebase";

export async function einsatzlisteMax(s: ReSiCodebaseSettingsType): Promise<void> {
    let element = document.querySelector('#missions .panel-expand');
    if (element?.firstChild && element.firstChild instanceof HTMLElement) element.firstChild?.click();
}