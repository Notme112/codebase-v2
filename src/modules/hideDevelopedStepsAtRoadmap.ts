import {
    ReSiCodebaseSettingsType
} from "../types/codebase";

export async function hideDevelopedStepsAtRoadmap(s: ReSiCodebaseSettingsType): Promise<void> {
    if (!location.href.includes('/roadmap')) return;
    let element = document.querySelector<HTMLElement>('.label-success')?.parentElement?.parentElement?.parentElement;
    if (element) element.style.display = 'none';
    let element2 = element?.nextElementSibling;
    if (element2 && element2 instanceof HTMLElement) element2.style.display = 'none';
}