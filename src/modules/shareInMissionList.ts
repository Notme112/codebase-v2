import { ReSiCodebaseSettingsType } from "../types/codebase";
export async function shareInMissionList(s: ReSiCodebaseSettingsType): Promise<void> {
    document.querySelectorAll('#missions .mapLocate').forEach(e => {
        let newEl = document.createElement('i');
        newEl.classList.add('bi', 'bi-share-fill');
        newEl.addEventListener('click', () => { 
            fetch('api/shareMission', {
                method: 'POST',
                body: JSON.stringify({userMissionID: e?.parentElement?.parentElement?.getAttribute('usermissionid')})
            });
            e.remove();
        });
        e.after(newEl)
    });
}