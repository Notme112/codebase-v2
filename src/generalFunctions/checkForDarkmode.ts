import { variableIsIncorrect } from "./variableError";

export function checkForDarkmode(){
    if (location.pathname == '/') {
        let darkModeBtn = document.querySelector('#darkMode');
        if (!darkModeBtn) {
            variableIsIncorrect('darkModeBtn', darkModeBtn);
        }
        try {
            if (darkModeBtn?.innerHTML?.includes('Tag'))
                localStorage.setItem('darkmode_resi_base', 'true');
            else localStorage.setItem('darkmode_resi_base', 'false');
        } catch {
            console.error('Darkmode-Button nicht gefunden');
        };
        darkModeBtn?.addEventListener('click', () => {
            if (localStorage.getItem('darkmode_resi_base') == 'true')
                localStorage.setItem('darkmode_resi_base', 'false');
            else localStorage.setItem('darkmode_resi_base', 'true');
        });
    };
}