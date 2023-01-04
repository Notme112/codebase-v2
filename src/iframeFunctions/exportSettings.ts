import { ReSiCodebaseSettingsType } from "../types/codebase";

export function exportSettings(s:ReSiCodebaseSettingsType){
    // @ts-ignore
    noticeModal('Codebase-Einstellungen exportieren <i class="bi bi-download"></i>', `Hier kannst du deine Einstellungen kopieren und an Freunde weitergeben:<div style='overflow:auto'><code>${JSON.stringify(s)}</code></div><br><button class="button button-round button-success" id="shareSettings">In Zwischenablage kopieren <i class="bi bi-clipboard"></i></button>`, 'Schließen')
    document.querySelector('#shareSettings')?.addEventListener('click', (e: Event) => {
        navigator.clipboard.writeText(JSON.stringify(s)).then(() => {
            if (!e.target) return;
            if (e.target instanceof HTMLElement) e.target.innerHTML = 'Kopiert! <i class="bi bi-clipboard-check"></i>';
            setTimeout(() => {
                if (!e.target) return;
                if (e.target instanceof HTMLElement) e.target.innerHTML = 'In Zwischenablage kopieren <i class="bi bi-clipboard"></i>';
            }, 3000);
        })
    });
}